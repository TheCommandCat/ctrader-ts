/** Error returned by the cTrader Open API — includes a machine-readable code and human description. */
export class CTraderError extends Error {
	readonly code: string;
	readonly description: string;
	readonly retryAfter?: number;
	readonly maintenanceEndTimestamp?: number;

	constructor(opts: { code: string; description: string; retryAfter?: number; maintenanceEndTimestamp?: number }) {
		super(`[${opts.code}] ${opts.description}`);
		this.name = "CTraderError";
		this.code = opts.code;
		this.description = opts.description;
		if (opts.retryAfter !== undefined) this.retryAfter = opts.retryAfter;
		if (opts.maintenanceEndTimestamp !== undefined) this.maintenanceEndTimestamp = opts.maintenanceEndTimestamp;
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
		super(`Request timed out after ${timeoutMs}ms (payloadType: ${payloadType}, id: ${clientMsgId})`);
		this.name = "RequestTimeoutError";
		this.payloadType = payloadType;
		this.clientMsgId = clientMsgId;
	}
}

/** Thrown when an operation is attempted while the WebSocket is not connected. */
export class NotConnectedError extends Error {
	constructor() {
		super("Not connected to cTrader API");
		this.name = "NotConnectedError";
	}
}
