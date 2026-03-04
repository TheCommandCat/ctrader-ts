import { CTrader } from "./client.js";
import {
	API_PORT,
	DEMO_HOST,
	hostForEnvironment,
	LIVE_HOST,
	type PartialConfig,
	resolveConfig,
} from "./config.js";
import { CTraderError } from "./errors.js";

export { DEMO_HOST, LIVE_HOST, API_PORT };
/** @deprecated Use DEMO_HOST */
export const DEMO_ENDPOINT = DEMO_HOST;
/** @deprecated Use LIVE_HOST */
export const LIVE_ENDPOINT = LIVE_HOST;

export interface ConnectOptions extends PartialConfig {
	/**
	 * Dynamic token resolver — called on every reconnect to get a fresh access token.
	 * Use this when tokens may expire and need refreshing (e.g. long-running daemons).
	 *
	 * When provided, this function is called instead of using the static `accessToken`
	 * from config on reconnect. The initial connection still uses `accessToken` from config.
	 *
	 * The function receives the CTrader client instance so it can call
	 * `client.raw.auth.refreshToken()` if needed.
	 *
	 * @example
	 * const ct = await connect({
	 *   getAccessToken: async (client) => {
	 *     const { accessToken } = await client.raw.auth.refreshToken(myRefreshToken);
	 *     return accessToken;
	 *   },
	 * });
	 */
	getAccessToken?: (client: CTrader) => Promise<string>;
}

/**
 * Connect to cTrader Open API and authenticate in one call.
 *
 * Reads credentials from ~/.config/ctrader-ts/config.json, then env vars
 * (CTRADER_CLIENT_ID, CTRADER_CLIENT_SECRET, CTRADER_ACCESS_TOKEN,
 * CTRADER_ACCOUNT_ID, CTRADER_ENVIRONMENT), then any overrides passed here.
 *
 * @example
 * const ct = await connect();
 * const pos = await ct.buy("EURUSD", { lots: 0.01 });
 * await ct.close(pos.positionId);
 *
 * @example
 * const ct = await connect({ environment: "live" });
 *
 * @example
 * // With dynamic token refresh for long-running processes:
 * const ct = await connect({
 *   getAccessToken: async (client) => {
 *     const { accessToken } = await client.raw.auth.refreshToken(refreshToken);
 *     myRefreshToken = refreshToken; // update stored refresh token
 *     return accessToken;
 *   },
 * });
 */
export async function connect(overrides?: ConnectOptions): Promise<CTrader> {
	const { getAccessToken, ...configOverrides } = overrides ?? {};
	const config = resolveConfig(configOverrides);
	const host = hostForEnvironment(config.environment);

	// Track the current access token in a mutable variable so reconnects
	// always use the latest token (whether refreshed or original).
	let currentAccessToken = config.accessToken;

	const client = new CTrader({
		host,
		port: API_PORT,
		accountId: config.accountId,
		onReconnect: async () => {
			await client.raw.auth.authenticateApp(config.clientId, config.clientSecret);

			// If a dynamic token getter is provided, use it to get a fresh token.
			// Otherwise fall back to the current (possibly refreshed) access token.
			if (getAccessToken) {
				try {
					currentAccessToken = await getAccessToken(client);
				} catch (err) {
					// If the getter fails, try with the last known token anyway
					const msg = err instanceof Error ? err.message : String(err);
					console.warn(`[ctrader-ts] getAccessToken failed (${msg}), trying last known token`);
				}
			}

			try {
				await client.raw.auth.authenticateAccount(config.accountId, currentAccessToken);
			} catch (err) {
				// If auth fails and we have a refresh token, attempt one automatic refresh
				if (err instanceof CTraderError && err.isAuthError && config.refreshToken) {
					const refreshed = await client.raw.auth.refreshToken(config.refreshToken);
					currentAccessToken = refreshed.accessToken;
					if (refreshed.refreshToken) {
						config.refreshToken = refreshed.refreshToken;
					}
					await client.raw.auth.authenticateAccount(config.accountId, currentAccessToken);
				} else {
					throw err;
				}
			}

			await client.raw.market.restoreSubscriptions();
		},
	});

	await client.connection.connect();
	await client.raw.auth.authenticateApp(config.clientId, config.clientSecret);
	await client.raw.auth.authenticateAccount(config.accountId, config.accessToken);

	return client;
}
