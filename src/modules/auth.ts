import type { CTraderConnection } from "../connection.js";
import { PayloadType } from "../enums.js";
import type { CtidProfile, CtidTraderAccount, TokenPair } from "../types.js";

/**
 * Authentication module — app auth, account auth, token management. Used internally by connect() and available via ct.raw.auth for manual auth flows.
 */
export class CTraderAuth {
	private readonly connection: CTraderConnection;

	constructor(connection: CTraderConnection) {
		this.connection = connection;
	}

	/**
	 * Authenticate the application with cTrader backend. Must be called before account auth.
	 */
	async authenticateApp(clientId: string, clientSecret: string): Promise<void> {
		await this.connection.request(PayloadType.APP_AUTH_REQ, { clientId, clientSecret });
	}

	/**
	 * Authenticate a specific trading account. Requires app auth first.
	 */
	async authenticateAccount(ctidTraderAccountId: number, accessToken: string): Promise<void> {
		await this.connection.request(PayloadType.ACCOUNT_AUTH_REQ, {
			ctidTraderAccountId,
			accessToken,
		});
	}

	/**
	 * Convenience: app auth + account auth in one call
	 */
	async authenticate(opts: {
		clientId: string;
		clientSecret: string;
		ctidTraderAccountId: number;
		accessToken: string;
	}): Promise<void> {
		await this.authenticateApp(opts.clientId, opts.clientSecret);
		await this.authenticateAccount(opts.ctidTraderAccountId, opts.accessToken);
	}

	/**
	 * Get all trading accounts associated with an access token
	 */
	async getAccountsByToken(accessToken: string): Promise<CtidTraderAccount[]> {
		const res = await this.connection.request(PayloadType.GET_ACCOUNTS_BY_TOKEN_REQ, {
			accessToken,
		});
		const accounts = res.ctidTraderAccount;
		return Array.isArray(accounts) ? (accounts as CtidTraderAccount[]) : [];
	}

	/**
	 * Get the cTrader ID profile for a token
	 */
	async getCtidProfile(accessToken: string): Promise<CtidProfile> {
		const res = await this.connection.request(PayloadType.GET_CTID_PROFILE_REQ, { accessToken });
		return res.profile as CtidProfile;
	}

	/**
	 * Exchange a refresh token for a new access/refresh token pair
	 */
	async refreshToken(refreshToken: string): Promise<TokenPair> {
		const res = await this.connection.request(PayloadType.REFRESH_TOKEN_REQ, { refreshToken });
		return {
			accessToken: res.accessToken as string,
			tokenType: res.tokenType as string,
			expiresIn: res.expiresIn as number,
			refreshToken: res.refreshToken as string,
		};
	}

	/**
	 * Disconnect a specific account from the session
	 */
	async logout(ctidTraderAccountId: number): Promise<void> {
		await this.connection.request(PayloadType.ACCOUNT_LOGOUT_REQ, { ctidTraderAccountId });
	}

	/**
	 * Get the cTrader Open API protocol version
	 */
	async getApiVersion(): Promise<string> {
		const res = await this.connection.request(PayloadType.VERSION_REQ, {});
		return res.version as string;
	}
}
