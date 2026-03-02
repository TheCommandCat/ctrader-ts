/**
 * TLS/TCP connection to cTrader Open API (port 5035).
 *
 * Wire format (matching the official Python SDK):
 *   [4-byte big-endian length N][N bytes of serialized ProtoMessage]
 *
 * Heartbeat behaviour (matching the official Python SDK):
 *   - If no message sent for HEARTBEAT_IDLE_MS, send a ProtoHeartbeatEvent
 *   - When a heartbeat is received from the server, immediately echo one back
 *   - If no heartbeat received from server for HEARTBEAT_TIMEOUT_MS, close
 */

import * as tls from "node:tls";
import {
  CTraderError,
  NotConnectedError,
  RequestTimeoutError,
} from "./errors.js";
import type { ConnectionState, OAErrorPayload } from "./types.js";
import { PayloadType } from "./enums.js";
import {
  encodeMessage,
  encodeHeartbeat,
  decodeMessage,
  type DecodedMessage,
} from "./codec.js";

const REQUEST_TIMEOUT_MS = 15_000;
const HEARTBEAT_CHECK_MS = 1_000;
const HEARTBEAT_IDLE_MS = 10_000;
const HEARTBEAT_TIMEOUT_MS = 60_000;
const INITIAL_RECONNECT_DELAY_MS = 2_000;
const MAX_RECONNECT_DELAY_MS = 60_000;

interface PendingRequest {
  resolve: (payload: Record<string, unknown>) => void;
  reject: (error: Error) => void;
  timeout: ReturnType<typeof setTimeout>;
}

type PayloadHandler = (payload: Record<string, unknown>) => void;

export type ConnectionEvent = "stateChange" | "error" | "message";
type ConnectionEventHandler = (data: unknown) => void;

export interface CTraderConnectionConfig {
  /** Hostname, e.g. "demo.ctraderapi.com" */
  host: string;
  /** Port — default 5035 */
  port?: number;
  maxReconnectAttempts?: number;
  requestTimeoutMs?: number;
  /** Called after TCP reconnects (not initial connect). Use for re-auth + subscription restore. */
  onReconnect?: () => Promise<void>;
}

export class CTraderConnection {
  private socket: tls.TLSSocket | null = null;
  private readonly host: string;
  private readonly port: number;
  private readonly maxReconnectAttempts: number;
  private readonly requestTimeoutMs: number;
  private readonly onReconnect: (() => Promise<void>) | undefined;
  private hasConnectedOnce = false;

  private _state: ConnectionState = { status: "disconnected" };
  private shouldReconnect = false;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private reconnectAttempt = 0;

  private heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  private heartbeatCheckInterval: ReturnType<typeof setInterval> | null = null;
  private lastHeartbeatAt = 0;
  private lastSendAt = 0;

  /** Incoming data buffer for length-prefix framing */
  private recvBuffer = Buffer.alloc(0);

  private readonly pending = new Map<string, PendingRequest>();
  private readonly payloadHandlers = new Map<number, Set<PayloadHandler>>();
  private readonly eventHandlers = new Map<
    ConnectionEvent,
    Set<ConnectionEventHandler>
  >();

  constructor(config: CTraderConnectionConfig) {
    this.host = config.host;
    this.port = config.port ?? 5035;
    this.maxReconnectAttempts = config.maxReconnectAttempts ?? 0;
    this.requestTimeoutMs = config.requestTimeoutMs ?? REQUEST_TIMEOUT_MS;
    this.onReconnect = config.onReconnect;
  }

  get state(): ConnectionState {
    return this._state;
  }

  get isConnected(): boolean {
    return this._state.status === "connected" || this._state.status === "ready";
  }

  // ─── Connect ────────────────────────────────────────────────────────────

  connect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (
        this._state.status === "connected" ||
        this._state.status === "ready"
      ) {
        resolve();
        return;
      }

      this.shouldReconnect = true;
      this.reconnectAttempt = 0;
      this.setState({ status: "connecting", attempt: 1 });

      const socket = tls.connect({ host: this.host, port: this.port });
      this.socket = socket;

      const onSecureConnect = () => {
        cleanup();
        this.reconnectAttempt = 0;
        this.hasConnectedOnce = true;
        this.recvBuffer = Buffer.alloc(0);
        this.setState({ status: "connected", since: Date.now() });
        this.startHeartbeat();
        resolve();
      };

      const onError = (err: Error) => {
        cleanup();
        this.emit("error", err);
        reject(new Error(`TLS connection failed: ${err.message}`));
      };

      const cleanup = () => {
        socket.removeListener("secureConnect", onSecureConnect);
        socket.removeListener("error", onError);
      };

      socket.on("secureConnect", onSecureConnect);
      socket.on("error", onError);

      socket.on("data", (chunk: Buffer) => this.handleData(chunk));
      socket.on("close", () => {
        this.stopHeartbeat();
        this.rejectPending(new Error("Connection closed"));
        if (this._state.status !== "disconnected") {
          this.setState({ status: "disconnected" });
        }
        this.scheduleReconnect();
      });
    });
  }

  disconnect(): void {
    this.shouldReconnect = false;

    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    this.stopHeartbeat();
    this.rejectPending(new Error("Client disconnected"));

    if (this.socket !== null) {
      this.socket.destroy();
      this.socket = null;
    }

    this.setState({ status: "disconnected" });
  }

  // ─── Send ───────────────────────────────────────────────────────────────

  send(payloadType: number, payload?: Record<string, unknown>): string {
    if (this.socket === null || this.socket.destroyed) {
      throw new NotConnectedError();
    }

    const clientMsgId = crypto.randomUUID();
    const frame = encodeMessage(payloadType, payload, clientMsgId);
    this.socket.write(frame);
    this.lastSendAt = Date.now();
    return clientMsgId;
  }

  request(
    payloadType: number,
    payload: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return new Promise<Record<string, unknown>>((resolve, reject) => {
      const clientMsgId = this.send(payloadType, payload);

      const timeout = setTimeout(() => {
        this.pending.delete(clientMsgId);
        reject(
          new RequestTimeoutError(
            payloadType,
            clientMsgId,
            this.requestTimeoutMs,
          ),
        );
      }, this.requestTimeoutMs);

      this.pending.set(clientMsgId, { resolve, reject, timeout });
    });
  }

  // ─── Event handlers ─────────────────────────────────────────────────────

  on(payloadType: number, handler: PayloadHandler): () => void {
    let handlers = this.payloadHandlers.get(payloadType);
    if (handlers === undefined) {
      handlers = new Set();
      this.payloadHandlers.set(payloadType, handlers);
    }
    handlers.add(handler);
    return () => this.off(payloadType, handler);
  }

  off(payloadType: number, handler: PayloadHandler): void {
    this.payloadHandlers.get(payloadType)?.delete(handler);
  }

  onEvent(event: ConnectionEvent, handler: ConnectionEventHandler): () => void {
    let handlers = this.eventHandlers.get(event);
    if (handlers === undefined) {
      handlers = new Set();
      this.eventHandlers.set(event, handlers);
    }
    handlers.add(handler);
    return () => this.offEvent(event, handler);
  }

  offEvent(event: ConnectionEvent, handler: ConnectionEventHandler): void {
    this.eventHandlers.get(event)?.delete(handler);
  }

  // ─── TCP framing: 4-byte length prefix ──────────────────────────────────

  private handleData(chunk: Buffer): void {
    this.recvBuffer = Buffer.concat([this.recvBuffer, chunk]);

    // Process as many complete messages as available
    while (this.recvBuffer.length >= 4) {
      const msgLen = this.recvBuffer.readUInt32BE(0);
      if (this.recvBuffer.length < 4 + msgLen) break; // incomplete message

      const msgBytes = this.recvBuffer.subarray(4, 4 + msgLen);
      this.recvBuffer = this.recvBuffer.subarray(4 + msgLen);

      try {
        const decoded = decodeMessage(msgBytes);
        this.handleMessage(decoded);
      } catch (e) {
        this.emit("error", e);
      }
    }
  }

  private handleMessage(msg: DecodedMessage): void {
    // Any incoming message proves the connection is alive — reset the
    // heartbeat liveness timer so we don't kill a healthy connection
    // that's busy sending spot/execution events but hasn't sent an
    // explicit heartbeat recently.
    this.lastHeartbeatAt = Date.now();

    this.emit("message", msg);

    const { clientMsgId, payloadType, payload } = msg;

    // Heartbeat: echo back immediately (matching official Python SDK)
    if (payloadType === PayloadType.HEARTBEAT_EVENT) {
      this.sendHeartbeat();
      return;
    }

    // Request/response correlation
    if (clientMsgId !== undefined && this.pending.has(clientMsgId)) {
      const req = this.pending.get(clientMsgId)!;
      this.pending.delete(clientMsgId);
      clearTimeout(req.timeout);

      if (
        payloadType === PayloadType.ERROR_RES ||
        payloadType === PayloadType.OA_ERROR_RES
      ) {
        req.reject(
          this.makeError(payload as unknown as OAErrorPayload | undefined),
        );
        return;
      }

      req.resolve(payload);
      return;
    }

    // Unsolicited error
    if (
      payloadType === PayloadType.ERROR_RES ||
      payloadType === PayloadType.OA_ERROR_RES
    ) {
      this.emit(
        "error",
        this.makeError(payload as unknown as OAErrorPayload | undefined),
      );
      return;
    }

    // Push events (EXECUTION_EVENT, SPOT_EVENT, etc.)
    const handlers = this.payloadHandlers.get(payloadType);
    if (handlers !== undefined) {
      for (const handler of handlers) {
        try {
          handler(payload);
        } catch (e) {
          this.emit("error", e);
        }
      }
    }
  }

  // ─── Heartbeat ──────────────────────────────────────────────────────────

  private sendHeartbeat(): void {
    if (this.socket && !this.socket.destroyed) {
      const frame = encodeHeartbeat();
      this.socket.write(frame);
      this.lastSendAt = Date.now();
    }
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    const now = Date.now();
    this.lastHeartbeatAt = now;
    this.lastSendAt = now;

    // Idle-based heartbeat: send if we haven't sent anything recently
    this.heartbeatInterval = setInterval(() => {
      if (
        this.socket &&
        !this.socket.destroyed &&
        Date.now() - this.lastSendAt >= HEARTBEAT_IDLE_MS
      ) {
        this.sendHeartbeat();
      }
    }, HEARTBEAT_CHECK_MS);

    // Liveness check: close if we haven't heard from the server
    this.heartbeatCheckInterval = setInterval(() => {
      if (Date.now() - this.lastHeartbeatAt > HEARTBEAT_TIMEOUT_MS) {
        this.socket?.destroy();
      }
    }, HEARTBEAT_CHECK_MS);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval !== null) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    if (this.heartbeatCheckInterval !== null) {
      clearInterval(this.heartbeatCheckInterval);
      this.heartbeatCheckInterval = null;
    }
  }

  // ─── Reconnect ──────────────────────────────────────────────────────────

  private scheduleReconnect(): void {
    if (!this.shouldReconnect) return;

    this.reconnectAttempt++;

    if (
      this.maxReconnectAttempts > 0 &&
      this.reconnectAttempt > this.maxReconnectAttempts
    ) {
      this.setState({ status: "disconnected" });
      return;
    }

    const delay = Math.min(
      INITIAL_RECONNECT_DELAY_MS * 2 ** (this.reconnectAttempt - 1),
      MAX_RECONNECT_DELAY_MS,
    );

    this.setState({
      status: "reconnecting",
      attempt: this.reconnectAttempt,
      nextRetryMs: delay,
    });

    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.doReconnect();
    }, delay);
  }

  private doReconnect(): void {
    if (!this.shouldReconnect) return;

    this.setState({ status: "connecting", attempt: this.reconnectAttempt });

    const socket = tls.connect({ host: this.host, port: this.port });
    this.socket = socket;

    socket.on("secureConnect", async () => {
      this.reconnectAttempt = 0;
      this.recvBuffer = Buffer.alloc(0);
      const since = Date.now();
      this.setState({ status: "connected", since });
      this.startHeartbeat();

      if (this.hasConnectedOnce && this.onReconnect !== undefined) {
        try {
          await this.onReconnect();
          if (this._state.status === "connected") {
            this.setState({ status: "ready", since });
          }
        } catch (e) {
          this.emit("error", e);
        }
      } else {
        this.setState({ status: "ready", since });
      }
    });

    socket.on("data", (chunk: Buffer) => this.handleData(chunk));

    socket.on("error", (err: Error) => {
      this.emit("error", err);
    });

    socket.on("close", () => {
      this.stopHeartbeat();
      this.rejectPending(new Error("Connection closed"));
      this.setState({ status: "disconnected" });
      this.scheduleReconnect();
    });
  }

  // ─── Helpers ────────────────────────────────────────────────────────────

  private setState(state: ConnectionState): void {
    this._state = state;
    this.emit("stateChange", state);
  }

  private rejectPending(error: Error): void {
    for (const [, req] of this.pending) {
      clearTimeout(req.timeout);
      req.reject(error);
    }
    this.pending.clear();
  }

  private makeError(err: OAErrorPayload | undefined): CTraderError {
    const opts: {
      code: string;
      description: string;
      retryAfter?: number;
      maintenanceEndTimestamp?: number;
    } = {
      code: err?.errorCode ?? "UNKNOWN",
      description: err?.description ?? "Unknown error",
    };
    if (err?.retryAfter !== undefined) opts.retryAfter = err.retryAfter;
    if (err?.maintenanceEndTimestamp !== undefined)
      opts.maintenanceEndTimestamp = err.maintenanceEndTimestamp;
    return new CTraderError(opts);
  }

  private emit(event: ConnectionEvent, data: unknown): void {
    const handlers = this.eventHandlers.get(event);
    if (handlers !== undefined) {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch {
          // Handler errors must not crash the connection
        }
      }
    }
  }
}
