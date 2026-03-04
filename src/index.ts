/**
 * ctrader-ts — TypeScript client for the cTrader Open API.
 *
 * Quick start:
 * ```ts
 * import { connect } from "ctrader-ts";
 * const ct = await connect();
 * const pos = await ct.buy("EURUSD", { lots: 0.1, sl: { pips: 50 } });
 * await ct.close(pos.positionId);
 * ```
 *
 * @see {@link connect} for the recommended entry point.
 * @see {@link CTrader} for the full high-level API.
 * @packageDocumentation
 */

export {
  connect,
  DEMO_ENDPOINT,
  LIVE_ENDPOINT,
  type ConnectOptions,
} from "./connect.js";
export {
  CTrader,
  lotsToUnits,
  unitsToLots,
  pipsToRelative,
  type CTraderClientConfig,
  type Lots,
  type Symbol,
  type MarketOrderOptions,
  type LimitOrderOptions,
  type StopOrderOptions,
  type StopLimitOptions,
  type ModifyOptions,
  type SpotPrice,
} from "./client.js";
export {
  type CTraderConfig,
  type PartialConfig,
  loadStoredConfig,
  saveConfig,
  getConfigPath,
  resolveConfig,
} from "./config.js";
export {
  CTraderConnection,
  type CTraderConnectionConfig,
  type ConnectionEvent,
} from "./connection.js";
export { CTraderAuth } from "./modules/auth.js";
export {
  CTraderTrading,
  type NewOrderParams,
  type LimitOrderParams,
  type StopOrderParams,
  type MarketRangeOrderParams,
  type StopLimitOrderParams,
  type AmendOrderParams,
  type AmendSltpParams,
} from "./modules/trading.js";
export {
  CTraderAccount,
  type DealListParams,
  type OrderListParams,
  type TimeRangeParams,
} from "./modules/account.js";
export {
  CTraderMarket,
  type GetTrendbarsParams,
  type GetTickDataParams,
} from "./modules/market.js";
export {
  CTraderError,
  RequestTimeoutError,
  NotConnectedError,
} from "./errors.js";
export { type DecodedMessage, getMessageClass } from "./codec.js";
export {
  PayloadType,
  ProtoErrorCode,
  ProtoOAErrorCode,
  OrderType,
  TradeSide,
  TimeInForce,
  ExecutionType,
  PositionStatus,
  OrderStatus,
  DealStatus,
  TrendbarPeriod,
  QuoteType,
  OrderTriggerMethod,
  DayOfWeek,
  CommissionType,
  SymbolDistanceType,
  MinCommissionType,
  TradingMode,
  SwapCalculationType,
  AccessRights,
  TotalMarginCalculationType,
  AccountType,
  LimitedRiskMarginCalculationStrategy,
  StopOutStrategy,
  ClientPermissionScope,
  NotificationType,
  ChangeBonusType,
  ChangeBalanceType,
} from "./enums.js";
export type {
  ConnectionState,
  Asset,
  AssetClass,
  Interval,
  Holiday,
  SymbolCategory,
  LightSymbol,
  ArchivedSymbol,
  FullSymbol,
  CtidTraderAccount,
  CtidProfile,
  Trader,
  EnrichedTrader,
  TradeData,
  Position,
  EnrichedPosition,
  Order,
  ClosePositionDetail,
  Deal,
  DealOffset,
  BonusDepositWithdraw,
  DepositWithdraw,
  Trendbar,
  TickData,
  DepthQuote,
  ExpectedMargin,
  PositionUnrealizedPnL,
  DynamicLeverageTier,
  DynamicLeverage,
  MarginCall,
  SpotEvent,
  ExecutionEvent,
  OrderErrorEvent,
  TraderUpdatedEvent,
  MarginChangedEvent,
  TokenInvalidatedEvent,
  ClientDisconnectEvent,
  AccountDisconnectEvent,
  SymbolChangedEvent,
  DepthEvent,
  TrailingSLChangedEvent,
  MarginCallEvent,
  OAErrorPayload,
  TokenPair,
  SlTpSpec,
  AccountState,
  GetDealsOptions,
  GetOrdersOptions,
} from "./types.js";
