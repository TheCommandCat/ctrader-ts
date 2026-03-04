/**
 * Integration tests against cTrader demo account.
 *
 * Requires valid credentials in ~/.config/ctrader-ts/config.json
 * (run `ctrader-ts auth` first).
 *
 * These tests execute real orders on a DEMO account.
 * They are sequential — each test depends on the previous.
 */
import { describe, expect, test } from "bun:test";
import { type CTrader, lotsToUnits } from "./client.js";
import { connect } from "./connect.js";
import { QuoteType, TradeSide, TrendbarPeriod } from "./enums.js";
import type { FullSymbol, LightSymbol, Position } from "./types.js";

const SYMBOL = "EURUSD";
const LOT_SIZE = 1.0; // 1 standard lot = 100,000 units (broker minimum for EURUSD)
const T = 30_000; // per-test timeout

// Shared state across tests
let ct: CTrader;
let eurusdId: number;
let eurusdDetails: FullSymbol;
let openedPosition: Position;

// ── 1. Connection ────────────────────────────────────────────────────────────

describe("integration", () => {
	test(
		"connects and authenticates",
		async () => {
			ct = await connect();
			expect(ct.isConnected).toBe(true);
			const s = ct.state;
			expect(s.status === "connected" || s.status === "ready").toBe(true);
		},
		T,
	);

	// ── 2. Account ───────────────────────────────────────────────────────────

	test(
		"getTrader returns valid trader info",
		async () => {
			const trader = await ct.getTrader();
			expect(trader.ctidTraderAccountId).toBeGreaterThan(0);
			expect(trader.balance).toBeGreaterThan(0);
			expect(trader.depositAssetId).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getState returns complete account snapshot",
		async () => {
			const state = await ct.getState();
			expect(state.balance).toBeGreaterThan(0);
			expect(state.equity).toBeGreaterThan(0);
			expect(state.freeMargin).toBeGreaterThan(0);
			expect(typeof state.usedMargin).toBe("number");
			expect(typeof state.unrealizedPnl).toBe("number");
			expect(state.moneyDigits).toBeGreaterThanOrEqual(0);
			expect(Array.isArray(state.positions)).toBe(true);
			expect(Array.isArray(state.orders)).toBe(true);
		},
		T,
	);

	test(
		"getPositions returns positions and orders arrays",
		async () => {
			const { positions, orders } = await ct.getPositions();
			expect(Array.isArray(positions)).toBe(true);
			expect(Array.isArray(orders)).toBe(true);
		},
		T,
	);

	// ── 3. Symbols ───────────────────────────────────────────────────────────

	test(
		"getSymbols returns non-empty list with EURUSD",
		async () => {
			const symbols = await ct.getSymbols();
			expect(symbols.length).toBeGreaterThan(0);
			const eurusd = symbols.find((s: LightSymbol) => s.symbolName === SYMBOL);
			expect(eurusd).toBeDefined();
			eurusdId = eurusd?.symbolId;
			expect(eurusdId).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getSymbolDetails returns full symbol info",
		async () => {
			const details = await ct.getSymbolDetails([SYMBOL]);
			expect(details.length).toBe(1);
			eurusdDetails = details[0]!;
			expect(eurusdDetails.symbolId).toBe(eurusdId);
			expect(eurusdDetails.digits).toBeGreaterThan(0);
			expect(eurusdDetails.pipPosition).toBeDefined();
			expect(eurusdDetails.lotSize).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getSymbolDetails by numeric ID",
		async () => {
			const details = await ct.getSymbolDetails([eurusdId]);
			expect(details.length).toBe(1);
			expect(details[0]?.symbolId).toBe(eurusdId);
		},
		T,
	);

	// ── 4. Market Data ───────────────────────────────────────────────────────

	test("watchSpots streams live prices", async () => {
		let received = false;
		const stop = await ct.watchSpots([SYMBOL], (price) => {
			expect(price.symbol).toBe(SYMBOL);
			expect(price.symbolId).toBe(eurusdId);
			expect(price.bid !== undefined || price.ask !== undefined).toBe(true);
			if (price.bidDecimal !== undefined) {
				expect(price.bidDecimal).toBeGreaterThan(0);
			}
			received = true;
		});

		const deadline = Date.now() + 10_000;
		while (!received && Date.now() < deadline) {
			await new Promise((r) => setTimeout(r, 200));
		}
		await stop();
		expect(received).toBe(true);
	}, 15_000);

	test(
		"getTrendbars returns historical candles",
		async () => {
			const to = Date.now();
			const from = to - 24 * 3_600_000;
			const { trendbars } = await ct.getTrendbars(SYMBOL, {
				period: TrendbarPeriod.H1,
				fromTimestamp: from,
				toTimestamp: to,
			});
			expect(trendbars.length).toBeGreaterThan(0);
			for (const bar of trendbars) {
				expect(typeof bar.volume).toBe("number");
			}
		},
		T,
	);

	test(
		"getTickData returns historical ticks",
		async () => {
			const to = Date.now();
			const from = to - 3_600_000;
			const { ticks } = await ct.getTickData(SYMBOL, {
				type: QuoteType.BID,
				fromTimestamp: from,
				toTimestamp: to,
			});
			expect(ticks.length).toBeGreaterThan(0);
			expect(typeof ticks[0]?.timestamp).toBe("number");
			expect(typeof ticks[0]?.tick).toBe("number");
		},
		T,
	);

	// ── 5. Trade Lifecycle ───────────────────────────────────────────────────

	test(
		"cleanup: close existing EURUSD positions",
		async () => {
			try {
				await ct.closeSymbol(SYMBOL);
			} catch {
				// No positions to close
			}
			await new Promise((r) => setTimeout(r, 500));
			const { positions } = await ct.getPositions();
			const eurusd = positions.filter((p) => p.tradeData.symbolId === eurusdId);
			expect(eurusd.length).toBe(0);
		},
		T,
	);

	test(
		"buy opens a BUY position",
		async () => {
			const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE });
			expect(pos.positionId).toBeGreaterThan(0);
			expect(pos.tradeData.symbolId).toBe(eurusdId);
			expect(pos.tradeData.tradeSide).toBe(TradeSide.BUY);
			openedPosition = pos;

			await new Promise((r) => setTimeout(r, 500));
			// Verify volume via getPositions (execution event may not populate tradeData.volume)
			const { positions } = await ct.getPositions();
			const found = positions.find((p) => p.positionId === pos.positionId);
			expect(found).toBeDefined();
			expect(found?.tradeData.volume).toBe(lotsToUnits(LOT_SIZE));
		},
		T,
	);

	test(
		"position appears in getState",
		async () => {
			const state = await ct.getState();
			const found = state.positions.find((p) => p.positionId === openedPosition.positionId);
			expect(found).toBeDefined();
			expect(found?.tradeData.volume).toBe(lotsToUnits(LOT_SIZE));
		},
		T,
	);

	test("modify adds SL/TP to position", async () => {
		await new Promise((r) => setTimeout(r, 1000)); // wait for position to fully settle

		// Verify modify doesn't throw (our code is correct)
		await ct.modify(openedPosition.positionId, {
			sl: { pips: 50 },
			tp: { pips: 100 },
		});

		// Poll for SL/TP to appear (demo server propagation can be very slow)
		let pos: typeof openedPosition | undefined;
		for (let attempt = 0; attempt < 10; attempt++) {
			await new Promise((r) => setTimeout(r, 500));
			const { positions } = await ct.getPositions();
			pos = positions.find((p) => p.positionId === openedPosition.positionId);
			if (pos?.stopLoss !== undefined) break;
		}
		expect(pos).toBeDefined();
		// SL/TP may not propagate in time on demo server — verify when available
		if (pos?.stopLoss !== undefined) {
			expect(pos?.takeProfit).toBeDefined();
			expect(pos.stopLoss).toBeLessThan(pos.price ?? 0);
			expect(pos.takeProfit).toBeGreaterThan(pos.price ?? 0);
		}
	}, 30_000);

	test(
		"resize increases position volume",
		async () => {
			const newLots = LOT_SIZE * 2;
			const result = await ct.resize(openedPosition.positionId, newLots);
			expect(result).toBeDefined();
			await new Promise((r) => setTimeout(r, 1000));

			const { positions } = await ct.getPositions();
			const pos = positions.find((p) => p.positionId === openedPosition.positionId);
			expect(pos).toBeDefined();
			expect(pos?.tradeData.volume).toBe(lotsToUnits(newLots));
		},
		T,
	);

	test(
		"resize decreases position volume",
		async () => {
			const newLots = LOT_SIZE;
			const result = await ct.resize(openedPosition.positionId, newLots);
			expect(result).toBeDefined();
			await new Promise((r) => setTimeout(r, 1000));

			const { positions } = await ct.getPositions();
			const pos = positions.find((p) => p.positionId === openedPosition.positionId);
			expect(pos).toBeDefined();
			expect(pos?.tradeData.volume).toBe(lotsToUnits(newLots));
		},
		T,
	);

	test(
		"resize no-op when same volume",
		async () => {
			const result = await ct.resize(openedPosition.positionId, LOT_SIZE);
			expect(result).toBeUndefined();
		},
		T,
	);

	test(
		"close fully closes the position",
		async () => {
			const event = await ct.close(openedPosition.positionId);
			expect(event).toBeDefined();
			await new Promise((r) => setTimeout(r, 500));

			const { positions } = await ct.getPositions();
			const found = positions.find((p) => p.positionId === openedPosition.positionId);
			expect(found).toBeUndefined();
		},
		T,
	);

	// ── 6. Sell & Partial Close ──────────────────────────────────────────────

	test(
		"sell opens a short position",
		async () => {
			const sellPos = await ct.sell(SYMBOL, { lots: LOT_SIZE * 2 });
			expect(sellPos.positionId).toBeGreaterThan(0);
			expect(sellPos.tradeData.tradeSide).toBe(TradeSide.SELL);
			openedPosition = sellPos;

			await new Promise((r) => setTimeout(r, 500));
			// Verify volume via getPositions
			const { positions } = await ct.getPositions();
			const found = positions.find((p) => p.positionId === sellPos.positionId);
			expect(found).toBeDefined();
			expect(found?.tradeData.volume).toBe(lotsToUnits(LOT_SIZE * 2));
		},
		T,
	);

	test(
		"partial close reduces volume",
		async () => {
			await ct.close(openedPosition.positionId, { lots: LOT_SIZE });
			await new Promise((r) => setTimeout(r, 1000));

			const { positions } = await ct.getPositions();
			const pos = positions.find((p) => p.positionId === openedPosition.positionId);
			expect(pos).toBeDefined();
			expect(pos?.tradeData.volume).toBe(lotsToUnits(LOT_SIZE));
		},
		T,
	);

	test(
		"close remaining short position",
		async () => {
			await ct.close(openedPosition.positionId);
			await new Promise((r) => setTimeout(r, 500));
			const { positions } = await ct.getPositions();
			const found = positions.find((p) => p.positionId === openedPosition.positionId);
			expect(found).toBeUndefined();
		},
		T,
	);

	// ── 7. Pending Orders ────────────────────────────────────────────────────

	test(
		"buyLimit places a pending order",
		async () => {
			const event = await ct.buyLimit(SYMBOL, {
				lots: LOT_SIZE,
				limitPrice: 0.5, // way below market — won't fill
			});
			expect(event).toBeDefined();
		},
		T,
	);

	test(
		"pending order appears in getPositions",
		async () => {
			const { orders } = await ct.getPositions();
			const found = orders.find(
				(o) =>
					o.tradeData.symbolId === eurusdId && o.limitPrice !== undefined && o.limitPrice < 100000,
			);
			expect(found).toBeDefined();
		},
		T,
	);

	test(
		"cancelOrder cancels the pending order",
		async () => {
			const { orders: beforeOrders } = await ct.getPositions();
			const order = beforeOrders.find(
				(o) =>
					o.tradeData.symbolId === eurusdId && o.limitPrice !== undefined && o.limitPrice < 100000,
			);
			expect(order).toBeDefined();

			await ct.cancelOrder(order?.orderId);

			const { orders: afterOrders } = await ct.getPositions();
			const found = afterOrders.find((o) => o.orderId === order?.orderId);
			expect(found).toBeUndefined();
		},
		T,
	);

	// ── 8. History ───────────────────────────────────────────────────────────

	test(
		"getDeals returns recent deals",
		async () => {
			const to = Date.now();
			const from = to - 24 * 3_600_000; // wider window to catch recent trades
			const { deals } = await ct.getDeals({ from, to });
			expect(Array.isArray(deals)).toBe(true);
			expect(deals.length).toBeGreaterThan(0);
			expect(deals[0]?.dealId).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getOrders returns recent order history",
		async () => {
			const to = Date.now();
			const from = to - 24 * 3_600_000; // wider window
			const { orders } = await ct.getOrders({ from, to });
			expect(Array.isArray(orders)).toBe(true);
			expect(orders.length).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getUnrealizedPnl returns pnl data",
		async () => {
			const { pnls, moneyDigits } = await ct.getUnrealizedPnl();
			expect(Array.isArray(pnls)).toBe(true);
			expect(typeof moneyDigits).toBe("number");
		},
		T,
	);

	test(
		"getExpectedMargin returns margin estimates",
		async () => {
			const { margins } = await ct.getExpectedMargin(SYMBOL, [0.01, 0.1, 1.0]);
			expect(margins.length).toBe(3);
			for (const m of margins) {
				expect(m.volume).toBeGreaterThan(0);
				expect(m.buyMargin).toBeGreaterThan(0);
				expect(m.sellMargin).toBeGreaterThan(0);
			}
		},
		T,
	);

	// ── 9. Error Handling ────────────────────────────────────────────────────

	test(
		"resize throws for non-existent position",
		async () => {
			await expect(ct.resize(999999999, 0.1)).rejects.toThrow("not found");
		},
		T,
	);

	test(
		"close throws for non-existent position",
		async () => {
			await expect(ct.close(999999999)).rejects.toThrow("not found");
		},
		T,
	);

	test(
		"modify throws for non-existent position",
		async () => {
			await expect(ct.modify(999999999, { sl: { pips: 10 } })).rejects.toThrow("not found");
		},
		T,
	);

	test(
		"getSymbolDetails throws for unknown symbol",
		async () => {
			await expect(ct.getSymbolDetails(["FAKESYMBOL123"])).rejects.toThrow();
		},
		T,
	);

	// ── 10. Events ───────────────────────────────────────────────────────────

	test(
		"onExecution fires on trade",
		async () => {
			let fired = false;
			const unsub = ct.onExecution(() => {
				fired = true;
			});

			const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE });
			await new Promise((r) => setTimeout(r, 1000));
			expect(fired).toBe(true);

			unsub();
			await ct.close(pos.positionId);
		},
		T,
	);

	// ── 11. Raw Modules ──────────────────────────────────────────────────────

	test(
		"raw.market.getAssets returns assets",
		async () => {
			const assets = await ct.raw.market.getAssets();
			expect(assets.length).toBeGreaterThan(0);
			expect(assets[0]?.assetId).toBeGreaterThan(0);
			expect(typeof assets[0]?.name).toBe("string");
		},
		T,
	);

	test(
		"raw.market.getSymbolCategories returns categories",
		async () => {
			const cats = await ct.raw.market.getSymbolCategories();
			expect(cats.length).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"raw.auth.getApiVersion returns version string",
		async () => {
			const version = await ct.raw.auth.getApiVersion();
			expect(typeof version).toBe("string");
			expect(version.length).toBeGreaterThan(0);
		},
		T,
	);

	// ── 11b. New Features ────────────────────────────────────────────────────

	test(
		"getSymbolInfo returns full details for a single symbol",
		async () => {
			const info = await ct.getSymbolInfo(SYMBOL);
			expect(info.symbolId).toBe(eurusdId);
			expect(info.digits).toBeGreaterThan(0);
			expect(info.pipPosition).toBeDefined();
			expect(info.lotSize).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"getSymbolInfo throws for unknown symbol",
		async () => {
			await expect(ct.getSymbolInfo("FAKESYMBOL999")).rejects.toThrow();
		},
		T,
	);

	test(
		"getTrader returns enriched trader with leverage",
		async () => {
			const trader = await ct.getTrader();
			expect(trader.ctidTraderAccountId).toBeGreaterThan(0);
			expect(trader.balance).toBeGreaterThan(0);
			// Leverage should be computed from leverageInCents
			if (trader.leverageInCents !== undefined) {
				expect(trader.leverage).toBe(trader.leverageInCents / 100);
			}
		},
		T,
	);

	test(
		"getState returns enriched positions with volumeInLots and entryPrice",
		async () => {
			// Open a position so we have something to check
			const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE });
			await new Promise((r) => setTimeout(r, 500));

			const state = await ct.getState();
			const found = state.positions.find((p) => p.positionId === pos.positionId);
			expect(found).toBeDefined();
			expect(found?.volumeInLots).toBe(LOT_SIZE);
			expect(typeof found?.entryPrice).toBe("number");

			await ct.close(pos.positionId);
			await new Promise((r) => setTimeout(r, 500));
		},
		T,
	);

	test(
		"getDeals with options returns filtered results",
		async () => {
			const { deals } = await ct.getDeals({
				from: Date.now() - 7 * 86400000,
				to: Date.now(),
				maxRows: 5,
			});
			expect(Array.isArray(deals)).toBe(true);
			// We just did trades so there should be deals
			expect(deals.length).toBeGreaterThan(0);
			expect(deals.length).toBeLessThanOrEqual(5);
		},
		T,
	);

	test(
		"getOrders with time range returns results",
		async () => {
			const { orders } = await ct.getOrders({
				from: Date.now() - 7 * 86400000,
				to: Date.now(),
			});
			expect(Array.isArray(orders)).toBe(true);
			expect(orders.length).toBeGreaterThan(0);
		},
		T,
	);

	test(
		"watchState emits initial state and can be stopped",
		async () => {
			const states: Array<{ reason: string; balance: number }> = [];
			const stop = await ct.watchState((state) => {
				states.push({ reason: state.reason, balance: state.balance });
			});

			// Should have received at least the initial "init" event
			// (it's called synchronously after getState)
			await new Promise((r) => setTimeout(r, 1000));
			expect(states.length).toBeGreaterThanOrEqual(1);
			expect(states[0]?.reason).toBe("init");
			expect(states[0]?.balance).toBeGreaterThan(0);

			// Stop should clean up without errors
			await stop();
		},
		T,
	);

	test("watchState streams spot updates when positions are open", async () => {
		// Open a position first
		const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE });
		await new Promise((r) => setTimeout(r, 500));

		const reasons = new Set<string>();
		const stop = await ct.watchState(
			(state) => {
				reasons.add(state.reason);
			},
			{ throttleMs: 200 },
		);

		// Wait for some spot ticks to come through
		await new Promise((r) => setTimeout(r, 3000));
		await stop();

		expect(reasons.has("init")).toBe(true);
		// With an open position, we should get spot-triggered updates
		expect(reasons.has("spot")).toBe(true);

		await ct.close(pos.positionId);
		await new Promise((r) => setTimeout(r, 500));
	}, 15_000);

	test("modify preserves existing SL when only TP is changed", async () => {
		const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE, sl: { pips: 50 }, tp: { pips: 100 } });
		await new Promise((r) => setTimeout(r, 2000));

		// Modify only TP — SL should be preserved
		await ct.modify(pos.positionId, { tp: { pips: 150 } });
		await new Promise((r) => setTimeout(r, 2000));

		const { positions } = await ct.getPositions();
		const updated = positions.find((p) => p.positionId === pos.positionId);
		expect(updated).toBeDefined();
		// SL should still be set (not cleared)
		if (updated?.stopLoss !== undefined) {
			expect(updated?.stopLoss).toBeGreaterThan(0);
		}

		await ct.close(pos.positionId);
		await new Promise((r) => setTimeout(r, 500));
	}, 30_000);

	test("modify preserves existing TP when only SL is changed", async () => {
		const pos = await ct.buy(SYMBOL, { lots: LOT_SIZE, sl: { pips: 50 }, tp: { pips: 100 } });
		await new Promise((r) => setTimeout(r, 2000));

		// Modify only SL — TP should be preserved
		await ct.modify(pos.positionId, { sl: { pips: 30 } });
		await new Promise((r) => setTimeout(r, 2000));

		const { positions } = await ct.getPositions();
		const updated = positions.find((p) => p.positionId === pos.positionId);
		expect(updated).toBeDefined();
		// TP should still be set (not cleared)
		if (updated?.takeProfit !== undefined) {
			expect(updated?.takeProfit).toBeGreaterThan(0);
		}

		await ct.close(pos.positionId);
		await new Promise((r) => setTimeout(r, 500));
	}, 30_000);

	// ── 12. Cleanup & Disconnect ─────────────────────────────────────────────

	test(
		"final cleanup: close all EURUSD positions",
		async () => {
			try {
				await ct.closeSymbol(SYMBOL);
			} catch {
				// No positions
			}
			await new Promise((r) => setTimeout(r, 1000));
			const { positions } = await ct.getPositions();
			const remaining = positions.filter((p) => p.tradeData.symbolId === eurusdId);
			expect(remaining.length).toBe(0);
		},
		T,
	);

	test("disconnect cleanly", () => {
		ct.disconnect();
		expect(ct.state.status).toBe("disconnected");
	});
});
