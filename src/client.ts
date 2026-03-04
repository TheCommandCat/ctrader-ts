import {
  CTraderConnection,
  type CTraderConnectionConfig,
} from "./connection.js";
import { CTraderAuth } from "./modules/auth.js";
import {
  CTraderTrading,
  type AmendOrderParams,
  type AmendSltpParams,
  type LimitOrderParams,
  type StopLimitOrderParams,
  type StopOrderParams,
} from "./modules/trading.js";
import { CTraderAccount } from "./modules/account.js";
import {
  CTraderMarket,
  type GetTickDataParams,
  type GetTrendbarsParams,
} from "./modules/market.js";
import { SymbolCache } from "./symbol-cache.js";
import { PayloadType, TradeSide } from "./enums.js";
import { resolveSlTp } from "./helpers.js";
import type {
  AccountState,
  ConnectionState,
  Deal,
  DealOffset,
  DepositWithdraw,
  DepthEvent,
  DynamicLeverage,
  EnrichedPosition,
  EnrichedTrader,
  ExecutionEvent,
  ExpectedMargin,
  FullSymbol,
  GetDealsOptions,
  GetOrdersOptions,
  LightSymbol,
  LiveAccountState,
  MarginCall,
  MarginCallEvent,
  MarginChangedEvent,
  Order,
  OrderErrorEvent,
  Position,
  PositionUnrealizedPnL,
  SlTpSpec,
  SpotEvent,
  SymbolChangedEvent,
  TickData,
  TraderUpdatedEvent,
  TrailingSLChangedEvent,
  Trendbar,
  TokenInvalidatedEvent,
  ClientDisconnectEvent,
  AccountDisconnectEvent,
  WatchStateOptions,
} from "./types.js";

export interface CTraderClientConfig {
  /** Hostname — e.g. "demo.ctraderapi.com" or "live.ctraderapi.com" */
  host: string;
  /** Port — default 5035 */
  port?: number;
  /** Numeric cTID trader account ID */
  accountId: number;
  /** Max reconnect attempts before giving up. Default: unlimited */
  maxReconnectAttempts?: number;
  /** Per-request timeout in ms. Default: 15000 */
  requestTimeoutMs?: number;
  /** Called after TCP reconnect (not initial connect). Use for re-auth + subscription restore. */
  onReconnect?: () => Promise<void>;
}

/** Volume in lots, e.g. 0.01, 0.1, 1.0 */
export type Lots = number;

/** Symbol name ("EURUSD") or numeric symbol ID */
export type Symbol = string | number;

export interface MarketOrderOptions {
  /** Volume in lots (1 lot = 100,000 units). Min is broker-dependent, typically 0.01 */
  lots: Lots;
  /** Stop loss — specify in pips, dollars, or equity fraction */
  sl?: SlTpSpec;
  /** Take profit — specify in pips, dollars, or equity fraction */
  tp?: SlTpSpec;
  /** Enable trailing stop loss */
  trailingStopLoss?: boolean;
  /** Guaranteed stop loss (for accounts that support it) */
  guaranteedStopLoss?: boolean;
  /** Arbitrary label for identifying bot orders */
  label?: string;
  /** Arbitrary comment visible in trade history */
  comment?: string;
  /** Your own order ID for deduplication or tracking */
  clientOrderId?: string;
}

export interface LimitOrderOptions extends MarketOrderOptions {
  /** Limit price — order fills only at this price or better */
  limitPrice: number;
  /** Order expiry as Unix timestamp in ms. Required for GTD orders */
  expirationTimestamp?: number;
}

export interface StopOrderOptions extends MarketOrderOptions {
  /** Stop trigger price */
  stopPrice: number;
  /** Order expiry as Unix timestamp in ms */
  expirationTimestamp?: number;
}

export interface StopLimitOptions extends MarketOrderOptions {
  /** Stop trigger price — when hit, a limit order is placed */
  stopPrice: number;
  /** Max slippage from the stop price for the resulting limit order, in points */
  slippageInPoints: number;
  /** Order expiry as Unix timestamp in ms */
  expirationTimestamp?: number;
}

export interface ModifyOptions {
  /** New stop loss — specify in pips, dollars, or equity fraction */
  sl?: SlTpSpec;
  /** New take profit — specify in pips, dollars, or equity fraction */
  tp?: SlTpSpec;
}

export interface SpotPrice {
  /** Symbol name */
  symbol: string;
  /** Symbol numeric ID */
  symbolId: number;
  /** Raw bid (divide by 100000 for decimal) */
  bid?: number;
  /** Raw ask (divide by 100000 for decimal) */
  ask?: number;
  /** Bid as decimal price */
  bidDecimal?: number;
  /** Ask as decimal price */
  askDecimal?: number;
  /** Unix timestamp in ms */
  timestamp?: number;
}

export class CTrader {
  /** Low-level WebSocket connection — use for raw events and advanced control */
  readonly connection: CTraderConnection;

  /** Raw protocol modules — full access to every API parameter */
  readonly raw: {
    auth: CTraderAuth;
    trading: CTraderTrading;
    account: CTraderAccount;
    market: CTraderMarket;
  };

  private readonly symbols: SymbolCache;

  constructor(config: CTraderClientConfig) {
    const connConfig: CTraderConnectionConfig = { host: config.host };
    if (config.port !== undefined) connConfig.port = config.port;
    if (config.maxReconnectAttempts !== undefined)
      connConfig.maxReconnectAttempts = config.maxReconnectAttempts;
    if (config.requestTimeoutMs !== undefined)
      connConfig.requestTimeoutMs = config.requestTimeoutMs;
    if (config.onReconnect !== undefined)
      connConfig.onReconnect = config.onReconnect;

    this.connection = new CTraderConnection(connConfig);

    const auth = new CTraderAuth(this.connection);
    const trading = new CTraderTrading(this.connection, config.accountId);
    const account = new CTraderAccount(this.connection, config.accountId);
    const market = new CTraderMarket(this.connection, config.accountId);

    this.raw = { auth, trading, account, market };
    this.symbols = new SymbolCache(market);
  }

  // ─── Connection ──────────────────────────────────────────────────────────

  /** "connected" | "connecting" | "reconnecting" | "disconnected" */
  get state(): ConnectionState {
    return this.connection.state;
  }

  /** True when the WebSocket is open and ready */
  get isConnected(): boolean {
    return this.connection.isConnected;
  }

  /**
   * Switch to a different account without reconnecting.
   * If the account needs separate auth call raw.auth.authenticateAccount() first.
   */
  setAccount(accountId: number): void {
    this.raw.trading.setAccountId(accountId);
    this.raw.account.setAccountId(accountId);
    this.raw.market.setAccountId(accountId);
  }

  /** Disconnect the WebSocket and stop reconnecting */
  disconnect(): void {
    this.connection.disconnect();
  }

  // ─── Symbols ─────────────────────────────────────────────────────────────

  /**
   * All available symbols for the account. Result is cached.
   * @param includeArchived - Include archived/delisted symbols. Default: false
   */
  async getSymbols(includeArchived = false): Promise<LightSymbol[]> {
    const { symbols } = await this.raw.market.getSymbols(includeArchived);
    return symbols;
  }

  /**
   * Full symbol details: spread, commission, swap rates, lot size, trading hours.
   * @param symbolsOrIds - Symbol names ("EURUSD") or numeric IDs, or a mix
   */
  async getSymbolDetails(symbolsOrIds: Symbol[]): Promise<FullSymbol[]> {
    const ids = await Promise.all(
      symbolsOrIds.map((s) => this.symbols.resolveId(s)),
    );
    return this.raw.market.getSymbolsById(ids);
  }

  /**
   * Full details for a single symbol: spread, commission, swap, lot size, schedule.
   * Convenience wrapper around getSymbolDetails() for when you only need one.
   * @param symbol - Symbol name ("EURUSD") or numeric ID
   */
  async getSymbolInfo(symbol: Symbol): Promise<FullSymbol> {
    const [info] = await this.getSymbolDetails([symbol]);
    if (info === undefined) throw new Error(`Symbol ${String(symbol)} not found`);
    return info;
  }

  /** Force-refresh the symbol name→ID cache. Call if the broker adds new symbols. */
  async refreshSymbols(): Promise<void> {
    await this.symbols.refresh();
  }

  // ─── Account ─────────────────────────────────────────────────────────────

  /** Trader profile with computed `leverage` field (e.g. 100, 200, 500) */
  async getTrader(): Promise<EnrichedTrader> {
    const trader = await this.raw.account.getTrader();
    return {
      ...trader,
      leverage:
        trader.leverageInCents !== undefined
          ? trader.leverageInCents / 100
          : undefined,
    };
  }

  /**
   * All open positions and pending orders.
   * @param returnProtectionOrders - Also return SL/TP as separate order objects
   */
  async getPositions(
    returnProtectionOrders = false,
  ): Promise<{ positions: Position[]; orders: Order[] }> {
    return this.raw.account.reconcile(returnProtectionOrders);
  }

  /**
   * Call this first to understand the current account situation before making any trading decisions.
   * Returns a complete snapshot: balance, equity, margin, P&L, all positions and orders.
   */
  async getState(): Promise<AccountState> {
    const [trader, reconciled, pnlData] = await Promise.all([
      this.raw.account.getTrader(),
      this.raw.account.reconcile(),
      this.raw.account.getPositionUnrealizedPnl(),
    ]);

    const moneyDigits = trader.moneyDigits ?? 2;
    const divisor = Math.pow(10, moneyDigits);

    const unrealizedPnl =
      pnlData.pnls.reduce((sum, p) => sum + p.netUnrealizedPnL, 0) / divisor;

    const balance = trader.balance / divisor;
    const equity = balance + unrealizedPnl;

    const usedMargin =
      reconciled.positions.reduce((sum, p) => sum + (p.usedMargin ?? 0), 0) /
      divisor;

    const freeMargin = equity - usedMargin;

    const enrichedPositions: EnrichedPosition[] = reconciled.positions.map((p) => ({
      ...p,
      volumeInLots: unitsToLots(p.tradeData.volume),
      entryPrice: p.price,
    }));

    const result: AccountState = {
      balance,
      equity,
      usedMargin,
      freeMargin,
      unrealizedPnl,
      positions: enrichedPositions,
      orders: reconciled.orders,
      moneyDigits,
    };

    if (usedMargin > 0) {
      result.marginLevel = (equity / usedMargin) * 100;
    }

    return result;
  }

  /**
   * Deal (execution) history. Defaults to last 24 hours if no time range specified.
   * @param opts - Optional time range and row limit
   */
  async getDeals(
    opts: GetDealsOptions = {},
  ): Promise<{ deals: Deal[]; hasMore: boolean }> {
    const now = Date.now();
    const params: {
      fromTimestamp: number;
      toTimestamp: number;
      maxRows?: number;
    } = {
      fromTimestamp: opts.from ?? now - 24 * 60 * 60 * 1000,
      toTimestamp: opts.to ?? now,
    };
    if (opts.maxRows !== undefined) params.maxRows = opts.maxRows;
    return this.raw.account.getDeals(params);
  }

  /** Deal history for a specific position */
  async getDealsByPosition(
    positionId: number,
    from?: number,
    to?: number,
  ): Promise<Deal[]> {
    const params: { fromTimestamp?: number; toTimestamp?: number } = {};
    if (from !== undefined) params.fromTimestamp = from;
    if (to !== undefined) params.toTimestamp = to;
    const { deals } = await this.raw.account.getDealsByPosition(
      positionId,
      params,
    );
    return deals;
  }

  /** Which deals closed (offsetBy) and were closed by (offsetting) a given deal */
  async getDealOffsets(
    dealId: number,
  ): Promise<{ offsetBy: DealOffset[]; offsetting: DealOffset[] }> {
    return this.raw.account.getDealOffsets(dealId);
  }

  /**
   * Order history. Defaults to last 24 hours if no time range specified.
   * @param opts - Optional time range
   */
  async getOrders(
    opts: GetOrdersOptions = {},
  ): Promise<{ orders: Order[]; hasMore: boolean }> {
    const now = Date.now();
    return this.raw.account.getOrders({
      fromTimestamp: opts.from ?? now - 24 * 60 * 60 * 1000,
      toTimestamp: opts.to ?? now,
    });
  }

  /** Deposit/withdrawal history. Max range: 7 days */
  async getCashFlow(from: number, to: number): Promise<DepositWithdraw[]> {
    return this.raw.account.getCashFlowHistory(from, to);
  }

  /**
   * Estimate required margin before placing an order.
   * @param symbol - Symbol name or ID
   * @param volumesInLots - One or more volumes to estimate (e.g. [0.1, 0.5, 1.0])
   */
  async getExpectedMargin(
    symbol: Symbol,
    volumesInLots: Lots[],
  ): Promise<{ margins: ExpectedMargin[]; moneyDigits?: number }> {
    const id = await this.symbols.resolveId(symbol);
    return this.raw.account.getExpectedMargin(
      id,
      volumesInLots.map(lotsToUnits),
    );
  }

  /** Unrealised P&L for all open positions */
  async getUnrealizedPnl(): Promise<{
    pnls: PositionUnrealizedPnL[];
    moneyDigits: number;
  }> {
    return this.raw.account.getPositionUnrealizedPnl();
  }

  /** Dynamic leverage tiers for a leverage profile (leverageId comes from symbol details) */
  async getDynamicLeverage(leverageId: number): Promise<DynamicLeverage> {
    return this.raw.account.getDynamicLeverage(leverageId);
  }

  /** Margin call threshold levels (up to 3) */
  async getMarginCalls(): Promise<MarginCall[]> {
    return this.raw.account.getMarginCalls();
  }

  /** Update a margin call threshold level */
  async updateMarginCall(marginCall: MarginCall): Promise<void> {
    return this.raw.account.updateMarginCall(marginCall);
  }

  // ─── Trading ─────────────────────────────────────────────────────────────

  /**
   * Market BUY — executes immediately at best available price.
   * Returns the opened Position directly (extracted from ExecutionEvent).
   * SL/TP can be specified in pips, dollars, or equity fraction.
   * @param symbol - "EURUSD", "XAUUSD", or numeric symbol ID
   * @param opts - lots, sl?, tp?, label?, etc.
   */
  async buy(symbol: Symbol, opts: MarketOrderOptions): Promise<Position> {
    return this.executeMarketOrder(symbol, TradeSide.BUY, opts);
  }

  /**
   * Market SELL — executes immediately at best available price.
   * Returns the opened Position directly (extracted from ExecutionEvent).
   * SL/TP can be specified in pips, dollars, or equity fraction.
   * @param symbol - "EURUSD", "XAUUSD", or numeric symbol ID
   * @param opts - lots, sl?, tp?, label?, etc.
   */
  async sell(symbol: Symbol, opts: MarketOrderOptions): Promise<Position> {
    return this.executeMarketOrder(symbol, TradeSide.SELL, opts);
  }

  /**
   * Limit BUY — fills only when price drops to limitPrice or lower.
   * @param symbol - Symbol name or ID
   * @param opts - Must include limitPrice
   */
  async buyLimit(
    symbol: Symbol,
    opts: LimitOrderOptions,
  ): Promise<ExecutionEvent> {
    return this.executeLimitOrder(symbol, TradeSide.BUY, opts);
  }

  /**
   * Limit SELL — fills only when price rises to limitPrice or higher.
   * @param symbol - Symbol name or ID
   * @param opts - Must include limitPrice
   */
  async sellLimit(
    symbol: Symbol,
    opts: LimitOrderOptions,
  ): Promise<ExecutionEvent> {
    return this.executeLimitOrder(symbol, TradeSide.SELL, opts);
  }

  /**
   * Stop BUY — triggers when price rises to stopPrice (breakout entry).
   * @param symbol - Symbol name or ID
   * @param opts - Must include stopPrice
   */
  async buyStop(
    symbol: Symbol,
    opts: StopOrderOptions,
  ): Promise<ExecutionEvent> {
    return this.executeStopOrder(symbol, TradeSide.BUY, opts);
  }

  /**
   * Stop SELL — triggers when price drops to stopPrice (breakout entry).
   * @param symbol - Symbol name or ID
   * @param opts - Must include stopPrice
   */
  async sellStop(
    symbol: Symbol,
    opts: StopOrderOptions,
  ): Promise<ExecutionEvent> {
    return this.executeStopOrder(symbol, TradeSide.SELL, opts);
  }

  /**
   * Stop-limit order: when price hits stopPrice, a limit order is placed within slippageInPoints.
   * @param symbol - Symbol name or ID
   * @param tradeSide - TradeSide.BUY or TradeSide.SELL
   * @param opts - Must include stopPrice and slippageInPoints
   */
  async stopLimit(
    symbol: Symbol,
    tradeSide: TradeSide,
    opts: StopLimitOptions,
  ): Promise<ExecutionEvent> {
    const id = await this.symbols.resolveId(symbol);
    const volume = lotsToUnits(opts.lots);
    const sltp = await resolveSlTp(
      {
        account: this.raw.account,
        market: this.raw.market,
        symbols: this.symbols,
        symbolId: id,
        volumeInUnits: volume,
      },
      opts.sl,
      opts.tp,
    );
    const p: StopLimitOrderParams = {
      symbolId: id,
      tradeSide,
      volume,
      stopPrice: opts.stopPrice,
      slippageInPoints: opts.slippageInPoints,
      ...buildMarketOrderFields(opts),
      ...sltp,
    };
    if (opts.expirationTimestamp !== undefined)
      p.expirationTimestamp = opts.expirationTimestamp;
    return this.raw.trading.stopLimitOrder(p);
  }

  /**
   * Modify SL/TP on an open position using human-friendly specs (pips, dollars, equity).
   * @param positionId - The cTrader position ID
   * @param opts - New sl and/or tp
   */
  async modify(positionId: number, opts: ModifyOptions): Promise<void> {
    const { positions } = await this.raw.account.reconcile();
    const pos = positions.find((p) => p.positionId === positionId);
    if (pos === undefined) throw new Error(`Position ${positionId} not found`);

    const volume = pos.tradeData.volume;
    const symbolId = pos.tradeData.symbolId;

    const sltp = await resolveSlTp(
      {
        account: this.raw.account,
        market: this.raw.market,
        symbols: this.symbols,
        symbolId,
        volumeInUnits: volume,
      },
      opts.sl,
      opts.tp,
    );

    // Convert relative SL/TP to absolute prices: entry ± distance
    // If pos.price is unavailable (just-opened position), fetch current spot as fallback
    let entryPrice = pos.price;
    const needPrice =
      (sltp.relativeStopLoss !== undefined || sltp.relativeTakeProfit !== undefined) &&
      entryPrice === undefined;
    if (needPrice) {
      // Fetch a live spot price as fallback when position price isn't available yet
      const spot = await new Promise<SpotEvent>((resolve, reject) => {
        const timer = setTimeout(() => {
          off();
          void this.raw.market.unsubscribeSpots([symbolId]).catch(() => {});
          reject(new Error(`Timed out fetching spot price for symbol ${symbolId}`));
        }, 10_000);
        const off = this.raw.market.onSpot((evt: SpotEvent) => {
          if (evt.symbolId === symbolId) {
            clearTimeout(timer);
            off();
            void this.raw.market.unsubscribeSpots([symbolId]).catch(() => {});
            resolve(evt);
          }
        });
        this.raw.market.subscribeSpots([symbolId]).catch((err: unknown) => {
          clearTimeout(timer);
          off();
          reject(err);
        });
      });
      // Convert raw protocol price to decimal (same as watchSpots)
      const bidDecimal = spot.bid !== undefined ? spot.bid / 100_000 : undefined;
      const askDecimal = spot.ask !== undefined ? spot.ask / 100_000 : undefined;
      entryPrice =
        pos.tradeData.tradeSide === TradeSide.BUY
          ? (bidDecimal ?? askDecimal)
          : (askDecimal ?? bidDecimal);
    }

    // Build amend params, always preserving existing SL/TP when not being changed.
    // The cTrader API clears SL/TP if they are omitted from the amend request.
    const amendParams: AmendSltpParams = {};

    // --- Stop Loss ---
    if (sltp.relativeStopLoss !== undefined) {
      if (entryPrice === undefined) {
        throw new Error(
          `Cannot set stop loss: position ${positionId} has no entry price and spot price could not be resolved.`
        );
      }
      const distance = sltp.relativeStopLoss / 100_000;
      amendParams.stopLoss =
        pos.tradeData.tradeSide === TradeSide.BUY
          ? entryPrice - distance
          : entryPrice + distance;
    } else if (pos.stopLoss !== undefined) {
      // Preserve existing SL when not being modified — omitting it
      // from the amend request would cause cTrader to clear it.
      amendParams.stopLoss = pos.stopLoss;
    }

    // --- Take Profit ---
    if (sltp.relativeTakeProfit !== undefined) {
      if (entryPrice === undefined) {
        throw new Error(
          `Cannot set take profit: position ${positionId} has no entry price and spot price could not be resolved.`
        );
      }
      const distance = sltp.relativeTakeProfit / 100_000;
      amendParams.takeProfit =
        pos.tradeData.tradeSide === TradeSide.BUY
          ? entryPrice + distance
          : entryPrice - distance;
    } else if (pos.takeProfit !== undefined) {
      // Preserve existing TP when not being modified — omitting it
      // from the amend request would cause cTrader to clear it.
      amendParams.takeProfit = pos.takeProfit;
    }

    await this.raw.trading.amendPositionSltp(positionId, amendParams);
  }

  /**
   * Resize a position — change its volume to a new target in lots.
   * If newLots > current: adds volume via a market order on the same position.
   * If newLots < current: partially closes the difference.
   * If equal: no-op.
   * @param positionId - The cTrader position ID
   * @param newLots - Desired total position size in lots (e.g. 0.05, 0.1, 1.0)
   * @returns The execution event from the increase/decrease, or undefined if no-op
   */
  async resize(positionId: number, newLots: Lots): Promise<ExecutionEvent | undefined> {
    if (newLots < 0) throw new Error("newLots must be >= 0. Use close() to fully close a position.");
    if (newLots === 0) throw new Error("newLots must be > 0. Use close() to fully close a position.");

    const { positions } = await this.raw.account.reconcile();
    const pos = positions.find((p) => p.positionId === positionId);
    if (pos === undefined) throw new Error(`Position ${positionId} not found`);

    const currentUnits = pos.tradeData.volume;
    const newUnits = lotsToUnits(newLots);

    if (newUnits === currentUnits) return undefined;

    if (newUnits > currentUnits) {
      // Increase: send a market order with positionId to add volume
      const deltaUnits = newUnits - currentUnits;
      return this.raw.trading.marketOrder({
        symbolId: pos.tradeData.symbolId,
        tradeSide: pos.tradeData.tradeSide,
        volume: deltaUnits,
        positionId,
      });
    }

    // Decrease: partial close for the difference
    const deltaUnits = currentUnits - newUnits;
    return this.raw.trading.closePosition(positionId, deltaUnits);
  }

  /**
   * Close a position by ID. Full close by default, or partial if lots is specified.
   * @param positionId - The cTrader position ID
   * @param opts - Optional: specify lots for partial close
   */
  async close(
    positionId: number,
    opts?: { lots?: number },
  ): Promise<ExecutionEvent> {
    if (opts?.lots !== undefined) {
      return this.raw.trading.closePosition(positionId, lotsToUnits(opts.lots));
    }

    const { positions } = await this.raw.account.reconcile();
    const pos = positions.find((p) => p.positionId === positionId);
    if (pos === undefined) throw new Error(`Position ${positionId} not found`);

    return this.raw.trading.closePosition(positionId, pos.tradeData.volume);
  }

  /**
   * Close all positions on a specific symbol.
   * @param symbol - Symbol name ("EURUSD") or numeric ID
   */
  async closeSymbol(symbol: Symbol): Promise<ExecutionEvent[]> {
    const symbolId = await this.symbols.resolveId(symbol);
    const { positions } = await this.raw.account.reconcile();
    const matching = positions.filter((p) => p.tradeData.symbolId === symbolId);
    return Promise.all(
      matching.map((p) =>
        this.raw.trading.closePosition(p.positionId, p.tradeData.volume),
      ),
    );
  }

  /** Close every open position on the account */
  async closeAll(): Promise<ExecutionEvent[]> {
    const { positions } = await this.raw.account.reconcile();
    return Promise.all(
      positions.map((p) =>
        this.raw.trading.closePosition(p.positionId, p.tradeData.volume),
      ),
    );
  }

  /**
   * Modify a pending order (limit/stop/stop-limit).
   * Pass only the fields you want to change.
   */
  async modifyOrder(orderId: number, params: AmendOrderParams): Promise<void> {
    return this.raw.trading.amendOrder(orderId, params);
  }

  /** Cancel a pending order. No-op if already filled or expired. */
  async cancelOrder(orderId: number): Promise<void> {
    return this.raw.trading.cancelOrder(orderId);
  }

  // ─── Market Data ─────────────────────────────────────────────────────────

  /**
   * Stream live bid/ask prices. Returns an async unsubscribe function.
   * @example
   * const stop = await client.watchSpots(["EURUSD"], (p) => console.log(p.bidDecimal, p.askDecimal));
   * // later: await stop();
   */
  async watchSpots(
    symbolsOrIds: Symbol[],
    handler: (price: SpotPrice) => void,
  ): Promise<() => Promise<void>> {
    const ids = await Promise.all(
      symbolsOrIds.map((s) => this.symbols.resolveId(s)),
    );
    const idToName = new Map<number, string>(
      ids.map((id, i) => [
        id,
        typeof symbolsOrIds[i] === "string"
          ? (symbolsOrIds[i] as string)
          : String(symbolsOrIds[i]),
      ]),
    );

    await this.raw.market.subscribeSpots(ids);

    const unsub = this.raw.market.onSpot((event: SpotEvent) => {
      if (!ids.includes(event.symbolId)) return;
      const price: SpotPrice = {
        symbol: idToName.get(event.symbolId) ?? String(event.symbolId),
        symbolId: event.symbolId,
      };
      if (event.bid !== undefined) {
        price.bid = event.bid;
        price.bidDecimal = event.bid / 100000;
      }
      if (event.ask !== undefined) {
        price.ask = event.ask;
        price.askDecimal = event.ask / 100000;
      }
      if (event.timestamp !== undefined) price.timestamp = event.timestamp;
      handler(price);
    });

    return async () => {
      unsub();
      await this.raw.market.unsubscribeSpots(ids);
    };
  }

  /**
   * Historical OHLCV candlestick bars.
   * @param symbol - Symbol name or ID
   * @param params - TrendbarPeriod (M1, H1, D1…), fromTimestamp, toTimestamp, count
   */
  async getTrendbars(
    symbol: Symbol,
    params: Omit<GetTrendbarsParams, "symbolId">,
  ): Promise<{ trendbars: Trendbar[]; hasMore: boolean }> {
    const id = await this.symbols.resolveId(symbol);
    return this.raw.market.getTrendbars({ ...params, symbolId: id });
  }

  /**
   * Historical tick data (raw bid/ask ticks).
   * @param symbol - Symbol name or ID
   * @param params - QuoteType (BID or ASK), fromTimestamp, toTimestamp
   */
  async getTickData(
    symbol: Symbol,
    params: Omit<GetTickDataParams, "symbolId">,
  ): Promise<{ ticks: TickData[]; hasMore: boolean }> {
    const id = await this.symbols.resolveId(symbol);
    return this.raw.market.getTickData({ ...params, symbolId: id });
  }

  // ─── Events ──────────────────────────────────────────────────────────────

  /** Fires on every order fill, cancel, or modification. Returns unsubscribe fn */
  onExecution(handler: (event: ExecutionEvent) => void): () => void {
    return this.raw.trading.onExecution(handler);
  }

  /** Fires on order errors (rejected, insufficient margin). Returns unsubscribe fn */
  onOrderError(handler: (event: OrderErrorEvent) => void): () => void {
    return this.raw.trading.onOrderError(handler);
  }

  /** Fires when trailing stop price moves. Returns unsubscribe fn */
  onTrailingSLChanged(
    handler: (event: TrailingSLChangedEvent) => void,
  ): () => void {
    return this.raw.trading.onTrailingSLChanged(handler);
  }

  /** Fires on balance/equity/settings changes. Returns unsubscribe fn */
  onTraderUpdated(handler: (event: TraderUpdatedEvent) => void): () => void {
    return this.raw.account.onTraderUpdated(handler);
  }

  /** Fires when used margin changes on a position. Returns unsubscribe fn */
  onMarginChanged(handler: (event: MarginChangedEvent) => void): () => void {
    return this.raw.account.onMarginChanged(handler);
  }

  /** Fires when margin level crosses a margin call threshold. Returns unsubscribe fn */
  onMarginCallTrigger(handler: (event: MarginCallEvent) => void): () => void {
    return this.raw.account.onMarginCallTrigger(handler);
  }

  /** Fires when broker updates symbol metadata. Returns unsubscribe fn */
  onSymbolChanged(handler: (event: SymbolChangedEvent) => void): () => void {
    return this.raw.market.onSymbolChanged(handler);
  }

  /** Fires on depth-of-market (order book) changes. Returns unsubscribe fn */
  onDepth(handler: (event: DepthEvent) => void): () => void {
    return this.raw.market.onDepth(handler);
  }

  /** Fires when the server disconnects this client (e.g. duplicate connection). Returns unsubscribe fn */
  onClientDisconnect(
    handler: (event: ClientDisconnectEvent) => void,
  ): () => void {
    return this.connection.on(
      PayloadType.CLIENT_DISCONNECT_EVENT,
      (payload) => {
        handler(payload as unknown as ClientDisconnectEvent);
      },
    );
  }

  /** Fires when the access token is invalidated for one or more accounts. Returns unsubscribe fn */
  onTokenInvalidated(
    handler: (event: TokenInvalidatedEvent) => void,
  ): () => void {
    return this.connection.on(
      PayloadType.ACCOUNTS_TOKEN_INVALIDATED_EVENT,
      (payload) => {
        handler(payload as unknown as TokenInvalidatedEvent);
      },
    );
  }

  /** Fires when a specific account is disconnected by the server. Returns unsubscribe fn */
  onAccountDisconnect(
    handler: (event: AccountDisconnectEvent) => void,
  ): () => void {
    return this.connection.on(
      PayloadType.ACCOUNT_DISCONNECT_EVENT,
      (payload) => {
        handler(payload as unknown as AccountDisconnectEvent);
      },
    );
  }

  // ─── Convenience ────────────────────────────────────────────────────────

  /**
   * Stream live depth-of-market (order book) data. Returns an async unsubscribe function.
   * @param symbolsOrIds - Symbol names or IDs to watch
   * @param handler - Called on every depth update for subscribed symbols
   * @example
   * const stop = await client.watchDepth(["EURUSD"], (e) => console.log(e));
   * // later: await stop();
   */
  async watchDepth(
    symbolsOrIds: Symbol[],
    handler: (event: DepthEvent) => void,
  ): Promise<() => Promise<void>> {
    const ids = await Promise.all(
      symbolsOrIds.map((s) => this.symbols.resolveId(s)),
    );
    await this.raw.market.subscribeDepth(ids);
    const unsub = this.raw.market.onDepth((event: DepthEvent) => {
      if (ids.includes(event.symbolId)) handler(event);
    });
    return async () => {
      unsub();
      await this.raw.market.unsubscribeDepth(ids);
    };
  }

  /**
   * Stream live account state — balance, equity, margin, positions, and orders update in real-time.
   * Listens to execution events, balance changes, margin updates, and spot prices to
   * recompute a full AccountState snapshot on every change. No polling — pure push.
   *
   * Returns an async unsubscribe function that cleans up all listeners and spot subscriptions.
   *
   * @param handler - Called with the latest LiveAccountState on every state change
   * @param options - Optional: throttleMs to limit spot-triggered updates (default 500ms)
   *
   * @example
   * const stop = await ct.watchState((state) => {
   *   console.log(`Equity: $${state.equity}, Positions: ${state.positions.length}`);
   * });
   * // later: await stop();
   */
  async watchState(
    handler: (state: LiveAccountState) => void,
    options: WatchStateOptions = {},
  ): Promise<() => Promise<void>> {
    const throttleMs = options.throttleMs ?? 500;

    // --- Mutable state ---
    let currentState: AccountState = await this.getState();
    const spotPrices = new Map<number, { bid?: number; ask?: number }>();
    let subscribedSymbolIds: number[] = [];
    let destroyed = false;

    // Emit initial state
    handler({ ...currentState, reason: "init", timestamp: Date.now() });

    // --- Helper: recompute equity from spot prices ---
    const recomputeFromSpots = (): AccountState => {
      const positions = currentState.positions;
      let unrealizedPnl = 0;

      for (const pos of positions) {
        const spot = spotPrices.get(pos.tradeData.symbolId);
        if (spot === undefined || pos.entryPrice === undefined) continue;

        const isBuy = pos.tradeData.tradeSide === TradeSide.BUY;
        const currentPrice = isBuy ? (spot.bid ?? spot.ask) : (spot.ask ?? spot.bid);
        if (currentPrice === undefined) continue;

        const priceDiff = isBuy
          ? currentPrice - pos.entryPrice
          : pos.entryPrice - currentPrice;
        // Volume is in protocol units (100000 = 1 lot), price diff is in decimal
        unrealizedPnl += priceDiff * pos.tradeData.volume;
      }

      const balance = currentState.balance;
      const equity = balance + unrealizedPnl;
      const usedMargin = currentState.usedMargin;
      const freeMargin = equity - usedMargin;

      const result: AccountState = {
        ...currentState,
        unrealizedPnl,
        equity,
        freeMargin,
      };
      if (usedMargin > 0) {
        result.marginLevel = (equity / usedMargin) * 100;
      }
      return result;
    };

    // --- Helper: refresh full state from server ---
    const refreshState = async (reason: LiveAccountState["reason"]): Promise<void> => {
      if (destroyed) return;
      currentState = await this.getState();
      await syncSpotSubscriptions();
      handler({ ...currentState, reason, timestamp: Date.now() });
    };

    // --- Helper: subscribe to spots for all position symbols ---
    const syncSpotSubscriptions = async (): Promise<void> => {
      const neededIds = [...new Set(currentState.positions.map((p) => p.tradeData.symbolId))];
      const toSubscribe = neededIds.filter((id) => !subscribedSymbolIds.includes(id));
      const toUnsubscribe = subscribedSymbolIds.filter((id) => !neededIds.includes(id));

      if (toUnsubscribe.length > 0) {
        await this.raw.market.unsubscribeSpots(toUnsubscribe).catch(() => {});
        for (const id of toUnsubscribe) spotPrices.delete(id);
      }
      if (toSubscribe.length > 0) {
        await this.raw.market.subscribeSpots(toSubscribe);
      }
      subscribedSymbolIds = neededIds;
    };

    // Subscribe to spots for current positions
    await syncSpotSubscriptions();

    // --- Spot price handler (throttled) ---
    let spotThrottleTimer: ReturnType<typeof setTimeout> | undefined;
    const offSpot = this.raw.market.onSpot((event: SpotEvent) => {
      if (destroyed) return;
      if (!subscribedSymbolIds.includes(event.symbolId)) return;

      const current = spotPrices.get(event.symbolId) ?? {};
      if (event.bid !== undefined) current.bid = event.bid / 100_000;
      if (event.ask !== undefined) current.ask = event.ask / 100_000;
      spotPrices.set(event.symbolId, current);

      if (throttleMs === 0) {
        const updated = recomputeFromSpots();
        handler({ ...updated, reason: "spot", timestamp: Date.now() });
        return;
      }
      if (spotThrottleTimer === undefined) {
        spotThrottleTimer = setTimeout(() => {
          spotThrottleTimer = undefined;
          if (destroyed) return;
          const updated = recomputeFromSpots();
          handler({ ...updated, reason: "spot", timestamp: Date.now() });
        }, throttleMs);
      }
    });

    // --- Execution events (position open/close/modify) ---
    const offExecution = this.onExecution(() => {
      void refreshState("execution");
    });

    // --- Balance/account changes ---
    const offTrader = this.onTraderUpdated(() => {
      void refreshState("trader_updated");
    });

    // --- Margin changes ---
    const offMargin = this.onMarginChanged((event: MarginChangedEvent) => {
      if (destroyed) return;
      // Update margin in-place for the affected position
      const pos = currentState.positions.find((p) => p.positionId === event.positionId);
      if (pos !== undefined) {
        pos.usedMargin = event.usedMargin;
        const usedMargin = currentState.positions.reduce(
          (sum, p) => sum + (p.usedMargin ?? 0),
          0,
        ) / Math.pow(10, currentState.moneyDigits);
        currentState = { ...currentState, usedMargin };
      }
      const updated = recomputeFromSpots();
      handler({ ...updated, reason: "margin_changed", timestamp: Date.now() });
    });

    // --- Cleanup function ---
    return async () => {
      destroyed = true;
      if (spotThrottleTimer !== undefined) clearTimeout(spotThrottleTimer);
      offSpot();
      offExecution();
      offTrader();
      offMargin();
      if (subscribedSymbolIds.length > 0) {
        await this.raw.market.unsubscribeSpots(subscribedSymbolIds).catch(() => {});
      }
    };
  }

  // ─── Private helpers ────────────────────────────────────────────────────

  private async executeMarketOrder(
    symbol: Symbol,
    tradeSide: TradeSide,
    opts: MarketOrderOptions,
  ): Promise<Position> {
    const id = await this.symbols.resolveId(symbol);
    const volume = lotsToUnits(opts.lots);
    const sltp = await resolveSlTp(
      {
        account: this.raw.account,
        market: this.raw.market,
        symbols: this.symbols,
        symbolId: id,
        volumeInUnits: volume,
      },
      opts.sl,
      opts.tp,
    );

    const event = await this.raw.trading.marketOrder({
      symbolId: id,
      tradeSide,
      volume,
      ...buildMarketOrderFields(opts),
      ...sltp,
    });

    if (event.position === undefined) {
      throw new Error(
        `Market order filled but no position returned. ` +
          `ExecutionType: ${event.executionType}, errorCode: ${event.errorCode ?? "none"}`,
      );
    }

    return event.position;
  }

  private async executeLimitOrder(
    symbol: Symbol,
    tradeSide: TradeSide,
    opts: LimitOrderOptions,
  ): Promise<ExecutionEvent> {
    const id = await this.symbols.resolveId(symbol);
    const volume = lotsToUnits(opts.lots);
    const sltp = await resolveSlTp(
      {
        account: this.raw.account,
        market: this.raw.market,
        symbols: this.symbols,
        symbolId: id,
        volumeInUnits: volume,
      },
      opts.sl,
      opts.tp,
    );
    const p: LimitOrderParams = {
      symbolId: id,
      tradeSide,
      volume,
      limitPrice: opts.limitPrice,
      ...buildMarketOrderFields(opts),
      ...sltp,
    };
    if (opts.expirationTimestamp !== undefined)
      p.expirationTimestamp = opts.expirationTimestamp;
    return this.raw.trading.limitOrder(p);
  }

  private async executeStopOrder(
    symbol: Symbol,
    tradeSide: TradeSide,
    opts: StopOrderOptions,
  ): Promise<ExecutionEvent> {
    const id = await this.symbols.resolveId(symbol);
    const volume = lotsToUnits(opts.lots);
    const sltp = await resolveSlTp(
      {
        account: this.raw.account,
        market: this.raw.market,
        symbols: this.symbols,
        symbolId: id,
        volumeInUnits: volume,
      },
      opts.sl,
      opts.tp,
    );
    const p: StopOrderParams = {
      symbolId: id,
      tradeSide,
      volume,
      stopPrice: opts.stopPrice,
      ...buildMarketOrderFields(opts),
      ...sltp,
    };
    if (opts.expirationTimestamp !== undefined)
      p.expirationTimestamp = opts.expirationTimestamp;
    return this.raw.trading.stopOrder(p);
  }
}

// ─── Volume helpers ───────────────────────────────────────────────────────────

/** Convert lots (0.01, 0.1, 1.0) to protocol units (1000, 10000, 100000) */
export function lotsToUnits(lots: Lots): number {
  return Math.round(lots * 100000);
}

/** Convert protocol units back to lots */
export function unitsToLots(units: number): Lots {
  return units / 100000;
}

export { pipsToRelative } from "./helpers.js";

function buildMarketOrderFields(
  opts: MarketOrderOptions,
): Record<string, unknown> {
  const f: Record<string, unknown> = {};
  if (opts.trailingStopLoss !== undefined)
    f["trailingStopLoss"] = opts.trailingStopLoss;
  if (opts.guaranteedStopLoss !== undefined)
    f["guaranteedStopLoss"] = opts.guaranteedStopLoss;
  if (opts.label !== undefined) f["label"] = opts.label;
  if (opts.comment !== undefined) f["comment"] = opts.comment;
  if (opts.clientOrderId !== undefined) f["clientOrderId"] = opts.clientOrderId;
  return f;
}
