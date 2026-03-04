#!/usr/bin/env bun

/**
 * Live integration test — connects to cTrader demo via TLS/Protobuf (port 5035).
 *
 * Reads creds from env vars. Run with:
 *   source /home/thecommandcat/Coding/trident/.env && bun run test-live.ts
 */

import { API_PORT, DEMO_HOST } from "./src/config.js";
import { CTraderConnection } from "./src/connection.js";
import { PayloadType } from "./src/enums.js";
import { CTraderAccount } from "./src/modules/account.js";
import { CTraderAuth } from "./src/modules/auth.js";
import { CTraderMarket } from "./src/modules/market.js";
import { CTraderTrading } from "./src/modules/trading.js";

// ─── Config ──────────────────────────────────────────────────────────────────

const CLIENT_ID = process.env.CTRADER_CLIENT_ID!;
const CLIENT_SECRET = process.env.CTRADER_CLIENT_SECRET!;
const ACCESS_TOKEN = process.env.CTRADER_ACCESS_TOKEN!;
const ACCOUNT_ID = Number(process.env.CTRADER_ACCOUNT_ID!);

if (!CLIENT_ID || !CLIENT_SECRET || !ACCESS_TOKEN || !ACCOUNT_ID) {
	console.error(
		"Missing env vars: CTRADER_CLIENT_ID, CTRADER_CLIENT_SECRET, CTRADER_ACCESS_TOKEN, CTRADER_ACCOUNT_ID",
	);
	process.exit(1);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function ok(label: string) {
	passed++;
	console.log(`  \u2713 ${label}`);
}

function fail(label: string, err: unknown) {
	failed++;
	console.error(`  \u2717 ${label}: ${err instanceof Error ? err.message : String(err)}`);
}

function summary() {
	console.log(`\n${"─".repeat(60)}`);
	console.log(`Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
	if (failed > 0) process.exit(1);
}

// ─── Test ────────────────────────────────────────────────────────────────────

async function main() {
	console.log("Live integration test — ctrader-ts Protobuf/TLS transport\n");
	console.log(`Host: ${DEMO_HOST}:${API_PORT}`);
	console.log(`Account: ${ACCOUNT_ID}\n`);

	const conn = new CTraderConnection({ host: DEMO_HOST, port: API_PORT });
	const auth = new CTraderAuth(conn);
	const trading = new CTraderTrading(conn, ACCOUNT_ID);
	const account = new CTraderAccount(conn, ACCOUNT_ID);
	const market = new CTraderMarket(conn, ACCOUNT_ID);

	// ── 1. TLS Connect ──────────────────────────────────────────────────────
	console.log("1. TLS Connect");
	try {
		await conn.connect();
		ok("Connected to demo.ctraderapi.com:5035 via TLS");
	} catch (err) {
		fail("TLS connect", err);
		summary();
		return;
	}

	// ── 2. App Auth ──────────────────────────────────────────────────────────
	console.log("2. App Authentication");
	try {
		await auth.authenticateApp(CLIENT_ID, CLIENT_SECRET);
		ok("App authenticated");
	} catch (err) {
		fail("App auth", err);
		conn.disconnect();
		summary();
		return;
	}

	// ── 3. Account Auth ──────────────────────────────────────────────────────
	console.log("3. Account Authentication");
	try {
		await auth.authenticateAccount(ACCOUNT_ID, ACCESS_TOKEN);
		ok("Account authenticated");
	} catch (err) {
		fail("Account auth", err);
		conn.disconnect();
		summary();
		return;
	}

	// ── 4. Get Version ──────────────────────────────────────────────────────
	console.log("4. API Version");
	try {
		const version = await auth.getApiVersion();
		ok(`Server version: ${version}`);
	} catch (err) {
		fail("Get version", err);
	}

	// ── 5. Get Accounts ─────────────────────────────────────────────────────
	console.log("5. Get Accounts");
	try {
		const accounts = await auth.getAccountsByToken(ACCESS_TOKEN);
		ok(`Found ${accounts.length} account(s)`);
		for (const a of accounts) {
			console.log(`    Account ${a.ctidTraderAccountId} (${a.isLive ? "LIVE" : "DEMO"})`);
		}
	} catch (err) {
		fail("Get accounts", err);
	}

	// ── 6. Get Trader Info ──────────────────────────────────────────────────
	console.log("6. Trader Info");
	try {
		const trader = await account.getTrader();
		ok(`Balance: ${trader.balance / 100} (asset ${trader.depositAssetId})`);
	} catch (err) {
		fail("Get trader", err);
	}

	// ── 7. Reconcile (positions + orders) ───────────────────────────────────
	console.log("7. Reconcile");
	try {
		const { positions, orders } = await account.reconcile();
		ok(`${positions.length} open position(s), ${orders.length} pending order(s)`);
	} catch (err) {
		fail("Reconcile", err);
	}

	// ── 8. Symbol List ──────────────────────────────────────────────────────
	console.log("8. Symbol List");
	let eurusdId: number | undefined;
	try {
		const { symbols } = await market.getSymbols();
		ok(`${symbols.length} symbols available`);
		const eurusd = symbols.find((s: any) => s.symbolName === "EURUSD");
		if (eurusd) {
			eurusdId = eurusd.symbolId;
			ok(`EURUSD symbolId = ${eurusdId}`);
		} else {
			fail("EURUSD lookup", "EURUSD not found in symbol list");
		}
	} catch (err) {
		fail("Symbol list", err);
	}

	// ── 9. Subscribe to spot prices ─────────────────────────────────────────
	if (eurusdId) {
		console.log("9. Spot Subscription (EURUSD)");
		try {
			await market.subscribeSpots([eurusdId]);
			ok("Subscribed to EURUSD spots");

			// Wait for a few ticks
			let tickCount = 0;
			const tickPromise = new Promise<void>((resolve) => {
				conn.on(PayloadType.SPOT_EVENT, (payload: any) => {
					tickCount++;
					if (tickCount <= 3) {
						console.log(
							`    Tick ${tickCount}: bid=${payload.bid ?? "\u2014"} ask=${payload.ask ?? "\u2014"}`,
						);
					}
					if (tickCount >= 3) resolve();
				});
			});

			const timeout = new Promise<void>((_, reject) =>
				setTimeout(() => reject(new Error("Timed out waiting for 3 ticks (15s)")), 15_000),
			);

			await Promise.race([tickPromise, timeout]);
			ok(`Received ${tickCount} tick(s)`);

			await market.unsubscribeSpots([eurusdId]);
			ok("Unsubscribed from EURUSD spots");
		} catch (err) {
			fail("Spot subscription", err);
		}
	} else {
		console.log("9. Spot Subscription \u2014 SKIPPED (no EURUSD symbolId)");
	}

	// ── 10. Asset List ──────────────────────────────────────────────────────
	console.log("10. Asset List");
	try {
		const assets = await market.getAssets();
		ok(`${assets.length} assets`);
	} catch (err) {
		fail("Asset list", err);
	}

	// ── 11. Deal History (last 24h) ─────────────────────────────────────────
	console.log("11. Deal History (last 24h)");
	try {
		const to = Date.now();
		const from = to - 24 * 60 * 60 * 1000;
		const { deals, hasMore } = await account.getDeals({
			fromTimestamp: from,
			toTimestamp: to,
		});
		ok(`${deals.length} deal(s) in last 24h${hasMore ? " (has more)" : ""}`);
	} catch (err) {
		fail("Deal history", err);
	}

	// ── 12. Clean disconnect ────────────────────────────────────────────────
	console.log("12. Disconnect");
	conn.disconnect();
	ok("Disconnected cleanly");

	summary();
}

main().catch((err) => {
	console.error("Unhandled error:", err);
	process.exit(1);
});
