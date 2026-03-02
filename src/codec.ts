/**
 * Codec layer: bridges the JS-object world (used by modules) and the
 * Protobuf-over-TCP wire format expected by cTrader Open API (port 5035).
 *
 * Wire format: [4-byte big-endian length][ProtoMessage bytes]
 *
 * ProtoMessage is the outer envelope:
 *   required uint32 payloadType = 1;
 *   optional bytes  payload     = 2;  // inner message serialised to bytes
 *   optional string clientMsgId = 3;
 *
 * We keep the module-facing API identical: modules hand us a payloadType
 * number and a plain JS object; we look up the matching Protobuf class,
 * encode the inner object, wrap it in a ProtoMessage, and return the
 * framed bytes ready for the socket.
 */

import { ProtoMessage, ProtoHeartbeatEvent } from "./proto/messages.js";
import { PayloadType } from "./enums.js";

// ---------------------------------------------------------------------------
// Payload-type → Protobuf class registry
// ---------------------------------------------------------------------------

import * as pb from "./proto/messages.js";

interface PbMessageStatic {
  encode(
    message: Record<string, unknown>,
    writer?: unknown,
  ): { finish(): Uint8Array };
  decode(reader: Uint8Array, length?: number): Record<string, unknown>;
}

const registry = new Map<number, PbMessageStatic>();

// Scan every export from the generated module. Each message class has
// static encode/decode methods and instances carry a default payloadType.
for (const key of Object.keys(pb)) {
  const candidate = (pb as Record<string, unknown>)[key];
  if (
    candidate != null &&
    typeof candidate === "function" &&
    "encode" in candidate &&
    "decode" in candidate &&
    typeof (candidate as Record<string, unknown>).encode === "function" &&
    typeof (candidate as Record<string, unknown>).decode === "function"
  ) {
    try {
      const instance = new (candidate as unknown as new () => Record<
        string,
        unknown
      >)();
      const pt = instance["payloadType"];
      if (typeof pt === "number" && pt > 0) {
        registry.set(pt, candidate as unknown as PbMessageStatic);
      }
    } catch {
      // Not a constructable message class — skip
    }
  }
}

/**
 * Look up the Protobuf message class for a given payloadType.
 */
export function getMessageClass(
  payloadType: number,
): PbMessageStatic | undefined {
  return registry.get(payloadType);
}

// ---------------------------------------------------------------------------
// Encode
// ---------------------------------------------------------------------------

/**
 * Encode a request into a framed buffer ready to write to the TCP socket.
 *
 * @param payloadType  The ProtoOAPayloadType (e.g. 2100 for APP_AUTH_REQ)
 * @param payload      Plain JS object with the message fields (or undefined)
 * @param clientMsgId  Optional correlation ID
 * @returns Buffer with [4-byte length prefix][ProtoMessage bytes]
 */
export function encodeMessage(
  payloadType: number,
  payload?: Record<string, unknown>,
  clientMsgId?: string,
): Buffer {
  const envelope: Record<string, unknown> = { payloadType };
  if (clientMsgId) envelope.clientMsgId = clientMsgId;

  if (payload !== undefined) {
    const msgClass = registry.get(payloadType);
    if (msgClass) {
      const innerWriter = msgClass.encode(payload);
      envelope.payload = innerWriter.finish();
    }
  }

  const protoBytes = ProtoMessage.encode(
    envelope as Parameters<typeof ProtoMessage.encode>[0],
  ).finish();
  const frame = Buffer.alloc(4 + protoBytes.length);
  frame.writeUInt32BE(protoBytes.length, 0);
  frame.set(protoBytes, 4);
  return frame;
}

/**
 * Encode a heartbeat event (no inner payload, no clientMsgId).
 */
export function encodeHeartbeat(): Buffer {
  const heartbeatBytes = ProtoHeartbeatEvent.encode(
    {} as Parameters<typeof ProtoHeartbeatEvent.encode>[0],
  ).finish();
  const envelope = {
    payloadType: PayloadType.HEARTBEAT_EVENT,
    payload: heartbeatBytes,
  };
  const protoBytes = ProtoMessage.encode(
    envelope as Parameters<typeof ProtoMessage.encode>[0],
  ).finish();
  const frame = Buffer.alloc(4 + protoBytes.length);
  frame.writeUInt32BE(protoBytes.length, 0);
  frame.set(protoBytes, 4);
  return frame;
}

// ---------------------------------------------------------------------------
// Long → number conversion
// ---------------------------------------------------------------------------

/**
 * Detect a protobufjs Long object (has low/high/unsigned properties).
 */
function isLong(
  value: unknown,
): value is {
  low: number;
  high: number;
  unsigned: boolean;
  toNumber(): number;
} {
  return (
    value !== null &&
    typeof value === "object" &&
    "low" in (value as Record<string, unknown>) &&
    "high" in (value as Record<string, unknown>) &&
    "unsigned" in (value as Record<string, unknown>)
  );
}

/**
 * Recursively convert all Long objects in a decoded protobuf payload to plain
 * JS numbers. This is necessary because protobufjs represents int64/uint64
 * fields as Long objects, but cTrader values always fit in JS safe integers.
 */
function convertLongs(obj: unknown): unknown {
  if (isLong(obj)) return obj.toNumber();
  if (obj === null || obj === undefined) return obj;
  if (Array.isArray(obj)) return obj.map(convertLongs);
  if (typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      result[key] = convertLongs(value);
    }
    return result;
  }
  return obj;
}

// ---------------------------------------------------------------------------
// Decode
// ---------------------------------------------------------------------------

export interface DecodedMessage {
  payloadType: number;
  clientMsgId: string | undefined;
  payload: Record<string, unknown>;
}

/**
 * Decode a ProtoMessage envelope from raw bytes (without the 4-byte length prefix).
 */
export function decodeMessage(data: Uint8Array): DecodedMessage {
  const envelope = ProtoMessage.decode(data);
  const payloadType = envelope.payloadType;
  const clientMsgId = envelope.clientMsgId || undefined;

  let payload: Record<string, unknown> = {};
  if (envelope.payload && envelope.payload.length > 0) {
    const msgClass = registry.get(payloadType);
    if (msgClass) {
      payload = convertLongs(msgClass.decode(envelope.payload)) as Record<
        string,
        unknown
      >;
    }
  }

  return { payloadType, clientMsgId, payload };
}
