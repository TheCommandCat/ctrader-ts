import { describe, test, expect, beforeEach, mock } from "bun:test";
import { lotsToUnits, unitsToLots, CTrader, type CTraderClientConfig } from "./client.js";
import { TradeSide, PositionStatus, OrderType, OrderStatus, ExecutionType } from "./enums.js";
import type { CTraderConnection } from "./connection.js";
import type { Position, Order, Trader, ExecutionEvent, PositionUnrealizedPnL } from "./types.js";

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
    pnls: [{ positionId: 1001, grossUnrealizedPnL: 5000, netUnrealizedPnL: 4800 }] as PositionUnrealizedPnL[],
    moneyDigits: 2,
  }));
  const mockMarketOrder = mock(async (params: Record<string, unknown>) => ({
    ctidTraderAccountId: 12345,
    executionType: ExecutionType.ORDER_FILLED,
    position: makePosition({ tradeData: { symbolId: params.symbolId as number, volume: params.volume as number, tradeSide: params.tradeSide as TradeSide } }),
  } as ExecutionEvent));
  const mockClosePosition = mock(async () => ({
    ctidTraderAccountId: 12345,
    executionType: ExecutionType.ORDER_FILLED,
  } as ExecutionEvent));
  const mockAmendSltp = mock(async () => {});
  const mockAmendOrder = mock(async () => {});
  const mockCancelOrder = mock(async () => {});

  const mockGetSymbols = mock(async () => ({
    symbols: [
      { symbolId: 1, symbolName: "EURUSD", enabled: true },
      { symbolId: 2, symbolName: "BTCUSD", enabled: true },
    ],
  }));
  const mockGetSymbolsById = mock(async () => [{
    symbolId: 1,
    digits: 5,
    pipPosition: 4,
    lotSize: 100000,
  }]);
  const mockSubscribeSpots = mock(async () => {});
  const mockUnsubscribeSpots = mock(async () => {});
  const mockOnSpot = mock(() => () => {});

  // Build a CTrader-like object with mocked internals
  const client = Object.create(CTrader.prototype) as CTrader;
  (client as any).connection = mockConnection;
  (client as any).symbols = {
    resolveId: mock(async (s: string | number) => typeof s === "number" ? s : s === "EURUSD" ? 1 : s === "BTCUSD" ? 2 : (() => { throw new Error(`Symbol not found: "${s}"`); })()),
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
      limitOrder: mock(async () => ({} as ExecutionEvent)),
      stopOrder: mock(async () => ({} as ExecutionEvent)),
      stopLimitOrder: mock(async () => ({} as ExecutionEvent)),
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
      positions.push(makePosition({ positionId: 1002, tradeData: { symbolId: 2, volume: 20000, tradeSide: TradeSide.SELL } }));

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
      positions.push(makePosition({
        positionId: 1002,
        tradeData: { symbolId: 2, volume: 20000, tradeSide: TradeSide.SELL },
      }));

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
});
