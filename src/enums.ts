/** Message type identifiers for the cTrader Open API protocol. Each value maps to a specific request, response, or event message. */
export enum PayloadType {
	PROTO_MESSAGE = 5,
	ERROR_RES = 50,
	HEARTBEAT_EVENT = 51,

	APP_AUTH_REQ = 2100,
	APP_AUTH_RES = 2101,
	ACCOUNT_AUTH_REQ = 2102,
	ACCOUNT_AUTH_RES = 2103,
	VERSION_REQ = 2104,
	VERSION_RES = 2105,
	NEW_ORDER_REQ = 2106,
	TRAILING_SL_CHANGED_EVENT = 2107,
	CANCEL_ORDER_REQ = 2108,
	AMEND_ORDER_REQ = 2109,
	AMEND_POSITION_SLTP_REQ = 2110,
	CLOSE_POSITION_REQ = 2111,
	ASSET_LIST_REQ = 2112,
	ASSET_LIST_RES = 2113,
	SYMBOLS_LIST_REQ = 2114,
	SYMBOLS_LIST_RES = 2115,
	SYMBOL_BY_ID_REQ = 2116,
	SYMBOL_BY_ID_RES = 2117,
	SYMBOLS_FOR_CONVERSION_REQ = 2118,
	SYMBOLS_FOR_CONVERSION_RES = 2119,
	SYMBOL_CHANGED_EVENT = 2120,
	TRADER_REQ = 2121,
	TRADER_RES = 2122,
	TRADER_UPDATED_EVENT = 2123,
	RECONCILE_REQ = 2124,
	RECONCILE_RES = 2125,
	EXECUTION_EVENT = 2126,
	SUBSCRIBE_SPOTS_REQ = 2127,
	SUBSCRIBE_SPOTS_RES = 2128,
	UNSUBSCRIBE_SPOTS_REQ = 2129,
	UNSUBSCRIBE_SPOTS_RES = 2130,
	SPOT_EVENT = 2131,
	ORDER_ERROR_EVENT = 2132,
	DEAL_LIST_REQ = 2133,
	DEAL_LIST_RES = 2134,
	SUBSCRIBE_LIVE_TRENDBAR_REQ = 2135,
	UNSUBSCRIBE_LIVE_TRENDBAR_REQ = 2136,
	GET_TRENDBARS_REQ = 2137,
	GET_TRENDBARS_RES = 2138,
	EXPECTED_MARGIN_REQ = 2139,
	EXPECTED_MARGIN_RES = 2140,
	MARGIN_CHANGED_EVENT = 2141,
	OA_ERROR_RES = 2142,
	CASH_FLOW_HISTORY_REQ = 2143,
	CASH_FLOW_HISTORY_RES = 2144,
	GET_TICK_DATA_REQ = 2145,
	GET_TICK_DATA_RES = 2146,
	ACCOUNTS_TOKEN_INVALIDATED_EVENT = 2147,
	CLIENT_DISCONNECT_EVENT = 2148,
	GET_ACCOUNTS_BY_TOKEN_REQ = 2149,
	GET_ACCOUNTS_BY_TOKEN_RES = 2150,
	GET_CTID_PROFILE_REQ = 2151,
	GET_CTID_PROFILE_RES = 2152,
	ASSET_CLASS_LIST_REQ = 2153,
	ASSET_CLASS_LIST_RES = 2154,
	DEPTH_EVENT = 2155,
	SUBSCRIBE_DEPTH_REQ = 2156,
	SUBSCRIBE_DEPTH_RES = 2157,
	UNSUBSCRIBE_DEPTH_REQ = 2158,
	UNSUBSCRIBE_DEPTH_RES = 2159,
	SYMBOL_CATEGORY_LIST_REQ = 2160,
	SYMBOL_CATEGORY_LIST_RES = 2161,
	ACCOUNT_LOGOUT_REQ = 2162,
	ACCOUNT_LOGOUT_RES = 2163,
	ACCOUNT_DISCONNECT_EVENT = 2164,
	SUBSCRIBE_LIVE_TRENDBAR_RES = 2165,
	UNSUBSCRIBE_LIVE_TRENDBAR_RES = 2166,
	MARGIN_CALL_LIST_REQ = 2167,
	MARGIN_CALL_LIST_RES = 2168,
	MARGIN_CALL_UPDATE_REQ = 2169,
	MARGIN_CALL_UPDATE_RES = 2170,
	MARGIN_CALL_UPDATE_EVENT = 2171,
	MARGIN_CALL_TRIGGER_EVENT = 2172,
	REFRESH_TOKEN_REQ = 2173,
	REFRESH_TOKEN_RES = 2174,
	ORDER_LIST_REQ = 2175,
	ORDER_LIST_RES = 2176,
	GET_DYNAMIC_LEVERAGE_REQ = 2177,
	GET_DYNAMIC_LEVERAGE_RES = 2178,
	DEAL_LIST_BY_POSITION_REQ = 2179,
	DEAL_LIST_BY_POSITION_RES = 2180,
	ORDER_DETAILS_REQ = 2181,
	ORDER_DETAILS_RES = 2182,
	ORDER_LIST_BY_POSITION_REQ = 2183,
	ORDER_LIST_BY_POSITION_RES = 2184,
	DEAL_OFFSET_LIST_REQ = 2185,
	DEAL_OFFSET_LIST_RES = 2186,
	GET_POSITION_UNREALIZED_PNL_REQ = 2187,
	GET_POSITION_UNREALIZED_PNL_RES = 2188,
}

/** Order type. Determines how the order is filled. */
export enum OrderType {
/** Instant fill at current market price. */
	MARKET = 1,
/** Fill at specified price or better. */
	LIMIT = 2,
/** Trigger market order when price reaches stop price. */
	STOP = 3,
/** Protection order (SL/TP only, cannot open new position). */
	STOP_LOSS_TAKE_PROFIT = 4,
/** Market order with maximum allowed slippage. */
	MARKET_RANGE = 5,
/** Stop order that becomes limit order when triggered. */
	STOP_LIMIT = 6,
}

/** Trade direction. */
export enum TradeSide {
/** Long position (buy). */
	BUY = 1,
/** Short position (sell). */
	SELL = 2,
}

/** Order expiration policy. */
export enum TimeInForce {
/** Expires at specified date/time. */
	GOOD_TILL_DATE = 1,
/** Stays active until manually cancelled. */
	GOOD_TILL_CANCEL = 2,
/** Fill what you can immediately, cancel the rest. */
	IMMEDIATE_OR_CANCEL = 3,
/** Fill entirely or cancel. */
	FILL_OR_KILL = 4,
/** Execute at market open. */
	MARKET_ON_OPEN = 5,
}

/** Describes what happened in an execution event. */
export enum ExecutionType {
/** Order accepted by server. */
	ORDER_ACCEPTED = 2,
/** Order fully filled. */
	ORDER_FILLED = 3,
/** Order modified. */
	ORDER_REPLACED = 4,
/** Order cancelled. */
	ORDER_CANCELLED = 5,
/** Order expired. */
	ORDER_EXPIRED = 6,
/** Order rejected. */
	ORDER_REJECTED = 7,
/** Cancel request rejected. */
	ORDER_CANCEL_REJECTED = 8,
/** Overnight interest swap applied. */
	SWAP = 9,
/** Balance deposit or withdrawal. */
	DEPOSIT_WITHDRAW = 10,
/** Order partially filled. */
	ORDER_PARTIAL_FILL = 11,
/** Bonus deposit or withdrawal. */
	BONUS_DEPOSIT_WITHDRAW = 12,
}

/** Position lifecycle status. */
export enum PositionStatus {
/** Position is active. */
	OPEN = 1,
/** Position is closed. */
	CLOSED = 2,
/** Position just created (transient state). */
	CREATED = 3,
/** Position error. */
	ERROR = 4,
}

/** Pending order status. */
export enum OrderStatus {
/** Order accepted. */
	ACCEPTED = 1,
/** Order filled. */
	FILLED = 2,
/** Order rejected. */
	REJECTED = 3,
/** Order expired. */
	EXPIRED = 4,
/** Order cancelled. */
	CANCELLED = 5,
}

/** Deal (trade execution) status. */
export enum DealStatus {
/** Deal fully filled. */
	FILLED = 2,
/** Deal partially filled. */
	PARTIALLY_FILLED = 3,
/** Deal rejected. */
	REJECTED = 4,
/** Deal rejected internally. */
	INTERNALLY_REJECTED = 5,
/** Deal error. */
	ERROR = 6,
/** Deal missed. */
	MISSED = 7,
}

/** Candlestick timeframe. M=minute, H=hour, D=day, W=week, MN=month. */
export enum TrendbarPeriod {
/** 1 minute. */
	M1 = 1,
/** 2 minutes. */
	M2 = 2,
/** 3 minutes. */
	M3 = 3,
/** 4 minutes. */
	M4 = 4,
/** 5 minutes. */
	M5 = 5,
/** 10 minutes. */
	M10 = 6,
/** 15 minutes. */
	M15 = 7,
/** 30 minutes. */
	M30 = 8,
/** 1 hour. */
	H1 = 9,
/** 4 hours. */
	H4 = 10,
/** 12 hours. */
	H12 = 11,
/** 1 day. */
	D1 = 12,
/** 1 week. */
	W1 = 13,
/** 1 month. */
	MN1 = 14,
}

/** Quote type (bid or ask). */
export enum QuoteType {
/** Buy price (broker sells to you). */
	BID = 1,
/** Sell price (broker buys from you). */
	ASK = 2,
}

/** How stop order trigger price is determined. */
export enum OrderTriggerMethod {
/** Trigger on last trade price. */
	TRADE = 1,
/** Trigger on opposite side quote. */
	OPPOSITE = 2,
/** Trigger on double trade price. */
	DOUBLE_TRADE = 3,
/** Trigger on double opposite quote. */
	DOUBLE_OPPOSITE = 4,
}

/** Day of week. 0=none, 1=Monday...7=Sunday. */
export enum DayOfWeek {
	NONE = 0,
	MONDAY = 1,
	TUESDAY = 2,
	WEDNESDAY = 3,
	THURSDAY = 4,
	FRIDAY = 5,
	SATURDAY = 6,
	SUNDAY = 7,
}

/** How broker commissions are calculated. */
export enum CommissionType {
/** USD per million USD traded. */
	USD_PER_MILLION_USD = 1,
/** USD per lot. */
	USD_PER_LOT = 2,
/** Percentage of trade value. */
	PERCENTAGE_OF_VALUE = 3,
/** Quote currency per lot. */
	QUOTE_CCY_PER_LOT = 4,
}

/** How SL/TP distance is measured. */
export enum SymbolDistanceType {
/** Distance in points. */
	SYMBOL_DISTANCE_IN_POINTS = 1,
/** Distance as percentage. */
	SYMBOL_DISTANCE_IN_PERCENTAGE = 2,
}

/** Currency for minimum commission. */
export enum MinCommissionType {
/** Base currency. */
	CURRENCY = 1,
/** Quote currency. */
	QUOTE_CURRENCY = 2,
}

/** Whether trading is enabled on symbol. */
export enum TradingMode {
/** Trading enabled. */
	ENABLED = 0,
/** Trading disabled, pending orders not executed. */
	DISABLED_WITHOUT_PENDINGS_EXECUTION = 1,
/** Trading disabled, pending orders executed. */
	DISABLED_WITH_PENDINGS_EXECUTION = 2,
/** Only closing trades allowed. */
	CLOSE_ONLY_MODE = 3,
}

/** How overnight swap is calculated. */
export enum SwapCalculationType {
/** Swap in pips. */
	PIPS = 0,
/** Swap as percentage. */
	PERCENTAGE = 1,
/** Swap in points. */
	POINTS = 2,
}

/** Account access level. */
export enum AccessRights {
/** Full trading access. */
	FULL_ACCESS = 0,
/** Can only close positions. */
	CLOSE_ONLY = 1,
/** No trading allowed. */
	NO_TRADING = 2,
/** Account disabled. */
	NO_LOGIN = 3,
}

/** How total margin is calculated across positions. */
export enum TotalMarginCalculationType {
/** Use maximum of all positions. */
	MAX = 0,
/** Sum all positions. */
	SUM = 1,
/** Net hedged positions. */
	NET = 2,
}

/** Account hedging model. */
export enum AccountType {
/** Separate positions per direction. */
	HEDGED = 0,
/** Positions offset each other. */
	NETTED = 1,
/** Spread betting account. */
	SPREAD_BETTING = 2,
}

/** How margin is calculated for limited risk accounts. */
export enum LimitedRiskMarginCalculationStrategy {
/** Use leverage. */
	ACCORDING_TO_LEVERAGE = 0,
/** Use guaranteed stop loss. */
	ACCORDING_TO_GSL = 1,
/** Use both GSL and leverage. */
	ACCORDING_TO_GSL_AND_LEVERAGE = 2,
}

/** Which positions close first on margin call. */
export enum StopOutStrategy {
/** Close highest margin positions first. */
	MOST_MARGIN_USED_FIRST = 0,
/** Close most losing positions first. */
	MOST_LOSING_FIRST = 1,
}

/** OAuth client permission scope. */
export enum ClientPermissionScope {
/** Read-only access. */
	SCOPE_VIEW = 0,
/** Trading access. */
	SCOPE_TRADE = 1,
}

/** Margin level warning notification thresholds. */
export enum NotificationType {
/** Margin level warning 1. */
	MARGIN_LEVEL_THRESHOLD_1 = 61,
/** Margin level warning 2. */
	MARGIN_LEVEL_THRESHOLD_2 = 62,
/** Margin level warning 3. */
	MARGIN_LEVEL_THRESHOLD_3 = 63,
}

/** Bonus deposit or withdrawal type. */
export enum ChangeBonusType {
/** Bonus added. */
	BONUS_DEPOSIT = 0,
/** Bonus removed. */
	BONUS_WITHDRAW = 1,
}

/** Balance change reasons (deposits, withdrawals, commissions, fees, swaps, etc.). */
export enum ChangeBalanceType {
	BALANCE_DEPOSIT = 0,
	BALANCE_WITHDRAW = 1,
	BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER = 3,
	BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER = 4,
	BALANCE_DEPOSIT_IB_COMMISSIONS = 5,
	BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE = 6,
	BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB = 7,
	BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER = 8,
	BALANCE_DEPOSIT_REBATE = 9,
	BALANCE_WITHDRAW_REBATE = 10,
	BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER = 11,
	BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER = 12,
	BALANCE_WITHDRAW_BONUS_COMPENSATION = 13,
	BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER = 14,
	BALANCE_DEPOSIT_DIVIDENDS = 15,
	BALANCE_WITHDRAW_DIVIDENDS = 16,
	BALANCE_WITHDRAW_GSL_CHARGE = 17,
	BALANCE_WITHDRAW_ROLLOVER = 18,
	BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS = 19,
	BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS = 20,
	BALANCE_DEPOSIT_SWAP = 21,
	BALANCE_WITHDRAW_SWAP = 22,
	BALANCE_DEPOSIT_MANAGEMENT_FEE = 27,
	BALANCE_WITHDRAW_MANAGEMENT_FEE = 28,
	BALANCE_DEPOSIT_PERFORMANCE_FEE = 29,
	BALANCE_WITHDRAW_FOR_SUBACCOUNT = 30,
	BALANCE_DEPOSIT_TO_SUBACCOUNT = 31,
	BALANCE_WITHDRAW_FROM_SUBACCOUNT = 32,
	BALANCE_DEPOSIT_FROM_SUBACCOUNT = 33,
	BALANCE_WITHDRAW_COPY_FEE = 34,
	BALANCE_WITHDRAW_INACTIVITY_FEE = 35,
	BALANCE_DEPOSIT_TRANSFER = 36,
	BALANCE_WITHDRAW_TRANSFER = 37,
	BALANCE_DEPOSIT_CONVERTED_BONUS = 38,
	BALANCE_DEPOSIT_NEGATIVE_BALANCE_PROTECTION = 39,
}

/** Low-level protocol errors. */
export enum ProtoErrorCode {
/** Unknown error. */
	UNKNOWN_ERROR = 1,
/** Message type not supported. */
	UNSUPPORTED_MESSAGE = 2,
/** Request invalid. */
	INVALID_REQUEST = 3,
/** Request timed out. */
	TIMEOUT_ERROR = 5,
/** Entity not found. */
	ENTITY_NOT_FOUND = 6,
/** Cannot route request. */
	CANT_ROUTE_REQUEST = 7,
/** Message frame too long. */
	FRAME_TOO_LONG = 8,
/** Market closed. */
	MARKET_CLOSED = 9,
/** Concurrent modification. */
	CONCURRENT_MODIFICATION = 10,
/** Payload type blocked. */
	BLOCKED_PAYLOAD_TYPE = 11,
}

/** cTrader Open API specific error codes. */
export enum ProtoOAErrorCode {
/** Access token expired. */
	OA_AUTH_TOKEN_EXPIRED = 1,
/** Account not authorized. */
	ACCOUNT_NOT_AUTHORIZED = 2,
/** Login not found. */
	RET_NO_SUCH_LOGIN = 12,
/** Already logged in. */
	ALREADY_LOGGED_IN = 14,
/** Account disabled. */
	RET_ACCOUNT_DISABLED = 64,
/** Too many connections. */
	CONNECTIONS_LIMIT_EXCEEDED = 67,
/** Cannot widen guaranteed stop loss. */
	WORSE_GSL_NOT_ALLOWED = 68,
/** Symbol on holiday. */
	SYMBOL_HAS_HOLIDAY = 69,
/** Authentication failure. */
	CH_CLIENT_AUTH_FAILURE = 101,
/** Client not authenticated. */
	CH_CLIENT_NOT_AUTHENTICATED = 102,
/** Client already authenticated. */
	CH_CLIENT_ALREADY_AUTHENTICATED = 103,
/** Access token invalid. */
	CH_ACCESS_TOKEN_INVALID = 104,
/** Server not reachable. */
	CH_SERVER_NOT_REACHABLE = 105,
/** cTrader account not found. */
	CH_CTID_TRADER_ACCOUNT_NOT_FOUND = 106,
/** Open API client not found. */
	CH_OA_CLIENT_NOT_FOUND = 107,
/** Request rate limit exceeded. */
	REQUEST_FREQUENCY_EXCEEDED = 108,
/** Server under maintenance. */
	SERVER_IS_UNDER_MAINTENANCE = 109,
/** Channel blocked. */
	CHANNEL_IS_BLOCKED = 110,
/** Not subscribed to spot prices. */
	NOT_SUBSCRIBED_TO_SPOTS = 112,
/** Already subscribed. */
	ALREADY_SUBSCRIBED = 113,
/** Symbol not found. */
	SYMBOL_NOT_FOUND = 114,
/** Unknown symbol. */
	UNKNOWN_SYMBOL = 115,
/** Incorrect boundaries. */
	INCORRECT_BOUNDARIES = 35,
/** No quotes available. */
	NO_QUOTES = 117,
/** Insufficient funds. */
	NOT_ENOUGH_MONEY = 118,
/** Maximum exposure reached. */
	MAX_EXPOSURE_REACHED = 119,
/** Position not found. */
	POSITION_NOT_FOUND = 120,
/** Order not found. */
	ORDER_NOT_FOUND = 121,
/** Position not open. */
	POSITION_NOT_OPEN = 122,
/** Position locked. */
	POSITION_LOCKED = 123,
/** Too many positions. */
	TOO_MANY_POSITIONS = 124,
/** Invalid volume. */
	TRADING_BAD_VOLUME = 125,
/** Invalid stop loss or take profit. */
	TRADING_BAD_STOPS = 126,
/** Invalid prices. */
	TRADING_BAD_PRICES = 127,
/** Invalid stake. */
	TRADING_BAD_STAKE = 128,
/** Stop loss or take profit too close to market. */
	PROTECTION_IS_TOO_CLOSE_TO_MARKET = 129,
/** Invalid expiration date. */
	TRADING_BAD_EXPIRATION_DATE = 130,
/** Order pending execution. */
	PENDING_EXECUTION = 131,
/** Trading disabled. */
	TRADING_DISABLED = 132,
/** Trading not allowed. */
	TRADING_NOT_ALLOWED = 133,
/** Cannot cancel order. */
	UNABLE_TO_CANCEL_ORDER = 134,
/** Cannot amend order. */
	UNABLE_TO_AMEND_ORDER = 135,
/** Short selling not allowed. */
	SHORT_SELLING_NOT_ALLOWED = 136,
}
