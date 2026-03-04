import { describe, expect, test } from "bun:test";
import {
	decodeMessage,
	encodeHeartbeat,
	encodeMessage,
	getMessageClass,
} from "../protocol/codec.js";
import { PayloadType } from "../protocol/enums.js";

describe("codec", () => {
	describe("encodeMessage / decodeMessage roundtrip", () => {
		test("encodes and decodes APP_AUTH_REQ", () => {
			const payload = {
				clientId: "test-client",
				clientSecret: "test-secret",
			};
			const frame = encodeMessage(PayloadType.APP_AUTH_REQ, payload, "msg-1");

			// Frame starts with 4-byte length prefix
			expect(frame.length).toBeGreaterThan(4);
			const msgLen = frame.readUInt32BE(0);
			expect(frame.length).toBe(4 + msgLen);

			// Decode the inner bytes (skip 4-byte length prefix)
			const decoded = decodeMessage(frame.subarray(4));
			expect(decoded.payloadType).toBe(PayloadType.APP_AUTH_REQ);
			expect(decoded.clientMsgId).toBe("msg-1");
			expect(decoded.payload).toBeDefined();
			expect((decoded.payload as Record<string, unknown>).clientId).toBe("test-client");
			expect((decoded.payload as Record<string, unknown>).clientSecret).toBe("test-secret");
		});

		test("encodes and decodes ACCOUNT_AUTH_REQ", () => {
			const payload = {
				ctidTraderAccountId: 12345,
				accessToken: "my-token",
			};
			const frame = encodeMessage(PayloadType.ACCOUNT_AUTH_REQ, payload, "msg-2");
			const decoded = decodeMessage(frame.subarray(4));

			expect(decoded.payloadType).toBe(PayloadType.ACCOUNT_AUTH_REQ);
			expect(decoded.clientMsgId).toBe("msg-2");

			// Account ID may come back as Long or number depending on protobuf
			const accountId = decoded.payload.ctidTraderAccountId;
			const numericId =
				typeof accountId === "object" && accountId !== null ? Number(accountId) : accountId;
			expect(numericId).toBe(12345);
		});

		test("encodes message without payload", () => {
			const frame = encodeMessage(PayloadType.SYMBOLS_LIST_REQ, undefined, "msg-3");
			const decoded = decodeMessage(frame.subarray(4));

			expect(decoded.payloadType).toBe(PayloadType.SYMBOLS_LIST_REQ);
			expect(decoded.clientMsgId).toBe("msg-3");
		});

		test("encodes message without clientMsgId", () => {
			const frame = encodeMessage(PayloadType.APP_AUTH_REQ, {
				clientId: "c",
				clientSecret: "s",
			});
			const decoded = decodeMessage(frame.subarray(4));

			expect(decoded.payloadType).toBe(PayloadType.APP_AUTH_REQ);
			expect(decoded.clientMsgId).toBeUndefined();
		});
	});

	describe("encodeHeartbeat", () => {
		test("produces a valid framed heartbeat message", () => {
			const frame = encodeHeartbeat();

			expect(frame.length).toBeGreaterThan(4);
			const msgLen = frame.readUInt32BE(0);
			expect(frame.length).toBe(4 + msgLen);

			const decoded = decodeMessage(frame.subarray(4));
			expect(decoded.payloadType).toBe(PayloadType.HEARTBEAT_EVENT);
		});

		test("heartbeat has no clientMsgId", () => {
			const frame = encodeHeartbeat();
			const decoded = decodeMessage(frame.subarray(4));
			expect(decoded.clientMsgId).toBeUndefined();
		});
	});

	describe("getMessageClass", () => {
		test("returns a class for known payload types", () => {
			const cls = getMessageClass(PayloadType.APP_AUTH_REQ);
			expect(cls).toBeDefined();
			expect(typeof cls?.encode).toBe("function");
			expect(typeof cls?.decode).toBe("function");
		});

		test("returns undefined for unknown payload type", () => {
			expect(getMessageClass(99999)).toBeUndefined();
		});

		test("registry includes key message types", () => {
			const types = [
				PayloadType.APP_AUTH_REQ,
				PayloadType.APP_AUTH_RES,
				PayloadType.ACCOUNT_AUTH_REQ,
				PayloadType.ACCOUNT_AUTH_RES,
				PayloadType.NEW_ORDER_REQ,
				PayloadType.CLOSE_POSITION_REQ,
				PayloadType.SYMBOLS_LIST_REQ,
				PayloadType.SUBSCRIBE_SPOTS_REQ,
				PayloadType.GET_TRENDBARS_REQ,
				PayloadType.EXECUTION_EVENT,
				PayloadType.SPOT_EVENT,
			];

			for (const pt of types) {
				expect(getMessageClass(pt)).toBeDefined();
			}
		});
	});

	describe("frame format", () => {
		test("length prefix is big-endian uint32", () => {
			const frame = encodeMessage(PayloadType.APP_AUTH_REQ, {
				clientId: "x",
				clientSecret: "y",
			});

			// Read length both ways to verify endianness
			const len = frame.readUInt32BE(0);
			expect(len).toBeGreaterThan(0);
			expect(len).toBeLessThan(10000); // Sanity check

			// Actual message bytes should match stated length
			expect(frame.subarray(4).length).toBe(len);
		});

		test("multiple encodes produce consistent output", () => {
			const payload = { clientId: "a", clientSecret: "b" };
			const frame1 = encodeMessage(PayloadType.APP_AUTH_REQ, payload, "id1");
			const frame2 = encodeMessage(PayloadType.APP_AUTH_REQ, payload, "id1");

			// Same input should produce identical binary output
			expect(Buffer.compare(frame1, frame2)).toBe(0);
		});
	});
});
