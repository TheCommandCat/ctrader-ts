/** Actionable hint map: maps error codes to user-friendly recovery instructions */
const ERROR_HINTS: Record<string, string> = {
	// Auth errors
	OA_AUTH_TOKEN_EXPIRED: "Your access token has expired. Run `ctrader-ts auth` to re-authenticate.",
	ACCOUNT_NOT_AUTHORIZED: "This account isn't authorized. Run `ctrader-ts auth` and select the correct account.",
	CH_CLIENT_AUTH_FAILURE: "Client authentication failed. Check your clientId and clientSecret in config.",
	CH_CLIENT_NOT_AUTHENTICATED: "You must authenticate before making requests. Call connect() which handles this automatically.",
	CH_ACCESS_TOKEN_INVALID: "Invalid access token. Run `ctrader-ts auth` to get a fresh token.",
	OAUTH_TOKEN_INVALIDATED: "Token was invalidated (possibly revoked or used from another location). Run `ctrader-ts auth`.",

	// Rate limiting
	REQUEST_FREQUENCY_EXCEEDED: "Too many requests. Wait and retry — consider adding delays between rapid API calls.",
	BLOCKED_PAYLOAD_TYPE: "This request type is temporarily blocked due to rate limiting. Wait before retrying.",

	// Maintenance
	SERVER_IS_UNDER_MAINTENANCE: "Server is under maintenance. Check maintenanceEndTimestamp for expected end time.",

	// Trading errors
	NOT_ENOUGH_MONEY: "Insufficient free margin. Reduce position size or close existing positions to free up margin.",
	SYMBOL_NOT_FOUND: "Symbol not found. Check available symbols with getSymbols() or `ctrader-ts symbols`.",
	INVALID_VOLUME: "Invalid volume. Ensure lots >= minVolume and is a multiple of stepVolume. Use getSymbolInfo() to check limits.",
	MARKET_CLOSED: "Market is closed for this symbol. Check trading hours with getSymbolInfo().",
	TRADING_BAD_VOLUME: "Volume out of range. Use getSymbolInfo() to check minVolume, maxVolume, and stepVolume.",
	TRADING_BAD_STOPS: "Invalid SL/TP distance. Some brokers require minimum distances — use getSymbolInfo() to check slDistance/tpDistance.",
	POSITION_NOT_FOUND: "Position not found. It may have been closed or the ID is incorrect.",
	ORDER_NOT_FOUND: "Order not found. It may have been filled, expired, or cancelled.",
	NO_MORE_ACCOUNTS_AVAILABLE: "No more accounts available. Check your cTrader ID has linked broker accounts.",
	CONNECTIONS_LIMIT_EXCEEDED: "Too many connections from this app. Close other sessions or wait for them to expire.",
	TRADING_DISABLED: "Trading is disabled on this account. Contact your broker.",
};

/** Error returned by the cTrader Open API — includes a machine-readable code and human description. */
export class CTraderError extends Error {
	readonly code: string;
	readonly description: string;
	readonly retryAfter?: number;
	readonly maintenanceEndTimestamp?: number;

	constructor(opts: { code: string; description: string; retryAfter?: number; maintenanceEndTimestamp?: number }) {
		const hint = ERROR_HINTS[opts.code];
		const message = hint
			? `[${opts.code}] ${opts.description} — ${hint}`
			: `[${opts.code}] ${opts.description}`;
		super(message);
		this.name = "CTraderError";
		this.code = opts.code;
		this.description = opts.description;
		if (opts.retryAfter !== undefined) this.retryAfter = opts.retryAfter;
		if (opts.maintenanceEndTimestamp !== undefined) this.maintenanceEndTimestamp = opts.maintenanceEndTimestamp;
	}

	/** Actionable recovery hint for this error, or undefined for unknown error codes */
	get hint(): string | undefined {
		return ERROR_HINTS[this.code];
	}

	get isAuthError(): boolean {
		return (
			this.code === "OA_AUTH_TOKEN_EXPIRED" ||
			this.code === "ACCOUNT_NOT_AUTHORIZED" ||
			this.code === "CH_CLIENT_AUTH_FAILURE" ||
			this.code === "CH_CLIENT_NOT_AUTHENTICATED" ||
			this.code === "CH_ACCESS_TOKEN_INVALID" ||
			this.code === "OAUTH_TOKEN_INVALIDATED"
		);
	}

	get isRateLimit(): boolean {
		return this.code === "REQUEST_FREQUENCY_EXCEEDED" || this.code === "BLOCKED_PAYLOAD_TYPE";
	}

	get isMaintenance(): boolean {
		return this.code === "SERVER_IS_UNDER_MAINTENANCE";
	}
}

/** Thrown when a request does not receive a response within the configured timeout. */
export class RequestTimeoutError extends Error {
	readonly payloadType: number;
	readonly clientMsgId: string;

	constructor(payloadType: number, clientMsgId: string, timeoutMs: number) {
		super(`Request timed out after ${timeoutMs}ms (payloadType: ${payloadType}, id: ${clientMsgId}). Check your network connection or try increasing requestTimeoutMs.`);
		this.name = "RequestTimeoutError";
		this.payloadType = payloadType;
		this.clientMsgId = clientMsgId;
	}
}

/** Thrown when an operation is attempted while the WebSocket is not connected. */
export class NotConnectedError extends Error {
	constructor() {
		super("Not connected to cTrader API. Call connect() first, or check that the connection hasn't been dropped.");
		this.name = "NotConnectedError";
	}
}
