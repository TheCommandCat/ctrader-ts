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

export type ConnectionState =
  | { status: "disconnected" }
  | { status: "connecting"; attempt: number }
  | { status: "connected"; since: number }
  | { status: "ready"; since: number }
  | { status: "reconnecting"; attempt: number; nextRetryMs: number };

export interface Asset {
  assetId: number;
  name: string;
  displayName?: string;
  digits?: number;
}

export interface AssetClass {
  id?: number;
  name?: string;
  sortingNumber?: number;
}

export interface Interval {
  startSecond: number;
  endSecond: number;
}

export interface Holiday {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}

export interface SymbolCategory {
  id: number;
  assetClassId: number;
  name: string;
  sortingNumber?: number;
}

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

export interface ArchivedSymbol {
  symbolId: number;
  name: string;
  utcLastUpdateTimestamp: number;
  description?: string;
}

export interface FullSymbol {
  symbolId: number;
  digits: number;
  pipPosition: number;
  enableShortSelling?: boolean;
  guaranteedStopLoss?: boolean;
  swapRollover3Days?: DayOfWeek;
  swapLong?: number;
  swapShort?: number;
  maxVolume?: number;
  minVolume?: number;
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

export interface CtidTraderAccount {
  ctidTraderAccountId: number;
  isLive?: boolean;
  traderLogin?: number;
  lastClosingDealTimestamp?: number;
  lastBalanceUpdateTimestamp?: number;
  brokerTitleShort?: string;
}

export interface CtidProfile {
  userId: number;
}

export interface Trader {
  ctidTraderAccountId: number;
  balance: number;
  balanceVersion?: number;
  managerBonus?: number;
  ibBonus?: number;
  nonWithdrawableBonus?: number;
  accessRights?: AccessRights;
  depositAssetId: number;
  swapFree?: boolean;
  leverageInCents?: number;
  totalMarginCalculationType?: TotalMarginCalculationType;
  maxLeverage?: number;
  traderLogin?: number;
  accountType?: AccountType;
  brokerName?: string;
  registrationTimestamp?: number;
  isLimitedRisk?: boolean;
  limitedRiskMarginCalculationStrategy?: LimitedRiskMarginCalculationStrategy;
  moneyDigits?: number;
  fairStopOut?: boolean;
  stopOutStrategy?: StopOutStrategy;
}

export interface TradeData {
  symbolId: number;
  volume: number;
  tradeSide: TradeSide;
  openTimestamp?: number;
  label?: string;
  guaranteedStopLoss?: boolean;
  comment?: string;
  measurementUnits?: string;
  closeTimestamp?: number;
}

export interface Position {
  positionId: number;
  tradeData: TradeData;
  positionStatus: PositionStatus;
  swap: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
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

export interface Order {
  orderId: number;
  tradeData: TradeData;
  orderType: OrderType;
  orderStatus: OrderStatus;
  expirationTimestamp?: number;
  executionPrice?: number;
  executedVolume?: number;
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

export interface ClosePositionDetail {
  entryPrice: number;
  grossProfit: number;
  swap: number;
  commission: number;
  balance: number;
  quoteToDepositConversionRate?: number;
  closedVolume?: number;
  balanceVersion?: number;
  moneyDigits?: number;
  pnlConversionFee?: number;
}

export interface Deal {
  dealId: number;
  orderId: number;
  positionId: number;
  volume: number;
  filledVolume: number;
  symbolId: number;
  createTimestamp: number;
  executionTimestamp: number;
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

export interface DealOffset {
  dealId: number;
  volume: number;
  executionTimestamp?: number;
  executionPrice?: number;
}

export interface BonusDepositWithdraw {
  operationType: ChangeBonusType;
  bonusHistoryId: number;
  managerBonus: number;
  managerDelta: number;
  ibBonus: number;
  ibDelta: number;
  changeBonusTimestamp: number;
  externalNote?: string;
  introducingBrokerId?: number;
  moneyDigits?: number;
}

export interface DepositWithdraw {
  operationType: ChangeBalanceType;
  balanceHistoryId: number;
  balance: number;
  delta: number;
  changeBalanceTimestamp: number;
  externalNote?: string;
  balanceVersion?: number;
  equity?: number;
  moneyDigits?: number;
}

export interface Trendbar {
  volume: number;
  period?: TrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}

export interface TickData {
  timestamp: number;
  tick: number;
}

export interface DepthQuote {
  id: number;
  size: number;
  bid?: number;
  ask?: number;
}

export interface ExpectedMargin {
  volume: number;
  buyMargin: number;
  sellMargin: number;
}

export interface PositionUnrealizedPnL {
  positionId: number;
  grossUnrealizedPnL: number;
  netUnrealizedPnL: number;
}

export interface DynamicLeverageTier {
  volume: number;
  leverage: number;
}

export interface DynamicLeverage {
  leverageId: number;
  tiers: DynamicLeverageTier[];
}

export interface MarginCall {
  marginCallType: NotificationType;
  marginLevelThreshold: number;
  utcLastUpdateTimestamp?: number;
}

export interface SpotEvent {
  ctidTraderAccountId: number;
  symbolId: number;
  bid?: number;
  ask?: number;
  trendbar?: Trendbar[];
  sessionClose?: number;
  timestamp?: number;
}

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

export interface OrderErrorEvent {
  ctidTraderAccountId: number;
  errorCode: string;
  orderId?: number;
  positionId?: number;
  description?: string;
}

export interface TraderUpdatedEvent {
  ctidTraderAccountId: number;
  trader: Trader;
}

export interface MarginChangedEvent {
  ctidTraderAccountId: number;
  positionId: number;
  usedMargin: number;
  moneyDigits?: number;
}

export interface TokenInvalidatedEvent {
  ctidTraderAccountIds: number[];
  reason?: string;
}

export interface ClientDisconnectEvent {
  reason?: string;
}

export interface AccountDisconnectEvent {
  ctidTraderAccountId: number;
}

export interface SymbolChangedEvent {
  ctidTraderAccountId: number;
  symbolId: number[];
}

export interface DepthEvent {
  ctidTraderAccountId: number;
  symbolId: number;
  newQuotes?: DepthQuote[];
  deletedQuotes?: number[];
}

export interface TrailingSLChangedEvent {
  ctidTraderAccountId: number;
  positionId: number;
  orderId: number;
  stopPrice: number;
  utcLastUpdateTimestamp: number;
}

export interface MarginCallEvent {
  ctidTraderAccountId: number;
  marginCall: MarginCall;
}

export interface OAErrorPayload {
  ctidTraderAccountId?: number;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
  retryAfter?: number;
}

export interface TokenPair {
  accessToken: string;
  tokenType: string;
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
