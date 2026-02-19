import { resolveConfig, endpointForEnvironment, type PartialConfig, DEMO_ENDPOINT, LIVE_ENDPOINT } from "./config.js";
import { CTrader } from "./client.js";

export { DEMO_ENDPOINT, LIVE_ENDPOINT };

/**
 * Connect to cTrader Open API and authenticate in one call.
 *
 * Reads credentials from ~/.config/ctrader-ts/config.json, then env vars
 * (CTRADER_CLIENT_ID, CTRADER_CLIENT_SECRET, CTRADER_ACCESS_TOKEN,
 * CTRADER_ACCOUNT_ID, CTRADER_ENVIRONMENT), then any overrides passed here.
 *
 * @example
 * const ct = await connect();
 * const pos = await ct.buy("EURUSD", { volume: 0.01 });
 * await ct.close(pos.position!);
 *
 * @example
 * const ct = await connect({ environment: "live" });
 */
export async function connect(overrides?: PartialConfig): Promise<CTrader> {
	const config = resolveConfig(overrides);
	const endpoint = endpointForEnvironment(config.environment);

	const client = new CTrader({
		endpoint,
		accountId: config.accountId,
		onReconnect: async () => {
			await client.raw.auth.authenticateApp(config.clientId, config.clientSecret);
			await client.raw.auth.authenticateAccount(config.accountId, config.accessToken);
			await client.raw.market.restoreSubscriptions();
		},
	});

	await client.connection.connect();
	await client.raw.auth.authenticateApp(config.clientId, config.clientSecret);
	await client.raw.auth.authenticateAccount(config.accountId, config.accessToken);

	return client;
}
