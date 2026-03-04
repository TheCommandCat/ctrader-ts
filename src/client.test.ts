import { describe, expect, mock, test } from "bun:test";
import { CTrader, lotsToUnits, unitsToLots } from "./client.js";
import type { CTraderConnection } from "./connection.js";
import { ExecutionType, OrderStatus, OrderType, PositionStatus, TradeSide } from "./enums.js";
import type { ExecutionEvent, Order, Position, PositionUnrealizedPnL, Trader } from "./types.js";

// ── Pure function tests ──────────────────────────────────────────────────────

describe("lotsToUnits", () => {
	test("converts 1 lot to 100000 units", () => {
		expect(lotsToUnits(1)).toBe(100000);
	});

	test("converts 0.1 lots to 10000 units", () => {
		expect(lotsToUnits(0.1)).toBe(10000);
	});

	test("converts 0.01 lots to 1000 units", () => {
		expect(lotsToUnits(0.01)).toBe(1000);
	});

	test("converts 0.05 lots to 5000 units", () => {
		expect(lotsToUnits(0.05)).toBe(5000);
	});

	test("converts 2.5 lots to 250000 units", () => {
		expect(lotsToUnits(2.5)).toBe(250000);
	});

	test("handles 0", () => {
		expect(lotsToUnits(0)).toBe(0);
	});

	test("rounds to avoid floating point issues", () => {
		// 0.07 * 100000 = 6999.999... in floating point
		expect(lotsToUnits(0.07)).toBe(7000);
	});
});

describe("unitsToLots", () => {
	test("converts 100000 units to 1 lot", () => {
		expect(unitsToLots(100000)).toBe(1);
	});

	test("converts 10000 units to 0.1 lots", () => {
		expect(unitsToLots(10000)).toBe(0.1);
	});

	test("converts 1000 units to 0.01 lots", () => {
		expect(unitsToLots(1000)).toBe(0.01);
	});

	test("converts 0 units to 0 lots", () => {
		expect(unitsToLots(0)).toBe(0);
	});

	test("roundtrips: lotsToUnits → unitsToLots", () => {
		const lots = [0.01, 0.05, 0.1, 0.5, 1, 5, 10];
		for (const l of lots) {
			expect(unitsToLots(lotsToUnits(l))).toBe(l);
		}
	});
});

// ── CTrader client tests (mocked raw modules) ──────────────────────────────

function makePosition(overrides: Partial<Position> = {}): Position {
	return {
		positionId: 1001,
		tradeData: {
			symbolId: 1,
			volume: 10000, // 0.1 lots
			tradeSide: TradeSide.BUY,
		},
		positionStatus: PositionStatus.OPEN,
		swap: 0,
		price: 110000, // 1.10000
		...overrides,
	};
}

function makeOrder(overrides: Partial<Order> = {}): Order {
	return {
		orderId: 2001,
		tradeData: {
			symbolId: 1,
			volume: 10000,
			tradeSide: TradeSide.BUY,
		},
		orderType: OrderType.LIMIT,
		orderStatus: OrderStatus.ACCEPTED,
		...overrides,
	};
}

function makeTrader(overrides: Partial<Trader> = {}): Trader {
	return {
		ctidTraderAccountId: 12345,
		balance: 1000000, // 10000.00 with moneyDigits=2
		depositAssetId: 1,
		moneyDigits: 2,
		...overrides,
	};
}

function makeClient() {
	const mockConnection = {
		state: { status: "connected" as const, since: Date.now() },
		isConnected: true,
		on: mock(() => () => {}),
		connect: mock(async () => {}),
		disconnect: mock(() => {}),
		send: mock(() => "msg-1"),
		request: mock(async () => ({})),
	} as unknown as CTraderConnection;

	const positions: Position[] = [makePosition()];
	const orders: Order[] = [makeOrder()];
	const trader = makeTrader();

	const mockReconcile = mock(async () => ({ positions, orders }));
	const mockGetTrader = mock(async () => trader);
	const mockGetPnl = mock(async () => ({
		pnls: [
			{ positionId: 1001, grossUnrealizedPnL: 5000, netUnrealizedPnL: 4800 },
		] as PositionUnrealizedPnL[],
		moneyDigits: 2,
	}));
	const mockMarketOrder = mock(
		async (params: Record<string, unknown>) =>
			({
				ctidTraderAccountId: 12345,
				executionType: ExecutionType.ORDER_FILLED,
				position: makePosition({
					tradeData: {
						symbolId: params.symbolId as number,
						volume: params.volume as number,
						tradeSide: params.tradeSide as TradeSide,
					},
				}),
			}) as ExecutionEvent,
	);
	const mockClosePosition = mock(
		async () =>
			({
				ctidTraderAccountId: 12345,
				executionType: ExecutionType.ORDER_FILLED,
			}) as ExecutionEvent,
	);
	const mockAmendSltp = mock(async () => {});
	const mockAmendOrder = mock(async () => {});
	const mockCancelOrder = mock(async () => {});

	const mockGetSymbols = mock(async () => ({
		symbols: [
			{ symbolId: 1, symbolName: "EURUSD", enabled: true },
			{ symbolId: 2, symbolName: "BTCUSD", enabled: true },
		],
	}));
	const mockGetSymbolsById = mock(async () => [
		{
			symbolId: 1,
			digits: 5,
			pipPosition: 4,
			lotSize: 100000,
		},
	]);
	const mockSubscribeSpots = mock(async () => {});
	const mockUnsubscribeSpots = mock(async () => {});
	const mockOnSpot = mock(() => () => {});

	// Build a CTrader-like object with mocked internals
	const client = Object.create(CTrader.prototype) as CTrader;
	(client as any).connection = mockConnection;
	(client as any).symbols = {
		resolveId: mock(async (s: string | number) =>
			typeof s === "number"
				? s
				: s === "EURUSD"
					? 1
					: s === "BTCUSD"
						? 2
						: (() => {
								throw new Error(`Symbol not found: "${s}"`);
							})(),
		),
		refresh: mock(async () => {}),
	};
	(client as any).raw = {
		auth: {
			authenticateApp: mock(async () => {}),
			authenticateAccount: mock(async () => {}),
		},
		trading: {
			marketOrder: mockMarketOrder,
			closePosition: mockClosePosition,
			amendPositionSltp: mockAmendSltp,
			amendOrder: mockAmendOrder,
			cancelOrder: mockCancelOrder,
			limitOrder: mock(async () => ({}) as ExecutionEvent),
			stopOrder: mock(async () => ({}) as ExecutionEvent),
			stopLimitOrder: mock(async () => ({}) as ExecutionEvent),
			onExecution: mock(() => () => {}),
			onOrderError: mock(() => () => {}),
			onTrailingSLChanged: mock(() => () => {}),
			setAccountId: mock(() => {}),
		},
		account: {
			reconcile: mockReconcile,
			getTrader: mockGetTrader,
			getPositionUnrealizedPnl: mockGetPnl,
			getDeals: mock(async () => ({ deals: [], hasMore: false })),
			getDealsByPosition: mock(async () => ({ deals: [], hasMore: false })),
			getDealOffsets: mock(async () => ({ offsetBy: [], offsetting: [] })),
			getOrders: mock(async () => ({ orders: [], hasMore: false })),
			getCashFlowHistory: mock(async () => []),
			getExpectedMargin: mock(async () => ({ margins: [] })),
			getDynamicLeverage: mock(async () => ({ leverageId: 1, tiers: [] })),
			getMarginCalls: mock(async () => []),
			updateMarginCall: mock(async () => {}),
			onTraderUpdated: mock(() => () => {}),
			onMarginChanged: mock(() => () => {}),
			onMarginCallTrigger: mock(() => () => {}),
			setAccountId: mock(() => {}),
		},
		market: {
			getSymbols: mockGetSymbols,
			getSymbolsById: mockGetSymbolsById,
			subscribeSpots: mockSubscribeSpots,
			unsubscribeSpots: mockUnsubscribeSpots,
			onSpot: mockOnSpot,
			onDepth: mock(() => () => {}),
			onSymbolChanged: mock(() => () => {}),
			subscribeDepth: mock(async () => {}),
			unsubscribeDepth: mock(async () => {}),
			getTrendbars: mock(async () => ({ trendbars: [], hasMore: false })),
			getTickData: mock(async () => ({ ticks: [], hasMore: false })),
			restoreSubscriptions: mock(async () => {}),
			setAccountId: mock(() => {}),
		},
	};

	return {
		client,
		mocks: {
			reconcile: mockReconcile,
			getTrader: mockGetTrader,
			getPnl: mockGetPnl,
			marketOrder: mockMarketOrder,
			closePosition: mockClosePosition,
			amendSltp: mockAmendSltp,
			amendOrder: mockAmendOrder,
			cancelOrder: mockCancelOrder,
		},
		positions,
		orders,
	};
}

describe("CTrader", () => {
	describe("resize", () => {
		test("throws for negative lots", async () => {
			const { client } = makeClient();
			await expect(client.resize(1001, -0.1)).rejects.toThrow("newLots must be >= 0");
		});

		test("throws for zero lots", async () => {
			const { client } = makeClient();
			await expect(client.resize(1001, 0)).rejects.toThrow("newLots must be > 0");
		});

		test("returns undefined when new volume equals current (no-op)", async () => {
			const { client } = makeClient();
			// Position has 10000 units = 0.1 lots
			const result = await client.resize(1001, 0.1);
			expect(result).toBeUndefined();
		});

		test("increases volume via market order with positionId", async () => {
			const { client, mocks } = makeClient();
			// Position has 10000 units (0.1 lots), resize to 0.2 lots (20000 units)
			await client.resize(1001, 0.2);

			expect(mocks.marketOrder).toHaveBeenCalledTimes(1);
			const call = (mocks.marketOrder as any).mock.calls[0][0];
			expect(call.symbolId).toBe(1);
			expect(call.tradeSide).toBe(TradeSide.BUY);
			expect(call.volume).toBe(10000); // delta: 20000 - 10000
			expect(call.positionId).toBe(1001);
		});

		test("decreases volume via partial close", async () => {
			const { client, mocks } = makeClient();
			// Position has 10000 units (0.1 lots), resize to 0.05 lots (5000 units)
			await client.resize(1001, 0.05);

			expect(mocks.closePosition).toHaveBeenCalledTimes(1);
			const args = (mocks.closePosition as any).mock.calls[0];
			expect(args[0]).toBe(1001); // positionId
			expect(args[1]).toBe(5000); // delta: 10000 - 5000
		});

		test("throws for unknown positionId", async () => {
			const { client } = makeClient();
			await expect(client.resize(9999, 0.2)).rejects.toThrow("Position 9999 not found");
		});
	});

	describe("close", () => {
		test("full close uses position volume", async () => {
			const { client, mocks } = makeClient();
			await client.close(1001);

			expect(mocks.closePosition).toHaveBeenCalledTimes(1);
			const args = (mocks.closePosition as any).mock.calls[0];
			expect(args[0]).toBe(1001);
			expect(args[1]).toBe(10000); // full volume
		});

		test("partial close converts lots to units", async () => {
			const { client, mocks } = makeClient();
			await client.close(1001, { lots: 0.05 });

			expect(mocks.closePosition).toHaveBeenCalledTimes(1);
			const args = (mocks.closePosition as any).mock.calls[0];
			expect(args[0]).toBe(1001);
			expect(args[1]).toBe(5000);
		});

		test("throws for unknown positionId", async () => {
			const { client } = makeClient();
			await expect(client.close(9999)).rejects.toThrow("Position 9999 not found");
		});
	});

	describe("closeAll", () => {
		test("closes all open positions", async () => {
			const { client, mocks, positions } = makeClient();
			positions.push(
				makePosition({
					positionId: 1002,
					tradeData: { symbolId: 2, volume: 20000, tradeSide: TradeSide.SELL },
				}),
			);

			await client.closeAll();

			expect(mocks.closePosition).toHaveBeenCalledTimes(2);
		});

		test("returns empty array when no positions", async () => {
			const { client, positions } = makeClient();
			positions.length = 0;
			const result = await client.closeAll();
			expect(result).toEqual([]);
		});
	});

	describe("closeSymbol", () => {
		test("only closes positions for the given symbol", async () => {
			const { client, mocks, positions } = makeClient();
			// Add a position for a different symbol
			positions.push(
				makePosition({
					positionId: 1002,
					tradeData: { symbolId: 2, volume: 20000, tradeSide: TradeSide.SELL },
				}),
			);

			await client.closeSymbol("EURUSD");

			// Should only close position 1001 (symbolId 1 = EURUSD), not 1002 (symbolId 2 = BTCUSD)
			expect(mocks.closePosition).toHaveBeenCalledTimes(1);
			const args = (mocks.closePosition as any).mock.calls[0];
			expect(args[0]).toBe(1001);
		});
	});

	describe("getState", () => {
		test("returns computed account state", async () => {
			const { client } = makeClient();
			const state = await client.getState();

			// Trader balance: 1000000 / 100 = 10000.00
			expect(state.balance).toBe(10000);
			// PnL: 4800 / 100 = 48.00
			expect(state.unrealizedPnl).toBe(48);
			// Equity: balance + pnl
			expect(state.equity).toBe(10048);
			// moneyDigits
			expect(state.moneyDigits).toBe(2);
			// Positions and orders are forwarded
			expect(state.positions.length).toBe(1);
			expect(state.orders.length).toBe(1);
		});

		test("marginLevel is undefined when no positions with margin", async () => {
			const { client, positions } = makeClient();
			// All positions have usedMargin undefined → total = 0
			positions[0]!.usedMargin = undefined;
			const state = await client.getState();
			expect(state.usedMargin).toBe(0);
			expect(state.marginLevel).toBeUndefined();
		});

		test("computes marginLevel when usedMargin > 0", async () => {
			const { client, positions } = makeClient();
			positions[0]!.usedMargin = 100000; // 1000.00
			const state = await client.getState();
			expect(state.usedMargin).toBe(1000);
			// marginLevel = equity / usedMargin * 100
			expect(state.marginLevel).toBeCloseTo((state.equity / 1000) * 100, 2);
		});
	});

	describe("setAccount", () => {
		test("updates accountId on all raw modules", () => {
			const { client } = makeClient();
			client.setAccount(99999);
			expect((client.raw.trading as any).setAccountId).toHaveBeenCalledWith(99999);
			expect((client.raw.account as any).setAccountId).toHaveBeenCalledWith(99999);
			expect((client.raw.market as any).setAccountId).toHaveBeenCalledWith(99999);
		});
	});

	describe("cancelOrder", () => {
		test("delegates to raw trading module", async () => {
			const { client, mocks } = makeClient();
			await client.cancelOrder(2001);
			expect(mocks.cancelOrder).toHaveBeenCalledWith(2001);
		});
	});

	describe("getDeals", () => {
		test("passes timestamp params through", async () => {
			const { client } = makeClient();
			const from = Date.now() - 86400000;
			const to = Date.now();
			await client.getDeals({ from, to, maxRows: 50 });

			const mock = (client.raw.account as any).getDeals;
			expect(mock).toHaveBeenCalledTimes(1);
			const args = mock.mock.calls[0][0];
			expect(args.fromTimestamp).toBe(from);
			expect(args.toTimestamp).toBe(to);
			expect(args.maxRows).toBe(50);
		});

		test("omits undefined params", async () => {
			const { client } = makeClient();
			await client.getDeals();

			const mock = (client.raw.account as any).getDeals;
			const args = mock.mock.calls[0][0];
			expect(args.fromTimestamp).toBeDefined();
		});
	});

	describe("buy", () => {
		test("calls marketOrder with TradeSide.BUY and correct symbolId/volume", async () => {
			const { client, mocks } = makeClient();
			const _pos = await client.buy("EURUSD", { lots: 0.1 });

			expect(mocks.marketOrder).toHaveBeenCalledTimes(1);
			const call = (mocks.marketOrder as any).mock.calls[0][0];
			expect(call.symbolId).toBe(1);
			expect(call.tradeSide).toBe(TradeSide.BUY);
			expect(call.volume).toBe(10000);
		});

		test("returns the position from ExecutionEvent", async () => {
			const { client } = makeClient();
			const pos = await client.buy("EURUSD", { lots: 0.1 });

			expect(pos.positionId).toBe(1001);
			expect(pos.tradeData.symbolId).toBe(1);
			expect(pos.tradeData.tradeSide).toBe(TradeSide.BUY);
		});

		test("resolves symbol name to ID", async () => {
			const { client, mocks } = makeClient();
			await client.buy("BTCUSD", { lots: 0.01 });

			const call = (mocks.marketOrder as any).mock.calls[0][0];
			expect(call.symbolId).toBe(2);
		});

		test("accepts numeric symbol ID", async () => {
			const { client, mocks } = makeClient();
			await client.buy(1, { lots: 0.1 });

			const call = (mocks.marketOrder as any).mock.calls[0][0];
			expect(call.symbolId).toBe(1);
		});
	});

	describe("sell", () => {
		test("calls marketOrder with TradeSide.SELL and correct symbolId/volume", async () => {
			const { client, mocks } = makeClient();
			const _pos = await client.sell("EURUSD", { lots: 0.5 });

			expect(mocks.marketOrder).toHaveBeenCalledTimes(1);
			const call = (mocks.marketOrder as any).mock.calls[0][0];
			expect(call.symbolId).toBe(1);
			expect(call.tradeSide).toBe(TradeSide.SELL);
			expect(call.volume).toBe(50000);
		});

		test("returns the position from ExecutionEvent", async () => {
			const { client } = makeClient();
			const pos = await client.sell("EURUSD", { lots: 0.1 });

			expect(pos.positionId).toBe(1001);
			expect(pos.tradeData.tradeSide).toBe(TradeSide.SELL);
		});
	});

	describe("getTrader", () => {
		test("returns enriched trader with leverage computed from leverageInCents", async () => {
			const { client, mocks } = makeClient();
			(mocks.getTrader as any).mockImplementation(async () =>
				makeTrader({ leverageInCents: 10000 }),
			);
			const trader = await client.getTrader();

			expect(trader.leverage).toBe(100);
			expect(trader.ctidTraderAccountId).toBe(12345);
		});

		test("leverage is undefined when leverageInCents is undefined", async () => {
			const { client, mocks } = makeClient();
			(mocks.getTrader as any).mockImplementation(async () =>
				makeTrader({ leverageInCents: undefined }),
			);
			const trader = await client.getTrader();

			expect(trader.leverage).toBeUndefined();
		});

		test("leverage 50000 cents = 500", async () => {
			const { client, mocks } = makeClient();
			(mocks.getTrader as any).mockImplementation(async () =>
				makeTrader({ leverageInCents: 50000 }),
			);
			const trader = await client.getTrader();

			expect(trader.leverage).toBe(500);
		});
	});

	describe("modify", () => {
		test("preserves existing TP when only SL is modified", async () => {
			const { client, mocks, positions } = makeClient();
			// Set existing SL and TP on the position
			positions[0]!.stopLoss = 1.08;
			positions[0]!.takeProfit = 1.15;
			positions[0]!.price = 1.1;

			// Modify with empty opts → resolveSlTp returns empty → preserves existing
			await client.modify(1001, {});

			expect(mocks.amendSltp).toHaveBeenCalledTimes(1);
			const args = (mocks.amendSltp as any).mock.calls[0];
			expect(args[0]).toBe(1001);
			expect(args[1].stopLoss).toBe(1.08);
			expect(args[1].takeProfit).toBe(1.15);
		});

		test("preserves existing SL when TP is not provided", async () => {
			const { client, mocks, positions } = makeClient();
			positions[0]!.stopLoss = 1.05;
			positions[0]!.takeProfit = undefined;
			positions[0]!.price = 1.1;

			await client.modify(1001, {});

			expect(mocks.amendSltp).toHaveBeenCalledTimes(1);
			const args = (mocks.amendSltp as any).mock.calls[0];
			expect(args[1].stopLoss).toBe(1.05);
			// TP was undefined so it should not be set
			expect(args[1].takeProfit).toBeUndefined();
		});

		test("throws for unknown positionId", async () => {
			const { client } = makeClient();
			await expect(client.modify(9999, {})).rejects.toThrow("Position 9999 not found");
		});

		test("calls amendPositionSltp with correct positionId", async () => {
			const { client, mocks, positions } = makeClient();
			positions[0]!.price = 1.1;

			await client.modify(1001, {});

			expect(mocks.amendSltp).toHaveBeenCalledTimes(1);
			const args = (mocks.amendSltp as any).mock.calls[0];
			expect(args[0]).toBe(1001);
		});
	});

	describe("getOrders", () => {
		test("passes timestamp params through", async () => {
			const { client } = makeClient();
			const from = Date.now() - 86400000;
			const to = Date.now();
			await client.getOrders({ from, to });

			const mockFn = (client.raw.account as any).getOrders;
			expect(mockFn).toHaveBeenCalledTimes(1);
			const args = mockFn.mock.calls[0][0];
			expect(args.fromTimestamp).toBe(from);
			expect(args.toTimestamp).toBe(to);
		});

		test("defaults to last 24h when no params", async () => {
			const { client } = makeClient();
			const _before = Date.now();
			await client.getOrders();

			const mockFn = (client.raw.account as any).getOrders;
			const args = mockFn.mock.calls[0][0];
			expect(args.fromTimestamp).toBeDefined();
			expect(args.toTimestamp).toBeDefined();
			// fromTimestamp should be roughly 24h before now
			expect(args.toTimestamp - args.fromTimestamp).toBeCloseTo(24 * 60 * 60 * 1000, -2);
		});
	});

	describe("getDealsByPosition", () => {
		test("delegates to raw account module", async () => {
			const { client } = makeClient();
			await client.getDealsByPosition(1001);

			const mockFn = (client.raw.account as any).getDealsByPosition;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toBe(1001);
		});

		test("passes optional from/to timestamps", async () => {
			const { client } = makeClient();
			const from = 1000000;
			const to = 2000000;
			await client.getDealsByPosition(1001, from, to);

			const mockFn = (client.raw.account as any).getDealsByPosition;
			const params = mockFn.mock.calls[0][1];
			expect(params.fromTimestamp).toBe(from);
			expect(params.toTimestamp).toBe(to);
		});

		test("omits timestamps when not provided", async () => {
			const { client } = makeClient();
			await client.getDealsByPosition(1001);

			const mockFn = (client.raw.account as any).getDealsByPosition;
			const params = mockFn.mock.calls[0][1];
			expect(params.fromTimestamp).toBeUndefined();
			expect(params.toTimestamp).toBeUndefined();
		});
	});

	describe("getCashFlow", () => {
		test("passes from/to through to raw module", async () => {
			const { client } = makeClient();
			const from = 1000000;
			const to = 2000000;
			await client.getCashFlow(from, to);

			const mockFn = (client.raw.account as any).getCashFlowHistory;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toBe(from);
			expect(mockFn.mock.calls[0][1]).toBe(to);
		});
	});

	describe("getExpectedMargin", () => {
		test("resolves symbol and converts lots to units", async () => {
			const { client } = makeClient();
			await client.getExpectedMargin("EURUSD", [0.1, 1.0]);

			const mockFn = (client.raw.account as any).getExpectedMargin;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toBe(1); // resolved symbol ID
			expect(mockFn.mock.calls[0][1]).toEqual([10000, 100000]); // lots → units
		});

		test("accepts numeric symbol ID", async () => {
			const { client } = makeClient();
			await client.getExpectedMargin(2, [0.5]);

			const mockFn = (client.raw.account as any).getExpectedMargin;
			expect(mockFn.mock.calls[0][0]).toBe(2);
			expect(mockFn.mock.calls[0][1]).toEqual([50000]);
		});
	});

	describe("getUnrealizedPnl", () => {
		test("delegates to raw account module", async () => {
			const { client } = makeClient();
			const result = await client.getUnrealizedPnl();

			const mockFn = (client.raw.account as any).getPositionUnrealizedPnl;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(result.pnls).toBeDefined();
			expect(result.moneyDigits).toBe(2);
		});
	});

	describe("getSymbols", () => {
		test("delegates to raw market module", async () => {
			const { client } = makeClient();
			const symbols = await client.getSymbols();

			const mockFn = (client.raw.market as any).getSymbols;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toBe(false);
			expect(symbols.length).toBe(2);
			expect(symbols[0]?.symbolName).toBe("EURUSD");
		});

		test("passes includeArchived flag", async () => {
			const { client } = makeClient();
			await client.getSymbols(true);

			const mockFn = (client.raw.market as any).getSymbols;
			expect(mockFn.mock.calls[0][0]).toBe(true);
		});
	});

	describe("getSymbolDetails", () => {
		test("resolves symbol names to IDs and calls getSymbolsById", async () => {
			const { client } = makeClient();
			await client.getSymbolDetails(["EURUSD"]);

			const mockFn = (client.raw.market as any).getSymbolsById;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toEqual([1]);
		});

		test("accepts numeric IDs directly", async () => {
			const { client } = makeClient();
			await client.getSymbolDetails([2]);

			const mockFn = (client.raw.market as any).getSymbolsById;
			expect(mockFn.mock.calls[0][0]).toEqual([2]);
		});

		test("handles mixed names and IDs", async () => {
			const { client } = makeClient();
			await client.getSymbolDetails(["EURUSD", 2]);

			const mockFn = (client.raw.market as any).getSymbolsById;
			expect(mockFn.mock.calls[0][0]).toEqual([1, 2]);
		});
	});

	describe("getSymbolInfo", () => {
		test("returns single symbol details", async () => {
			const { client } = makeClient();
			const info = await client.getSymbolInfo("EURUSD");

			expect(info.symbolId).toBe(1);
			expect(info.digits).toBe(5);
		});

		test("throws when symbol not found", async () => {
			const { client } = makeClient();
			// Mock getSymbolsById to return empty array
			(client.raw.market as any).getSymbolsById = mock(async () => []);
			await expect(client.getSymbolInfo("EURUSD")).rejects.toThrow("Symbol EURUSD not found");
		});

		test("throws for numeric ID not found", async () => {
			const { client } = makeClient();
			(client.raw.market as any).getSymbolsById = mock(async () => []);
			await expect(client.getSymbolInfo(99)).rejects.toThrow("Symbol 99 not found");
		});
	});

	describe("refreshSymbols", () => {
		test("delegates to symbol cache refresh", async () => {
			const { client } = makeClient();
			await client.refreshSymbols();

			const mockFn = (client as any).symbols.refresh;
			expect(mockFn).toHaveBeenCalledTimes(1);
		});
	});

	describe("watchSpots", () => {
		test("calls subscribeSpots with resolved IDs", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			await client.watchSpots(["EURUSD", "BTCUSD"], handler);

			const mockFn = (client.raw.market as any).subscribeSpots;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toEqual([1, 2]);
		});

		test("registers onSpot handler", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			await client.watchSpots(["EURUSD"], handler);

			const mockFn = (client.raw.market as any).onSpot;
			expect(mockFn).toHaveBeenCalledTimes(1);
		});

		test("returned unsubscribe calls unsubscribeSpots and removes handler", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = await client.watchSpots(["EURUSD"], handler);

			await unsub();

			const mockFn = (client.raw.market as any).unsubscribeSpots;
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(mockFn.mock.calls[0][0]).toEqual([1]);
		});
	});

	describe("watchState", () => {
		test("calls getState initially and emits init event", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = await client.watchState(handler, { throttleMs: 0 });

			// handler should be called with initial state
			expect(handler).toHaveBeenCalledTimes(1);
			const firstCall = (handler as any).mock.calls[0][0];
			expect(firstCall.reason).toBe("init");
			expect(firstCall.balance).toBeDefined();
			expect(firstCall.timestamp).toBeDefined();

			await unsub();
		});

		test("registers execution, trader, margin, and spot handlers", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = await client.watchState(handler, { throttleMs: 0 });

			// Should have registered handlers on raw modules
			expect((client.raw.trading as any).onExecution).toHaveBeenCalled();
			expect((client.raw.account as any).onTraderUpdated).toHaveBeenCalled();
			expect((client.raw.account as any).onMarginChanged).toHaveBeenCalled();
			expect((client.raw.market as any).onSpot).toHaveBeenCalled();

			await unsub();
		});

		test("subscribes to spots for open position symbols", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = await client.watchState(handler, { throttleMs: 0 });

			const mockFn = (client.raw.market as any).subscribeSpots;
			// Should subscribe for symbolId 1 (the open position's symbol)
			expect(mockFn).toHaveBeenCalled();

			await unsub();
		});

		test("returned unsubscribe cleans up all listeners", async () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = await client.watchState(handler, { throttleMs: 0 });

			await unsub();

			// unsubscribeSpots should have been called for cleanup
			const mockFn = (client.raw.market as any).unsubscribeSpots;
			expect(mockFn).toHaveBeenCalled();
		});
	});

	describe("buyLimit", () => {
		test("calls limitOrder with BUY side and limitPrice", async () => {
			const { client } = makeClient();
			await client.buyLimit("EURUSD", { lots: 0.1, limitPrice: 1.08 });

			const mockFn = (client.raw.trading as any).limitOrder;
			expect(mockFn).toHaveBeenCalledTimes(1);
			const call = mockFn.mock.calls[0][0];
			expect(call.symbolId).toBe(1);
			expect(call.tradeSide).toBe(TradeSide.BUY);
			expect(call.volume).toBe(10000);
			expect(call.limitPrice).toBe(1.08);
		});
	});

	describe("sellLimit", () => {
		test("calls limitOrder with SELL side and limitPrice", async () => {
			const { client } = makeClient();
			await client.sellLimit("EURUSD", { lots: 0.1, limitPrice: 1.12 });

			const mockFn = (client.raw.trading as any).limitOrder;
			expect(mockFn).toHaveBeenCalledTimes(1);
			const call = mockFn.mock.calls[0][0];
			expect(call.tradeSide).toBe(TradeSide.SELL);
			expect(call.limitPrice).toBe(1.12);
		});
	});

	describe("buyStop", () => {
		test("calls stopOrder with BUY side and stopPrice", async () => {
			const { client } = makeClient();
			await client.buyStop("EURUSD", { lots: 0.1, stopPrice: 1.105 });

			const mockFn = (client.raw.trading as any).stopOrder;
			expect(mockFn).toHaveBeenCalledTimes(1);
			const call = mockFn.mock.calls[0][0];
			expect(call.symbolId).toBe(1);
			expect(call.tradeSide).toBe(TradeSide.BUY);
			expect(call.volume).toBe(10000);
			expect(call.stopPrice).toBe(1.105);
		});
	});

	describe("sellStop", () => {
		test("calls stopOrder with SELL side and stopPrice", async () => {
			const { client } = makeClient();
			await client.sellStop("EURUSD", { lots: 0.1, stopPrice: 1.095 });

			const mockFn = (client.raw.trading as any).stopOrder;
			expect(mockFn).toHaveBeenCalledTimes(1);
			const call = mockFn.mock.calls[0][0];
			expect(call.tradeSide).toBe(TradeSide.SELL);
			expect(call.stopPrice).toBe(1.095);
		});
	});

	describe("modifyOrder", () => {
		test("delegates to raw trading amendOrder", async () => {
			const { client, mocks } = makeClient();
			const params = { limitPrice: 1.09 };
			await client.modifyOrder(2001, params);

			expect(mocks.amendOrder).toHaveBeenCalledTimes(1);
			const args = (mocks.amendOrder as any).mock.calls[0];
			expect(args[0]).toBe(2001);
			expect(args[1]).toBe(params);
		});
	});

	describe("events", () => {
		test("onExecution delegates to raw trading and returns unsub", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onExecution(handler);

			expect((client.raw.trading as any).onExecution).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onOrderError delegates to raw trading", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onOrderError(handler);

			expect((client.raw.trading as any).onOrderError).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onTrailingSLChanged delegates to raw trading", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onTrailingSLChanged(handler);

			expect((client.raw.trading as any).onTrailingSLChanged).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onTraderUpdated delegates to raw account", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onTraderUpdated(handler);

			expect((client.raw.account as any).onTraderUpdated).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onMarginChanged delegates to raw account", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onMarginChanged(handler);

			expect((client.raw.account as any).onMarginChanged).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onMarginCallTrigger delegates to raw account", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onMarginCallTrigger(handler);

			expect((client.raw.account as any).onMarginCallTrigger).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onSymbolChanged delegates to raw market", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onSymbolChanged(handler);

			expect((client.raw.market as any).onSymbolChanged).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onDepth delegates to raw market", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onDepth(handler);

			expect((client.raw.market as any).onDepth).toHaveBeenCalledTimes(1);
			expect(typeof unsub).toBe("function");
		});

		test("onClientDisconnect delegates to connection.on", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onClientDisconnect(handler);

			expect((client.connection as any).on).toHaveBeenCalled();
			expect(typeof unsub).toBe("function");
		});

		test("onTokenInvalidated delegates to connection.on", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onTokenInvalidated(handler);

			expect((client.connection as any).on).toHaveBeenCalled();
			expect(typeof unsub).toBe("function");
		});

		test("onAccountDisconnect delegates to connection.on", () => {
			const { client } = makeClient();
			const handler = mock(() => {});
			const unsub = client.onAccountDisconnect(handler);

			expect((client.connection as any).on).toHaveBeenCalled();
			expect(typeof unsub).toBe("function");
		});
	});

	describe("state", () => {
		test("returns connection state", () => {
			const { client } = makeClient();
			const state = client.state;

			expect(state.status).toBe("connected");
		});
	});

	describe("isConnected", () => {
		test("returns true when connected", () => {
			const { client } = makeClient();
			expect(client.isConnected).toBe(true);
		});
	});

	describe("disconnect", () => {
		test("calls connection.disconnect", () => {
			const { client } = makeClient();
			client.disconnect();

			expect((client.connection as any).disconnect).toHaveBeenCalledTimes(1);
		});
	});
});
