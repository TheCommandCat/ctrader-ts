import {
  CTraderError,
  NotConnectedError,
  RequestTimeoutError,
} from "./errors.js";
import type { ConnectionState, Envelope, OAErrorPayload } from "./types.js";
import { PayloadType } from "./enums.js";

const REQUEST_TIMEOUT_MS = 15_000;
const HEARTBEAT_INTERVAL_MS = 25_000;
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
  endpoint: string;
  maxReconnectAttempts?: number;
  requestTimeoutMs?: number;
  /** Called after WebSocket reconnects (not initial connect). Use for re-auth + subscription restore. */
  onReconnect?: () => Promise<void>;
}

export class CTraderConnection {
  private ws: WebSocket | null = null;
  private readonly endpoint: string;
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

  private readonly pending = new Map<string, PendingRequest>();
  private readonly payloadHandlers = new Map<number, Set<PayloadHandler>>();
  private readonly eventHandlers = new Map<
    ConnectionEvent,
    Set<ConnectionEventHandler>
  >();

  constructor(config: CTraderConnectionConfig) {
    this.endpoint = config.endpoint;
    this.maxReconnectAttempts = config.maxReconnectAttempts ?? 0;
    this.requestTimeoutMs = config.requestTimeoutMs ?? REQUEST_TIMEOUT_MS;
    this.onReconnect = config.onReconnect;
  }

  get state(): ConnectionState {
    return this._state;
  }

  get isConnected(): boolean {
    return this._state.status === "connected";
  }

  connect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this._state.status === "connected") {
        resolve();
        return;
      }

      this.shouldReconnect = true;
      this.reconnectAttempt = 0;
      this.setState({ status: "connecting", attempt: 1 });

      const ws = new WebSocket(this.endpoint);
      this.ws = ws;

      const onOpen = () => {
        cleanup();
        this.reconnectAttempt = 0;
        this.hasConnectedOnce = true;
        this.setState({ status: "connected", since: Date.now() });
        this.startHeartbeat();
        resolve();
      };

      const onError = (event: Event) => {
        cleanup();
        this.emit("error", event);
        reject(new Error("WebSocket connection failed"));
      };

      const cleanup = () => {
        ws.removeEventListener("open", onOpen);
        ws.removeEventListener("error", onError);
      };

      ws.addEventListener("open", onOpen);
      ws.addEventListener("error", onError);

      ws.addEventListener("message", (event: MessageEvent) => {
        this.handleMessage(event);
      });

      ws.addEventListener("close", () => {
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

    if (this.ws !== null) {
      this.ws.close();
      this.ws = null;
    }

    this.setState({ status: "disconnected" });
  }

  send(payloadType: number, payload?: Record<string, unknown>): string {
    if (this.ws === null || this.ws.readyState !== WebSocket.OPEN) {
      throw new NotConnectedError();
    }

    const clientMsgId = crypto.randomUUID();
    const envelope: Envelope = payload !== undefined
      ? { clientMsgId, payloadType, payload }
      : { clientMsgId, payloadType };
    this.ws.send(JSON.stringify(envelope));
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
        reject(new RequestTimeoutError(payloadType, clientMsgId, this.requestTimeoutMs));
      }, this.requestTimeoutMs);

      this.pending.set(clientMsgId, { resolve, reject, timeout });
    });
  }

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

  private handleMessage(event: MessageEvent): void {
    const raw =
      typeof event.data === "string" ? event.data : String(event.data);

    let envelope: Envelope;
    try {
      envelope = JSON.parse(raw) as Envelope;
    } catch {
      return;
    }

    this.emit("message", envelope);

    const { clientMsgId, payloadType, payload } = envelope;

    if (payloadType === PayloadType.HEARTBEAT_EVENT) {
      this.lastHeartbeatAt = Date.now();
      return;
    }

    if (clientMsgId !== undefined && this.pending.has(clientMsgId)) {
      const req = this.pending.get(clientMsgId)!;
      this.pending.delete(clientMsgId);
      clearTimeout(req.timeout);

      if (
        payloadType === PayloadType.ERROR_RES ||
        payloadType === PayloadType.OA_ERROR_RES
      ) {
        const err = payload as unknown as OAErrorPayload | undefined;
        req.reject(this.makeError(err));
        return;
      }

      req.resolve(payload ?? {});
      return;
    }

    if (
      payloadType === PayloadType.ERROR_RES ||
      payloadType === PayloadType.OA_ERROR_RES
    ) {
      const err = payload as unknown as OAErrorPayload | undefined;
      this.emit("error", this.makeError(err));
      return;
    }

    const handlers = this.payloadHandlers.get(payloadType);
    if (handlers !== undefined) {
      for (const handler of handlers) {
        try {
          handler(payload ?? {});
        } catch (e) {
          this.emit("error", e);
        }
      }
    }
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.lastHeartbeatAt = Date.now();

    this.heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        const envelope: Envelope = { payloadType: PayloadType.HEARTBEAT_EVENT };
        this.ws.send(JSON.stringify(envelope));
      }
    }, HEARTBEAT_INTERVAL_MS);

    this.heartbeatCheckInterval = setInterval(() => {
      if (Date.now() - this.lastHeartbeatAt > HEARTBEAT_TIMEOUT_MS) {
        this.ws?.close();
      }
    }, 10_000);
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

    const ws = new WebSocket(this.endpoint);
    this.ws = ws;

    ws.addEventListener("open", () => {
      this.setState({ status: "connected", since: Date.now() });
      this.startHeartbeat();
      if (this.hasConnectedOnce && this.onReconnect !== undefined) {
        this.onReconnect().catch((e) => this.emit("error", e));
      }
    });

    ws.addEventListener("message", (event: MessageEvent) => {
      this.handleMessage(event);
    });

    ws.addEventListener("error", (event: Event) => {
      this.emit("error", event);
    });

    ws.addEventListener("close", () => {
      this.stopHeartbeat();
      this.rejectPending(new Error("Connection closed"));
      this.setState({ status: "disconnected" });
      this.scheduleReconnect();
    });
  }

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
    const opts: { code: string; description: string; retryAfter?: number; maintenanceEndTimestamp?: number } = {
      code: err?.errorCode ?? "UNKNOWN",
      description: err?.description ?? "Unknown error",
    };
    if (err?.retryAfter !== undefined) opts.retryAfter = err.retryAfter;
    if (err?.maintenanceEndTimestamp !== undefined) opts.maintenanceEndTimestamp = err.maintenanceEndTimestamp;
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
