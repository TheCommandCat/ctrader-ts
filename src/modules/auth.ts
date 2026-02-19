import type { CTraderConnection } from "../connection.js";
import { PayloadType } from "../enums.js";
import type { CtidProfile, CtidTraderAccount, TokenPair } from "../types.js";

export class CTraderAuth {
	private readonly connection: CTraderConnection;

	constructor(connection: CTraderConnection) {
		this.connection = connection;
	}

	async authenticateApp(clientId: string, clientSecret: string): Promise<void> {
		await this.connection.request(PayloadType.APP_AUTH_REQ, { clientId, clientSecret });
	}

	async authenticateAccount(ctidTraderAccountId: number, accessToken: string): Promise<void> {
		await this.connection.request(PayloadType.ACCOUNT_AUTH_REQ, { ctidTraderAccountId, accessToken });
	}

	async authenticate(opts: {
		clientId: string;
		clientSecret: string;
		ctidTraderAccountId: number;
		accessToken: string;
	}): Promise<void> {
		await this.authenticateApp(opts.clientId, opts.clientSecret);
		await this.authenticateAccount(opts.ctidTraderAccountId, opts.accessToken);
	}

	async getAccountsByToken(accessToken: string): Promise<CtidTraderAccount[]> {
		const res = await this.connection.request(PayloadType.GET_ACCOUNTS_BY_TOKEN_REQ, { accessToken });
		const accounts = res["ctidTraderAccount"];
		return Array.isArray(accounts) ? (accounts as CtidTraderAccount[]) : [];
	}

	async getCtidProfile(accessToken: string): Promise<CtidProfile> {
		const res = await this.connection.request(PayloadType.GET_CTID_PROFILE_REQ, { accessToken });
		return res["profile"] as CtidProfile;
	}

	async refreshToken(refreshToken: string): Promise<TokenPair> {
		const res = await this.connection.request(PayloadType.REFRESH_TOKEN_REQ, { refreshToken });
		return {
			accessToken: res["accessToken"] as string,
			tokenType: res["tokenType"] as string,
			expiresIn: res["expiresIn"] as number,
			refreshToken: res["refreshToken"] as string,
		};
	}

	async logout(ctidTraderAccountId: number): Promise<void> {
		await this.connection.request(PayloadType.ACCOUNT_LOGOUT_REQ, { ctidTraderAccountId });
	}

	async getApiVersion(): Promise<string> {
		const res = await this.connection.request(PayloadType.VERSION_REQ, {});
		return res["version"] as string;
	}
}
