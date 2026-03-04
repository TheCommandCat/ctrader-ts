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
	CTrader,
	type CTraderClientConfig,
	type LimitOrderOptions,
	type Lots,
	lotsToUnits,
	type MarketOrderOptions,
	type ModifyOptions,
	pipsToRelative,
	type SpotPrice,
	type StopLimitOptions,
	type StopOrderOptions,
	type Symbol,
	unitsToLots,
} from "./core/client.js";
export {
	type CTraderConfig,
	getConfigPath,
	loadStoredConfig,
	type PartialConfig,
	resolveConfig,
	saveConfig,
} from "./core/config.js";
export {
	type ConnectOptions,
	connect,
	DEMO_ENDPOINT,
	LIVE_ENDPOINT,
} from "./core/connect.js";
export {
	type ConnectionEvent,
	CTraderConnection,
	type CTraderConnectionConfig,
} from "./core/connection.js";
export {
	CTraderError,
	NotConnectedError,
	RequestTimeoutError,
} from "./core/errors.js";
export {
	CTraderAccount,
	type DealListParams,
	type OrderListParams,
	type TimeRangeParams,
} from "./modules/account.js";
export { CTraderAuth } from "./modules/auth.js";
export {
	CTraderMarket,
	type GetTickDataParams,
	type GetTrendbarsParams,
} from "./modules/market.js";
export {
	type AmendOrderParams,
	type AmendSltpParams,
	CTraderTrading,
	type LimitOrderParams,
	type MarketRangeOrderParams,
	type NewOrderParams,
	type StopLimitOrderParams,
	type StopOrderParams,
} from "./modules/trading.js";
export { type DecodedMessage, getMessageClass } from "./protocol/codec.js";
export {
	AccessRights,
	AccountType,
	ChangeBalanceType,
	ChangeBonusType,
	ClientPermissionScope,
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
	PayloadType,
	PositionStatus,
	ProtoErrorCode,
	ProtoOAErrorCode,
	QuoteType,
	StopOutStrategy,
	SwapCalculationType,
	SymbolDistanceType,
	TimeInForce,
	TotalMarginCalculationType,
	TradeSide,
	TradingMode,
	TrendbarPeriod,
} from "./protocol/enums.js";
export type {
	AccountDisconnectEvent,
	AccountState,
	ArchivedSymbol,
	Asset,
	AssetClass,
	BonusDepositWithdraw,
	ClientDisconnectEvent,
	ClosePositionDetail,
	ConnectionState,
	CtidProfile,
	CtidTraderAccount,
	Deal,
	DealOffset,
	DepositWithdraw,
	DepthEvent,
	DepthQuote,
	DynamicLeverage,
	DynamicLeverageTier,
	EnrichedPosition,
	EnrichedTrader,
	ExecutionEvent,
	ExpectedMargin,
	FullSymbol,
	GetDealsOptions,
	GetOrdersOptions,
	Holiday,
	Interval,
	LightSymbol,
	LiveAccountState,
	MarginCall,
	MarginCallEvent,
	MarginChangedEvent,
	OAErrorPayload,
	Order,
	OrderErrorEvent,
	Position,
	PositionUnrealizedPnL,
	SlTpSpec,
	SpotEvent,
	SymbolCategory,
	SymbolChangedEvent,
	TickData,
	TokenInvalidatedEvent,
	TokenPair,
	TradeData,
	Trader,
	TraderUpdatedEvent,
	TrailingSLChangedEvent,
	Trendbar,
	WatchStateOptions,
} from "./protocol/types.js";
