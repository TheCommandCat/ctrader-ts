import type {
  AccessRights,
  AccountType,
  ChangeBalanceType,
  ChangeBonusType,
  CommissionType,
  DayOfWeek,
  DealStatus,
  ExecutionType,
  LimitedRiskMarginCalculationStrategy,
  MinCommissionType,
  NotificationType,
  OrderStatus,
  OrderTriggerMethod,
  OrderType,
  PositionStatus,
  StopOutStrategy,
  SymbolDistanceType,
  SwapCalculationType,
  TimeInForce,
  TotalMarginCalculationType,
  TradeSide,
  TradingMode,
  TrendbarPeriod,
} from "./enums.js";

/** Discriminated union for connection lifecycle states. */
export type ConnectionState =
  | { status: "disconnected" }
  | { status: "connecting"; attempt: number }
  | { status: "connected"; since: number }
  | { status: "ready"; since: number }
  | { status: "reconnecting"; attempt: number; nextRetryMs: number };

/** Tradeable asset (currency, commodity, etc.). */
export interface Asset {
  assetId: number;
  name: string;
  displayName?: string;
  digits?: number;
}

/** Asset classification group (Forex, Crypto, etc.). */
export interface AssetClass {
  id?: number;
  name?: string;
  sortingNumber?: number;
}

/** Time interval within a trading schedule. */
export interface Interval {
  /** Start time in seconds since midnight */
  startSecond: number;
  /** End time in seconds since midnight */
  endSecond: number;
}

/** Market holiday schedule entry. */
export interface Holiday {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  /** Unix timestamp in milliseconds */
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}

/** Category grouping for trading symbols. */
export interface SymbolCategory {
  id: number;
  assetClassId: number;
  name: string;
  sortingNumber?: number;
}

/** Minimal symbol info returned in lists. Use getSymbolsById for full details. */
export interface LightSymbol {
  symbolId: number;
  symbolName?: string;
  enabled?: boolean;
  baseAssetId?: number;
  quoteAssetId?: number;
  symbolCategoryId?: number;
  description?: string;
  sortingNumber?: number;
}

/** Delisted/archived symbol reference. */
export interface ArchivedSymbol {
  symbolId: number;
  name: string;
  utcLastUpdateTimestamp: number;
  description?: string;
}

/**
 * Complete symbol specification — digits, pip position, swap rates,
 * commission, schedule, volume limits.
 */
export interface FullSymbol {
  symbolId: number;
  /** Number of decimal places for price display */
  digits: number;
  /** Decimal position of a pip (e.g. -4 means 0.0001) */
  pipPosition: number;
  enableShortSelling?: boolean;
  guaranteedStopLoss?: boolean;
  swapRollover3Days?: DayOfWeek;
  swapLong?: number;
  swapShort?: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  maxVolume?: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  minVolume?: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  stepVolume?: number;
  maxExposure?: number;
  schedule?: Interval[];
  commissionType?: CommissionType;
  slDistance?: number;
  tpDistance?: number;
  gslDistance?: number;
  gslCharge?: number;
  distanceSetIn?: SymbolDistanceType;
  minCommissionType?: MinCommissionType;
  minCommissionAsset?: string;
  rolloverCommission?: number;
  skipRolloverDays?: number;
  scheduleTimeZone?: string;
  tradingMode?: TradingMode;
  rolloverCommission3Days?: DayOfWeek;
  swapCalculationType?: SwapCalculationType;
  /** Standard lot size in base currency units */
  lotSize?: number;
  preciseTradingCommissionRate?: number;
  preciseMinCommission?: number;
  holiday?: Holiday[];
  pnlConversionFeeRate?: number;
  leverageId?: number;
  swapPeriod?: number;
  swapTime?: number;
  skipSWAPPeriods?: number;
  chargeSwapAtWeekends?: boolean;
  measurementUnits?: string;
}

/** cTID trader account reference — links cTrader ID to broker account. */
export interface CtidTraderAccount {
  ctidTraderAccountId: number;
  isLive?: boolean;
  traderLogin?: number;
  /** Unix timestamp in milliseconds */
  lastClosingDealTimestamp?: number;
  /** Unix timestamp in milliseconds */
  lastBalanceUpdateTimestamp?: number;
  brokerTitleShort?: string;
}

/** cTrader ID user profile. */
export interface CtidProfile {
  userId: number;
}

/** Full trader/account profile — balance, leverage, account type, access rights. */
export interface Trader {
  ctidTraderAccountId: number;
  /** Balance in deposit currency */
  balance: number;
  balanceVersion?: number;
  managerBonus?: number;
  ibBonus?: number;
  nonWithdrawableBonus?: number;
  accessRights?: AccessRights;
  depositAssetId: number;
  swapFree?: boolean;
  /** Leverage as integer (e.g. 10000 = 100:1) */
  leverageInCents?: number;
  totalMarginCalculationType?: TotalMarginCalculationType;
  maxLeverage?: number;
  traderLogin?: number;
  accountType?: AccountType;
  brokerName?: string;
  /** Unix timestamp in milliseconds */
  registrationTimestamp?: number;
  isLimitedRisk?: boolean;
  limitedRiskMarginCalculationStrategy?: LimitedRiskMarginCalculationStrategy;
  moneyDigits?: number;
  fairStopOut?: boolean;
  stopOutStrategy?: StopOutStrategy;
}

/** Core trade parameters shared between positions and orders. */
export interface TradeData {
  symbolId: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  volume: number;
  tradeSide: TradeSide;
  /** Unix timestamp in milliseconds */
  openTimestamp?: number;
  label?: string;
  guaranteedStopLoss?: boolean;
  comment?: string;
  measurementUnits?: string;
  /** Unix timestamp in milliseconds */
  closeTimestamp?: number;
}

/** An open (or recently closed) trading position. */
export interface Position {
  positionId: number;
  tradeData: TradeData;
  positionStatus: PositionStatus;
  swap: number;
  /** Current/entry price */
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  /** Unix timestamp in milliseconds */
  utcLastUpdateTimestamp?: number;
  commission?: number;
  marginRate?: number;
  mirroringCommission?: number;
  guaranteedStopLoss?: boolean;
  usedMargin?: number;
  stopLossTriggerMethod?: OrderTriggerMethod;
  moneyDigits?: number;
  trailingStopLoss?: boolean;
}

/** A pending order (limit, stop, stop-limit) or historical order record. */
export interface Order {
  orderId: number;
  tradeData: TradeData;
  orderType: OrderType;
  orderStatus: OrderStatus;
  /** Unix timestamp in milliseconds */
  expirationTimestamp?: number;
  executionPrice?: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  executedVolume?: number;
  /** Unix timestamp in milliseconds */
  utcLastUpdateTimestamp?: number;
  baseSlippagePrice?: number;
  slippageInPoints?: number;
  closingOrder?: boolean;
  limitPrice?: number;
  stopPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  clientOrderId?: string;
  timeInForce?: TimeInForce;
  positionId?: number;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  isStopOut?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: OrderTriggerMethod;
}

/** Details returned when a position is closed — entry price, P&L, commission. */
export interface ClosePositionDetail {
  entryPrice: number;
  grossProfit: number;
  swap: number;
  commission: number;
  /** Balance after close */
  balance: number;
  quoteToDepositConversionRate?: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  closedVolume?: number;
  balanceVersion?: number;
  moneyDigits?: number;
  pnlConversionFee?: number;
}

/** A single trade execution (fill). Multiple deals can belong to one order or position. */
export interface Deal {
  dealId: number;
  orderId: number;
  positionId: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  volume: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  filledVolume: number;
  symbolId: number;
  /** Unix timestamp in milliseconds */
  createTimestamp: number;
  /** Unix timestamp in milliseconds */
  executionTimestamp: number;
  /** Unix timestamp in milliseconds */
  utcLastUpdateTimestamp?: number;
  executionPrice?: number;
  tradeSide: TradeSide;
  dealStatus: DealStatus;
  marginRate?: number;
  commission?: number;
  baseToUsdConversionRate?: number;
  closePositionDetail?: ClosePositionDetail;
  moneyDigits?: number;
}

/** Links between closing and closed deals. */
export interface DealOffset {
  dealId: number;
  /** Volume in protocol units (1 lot = 100,000 units) */
  volume: number;
  /** Unix timestamp in milliseconds */
  executionTimestamp?: number;
  executionPrice?: number;
}

/** Bonus credit/debit operation. */
export interface BonusDepositWithdraw {
  operationType: ChangeBonusType;
  bonusHistoryId: number;
  managerBonus: number;
  managerDelta: number;
  ibBonus: number;
  ibDelta: number;
  /** Unix timestamp in milliseconds */
  changeBonusTimestamp: number;
  externalNote?: string;
  introducingBrokerId?: number;
  moneyDigits?: number;
}

/** Balance deposit/withdrawal operation. */
export interface DepositWithdraw {
  operationType: ChangeBalanceType;
  balanceHistoryId: number;
  /** Balance in deposit currency */
  balance: number;
  delta: number;
  /** Unix timestamp in milliseconds */
  changeBalanceTimestamp: number;
  externalNote?: string;
  balanceVersion?: number;
  equity?: number;
  moneyDigits?: number;
}

/** OHLCV candlestick bar. */
export interface Trendbar {
  /** Volume in protocol units (1 lot = 100,000 units) */
  volume: number;
  period?: TrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}

/** Single bid or ask tick. */
export interface TickData {
  /** Unix timestamp in milliseconds */
  timestamp: number;
  /** Raw price (divide by 10^digits for decimal) */
  tick: number;
}

/** Level 2 / order book entry. */
export interface DepthQuote {
  id: number;
  /** Order size/volume */
  size: number;
  /** Raw bid price (divide by 10^digits for decimal) */
  bid?: number;
  /** Raw ask price (divide by 10^digits for decimal) */
  ask?: number;
}

/** Estimated margin requirement for a given volume. */
export interface ExpectedMargin {
  /** Volume in protocol units (1 lot = 100,000 units) */
  volume: number;
  buyMargin: number;
  sellMargin: number;
}

/** Unrealised profit/loss for a single position. */
export interface PositionUnrealizedPnL {
  positionId: number;
  grossUnrealizedPnL: number;
  netUnrealizedPnL: number;
}

/** One tier in a dynamic leverage schedule. */
export interface DynamicLeverageTier {
  /** Volume threshold in protocol units (1 lot = 100,000 units) */
  volume: number;
  leverage: number;
}

/** Dynamic leverage schedule — leverage varies by volume. */
export interface DynamicLeverage {
  leverageId: number;
  tiers: DynamicLeverageTier[];
}

/** Margin call notification threshold. */
export interface MarginCall {
  marginCallType: NotificationType;
  marginLevelThreshold: number;
  /** Unix timestamp in milliseconds */
  utcLastUpdateTimestamp?: number;
}

/** Live price update event. */
export interface SpotEvent {
  ctidTraderAccountId: number;
  symbolId: number;
  /** Raw bid price (divide by 10^digits for decimal) */
  bid?: number;
  /** Raw ask price (divide by 10^digits for decimal) */
  ask?: number;
  trendbar?: Trendbar[];
  sessionClose?: number;
  /** Unix timestamp in milliseconds */
  timestamp?: number;
}

/** Trade execution event — order fill, cancel, modification, swap, deposit/withdrawal. */
export interface ExecutionEvent {
  ctidTraderAccountId: number;
  executionType: ExecutionType;
  position?: Position;
  order?: Order;
  deal?: Deal;
  bonusDepositWithdraw?: BonusDepositWithdraw;
  depositWithdraw?: DepositWithdraw;
  errorCode?: string;
  isServerEvent?: boolean;
}

/** Order rejection or error event. */
export interface OrderErrorEvent {
  ctidTraderAccountId: number;
  errorCode: string;
  orderId?: number;
  positionId?: number;
  description?: string;
}

/** Account settings or balance change event. */
export interface TraderUpdatedEvent {
  ctidTraderAccountId: number;
  trader: Trader;
}

/** Position margin update event. */
export interface MarginChangedEvent {
  ctidTraderAccountId: number;
  positionId: number;
  usedMargin: number;
  moneyDigits?: number;
}

/** Access token invalidation event. */
export interface TokenInvalidatedEvent {
  ctidTraderAccountIds: number[];
  reason?: string;
}

/** Client disconnected by server. */
export interface ClientDisconnectEvent {
  reason?: string;
}

/** Specific account disconnected. */
export interface AccountDisconnectEvent {
  ctidTraderAccountId: number;
}

/** Symbol metadata changed by broker. */
export interface SymbolChangedEvent {
  ctidTraderAccountId: number;
  symbolId: number[];
}

/** Order book update event. */
export interface DepthEvent {
  ctidTraderAccountId: number;
  symbolId: number;
  newQuotes?: DepthQuote[];
  deletedQuotes?: number[];
}

/** Trailing stop loss price movement event. */
export interface TrailingSLChangedEvent {
  ctidTraderAccountId: number;
  positionId: number;
  orderId: number;
  stopPrice: number;
  /** Unix timestamp in milliseconds */
  utcLastUpdateTimestamp: number;
}

/** Margin call threshold crossed event. */
export interface MarginCallEvent {
  ctidTraderAccountId: number;
  marginCall: MarginCall;
}

/** Error response payload from cTrader API. */
export interface OAErrorPayload {
  ctidTraderAccountId?: number;
  errorCode: string;
  description?: string;
  /** Unix timestamp in milliseconds when maintenance ends */
  maintenanceEndTimestamp?: number;
  /** Retry delay in milliseconds */
  retryAfter?: number;
}

/** OAuth token pair (access + refresh). */
export interface TokenPair {
  accessToken: string;
  tokenType: string;
  /** Token lifetime in seconds */
  expiresIn: number;
  refreshToken: string;
}

/**
 * Human-friendly stop loss / take profit specification.
 * Specify distance in pips, dollar amount, or percentage of equity.
 */
export type SlTpSpec =
  | { pips: number }
  | { dollars: number }
  | { equity: number };

/**
 * Full account state snapshot — balance, equity, margin, positions, and orders.
 * Call this first to understand the current account situation before making any trading decisions.
 */
export interface AccountState {
  /** Account balance in deposit currency */
  balance: number;
  /** Current equity (balance + unrealised P&L) */
  equity: number;
  /** Margin currently in use across all positions */
  usedMargin: number;
  /** Available margin for new positions (equity - usedMargin) */
  freeMargin: number;
  /** Equity / usedMargin as a percentage, undefined when no positions open */
  marginLevel?: number;
  /** Sum of unrealised P&L across all open positions */
  unrealizedPnl: number;
  /** All currently open positions */
  positions: Position[];
  /** All pending orders (limit, stop, stop-limit) */
  orders: Order[];
  /** Decimal precision for monetary values (e.g. 2 = cents) */
  moneyDigits: number;
}
