import * as $protobuf from "protobufjs";
import Long = require("long");
/** ProtoPayloadType enum. */
export enum ProtoPayloadType {
    PROTO_MESSAGE = 5,
    ERROR_RES = 50,
    HEARTBEAT_EVENT = 51
}

/** ProtoErrorCode enum. */
export enum ProtoErrorCode {
    UNKNOWN_ERROR = 1,
    UNSUPPORTED_MESSAGE = 2,
    INVALID_REQUEST = 3,
    TIMEOUT_ERROR = 5,
    ENTITY_NOT_FOUND = 6,
    CANT_ROUTE_REQUEST = 7,
    FRAME_TOO_LONG = 8,
    MARKET_CLOSED = 9,
    CONCURRENT_MODIFICATION = 10,
    BLOCKED_PAYLOAD_TYPE = 11
}

/** Represents a ProtoMessage. */
export class ProtoMessage implements IProtoMessage {

    /**
     * Constructs a new ProtoMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoMessage);

    /** ProtoMessage payloadType. */
    public payloadType: number;

    /** ProtoMessage payload. */
    public payload: Uint8Array;

    /** ProtoMessage clientMsgId. */
    public clientMsgId: string;

    /**
     * Creates a new ProtoMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoMessage instance
     */
    public static create(properties?: IProtoMessage): ProtoMessage;

    /**
     * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
     * @param message ProtoMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoMessage;

    /**
     * Gets the default type url for ProtoMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoErrorRes. */
export class ProtoErrorRes implements IProtoErrorRes {

    /**
     * Constructs a new ProtoErrorRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoErrorRes);

    /** ProtoErrorRes payloadType. */
    public payloadType: ProtoPayloadType;

    /** ProtoErrorRes errorCode. */
    public errorCode: string;

    /** ProtoErrorRes description. */
    public description: string;

    /** ProtoErrorRes maintenanceEndTimestamp. */
    public maintenanceEndTimestamp: number;

    /**
     * Creates a new ProtoErrorRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoErrorRes instance
     */
    public static create(properties?: IProtoErrorRes): ProtoErrorRes;

    /**
     * Encodes the specified ProtoErrorRes message. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
     * @param message ProtoErrorRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoErrorRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoErrorRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoErrorRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoErrorRes;

    /**
     * Gets the default type url for ProtoErrorRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoHeartbeatEvent. */
export class ProtoHeartbeatEvent implements IProtoHeartbeatEvent {

    /**
     * Constructs a new ProtoHeartbeatEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoHeartbeatEvent);

    /** ProtoHeartbeatEvent payloadType. */
    public payloadType: ProtoPayloadType;

    /**
     * Creates a new ProtoHeartbeatEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoHeartbeatEvent instance
     */
    public static create(properties?: IProtoHeartbeatEvent): ProtoHeartbeatEvent;

    /**
     * Encodes the specified ProtoHeartbeatEvent message. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
     * @param message ProtoHeartbeatEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoHeartbeatEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoHeartbeatEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoHeartbeatEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoHeartbeatEvent;

    /**
     * Gets the default type url for ProtoHeartbeatEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoOAPayloadType enum. */
export enum ProtoOAPayloadType {
    PROTO_OA_APPLICATION_AUTH_REQ = 2100,
    PROTO_OA_APPLICATION_AUTH_RES = 2101,
    PROTO_OA_ACCOUNT_AUTH_REQ = 2102,
    PROTO_OA_ACCOUNT_AUTH_RES = 2103,
    PROTO_OA_VERSION_REQ = 2104,
    PROTO_OA_VERSION_RES = 2105,
    PROTO_OA_NEW_ORDER_REQ = 2106,
    PROTO_OA_TRAILING_SL_CHANGED_EVENT = 2107,
    PROTO_OA_CANCEL_ORDER_REQ = 2108,
    PROTO_OA_AMEND_ORDER_REQ = 2109,
    PROTO_OA_AMEND_POSITION_SLTP_REQ = 2110,
    PROTO_OA_CLOSE_POSITION_REQ = 2111,
    PROTO_OA_ASSET_LIST_REQ = 2112,
    PROTO_OA_ASSET_LIST_RES = 2113,
    PROTO_OA_SYMBOLS_LIST_REQ = 2114,
    PROTO_OA_SYMBOLS_LIST_RES = 2115,
    PROTO_OA_SYMBOL_BY_ID_REQ = 2116,
    PROTO_OA_SYMBOL_BY_ID_RES = 2117,
    PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ = 2118,
    PROTO_OA_SYMBOLS_FOR_CONVERSION_RES = 2119,
    PROTO_OA_SYMBOL_CHANGED_EVENT = 2120,
    PROTO_OA_TRADER_REQ = 2121,
    PROTO_OA_TRADER_RES = 2122,
    PROTO_OA_TRADER_UPDATE_EVENT = 2123,
    PROTO_OA_RECONCILE_REQ = 2124,
    PROTO_OA_RECONCILE_RES = 2125,
    PROTO_OA_EXECUTION_EVENT = 2126,
    PROTO_OA_SUBSCRIBE_SPOTS_REQ = 2127,
    PROTO_OA_SUBSCRIBE_SPOTS_RES = 2128,
    PROTO_OA_UNSUBSCRIBE_SPOTS_REQ = 2129,
    PROTO_OA_UNSUBSCRIBE_SPOTS_RES = 2130,
    PROTO_OA_SPOT_EVENT = 2131,
    PROTO_OA_ORDER_ERROR_EVENT = 2132,
    PROTO_OA_DEAL_LIST_REQ = 2133,
    PROTO_OA_DEAL_LIST_RES = 2134,
    PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ = 2135,
    PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ = 2136,
    PROTO_OA_GET_TRENDBARS_REQ = 2137,
    PROTO_OA_GET_TRENDBARS_RES = 2138,
    PROTO_OA_EXPECTED_MARGIN_REQ = 2139,
    PROTO_OA_EXPECTED_MARGIN_RES = 2140,
    PROTO_OA_MARGIN_CHANGED_EVENT = 2141,
    PROTO_OA_ERROR_RES = 2142,
    PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ = 2143,
    PROTO_OA_CASH_FLOW_HISTORY_LIST_RES = 2144,
    PROTO_OA_GET_TICKDATA_REQ = 2145,
    PROTO_OA_GET_TICKDATA_RES = 2146,
    PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT = 2147,
    PROTO_OA_CLIENT_DISCONNECT_EVENT = 2148,
    PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ = 2149,
    PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES = 2150,
    PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ = 2151,
    PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES = 2152,
    PROTO_OA_ASSET_CLASS_LIST_REQ = 2153,
    PROTO_OA_ASSET_CLASS_LIST_RES = 2154,
    PROTO_OA_DEPTH_EVENT = 2155,
    PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ = 2156,
    PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES = 2157,
    PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ = 2158,
    PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES = 2159,
    PROTO_OA_SYMBOL_CATEGORY_REQ = 2160,
    PROTO_OA_SYMBOL_CATEGORY_RES = 2161,
    PROTO_OA_ACCOUNT_LOGOUT_REQ = 2162,
    PROTO_OA_ACCOUNT_LOGOUT_RES = 2163,
    PROTO_OA_ACCOUNT_DISCONNECT_EVENT = 2164,
    PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES = 2165,
    PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES = 2166,
    PROTO_OA_MARGIN_CALL_LIST_REQ = 2167,
    PROTO_OA_MARGIN_CALL_LIST_RES = 2168,
    PROTO_OA_MARGIN_CALL_UPDATE_REQ = 2169,
    PROTO_OA_MARGIN_CALL_UPDATE_RES = 2170,
    PROTO_OA_MARGIN_CALL_UPDATE_EVENT = 2171,
    PROTO_OA_MARGIN_CALL_TRIGGER_EVENT = 2172,
    PROTO_OA_REFRESH_TOKEN_REQ = 2173,
    PROTO_OA_REFRESH_TOKEN_RES = 2174,
    PROTO_OA_ORDER_LIST_REQ = 2175,
    PROTO_OA_ORDER_LIST_RES = 2176,
    PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ = 2177,
    PROTO_OA_GET_DYNAMIC_LEVERAGE_RES = 2178,
    PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ = 2179,
    PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES = 2180,
    PROTO_OA_ORDER_DETAILS_REQ = 2181,
    PROTO_OA_ORDER_DETAILS_RES = 2182,
    PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ = 2183,
    PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES = 2184,
    PROTO_OA_DEAL_OFFSET_LIST_REQ = 2185,
    PROTO_OA_DEAL_OFFSET_LIST_RES = 2186,
    PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ = 2187,
    PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES = 2188
}

/** ProtoOADayOfWeek enum. */
export enum ProtoOADayOfWeek {
    NONE = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7
}

/** ProtoOACommissionType enum. */
export enum ProtoOACommissionType {
    USD_PER_MILLION_USD = 1,
    USD_PER_LOT = 2,
    PERCENTAGE_OF_VALUE = 3,
    QUOTE_CCY_PER_LOT = 4
}

/** ProtoOASymbolDistanceType enum. */
export enum ProtoOASymbolDistanceType {
    SYMBOL_DISTANCE_IN_POINTS = 1,
    SYMBOL_DISTANCE_IN_PERCENTAGE = 2
}

/** ProtoOAMinCommissionType enum. */
export enum ProtoOAMinCommissionType {
    CURRENCY = 1,
    QUOTE_CURRENCY = 2
}

/** ProtoOATradingMode enum. */
export enum ProtoOATradingMode {
    ENABLED = 0,
    DISABLED_WITHOUT_PENDINGS_EXECUTION = 1,
    DISABLED_WITH_PENDINGS_EXECUTION = 2,
    CLOSE_ONLY_MODE = 3
}

/** ProtoOASwapCalculationType enum. */
export enum ProtoOASwapCalculationType {
    PIPS = 0,
    PERCENTAGE = 1
}

/** ProtoOAAccessRights enum. */
export enum ProtoOAAccessRights {
    FULL_ACCESS = 0,
    CLOSE_ONLY = 1,
    NO_TRADING = 2,
    NO_LOGIN = 3
}

/** ProtoOATotalMarginCalculationType enum. */
export enum ProtoOATotalMarginCalculationType {
    MAX = 0,
    SUM = 1,
    NET = 2
}

/** ProtoOAAccountType enum. */
export enum ProtoOAAccountType {
    HEDGED = 0,
    NETTED = 1,
    SPREAD_BETTING = 2
}

/** ProtoOAPositionStatus enum. */
export enum ProtoOAPositionStatus {
    POSITION_STATUS_OPEN = 1,
    POSITION_STATUS_CLOSED = 2,
    POSITION_STATUS_CREATED = 3,
    POSITION_STATUS_ERROR = 4
}

/** ProtoOATradeSide enum. */
export enum ProtoOATradeSide {
    BUY = 1,
    SELL = 2
}

/** ProtoOAOrderType enum. */
export enum ProtoOAOrderType {
    MARKET = 1,
    LIMIT = 2,
    STOP = 3,
    STOP_LOSS_TAKE_PROFIT = 4,
    MARKET_RANGE = 5,
    STOP_LIMIT = 6
}

/** ProtoOATimeInForce enum. */
export enum ProtoOATimeInForce {
    GOOD_TILL_DATE = 1,
    GOOD_TILL_CANCEL = 2,
    IMMEDIATE_OR_CANCEL = 3,
    FILL_OR_KILL = 4,
    MARKET_ON_OPEN = 5
}

/** ProtoOAOrderStatus enum. */
export enum ProtoOAOrderStatus {
    ORDER_STATUS_ACCEPTED = 1,
    ORDER_STATUS_FILLED = 2,
    ORDER_STATUS_REJECTED = 3,
    ORDER_STATUS_EXPIRED = 4,
    ORDER_STATUS_CANCELLED = 5
}

/** ProtoOAOrderTriggerMethod enum. */
export enum ProtoOAOrderTriggerMethod {
    TRADE = 1,
    OPPOSITE = 2,
    DOUBLE_TRADE = 3,
    DOUBLE_OPPOSITE = 4
}

/** ProtoOAExecutionType enum. */
export enum ProtoOAExecutionType {
    ORDER_ACCEPTED = 2,
    ORDER_FILLED = 3,
    ORDER_REPLACED = 4,
    ORDER_CANCELLED = 5,
    ORDER_EXPIRED = 6,
    ORDER_REJECTED = 7,
    ORDER_CANCEL_REJECTED = 8,
    SWAP = 9,
    DEPOSIT_WITHDRAW = 10,
    ORDER_PARTIAL_FILL = 11,
    BONUS_DEPOSIT_WITHDRAW = 12
}

/** ProtoOAChangeBonusType enum. */
export enum ProtoOAChangeBonusType {
    BONUS_DEPOSIT = 0,
    BONUS_WITHDRAW = 1
}

/** ProtoOAChangeBalanceType enum. */
export enum ProtoOAChangeBalanceType {
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
    BALANCE_DEPOSIT_NEGATIVE_BALANCE_PROTECTION = 39
}

/** ProtoOADealStatus enum. */
export enum ProtoOADealStatus {
    FILLED = 2,
    PARTIALLY_FILLED = 3,
    REJECTED = 4,
    INTERNALLY_REJECTED = 5,
    ERROR = 6,
    MISSED = 7
}

/** ProtoOATrendbarPeriod enum. */
export enum ProtoOATrendbarPeriod {
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,
    M5 = 5,
    M10 = 6,
    M15 = 7,
    M30 = 8,
    H1 = 9,
    H4 = 10,
    H12 = 11,
    D1 = 12,
    W1 = 13,
    MN1 = 14
}

/** ProtoOAQuoteType enum. */
export enum ProtoOAQuoteType {
    BID = 1,
    ASK = 2
}

/** ProtoOAClientPermissionScope enum. */
export enum ProtoOAClientPermissionScope {
    SCOPE_VIEW = 0,
    SCOPE_TRADE = 1
}

/** ProtoOANotificationType enum. */
export enum ProtoOANotificationType {
    MARGIN_LEVEL_THRESHOLD_1 = 61,
    MARGIN_LEVEL_THRESHOLD_2 = 62,
    MARGIN_LEVEL_THRESHOLD_3 = 63
}

/** ProtoOAErrorCode enum. */
export enum ProtoOAErrorCode {
    OA_AUTH_TOKEN_EXPIRED = 1,
    ACCOUNT_NOT_AUTHORIZED = 2,
    ALREADY_LOGGED_IN = 14,
    INCORRECT_BOUNDARIES = 35,
    CONNECTIONS_LIMIT_EXCEEDED = 67,
    WORSE_GSL_NOT_ALLOWED = 68,
    SYMBOL_HAS_HOLIDAY = 69,
    CH_CLIENT_AUTH_FAILURE = 101,
    CH_CLIENT_NOT_AUTHENTICATED = 102,
    CH_CLIENT_ALREADY_AUTHENTICATED = 103,
    CH_ACCESS_TOKEN_INVALID = 104,
    CH_SERVER_NOT_REACHABLE = 105,
    CH_CTID_TRADER_ACCOUNT_NOT_FOUND = 106,
    CH_OA_CLIENT_NOT_FOUND = 107,
    REQUEST_FREQUENCY_EXCEEDED = 108,
    SERVER_IS_UNDER_MAINTENANCE = 109,
    CHANNEL_IS_BLOCKED = 110,
    NOT_SUBSCRIBED_TO_SPOTS = 112,
    ALREADY_SUBSCRIBED = 113,
    SYMBOL_NOT_FOUND = 114,
    UNKNOWN_SYMBOL = 115,
    NO_QUOTES = 117,
    NOT_ENOUGH_MONEY = 118,
    MAX_EXPOSURE_REACHED = 119,
    POSITION_NOT_FOUND = 120,
    ORDER_NOT_FOUND = 121,
    POSITION_NOT_OPEN = 122,
    POSITION_LOCKED = 123,
    TOO_MANY_POSITIONS = 124,
    TRADING_BAD_VOLUME = 125,
    TRADING_BAD_STOPS = 126,
    TRADING_BAD_PRICES = 127,
    TRADING_BAD_STAKE = 128,
    PROTECTION_IS_TOO_CLOSE_TO_MARKET = 129,
    TRADING_BAD_EXPIRATION_DATE = 130,
    PENDING_EXECUTION = 131,
    TRADING_DISABLED = 132,
    TRADING_NOT_ALLOWED = 133,
    UNABLE_TO_CANCEL_ORDER = 134,
    UNABLE_TO_AMEND_ORDER = 135,
    SHORT_SELLING_NOT_ALLOWED = 136
}

/** ProtoOALimitedRiskMarginCalculationStrategy enum. */
export enum ProtoOALimitedRiskMarginCalculationStrategy {
    ACCORDING_TO_LEVERAGE = 0,
    ACCORDING_TO_GSL = 1,
    ACCORDING_TO_GSL_AND_LEVERAGE = 2
}

/** Represents a ProtoOAAsset. */
export class ProtoOAAsset implements IProtoOAAsset {

    /**
     * Constructs a new ProtoOAAsset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAsset);

    /** ProtoOAAsset assetId. */
    public assetId: number;

    /** ProtoOAAsset name. */
    public name: string;

    /** ProtoOAAsset displayName. */
    public displayName: string;

    /** ProtoOAAsset digits. */
    public digits: number;

    /**
     * Creates a new ProtoOAAsset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAsset instance
     */
    public static create(properties?: IProtoOAAsset): ProtoOAAsset;

    /**
     * Encodes the specified ProtoOAAsset message. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
     * @param message ProtoOAAsset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAsset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAsset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAsset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAsset;

    /**
     * Gets the default type url for ProtoOAAsset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbol. */
export class ProtoOASymbol implements IProtoOASymbol {

    /**
     * Constructs a new ProtoOASymbol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbol);

    /** ProtoOASymbol symbolId. */
    public symbolId: number;

    /** ProtoOASymbol digits. */
    public digits: number;

    /** ProtoOASymbol pipPosition. */
    public pipPosition: number;

    /** ProtoOASymbol enableShortSelling. */
    public enableShortSelling: boolean;

    /** ProtoOASymbol guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOASymbol swapRollover3Days. */
    public swapRollover3Days: ProtoOADayOfWeek;

    /** ProtoOASymbol swapLong. */
    public swapLong: number;

    /** ProtoOASymbol swapShort. */
    public swapShort: number;

    /** ProtoOASymbol maxVolume. */
    public maxVolume: number;

    /** ProtoOASymbol minVolume. */
    public minVolume: number;

    /** ProtoOASymbol stepVolume. */
    public stepVolume: number;

    /** ProtoOASymbol maxExposure. */
    public maxExposure: number;

    /** ProtoOASymbol schedule. */
    public schedule: IProtoOAInterval[];

    /** ProtoOASymbol commission. */
    public commission: number;

    /** ProtoOASymbol commissionType. */
    public commissionType: ProtoOACommissionType;

    /** ProtoOASymbol slDistance. */
    public slDistance: number;

    /** ProtoOASymbol tpDistance. */
    public tpDistance: number;

    /** ProtoOASymbol gslDistance. */
    public gslDistance: number;

    /** ProtoOASymbol gslCharge. */
    public gslCharge: number;

    /** ProtoOASymbol distanceSetIn. */
    public distanceSetIn: ProtoOASymbolDistanceType;

    /** ProtoOASymbol minCommission. */
    public minCommission: number;

    /** ProtoOASymbol minCommissionType. */
    public minCommissionType: ProtoOAMinCommissionType;

    /** ProtoOASymbol minCommissionAsset. */
    public minCommissionAsset: string;

    /** ProtoOASymbol rolloverCommission. */
    public rolloverCommission: number;

    /** ProtoOASymbol skipRolloverDays. */
    public skipRolloverDays: number;

    /** ProtoOASymbol scheduleTimeZone. */
    public scheduleTimeZone: string;

    /** ProtoOASymbol tradingMode. */
    public tradingMode: ProtoOATradingMode;

    /** ProtoOASymbol rolloverCommission3Days. */
    public rolloverCommission3Days: ProtoOADayOfWeek;

    /** ProtoOASymbol swapCalculationType. */
    public swapCalculationType: ProtoOASwapCalculationType;

    /** ProtoOASymbol lotSize. */
    public lotSize: number;

    /** ProtoOASymbol preciseTradingCommissionRate. */
    public preciseTradingCommissionRate: number;

    /** ProtoOASymbol preciseMinCommission. */
    public preciseMinCommission: number;

    /** ProtoOASymbol holiday. */
    public holiday: IProtoOAHoliday[];

    /** ProtoOASymbol pnlConversionFeeRate. */
    public pnlConversionFeeRate: number;

    /** ProtoOASymbol leverageId. */
    public leverageId: number;

    /** ProtoOASymbol swapPeriod. */
    public swapPeriod: number;

    /** ProtoOASymbol swapTime. */
    public swapTime: number;

    /** ProtoOASymbol skipSWAPPeriods. */
    public skipSWAPPeriods: number;

    /** ProtoOASymbol chargeSwapAtWeekends. */
    public chargeSwapAtWeekends: boolean;

    /**
     * Creates a new ProtoOASymbol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbol instance
     */
    public static create(properties?: IProtoOASymbol): ProtoOASymbol;

    /**
     * Encodes the specified ProtoOASymbol message. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
     * @param message ProtoOASymbol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbol;

    /**
     * Gets the default type url for ProtoOASymbol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOALightSymbol. */
export class ProtoOALightSymbol implements IProtoOALightSymbol {

    /**
     * Constructs a new ProtoOALightSymbol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOALightSymbol);

    /** ProtoOALightSymbol symbolId. */
    public symbolId: number;

    /** ProtoOALightSymbol symbolName. */
    public symbolName: string;

    /** ProtoOALightSymbol enabled. */
    public enabled: boolean;

    /** ProtoOALightSymbol baseAssetId. */
    public baseAssetId: number;

    /** ProtoOALightSymbol quoteAssetId. */
    public quoteAssetId: number;

    /** ProtoOALightSymbol symbolCategoryId. */
    public symbolCategoryId: number;

    /** ProtoOALightSymbol description. */
    public description: string;

    /**
     * Creates a new ProtoOALightSymbol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOALightSymbol instance
     */
    public static create(properties?: IProtoOALightSymbol): ProtoOALightSymbol;

    /**
     * Encodes the specified ProtoOALightSymbol message. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
     * @param message ProtoOALightSymbol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOALightSymbol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOALightSymbol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOALightSymbol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOALightSymbol;

    /**
     * Gets the default type url for ProtoOALightSymbol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAArchivedSymbol. */
export class ProtoOAArchivedSymbol implements IProtoOAArchivedSymbol {

    /**
     * Constructs a new ProtoOAArchivedSymbol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAArchivedSymbol);

    /** ProtoOAArchivedSymbol symbolId. */
    public symbolId: number;

    /** ProtoOAArchivedSymbol name. */
    public name: string;

    /** ProtoOAArchivedSymbol utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /** ProtoOAArchivedSymbol description. */
    public description: string;

    /**
     * Creates a new ProtoOAArchivedSymbol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAArchivedSymbol instance
     */
    public static create(properties?: IProtoOAArchivedSymbol): ProtoOAArchivedSymbol;

    /**
     * Encodes the specified ProtoOAArchivedSymbol message. Does not implicitly {@link ProtoOAArchivedSymbol.verify|verify} messages.
     * @param message ProtoOAArchivedSymbol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAArchivedSymbol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAArchivedSymbol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAArchivedSymbol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAArchivedSymbol;

    /**
     * Gets the default type url for ProtoOAArchivedSymbol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolCategory. */
export class ProtoOASymbolCategory implements IProtoOASymbolCategory {

    /**
     * Constructs a new ProtoOASymbolCategory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolCategory);

    /** ProtoOASymbolCategory id. */
    public id: number;

    /** ProtoOASymbolCategory assetClassId. */
    public assetClassId: number;

    /** ProtoOASymbolCategory name. */
    public name: string;

    /**
     * Creates a new ProtoOASymbolCategory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolCategory instance
     */
    public static create(properties?: IProtoOASymbolCategory): ProtoOASymbolCategory;

    /**
     * Encodes the specified ProtoOASymbolCategory message. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
     * @param message ProtoOASymbolCategory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolCategory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolCategory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolCategory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolCategory;

    /**
     * Gets the default type url for ProtoOASymbolCategory
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAInterval. */
export class ProtoOAInterval implements IProtoOAInterval {

    /**
     * Constructs a new ProtoOAInterval.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAInterval);

    /** ProtoOAInterval startSecond. */
    public startSecond: number;

    /** ProtoOAInterval endSecond. */
    public endSecond: number;

    /**
     * Creates a new ProtoOAInterval instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAInterval instance
     */
    public static create(properties?: IProtoOAInterval): ProtoOAInterval;

    /**
     * Encodes the specified ProtoOAInterval message. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
     * @param message ProtoOAInterval message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAInterval, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAInterval message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAInterval
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAInterval;

    /**
     * Gets the default type url for ProtoOAInterval
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATrader. */
export class ProtoOATrader implements IProtoOATrader {

    /**
     * Constructs a new ProtoOATrader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATrader);

    /** ProtoOATrader ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOATrader balance. */
    public balance: number;

    /** ProtoOATrader balanceVersion. */
    public balanceVersion: number;

    /** ProtoOATrader managerBonus. */
    public managerBonus: number;

    /** ProtoOATrader ibBonus. */
    public ibBonus: number;

    /** ProtoOATrader nonWithdrawableBonus. */
    public nonWithdrawableBonus: number;

    /** ProtoOATrader accessRights. */
    public accessRights: ProtoOAAccessRights;

    /** ProtoOATrader depositAssetId. */
    public depositAssetId: number;

    /** ProtoOATrader swapFree. */
    public swapFree: boolean;

    /** ProtoOATrader leverageInCents. */
    public leverageInCents: number;

    /** ProtoOATrader totalMarginCalculationType. */
    public totalMarginCalculationType: ProtoOATotalMarginCalculationType;

    /** ProtoOATrader maxLeverage. */
    public maxLeverage: number;

    /** ProtoOATrader frenchRisk. */
    public frenchRisk: boolean;

    /** ProtoOATrader traderLogin. */
    public traderLogin: number;

    /** ProtoOATrader accountType. */
    public accountType: ProtoOAAccountType;

    /** ProtoOATrader brokerName. */
    public brokerName: string;

    /** ProtoOATrader registrationTimestamp. */
    public registrationTimestamp: number;

    /** ProtoOATrader isLimitedRisk. */
    public isLimitedRisk: boolean;

    /** ProtoOATrader limitedRiskMarginCalculationStrategy. */
    public limitedRiskMarginCalculationStrategy: ProtoOALimitedRiskMarginCalculationStrategy;

    /** ProtoOATrader moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOATrader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATrader instance
     */
    public static create(properties?: IProtoOATrader): ProtoOATrader;

    /**
     * Encodes the specified ProtoOATrader message. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
     * @param message ProtoOATrader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATrader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATrader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATrader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATrader;

    /**
     * Gets the default type url for ProtoOATrader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAPosition. */
export class ProtoOAPosition implements IProtoOAPosition {

    /**
     * Constructs a new ProtoOAPosition.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAPosition);

    /** ProtoOAPosition positionId. */
    public positionId: number;

    /** ProtoOAPosition tradeData. */
    public tradeData: IProtoOATradeData;

    /** ProtoOAPosition positionStatus. */
    public positionStatus: ProtoOAPositionStatus;

    /** ProtoOAPosition swap. */
    public swap: number;

    /** ProtoOAPosition price. */
    public price: number;

    /** ProtoOAPosition stopLoss. */
    public stopLoss: number;

    /** ProtoOAPosition takeProfit. */
    public takeProfit: number;

    /** ProtoOAPosition utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /** ProtoOAPosition commission. */
    public commission: number;

    /** ProtoOAPosition marginRate. */
    public marginRate: number;

    /** ProtoOAPosition mirroringCommission. */
    public mirroringCommission: number;

    /** ProtoOAPosition guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOAPosition usedMargin. */
    public usedMargin: number;

    /** ProtoOAPosition stopLossTriggerMethod. */
    public stopLossTriggerMethod: ProtoOAOrderTriggerMethod;

    /** ProtoOAPosition moneyDigits. */
    public moneyDigits: number;

    /** ProtoOAPosition trailingStopLoss. */
    public trailingStopLoss: boolean;

    /**
     * Creates a new ProtoOAPosition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAPosition instance
     */
    public static create(properties?: IProtoOAPosition): ProtoOAPosition;

    /**
     * Encodes the specified ProtoOAPosition message. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
     * @param message ProtoOAPosition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAPosition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAPosition;

    /**
     * Gets the default type url for ProtoOAPosition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATradeData. */
export class ProtoOATradeData implements IProtoOATradeData {

    /**
     * Constructs a new ProtoOATradeData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATradeData);

    /** ProtoOATradeData symbolId. */
    public symbolId: number;

    /** ProtoOATradeData volume. */
    public volume: number;

    /** ProtoOATradeData tradeSide. */
    public tradeSide: ProtoOATradeSide;

    /** ProtoOATradeData openTimestamp. */
    public openTimestamp: number;

    /** ProtoOATradeData label. */
    public label: string;

    /** ProtoOATradeData guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOATradeData comment. */
    public comment: string;

    /**
     * Creates a new ProtoOATradeData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATradeData instance
     */
    public static create(properties?: IProtoOATradeData): ProtoOATradeData;

    /**
     * Encodes the specified ProtoOATradeData message. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
     * @param message ProtoOATradeData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATradeData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATradeData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATradeData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATradeData;

    /**
     * Gets the default type url for ProtoOATradeData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrder. */
export class ProtoOAOrder implements IProtoOAOrder {

    /**
     * Constructs a new ProtoOAOrder.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrder);

    /** ProtoOAOrder orderId. */
    public orderId: number;

    /** ProtoOAOrder tradeData. */
    public tradeData: IProtoOATradeData;

    /** ProtoOAOrder orderType. */
    public orderType: ProtoOAOrderType;

    /** ProtoOAOrder orderStatus. */
    public orderStatus: ProtoOAOrderStatus;

    /** ProtoOAOrder expirationTimestamp. */
    public expirationTimestamp: number;

    /** ProtoOAOrder executionPrice. */
    public executionPrice: number;

    /** ProtoOAOrder executedVolume. */
    public executedVolume: number;

    /** ProtoOAOrder utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /** ProtoOAOrder baseSlippagePrice. */
    public baseSlippagePrice: number;

    /** ProtoOAOrder slippageInPoints. */
    public slippageInPoints: number;

    /** ProtoOAOrder closingOrder. */
    public closingOrder: boolean;

    /** ProtoOAOrder limitPrice. */
    public limitPrice: number;

    /** ProtoOAOrder stopPrice. */
    public stopPrice: number;

    /** ProtoOAOrder stopLoss. */
    public stopLoss: number;

    /** ProtoOAOrder takeProfit. */
    public takeProfit: number;

    /** ProtoOAOrder clientOrderId. */
    public clientOrderId: string;

    /** ProtoOAOrder timeInForce. */
    public timeInForce: ProtoOATimeInForce;

    /** ProtoOAOrder positionId. */
    public positionId: number;

    /** ProtoOAOrder relativeStopLoss. */
    public relativeStopLoss: number;

    /** ProtoOAOrder relativeTakeProfit. */
    public relativeTakeProfit: number;

    /** ProtoOAOrder isStopOut. */
    public isStopOut: boolean;

    /** ProtoOAOrder trailingStopLoss. */
    public trailingStopLoss: boolean;

    /** ProtoOAOrder stopTriggerMethod. */
    public stopTriggerMethod: ProtoOAOrderTriggerMethod;

    /**
     * Creates a new ProtoOAOrder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrder instance
     */
    public static create(properties?: IProtoOAOrder): ProtoOAOrder;

    /**
     * Encodes the specified ProtoOAOrder message. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
     * @param message ProtoOAOrder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrder message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrder;

    /**
     * Gets the default type url for ProtoOAOrder
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOABonusDepositWithdraw. */
export class ProtoOABonusDepositWithdraw implements IProtoOABonusDepositWithdraw {

    /**
     * Constructs a new ProtoOABonusDepositWithdraw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOABonusDepositWithdraw);

    /** ProtoOABonusDepositWithdraw operationType. */
    public operationType: ProtoOAChangeBonusType;

    /** ProtoOABonusDepositWithdraw bonusHistoryId. */
    public bonusHistoryId: number;

    /** ProtoOABonusDepositWithdraw managerBonus. */
    public managerBonus: number;

    /** ProtoOABonusDepositWithdraw managerDelta. */
    public managerDelta: number;

    /** ProtoOABonusDepositWithdraw ibBonus. */
    public ibBonus: number;

    /** ProtoOABonusDepositWithdraw ibDelta. */
    public ibDelta: number;

    /** ProtoOABonusDepositWithdraw changeBonusTimestamp. */
    public changeBonusTimestamp: number;

    /** ProtoOABonusDepositWithdraw externalNote. */
    public externalNote: string;

    /** ProtoOABonusDepositWithdraw introducingBrokerId. */
    public introducingBrokerId: number;

    /** ProtoOABonusDepositWithdraw moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOABonusDepositWithdraw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOABonusDepositWithdraw instance
     */
    public static create(properties?: IProtoOABonusDepositWithdraw): ProtoOABonusDepositWithdraw;

    /**
     * Encodes the specified ProtoOABonusDepositWithdraw message. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
     * @param message ProtoOABonusDepositWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOABonusDepositWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOABonusDepositWithdraw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOABonusDepositWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOABonusDepositWithdraw;

    /**
     * Gets the default type url for ProtoOABonusDepositWithdraw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADepositWithdraw. */
export class ProtoOADepositWithdraw implements IProtoOADepositWithdraw {

    /**
     * Constructs a new ProtoOADepositWithdraw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADepositWithdraw);

    /** ProtoOADepositWithdraw operationType. */
    public operationType: ProtoOAChangeBalanceType;

    /** ProtoOADepositWithdraw balanceHistoryId. */
    public balanceHistoryId: number;

    /** ProtoOADepositWithdraw balance. */
    public balance: number;

    /** ProtoOADepositWithdraw delta. */
    public delta: number;

    /** ProtoOADepositWithdraw changeBalanceTimestamp. */
    public changeBalanceTimestamp: number;

    /** ProtoOADepositWithdraw externalNote. */
    public externalNote: string;

    /** ProtoOADepositWithdraw balanceVersion. */
    public balanceVersion: number;

    /** ProtoOADepositWithdraw equity. */
    public equity: number;

    /** ProtoOADepositWithdraw moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOADepositWithdraw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADepositWithdraw instance
     */
    public static create(properties?: IProtoOADepositWithdraw): ProtoOADepositWithdraw;

    /**
     * Encodes the specified ProtoOADepositWithdraw message. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
     * @param message ProtoOADepositWithdraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADepositWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADepositWithdraw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADepositWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADepositWithdraw;

    /**
     * Gets the default type url for ProtoOADepositWithdraw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADeal. */
export class ProtoOADeal implements IProtoOADeal {

    /**
     * Constructs a new ProtoOADeal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADeal);

    /** ProtoOADeal dealId. */
    public dealId: number;

    /** ProtoOADeal orderId. */
    public orderId: number;

    /** ProtoOADeal positionId. */
    public positionId: number;

    /** ProtoOADeal volume. */
    public volume: number;

    /** ProtoOADeal filledVolume. */
    public filledVolume: number;

    /** ProtoOADeal symbolId. */
    public symbolId: number;

    /** ProtoOADeal createTimestamp. */
    public createTimestamp: number;

    /** ProtoOADeal executionTimestamp. */
    public executionTimestamp: number;

    /** ProtoOADeal utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /** ProtoOADeal executionPrice. */
    public executionPrice: number;

    /** ProtoOADeal tradeSide. */
    public tradeSide: ProtoOATradeSide;

    /** ProtoOADeal dealStatus. */
    public dealStatus: ProtoOADealStatus;

    /** ProtoOADeal marginRate. */
    public marginRate: number;

    /** ProtoOADeal commission. */
    public commission: number;

    /** ProtoOADeal baseToUsdConversionRate. */
    public baseToUsdConversionRate: number;

    /** ProtoOADeal closePositionDetail. */
    public closePositionDetail?: (IProtoOAClosePositionDetail|null);

    /** ProtoOADeal moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOADeal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADeal instance
     */
    public static create(properties?: IProtoOADeal): ProtoOADeal;

    /**
     * Encodes the specified ProtoOADeal message. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
     * @param message ProtoOADeal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADeal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADeal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADeal;

    /**
     * Gets the default type url for ProtoOADeal
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAClosePositionDetail. */
export class ProtoOAClosePositionDetail implements IProtoOAClosePositionDetail {

    /**
     * Constructs a new ProtoOAClosePositionDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAClosePositionDetail);

    /** ProtoOAClosePositionDetail entryPrice. */
    public entryPrice: number;

    /** ProtoOAClosePositionDetail grossProfit. */
    public grossProfit: number;

    /** ProtoOAClosePositionDetail swap. */
    public swap: number;

    /** ProtoOAClosePositionDetail commission. */
    public commission: number;

    /** ProtoOAClosePositionDetail balance. */
    public balance: number;

    /** ProtoOAClosePositionDetail quoteToDepositConversionRate. */
    public quoteToDepositConversionRate: number;

    /** ProtoOAClosePositionDetail closedVolume. */
    public closedVolume: number;

    /** ProtoOAClosePositionDetail balanceVersion. */
    public balanceVersion: number;

    /** ProtoOAClosePositionDetail moneyDigits. */
    public moneyDigits: number;

    /** ProtoOAClosePositionDetail pnlConversionFee. */
    public pnlConversionFee: number;

    /**
     * Creates a new ProtoOAClosePositionDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAClosePositionDetail instance
     */
    public static create(properties?: IProtoOAClosePositionDetail): ProtoOAClosePositionDetail;

    /**
     * Encodes the specified ProtoOAClosePositionDetail message. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
     * @param message ProtoOAClosePositionDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAClosePositionDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAClosePositionDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAClosePositionDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAClosePositionDetail;

    /**
     * Gets the default type url for ProtoOAClosePositionDetail
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATrendbar. */
export class ProtoOATrendbar implements IProtoOATrendbar {

    /**
     * Constructs a new ProtoOATrendbar.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATrendbar);

    /** ProtoOATrendbar volume. */
    public volume: number;

    /** ProtoOATrendbar period. */
    public period: ProtoOATrendbarPeriod;

    /** ProtoOATrendbar low. */
    public low: number;

    /** ProtoOATrendbar deltaOpen. */
    public deltaOpen: number;

    /** ProtoOATrendbar deltaClose. */
    public deltaClose: number;

    /** ProtoOATrendbar deltaHigh. */
    public deltaHigh: number;

    /** ProtoOATrendbar utcTimestampInMinutes. */
    public utcTimestampInMinutes: number;

    /**
     * Creates a new ProtoOATrendbar instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATrendbar instance
     */
    public static create(properties?: IProtoOATrendbar): ProtoOATrendbar;

    /**
     * Encodes the specified ProtoOATrendbar message. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
     * @param message ProtoOATrendbar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATrendbar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATrendbar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATrendbar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATrendbar;

    /**
     * Gets the default type url for ProtoOATrendbar
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAExpectedMargin. */
export class ProtoOAExpectedMargin implements IProtoOAExpectedMargin {

    /**
     * Constructs a new ProtoOAExpectedMargin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAExpectedMargin);

    /** ProtoOAExpectedMargin volume. */
    public volume: number;

    /** ProtoOAExpectedMargin buyMargin. */
    public buyMargin: number;

    /** ProtoOAExpectedMargin sellMargin. */
    public sellMargin: number;

    /**
     * Creates a new ProtoOAExpectedMargin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAExpectedMargin instance
     */
    public static create(properties?: IProtoOAExpectedMargin): ProtoOAExpectedMargin;

    /**
     * Encodes the specified ProtoOAExpectedMargin message. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
     * @param message ProtoOAExpectedMargin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAExpectedMargin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAExpectedMargin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAExpectedMargin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAExpectedMargin;

    /**
     * Gets the default type url for ProtoOAExpectedMargin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATickData. */
export class ProtoOATickData implements IProtoOATickData {

    /**
     * Constructs a new ProtoOATickData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATickData);

    /** ProtoOATickData timestamp. */
    public timestamp: number;

    /** ProtoOATickData tick. */
    public tick: number;

    /**
     * Creates a new ProtoOATickData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATickData instance
     */
    public static create(properties?: IProtoOATickData): ProtoOATickData;

    /**
     * Encodes the specified ProtoOATickData message. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
     * @param message ProtoOATickData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATickData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATickData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATickData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATickData;

    /**
     * Gets the default type url for ProtoOATickData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOACtidProfile. */
export class ProtoOACtidProfile implements IProtoOACtidProfile {

    /**
     * Constructs a new ProtoOACtidProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOACtidProfile);

    /** ProtoOACtidProfile userId. */
    public userId: number;

    /**
     * Creates a new ProtoOACtidProfile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOACtidProfile instance
     */
    public static create(properties?: IProtoOACtidProfile): ProtoOACtidProfile;

    /**
     * Encodes the specified ProtoOACtidProfile message. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
     * @param message ProtoOACtidProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOACtidProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOACtidProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOACtidProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOACtidProfile;

    /**
     * Gets the default type url for ProtoOACtidProfile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOACtidTraderAccount. */
export class ProtoOACtidTraderAccount implements IProtoOACtidTraderAccount {

    /**
     * Constructs a new ProtoOACtidTraderAccount.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOACtidTraderAccount);

    /** ProtoOACtidTraderAccount ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOACtidTraderAccount isLive. */
    public isLive: boolean;

    /** ProtoOACtidTraderAccount traderLogin. */
    public traderLogin: number;

    /** ProtoOACtidTraderAccount lastClosingDealTimestamp. */
    public lastClosingDealTimestamp: number;

    /** ProtoOACtidTraderAccount lastBalanceUpdateTimestamp. */
    public lastBalanceUpdateTimestamp: number;

    /**
     * Creates a new ProtoOACtidTraderAccount instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOACtidTraderAccount instance
     */
    public static create(properties?: IProtoOACtidTraderAccount): ProtoOACtidTraderAccount;

    /**
     * Encodes the specified ProtoOACtidTraderAccount message. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
     * @param message ProtoOACtidTraderAccount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOACtidTraderAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOACtidTraderAccount message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOACtidTraderAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOACtidTraderAccount;

    /**
     * Gets the default type url for ProtoOACtidTraderAccount
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAssetClass. */
export class ProtoOAAssetClass implements IProtoOAAssetClass {

    /**
     * Constructs a new ProtoOAAssetClass.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAssetClass);

    /** ProtoOAAssetClass id. */
    public id: number;

    /** ProtoOAAssetClass name. */
    public name: string;

    /**
     * Creates a new ProtoOAAssetClass instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAssetClass instance
     */
    public static create(properties?: IProtoOAAssetClass): ProtoOAAssetClass;

    /**
     * Encodes the specified ProtoOAAssetClass message. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
     * @param message ProtoOAAssetClass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAssetClass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAssetClass message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAssetClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAssetClass;

    /**
     * Gets the default type url for ProtoOAAssetClass
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADepthQuote. */
export class ProtoOADepthQuote implements IProtoOADepthQuote {

    /**
     * Constructs a new ProtoOADepthQuote.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADepthQuote);

    /** ProtoOADepthQuote id. */
    public id: number;

    /** ProtoOADepthQuote size. */
    public size: number;

    /** ProtoOADepthQuote bid. */
    public bid: number;

    /** ProtoOADepthQuote ask. */
    public ask: number;

    /**
     * Creates a new ProtoOADepthQuote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADepthQuote instance
     */
    public static create(properties?: IProtoOADepthQuote): ProtoOADepthQuote;

    /**
     * Encodes the specified ProtoOADepthQuote message. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
     * @param message ProtoOADepthQuote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADepthQuote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADepthQuote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADepthQuote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADepthQuote;

    /**
     * Gets the default type url for ProtoOADepthQuote
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCall. */
export class ProtoOAMarginCall implements IProtoOAMarginCall {

    /**
     * Constructs a new ProtoOAMarginCall.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCall);

    /** ProtoOAMarginCall marginCallType. */
    public marginCallType: ProtoOANotificationType;

    /** ProtoOAMarginCall marginLevelThreshold. */
    public marginLevelThreshold: number;

    /** ProtoOAMarginCall utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /**
     * Creates a new ProtoOAMarginCall instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCall instance
     */
    public static create(properties?: IProtoOAMarginCall): ProtoOAMarginCall;

    /**
     * Encodes the specified ProtoOAMarginCall message. Does not implicitly {@link ProtoOAMarginCall.verify|verify} messages.
     * @param message ProtoOAMarginCall message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCall message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCall
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCall;

    /**
     * Gets the default type url for ProtoOAMarginCall
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAHoliday. */
export class ProtoOAHoliday implements IProtoOAHoliday {

    /**
     * Constructs a new ProtoOAHoliday.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAHoliday);

    /** ProtoOAHoliday holidayId. */
    public holidayId: number;

    /** ProtoOAHoliday name. */
    public name: string;

    /** ProtoOAHoliday description. */
    public description: string;

    /** ProtoOAHoliday scheduleTimeZone. */
    public scheduleTimeZone: string;

    /** ProtoOAHoliday holidayDate. */
    public holidayDate: number;

    /** ProtoOAHoliday isRecurring. */
    public isRecurring: boolean;

    /** ProtoOAHoliday startSecond. */
    public startSecond: number;

    /** ProtoOAHoliday endSecond. */
    public endSecond: number;

    /**
     * Creates a new ProtoOAHoliday instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAHoliday instance
     */
    public static create(properties?: IProtoOAHoliday): ProtoOAHoliday;

    /**
     * Encodes the specified ProtoOAHoliday message. Does not implicitly {@link ProtoOAHoliday.verify|verify} messages.
     * @param message ProtoOAHoliday message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAHoliday, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAHoliday message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAHoliday
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAHoliday;

    /**
     * Gets the default type url for ProtoOAHoliday
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADynamicLeverage. */
export class ProtoOADynamicLeverage implements IProtoOADynamicLeverage {

    /**
     * Constructs a new ProtoOADynamicLeverage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADynamicLeverage);

    /** ProtoOADynamicLeverage leverageId. */
    public leverageId: number;

    /** ProtoOADynamicLeverage tiers. */
    public tiers: IProtoOADynamicLeverageTier[];

    /**
     * Creates a new ProtoOADynamicLeverage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADynamicLeverage instance
     */
    public static create(properties?: IProtoOADynamicLeverage): ProtoOADynamicLeverage;

    /**
     * Encodes the specified ProtoOADynamicLeverage message. Does not implicitly {@link ProtoOADynamicLeverage.verify|verify} messages.
     * @param message ProtoOADynamicLeverage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADynamicLeverage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADynamicLeverage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADynamicLeverage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADynamicLeverage;

    /**
     * Gets the default type url for ProtoOADynamicLeverage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADynamicLeverageTier. */
export class ProtoOADynamicLeverageTier implements IProtoOADynamicLeverageTier {

    /**
     * Constructs a new ProtoOADynamicLeverageTier.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADynamicLeverageTier);

    /** ProtoOADynamicLeverageTier volume. */
    public volume: number;

    /** ProtoOADynamicLeverageTier leverage. */
    public leverage: number;

    /**
     * Creates a new ProtoOADynamicLeverageTier instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADynamicLeverageTier instance
     */
    public static create(properties?: IProtoOADynamicLeverageTier): ProtoOADynamicLeverageTier;

    /**
     * Encodes the specified ProtoOADynamicLeverageTier message. Does not implicitly {@link ProtoOADynamicLeverageTier.verify|verify} messages.
     * @param message ProtoOADynamicLeverageTier message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADynamicLeverageTier, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADynamicLeverageTier message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADynamicLeverageTier
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADynamicLeverageTier;

    /**
     * Gets the default type url for ProtoOADynamicLeverageTier
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealOffset. */
export class ProtoOADealOffset implements IProtoOADealOffset {

    /**
     * Constructs a new ProtoOADealOffset.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealOffset);

    /** ProtoOADealOffset dealId. */
    public dealId: number;

    /** ProtoOADealOffset volume. */
    public volume: number;

    /** ProtoOADealOffset executionTimestamp. */
    public executionTimestamp: number;

    /** ProtoOADealOffset executionPrice. */
    public executionPrice: number;

    /**
     * Creates a new ProtoOADealOffset instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealOffset instance
     */
    public static create(properties?: IProtoOADealOffset): ProtoOADealOffset;

    /**
     * Encodes the specified ProtoOADealOffset message. Does not implicitly {@link ProtoOADealOffset.verify|verify} messages.
     * @param message ProtoOADealOffset message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealOffset, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealOffset message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealOffset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealOffset;

    /**
     * Gets the default type url for ProtoOADealOffset
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAPositionUnrealizedPnL. */
export class ProtoOAPositionUnrealizedPnL implements IProtoOAPositionUnrealizedPnL {

    /**
     * Constructs a new ProtoOAPositionUnrealizedPnL.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAPositionUnrealizedPnL);

    /** ProtoOAPositionUnrealizedPnL positionId. */
    public positionId: number;

    /** ProtoOAPositionUnrealizedPnL grossUnrealizedPnL. */
    public grossUnrealizedPnL: number;

    /** ProtoOAPositionUnrealizedPnL netUnrealizedPnL. */
    public netUnrealizedPnL: number;

    /**
     * Creates a new ProtoOAPositionUnrealizedPnL instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAPositionUnrealizedPnL instance
     */
    public static create(properties?: IProtoOAPositionUnrealizedPnL): ProtoOAPositionUnrealizedPnL;

    /**
     * Encodes the specified ProtoOAPositionUnrealizedPnL message. Does not implicitly {@link ProtoOAPositionUnrealizedPnL.verify|verify} messages.
     * @param message ProtoOAPositionUnrealizedPnL message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAPositionUnrealizedPnL, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAPositionUnrealizedPnL message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAPositionUnrealizedPnL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAPositionUnrealizedPnL;

    /**
     * Gets the default type url for ProtoOAPositionUnrealizedPnL
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAApplicationAuthReq. */
export class ProtoOAApplicationAuthReq implements IProtoOAApplicationAuthReq {

    /**
     * Constructs a new ProtoOAApplicationAuthReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAApplicationAuthReq);

    /** ProtoOAApplicationAuthReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAApplicationAuthReq clientId. */
    public clientId: string;

    /** ProtoOAApplicationAuthReq clientSecret. */
    public clientSecret: string;

    /**
     * Creates a new ProtoOAApplicationAuthReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAApplicationAuthReq instance
     */
    public static create(properties?: IProtoOAApplicationAuthReq): ProtoOAApplicationAuthReq;

    /**
     * Encodes the specified ProtoOAApplicationAuthReq message. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
     * @param message ProtoOAApplicationAuthReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAApplicationAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAApplicationAuthReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAApplicationAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAApplicationAuthReq;

    /**
     * Gets the default type url for ProtoOAApplicationAuthReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAApplicationAuthRes. */
export class ProtoOAApplicationAuthRes implements IProtoOAApplicationAuthRes {

    /**
     * Constructs a new ProtoOAApplicationAuthRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAApplicationAuthRes);

    /** ProtoOAApplicationAuthRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /**
     * Creates a new ProtoOAApplicationAuthRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAApplicationAuthRes instance
     */
    public static create(properties?: IProtoOAApplicationAuthRes): ProtoOAApplicationAuthRes;

    /**
     * Encodes the specified ProtoOAApplicationAuthRes message. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
     * @param message ProtoOAApplicationAuthRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAApplicationAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAApplicationAuthRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAApplicationAuthRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAApplicationAuthRes;

    /**
     * Gets the default type url for ProtoOAApplicationAuthRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountAuthReq. */
export class ProtoOAAccountAuthReq implements IProtoOAAccountAuthReq {

    /**
     * Constructs a new ProtoOAAccountAuthReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountAuthReq);

    /** ProtoOAAccountAuthReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountAuthReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAAccountAuthReq accessToken. */
    public accessToken: string;

    /**
     * Creates a new ProtoOAAccountAuthReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountAuthReq instance
     */
    public static create(properties?: IProtoOAAccountAuthReq): ProtoOAAccountAuthReq;

    /**
     * Encodes the specified ProtoOAAccountAuthReq message. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
     * @param message ProtoOAAccountAuthReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountAuthReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountAuthReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountAuthReq;

    /**
     * Gets the default type url for ProtoOAAccountAuthReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountAuthRes. */
export class ProtoOAAccountAuthRes implements IProtoOAAccountAuthRes {

    /**
     * Constructs a new ProtoOAAccountAuthRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountAuthRes);

    /** ProtoOAAccountAuthRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountAuthRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAccountAuthRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountAuthRes instance
     */
    public static create(properties?: IProtoOAAccountAuthRes): ProtoOAAccountAuthRes;

    /**
     * Encodes the specified ProtoOAAccountAuthRes message. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
     * @param message ProtoOAAccountAuthRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountAuthRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountAuthRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountAuthRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountAuthRes;

    /**
     * Gets the default type url for ProtoOAAccountAuthRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAErrorRes. */
export class ProtoOAErrorRes implements IProtoOAErrorRes {

    /**
     * Constructs a new ProtoOAErrorRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAErrorRes);

    /** ProtoOAErrorRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAErrorRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAErrorRes errorCode. */
    public errorCode: string;

    /** ProtoOAErrorRes description. */
    public description: string;

    /** ProtoOAErrorRes maintenanceEndTimestamp. */
    public maintenanceEndTimestamp: number;

    /**
     * Creates a new ProtoOAErrorRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAErrorRes instance
     */
    public static create(properties?: IProtoOAErrorRes): ProtoOAErrorRes;

    /**
     * Encodes the specified ProtoOAErrorRes message. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
     * @param message ProtoOAErrorRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAErrorRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAErrorRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAErrorRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAErrorRes;

    /**
     * Gets the default type url for ProtoOAErrorRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAClientDisconnectEvent. */
export class ProtoOAClientDisconnectEvent implements IProtoOAClientDisconnectEvent {

    /**
     * Constructs a new ProtoOAClientDisconnectEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAClientDisconnectEvent);

    /** ProtoOAClientDisconnectEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAClientDisconnectEvent reason. */
    public reason: string;

    /**
     * Creates a new ProtoOAClientDisconnectEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAClientDisconnectEvent instance
     */
    public static create(properties?: IProtoOAClientDisconnectEvent): ProtoOAClientDisconnectEvent;

    /**
     * Encodes the specified ProtoOAClientDisconnectEvent message. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
     * @param message ProtoOAClientDisconnectEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAClientDisconnectEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAClientDisconnectEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAClientDisconnectEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAClientDisconnectEvent;

    /**
     * Gets the default type url for ProtoOAClientDisconnectEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountsTokenInvalidatedEvent. */
export class ProtoOAAccountsTokenInvalidatedEvent implements IProtoOAAccountsTokenInvalidatedEvent {

    /**
     * Constructs a new ProtoOAAccountsTokenInvalidatedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountsTokenInvalidatedEvent);

    /** ProtoOAAccountsTokenInvalidatedEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds. */
    public ctidTraderAccountIds: number[];

    /** ProtoOAAccountsTokenInvalidatedEvent reason. */
    public reason: string;

    /**
     * Creates a new ProtoOAAccountsTokenInvalidatedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountsTokenInvalidatedEvent instance
     */
    public static create(properties?: IProtoOAAccountsTokenInvalidatedEvent): ProtoOAAccountsTokenInvalidatedEvent;

    /**
     * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
     * @param message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountsTokenInvalidatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountsTokenInvalidatedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountsTokenInvalidatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountsTokenInvalidatedEvent;

    /**
     * Gets the default type url for ProtoOAAccountsTokenInvalidatedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAVersionReq. */
export class ProtoOAVersionReq implements IProtoOAVersionReq {

    /**
     * Constructs a new ProtoOAVersionReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAVersionReq);

    /** ProtoOAVersionReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /**
     * Creates a new ProtoOAVersionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAVersionReq instance
     */
    public static create(properties?: IProtoOAVersionReq): ProtoOAVersionReq;

    /**
     * Encodes the specified ProtoOAVersionReq message. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
     * @param message ProtoOAVersionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAVersionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAVersionReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAVersionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAVersionReq;

    /**
     * Gets the default type url for ProtoOAVersionReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAVersionRes. */
export class ProtoOAVersionRes implements IProtoOAVersionRes {

    /**
     * Constructs a new ProtoOAVersionRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAVersionRes);

    /** ProtoOAVersionRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAVersionRes version. */
    public version: string;

    /**
     * Creates a new ProtoOAVersionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAVersionRes instance
     */
    public static create(properties?: IProtoOAVersionRes): ProtoOAVersionRes;

    /**
     * Encodes the specified ProtoOAVersionRes message. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
     * @param message ProtoOAVersionRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAVersionRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAVersionRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAVersionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAVersionRes;

    /**
     * Gets the default type url for ProtoOAVersionRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOANewOrderReq. */
export class ProtoOANewOrderReq implements IProtoOANewOrderReq {

    /**
     * Constructs a new ProtoOANewOrderReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOANewOrderReq);

    /** ProtoOANewOrderReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOANewOrderReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOANewOrderReq symbolId. */
    public symbolId: number;

    /** ProtoOANewOrderReq orderType. */
    public orderType: ProtoOAOrderType;

    /** ProtoOANewOrderReq tradeSide. */
    public tradeSide: ProtoOATradeSide;

    /** ProtoOANewOrderReq volume. */
    public volume: number;

    /** ProtoOANewOrderReq limitPrice. */
    public limitPrice: number;

    /** ProtoOANewOrderReq stopPrice. */
    public stopPrice: number;

    /** ProtoOANewOrderReq timeInForce. */
    public timeInForce: ProtoOATimeInForce;

    /** ProtoOANewOrderReq expirationTimestamp. */
    public expirationTimestamp: number;

    /** ProtoOANewOrderReq stopLoss. */
    public stopLoss: number;

    /** ProtoOANewOrderReq takeProfit. */
    public takeProfit: number;

    /** ProtoOANewOrderReq comment. */
    public comment: string;

    /** ProtoOANewOrderReq baseSlippagePrice. */
    public baseSlippagePrice: number;

    /** ProtoOANewOrderReq slippageInPoints. */
    public slippageInPoints: number;

    /** ProtoOANewOrderReq label. */
    public label: string;

    /** ProtoOANewOrderReq positionId. */
    public positionId: number;

    /** ProtoOANewOrderReq clientOrderId. */
    public clientOrderId: string;

    /** ProtoOANewOrderReq relativeStopLoss. */
    public relativeStopLoss: number;

    /** ProtoOANewOrderReq relativeTakeProfit. */
    public relativeTakeProfit: number;

    /** ProtoOANewOrderReq guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOANewOrderReq trailingStopLoss. */
    public trailingStopLoss: boolean;

    /** ProtoOANewOrderReq stopTriggerMethod. */
    public stopTriggerMethod: ProtoOAOrderTriggerMethod;

    /**
     * Creates a new ProtoOANewOrderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOANewOrderReq instance
     */
    public static create(properties?: IProtoOANewOrderReq): ProtoOANewOrderReq;

    /**
     * Encodes the specified ProtoOANewOrderReq message. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
     * @param message ProtoOANewOrderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOANewOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOANewOrderReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOANewOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOANewOrderReq;

    /**
     * Gets the default type url for ProtoOANewOrderReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAExecutionEvent. */
export class ProtoOAExecutionEvent implements IProtoOAExecutionEvent {

    /**
     * Constructs a new ProtoOAExecutionEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAExecutionEvent);

    /** ProtoOAExecutionEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAExecutionEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAExecutionEvent executionType. */
    public executionType: ProtoOAExecutionType;

    /** ProtoOAExecutionEvent position. */
    public position?: (IProtoOAPosition|null);

    /** ProtoOAExecutionEvent order. */
    public order?: (IProtoOAOrder|null);

    /** ProtoOAExecutionEvent deal. */
    public deal?: (IProtoOADeal|null);

    /** ProtoOAExecutionEvent bonusDepositWithdraw. */
    public bonusDepositWithdraw?: (IProtoOABonusDepositWithdraw|null);

    /** ProtoOAExecutionEvent depositWithdraw. */
    public depositWithdraw?: (IProtoOADepositWithdraw|null);

    /** ProtoOAExecutionEvent errorCode. */
    public errorCode: string;

    /** ProtoOAExecutionEvent isServerEvent. */
    public isServerEvent: boolean;

    /**
     * Creates a new ProtoOAExecutionEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAExecutionEvent instance
     */
    public static create(properties?: IProtoOAExecutionEvent): ProtoOAExecutionEvent;

    /**
     * Encodes the specified ProtoOAExecutionEvent message. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
     * @param message ProtoOAExecutionEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAExecutionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAExecutionEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAExecutionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAExecutionEvent;

    /**
     * Gets the default type url for ProtoOAExecutionEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOACancelOrderReq. */
export class ProtoOACancelOrderReq implements IProtoOACancelOrderReq {

    /**
     * Constructs a new ProtoOACancelOrderReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOACancelOrderReq);

    /** ProtoOACancelOrderReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOACancelOrderReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOACancelOrderReq orderId. */
    public orderId: number;

    /**
     * Creates a new ProtoOACancelOrderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOACancelOrderReq instance
     */
    public static create(properties?: IProtoOACancelOrderReq): ProtoOACancelOrderReq;

    /**
     * Encodes the specified ProtoOACancelOrderReq message. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
     * @param message ProtoOACancelOrderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOACancelOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOACancelOrderReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOACancelOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOACancelOrderReq;

    /**
     * Gets the default type url for ProtoOACancelOrderReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAmendOrderReq. */
export class ProtoOAAmendOrderReq implements IProtoOAAmendOrderReq {

    /**
     * Constructs a new ProtoOAAmendOrderReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAmendOrderReq);

    /** ProtoOAAmendOrderReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAmendOrderReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAAmendOrderReq orderId. */
    public orderId: number;

    /** ProtoOAAmendOrderReq volume. */
    public volume: number;

    /** ProtoOAAmendOrderReq limitPrice. */
    public limitPrice: number;

    /** ProtoOAAmendOrderReq stopPrice. */
    public stopPrice: number;

    /** ProtoOAAmendOrderReq expirationTimestamp. */
    public expirationTimestamp: number;

    /** ProtoOAAmendOrderReq stopLoss. */
    public stopLoss: number;

    /** ProtoOAAmendOrderReq takeProfit. */
    public takeProfit: number;

    /** ProtoOAAmendOrderReq slippageInPoints. */
    public slippageInPoints: number;

    /** ProtoOAAmendOrderReq relativeStopLoss. */
    public relativeStopLoss: number;

    /** ProtoOAAmendOrderReq relativeTakeProfit. */
    public relativeTakeProfit: number;

    /** ProtoOAAmendOrderReq guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOAAmendOrderReq trailingStopLoss. */
    public trailingStopLoss: boolean;

    /** ProtoOAAmendOrderReq stopTriggerMethod. */
    public stopTriggerMethod: ProtoOAOrderTriggerMethod;

    /**
     * Creates a new ProtoOAAmendOrderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAmendOrderReq instance
     */
    public static create(properties?: IProtoOAAmendOrderReq): ProtoOAAmendOrderReq;

    /**
     * Encodes the specified ProtoOAAmendOrderReq message. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
     * @param message ProtoOAAmendOrderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAmendOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAmendOrderReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAmendOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAmendOrderReq;

    /**
     * Gets the default type url for ProtoOAAmendOrderReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAmendPositionSLTPReq. */
export class ProtoOAAmendPositionSLTPReq implements IProtoOAAmendPositionSLTPReq {

    /**
     * Constructs a new ProtoOAAmendPositionSLTPReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAmendPositionSLTPReq);

    /** ProtoOAAmendPositionSLTPReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAmendPositionSLTPReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAAmendPositionSLTPReq positionId. */
    public positionId: number;

    /** ProtoOAAmendPositionSLTPReq stopLoss. */
    public stopLoss: number;

    /** ProtoOAAmendPositionSLTPReq takeProfit. */
    public takeProfit: number;

    /** ProtoOAAmendPositionSLTPReq guaranteedStopLoss. */
    public guaranteedStopLoss: boolean;

    /** ProtoOAAmendPositionSLTPReq trailingStopLoss. */
    public trailingStopLoss: boolean;

    /** ProtoOAAmendPositionSLTPReq stopLossTriggerMethod. */
    public stopLossTriggerMethod: ProtoOAOrderTriggerMethod;

    /**
     * Creates a new ProtoOAAmendPositionSLTPReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAmendPositionSLTPReq instance
     */
    public static create(properties?: IProtoOAAmendPositionSLTPReq): ProtoOAAmendPositionSLTPReq;

    /**
     * Encodes the specified ProtoOAAmendPositionSLTPReq message. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
     * @param message ProtoOAAmendPositionSLTPReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAmendPositionSLTPReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAmendPositionSLTPReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAmendPositionSLTPReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAmendPositionSLTPReq;

    /**
     * Gets the default type url for ProtoOAAmendPositionSLTPReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAClosePositionReq. */
export class ProtoOAClosePositionReq implements IProtoOAClosePositionReq {

    /**
     * Constructs a new ProtoOAClosePositionReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAClosePositionReq);

    /** ProtoOAClosePositionReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAClosePositionReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAClosePositionReq positionId. */
    public positionId: number;

    /** ProtoOAClosePositionReq volume. */
    public volume: number;

    /**
     * Creates a new ProtoOAClosePositionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAClosePositionReq instance
     */
    public static create(properties?: IProtoOAClosePositionReq): ProtoOAClosePositionReq;

    /**
     * Encodes the specified ProtoOAClosePositionReq message. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
     * @param message ProtoOAClosePositionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAClosePositionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAClosePositionReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAClosePositionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAClosePositionReq;

    /**
     * Gets the default type url for ProtoOAClosePositionReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATrailingSLChangedEvent. */
export class ProtoOATrailingSLChangedEvent implements IProtoOATrailingSLChangedEvent {

    /**
     * Constructs a new ProtoOATrailingSLChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATrailingSLChangedEvent);

    /** ProtoOATrailingSLChangedEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOATrailingSLChangedEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOATrailingSLChangedEvent positionId. */
    public positionId: number;

    /** ProtoOATrailingSLChangedEvent orderId. */
    public orderId: number;

    /** ProtoOATrailingSLChangedEvent stopPrice. */
    public stopPrice: number;

    /** ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp. */
    public utcLastUpdateTimestamp: number;

    /**
     * Creates a new ProtoOATrailingSLChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATrailingSLChangedEvent instance
     */
    public static create(properties?: IProtoOATrailingSLChangedEvent): ProtoOATrailingSLChangedEvent;

    /**
     * Encodes the specified ProtoOATrailingSLChangedEvent message. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
     * @param message ProtoOATrailingSLChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATrailingSLChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATrailingSLChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATrailingSLChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATrailingSLChangedEvent;

    /**
     * Gets the default type url for ProtoOATrailingSLChangedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAssetListReq. */
export class ProtoOAAssetListReq implements IProtoOAAssetListReq {

    /**
     * Constructs a new ProtoOAAssetListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAssetListReq);

    /** ProtoOAAssetListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAssetListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAssetListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAssetListReq instance
     */
    public static create(properties?: IProtoOAAssetListReq): ProtoOAAssetListReq;

    /**
     * Encodes the specified ProtoOAAssetListReq message. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
     * @param message ProtoOAAssetListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAssetListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAssetListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAssetListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAssetListReq;

    /**
     * Gets the default type url for ProtoOAAssetListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAssetListRes. */
export class ProtoOAAssetListRes implements IProtoOAAssetListRes {

    /**
     * Constructs a new ProtoOAAssetListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAssetListRes);

    /** ProtoOAAssetListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAssetListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAAssetListRes asset. */
    public asset: IProtoOAAsset[];

    /**
     * Creates a new ProtoOAAssetListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAssetListRes instance
     */
    public static create(properties?: IProtoOAAssetListRes): ProtoOAAssetListRes;

    /**
     * Encodes the specified ProtoOAAssetListRes message. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
     * @param message ProtoOAAssetListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAssetListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAssetListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAssetListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAssetListRes;

    /**
     * Gets the default type url for ProtoOAAssetListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolsListReq. */
export class ProtoOASymbolsListReq implements IProtoOASymbolsListReq {

    /**
     * Constructs a new ProtoOASymbolsListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolsListReq);

    /** ProtoOASymbolsListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolsListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolsListReq includeArchivedSymbols. */
    public includeArchivedSymbols: boolean;

    /**
     * Creates a new ProtoOASymbolsListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolsListReq instance
     */
    public static create(properties?: IProtoOASymbolsListReq): ProtoOASymbolsListReq;

    /**
     * Encodes the specified ProtoOASymbolsListReq message. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
     * @param message ProtoOASymbolsListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolsListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolsListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolsListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolsListReq;

    /**
     * Gets the default type url for ProtoOASymbolsListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolsListRes. */
export class ProtoOASymbolsListRes implements IProtoOASymbolsListRes {

    /**
     * Constructs a new ProtoOASymbolsListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolsListRes);

    /** ProtoOASymbolsListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolsListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolsListRes symbol. */
    public symbol: IProtoOALightSymbol[];

    /** ProtoOASymbolsListRes archivedSymbol. */
    public archivedSymbol: IProtoOAArchivedSymbol[];

    /**
     * Creates a new ProtoOASymbolsListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolsListRes instance
     */
    public static create(properties?: IProtoOASymbolsListRes): ProtoOASymbolsListRes;

    /**
     * Encodes the specified ProtoOASymbolsListRes message. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
     * @param message ProtoOASymbolsListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolsListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolsListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolsListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolsListRes;

    /**
     * Gets the default type url for ProtoOASymbolsListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolByIdReq. */
export class ProtoOASymbolByIdReq implements IProtoOASymbolByIdReq {

    /**
     * Constructs a new ProtoOASymbolByIdReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolByIdReq);

    /** ProtoOASymbolByIdReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolByIdReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolByIdReq symbolId. */
    public symbolId: number[];

    /**
     * Creates a new ProtoOASymbolByIdReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolByIdReq instance
     */
    public static create(properties?: IProtoOASymbolByIdReq): ProtoOASymbolByIdReq;

    /**
     * Encodes the specified ProtoOASymbolByIdReq message. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
     * @param message ProtoOASymbolByIdReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolByIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolByIdReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolByIdReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolByIdReq;

    /**
     * Gets the default type url for ProtoOASymbolByIdReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolByIdRes. */
export class ProtoOASymbolByIdRes implements IProtoOASymbolByIdRes {

    /**
     * Constructs a new ProtoOASymbolByIdRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolByIdRes);

    /** ProtoOASymbolByIdRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolByIdRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolByIdRes symbol. */
    public symbol: IProtoOASymbol[];

    /** ProtoOASymbolByIdRes archivedSymbol. */
    public archivedSymbol: IProtoOAArchivedSymbol[];

    /**
     * Creates a new ProtoOASymbolByIdRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolByIdRes instance
     */
    public static create(properties?: IProtoOASymbolByIdRes): ProtoOASymbolByIdRes;

    /**
     * Encodes the specified ProtoOASymbolByIdRes message. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
     * @param message ProtoOASymbolByIdRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolByIdRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolByIdRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolByIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolByIdRes;

    /**
     * Gets the default type url for ProtoOASymbolByIdRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolsForConversionReq. */
export class ProtoOASymbolsForConversionReq implements IProtoOASymbolsForConversionReq {

    /**
     * Constructs a new ProtoOASymbolsForConversionReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolsForConversionReq);

    /** ProtoOASymbolsForConversionReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolsForConversionReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolsForConversionReq firstAssetId. */
    public firstAssetId: number;

    /** ProtoOASymbolsForConversionReq lastAssetId. */
    public lastAssetId: number;

    /**
     * Creates a new ProtoOASymbolsForConversionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolsForConversionReq instance
     */
    public static create(properties?: IProtoOASymbolsForConversionReq): ProtoOASymbolsForConversionReq;

    /**
     * Encodes the specified ProtoOASymbolsForConversionReq message. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
     * @param message ProtoOASymbolsForConversionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolsForConversionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolsForConversionReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolsForConversionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolsForConversionReq;

    /**
     * Gets the default type url for ProtoOASymbolsForConversionReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolsForConversionRes. */
export class ProtoOASymbolsForConversionRes implements IProtoOASymbolsForConversionRes {

    /**
     * Constructs a new ProtoOASymbolsForConversionRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolsForConversionRes);

    /** ProtoOASymbolsForConversionRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolsForConversionRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolsForConversionRes symbol. */
    public symbol: IProtoOALightSymbol[];

    /**
     * Creates a new ProtoOASymbolsForConversionRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolsForConversionRes instance
     */
    public static create(properties?: IProtoOASymbolsForConversionRes): ProtoOASymbolsForConversionRes;

    /**
     * Encodes the specified ProtoOASymbolsForConversionRes message. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
     * @param message ProtoOASymbolsForConversionRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolsForConversionRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolsForConversionRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolsForConversionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolsForConversionRes;

    /**
     * Gets the default type url for ProtoOASymbolsForConversionRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolChangedEvent. */
export class ProtoOASymbolChangedEvent implements IProtoOASymbolChangedEvent {

    /**
     * Constructs a new ProtoOASymbolChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolChangedEvent);

    /** ProtoOASymbolChangedEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolChangedEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolChangedEvent symbolId. */
    public symbolId: number[];

    /**
     * Creates a new ProtoOASymbolChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolChangedEvent instance
     */
    public static create(properties?: IProtoOASymbolChangedEvent): ProtoOASymbolChangedEvent;

    /**
     * Encodes the specified ProtoOASymbolChangedEvent message. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
     * @param message ProtoOASymbolChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolChangedEvent;

    /**
     * Gets the default type url for ProtoOASymbolChangedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAssetClassListReq. */
export class ProtoOAAssetClassListReq implements IProtoOAAssetClassListReq {

    /**
     * Constructs a new ProtoOAAssetClassListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAssetClassListReq);

    /** ProtoOAAssetClassListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAssetClassListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAssetClassListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAssetClassListReq instance
     */
    public static create(properties?: IProtoOAAssetClassListReq): ProtoOAAssetClassListReq;

    /**
     * Encodes the specified ProtoOAAssetClassListReq message. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
     * @param message ProtoOAAssetClassListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAssetClassListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAssetClassListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAssetClassListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAssetClassListReq;

    /**
     * Gets the default type url for ProtoOAAssetClassListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAssetClassListRes. */
export class ProtoOAAssetClassListRes implements IProtoOAAssetClassListRes {

    /**
     * Constructs a new ProtoOAAssetClassListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAssetClassListRes);

    /** ProtoOAAssetClassListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAssetClassListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAAssetClassListRes assetClass. */
    public assetClass: IProtoOAAssetClass[];

    /**
     * Creates a new ProtoOAAssetClassListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAssetClassListRes instance
     */
    public static create(properties?: IProtoOAAssetClassListRes): ProtoOAAssetClassListRes;

    /**
     * Encodes the specified ProtoOAAssetClassListRes message. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
     * @param message ProtoOAAssetClassListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAssetClassListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAssetClassListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAssetClassListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAssetClassListRes;

    /**
     * Gets the default type url for ProtoOAAssetClassListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATraderReq. */
export class ProtoOATraderReq implements IProtoOATraderReq {

    /**
     * Constructs a new ProtoOATraderReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATraderReq);

    /** ProtoOATraderReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOATraderReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOATraderReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATraderReq instance
     */
    public static create(properties?: IProtoOATraderReq): ProtoOATraderReq;

    /**
     * Encodes the specified ProtoOATraderReq message. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
     * @param message ProtoOATraderReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATraderReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATraderReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATraderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATraderReq;

    /**
     * Gets the default type url for ProtoOATraderReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATraderRes. */
export class ProtoOATraderRes implements IProtoOATraderRes {

    /**
     * Constructs a new ProtoOATraderRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATraderRes);

    /** ProtoOATraderRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOATraderRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOATraderRes trader. */
    public trader: IProtoOATrader;

    /**
     * Creates a new ProtoOATraderRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATraderRes instance
     */
    public static create(properties?: IProtoOATraderRes): ProtoOATraderRes;

    /**
     * Encodes the specified ProtoOATraderRes message. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
     * @param message ProtoOATraderRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATraderRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATraderRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATraderRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATraderRes;

    /**
     * Gets the default type url for ProtoOATraderRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOATraderUpdatedEvent. */
export class ProtoOATraderUpdatedEvent implements IProtoOATraderUpdatedEvent {

    /**
     * Constructs a new ProtoOATraderUpdatedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOATraderUpdatedEvent);

    /** ProtoOATraderUpdatedEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOATraderUpdatedEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOATraderUpdatedEvent trader. */
    public trader: IProtoOATrader;

    /**
     * Creates a new ProtoOATraderUpdatedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOATraderUpdatedEvent instance
     */
    public static create(properties?: IProtoOATraderUpdatedEvent): ProtoOATraderUpdatedEvent;

    /**
     * Encodes the specified ProtoOATraderUpdatedEvent message. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
     * @param message ProtoOATraderUpdatedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOATraderUpdatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOATraderUpdatedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOATraderUpdatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOATraderUpdatedEvent;

    /**
     * Gets the default type url for ProtoOATraderUpdatedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAReconcileReq. */
export class ProtoOAReconcileReq implements IProtoOAReconcileReq {

    /**
     * Constructs a new ProtoOAReconcileReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAReconcileReq);

    /** ProtoOAReconcileReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAReconcileReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAReconcileReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAReconcileReq instance
     */
    public static create(properties?: IProtoOAReconcileReq): ProtoOAReconcileReq;

    /**
     * Encodes the specified ProtoOAReconcileReq message. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
     * @param message ProtoOAReconcileReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAReconcileReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAReconcileReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAReconcileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAReconcileReq;

    /**
     * Gets the default type url for ProtoOAReconcileReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAReconcileRes. */
export class ProtoOAReconcileRes implements IProtoOAReconcileRes {

    /**
     * Constructs a new ProtoOAReconcileRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAReconcileRes);

    /** ProtoOAReconcileRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAReconcileRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAReconcileRes position. */
    public position: IProtoOAPosition[];

    /** ProtoOAReconcileRes order. */
    public order: IProtoOAOrder[];

    /**
     * Creates a new ProtoOAReconcileRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAReconcileRes instance
     */
    public static create(properties?: IProtoOAReconcileRes): ProtoOAReconcileRes;

    /**
     * Encodes the specified ProtoOAReconcileRes message. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
     * @param message ProtoOAReconcileRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAReconcileRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAReconcileRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAReconcileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAReconcileRes;

    /**
     * Gets the default type url for ProtoOAReconcileRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderErrorEvent. */
export class ProtoOAOrderErrorEvent implements IProtoOAOrderErrorEvent {

    /**
     * Constructs a new ProtoOAOrderErrorEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderErrorEvent);

    /** ProtoOAOrderErrorEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderErrorEvent errorCode. */
    public errorCode: string;

    /** ProtoOAOrderErrorEvent orderId. */
    public orderId: number;

    /** ProtoOAOrderErrorEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderErrorEvent positionId. */
    public positionId: number;

    /** ProtoOAOrderErrorEvent description. */
    public description: string;

    /**
     * Creates a new ProtoOAOrderErrorEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderErrorEvent instance
     */
    public static create(properties?: IProtoOAOrderErrorEvent): ProtoOAOrderErrorEvent;

    /**
     * Encodes the specified ProtoOAOrderErrorEvent message. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
     * @param message ProtoOAOrderErrorEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderErrorEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderErrorEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderErrorEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderErrorEvent;

    /**
     * Gets the default type url for ProtoOAOrderErrorEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealListReq. */
export class ProtoOADealListReq implements IProtoOADealListReq {

    /**
     * Constructs a new ProtoOADealListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealListReq);

    /** ProtoOADealListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealListReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOADealListReq toTimestamp. */
    public toTimestamp: number;

    /** ProtoOADealListReq maxRows. */
    public maxRows: number;

    /**
     * Creates a new ProtoOADealListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealListReq instance
     */
    public static create(properties?: IProtoOADealListReq): ProtoOADealListReq;

    /**
     * Encodes the specified ProtoOADealListReq message. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
     * @param message ProtoOADealListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealListReq;

    /**
     * Gets the default type url for ProtoOADealListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealListRes. */
export class ProtoOADealListRes implements IProtoOADealListRes {

    /**
     * Constructs a new ProtoOADealListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealListRes);

    /** ProtoOADealListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealListRes deal. */
    public deal: IProtoOADeal[];

    /** ProtoOADealListRes hasMore. */
    public hasMore: boolean;

    /**
     * Creates a new ProtoOADealListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealListRes instance
     */
    public static create(properties?: IProtoOADealListRes): ProtoOADealListRes;

    /**
     * Encodes the specified ProtoOADealListRes message. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
     * @param message ProtoOADealListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealListRes;

    /**
     * Gets the default type url for ProtoOADealListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderListReq. */
export class ProtoOAOrderListReq implements IProtoOAOrderListReq {

    /**
     * Constructs a new ProtoOAOrderListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderListReq);

    /** ProtoOAOrderListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderListReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOAOrderListReq toTimestamp. */
    public toTimestamp: number;

    /**
     * Creates a new ProtoOAOrderListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderListReq instance
     */
    public static create(properties?: IProtoOAOrderListReq): ProtoOAOrderListReq;

    /**
     * Encodes the specified ProtoOAOrderListReq message. Does not implicitly {@link ProtoOAOrderListReq.verify|verify} messages.
     * @param message ProtoOAOrderListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderListReq;

    /**
     * Gets the default type url for ProtoOAOrderListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderListRes. */
export class ProtoOAOrderListRes implements IProtoOAOrderListRes {

    /**
     * Constructs a new ProtoOAOrderListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderListRes);

    /** ProtoOAOrderListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderListRes order. */
    public order: IProtoOAOrder[];

    /** ProtoOAOrderListRes hasMore. */
    public hasMore: boolean;

    /**
     * Creates a new ProtoOAOrderListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderListRes instance
     */
    public static create(properties?: IProtoOAOrderListRes): ProtoOAOrderListRes;

    /**
     * Encodes the specified ProtoOAOrderListRes message. Does not implicitly {@link ProtoOAOrderListRes.verify|verify} messages.
     * @param message ProtoOAOrderListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderListRes;

    /**
     * Gets the default type url for ProtoOAOrderListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAExpectedMarginReq. */
export class ProtoOAExpectedMarginReq implements IProtoOAExpectedMarginReq {

    /**
     * Constructs a new ProtoOAExpectedMarginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAExpectedMarginReq);

    /** ProtoOAExpectedMarginReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAExpectedMarginReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAExpectedMarginReq symbolId. */
    public symbolId: number;

    /** ProtoOAExpectedMarginReq volume. */
    public volume: number[];

    /**
     * Creates a new ProtoOAExpectedMarginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAExpectedMarginReq instance
     */
    public static create(properties?: IProtoOAExpectedMarginReq): ProtoOAExpectedMarginReq;

    /**
     * Encodes the specified ProtoOAExpectedMarginReq message. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
     * @param message ProtoOAExpectedMarginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAExpectedMarginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAExpectedMarginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAExpectedMarginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAExpectedMarginReq;

    /**
     * Gets the default type url for ProtoOAExpectedMarginReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAExpectedMarginRes. */
export class ProtoOAExpectedMarginRes implements IProtoOAExpectedMarginRes {

    /**
     * Constructs a new ProtoOAExpectedMarginRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAExpectedMarginRes);

    /** ProtoOAExpectedMarginRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAExpectedMarginRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAExpectedMarginRes margin. */
    public margin: IProtoOAExpectedMargin[];

    /** ProtoOAExpectedMarginRes moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOAExpectedMarginRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAExpectedMarginRes instance
     */
    public static create(properties?: IProtoOAExpectedMarginRes): ProtoOAExpectedMarginRes;

    /**
     * Encodes the specified ProtoOAExpectedMarginRes message. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
     * @param message ProtoOAExpectedMarginRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAExpectedMarginRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAExpectedMarginRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAExpectedMarginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAExpectedMarginRes;

    /**
     * Gets the default type url for ProtoOAExpectedMarginRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginChangedEvent. */
export class ProtoOAMarginChangedEvent implements IProtoOAMarginChangedEvent {

    /**
     * Constructs a new ProtoOAMarginChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginChangedEvent);

    /** ProtoOAMarginChangedEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginChangedEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAMarginChangedEvent positionId. */
    public positionId: number;

    /** ProtoOAMarginChangedEvent usedMargin. */
    public usedMargin: number;

    /** ProtoOAMarginChangedEvent moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOAMarginChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginChangedEvent instance
     */
    public static create(properties?: IProtoOAMarginChangedEvent): ProtoOAMarginChangedEvent;

    /**
     * Encodes the specified ProtoOAMarginChangedEvent message. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
     * @param message ProtoOAMarginChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginChangedEvent;

    /**
     * Gets the default type url for ProtoOAMarginChangedEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOACashFlowHistoryListReq. */
export class ProtoOACashFlowHistoryListReq implements IProtoOACashFlowHistoryListReq {

    /**
     * Constructs a new ProtoOACashFlowHistoryListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOACashFlowHistoryListReq);

    /** ProtoOACashFlowHistoryListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOACashFlowHistoryListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOACashFlowHistoryListReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOACashFlowHistoryListReq toTimestamp. */
    public toTimestamp: number;

    /**
     * Creates a new ProtoOACashFlowHistoryListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOACashFlowHistoryListReq instance
     */
    public static create(properties?: IProtoOACashFlowHistoryListReq): ProtoOACashFlowHistoryListReq;

    /**
     * Encodes the specified ProtoOACashFlowHistoryListReq message. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
     * @param message ProtoOACashFlowHistoryListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOACashFlowHistoryListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOACashFlowHistoryListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOACashFlowHistoryListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOACashFlowHistoryListReq;

    /**
     * Gets the default type url for ProtoOACashFlowHistoryListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOACashFlowHistoryListRes. */
export class ProtoOACashFlowHistoryListRes implements IProtoOACashFlowHistoryListRes {

    /**
     * Constructs a new ProtoOACashFlowHistoryListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOACashFlowHistoryListRes);

    /** ProtoOACashFlowHistoryListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOACashFlowHistoryListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOACashFlowHistoryListRes depositWithdraw. */
    public depositWithdraw: IProtoOADepositWithdraw[];

    /**
     * Creates a new ProtoOACashFlowHistoryListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOACashFlowHistoryListRes instance
     */
    public static create(properties?: IProtoOACashFlowHistoryListRes): ProtoOACashFlowHistoryListRes;

    /**
     * Encodes the specified ProtoOACashFlowHistoryListRes message. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
     * @param message ProtoOACashFlowHistoryListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOACashFlowHistoryListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOACashFlowHistoryListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOACashFlowHistoryListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOACashFlowHistoryListRes;

    /**
     * Gets the default type url for ProtoOACashFlowHistoryListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetAccountListByAccessTokenReq. */
export class ProtoOAGetAccountListByAccessTokenReq implements IProtoOAGetAccountListByAccessTokenReq {

    /**
     * Constructs a new ProtoOAGetAccountListByAccessTokenReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetAccountListByAccessTokenReq);

    /** ProtoOAGetAccountListByAccessTokenReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetAccountListByAccessTokenReq accessToken. */
    public accessToken: string;

    /**
     * Creates a new ProtoOAGetAccountListByAccessTokenReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetAccountListByAccessTokenReq instance
     */
    public static create(properties?: IProtoOAGetAccountListByAccessTokenReq): ProtoOAGetAccountListByAccessTokenReq;

    /**
     * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
     * @param message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetAccountListByAccessTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetAccountListByAccessTokenReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetAccountListByAccessTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetAccountListByAccessTokenReq;

    /**
     * Gets the default type url for ProtoOAGetAccountListByAccessTokenReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetAccountListByAccessTokenRes. */
export class ProtoOAGetAccountListByAccessTokenRes implements IProtoOAGetAccountListByAccessTokenRes {

    /**
     * Constructs a new ProtoOAGetAccountListByAccessTokenRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetAccountListByAccessTokenRes);

    /** ProtoOAGetAccountListByAccessTokenRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetAccountListByAccessTokenRes accessToken. */
    public accessToken: string;

    /** ProtoOAGetAccountListByAccessTokenRes permissionScope. */
    public permissionScope: ProtoOAClientPermissionScope;

    /** ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount. */
    public ctidTraderAccount: IProtoOACtidTraderAccount[];

    /**
     * Creates a new ProtoOAGetAccountListByAccessTokenRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetAccountListByAccessTokenRes instance
     */
    public static create(properties?: IProtoOAGetAccountListByAccessTokenRes): ProtoOAGetAccountListByAccessTokenRes;

    /**
     * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
     * @param message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetAccountListByAccessTokenRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetAccountListByAccessTokenRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetAccountListByAccessTokenRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetAccountListByAccessTokenRes;

    /**
     * Gets the default type url for ProtoOAGetAccountListByAccessTokenRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOARefreshTokenReq. */
export class ProtoOARefreshTokenReq implements IProtoOARefreshTokenReq {

    /**
     * Constructs a new ProtoOARefreshTokenReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOARefreshTokenReq);

    /** ProtoOARefreshTokenReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOARefreshTokenReq refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new ProtoOARefreshTokenReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOARefreshTokenReq instance
     */
    public static create(properties?: IProtoOARefreshTokenReq): ProtoOARefreshTokenReq;

    /**
     * Encodes the specified ProtoOARefreshTokenReq message. Does not implicitly {@link ProtoOARefreshTokenReq.verify|verify} messages.
     * @param message ProtoOARefreshTokenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOARefreshTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOARefreshTokenReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOARefreshTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOARefreshTokenReq;

    /**
     * Gets the default type url for ProtoOARefreshTokenReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOARefreshTokenRes. */
export class ProtoOARefreshTokenRes implements IProtoOARefreshTokenRes {

    /**
     * Constructs a new ProtoOARefreshTokenRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOARefreshTokenRes);

    /** ProtoOARefreshTokenRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOARefreshTokenRes accessToken. */
    public accessToken: string;

    /** ProtoOARefreshTokenRes tokenType. */
    public tokenType: string;

    /** ProtoOARefreshTokenRes expiresIn. */
    public expiresIn: number;

    /** ProtoOARefreshTokenRes refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new ProtoOARefreshTokenRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOARefreshTokenRes instance
     */
    public static create(properties?: IProtoOARefreshTokenRes): ProtoOARefreshTokenRes;

    /**
     * Encodes the specified ProtoOARefreshTokenRes message. Does not implicitly {@link ProtoOARefreshTokenRes.verify|verify} messages.
     * @param message ProtoOARefreshTokenRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOARefreshTokenRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOARefreshTokenRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOARefreshTokenRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOARefreshTokenRes;

    /**
     * Gets the default type url for ProtoOARefreshTokenRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeSpotsReq. */
export class ProtoOASubscribeSpotsReq implements IProtoOASubscribeSpotsReq {

    /**
     * Constructs a new ProtoOASubscribeSpotsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeSpotsReq);

    /** ProtoOASubscribeSpotsReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeSpotsReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASubscribeSpotsReq symbolId. */
    public symbolId: number[];

    /** ProtoOASubscribeSpotsReq subscribeToSpotTimestamp. */
    public subscribeToSpotTimestamp: boolean;

    /**
     * Creates a new ProtoOASubscribeSpotsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeSpotsReq instance
     */
    public static create(properties?: IProtoOASubscribeSpotsReq): ProtoOASubscribeSpotsReq;

    /**
     * Encodes the specified ProtoOASubscribeSpotsReq message. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
     * @param message ProtoOASubscribeSpotsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeSpotsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeSpotsReq;

    /**
     * Gets the default type url for ProtoOASubscribeSpotsReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeSpotsRes. */
export class ProtoOASubscribeSpotsRes implements IProtoOASubscribeSpotsRes {

    /**
     * Constructs a new ProtoOASubscribeSpotsRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeSpotsRes);

    /** ProtoOASubscribeSpotsRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeSpotsRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOASubscribeSpotsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeSpotsRes instance
     */
    public static create(properties?: IProtoOASubscribeSpotsRes): ProtoOASubscribeSpotsRes;

    /**
     * Encodes the specified ProtoOASubscribeSpotsRes message. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
     * @param message ProtoOASubscribeSpotsRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeSpotsRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeSpotsRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeSpotsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeSpotsRes;

    /**
     * Gets the default type url for ProtoOASubscribeSpotsRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeSpotsReq. */
export class ProtoOAUnsubscribeSpotsReq implements IProtoOAUnsubscribeSpotsReq {

    /**
     * Constructs a new ProtoOAUnsubscribeSpotsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeSpotsReq);

    /** ProtoOAUnsubscribeSpotsReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeSpotsReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAUnsubscribeSpotsReq symbolId. */
    public symbolId: number[];

    /**
     * Creates a new ProtoOAUnsubscribeSpotsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeSpotsReq instance
     */
    public static create(properties?: IProtoOAUnsubscribeSpotsReq): ProtoOAUnsubscribeSpotsReq;

    /**
     * Encodes the specified ProtoOAUnsubscribeSpotsReq message. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
     * @param message ProtoOAUnsubscribeSpotsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeSpotsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeSpotsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeSpotsReq;

    /**
     * Gets the default type url for ProtoOAUnsubscribeSpotsReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeSpotsRes. */
export class ProtoOAUnsubscribeSpotsRes implements IProtoOAUnsubscribeSpotsRes {

    /**
     * Constructs a new ProtoOAUnsubscribeSpotsRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeSpotsRes);

    /** ProtoOAUnsubscribeSpotsRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeSpotsRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAUnsubscribeSpotsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeSpotsRes instance
     */
    public static create(properties?: IProtoOAUnsubscribeSpotsRes): ProtoOAUnsubscribeSpotsRes;

    /**
     * Encodes the specified ProtoOAUnsubscribeSpotsRes message. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
     * @param message ProtoOAUnsubscribeSpotsRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeSpotsRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeSpotsRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeSpotsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeSpotsRes;

    /**
     * Gets the default type url for ProtoOAUnsubscribeSpotsRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASpotEvent. */
export class ProtoOASpotEvent implements IProtoOASpotEvent {

    /**
     * Constructs a new ProtoOASpotEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASpotEvent);

    /** ProtoOASpotEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASpotEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASpotEvent symbolId. */
    public symbolId: number;

    /** ProtoOASpotEvent bid. */
    public bid: number;

    /** ProtoOASpotEvent ask. */
    public ask: number;

    /** ProtoOASpotEvent trendbar. */
    public trendbar: IProtoOATrendbar[];

    /** ProtoOASpotEvent sessionClose. */
    public sessionClose: number;

    /** ProtoOASpotEvent timestamp. */
    public timestamp: number;

    /**
     * Creates a new ProtoOASpotEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASpotEvent instance
     */
    public static create(properties?: IProtoOASpotEvent): ProtoOASpotEvent;

    /**
     * Encodes the specified ProtoOASpotEvent message. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
     * @param message ProtoOASpotEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASpotEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASpotEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASpotEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASpotEvent;

    /**
     * Gets the default type url for ProtoOASpotEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeLiveTrendbarReq. */
export class ProtoOASubscribeLiveTrendbarReq implements IProtoOASubscribeLiveTrendbarReq {

    /**
     * Constructs a new ProtoOASubscribeLiveTrendbarReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeLiveTrendbarReq);

    /** ProtoOASubscribeLiveTrendbarReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASubscribeLiveTrendbarReq period. */
    public period: ProtoOATrendbarPeriod;

    /** ProtoOASubscribeLiveTrendbarReq symbolId. */
    public symbolId: number;

    /**
     * Creates a new ProtoOASubscribeLiveTrendbarReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeLiveTrendbarReq instance
     */
    public static create(properties?: IProtoOASubscribeLiveTrendbarReq): ProtoOASubscribeLiveTrendbarReq;

    /**
     * Encodes the specified ProtoOASubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
     * @param message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeLiveTrendbarReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeLiveTrendbarReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeLiveTrendbarReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeLiveTrendbarReq;

    /**
     * Gets the default type url for ProtoOASubscribeLiveTrendbarReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeLiveTrendbarRes. */
export class ProtoOASubscribeLiveTrendbarRes implements IProtoOASubscribeLiveTrendbarRes {

    /**
     * Constructs a new ProtoOASubscribeLiveTrendbarRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeLiveTrendbarRes);

    /** ProtoOASubscribeLiveTrendbarRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeLiveTrendbarRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOASubscribeLiveTrendbarRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeLiveTrendbarRes instance
     */
    public static create(properties?: IProtoOASubscribeLiveTrendbarRes): ProtoOASubscribeLiveTrendbarRes;

    /**
     * Encodes the specified ProtoOASubscribeLiveTrendbarRes message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarRes.verify|verify} messages.
     * @param message ProtoOASubscribeLiveTrendbarRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeLiveTrendbarRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeLiveTrendbarRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeLiveTrendbarRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeLiveTrendbarRes;

    /**
     * Gets the default type url for ProtoOASubscribeLiveTrendbarRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeLiveTrendbarReq. */
export class ProtoOAUnsubscribeLiveTrendbarReq implements IProtoOAUnsubscribeLiveTrendbarReq {

    /**
     * Constructs a new ProtoOAUnsubscribeLiveTrendbarReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeLiveTrendbarReq);

    /** ProtoOAUnsubscribeLiveTrendbarReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAUnsubscribeLiveTrendbarReq period. */
    public period: ProtoOATrendbarPeriod;

    /** ProtoOAUnsubscribeLiveTrendbarReq symbolId. */
    public symbolId: number;

    /**
     * Creates a new ProtoOAUnsubscribeLiveTrendbarReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeLiveTrendbarReq instance
     */
    public static create(properties?: IProtoOAUnsubscribeLiveTrendbarReq): ProtoOAUnsubscribeLiveTrendbarReq;

    /**
     * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
     * @param message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeLiveTrendbarReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeLiveTrendbarReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeLiveTrendbarReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeLiveTrendbarReq;

    /**
     * Gets the default type url for ProtoOAUnsubscribeLiveTrendbarReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeLiveTrendbarRes. */
export class ProtoOAUnsubscribeLiveTrendbarRes implements IProtoOAUnsubscribeLiveTrendbarRes {

    /**
     * Constructs a new ProtoOAUnsubscribeLiveTrendbarRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeLiveTrendbarRes);

    /** ProtoOAUnsubscribeLiveTrendbarRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeLiveTrendbarRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAUnsubscribeLiveTrendbarRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeLiveTrendbarRes instance
     */
    public static create(properties?: IProtoOAUnsubscribeLiveTrendbarRes): ProtoOAUnsubscribeLiveTrendbarRes;

    /**
     * Encodes the specified ProtoOAUnsubscribeLiveTrendbarRes message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarRes.verify|verify} messages.
     * @param message ProtoOAUnsubscribeLiveTrendbarRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeLiveTrendbarRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeLiveTrendbarRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeLiveTrendbarRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeLiveTrendbarRes;

    /**
     * Gets the default type url for ProtoOAUnsubscribeLiveTrendbarRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetTrendbarsReq. */
export class ProtoOAGetTrendbarsReq implements IProtoOAGetTrendbarsReq {

    /**
     * Constructs a new ProtoOAGetTrendbarsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetTrendbarsReq);

    /** ProtoOAGetTrendbarsReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetTrendbarsReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetTrendbarsReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOAGetTrendbarsReq toTimestamp. */
    public toTimestamp: number;

    /** ProtoOAGetTrendbarsReq period. */
    public period: ProtoOATrendbarPeriod;

    /** ProtoOAGetTrendbarsReq symbolId. */
    public symbolId: number;

    /** ProtoOAGetTrendbarsReq count. */
    public count: number;

    /**
     * Creates a new ProtoOAGetTrendbarsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetTrendbarsReq instance
     */
    public static create(properties?: IProtoOAGetTrendbarsReq): ProtoOAGetTrendbarsReq;

    /**
     * Encodes the specified ProtoOAGetTrendbarsReq message. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
     * @param message ProtoOAGetTrendbarsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetTrendbarsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetTrendbarsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetTrendbarsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetTrendbarsReq;

    /**
     * Gets the default type url for ProtoOAGetTrendbarsReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetTrendbarsRes. */
export class ProtoOAGetTrendbarsRes implements IProtoOAGetTrendbarsRes {

    /**
     * Constructs a new ProtoOAGetTrendbarsRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetTrendbarsRes);

    /** ProtoOAGetTrendbarsRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetTrendbarsRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetTrendbarsRes period. */
    public period: ProtoOATrendbarPeriod;

    /** ProtoOAGetTrendbarsRes timestamp. */
    public timestamp: number;

    /** ProtoOAGetTrendbarsRes trendbar. */
    public trendbar: IProtoOATrendbar[];

    /** ProtoOAGetTrendbarsRes symbolId. */
    public symbolId: number;

    /**
     * Creates a new ProtoOAGetTrendbarsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetTrendbarsRes instance
     */
    public static create(properties?: IProtoOAGetTrendbarsRes): ProtoOAGetTrendbarsRes;

    /**
     * Encodes the specified ProtoOAGetTrendbarsRes message. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
     * @param message ProtoOAGetTrendbarsRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetTrendbarsRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetTrendbarsRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetTrendbarsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetTrendbarsRes;

    /**
     * Gets the default type url for ProtoOAGetTrendbarsRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetTickDataReq. */
export class ProtoOAGetTickDataReq implements IProtoOAGetTickDataReq {

    /**
     * Constructs a new ProtoOAGetTickDataReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetTickDataReq);

    /** ProtoOAGetTickDataReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetTickDataReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetTickDataReq symbolId. */
    public symbolId: number;

    /** ProtoOAGetTickDataReq type. */
    public type: ProtoOAQuoteType;

    /** ProtoOAGetTickDataReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOAGetTickDataReq toTimestamp. */
    public toTimestamp: number;

    /**
     * Creates a new ProtoOAGetTickDataReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetTickDataReq instance
     */
    public static create(properties?: IProtoOAGetTickDataReq): ProtoOAGetTickDataReq;

    /**
     * Encodes the specified ProtoOAGetTickDataReq message. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
     * @param message ProtoOAGetTickDataReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetTickDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetTickDataReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetTickDataReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetTickDataReq;

    /**
     * Gets the default type url for ProtoOAGetTickDataReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetTickDataRes. */
export class ProtoOAGetTickDataRes implements IProtoOAGetTickDataRes {

    /**
     * Constructs a new ProtoOAGetTickDataRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetTickDataRes);

    /** ProtoOAGetTickDataRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetTickDataRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetTickDataRes tickData. */
    public tickData: IProtoOATickData[];

    /** ProtoOAGetTickDataRes hasMore. */
    public hasMore: boolean;

    /**
     * Creates a new ProtoOAGetTickDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetTickDataRes instance
     */
    public static create(properties?: IProtoOAGetTickDataRes): ProtoOAGetTickDataRes;

    /**
     * Encodes the specified ProtoOAGetTickDataRes message. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
     * @param message ProtoOAGetTickDataRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetTickDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetTickDataRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetTickDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetTickDataRes;

    /**
     * Gets the default type url for ProtoOAGetTickDataRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetCtidProfileByTokenReq. */
export class ProtoOAGetCtidProfileByTokenReq implements IProtoOAGetCtidProfileByTokenReq {

    /**
     * Constructs a new ProtoOAGetCtidProfileByTokenReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetCtidProfileByTokenReq);

    /** ProtoOAGetCtidProfileByTokenReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetCtidProfileByTokenReq accessToken. */
    public accessToken: string;

    /**
     * Creates a new ProtoOAGetCtidProfileByTokenReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetCtidProfileByTokenReq instance
     */
    public static create(properties?: IProtoOAGetCtidProfileByTokenReq): ProtoOAGetCtidProfileByTokenReq;

    /**
     * Encodes the specified ProtoOAGetCtidProfileByTokenReq message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
     * @param message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetCtidProfileByTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetCtidProfileByTokenReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetCtidProfileByTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetCtidProfileByTokenReq;

    /**
     * Gets the default type url for ProtoOAGetCtidProfileByTokenReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetCtidProfileByTokenRes. */
export class ProtoOAGetCtidProfileByTokenRes implements IProtoOAGetCtidProfileByTokenRes {

    /**
     * Constructs a new ProtoOAGetCtidProfileByTokenRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetCtidProfileByTokenRes);

    /** ProtoOAGetCtidProfileByTokenRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetCtidProfileByTokenRes profile. */
    public profile: IProtoOACtidProfile;

    /**
     * Creates a new ProtoOAGetCtidProfileByTokenRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetCtidProfileByTokenRes instance
     */
    public static create(properties?: IProtoOAGetCtidProfileByTokenRes): ProtoOAGetCtidProfileByTokenRes;

    /**
     * Encodes the specified ProtoOAGetCtidProfileByTokenRes message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
     * @param message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetCtidProfileByTokenRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetCtidProfileByTokenRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetCtidProfileByTokenRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetCtidProfileByTokenRes;

    /**
     * Gets the default type url for ProtoOAGetCtidProfileByTokenRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADepthEvent. */
export class ProtoOADepthEvent implements IProtoOADepthEvent {

    /**
     * Constructs a new ProtoOADepthEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADepthEvent);

    /** ProtoOADepthEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADepthEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADepthEvent symbolId. */
    public symbolId: number;

    /** ProtoOADepthEvent newQuotes. */
    public newQuotes: IProtoOADepthQuote[];

    /** ProtoOADepthEvent deletedQuotes. */
    public deletedQuotes: number[];

    /**
     * Creates a new ProtoOADepthEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADepthEvent instance
     */
    public static create(properties?: IProtoOADepthEvent): ProtoOADepthEvent;

    /**
     * Encodes the specified ProtoOADepthEvent message. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
     * @param message ProtoOADepthEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADepthEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADepthEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADepthEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADepthEvent;

    /**
     * Gets the default type url for ProtoOADepthEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeDepthQuotesReq. */
export class ProtoOASubscribeDepthQuotesReq implements IProtoOASubscribeDepthQuotesReq {

    /**
     * Constructs a new ProtoOASubscribeDepthQuotesReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeDepthQuotesReq);

    /** ProtoOASubscribeDepthQuotesReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeDepthQuotesReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASubscribeDepthQuotesReq symbolId. */
    public symbolId: number[];

    /**
     * Creates a new ProtoOASubscribeDepthQuotesReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeDepthQuotesReq instance
     */
    public static create(properties?: IProtoOASubscribeDepthQuotesReq): ProtoOASubscribeDepthQuotesReq;

    /**
     * Encodes the specified ProtoOASubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
     * @param message ProtoOASubscribeDepthQuotesReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeDepthQuotesReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeDepthQuotesReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeDepthQuotesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeDepthQuotesReq;

    /**
     * Gets the default type url for ProtoOASubscribeDepthQuotesReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASubscribeDepthQuotesRes. */
export class ProtoOASubscribeDepthQuotesRes implements IProtoOASubscribeDepthQuotesRes {

    /**
     * Constructs a new ProtoOASubscribeDepthQuotesRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASubscribeDepthQuotesRes);

    /** ProtoOASubscribeDepthQuotesRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASubscribeDepthQuotesRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOASubscribeDepthQuotesRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASubscribeDepthQuotesRes instance
     */
    public static create(properties?: IProtoOASubscribeDepthQuotesRes): ProtoOASubscribeDepthQuotesRes;

    /**
     * Encodes the specified ProtoOASubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
     * @param message ProtoOASubscribeDepthQuotesRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASubscribeDepthQuotesRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASubscribeDepthQuotesRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASubscribeDepthQuotesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASubscribeDepthQuotesRes;

    /**
     * Gets the default type url for ProtoOASubscribeDepthQuotesRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeDepthQuotesReq. */
export class ProtoOAUnsubscribeDepthQuotesReq implements IProtoOAUnsubscribeDepthQuotesReq {

    /**
     * Constructs a new ProtoOAUnsubscribeDepthQuotesReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeDepthQuotesReq);

    /** ProtoOAUnsubscribeDepthQuotesReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAUnsubscribeDepthQuotesReq symbolId. */
    public symbolId: number[];

    /**
     * Creates a new ProtoOAUnsubscribeDepthQuotesReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeDepthQuotesReq instance
     */
    public static create(properties?: IProtoOAUnsubscribeDepthQuotesReq): ProtoOAUnsubscribeDepthQuotesReq;

    /**
     * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
     * @param message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeDepthQuotesReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeDepthQuotesReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeDepthQuotesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeDepthQuotesReq;

    /**
     * Gets the default type url for ProtoOAUnsubscribeDepthQuotesReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAUnsubscribeDepthQuotesRes. */
export class ProtoOAUnsubscribeDepthQuotesRes implements IProtoOAUnsubscribeDepthQuotesRes {

    /**
     * Constructs a new ProtoOAUnsubscribeDepthQuotesRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAUnsubscribeDepthQuotesRes);

    /** ProtoOAUnsubscribeDepthQuotesRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAUnsubscribeDepthQuotesRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAUnsubscribeDepthQuotesRes instance
     */
    public static create(properties?: IProtoOAUnsubscribeDepthQuotesRes): ProtoOAUnsubscribeDepthQuotesRes;

    /**
     * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
     * @param message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAUnsubscribeDepthQuotesRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAUnsubscribeDepthQuotesRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAUnsubscribeDepthQuotesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAUnsubscribeDepthQuotesRes;

    /**
     * Gets the default type url for ProtoOAUnsubscribeDepthQuotesRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolCategoryListReq. */
export class ProtoOASymbolCategoryListReq implements IProtoOASymbolCategoryListReq {

    /**
     * Constructs a new ProtoOASymbolCategoryListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolCategoryListReq);

    /** ProtoOASymbolCategoryListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolCategoryListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOASymbolCategoryListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolCategoryListReq instance
     */
    public static create(properties?: IProtoOASymbolCategoryListReq): ProtoOASymbolCategoryListReq;

    /**
     * Encodes the specified ProtoOASymbolCategoryListReq message. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
     * @param message ProtoOASymbolCategoryListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolCategoryListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolCategoryListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolCategoryListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolCategoryListReq;

    /**
     * Gets the default type url for ProtoOASymbolCategoryListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOASymbolCategoryListRes. */
export class ProtoOASymbolCategoryListRes implements IProtoOASymbolCategoryListRes {

    /**
     * Constructs a new ProtoOASymbolCategoryListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOASymbolCategoryListRes);

    /** ProtoOASymbolCategoryListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOASymbolCategoryListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOASymbolCategoryListRes symbolCategory. */
    public symbolCategory: IProtoOASymbolCategory[];

    /**
     * Creates a new ProtoOASymbolCategoryListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOASymbolCategoryListRes instance
     */
    public static create(properties?: IProtoOASymbolCategoryListRes): ProtoOASymbolCategoryListRes;

    /**
     * Encodes the specified ProtoOASymbolCategoryListRes message. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
     * @param message ProtoOASymbolCategoryListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOASymbolCategoryListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOASymbolCategoryListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOASymbolCategoryListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOASymbolCategoryListRes;

    /**
     * Gets the default type url for ProtoOASymbolCategoryListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountLogoutReq. */
export class ProtoOAAccountLogoutReq implements IProtoOAAccountLogoutReq {

    /**
     * Constructs a new ProtoOAAccountLogoutReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountLogoutReq);

    /** ProtoOAAccountLogoutReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountLogoutReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAccountLogoutReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountLogoutReq instance
     */
    public static create(properties?: IProtoOAAccountLogoutReq): ProtoOAAccountLogoutReq;

    /**
     * Encodes the specified ProtoOAAccountLogoutReq message. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
     * @param message ProtoOAAccountLogoutReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountLogoutReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountLogoutReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountLogoutReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountLogoutReq;

    /**
     * Gets the default type url for ProtoOAAccountLogoutReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountLogoutRes. */
export class ProtoOAAccountLogoutRes implements IProtoOAAccountLogoutRes {

    /**
     * Constructs a new ProtoOAAccountLogoutRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountLogoutRes);

    /** ProtoOAAccountLogoutRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountLogoutRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAccountLogoutRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountLogoutRes instance
     */
    public static create(properties?: IProtoOAAccountLogoutRes): ProtoOAAccountLogoutRes;

    /**
     * Encodes the specified ProtoOAAccountLogoutRes message. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
     * @param message ProtoOAAccountLogoutRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountLogoutRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountLogoutRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountLogoutRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountLogoutRes;

    /**
     * Gets the default type url for ProtoOAAccountLogoutRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAAccountDisconnectEvent. */
export class ProtoOAAccountDisconnectEvent implements IProtoOAAccountDisconnectEvent {

    /**
     * Constructs a new ProtoOAAccountDisconnectEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAAccountDisconnectEvent);

    /** ProtoOAAccountDisconnectEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAAccountDisconnectEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAAccountDisconnectEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAAccountDisconnectEvent instance
     */
    public static create(properties?: IProtoOAAccountDisconnectEvent): ProtoOAAccountDisconnectEvent;

    /**
     * Encodes the specified ProtoOAAccountDisconnectEvent message. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
     * @param message ProtoOAAccountDisconnectEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAAccountDisconnectEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAAccountDisconnectEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAAccountDisconnectEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAAccountDisconnectEvent;

    /**
     * Gets the default type url for ProtoOAAccountDisconnectEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallListReq. */
export class ProtoOAMarginCallListReq implements IProtoOAMarginCallListReq {

    /**
     * Constructs a new ProtoOAMarginCallListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallListReq);

    /** ProtoOAMarginCallListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginCallListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAMarginCallListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallListReq instance
     */
    public static create(properties?: IProtoOAMarginCallListReq): ProtoOAMarginCallListReq;

    /**
     * Encodes the specified ProtoOAMarginCallListReq message. Does not implicitly {@link ProtoOAMarginCallListReq.verify|verify} messages.
     * @param message ProtoOAMarginCallListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallListReq;

    /**
     * Gets the default type url for ProtoOAMarginCallListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallListRes. */
export class ProtoOAMarginCallListRes implements IProtoOAMarginCallListRes {

    /**
     * Constructs a new ProtoOAMarginCallListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallListRes);

    /** ProtoOAMarginCallListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginCallListRes marginCall. */
    public marginCall: IProtoOAMarginCall[];

    /**
     * Creates a new ProtoOAMarginCallListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallListRes instance
     */
    public static create(properties?: IProtoOAMarginCallListRes): ProtoOAMarginCallListRes;

    /**
     * Encodes the specified ProtoOAMarginCallListRes message. Does not implicitly {@link ProtoOAMarginCallListRes.verify|verify} messages.
     * @param message ProtoOAMarginCallListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallListRes;

    /**
     * Gets the default type url for ProtoOAMarginCallListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallUpdateReq. */
export class ProtoOAMarginCallUpdateReq implements IProtoOAMarginCallUpdateReq {

    /**
     * Constructs a new ProtoOAMarginCallUpdateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallUpdateReq);

    /** ProtoOAMarginCallUpdateReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginCallUpdateReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAMarginCallUpdateReq marginCall. */
    public marginCall: IProtoOAMarginCall;

    /**
     * Creates a new ProtoOAMarginCallUpdateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallUpdateReq instance
     */
    public static create(properties?: IProtoOAMarginCallUpdateReq): ProtoOAMarginCallUpdateReq;

    /**
     * Encodes the specified ProtoOAMarginCallUpdateReq message. Does not implicitly {@link ProtoOAMarginCallUpdateReq.verify|verify} messages.
     * @param message ProtoOAMarginCallUpdateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallUpdateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallUpdateReq;

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallUpdateRes. */
export class ProtoOAMarginCallUpdateRes implements IProtoOAMarginCallUpdateRes {

    /**
     * Constructs a new ProtoOAMarginCallUpdateRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallUpdateRes);

    /** ProtoOAMarginCallUpdateRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /**
     * Creates a new ProtoOAMarginCallUpdateRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallUpdateRes instance
     */
    public static create(properties?: IProtoOAMarginCallUpdateRes): ProtoOAMarginCallUpdateRes;

    /**
     * Encodes the specified ProtoOAMarginCallUpdateRes message. Does not implicitly {@link ProtoOAMarginCallUpdateRes.verify|verify} messages.
     * @param message ProtoOAMarginCallUpdateRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallUpdateRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallUpdateRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallUpdateRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallUpdateRes;

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallUpdateEvent. */
export class ProtoOAMarginCallUpdateEvent implements IProtoOAMarginCallUpdateEvent {

    /**
     * Constructs a new ProtoOAMarginCallUpdateEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallUpdateEvent);

    /** ProtoOAMarginCallUpdateEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginCallUpdateEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAMarginCallUpdateEvent marginCall. */
    public marginCall: IProtoOAMarginCall;

    /**
     * Creates a new ProtoOAMarginCallUpdateEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallUpdateEvent instance
     */
    public static create(properties?: IProtoOAMarginCallUpdateEvent): ProtoOAMarginCallUpdateEvent;

    /**
     * Encodes the specified ProtoOAMarginCallUpdateEvent message. Does not implicitly {@link ProtoOAMarginCallUpdateEvent.verify|verify} messages.
     * @param message ProtoOAMarginCallUpdateEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallUpdateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallUpdateEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallUpdateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallUpdateEvent;

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAMarginCallTriggerEvent. */
export class ProtoOAMarginCallTriggerEvent implements IProtoOAMarginCallTriggerEvent {

    /**
     * Constructs a new ProtoOAMarginCallTriggerEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAMarginCallTriggerEvent);

    /** ProtoOAMarginCallTriggerEvent payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAMarginCallTriggerEvent ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAMarginCallTriggerEvent marginCall. */
    public marginCall: IProtoOAMarginCall;

    /**
     * Creates a new ProtoOAMarginCallTriggerEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAMarginCallTriggerEvent instance
     */
    public static create(properties?: IProtoOAMarginCallTriggerEvent): ProtoOAMarginCallTriggerEvent;

    /**
     * Encodes the specified ProtoOAMarginCallTriggerEvent message. Does not implicitly {@link ProtoOAMarginCallTriggerEvent.verify|verify} messages.
     * @param message ProtoOAMarginCallTriggerEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAMarginCallTriggerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAMarginCallTriggerEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAMarginCallTriggerEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAMarginCallTriggerEvent;

    /**
     * Gets the default type url for ProtoOAMarginCallTriggerEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetDynamicLeverageByIDReq. */
export class ProtoOAGetDynamicLeverageByIDReq implements IProtoOAGetDynamicLeverageByIDReq {

    /**
     * Constructs a new ProtoOAGetDynamicLeverageByIDReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetDynamicLeverageByIDReq);

    /** ProtoOAGetDynamicLeverageByIDReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetDynamicLeverageByIDReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetDynamicLeverageByIDReq leverageId. */
    public leverageId: number;

    /**
     * Creates a new ProtoOAGetDynamicLeverageByIDReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetDynamicLeverageByIDReq instance
     */
    public static create(properties?: IProtoOAGetDynamicLeverageByIDReq): ProtoOAGetDynamicLeverageByIDReq;

    /**
     * Encodes the specified ProtoOAGetDynamicLeverageByIDReq message. Does not implicitly {@link ProtoOAGetDynamicLeverageByIDReq.verify|verify} messages.
     * @param message ProtoOAGetDynamicLeverageByIDReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetDynamicLeverageByIDReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetDynamicLeverageByIDReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetDynamicLeverageByIDReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetDynamicLeverageByIDReq;

    /**
     * Gets the default type url for ProtoOAGetDynamicLeverageByIDReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetDynamicLeverageByIDRes. */
export class ProtoOAGetDynamicLeverageByIDRes implements IProtoOAGetDynamicLeverageByIDRes {

    /**
     * Constructs a new ProtoOAGetDynamicLeverageByIDRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetDynamicLeverageByIDRes);

    /** ProtoOAGetDynamicLeverageByIDRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetDynamicLeverageByIDRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetDynamicLeverageByIDRes leverage. */
    public leverage: IProtoOADynamicLeverage;

    /**
     * Creates a new ProtoOAGetDynamicLeverageByIDRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetDynamicLeverageByIDRes instance
     */
    public static create(properties?: IProtoOAGetDynamicLeverageByIDRes): ProtoOAGetDynamicLeverageByIDRes;

    /**
     * Encodes the specified ProtoOAGetDynamicLeverageByIDRes message. Does not implicitly {@link ProtoOAGetDynamicLeverageByIDRes.verify|verify} messages.
     * @param message ProtoOAGetDynamicLeverageByIDRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetDynamicLeverageByIDRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetDynamicLeverageByIDRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetDynamicLeverageByIDRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetDynamicLeverageByIDRes;

    /**
     * Gets the default type url for ProtoOAGetDynamicLeverageByIDRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealListByPositionIdReq. */
export class ProtoOADealListByPositionIdReq implements IProtoOADealListByPositionIdReq {

    /**
     * Constructs a new ProtoOADealListByPositionIdReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealListByPositionIdReq);

    /** ProtoOADealListByPositionIdReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealListByPositionIdReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealListByPositionIdReq positionId. */
    public positionId: number;

    /** ProtoOADealListByPositionIdReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOADealListByPositionIdReq toTimestamp. */
    public toTimestamp: number;

    /**
     * Creates a new ProtoOADealListByPositionIdReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealListByPositionIdReq instance
     */
    public static create(properties?: IProtoOADealListByPositionIdReq): ProtoOADealListByPositionIdReq;

    /**
     * Encodes the specified ProtoOADealListByPositionIdReq message. Does not implicitly {@link ProtoOADealListByPositionIdReq.verify|verify} messages.
     * @param message ProtoOADealListByPositionIdReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealListByPositionIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealListByPositionIdReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealListByPositionIdReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealListByPositionIdReq;

    /**
     * Gets the default type url for ProtoOADealListByPositionIdReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealListByPositionIdRes. */
export class ProtoOADealListByPositionIdRes implements IProtoOADealListByPositionIdRes {

    /**
     * Constructs a new ProtoOADealListByPositionIdRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealListByPositionIdRes);

    /** ProtoOADealListByPositionIdRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealListByPositionIdRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealListByPositionIdRes deal. */
    public deal: IProtoOADeal[];

    /** ProtoOADealListByPositionIdRes hasMore. */
    public hasMore: number;

    /**
     * Creates a new ProtoOADealListByPositionIdRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealListByPositionIdRes instance
     */
    public static create(properties?: IProtoOADealListByPositionIdRes): ProtoOADealListByPositionIdRes;

    /**
     * Encodes the specified ProtoOADealListByPositionIdRes message. Does not implicitly {@link ProtoOADealListByPositionIdRes.verify|verify} messages.
     * @param message ProtoOADealListByPositionIdRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealListByPositionIdRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealListByPositionIdRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealListByPositionIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealListByPositionIdRes;

    /**
     * Gets the default type url for ProtoOADealListByPositionIdRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealOffsetListReq. */
export class ProtoOADealOffsetListReq implements IProtoOADealOffsetListReq {

    /**
     * Constructs a new ProtoOADealOffsetListReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealOffsetListReq);

    /** ProtoOADealOffsetListReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealOffsetListReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealOffsetListReq dealId. */
    public dealId: number;

    /**
     * Creates a new ProtoOADealOffsetListReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealOffsetListReq instance
     */
    public static create(properties?: IProtoOADealOffsetListReq): ProtoOADealOffsetListReq;

    /**
     * Encodes the specified ProtoOADealOffsetListReq message. Does not implicitly {@link ProtoOADealOffsetListReq.verify|verify} messages.
     * @param message ProtoOADealOffsetListReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealOffsetListReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealOffsetListReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealOffsetListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealOffsetListReq;

    /**
     * Gets the default type url for ProtoOADealOffsetListReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOADealOffsetListRes. */
export class ProtoOADealOffsetListRes implements IProtoOADealOffsetListRes {

    /**
     * Constructs a new ProtoOADealOffsetListRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOADealOffsetListRes);

    /** ProtoOADealOffsetListRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOADealOffsetListRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOADealOffsetListRes offsetBy. */
    public offsetBy: IProtoOADealOffset[];

    /** ProtoOADealOffsetListRes offsetting. */
    public offsetting: IProtoOADealOffset[];

    /**
     * Creates a new ProtoOADealOffsetListRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOADealOffsetListRes instance
     */
    public static create(properties?: IProtoOADealOffsetListRes): ProtoOADealOffsetListRes;

    /**
     * Encodes the specified ProtoOADealOffsetListRes message. Does not implicitly {@link ProtoOADealOffsetListRes.verify|verify} messages.
     * @param message ProtoOADealOffsetListRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOADealOffsetListRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOADealOffsetListRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOADealOffsetListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOADealOffsetListRes;

    /**
     * Gets the default type url for ProtoOADealOffsetListRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetPositionUnrealizedPnLReq. */
export class ProtoOAGetPositionUnrealizedPnLReq implements IProtoOAGetPositionUnrealizedPnLReq {

    /**
     * Constructs a new ProtoOAGetPositionUnrealizedPnLReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetPositionUnrealizedPnLReq);

    /** ProtoOAGetPositionUnrealizedPnLReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetPositionUnrealizedPnLReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /**
     * Creates a new ProtoOAGetPositionUnrealizedPnLReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetPositionUnrealizedPnLReq instance
     */
    public static create(properties?: IProtoOAGetPositionUnrealizedPnLReq): ProtoOAGetPositionUnrealizedPnLReq;

    /**
     * Encodes the specified ProtoOAGetPositionUnrealizedPnLReq message. Does not implicitly {@link ProtoOAGetPositionUnrealizedPnLReq.verify|verify} messages.
     * @param message ProtoOAGetPositionUnrealizedPnLReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetPositionUnrealizedPnLReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetPositionUnrealizedPnLReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetPositionUnrealizedPnLReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetPositionUnrealizedPnLReq;

    /**
     * Gets the default type url for ProtoOAGetPositionUnrealizedPnLReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAGetPositionUnrealizedPnLRes. */
export class ProtoOAGetPositionUnrealizedPnLRes implements IProtoOAGetPositionUnrealizedPnLRes {

    /**
     * Constructs a new ProtoOAGetPositionUnrealizedPnLRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAGetPositionUnrealizedPnLRes);

    /** ProtoOAGetPositionUnrealizedPnLRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAGetPositionUnrealizedPnLRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAGetPositionUnrealizedPnLRes positionUnrealizedPnL. */
    public positionUnrealizedPnL: IProtoOAPositionUnrealizedPnL[];

    /** ProtoOAGetPositionUnrealizedPnLRes moneyDigits. */
    public moneyDigits: number;

    /**
     * Creates a new ProtoOAGetPositionUnrealizedPnLRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAGetPositionUnrealizedPnLRes instance
     */
    public static create(properties?: IProtoOAGetPositionUnrealizedPnLRes): ProtoOAGetPositionUnrealizedPnLRes;

    /**
     * Encodes the specified ProtoOAGetPositionUnrealizedPnLRes message. Does not implicitly {@link ProtoOAGetPositionUnrealizedPnLRes.verify|verify} messages.
     * @param message ProtoOAGetPositionUnrealizedPnLRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAGetPositionUnrealizedPnLRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAGetPositionUnrealizedPnLRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAGetPositionUnrealizedPnLRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAGetPositionUnrealizedPnLRes;

    /**
     * Gets the default type url for ProtoOAGetPositionUnrealizedPnLRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderDetailsReq. */
export class ProtoOAOrderDetailsReq implements IProtoOAOrderDetailsReq {

    /**
     * Constructs a new ProtoOAOrderDetailsReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderDetailsReq);

    /** ProtoOAOrderDetailsReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderDetailsReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderDetailsReq orderId. */
    public orderId: number;

    /**
     * Creates a new ProtoOAOrderDetailsReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderDetailsReq instance
     */
    public static create(properties?: IProtoOAOrderDetailsReq): ProtoOAOrderDetailsReq;

    /**
     * Encodes the specified ProtoOAOrderDetailsReq message. Does not implicitly {@link ProtoOAOrderDetailsReq.verify|verify} messages.
     * @param message ProtoOAOrderDetailsReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderDetailsReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderDetailsReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderDetailsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderDetailsReq;

    /**
     * Gets the default type url for ProtoOAOrderDetailsReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderDetailsRes. */
export class ProtoOAOrderDetailsRes implements IProtoOAOrderDetailsRes {

    /**
     * Constructs a new ProtoOAOrderDetailsRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderDetailsRes);

    /** ProtoOAOrderDetailsRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderDetailsRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderDetailsRes order. */
    public order: IProtoOAOrder;

    /** ProtoOAOrderDetailsRes deal. */
    public deal: IProtoOADeal[];

    /**
     * Creates a new ProtoOAOrderDetailsRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderDetailsRes instance
     */
    public static create(properties?: IProtoOAOrderDetailsRes): ProtoOAOrderDetailsRes;

    /**
     * Encodes the specified ProtoOAOrderDetailsRes message. Does not implicitly {@link ProtoOAOrderDetailsRes.verify|verify} messages.
     * @param message ProtoOAOrderDetailsRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderDetailsRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderDetailsRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderDetailsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderDetailsRes;

    /**
     * Gets the default type url for ProtoOAOrderDetailsRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderListByPositionIdReq. */
export class ProtoOAOrderListByPositionIdReq implements IProtoOAOrderListByPositionIdReq {

    /**
     * Constructs a new ProtoOAOrderListByPositionIdReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderListByPositionIdReq);

    /** ProtoOAOrderListByPositionIdReq payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderListByPositionIdReq ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderListByPositionIdReq positionId. */
    public positionId: number;

    /** ProtoOAOrderListByPositionIdReq fromTimestamp. */
    public fromTimestamp: number;

    /** ProtoOAOrderListByPositionIdReq toTimestamp. */
    public toTimestamp: number;

    /**
     * Creates a new ProtoOAOrderListByPositionIdReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderListByPositionIdReq instance
     */
    public static create(properties?: IProtoOAOrderListByPositionIdReq): ProtoOAOrderListByPositionIdReq;

    /**
     * Encodes the specified ProtoOAOrderListByPositionIdReq message. Does not implicitly {@link ProtoOAOrderListByPositionIdReq.verify|verify} messages.
     * @param message ProtoOAOrderListByPositionIdReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderListByPositionIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderListByPositionIdReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderListByPositionIdReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderListByPositionIdReq;

    /**
     * Gets the default type url for ProtoOAOrderListByPositionIdReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ProtoOAOrderListByPositionIdRes. */
export class ProtoOAOrderListByPositionIdRes implements IProtoOAOrderListByPositionIdRes {

    /**
     * Constructs a new ProtoOAOrderListByPositionIdRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoOAOrderListByPositionIdRes);

    /** ProtoOAOrderListByPositionIdRes payloadType. */
    public payloadType: ProtoOAPayloadType;

    /** ProtoOAOrderListByPositionIdRes ctidTraderAccountId. */
    public ctidTraderAccountId: number;

    /** ProtoOAOrderListByPositionIdRes order. */
    public order: IProtoOAOrder[];

    /** ProtoOAOrderListByPositionIdRes hasMore. */
    public hasMore: boolean;

    /**
     * Creates a new ProtoOAOrderListByPositionIdRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoOAOrderListByPositionIdRes instance
     */
    public static create(properties?: IProtoOAOrderListByPositionIdRes): ProtoOAOrderListByPositionIdRes;

    /**
     * Encodes the specified ProtoOAOrderListByPositionIdRes message. Does not implicitly {@link ProtoOAOrderListByPositionIdRes.verify|verify} messages.
     * @param message ProtoOAOrderListByPositionIdRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoOAOrderListByPositionIdRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoOAOrderListByPositionIdRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoOAOrderListByPositionIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoOAOrderListByPositionIdRes;

    /**
     * Gets the default type url for ProtoOAOrderListByPositionIdRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
