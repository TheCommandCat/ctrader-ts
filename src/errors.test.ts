import { describe, expect, test } from "bun:test";
import { CTraderError, NotConnectedError, RequestTimeoutError } from "./errors.js";

describe("CTraderError", () => {
	test("formats message as [code] description", () => {
		const err = new CTraderError({
			code: "OA_AUTH_TOKEN_EXPIRED",
			description: "Token has expired",
		});
		expect(err.message).toBe(
			"[OA_AUTH_TOKEN_EXPIRED] Token has expired \u2014 Your access token has expired. Run `ctrader-ts auth` to re-authenticate.",
		);
		expect(err.name).toBe("CTraderError");
		expect(err.code).toBe("OA_AUTH_TOKEN_EXPIRED");
		expect(err.description).toBe("Token has expired");
	});

	test("stores optional retryAfter and maintenanceEndTimestamp", () => {
		const err = new CTraderError({
			code: "SERVER_IS_UNDER_MAINTENANCE",
			description: "Server down",
			retryAfter: 30,
			maintenanceEndTimestamp: 1700000000,
		});
		expect(err.retryAfter).toBe(30);
		expect(err.maintenanceEndTimestamp).toBe(1700000000);
	});

	test("omits retryAfter and maintenanceEndTimestamp when not provided", () => {
		const err = new CTraderError({ code: "FOO", description: "bar" });
		expect(err.retryAfter).toBeUndefined();
		expect(err.maintenanceEndTimestamp).toBeUndefined();
	});

	test("is instance of Error", () => {
		const err = new CTraderError({ code: "X", description: "Y" });
		expect(err).toBeInstanceOf(Error);
		expect(err).toBeInstanceOf(CTraderError);
	});

	describe("isAuthError", () => {
		const authCodes = [
			"OA_AUTH_TOKEN_EXPIRED",
			"ACCOUNT_NOT_AUTHORIZED",
			"CH_CLIENT_AUTH_FAILURE",
			"CH_CLIENT_NOT_AUTHENTICATED",
			"CH_ACCESS_TOKEN_INVALID",
			"OAUTH_TOKEN_INVALIDATED",
		];

		for (const code of authCodes) {
			test(`returns true for ${code}`, () => {
				const err = new CTraderError({ code, description: "auth" });
				expect(err.isAuthError).toBe(true);
			});
		}

		test("returns false for non-auth codes", () => {
			const err = new CTraderError({
				code: "UNKNOWN_ERROR",
				description: "nope",
			});
			expect(err.isAuthError).toBe(false);
		});
	});

	describe("isRateLimit", () => {
		test("returns true for REQUEST_FREQUENCY_EXCEEDED", () => {
			const err = new CTraderError({
				code: "REQUEST_FREQUENCY_EXCEEDED",
				description: "slow down",
			});
			expect(err.isRateLimit).toBe(true);
		});

		test("returns true for BLOCKED_PAYLOAD_TYPE", () => {
			const err = new CTraderError({
				code: "BLOCKED_PAYLOAD_TYPE",
				description: "blocked",
			});
			expect(err.isRateLimit).toBe(true);
		});

		test("returns false for other codes", () => {
			const err = new CTraderError({ code: "OTHER", description: "x" });
			expect(err.isRateLimit).toBe(false);
		});
	});

	describe("isMaintenance", () => {
		test("returns true for SERVER_IS_UNDER_MAINTENANCE", () => {
			const err = new CTraderError({
				code: "SERVER_IS_UNDER_MAINTENANCE",
				description: "maint",
			});
			expect(err.isMaintenance).toBe(true);
		});

		test("returns false for other codes", () => {
			const err = new CTraderError({ code: "OTHER", description: "x" });
			expect(err.isMaintenance).toBe(false);
		});
	});

	describe("hint", () => {
		test("returns actionable hint for known error codes", () => {
			const err = new CTraderError({ code: "NOT_ENOUGH_MONEY", description: "Low margin" });
			expect(err.hint).toBeDefined();
			expect(err.hint).toContain("Reduce position size");
		});

		test("returns hint for auth errors", () => {
			const err = new CTraderError({ code: "OA_AUTH_TOKEN_EXPIRED", description: "expired" });
			expect(err.hint).toContain("ctrader-ts auth");
		});

		test("returns hint for rate limit", () => {
			const err = new CTraderError({ code: "REQUEST_FREQUENCY_EXCEEDED", description: "slow" });
			expect(err.hint).toContain("Wait");
		});

		test("returns hint for maintenance", () => {
			const err = new CTraderError({ code: "SERVER_IS_UNDER_MAINTENANCE", description: "down" });
			expect(err.hint).toContain("maintenance");
		});

		test("returns hint for symbol not found", () => {
			const err = new CTraderError({ code: "SYMBOL_NOT_FOUND", description: "nope" });
			expect(err.hint).toContain("getSymbols");
		});

		test("returns hint for invalid volume", () => {
			const err = new CTraderError({ code: "INVALID_VOLUME", description: "bad" });
			expect(err.hint).toContain("getSymbolInfo");
		});

		test("returns hint for market closed", () => {
			const err = new CTraderError({ code: "MARKET_CLOSED", description: "closed" });
			expect(err.hint).toContain("trading hours");
		});

		test("returns hint for trading bad volume", () => {
			const err = new CTraderError({ code: "TRADING_BAD_VOLUME", description: "bad" });
			expect(err.hint).toContain("minVolume");
		});

		test("returns hint for trading bad stops", () => {
			const err = new CTraderError({ code: "TRADING_BAD_STOPS", description: "bad" });
			expect(err.hint).toContain("distance");
		});

		test("returns hint for position not found", () => {
			const err = new CTraderError({ code: "POSITION_NOT_FOUND", description: "not found" });
			expect(err.hint).toContain("closed");
		});

		test("returns hint for order not found", () => {
			const err = new CTraderError({ code: "ORDER_NOT_FOUND", description: "not found" });
			expect(err.hint).toContain("filled");
		});

		test("returns hint for connections limit", () => {
			const err = new CTraderError({ code: "CONNECTIONS_LIMIT_EXCEEDED", description: "too many" });
			expect(err.hint).toContain("Close other sessions");
		});

		test("returns hint for trading disabled", () => {
			const err = new CTraderError({ code: "TRADING_DISABLED", description: "disabled" });
			expect(err.hint).toContain("broker");
		});

		test("returns hint for no more accounts", () => {
			const err = new CTraderError({ code: "NO_MORE_ACCOUNTS_AVAILABLE", description: "none" });
			expect(err.hint).toContain("broker accounts");
		});

		test("returns undefined for unknown error codes", () => {
			const err = new CTraderError({ code: "TOTALLY_UNKNOWN_CODE", description: "what" });
			expect(err.hint).toBeUndefined();
		});

		test("hint is included in error message for known codes", () => {
			const err = new CTraderError({ code: "NOT_ENOUGH_MONEY", description: "Low margin" });
			expect(err.message).toContain(err.hint!);
		});

		test("hint is not included in message for unknown codes", () => {
			const err = new CTraderError({ code: "UNKNOWN_XYZ", description: "something" });
			expect(err.message).toBe("[UNKNOWN_XYZ] something");
			expect(err.hint).toBeUndefined();
		});
	});
});

describe("RequestTimeoutError", () => {
	test("includes payloadType, clientMsgId, and timeout in message", () => {
		const err = new RequestTimeoutError(2100, "msg-123", 15000);
		expect(err.message).toBe(
			"Request timed out after 15000ms (payloadType: 2100, id: msg-123). Check your network connection or try increasing requestTimeoutMs.",
		);
		expect(err.name).toBe("RequestTimeoutError");
		expect(err.payloadType).toBe(2100);
		expect(err.clientMsgId).toBe("msg-123");
	});

	test("is instance of Error", () => {
		const err = new RequestTimeoutError(1, "x", 1000);
		expect(err).toBeInstanceOf(Error);
		expect(err).toBeInstanceOf(RequestTimeoutError);
	});
});

describe("NotConnectedError", () => {
	test("has correct message and name", () => {
		const err = new NotConnectedError();
		expect(err.message).toBe(
			"Not connected to cTrader API. Call connect() first, or check that the connection hasn't been dropped.",
		);
		expect(err.name).toBe("NotConnectedError");
	});

	test("is instance of Error", () => {
		const err = new NotConnectedError();
		expect(err).toBeInstanceOf(Error);
		expect(err).toBeInstanceOf(NotConnectedError);
	});
});
