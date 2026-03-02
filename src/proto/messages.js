/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ProtoPayloadType enum.
 * @exports ProtoPayloadType
 * @enum {number}
 * @property {number} PROTO_MESSAGE=5 PROTO_MESSAGE value
 * @property {number} ERROR_RES=50 ERROR_RES value
 * @property {number} HEARTBEAT_EVENT=51 HEARTBEAT_EVENT value
 */
export const ProtoPayloadType = ($root.ProtoPayloadType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[5] = "PROTO_MESSAGE")] = 5;
  values[(valuesById[50] = "ERROR_RES")] = 50;
  values[(valuesById[51] = "HEARTBEAT_EVENT")] = 51;
  return values;
})());

/**
 * ProtoErrorCode enum.
 * @exports ProtoErrorCode
 * @enum {number}
 * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
 * @property {number} UNSUPPORTED_MESSAGE=2 UNSUPPORTED_MESSAGE value
 * @property {number} INVALID_REQUEST=3 INVALID_REQUEST value
 * @property {number} TIMEOUT_ERROR=5 TIMEOUT_ERROR value
 * @property {number} ENTITY_NOT_FOUND=6 ENTITY_NOT_FOUND value
 * @property {number} CANT_ROUTE_REQUEST=7 CANT_ROUTE_REQUEST value
 * @property {number} FRAME_TOO_LONG=8 FRAME_TOO_LONG value
 * @property {number} MARKET_CLOSED=9 MARKET_CLOSED value
 * @property {number} CONCURRENT_MODIFICATION=10 CONCURRENT_MODIFICATION value
 * @property {number} BLOCKED_PAYLOAD_TYPE=11 BLOCKED_PAYLOAD_TYPE value
 */
export const ProtoErrorCode = ($root.ProtoErrorCode = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "UNKNOWN_ERROR")] = 1;
  values[(valuesById[2] = "UNSUPPORTED_MESSAGE")] = 2;
  values[(valuesById[3] = "INVALID_REQUEST")] = 3;
  values[(valuesById[5] = "TIMEOUT_ERROR")] = 5;
  values[(valuesById[6] = "ENTITY_NOT_FOUND")] = 6;
  values[(valuesById[7] = "CANT_ROUTE_REQUEST")] = 7;
  values[(valuesById[8] = "FRAME_TOO_LONG")] = 8;
  values[(valuesById[9] = "MARKET_CLOSED")] = 9;
  values[(valuesById[10] = "CONCURRENT_MODIFICATION")] = 10;
  values[(valuesById[11] = "BLOCKED_PAYLOAD_TYPE")] = 11;
  return values;
})());

export const ProtoMessage = ($root.ProtoMessage = (() => {
  /**
   * Properties of a ProtoMessage.
   * @exports IProtoMessage
   * @interface IProtoMessage
   * @property {number} payloadType ProtoMessage payloadType
   * @property {Uint8Array|null} [payload] ProtoMessage payload
   * @property {string|null} [clientMsgId] ProtoMessage clientMsgId
   */

  /**
   * Constructs a new ProtoMessage.
   * @exports ProtoMessage
   * @classdesc Represents a ProtoMessage.
   * @implements IProtoMessage
   * @constructor
   * @param {IProtoMessage=} [properties] Properties to set
   */
  function ProtoMessage(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoMessage payloadType.
   * @member {number} payloadType
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.payloadType = 0;

  /**
   * ProtoMessage payload.
   * @member {Uint8Array} payload
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.payload = $util.newBuffer([]);

  /**
   * ProtoMessage clientMsgId.
   * @member {string} clientMsgId
   * @memberof ProtoMessage
   * @instance
   */
  ProtoMessage.prototype.clientMsgId = "";

  /**
   * Creates a new ProtoMessage instance using the specified properties.
   * @function create
   * @memberof ProtoMessage
   * @static
   * @param {IProtoMessage=} [properties] Properties to set
   * @returns {ProtoMessage} ProtoMessage instance
   */
  ProtoMessage.create = function create(properties) {
    return new ProtoMessage(properties);
  };

  /**
   * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
   * @function encode
   * @memberof ProtoMessage
   * @static
   * @param {IProtoMessage} message ProtoMessage message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoMessage.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.payloadType);
    if (
      message.payload != null &&
      Object.hasOwnProperty.call(message, "payload")
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.payload);
    if (
      message.clientMsgId != null &&
      Object.hasOwnProperty.call(message, "clientMsgId")
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.clientMsgId);
    return writer;
  };

  /**
   * Decodes a ProtoMessage message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoMessage
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoMessage} ProtoMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoMessage.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoMessage();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.uint32();
          break;
        }
        case 2: {
          message.payload = reader.bytes();
          break;
        }
        case 3: {
          message.clientMsgId = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("payloadType"))
      throw $util.ProtocolError("missing required 'payloadType'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoMessage
   * @function getTypeUrl
   * @memberof ProtoMessage
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoMessage";
  };

  return ProtoMessage;
})());

export const ProtoErrorRes = ($root.ProtoErrorRes = (() => {
  /**
   * Properties of a ProtoErrorRes.
   * @exports IProtoErrorRes
   * @interface IProtoErrorRes
   * @property {ProtoPayloadType|null} [payloadType] ProtoErrorRes payloadType
   * @property {string} errorCode ProtoErrorRes errorCode
   * @property {string|null} [description] ProtoErrorRes description
   * @property {number|null} [maintenanceEndTimestamp] ProtoErrorRes maintenanceEndTimestamp
   */

  /**
   * Constructs a new ProtoErrorRes.
   * @exports ProtoErrorRes
   * @classdesc Represents a ProtoErrorRes.
   * @implements IProtoErrorRes
   * @constructor
   * @param {IProtoErrorRes=} [properties] Properties to set
   */
  function ProtoErrorRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoErrorRes payloadType.
   * @member {ProtoPayloadType} payloadType
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.payloadType = 50;

  /**
   * ProtoErrorRes errorCode.
   * @member {string} errorCode
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.errorCode = "";

  /**
   * ProtoErrorRes description.
   * @member {string} description
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.description = "";

  /**
   * ProtoErrorRes maintenanceEndTimestamp.
   * @member {number} maintenanceEndTimestamp
   * @memberof ProtoErrorRes
   * @instance
   */
  ProtoErrorRes.prototype.maintenanceEndTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Creates a new ProtoErrorRes instance using the specified properties.
   * @function create
   * @memberof ProtoErrorRes
   * @static
   * @param {IProtoErrorRes=} [properties] Properties to set
   * @returns {ProtoErrorRes} ProtoErrorRes instance
   */
  ProtoErrorRes.create = function create(properties) {
    return new ProtoErrorRes(properties);
  };

  /**
   * Encodes the specified ProtoErrorRes message. Does not implicitly {@link ProtoErrorRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoErrorRes
   * @static
   * @param {IProtoErrorRes} message ProtoErrorRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoErrorRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errorCode);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.description);
    if (
      message.maintenanceEndTimestamp != null &&
      Object.hasOwnProperty.call(message, "maintenanceEndTimestamp")
    )
      writer
        .uint32(/* id 4, wireType 0 =*/ 32)
        .uint64(message.maintenanceEndTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoErrorRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoErrorRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoErrorRes} ProtoErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoErrorRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoErrorRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.errorCode = reader.string();
          break;
        }
        case 3: {
          message.description = reader.string();
          break;
        }
        case 4: {
          message.maintenanceEndTimestamp = reader.uint64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoErrorRes
   * @function getTypeUrl
   * @memberof ProtoErrorRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoErrorRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoErrorRes";
  };

  return ProtoErrorRes;
})());

export const ProtoHeartbeatEvent = ($root.ProtoHeartbeatEvent = (() => {
  /**
   * Properties of a ProtoHeartbeatEvent.
   * @exports IProtoHeartbeatEvent
   * @interface IProtoHeartbeatEvent
   * @property {ProtoPayloadType|null} [payloadType] ProtoHeartbeatEvent payloadType
   */

  /**
   * Constructs a new ProtoHeartbeatEvent.
   * @exports ProtoHeartbeatEvent
   * @classdesc Represents a ProtoHeartbeatEvent.
   * @implements IProtoHeartbeatEvent
   * @constructor
   * @param {IProtoHeartbeatEvent=} [properties] Properties to set
   */
  function ProtoHeartbeatEvent(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoHeartbeatEvent payloadType.
   * @member {ProtoPayloadType} payloadType
   * @memberof ProtoHeartbeatEvent
   * @instance
   */
  ProtoHeartbeatEvent.prototype.payloadType = 51;

  /**
   * Creates a new ProtoHeartbeatEvent instance using the specified properties.
   * @function create
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {IProtoHeartbeatEvent=} [properties] Properties to set
   * @returns {ProtoHeartbeatEvent} ProtoHeartbeatEvent instance
   */
  ProtoHeartbeatEvent.create = function create(properties) {
    return new ProtoHeartbeatEvent(properties);
  };

  /**
   * Encodes the specified ProtoHeartbeatEvent message. Does not implicitly {@link ProtoHeartbeatEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {IProtoHeartbeatEvent} message ProtoHeartbeatEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoHeartbeatEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    return writer;
  };

  /**
   * Decodes a ProtoHeartbeatEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoHeartbeatEvent} ProtoHeartbeatEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoHeartbeatEvent.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoHeartbeatEvent();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Gets the default type url for ProtoHeartbeatEvent
   * @function getTypeUrl
   * @memberof ProtoHeartbeatEvent
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoHeartbeatEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoHeartbeatEvent";
  };

  return ProtoHeartbeatEvent;
})());

/**
 * ProtoOAPayloadType enum.
 * @exports ProtoOAPayloadType
 * @enum {number}
 * @property {number} PROTO_OA_APPLICATION_AUTH_REQ=2100 PROTO_OA_APPLICATION_AUTH_REQ value
 * @property {number} PROTO_OA_APPLICATION_AUTH_RES=2101 PROTO_OA_APPLICATION_AUTH_RES value
 * @property {number} PROTO_OA_ACCOUNT_AUTH_REQ=2102 PROTO_OA_ACCOUNT_AUTH_REQ value
 * @property {number} PROTO_OA_ACCOUNT_AUTH_RES=2103 PROTO_OA_ACCOUNT_AUTH_RES value
 * @property {number} PROTO_OA_VERSION_REQ=2104 PROTO_OA_VERSION_REQ value
 * @property {number} PROTO_OA_VERSION_RES=2105 PROTO_OA_VERSION_RES value
 * @property {number} PROTO_OA_NEW_ORDER_REQ=2106 PROTO_OA_NEW_ORDER_REQ value
 * @property {number} PROTO_OA_TRAILING_SL_CHANGED_EVENT=2107 PROTO_OA_TRAILING_SL_CHANGED_EVENT value
 * @property {number} PROTO_OA_CANCEL_ORDER_REQ=2108 PROTO_OA_CANCEL_ORDER_REQ value
 * @property {number} PROTO_OA_AMEND_ORDER_REQ=2109 PROTO_OA_AMEND_ORDER_REQ value
 * @property {number} PROTO_OA_AMEND_POSITION_SLTP_REQ=2110 PROTO_OA_AMEND_POSITION_SLTP_REQ value
 * @property {number} PROTO_OA_CLOSE_POSITION_REQ=2111 PROTO_OA_CLOSE_POSITION_REQ value
 * @property {number} PROTO_OA_ASSET_LIST_REQ=2112 PROTO_OA_ASSET_LIST_REQ value
 * @property {number} PROTO_OA_ASSET_LIST_RES=2113 PROTO_OA_ASSET_LIST_RES value
 * @property {number} PROTO_OA_SYMBOLS_LIST_REQ=2114 PROTO_OA_SYMBOLS_LIST_REQ value
 * @property {number} PROTO_OA_SYMBOLS_LIST_RES=2115 PROTO_OA_SYMBOLS_LIST_RES value
 * @property {number} PROTO_OA_SYMBOL_BY_ID_REQ=2116 PROTO_OA_SYMBOL_BY_ID_REQ value
 * @property {number} PROTO_OA_SYMBOL_BY_ID_RES=2117 PROTO_OA_SYMBOL_BY_ID_RES value
 * @property {number} PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ=2118 PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ value
 * @property {number} PROTO_OA_SYMBOLS_FOR_CONVERSION_RES=2119 PROTO_OA_SYMBOLS_FOR_CONVERSION_RES value
 * @property {number} PROTO_OA_SYMBOL_CHANGED_EVENT=2120 PROTO_OA_SYMBOL_CHANGED_EVENT value
 * @property {number} PROTO_OA_TRADER_REQ=2121 PROTO_OA_TRADER_REQ value
 * @property {number} PROTO_OA_TRADER_RES=2122 PROTO_OA_TRADER_RES value
 * @property {number} PROTO_OA_TRADER_UPDATE_EVENT=2123 PROTO_OA_TRADER_UPDATE_EVENT value
 * @property {number} PROTO_OA_RECONCILE_REQ=2124 PROTO_OA_RECONCILE_REQ value
 * @property {number} PROTO_OA_RECONCILE_RES=2125 PROTO_OA_RECONCILE_RES value
 * @property {number} PROTO_OA_EXECUTION_EVENT=2126 PROTO_OA_EXECUTION_EVENT value
 * @property {number} PROTO_OA_SUBSCRIBE_SPOTS_REQ=2127 PROTO_OA_SUBSCRIBE_SPOTS_REQ value
 * @property {number} PROTO_OA_SUBSCRIBE_SPOTS_RES=2128 PROTO_OA_SUBSCRIBE_SPOTS_RES value
 * @property {number} PROTO_OA_UNSUBSCRIBE_SPOTS_REQ=2129 PROTO_OA_UNSUBSCRIBE_SPOTS_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_SPOTS_RES=2130 PROTO_OA_UNSUBSCRIBE_SPOTS_RES value
 * @property {number} PROTO_OA_SPOT_EVENT=2131 PROTO_OA_SPOT_EVENT value
 * @property {number} PROTO_OA_ORDER_ERROR_EVENT=2132 PROTO_OA_ORDER_ERROR_EVENT value
 * @property {number} PROTO_OA_DEAL_LIST_REQ=2133 PROTO_OA_DEAL_LIST_REQ value
 * @property {number} PROTO_OA_DEAL_LIST_RES=2134 PROTO_OA_DEAL_LIST_RES value
 * @property {number} PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ=2135 PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ=2136 PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ value
 * @property {number} PROTO_OA_GET_TRENDBARS_REQ=2137 PROTO_OA_GET_TRENDBARS_REQ value
 * @property {number} PROTO_OA_GET_TRENDBARS_RES=2138 PROTO_OA_GET_TRENDBARS_RES value
 * @property {number} PROTO_OA_EXPECTED_MARGIN_REQ=2139 PROTO_OA_EXPECTED_MARGIN_REQ value
 * @property {number} PROTO_OA_EXPECTED_MARGIN_RES=2140 PROTO_OA_EXPECTED_MARGIN_RES value
 * @property {number} PROTO_OA_MARGIN_CHANGED_EVENT=2141 PROTO_OA_MARGIN_CHANGED_EVENT value
 * @property {number} PROTO_OA_ERROR_RES=2142 PROTO_OA_ERROR_RES value
 * @property {number} PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ=2143 PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ value
 * @property {number} PROTO_OA_CASH_FLOW_HISTORY_LIST_RES=2144 PROTO_OA_CASH_FLOW_HISTORY_LIST_RES value
 * @property {number} PROTO_OA_GET_TICKDATA_REQ=2145 PROTO_OA_GET_TICKDATA_REQ value
 * @property {number} PROTO_OA_GET_TICKDATA_RES=2146 PROTO_OA_GET_TICKDATA_RES value
 * @property {number} PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT=2147 PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT value
 * @property {number} PROTO_OA_CLIENT_DISCONNECT_EVENT=2148 PROTO_OA_CLIENT_DISCONNECT_EVENT value
 * @property {number} PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ=2149 PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ value
 * @property {number} PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES=2150 PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES value
 * @property {number} PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ=2151 PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ value
 * @property {number} PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES=2152 PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES value
 * @property {number} PROTO_OA_ASSET_CLASS_LIST_REQ=2153 PROTO_OA_ASSET_CLASS_LIST_REQ value
 * @property {number} PROTO_OA_ASSET_CLASS_LIST_RES=2154 PROTO_OA_ASSET_CLASS_LIST_RES value
 * @property {number} PROTO_OA_DEPTH_EVENT=2155 PROTO_OA_DEPTH_EVENT value
 * @property {number} PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ=2156 PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ value
 * @property {number} PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES=2157 PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES value
 * @property {number} PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ=2158 PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ value
 * @property {number} PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES=2159 PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES value
 * @property {number} PROTO_OA_SYMBOL_CATEGORY_REQ=2160 PROTO_OA_SYMBOL_CATEGORY_REQ value
 * @property {number} PROTO_OA_SYMBOL_CATEGORY_RES=2161 PROTO_OA_SYMBOL_CATEGORY_RES value
 * @property {number} PROTO_OA_ACCOUNT_LOGOUT_REQ=2162 PROTO_OA_ACCOUNT_LOGOUT_REQ value
 * @property {number} PROTO_OA_ACCOUNT_LOGOUT_RES=2163 PROTO_OA_ACCOUNT_LOGOUT_RES value
 * @property {number} PROTO_OA_ACCOUNT_DISCONNECT_EVENT=2164 PROTO_OA_ACCOUNT_DISCONNECT_EVENT value
 * @property {number} PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES=2165 PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES value
 * @property {number} PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES=2166 PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES value
 * @property {number} PROTO_OA_MARGIN_CALL_LIST_REQ=2167 PROTO_OA_MARGIN_CALL_LIST_REQ value
 * @property {number} PROTO_OA_MARGIN_CALL_LIST_RES=2168 PROTO_OA_MARGIN_CALL_LIST_RES value
 * @property {number} PROTO_OA_MARGIN_CALL_UPDATE_REQ=2169 PROTO_OA_MARGIN_CALL_UPDATE_REQ value
 * @property {number} PROTO_OA_MARGIN_CALL_UPDATE_RES=2170 PROTO_OA_MARGIN_CALL_UPDATE_RES value
 * @property {number} PROTO_OA_MARGIN_CALL_UPDATE_EVENT=2171 PROTO_OA_MARGIN_CALL_UPDATE_EVENT value
 * @property {number} PROTO_OA_MARGIN_CALL_TRIGGER_EVENT=2172 PROTO_OA_MARGIN_CALL_TRIGGER_EVENT value
 * @property {number} PROTO_OA_REFRESH_TOKEN_REQ=2173 PROTO_OA_REFRESH_TOKEN_REQ value
 * @property {number} PROTO_OA_REFRESH_TOKEN_RES=2174 PROTO_OA_REFRESH_TOKEN_RES value
 * @property {number} PROTO_OA_ORDER_LIST_REQ=2175 PROTO_OA_ORDER_LIST_REQ value
 * @property {number} PROTO_OA_ORDER_LIST_RES=2176 PROTO_OA_ORDER_LIST_RES value
 * @property {number} PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ=2177 PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ value
 * @property {number} PROTO_OA_GET_DYNAMIC_LEVERAGE_RES=2178 PROTO_OA_GET_DYNAMIC_LEVERAGE_RES value
 * @property {number} PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ=2179 PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ value
 * @property {number} PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES=2180 PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES value
 * @property {number} PROTO_OA_ORDER_DETAILS_REQ=2181 PROTO_OA_ORDER_DETAILS_REQ value
 * @property {number} PROTO_OA_ORDER_DETAILS_RES=2182 PROTO_OA_ORDER_DETAILS_RES value
 * @property {number} PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ=2183 PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ value
 * @property {number} PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES=2184 PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES value
 * @property {number} PROTO_OA_DEAL_OFFSET_LIST_REQ=2185 PROTO_OA_DEAL_OFFSET_LIST_REQ value
 * @property {number} PROTO_OA_DEAL_OFFSET_LIST_RES=2186 PROTO_OA_DEAL_OFFSET_LIST_RES value
 * @property {number} PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ=2187 PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ value
 * @property {number} PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES=2188 PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES value
 */
export const ProtoOAPayloadType = ($root.ProtoOAPayloadType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2100] = "PROTO_OA_APPLICATION_AUTH_REQ")] = 2100;
  values[(valuesById[2101] = "PROTO_OA_APPLICATION_AUTH_RES")] = 2101;
  values[(valuesById[2102] = "PROTO_OA_ACCOUNT_AUTH_REQ")] = 2102;
  values[(valuesById[2103] = "PROTO_OA_ACCOUNT_AUTH_RES")] = 2103;
  values[(valuesById[2104] = "PROTO_OA_VERSION_REQ")] = 2104;
  values[(valuesById[2105] = "PROTO_OA_VERSION_RES")] = 2105;
  values[(valuesById[2106] = "PROTO_OA_NEW_ORDER_REQ")] = 2106;
  values[(valuesById[2107] = "PROTO_OA_TRAILING_SL_CHANGED_EVENT")] = 2107;
  values[(valuesById[2108] = "PROTO_OA_CANCEL_ORDER_REQ")] = 2108;
  values[(valuesById[2109] = "PROTO_OA_AMEND_ORDER_REQ")] = 2109;
  values[(valuesById[2110] = "PROTO_OA_AMEND_POSITION_SLTP_REQ")] = 2110;
  values[(valuesById[2111] = "PROTO_OA_CLOSE_POSITION_REQ")] = 2111;
  values[(valuesById[2112] = "PROTO_OA_ASSET_LIST_REQ")] = 2112;
  values[(valuesById[2113] = "PROTO_OA_ASSET_LIST_RES")] = 2113;
  values[(valuesById[2114] = "PROTO_OA_SYMBOLS_LIST_REQ")] = 2114;
  values[(valuesById[2115] = "PROTO_OA_SYMBOLS_LIST_RES")] = 2115;
  values[(valuesById[2116] = "PROTO_OA_SYMBOL_BY_ID_REQ")] = 2116;
  values[(valuesById[2117] = "PROTO_OA_SYMBOL_BY_ID_RES")] = 2117;
  values[(valuesById[2118] = "PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ")] = 2118;
  values[(valuesById[2119] = "PROTO_OA_SYMBOLS_FOR_CONVERSION_RES")] = 2119;
  values[(valuesById[2120] = "PROTO_OA_SYMBOL_CHANGED_EVENT")] = 2120;
  values[(valuesById[2121] = "PROTO_OA_TRADER_REQ")] = 2121;
  values[(valuesById[2122] = "PROTO_OA_TRADER_RES")] = 2122;
  values[(valuesById[2123] = "PROTO_OA_TRADER_UPDATE_EVENT")] = 2123;
  values[(valuesById[2124] = "PROTO_OA_RECONCILE_REQ")] = 2124;
  values[(valuesById[2125] = "PROTO_OA_RECONCILE_RES")] = 2125;
  values[(valuesById[2126] = "PROTO_OA_EXECUTION_EVENT")] = 2126;
  values[(valuesById[2127] = "PROTO_OA_SUBSCRIBE_SPOTS_REQ")] = 2127;
  values[(valuesById[2128] = "PROTO_OA_SUBSCRIBE_SPOTS_RES")] = 2128;
  values[(valuesById[2129] = "PROTO_OA_UNSUBSCRIBE_SPOTS_REQ")] = 2129;
  values[(valuesById[2130] = "PROTO_OA_UNSUBSCRIBE_SPOTS_RES")] = 2130;
  values[(valuesById[2131] = "PROTO_OA_SPOT_EVENT")] = 2131;
  values[(valuesById[2132] = "PROTO_OA_ORDER_ERROR_EVENT")] = 2132;
  values[(valuesById[2133] = "PROTO_OA_DEAL_LIST_REQ")] = 2133;
  values[(valuesById[2134] = "PROTO_OA_DEAL_LIST_RES")] = 2134;
  values[(valuesById[2135] = "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ")] = 2135;
  values[(valuesById[2136] = "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ")] = 2136;
  values[(valuesById[2137] = "PROTO_OA_GET_TRENDBARS_REQ")] = 2137;
  values[(valuesById[2138] = "PROTO_OA_GET_TRENDBARS_RES")] = 2138;
  values[(valuesById[2139] = "PROTO_OA_EXPECTED_MARGIN_REQ")] = 2139;
  values[(valuesById[2140] = "PROTO_OA_EXPECTED_MARGIN_RES")] = 2140;
  values[(valuesById[2141] = "PROTO_OA_MARGIN_CHANGED_EVENT")] = 2141;
  values[(valuesById[2142] = "PROTO_OA_ERROR_RES")] = 2142;
  values[(valuesById[2143] = "PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ")] = 2143;
  values[(valuesById[2144] = "PROTO_OA_CASH_FLOW_HISTORY_LIST_RES")] = 2144;
  values[(valuesById[2145] = "PROTO_OA_GET_TICKDATA_REQ")] = 2145;
  values[(valuesById[2146] = "PROTO_OA_GET_TICKDATA_RES")] = 2146;
  values[(valuesById[2147] = "PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT")] =
    2147;
  values[(valuesById[2148] = "PROTO_OA_CLIENT_DISCONNECT_EVENT")] = 2148;
  values[(valuesById[2149] = "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ")] =
    2149;
  values[(valuesById[2150] = "PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES")] =
    2150;
  values[(valuesById[2151] = "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ")] = 2151;
  values[(valuesById[2152] = "PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES")] = 2152;
  values[(valuesById[2153] = "PROTO_OA_ASSET_CLASS_LIST_REQ")] = 2153;
  values[(valuesById[2154] = "PROTO_OA_ASSET_CLASS_LIST_RES")] = 2154;
  values[(valuesById[2155] = "PROTO_OA_DEPTH_EVENT")] = 2155;
  values[(valuesById[2156] = "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ")] = 2156;
  values[(valuesById[2157] = "PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES")] = 2157;
  values[(valuesById[2158] = "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ")] = 2158;
  values[(valuesById[2159] = "PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES")] = 2159;
  values[(valuesById[2160] = "PROTO_OA_SYMBOL_CATEGORY_REQ")] = 2160;
  values[(valuesById[2161] = "PROTO_OA_SYMBOL_CATEGORY_RES")] = 2161;
  values[(valuesById[2162] = "PROTO_OA_ACCOUNT_LOGOUT_REQ")] = 2162;
  values[(valuesById[2163] = "PROTO_OA_ACCOUNT_LOGOUT_RES")] = 2163;
  values[(valuesById[2164] = "PROTO_OA_ACCOUNT_DISCONNECT_EVENT")] = 2164;
  values[(valuesById[2165] = "PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES")] = 2165;
  values[(valuesById[2166] = "PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES")] = 2166;
  values[(valuesById[2167] = "PROTO_OA_MARGIN_CALL_LIST_REQ")] = 2167;
  values[(valuesById[2168] = "PROTO_OA_MARGIN_CALL_LIST_RES")] = 2168;
  values[(valuesById[2169] = "PROTO_OA_MARGIN_CALL_UPDATE_REQ")] = 2169;
  values[(valuesById[2170] = "PROTO_OA_MARGIN_CALL_UPDATE_RES")] = 2170;
  values[(valuesById[2171] = "PROTO_OA_MARGIN_CALL_UPDATE_EVENT")] = 2171;
  values[(valuesById[2172] = "PROTO_OA_MARGIN_CALL_TRIGGER_EVENT")] = 2172;
  values[(valuesById[2173] = "PROTO_OA_REFRESH_TOKEN_REQ")] = 2173;
  values[(valuesById[2174] = "PROTO_OA_REFRESH_TOKEN_RES")] = 2174;
  values[(valuesById[2175] = "PROTO_OA_ORDER_LIST_REQ")] = 2175;
  values[(valuesById[2176] = "PROTO_OA_ORDER_LIST_RES")] = 2176;
  values[(valuesById[2177] = "PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ")] = 2177;
  values[(valuesById[2178] = "PROTO_OA_GET_DYNAMIC_LEVERAGE_RES")] = 2178;
  values[(valuesById[2179] = "PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ")] = 2179;
  values[(valuesById[2180] = "PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES")] = 2180;
  values[(valuesById[2181] = "PROTO_OA_ORDER_DETAILS_REQ")] = 2181;
  values[(valuesById[2182] = "PROTO_OA_ORDER_DETAILS_RES")] = 2182;
  values[(valuesById[2183] = "PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ")] = 2183;
  values[(valuesById[2184] = "PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES")] = 2184;
  values[(valuesById[2185] = "PROTO_OA_DEAL_OFFSET_LIST_REQ")] = 2185;
  values[(valuesById[2186] = "PROTO_OA_DEAL_OFFSET_LIST_RES")] = 2186;
  values[(valuesById[2187] = "PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ")] =
    2187;
  values[(valuesById[2188] = "PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES")] =
    2188;
  return values;
})());

/**
 * ProtoOADayOfWeek enum.
 * @exports ProtoOADayOfWeek
 * @enum {number}
 * @property {number} NONE=0 NONE value
 * @property {number} MONDAY=1 MONDAY value
 * @property {number} TUESDAY=2 TUESDAY value
 * @property {number} WEDNESDAY=3 WEDNESDAY value
 * @property {number} THURSDAY=4 THURSDAY value
 * @property {number} FRIDAY=5 FRIDAY value
 * @property {number} SATURDAY=6 SATURDAY value
 * @property {number} SUNDAY=7 SUNDAY value
 */
export const ProtoOADayOfWeek = ($root.ProtoOADayOfWeek = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "NONE")] = 0;
  values[(valuesById[1] = "MONDAY")] = 1;
  values[(valuesById[2] = "TUESDAY")] = 2;
  values[(valuesById[3] = "WEDNESDAY")] = 3;
  values[(valuesById[4] = "THURSDAY")] = 4;
  values[(valuesById[5] = "FRIDAY")] = 5;
  values[(valuesById[6] = "SATURDAY")] = 6;
  values[(valuesById[7] = "SUNDAY")] = 7;
  return values;
})());

/**
 * ProtoOACommissionType enum.
 * @exports ProtoOACommissionType
 * @enum {number}
 * @property {number} USD_PER_MILLION_USD=1 USD_PER_MILLION_USD value
 * @property {number} USD_PER_LOT=2 USD_PER_LOT value
 * @property {number} PERCENTAGE_OF_VALUE=3 PERCENTAGE_OF_VALUE value
 * @property {number} QUOTE_CCY_PER_LOT=4 QUOTE_CCY_PER_LOT value
 */
export const ProtoOACommissionType = ($root.ProtoOACommissionType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "USD_PER_MILLION_USD")] = 1;
  values[(valuesById[2] = "USD_PER_LOT")] = 2;
  values[(valuesById[3] = "PERCENTAGE_OF_VALUE")] = 3;
  values[(valuesById[4] = "QUOTE_CCY_PER_LOT")] = 4;
  return values;
})());

/**
 * ProtoOASymbolDistanceType enum.
 * @exports ProtoOASymbolDistanceType
 * @enum {number}
 * @property {number} SYMBOL_DISTANCE_IN_POINTS=1 SYMBOL_DISTANCE_IN_POINTS value
 * @property {number} SYMBOL_DISTANCE_IN_PERCENTAGE=2 SYMBOL_DISTANCE_IN_PERCENTAGE value
 */
export const ProtoOASymbolDistanceType = ($root.ProtoOASymbolDistanceType =
  (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[1] = "SYMBOL_DISTANCE_IN_POINTS")] = 1;
    values[(valuesById[2] = "SYMBOL_DISTANCE_IN_PERCENTAGE")] = 2;
    return values;
  })());

/**
 * ProtoOAMinCommissionType enum.
 * @exports ProtoOAMinCommissionType
 * @enum {number}
 * @property {number} CURRENCY=1 CURRENCY value
 * @property {number} QUOTE_CURRENCY=2 QUOTE_CURRENCY value
 */
export const ProtoOAMinCommissionType = ($root.ProtoOAMinCommissionType =
  (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[1] = "CURRENCY")] = 1;
    values[(valuesById[2] = "QUOTE_CURRENCY")] = 2;
    return values;
  })());

/**
 * ProtoOATradingMode enum.
 * @exports ProtoOATradingMode
 * @enum {number}
 * @property {number} ENABLED=0 ENABLED value
 * @property {number} DISABLED_WITHOUT_PENDINGS_EXECUTION=1 DISABLED_WITHOUT_PENDINGS_EXECUTION value
 * @property {number} DISABLED_WITH_PENDINGS_EXECUTION=2 DISABLED_WITH_PENDINGS_EXECUTION value
 * @property {number} CLOSE_ONLY_MODE=3 CLOSE_ONLY_MODE value
 */
export const ProtoOATradingMode = ($root.ProtoOATradingMode = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "ENABLED")] = 0;
  values[(valuesById[1] = "DISABLED_WITHOUT_PENDINGS_EXECUTION")] = 1;
  values[(valuesById[2] = "DISABLED_WITH_PENDINGS_EXECUTION")] = 2;
  values[(valuesById[3] = "CLOSE_ONLY_MODE")] = 3;
  return values;
})());

/**
 * ProtoOASwapCalculationType enum.
 * @exports ProtoOASwapCalculationType
 * @enum {number}
 * @property {number} PIPS=0 PIPS value
 * @property {number} PERCENTAGE=1 PERCENTAGE value
 */
export const ProtoOASwapCalculationType = ($root.ProtoOASwapCalculationType =
  (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "PIPS")] = 0;
    values[(valuesById[1] = "PERCENTAGE")] = 1;
    return values;
  })());

/**
 * ProtoOAAccessRights enum.
 * @exports ProtoOAAccessRights
 * @enum {number}
 * @property {number} FULL_ACCESS=0 FULL_ACCESS value
 * @property {number} CLOSE_ONLY=1 CLOSE_ONLY value
 * @property {number} NO_TRADING=2 NO_TRADING value
 * @property {number} NO_LOGIN=3 NO_LOGIN value
 */
export const ProtoOAAccessRights = ($root.ProtoOAAccessRights = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "FULL_ACCESS")] = 0;
  values[(valuesById[1] = "CLOSE_ONLY")] = 1;
  values[(valuesById[2] = "NO_TRADING")] = 2;
  values[(valuesById[3] = "NO_LOGIN")] = 3;
  return values;
})());

/**
 * ProtoOATotalMarginCalculationType enum.
 * @exports ProtoOATotalMarginCalculationType
 * @enum {number}
 * @property {number} MAX=0 MAX value
 * @property {number} SUM=1 SUM value
 * @property {number} NET=2 NET value
 */
export const ProtoOATotalMarginCalculationType =
  ($root.ProtoOATotalMarginCalculationType = (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "MAX")] = 0;
    values[(valuesById[1] = "SUM")] = 1;
    values[(valuesById[2] = "NET")] = 2;
    return values;
  })());

/**
 * ProtoOAAccountType enum.
 * @exports ProtoOAAccountType
 * @enum {number}
 * @property {number} HEDGED=0 HEDGED value
 * @property {number} NETTED=1 NETTED value
 * @property {number} SPREAD_BETTING=2 SPREAD_BETTING value
 */
export const ProtoOAAccountType = ($root.ProtoOAAccountType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "HEDGED")] = 0;
  values[(valuesById[1] = "NETTED")] = 1;
  values[(valuesById[2] = "SPREAD_BETTING")] = 2;
  return values;
})());

/**
 * ProtoOAPositionStatus enum.
 * @exports ProtoOAPositionStatus
 * @enum {number}
 * @property {number} POSITION_STATUS_OPEN=1 POSITION_STATUS_OPEN value
 * @property {number} POSITION_STATUS_CLOSED=2 POSITION_STATUS_CLOSED value
 * @property {number} POSITION_STATUS_CREATED=3 POSITION_STATUS_CREATED value
 * @property {number} POSITION_STATUS_ERROR=4 POSITION_STATUS_ERROR value
 */
export const ProtoOAPositionStatus = ($root.ProtoOAPositionStatus = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "POSITION_STATUS_OPEN")] = 1;
  values[(valuesById[2] = "POSITION_STATUS_CLOSED")] = 2;
  values[(valuesById[3] = "POSITION_STATUS_CREATED")] = 3;
  values[(valuesById[4] = "POSITION_STATUS_ERROR")] = 4;
  return values;
})());

/**
 * ProtoOATradeSide enum.
 * @exports ProtoOATradeSide
 * @enum {number}
 * @property {number} BUY=1 BUY value
 * @property {number} SELL=2 SELL value
 */
export const ProtoOATradeSide = ($root.ProtoOATradeSide = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "BUY")] = 1;
  values[(valuesById[2] = "SELL")] = 2;
  return values;
})());

/**
 * ProtoOAOrderType enum.
 * @exports ProtoOAOrderType
 * @enum {number}
 * @property {number} MARKET=1 MARKET value
 * @property {number} LIMIT=2 LIMIT value
 * @property {number} STOP=3 STOP value
 * @property {number} STOP_LOSS_TAKE_PROFIT=4 STOP_LOSS_TAKE_PROFIT value
 * @property {number} MARKET_RANGE=5 MARKET_RANGE value
 * @property {number} STOP_LIMIT=6 STOP_LIMIT value
 */
export const ProtoOAOrderType = ($root.ProtoOAOrderType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "MARKET")] = 1;
  values[(valuesById[2] = "LIMIT")] = 2;
  values[(valuesById[3] = "STOP")] = 3;
  values[(valuesById[4] = "STOP_LOSS_TAKE_PROFIT")] = 4;
  values[(valuesById[5] = "MARKET_RANGE")] = 5;
  values[(valuesById[6] = "STOP_LIMIT")] = 6;
  return values;
})());

/**
 * ProtoOATimeInForce enum.
 * @exports ProtoOATimeInForce
 * @enum {number}
 * @property {number} GOOD_TILL_DATE=1 GOOD_TILL_DATE value
 * @property {number} GOOD_TILL_CANCEL=2 GOOD_TILL_CANCEL value
 * @property {number} IMMEDIATE_OR_CANCEL=3 IMMEDIATE_OR_CANCEL value
 * @property {number} FILL_OR_KILL=4 FILL_OR_KILL value
 * @property {number} MARKET_ON_OPEN=5 MARKET_ON_OPEN value
 */
export const ProtoOATimeInForce = ($root.ProtoOATimeInForce = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "GOOD_TILL_DATE")] = 1;
  values[(valuesById[2] = "GOOD_TILL_CANCEL")] = 2;
  values[(valuesById[3] = "IMMEDIATE_OR_CANCEL")] = 3;
  values[(valuesById[4] = "FILL_OR_KILL")] = 4;
  values[(valuesById[5] = "MARKET_ON_OPEN")] = 5;
  return values;
})());

/**
 * ProtoOAOrderStatus enum.
 * @exports ProtoOAOrderStatus
 * @enum {number}
 * @property {number} ORDER_STATUS_ACCEPTED=1 ORDER_STATUS_ACCEPTED value
 * @property {number} ORDER_STATUS_FILLED=2 ORDER_STATUS_FILLED value
 * @property {number} ORDER_STATUS_REJECTED=3 ORDER_STATUS_REJECTED value
 * @property {number} ORDER_STATUS_EXPIRED=4 ORDER_STATUS_EXPIRED value
 * @property {number} ORDER_STATUS_CANCELLED=5 ORDER_STATUS_CANCELLED value
 */
export const ProtoOAOrderStatus = ($root.ProtoOAOrderStatus = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "ORDER_STATUS_ACCEPTED")] = 1;
  values[(valuesById[2] = "ORDER_STATUS_FILLED")] = 2;
  values[(valuesById[3] = "ORDER_STATUS_REJECTED")] = 3;
  values[(valuesById[4] = "ORDER_STATUS_EXPIRED")] = 4;
  values[(valuesById[5] = "ORDER_STATUS_CANCELLED")] = 5;
  return values;
})());

/**
 * ProtoOAOrderTriggerMethod enum.
 * @exports ProtoOAOrderTriggerMethod
 * @enum {number}
 * @property {number} TRADE=1 TRADE value
 * @property {number} OPPOSITE=2 OPPOSITE value
 * @property {number} DOUBLE_TRADE=3 DOUBLE_TRADE value
 * @property {number} DOUBLE_OPPOSITE=4 DOUBLE_OPPOSITE value
 */
export const ProtoOAOrderTriggerMethod = ($root.ProtoOAOrderTriggerMethod =
  (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[1] = "TRADE")] = 1;
    values[(valuesById[2] = "OPPOSITE")] = 2;
    values[(valuesById[3] = "DOUBLE_TRADE")] = 3;
    values[(valuesById[4] = "DOUBLE_OPPOSITE")] = 4;
    return values;
  })());

/**
 * ProtoOAExecutionType enum.
 * @exports ProtoOAExecutionType
 * @enum {number}
 * @property {number} ORDER_ACCEPTED=2 ORDER_ACCEPTED value
 * @property {number} ORDER_FILLED=3 ORDER_FILLED value
 * @property {number} ORDER_REPLACED=4 ORDER_REPLACED value
 * @property {number} ORDER_CANCELLED=5 ORDER_CANCELLED value
 * @property {number} ORDER_EXPIRED=6 ORDER_EXPIRED value
 * @property {number} ORDER_REJECTED=7 ORDER_REJECTED value
 * @property {number} ORDER_CANCEL_REJECTED=8 ORDER_CANCEL_REJECTED value
 * @property {number} SWAP=9 SWAP value
 * @property {number} DEPOSIT_WITHDRAW=10 DEPOSIT_WITHDRAW value
 * @property {number} ORDER_PARTIAL_FILL=11 ORDER_PARTIAL_FILL value
 * @property {number} BONUS_DEPOSIT_WITHDRAW=12 BONUS_DEPOSIT_WITHDRAW value
 */
export const ProtoOAExecutionType = ($root.ProtoOAExecutionType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2] = "ORDER_ACCEPTED")] = 2;
  values[(valuesById[3] = "ORDER_FILLED")] = 3;
  values[(valuesById[4] = "ORDER_REPLACED")] = 4;
  values[(valuesById[5] = "ORDER_CANCELLED")] = 5;
  values[(valuesById[6] = "ORDER_EXPIRED")] = 6;
  values[(valuesById[7] = "ORDER_REJECTED")] = 7;
  values[(valuesById[8] = "ORDER_CANCEL_REJECTED")] = 8;
  values[(valuesById[9] = "SWAP")] = 9;
  values[(valuesById[10] = "DEPOSIT_WITHDRAW")] = 10;
  values[(valuesById[11] = "ORDER_PARTIAL_FILL")] = 11;
  values[(valuesById[12] = "BONUS_DEPOSIT_WITHDRAW")] = 12;
  return values;
})());

/**
 * ProtoOAChangeBonusType enum.
 * @exports ProtoOAChangeBonusType
 * @enum {number}
 * @property {number} BONUS_DEPOSIT=0 BONUS_DEPOSIT value
 * @property {number} BONUS_WITHDRAW=1 BONUS_WITHDRAW value
 */
export const ProtoOAChangeBonusType = ($root.ProtoOAChangeBonusType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[0] = "BONUS_DEPOSIT")] = 0;
  values[(valuesById[1] = "BONUS_WITHDRAW")] = 1;
  return values;
})());

/**
 * ProtoOAChangeBalanceType enum.
 * @exports ProtoOAChangeBalanceType
 * @enum {number}
 * @property {number} BALANCE_DEPOSIT=0 BALANCE_DEPOSIT value
 * @property {number} BALANCE_WITHDRAW=1 BALANCE_WITHDRAW value
 * @property {number} BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER=3 BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER value
 * @property {number} BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER=4 BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER value
 * @property {number} BALANCE_DEPOSIT_IB_COMMISSIONS=5 BALANCE_DEPOSIT_IB_COMMISSIONS value
 * @property {number} BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE=6 BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE value
 * @property {number} BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB=7 BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB value
 * @property {number} BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER=8 BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER value
 * @property {number} BALANCE_DEPOSIT_REBATE=9 BALANCE_DEPOSIT_REBATE value
 * @property {number} BALANCE_WITHDRAW_REBATE=10 BALANCE_WITHDRAW_REBATE value
 * @property {number} BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER=11 BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER value
 * @property {number} BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER=12 BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER value
 * @property {number} BALANCE_WITHDRAW_BONUS_COMPENSATION=13 BALANCE_WITHDRAW_BONUS_COMPENSATION value
 * @property {number} BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER=14 BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER value
 * @property {number} BALANCE_DEPOSIT_DIVIDENDS=15 BALANCE_DEPOSIT_DIVIDENDS value
 * @property {number} BALANCE_WITHDRAW_DIVIDENDS=16 BALANCE_WITHDRAW_DIVIDENDS value
 * @property {number} BALANCE_WITHDRAW_GSL_CHARGE=17 BALANCE_WITHDRAW_GSL_CHARGE value
 * @property {number} BALANCE_WITHDRAW_ROLLOVER=18 BALANCE_WITHDRAW_ROLLOVER value
 * @property {number} BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS=19 BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS value
 * @property {number} BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS=20 BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS value
 * @property {number} BALANCE_DEPOSIT_SWAP=21 BALANCE_DEPOSIT_SWAP value
 * @property {number} BALANCE_WITHDRAW_SWAP=22 BALANCE_WITHDRAW_SWAP value
 * @property {number} BALANCE_DEPOSIT_MANAGEMENT_FEE=27 BALANCE_DEPOSIT_MANAGEMENT_FEE value
 * @property {number} BALANCE_WITHDRAW_MANAGEMENT_FEE=28 BALANCE_WITHDRAW_MANAGEMENT_FEE value
 * @property {number} BALANCE_DEPOSIT_PERFORMANCE_FEE=29 BALANCE_DEPOSIT_PERFORMANCE_FEE value
 * @property {number} BALANCE_WITHDRAW_FOR_SUBACCOUNT=30 BALANCE_WITHDRAW_FOR_SUBACCOUNT value
 * @property {number} BALANCE_DEPOSIT_TO_SUBACCOUNT=31 BALANCE_DEPOSIT_TO_SUBACCOUNT value
 * @property {number} BALANCE_WITHDRAW_FROM_SUBACCOUNT=32 BALANCE_WITHDRAW_FROM_SUBACCOUNT value
 * @property {number} BALANCE_DEPOSIT_FROM_SUBACCOUNT=33 BALANCE_DEPOSIT_FROM_SUBACCOUNT value
 * @property {number} BALANCE_WITHDRAW_COPY_FEE=34 BALANCE_WITHDRAW_COPY_FEE value
 * @property {number} BALANCE_WITHDRAW_INACTIVITY_FEE=35 BALANCE_WITHDRAW_INACTIVITY_FEE value
 * @property {number} BALANCE_DEPOSIT_TRANSFER=36 BALANCE_DEPOSIT_TRANSFER value
 * @property {number} BALANCE_WITHDRAW_TRANSFER=37 BALANCE_WITHDRAW_TRANSFER value
 * @property {number} BALANCE_DEPOSIT_CONVERTED_BONUS=38 BALANCE_DEPOSIT_CONVERTED_BONUS value
 * @property {number} BALANCE_DEPOSIT_NEGATIVE_BALANCE_PROTECTION=39 BALANCE_DEPOSIT_NEGATIVE_BALANCE_PROTECTION value
 */
export const ProtoOAChangeBalanceType = ($root.ProtoOAChangeBalanceType =
  (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "BALANCE_DEPOSIT")] = 0;
    values[(valuesById[1] = "BALANCE_WITHDRAW")] = 1;
    values[(valuesById[3] = "BALANCE_DEPOSIT_STRATEGY_COMMISSION_INNER")] = 3;
    values[(valuesById[4] = "BALANCE_WITHDRAW_STRATEGY_COMMISSION_INNER")] = 4;
    values[(valuesById[5] = "BALANCE_DEPOSIT_IB_COMMISSIONS")] = 5;
    values[(valuesById[6] = "BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE")] = 6;
    values[
      (valuesById[7] = "BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_SUB_IB")
    ] = 7;
    values[
      (valuesById[8] = "BALANCE_DEPOSIT_IB_SHARED_PERCENTAGE_FROM_BROKER")
    ] = 8;
    values[(valuesById[9] = "BALANCE_DEPOSIT_REBATE")] = 9;
    values[(valuesById[10] = "BALANCE_WITHDRAW_REBATE")] = 10;
    values[(valuesById[11] = "BALANCE_DEPOSIT_STRATEGY_COMMISSION_OUTER")] = 11;
    values[(valuesById[12] = "BALANCE_WITHDRAW_STRATEGY_COMMISSION_OUTER")] =
      12;
    values[(valuesById[13] = "BALANCE_WITHDRAW_BONUS_COMPENSATION")] = 13;
    values[
      (valuesById[14] = "BALANCE_WITHDRAW_IB_SHARED_PERCENTAGE_TO_BROKER")
    ] = 14;
    values[(valuesById[15] = "BALANCE_DEPOSIT_DIVIDENDS")] = 15;
    values[(valuesById[16] = "BALANCE_WITHDRAW_DIVIDENDS")] = 16;
    values[(valuesById[17] = "BALANCE_WITHDRAW_GSL_CHARGE")] = 17;
    values[(valuesById[18] = "BALANCE_WITHDRAW_ROLLOVER")] = 18;
    values[(valuesById[19] = "BALANCE_DEPOSIT_NONWITHDRAWABLE_BONUS")] = 19;
    values[(valuesById[20] = "BALANCE_WITHDRAW_NONWITHDRAWABLE_BONUS")] = 20;
    values[(valuesById[21] = "BALANCE_DEPOSIT_SWAP")] = 21;
    values[(valuesById[22] = "BALANCE_WITHDRAW_SWAP")] = 22;
    values[(valuesById[27] = "BALANCE_DEPOSIT_MANAGEMENT_FEE")] = 27;
    values[(valuesById[28] = "BALANCE_WITHDRAW_MANAGEMENT_FEE")] = 28;
    values[(valuesById[29] = "BALANCE_DEPOSIT_PERFORMANCE_FEE")] = 29;
    values[(valuesById[30] = "BALANCE_WITHDRAW_FOR_SUBACCOUNT")] = 30;
    values[(valuesById[31] = "BALANCE_DEPOSIT_TO_SUBACCOUNT")] = 31;
    values[(valuesById[32] = "BALANCE_WITHDRAW_FROM_SUBACCOUNT")] = 32;
    values[(valuesById[33] = "BALANCE_DEPOSIT_FROM_SUBACCOUNT")] = 33;
    values[(valuesById[34] = "BALANCE_WITHDRAW_COPY_FEE")] = 34;
    values[(valuesById[35] = "BALANCE_WITHDRAW_INACTIVITY_FEE")] = 35;
    values[(valuesById[36] = "BALANCE_DEPOSIT_TRANSFER")] = 36;
    values[(valuesById[37] = "BALANCE_WITHDRAW_TRANSFER")] = 37;
    values[(valuesById[38] = "BALANCE_DEPOSIT_CONVERTED_BONUS")] = 38;
    values[(valuesById[39] = "BALANCE_DEPOSIT_NEGATIVE_BALANCE_PROTECTION")] =
      39;
    return values;
  })());

/**
 * ProtoOADealStatus enum.
 * @exports ProtoOADealStatus
 * @enum {number}
 * @property {number} FILLED=2 FILLED value
 * @property {number} PARTIALLY_FILLED=3 PARTIALLY_FILLED value
 * @property {number} REJECTED=4 REJECTED value
 * @property {number} INTERNALLY_REJECTED=5 INTERNALLY_REJECTED value
 * @property {number} ERROR=6 ERROR value
 * @property {number} MISSED=7 MISSED value
 */
export const ProtoOADealStatus = ($root.ProtoOADealStatus = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[2] = "FILLED")] = 2;
  values[(valuesById[3] = "PARTIALLY_FILLED")] = 3;
  values[(valuesById[4] = "REJECTED")] = 4;
  values[(valuesById[5] = "INTERNALLY_REJECTED")] = 5;
  values[(valuesById[6] = "ERROR")] = 6;
  values[(valuesById[7] = "MISSED")] = 7;
  return values;
})());

/**
 * ProtoOATrendbarPeriod enum.
 * @exports ProtoOATrendbarPeriod
 * @enum {number}
 * @property {number} M1=1 M1 value
 * @property {number} M2=2 M2 value
 * @property {number} M3=3 M3 value
 * @property {number} M4=4 M4 value
 * @property {number} M5=5 M5 value
 * @property {number} M10=6 M10 value
 * @property {number} M15=7 M15 value
 * @property {number} M30=8 M30 value
 * @property {number} H1=9 H1 value
 * @property {number} H4=10 H4 value
 * @property {number} H12=11 H12 value
 * @property {number} D1=12 D1 value
 * @property {number} W1=13 W1 value
 * @property {number} MN1=14 MN1 value
 */
export const ProtoOATrendbarPeriod = ($root.ProtoOATrendbarPeriod = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "M1")] = 1;
  values[(valuesById[2] = "M2")] = 2;
  values[(valuesById[3] = "M3")] = 3;
  values[(valuesById[4] = "M4")] = 4;
  values[(valuesById[5] = "M5")] = 5;
  values[(valuesById[6] = "M10")] = 6;
  values[(valuesById[7] = "M15")] = 7;
  values[(valuesById[8] = "M30")] = 8;
  values[(valuesById[9] = "H1")] = 9;
  values[(valuesById[10] = "H4")] = 10;
  values[(valuesById[11] = "H12")] = 11;
  values[(valuesById[12] = "D1")] = 12;
  values[(valuesById[13] = "W1")] = 13;
  values[(valuesById[14] = "MN1")] = 14;
  return values;
})());

/**
 * ProtoOAQuoteType enum.
 * @exports ProtoOAQuoteType
 * @enum {number}
 * @property {number} BID=1 BID value
 * @property {number} ASK=2 ASK value
 */
export const ProtoOAQuoteType = ($root.ProtoOAQuoteType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "BID")] = 1;
  values[(valuesById[2] = "ASK")] = 2;
  return values;
})());

/**
 * ProtoOAClientPermissionScope enum.
 * @exports ProtoOAClientPermissionScope
 * @enum {number}
 * @property {number} SCOPE_VIEW=0 SCOPE_VIEW value
 * @property {number} SCOPE_TRADE=1 SCOPE_TRADE value
 */
export const ProtoOAClientPermissionScope =
  ($root.ProtoOAClientPermissionScope = (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "SCOPE_VIEW")] = 0;
    values[(valuesById[1] = "SCOPE_TRADE")] = 1;
    return values;
  })());

/**
 * ProtoOANotificationType enum.
 * @exports ProtoOANotificationType
 * @enum {number}
 * @property {number} MARGIN_LEVEL_THRESHOLD_1=61 MARGIN_LEVEL_THRESHOLD_1 value
 * @property {number} MARGIN_LEVEL_THRESHOLD_2=62 MARGIN_LEVEL_THRESHOLD_2 value
 * @property {number} MARGIN_LEVEL_THRESHOLD_3=63 MARGIN_LEVEL_THRESHOLD_3 value
 */
export const ProtoOANotificationType = ($root.ProtoOANotificationType = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[61] = "MARGIN_LEVEL_THRESHOLD_1")] = 61;
  values[(valuesById[62] = "MARGIN_LEVEL_THRESHOLD_2")] = 62;
  values[(valuesById[63] = "MARGIN_LEVEL_THRESHOLD_3")] = 63;
  return values;
})());

/**
 * ProtoOAErrorCode enum.
 * @exports ProtoOAErrorCode
 * @enum {number}
 * @property {number} OA_AUTH_TOKEN_EXPIRED=1 OA_AUTH_TOKEN_EXPIRED value
 * @property {number} ACCOUNT_NOT_AUTHORIZED=2 ACCOUNT_NOT_AUTHORIZED value
 * @property {number} ALREADY_LOGGED_IN=14 ALREADY_LOGGED_IN value
 * @property {number} INCORRECT_BOUNDARIES=35 INCORRECT_BOUNDARIES value
 * @property {number} CONNECTIONS_LIMIT_EXCEEDED=67 CONNECTIONS_LIMIT_EXCEEDED value
 * @property {number} WORSE_GSL_NOT_ALLOWED=68 WORSE_GSL_NOT_ALLOWED value
 * @property {number} SYMBOL_HAS_HOLIDAY=69 SYMBOL_HAS_HOLIDAY value
 * @property {number} CH_CLIENT_AUTH_FAILURE=101 CH_CLIENT_AUTH_FAILURE value
 * @property {number} CH_CLIENT_NOT_AUTHENTICATED=102 CH_CLIENT_NOT_AUTHENTICATED value
 * @property {number} CH_CLIENT_ALREADY_AUTHENTICATED=103 CH_CLIENT_ALREADY_AUTHENTICATED value
 * @property {number} CH_ACCESS_TOKEN_INVALID=104 CH_ACCESS_TOKEN_INVALID value
 * @property {number} CH_SERVER_NOT_REACHABLE=105 CH_SERVER_NOT_REACHABLE value
 * @property {number} CH_CTID_TRADER_ACCOUNT_NOT_FOUND=106 CH_CTID_TRADER_ACCOUNT_NOT_FOUND value
 * @property {number} CH_OA_CLIENT_NOT_FOUND=107 CH_OA_CLIENT_NOT_FOUND value
 * @property {number} REQUEST_FREQUENCY_EXCEEDED=108 REQUEST_FREQUENCY_EXCEEDED value
 * @property {number} SERVER_IS_UNDER_MAINTENANCE=109 SERVER_IS_UNDER_MAINTENANCE value
 * @property {number} CHANNEL_IS_BLOCKED=110 CHANNEL_IS_BLOCKED value
 * @property {number} NOT_SUBSCRIBED_TO_SPOTS=112 NOT_SUBSCRIBED_TO_SPOTS value
 * @property {number} ALREADY_SUBSCRIBED=113 ALREADY_SUBSCRIBED value
 * @property {number} SYMBOL_NOT_FOUND=114 SYMBOL_NOT_FOUND value
 * @property {number} UNKNOWN_SYMBOL=115 UNKNOWN_SYMBOL value
 * @property {number} NO_QUOTES=117 NO_QUOTES value
 * @property {number} NOT_ENOUGH_MONEY=118 NOT_ENOUGH_MONEY value
 * @property {number} MAX_EXPOSURE_REACHED=119 MAX_EXPOSURE_REACHED value
 * @property {number} POSITION_NOT_FOUND=120 POSITION_NOT_FOUND value
 * @property {number} ORDER_NOT_FOUND=121 ORDER_NOT_FOUND value
 * @property {number} POSITION_NOT_OPEN=122 POSITION_NOT_OPEN value
 * @property {number} POSITION_LOCKED=123 POSITION_LOCKED value
 * @property {number} TOO_MANY_POSITIONS=124 TOO_MANY_POSITIONS value
 * @property {number} TRADING_BAD_VOLUME=125 TRADING_BAD_VOLUME value
 * @property {number} TRADING_BAD_STOPS=126 TRADING_BAD_STOPS value
 * @property {number} TRADING_BAD_PRICES=127 TRADING_BAD_PRICES value
 * @property {number} TRADING_BAD_STAKE=128 TRADING_BAD_STAKE value
 * @property {number} PROTECTION_IS_TOO_CLOSE_TO_MARKET=129 PROTECTION_IS_TOO_CLOSE_TO_MARKET value
 * @property {number} TRADING_BAD_EXPIRATION_DATE=130 TRADING_BAD_EXPIRATION_DATE value
 * @property {number} PENDING_EXECUTION=131 PENDING_EXECUTION value
 * @property {number} TRADING_DISABLED=132 TRADING_DISABLED value
 * @property {number} TRADING_NOT_ALLOWED=133 TRADING_NOT_ALLOWED value
 * @property {number} UNABLE_TO_CANCEL_ORDER=134 UNABLE_TO_CANCEL_ORDER value
 * @property {number} UNABLE_TO_AMEND_ORDER=135 UNABLE_TO_AMEND_ORDER value
 * @property {number} SHORT_SELLING_NOT_ALLOWED=136 SHORT_SELLING_NOT_ALLOWED value
 */
export const ProtoOAErrorCode = ($root.ProtoOAErrorCode = (() => {
  const valuesById = {},
    values = Object.create(valuesById);
  values[(valuesById[1] = "OA_AUTH_TOKEN_EXPIRED")] = 1;
  values[(valuesById[2] = "ACCOUNT_NOT_AUTHORIZED")] = 2;
  values[(valuesById[14] = "ALREADY_LOGGED_IN")] = 14;
  values[(valuesById[35] = "INCORRECT_BOUNDARIES")] = 35;
  values[(valuesById[67] = "CONNECTIONS_LIMIT_EXCEEDED")] = 67;
  values[(valuesById[68] = "WORSE_GSL_NOT_ALLOWED")] = 68;
  values[(valuesById[69] = "SYMBOL_HAS_HOLIDAY")] = 69;
  values[(valuesById[101] = "CH_CLIENT_AUTH_FAILURE")] = 101;
  values[(valuesById[102] = "CH_CLIENT_NOT_AUTHENTICATED")] = 102;
  values[(valuesById[103] = "CH_CLIENT_ALREADY_AUTHENTICATED")] = 103;
  values[(valuesById[104] = "CH_ACCESS_TOKEN_INVALID")] = 104;
  values[(valuesById[105] = "CH_SERVER_NOT_REACHABLE")] = 105;
  values[(valuesById[106] = "CH_CTID_TRADER_ACCOUNT_NOT_FOUND")] = 106;
  values[(valuesById[107] = "CH_OA_CLIENT_NOT_FOUND")] = 107;
  values[(valuesById[108] = "REQUEST_FREQUENCY_EXCEEDED")] = 108;
  values[(valuesById[109] = "SERVER_IS_UNDER_MAINTENANCE")] = 109;
  values[(valuesById[110] = "CHANNEL_IS_BLOCKED")] = 110;
  values[(valuesById[112] = "NOT_SUBSCRIBED_TO_SPOTS")] = 112;
  values[(valuesById[113] = "ALREADY_SUBSCRIBED")] = 113;
  values[(valuesById[114] = "SYMBOL_NOT_FOUND")] = 114;
  values[(valuesById[115] = "UNKNOWN_SYMBOL")] = 115;
  values[(valuesById[117] = "NO_QUOTES")] = 117;
  values[(valuesById[118] = "NOT_ENOUGH_MONEY")] = 118;
  values[(valuesById[119] = "MAX_EXPOSURE_REACHED")] = 119;
  values[(valuesById[120] = "POSITION_NOT_FOUND")] = 120;
  values[(valuesById[121] = "ORDER_NOT_FOUND")] = 121;
  values[(valuesById[122] = "POSITION_NOT_OPEN")] = 122;
  values[(valuesById[123] = "POSITION_LOCKED")] = 123;
  values[(valuesById[124] = "TOO_MANY_POSITIONS")] = 124;
  values[(valuesById[125] = "TRADING_BAD_VOLUME")] = 125;
  values[(valuesById[126] = "TRADING_BAD_STOPS")] = 126;
  values[(valuesById[127] = "TRADING_BAD_PRICES")] = 127;
  values[(valuesById[128] = "TRADING_BAD_STAKE")] = 128;
  values[(valuesById[129] = "PROTECTION_IS_TOO_CLOSE_TO_MARKET")] = 129;
  values[(valuesById[130] = "TRADING_BAD_EXPIRATION_DATE")] = 130;
  values[(valuesById[131] = "PENDING_EXECUTION")] = 131;
  values[(valuesById[132] = "TRADING_DISABLED")] = 132;
  values[(valuesById[133] = "TRADING_NOT_ALLOWED")] = 133;
  values[(valuesById[134] = "UNABLE_TO_CANCEL_ORDER")] = 134;
  values[(valuesById[135] = "UNABLE_TO_AMEND_ORDER")] = 135;
  values[(valuesById[136] = "SHORT_SELLING_NOT_ALLOWED")] = 136;
  return values;
})());

/**
 * ProtoOALimitedRiskMarginCalculationStrategy enum.
 * @exports ProtoOALimitedRiskMarginCalculationStrategy
 * @enum {number}
 * @property {number} ACCORDING_TO_LEVERAGE=0 ACCORDING_TO_LEVERAGE value
 * @property {number} ACCORDING_TO_GSL=1 ACCORDING_TO_GSL value
 * @property {number} ACCORDING_TO_GSL_AND_LEVERAGE=2 ACCORDING_TO_GSL_AND_LEVERAGE value
 */
export const ProtoOALimitedRiskMarginCalculationStrategy =
  ($root.ProtoOALimitedRiskMarginCalculationStrategy = (() => {
    const valuesById = {},
      values = Object.create(valuesById);
    values[(valuesById[0] = "ACCORDING_TO_LEVERAGE")] = 0;
    values[(valuesById[1] = "ACCORDING_TO_GSL")] = 1;
    values[(valuesById[2] = "ACCORDING_TO_GSL_AND_LEVERAGE")] = 2;
    return values;
  })());

export const ProtoOAAsset = ($root.ProtoOAAsset = (() => {
  /**
   * Properties of a ProtoOAAsset.
   * @exports IProtoOAAsset
   * @interface IProtoOAAsset
   * @property {number} assetId ProtoOAAsset assetId
   * @property {string} name ProtoOAAsset name
   * @property {string|null} [displayName] ProtoOAAsset displayName
   * @property {number|null} [digits] ProtoOAAsset digits
   */

  /**
   * Constructs a new ProtoOAAsset.
   * @exports ProtoOAAsset
   * @classdesc Represents a ProtoOAAsset.
   * @implements IProtoOAAsset
   * @constructor
   * @param {IProtoOAAsset=} [properties] Properties to set
   */
  function ProtoOAAsset(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAsset assetId.
   * @member {number} assetId
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.assetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAsset name.
   * @member {string} name
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.name = "";

  /**
   * ProtoOAAsset displayName.
   * @member {string} displayName
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.displayName = "";

  /**
   * ProtoOAAsset digits.
   * @member {number} digits
   * @memberof ProtoOAAsset
   * @instance
   */
  ProtoOAAsset.prototype.digits = 0;

  /**
   * Creates a new ProtoOAAsset instance using the specified properties.
   * @function create
   * @memberof ProtoOAAsset
   * @static
   * @param {IProtoOAAsset=} [properties] Properties to set
   * @returns {ProtoOAAsset} ProtoOAAsset instance
   */
  ProtoOAAsset.create = function create(properties) {
    return new ProtoOAAsset(properties);
  };

  /**
   * Encodes the specified ProtoOAAsset message. Does not implicitly {@link ProtoOAAsset.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAsset
   * @static
   * @param {IProtoOAAsset} message ProtoOAAsset message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAsset.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.assetId);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    if (
      message.displayName != null &&
      Object.hasOwnProperty.call(message, "displayName")
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.displayName);
    if (message.digits != null && Object.hasOwnProperty.call(message, "digits"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.digits);
    return writer;
  };

  /**
   * Decodes a ProtoOAAsset message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAsset
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAsset} ProtoOAAsset
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAsset.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAsset();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.assetId = reader.int64();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        case 3: {
          message.displayName = reader.string();
          break;
        }
        case 4: {
          message.digits = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("assetId"))
      throw $util.ProtocolError("missing required 'assetId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAsset
   * @function getTypeUrl
   * @memberof ProtoOAAsset
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAsset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAsset";
  };

  return ProtoOAAsset;
})());

export const ProtoOASymbol = ($root.ProtoOASymbol = (() => {
  /**
   * Properties of a ProtoOASymbol.
   * @exports IProtoOASymbol
   * @interface IProtoOASymbol
   * @property {number} symbolId ProtoOASymbol symbolId
   * @property {number} digits ProtoOASymbol digits
   * @property {number} pipPosition ProtoOASymbol pipPosition
   * @property {boolean|null} [enableShortSelling] ProtoOASymbol enableShortSelling
   * @property {boolean|null} [guaranteedStopLoss] ProtoOASymbol guaranteedStopLoss
   * @property {ProtoOADayOfWeek|null} [swapRollover3Days] ProtoOASymbol swapRollover3Days
   * @property {number|null} [swapLong] ProtoOASymbol swapLong
   * @property {number|null} [swapShort] ProtoOASymbol swapShort
   * @property {number|null} [maxVolume] ProtoOASymbol maxVolume
   * @property {number|null} [minVolume] ProtoOASymbol minVolume
   * @property {number|null} [stepVolume] ProtoOASymbol stepVolume
   * @property {number|null} [maxExposure] ProtoOASymbol maxExposure
   * @property {Array.<IProtoOAInterval>|null} [schedule] ProtoOASymbol schedule
   * @property {number|null} [commission] ProtoOASymbol commission
   * @property {ProtoOACommissionType|null} [commissionType] ProtoOASymbol commissionType
   * @property {number|null} [slDistance] ProtoOASymbol slDistance
   * @property {number|null} [tpDistance] ProtoOASymbol tpDistance
   * @property {number|null} [gslDistance] ProtoOASymbol gslDistance
   * @property {number|null} [gslCharge] ProtoOASymbol gslCharge
   * @property {ProtoOASymbolDistanceType|null} [distanceSetIn] ProtoOASymbol distanceSetIn
   * @property {number|null} [minCommission] ProtoOASymbol minCommission
   * @property {ProtoOAMinCommissionType|null} [minCommissionType] ProtoOASymbol minCommissionType
   * @property {string|null} [minCommissionAsset] ProtoOASymbol minCommissionAsset
   * @property {number|null} [rolloverCommission] ProtoOASymbol rolloverCommission
   * @property {number|null} [skipRolloverDays] ProtoOASymbol skipRolloverDays
   * @property {string|null} [scheduleTimeZone] ProtoOASymbol scheduleTimeZone
   * @property {ProtoOATradingMode|null} [tradingMode] ProtoOASymbol tradingMode
   * @property {ProtoOADayOfWeek|null} [rolloverCommission3Days] ProtoOASymbol rolloverCommission3Days
   * @property {ProtoOASwapCalculationType|null} [swapCalculationType] ProtoOASymbol swapCalculationType
   * @property {number|null} [lotSize] ProtoOASymbol lotSize
   * @property {number|null} [preciseTradingCommissionRate] ProtoOASymbol preciseTradingCommissionRate
   * @property {number|null} [preciseMinCommission] ProtoOASymbol preciseMinCommission
   * @property {Array.<IProtoOAHoliday>|null} [holiday] ProtoOASymbol holiday
   * @property {number|null} [pnlConversionFeeRate] ProtoOASymbol pnlConversionFeeRate
   * @property {number|null} [leverageId] ProtoOASymbol leverageId
   * @property {number|null} [swapPeriod] ProtoOASymbol swapPeriod
   * @property {number|null} [swapTime] ProtoOASymbol swapTime
   * @property {number|null} [skipSWAPPeriods] ProtoOASymbol skipSWAPPeriods
   * @property {boolean|null} [chargeSwapAtWeekends] ProtoOASymbol chargeSwapAtWeekends
   */

  /**
   * Constructs a new ProtoOASymbol.
   * @exports ProtoOASymbol
   * @classdesc Represents a ProtoOASymbol.
   * @implements IProtoOASymbol
   * @constructor
   * @param {IProtoOASymbol=} [properties] Properties to set
   */
  function ProtoOASymbol(properties) {
    this.schedule = [];
    this.holiday = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbol symbolId.
   * @member {number} symbolId
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol digits.
   * @member {number} digits
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.digits = 0;

  /**
   * ProtoOASymbol pipPosition.
   * @member {number} pipPosition
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.pipPosition = 0;

  /**
   * ProtoOASymbol enableShortSelling.
   * @member {boolean} enableShortSelling
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.enableShortSelling = false;

  /**
   * ProtoOASymbol guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOASymbol swapRollover3Days.
   * @member {ProtoOADayOfWeek} swapRollover3Days
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapRollover3Days = 1;

  /**
   * ProtoOASymbol swapLong.
   * @member {number} swapLong
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapLong = 0;

  /**
   * ProtoOASymbol swapShort.
   * @member {number} swapShort
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapShort = 0;

  /**
   * ProtoOASymbol maxVolume.
   * @member {number} maxVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.maxVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol minVolume.
   * @member {number} minVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol stepVolume.
   * @member {number} stepVolume
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.stepVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol maxExposure.
   * @member {number} maxExposure
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.maxExposure = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASymbol schedule.
   * @member {Array.<IProtoOAInterval>} schedule
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.schedule = $util.emptyArray;

  /**
   * ProtoOASymbol commission.
   * @member {number} commission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol commissionType.
   * @member {ProtoOACommissionType} commissionType
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.commissionType = 1;

  /**
   * ProtoOASymbol slDistance.
   * @member {number} slDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.slDistance = 0;

  /**
   * ProtoOASymbol tpDistance.
   * @member {number} tpDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.tpDistance = 0;

  /**
   * ProtoOASymbol gslDistance.
   * @member {number} gslDistance
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.gslDistance = 0;

  /**
   * ProtoOASymbol gslCharge.
   * @member {number} gslCharge
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.gslCharge = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol distanceSetIn.
   * @member {ProtoOASymbolDistanceType} distanceSetIn
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.distanceSetIn = 1;

  /**
   * ProtoOASymbol minCommission.
   * @member {number} minCommission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol minCommissionType.
   * @member {ProtoOAMinCommissionType} minCommissionType
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommissionType = 1;

  /**
   * ProtoOASymbol minCommissionAsset.
   * @member {string} minCommissionAsset
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.minCommissionAsset = "USD";

  /**
   * ProtoOASymbol rolloverCommission.
   * @member {number} rolloverCommission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.rolloverCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol skipRolloverDays.
   * @member {number} skipRolloverDays
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.skipRolloverDays = 0;

  /**
   * ProtoOASymbol scheduleTimeZone.
   * @member {string} scheduleTimeZone
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.scheduleTimeZone = "";

  /**
   * ProtoOASymbol tradingMode.
   * @member {ProtoOATradingMode} tradingMode
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.tradingMode = 0;

  /**
   * ProtoOASymbol rolloverCommission3Days.
   * @member {ProtoOADayOfWeek} rolloverCommission3Days
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.rolloverCommission3Days = 1;

  /**
   * ProtoOASymbol swapCalculationType.
   * @member {ProtoOASwapCalculationType} swapCalculationType
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapCalculationType = 0;

  /**
   * ProtoOASymbol lotSize.
   * @member {number} lotSize
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.lotSize = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol preciseTradingCommissionRate.
   * @member {number} preciseTradingCommissionRate
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.preciseTradingCommissionRate = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol preciseMinCommission.
   * @member {number} preciseMinCommission
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.preciseMinCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol holiday.
   * @member {Array.<IProtoOAHoliday>} holiday
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.holiday = $util.emptyArray;

  /**
   * ProtoOASymbol pnlConversionFeeRate.
   * @member {number} pnlConversionFeeRate
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.pnlConversionFeeRate = 0;

  /**
   * ProtoOASymbol leverageId.
   * @member {number} leverageId
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.leverageId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbol swapPeriod.
   * @member {number} swapPeriod
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapPeriod = 0;

  /**
   * ProtoOASymbol swapTime.
   * @member {number} swapTime
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.swapTime = 0;

  /**
   * ProtoOASymbol skipSWAPPeriods.
   * @member {number} skipSWAPPeriods
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.skipSWAPPeriods = 0;

  /**
   * ProtoOASymbol chargeSwapAtWeekends.
   * @member {boolean} chargeSwapAtWeekends
   * @memberof ProtoOASymbol
   * @instance
   */
  ProtoOASymbol.prototype.chargeSwapAtWeekends = false;

  /**
   * Creates a new ProtoOASymbol instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbol
   * @static
   * @param {IProtoOASymbol=} [properties] Properties to set
   * @returns {ProtoOASymbol} ProtoOASymbol instance
   */
  ProtoOASymbol.create = function create(properties) {
    return new ProtoOASymbol(properties);
  };

  /**
   * Encodes the specified ProtoOASymbol message. Does not implicitly {@link ProtoOASymbol.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbol
   * @static
   * @param {IProtoOASymbol} message ProtoOASymbol message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbol.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.digits);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.pipPosition);
    if (
      message.enableShortSelling != null &&
      Object.hasOwnProperty.call(message, "enableShortSelling")
    )
      writer
        .uint32(/* id 4, wireType 0 =*/ 32)
        .bool(message.enableShortSelling);
    if (
      message.guaranteedStopLoss != null &&
      Object.hasOwnProperty.call(message, "guaranteedStopLoss")
    )
      writer
        .uint32(/* id 5, wireType 0 =*/ 40)
        .bool(message.guaranteedStopLoss);
    if (
      message.swapRollover3Days != null &&
      Object.hasOwnProperty.call(message, "swapRollover3Days")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int32(message.swapRollover3Days);
    if (
      message.swapLong != null &&
      Object.hasOwnProperty.call(message, "swapLong")
    )
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.swapLong);
    if (
      message.swapShort != null &&
      Object.hasOwnProperty.call(message, "swapShort")
    )
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.swapShort);
    if (
      message.maxVolume != null &&
      Object.hasOwnProperty.call(message, "maxVolume")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.maxVolume);
    if (
      message.minVolume != null &&
      Object.hasOwnProperty.call(message, "minVolume")
    )
      writer.uint32(/* id 10, wireType 0 =*/ 80).int64(message.minVolume);
    if (
      message.stepVolume != null &&
      Object.hasOwnProperty.call(message, "stepVolume")
    )
      writer.uint32(/* id 11, wireType 0 =*/ 88).int64(message.stepVolume);
    if (
      message.maxExposure != null &&
      Object.hasOwnProperty.call(message, "maxExposure")
    )
      writer.uint32(/* id 12, wireType 0 =*/ 96).uint64(message.maxExposure);
    if (message.schedule != null && message.schedule.length)
      for (let i = 0; i < message.schedule.length; ++i)
        $root.ProtoOAInterval.encode(
          message.schedule[i],
          writer.uint32(/* id 13, wireType 2 =*/ 106).fork(),
        ).ldelim();
    if (
      message.commission != null &&
      Object.hasOwnProperty.call(message, "commission")
    )
      writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.commission);
    if (
      message.commissionType != null &&
      Object.hasOwnProperty.call(message, "commissionType")
    )
      writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.commissionType);
    if (
      message.slDistance != null &&
      Object.hasOwnProperty.call(message, "slDistance")
    )
      writer.uint32(/* id 16, wireType 0 =*/ 128).uint32(message.slDistance);
    if (
      message.tpDistance != null &&
      Object.hasOwnProperty.call(message, "tpDistance")
    )
      writer.uint32(/* id 17, wireType 0 =*/ 136).uint32(message.tpDistance);
    if (
      message.gslDistance != null &&
      Object.hasOwnProperty.call(message, "gslDistance")
    )
      writer.uint32(/* id 18, wireType 0 =*/ 144).uint32(message.gslDistance);
    if (
      message.gslCharge != null &&
      Object.hasOwnProperty.call(message, "gslCharge")
    )
      writer.uint32(/* id 19, wireType 0 =*/ 152).int64(message.gslCharge);
    if (
      message.distanceSetIn != null &&
      Object.hasOwnProperty.call(message, "distanceSetIn")
    )
      writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.distanceSetIn);
    if (
      message.minCommission != null &&
      Object.hasOwnProperty.call(message, "minCommission")
    )
      writer.uint32(/* id 21, wireType 0 =*/ 168).int64(message.minCommission);
    if (
      message.minCommissionType != null &&
      Object.hasOwnProperty.call(message, "minCommissionType")
    )
      writer
        .uint32(/* id 22, wireType 0 =*/ 176)
        .int32(message.minCommissionType);
    if (
      message.minCommissionAsset != null &&
      Object.hasOwnProperty.call(message, "minCommissionAsset")
    )
      writer
        .uint32(/* id 23, wireType 2 =*/ 186)
        .string(message.minCommissionAsset);
    if (
      message.rolloverCommission != null &&
      Object.hasOwnProperty.call(message, "rolloverCommission")
    )
      writer
        .uint32(/* id 24, wireType 0 =*/ 192)
        .int64(message.rolloverCommission);
    if (
      message.skipRolloverDays != null &&
      Object.hasOwnProperty.call(message, "skipRolloverDays")
    )
      writer
        .uint32(/* id 25, wireType 0 =*/ 200)
        .int32(message.skipRolloverDays);
    if (
      message.scheduleTimeZone != null &&
      Object.hasOwnProperty.call(message, "scheduleTimeZone")
    )
      writer
        .uint32(/* id 26, wireType 2 =*/ 210)
        .string(message.scheduleTimeZone);
    if (
      message.tradingMode != null &&
      Object.hasOwnProperty.call(message, "tradingMode")
    )
      writer.uint32(/* id 27, wireType 0 =*/ 216).int32(message.tradingMode);
    if (
      message.rolloverCommission3Days != null &&
      Object.hasOwnProperty.call(message, "rolloverCommission3Days")
    )
      writer
        .uint32(/* id 28, wireType 0 =*/ 224)
        .int32(message.rolloverCommission3Days);
    if (
      message.swapCalculationType != null &&
      Object.hasOwnProperty.call(message, "swapCalculationType")
    )
      writer
        .uint32(/* id 29, wireType 0 =*/ 232)
        .int32(message.swapCalculationType);
    if (
      message.lotSize != null &&
      Object.hasOwnProperty.call(message, "lotSize")
    )
      writer.uint32(/* id 30, wireType 0 =*/ 240).int64(message.lotSize);
    if (
      message.preciseTradingCommissionRate != null &&
      Object.hasOwnProperty.call(message, "preciseTradingCommissionRate")
    )
      writer
        .uint32(/* id 31, wireType 0 =*/ 248)
        .int64(message.preciseTradingCommissionRate);
    if (
      message.preciseMinCommission != null &&
      Object.hasOwnProperty.call(message, "preciseMinCommission")
    )
      writer
        .uint32(/* id 32, wireType 0 =*/ 256)
        .int64(message.preciseMinCommission);
    if (message.holiday != null && message.holiday.length)
      for (let i = 0; i < message.holiday.length; ++i)
        $root.ProtoOAHoliday.encode(
          message.holiday[i],
          writer.uint32(/* id 33, wireType 2 =*/ 266).fork(),
        ).ldelim();
    if (
      message.pnlConversionFeeRate != null &&
      Object.hasOwnProperty.call(message, "pnlConversionFeeRate")
    )
      writer
        .uint32(/* id 34, wireType 0 =*/ 272)
        .int32(message.pnlConversionFeeRate);
    if (
      message.leverageId != null &&
      Object.hasOwnProperty.call(message, "leverageId")
    )
      writer.uint32(/* id 35, wireType 0 =*/ 280).int64(message.leverageId);
    if (
      message.swapPeriod != null &&
      Object.hasOwnProperty.call(message, "swapPeriod")
    )
      writer.uint32(/* id 36, wireType 0 =*/ 288).int32(message.swapPeriod);
    if (
      message.swapTime != null &&
      Object.hasOwnProperty.call(message, "swapTime")
    )
      writer.uint32(/* id 37, wireType 0 =*/ 296).int32(message.swapTime);
    if (
      message.skipSWAPPeriods != null &&
      Object.hasOwnProperty.call(message, "skipSWAPPeriods")
    )
      writer
        .uint32(/* id 38, wireType 0 =*/ 304)
        .int32(message.skipSWAPPeriods);
    if (
      message.chargeSwapAtWeekends != null &&
      Object.hasOwnProperty.call(message, "chargeSwapAtWeekends")
    )
      writer
        .uint32(/* id 39, wireType 0 =*/ 312)
        .bool(message.chargeSwapAtWeekends);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbol message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbol
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbol} ProtoOASymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbol.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbol();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.symbolId = reader.int64();
          break;
        }
        case 2: {
          message.digits = reader.int32();
          break;
        }
        case 3: {
          message.pipPosition = reader.int32();
          break;
        }
        case 4: {
          message.enableShortSelling = reader.bool();
          break;
        }
        case 5: {
          message.guaranteedStopLoss = reader.bool();
          break;
        }
        case 6: {
          message.swapRollover3Days = reader.int32();
          break;
        }
        case 7: {
          message.swapLong = reader.double();
          break;
        }
        case 8: {
          message.swapShort = reader.double();
          break;
        }
        case 9: {
          message.maxVolume = reader.int64();
          break;
        }
        case 10: {
          message.minVolume = reader.int64();
          break;
        }
        case 11: {
          message.stepVolume = reader.int64();
          break;
        }
        case 12: {
          message.maxExposure = reader.uint64();
          break;
        }
        case 13: {
          if (!(message.schedule && message.schedule.length))
            message.schedule = [];
          message.schedule.push(
            $root.ProtoOAInterval.decode(reader, reader.uint32()),
          );
          break;
        }
        case 14: {
          message.commission = reader.int64();
          break;
        }
        case 15: {
          message.commissionType = reader.int32();
          break;
        }
        case 16: {
          message.slDistance = reader.uint32();
          break;
        }
        case 17: {
          message.tpDistance = reader.uint32();
          break;
        }
        case 18: {
          message.gslDistance = reader.uint32();
          break;
        }
        case 19: {
          message.gslCharge = reader.int64();
          break;
        }
        case 20: {
          message.distanceSetIn = reader.int32();
          break;
        }
        case 21: {
          message.minCommission = reader.int64();
          break;
        }
        case 22: {
          message.minCommissionType = reader.int32();
          break;
        }
        case 23: {
          message.minCommissionAsset = reader.string();
          break;
        }
        case 24: {
          message.rolloverCommission = reader.int64();
          break;
        }
        case 25: {
          message.skipRolloverDays = reader.int32();
          break;
        }
        case 26: {
          message.scheduleTimeZone = reader.string();
          break;
        }
        case 27: {
          message.tradingMode = reader.int32();
          break;
        }
        case 28: {
          message.rolloverCommission3Days = reader.int32();
          break;
        }
        case 29: {
          message.swapCalculationType = reader.int32();
          break;
        }
        case 30: {
          message.lotSize = reader.int64();
          break;
        }
        case 31: {
          message.preciseTradingCommissionRate = reader.int64();
          break;
        }
        case 32: {
          message.preciseMinCommission = reader.int64();
          break;
        }
        case 33: {
          if (!(message.holiday && message.holiday.length))
            message.holiday = [];
          message.holiday.push(
            $root.ProtoOAHoliday.decode(reader, reader.uint32()),
          );
          break;
        }
        case 34: {
          message.pnlConversionFeeRate = reader.int32();
          break;
        }
        case 35: {
          message.leverageId = reader.int64();
          break;
        }
        case 36: {
          message.swapPeriod = reader.int32();
          break;
        }
        case 37: {
          message.swapTime = reader.int32();
          break;
        }
        case 38: {
          message.skipSWAPPeriods = reader.int32();
          break;
        }
        case 39: {
          message.chargeSwapAtWeekends = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("digits"))
      throw $util.ProtocolError("missing required 'digits'", {
        instance: message,
      });
    if (!message.hasOwnProperty("pipPosition"))
      throw $util.ProtocolError("missing required 'pipPosition'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbol
   * @function getTypeUrl
   * @memberof ProtoOASymbol
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbol";
  };

  return ProtoOASymbol;
})());

export const ProtoOALightSymbol = ($root.ProtoOALightSymbol = (() => {
  /**
   * Properties of a ProtoOALightSymbol.
   * @exports IProtoOALightSymbol
   * @interface IProtoOALightSymbol
   * @property {number} symbolId ProtoOALightSymbol symbolId
   * @property {string|null} [symbolName] ProtoOALightSymbol symbolName
   * @property {boolean|null} [enabled] ProtoOALightSymbol enabled
   * @property {number|null} [baseAssetId] ProtoOALightSymbol baseAssetId
   * @property {number|null} [quoteAssetId] ProtoOALightSymbol quoteAssetId
   * @property {number|null} [symbolCategoryId] ProtoOALightSymbol symbolCategoryId
   * @property {string|null} [description] ProtoOALightSymbol description
   */

  /**
   * Constructs a new ProtoOALightSymbol.
   * @exports ProtoOALightSymbol
   * @classdesc Represents a ProtoOALightSymbol.
   * @implements IProtoOALightSymbol
   * @constructor
   * @param {IProtoOALightSymbol=} [properties] Properties to set
   */
  function ProtoOALightSymbol(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOALightSymbol symbolId.
   * @member {number} symbolId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol symbolName.
   * @member {string} symbolName
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolName = "";

  /**
   * ProtoOALightSymbol enabled.
   * @member {boolean} enabled
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.enabled = false;

  /**
   * ProtoOALightSymbol baseAssetId.
   * @member {number} baseAssetId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.baseAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol quoteAssetId.
   * @member {number} quoteAssetId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.quoteAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol symbolCategoryId.
   * @member {number} symbolCategoryId
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.symbolCategoryId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOALightSymbol description.
   * @member {string} description
   * @memberof ProtoOALightSymbol
   * @instance
   */
  ProtoOALightSymbol.prototype.description = "";

  /**
   * Creates a new ProtoOALightSymbol instance using the specified properties.
   * @function create
   * @memberof ProtoOALightSymbol
   * @static
   * @param {IProtoOALightSymbol=} [properties] Properties to set
   * @returns {ProtoOALightSymbol} ProtoOALightSymbol instance
   */
  ProtoOALightSymbol.create = function create(properties) {
    return new ProtoOALightSymbol(properties);
  };

  /**
   * Encodes the specified ProtoOALightSymbol message. Does not implicitly {@link ProtoOALightSymbol.verify|verify} messages.
   * @function encode
   * @memberof ProtoOALightSymbol
   * @static
   * @param {IProtoOALightSymbol} message ProtoOALightSymbol message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOALightSymbol.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    if (
      message.symbolName != null &&
      Object.hasOwnProperty.call(message, "symbolName")
    )
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.symbolName);
    if (
      message.enabled != null &&
      Object.hasOwnProperty.call(message, "enabled")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.enabled);
    if (
      message.baseAssetId != null &&
      Object.hasOwnProperty.call(message, "baseAssetId")
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.baseAssetId);
    if (
      message.quoteAssetId != null &&
      Object.hasOwnProperty.call(message, "quoteAssetId")
    )
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.quoteAssetId);
    if (
      message.symbolCategoryId != null &&
      Object.hasOwnProperty.call(message, "symbolCategoryId")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolCategoryId);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOALightSymbol message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOALightSymbol
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOALightSymbol} ProtoOALightSymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOALightSymbol.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOALightSymbol();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.symbolId = reader.int64();
          break;
        }
        case 2: {
          message.symbolName = reader.string();
          break;
        }
        case 3: {
          message.enabled = reader.bool();
          break;
        }
        case 4: {
          message.baseAssetId = reader.int64();
          break;
        }
        case 5: {
          message.quoteAssetId = reader.int64();
          break;
        }
        case 6: {
          message.symbolCategoryId = reader.int64();
          break;
        }
        case 7: {
          message.description = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOALightSymbol
   * @function getTypeUrl
   * @memberof ProtoOALightSymbol
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOALightSymbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOALightSymbol";
  };

  return ProtoOALightSymbol;
})());

export const ProtoOAArchivedSymbol = ($root.ProtoOAArchivedSymbol = (() => {
  /**
   * Properties of a ProtoOAArchivedSymbol.
   * @exports IProtoOAArchivedSymbol
   * @interface IProtoOAArchivedSymbol
   * @property {number} symbolId ProtoOAArchivedSymbol symbolId
   * @property {string} name ProtoOAArchivedSymbol name
   * @property {number} utcLastUpdateTimestamp ProtoOAArchivedSymbol utcLastUpdateTimestamp
   * @property {string|null} [description] ProtoOAArchivedSymbol description
   */

  /**
   * Constructs a new ProtoOAArchivedSymbol.
   * @exports ProtoOAArchivedSymbol
   * @classdesc Represents a ProtoOAArchivedSymbol.
   * @implements IProtoOAArchivedSymbol
   * @constructor
   * @param {IProtoOAArchivedSymbol=} [properties] Properties to set
   */
  function ProtoOAArchivedSymbol(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAArchivedSymbol symbolId.
   * @member {number} symbolId
   * @memberof ProtoOAArchivedSymbol
   * @instance
   */
  ProtoOAArchivedSymbol.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAArchivedSymbol name.
   * @member {string} name
   * @memberof ProtoOAArchivedSymbol
   * @instance
   */
  ProtoOAArchivedSymbol.prototype.name = "";

  /**
   * ProtoOAArchivedSymbol utcLastUpdateTimestamp.
   * @member {number} utcLastUpdateTimestamp
   * @memberof ProtoOAArchivedSymbol
   * @instance
   */
  ProtoOAArchivedSymbol.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAArchivedSymbol description.
   * @member {string} description
   * @memberof ProtoOAArchivedSymbol
   * @instance
   */
  ProtoOAArchivedSymbol.prototype.description = "";

  /**
   * Creates a new ProtoOAArchivedSymbol instance using the specified properties.
   * @function create
   * @memberof ProtoOAArchivedSymbol
   * @static
   * @param {IProtoOAArchivedSymbol=} [properties] Properties to set
   * @returns {ProtoOAArchivedSymbol} ProtoOAArchivedSymbol instance
   */
  ProtoOAArchivedSymbol.create = function create(properties) {
    return new ProtoOAArchivedSymbol(properties);
  };

  /**
   * Encodes the specified ProtoOAArchivedSymbol message. Does not implicitly {@link ProtoOAArchivedSymbol.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAArchivedSymbol
   * @static
   * @param {IProtoOAArchivedSymbol} message ProtoOAArchivedSymbol message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAArchivedSymbol.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    writer
      .uint32(/* id 3, wireType 0 =*/ 24)
      .int64(message.utcLastUpdateTimestamp);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOAArchivedSymbol message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAArchivedSymbol
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAArchivedSymbol} ProtoOAArchivedSymbol
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAArchivedSymbol.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAArchivedSymbol();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.symbolId = reader.int64();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        case 3: {
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        }
        case 4: {
          message.description = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message,
      });
    if (!message.hasOwnProperty("utcLastUpdateTimestamp"))
      throw $util.ProtocolError("missing required 'utcLastUpdateTimestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAArchivedSymbol
   * @function getTypeUrl
   * @memberof ProtoOAArchivedSymbol
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAArchivedSymbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAArchivedSymbol";
  };

  return ProtoOAArchivedSymbol;
})());

export const ProtoOASymbolCategory = ($root.ProtoOASymbolCategory = (() => {
  /**
   * Properties of a ProtoOASymbolCategory.
   * @exports IProtoOASymbolCategory
   * @interface IProtoOASymbolCategory
   * @property {number} id ProtoOASymbolCategory id
   * @property {number} assetClassId ProtoOASymbolCategory assetClassId
   * @property {string} name ProtoOASymbolCategory name
   */

  /**
   * Constructs a new ProtoOASymbolCategory.
   * @exports ProtoOASymbolCategory
   * @classdesc Represents a ProtoOASymbolCategory.
   * @implements IProtoOASymbolCategory
   * @constructor
   * @param {IProtoOASymbolCategory=} [properties] Properties to set
   */
  function ProtoOASymbolCategory(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolCategory id.
   * @member {number} id
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolCategory assetClassId.
   * @member {number} assetClassId
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.assetClassId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolCategory name.
   * @member {string} name
   * @memberof ProtoOASymbolCategory
   * @instance
   */
  ProtoOASymbolCategory.prototype.name = "";

  /**
   * Creates a new ProtoOASymbolCategory instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {IProtoOASymbolCategory=} [properties] Properties to set
   * @returns {ProtoOASymbolCategory} ProtoOASymbolCategory instance
   */
  ProtoOASymbolCategory.create = function create(properties) {
    return new ProtoOASymbolCategory(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolCategory message. Does not implicitly {@link ProtoOASymbolCategory.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {IProtoOASymbolCategory} message ProtoOASymbolCategory message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolCategory.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.assetClassId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.name);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolCategory message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolCategory} ProtoOASymbolCategory
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolCategory.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolCategory();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.int64();
          break;
        }
        case 2: {
          message.assetClassId = reader.int64();
          break;
        }
        case 3: {
          message.name = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("id"))
      throw $util.ProtocolError("missing required 'id'", { instance: message });
    if (!message.hasOwnProperty("assetClassId"))
      throw $util.ProtocolError("missing required 'assetClassId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbolCategory
   * @function getTypeUrl
   * @memberof ProtoOASymbolCategory
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbolCategory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbolCategory";
  };

  return ProtoOASymbolCategory;
})());

export const ProtoOAInterval = ($root.ProtoOAInterval = (() => {
  /**
   * Properties of a ProtoOAInterval.
   * @exports IProtoOAInterval
   * @interface IProtoOAInterval
   * @property {number} startSecond ProtoOAInterval startSecond
   * @property {number} endSecond ProtoOAInterval endSecond
   */

  /**
   * Constructs a new ProtoOAInterval.
   * @exports ProtoOAInterval
   * @classdesc Represents a ProtoOAInterval.
   * @implements IProtoOAInterval
   * @constructor
   * @param {IProtoOAInterval=} [properties] Properties to set
   */
  function ProtoOAInterval(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAInterval startSecond.
   * @member {number} startSecond
   * @memberof ProtoOAInterval
   * @instance
   */
  ProtoOAInterval.prototype.startSecond = 0;

  /**
   * ProtoOAInterval endSecond.
   * @member {number} endSecond
   * @memberof ProtoOAInterval
   * @instance
   */
  ProtoOAInterval.prototype.endSecond = 0;

  /**
   * Creates a new ProtoOAInterval instance using the specified properties.
   * @function create
   * @memberof ProtoOAInterval
   * @static
   * @param {IProtoOAInterval=} [properties] Properties to set
   * @returns {ProtoOAInterval} ProtoOAInterval instance
   */
  ProtoOAInterval.create = function create(properties) {
    return new ProtoOAInterval(properties);
  };

  /**
   * Encodes the specified ProtoOAInterval message. Does not implicitly {@link ProtoOAInterval.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAInterval
   * @static
   * @param {IProtoOAInterval} message ProtoOAInterval message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAInterval.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.startSecond);
    writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.endSecond);
    return writer;
  };

  /**
   * Decodes a ProtoOAInterval message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAInterval
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAInterval} ProtoOAInterval
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAInterval.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAInterval();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 3: {
          message.startSecond = reader.uint32();
          break;
        }
        case 4: {
          message.endSecond = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("startSecond"))
      throw $util.ProtocolError("missing required 'startSecond'", {
        instance: message,
      });
    if (!message.hasOwnProperty("endSecond"))
      throw $util.ProtocolError("missing required 'endSecond'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAInterval
   * @function getTypeUrl
   * @memberof ProtoOAInterval
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAInterval.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAInterval";
  };

  return ProtoOAInterval;
})());

export const ProtoOATrader = ($root.ProtoOATrader = (() => {
  /**
   * Properties of a ProtoOATrader.
   * @exports IProtoOATrader
   * @interface IProtoOATrader
   * @property {number} ctidTraderAccountId ProtoOATrader ctidTraderAccountId
   * @property {number} balance ProtoOATrader balance
   * @property {number|null} [balanceVersion] ProtoOATrader balanceVersion
   * @property {number|null} [managerBonus] ProtoOATrader managerBonus
   * @property {number|null} [ibBonus] ProtoOATrader ibBonus
   * @property {number|null} [nonWithdrawableBonus] ProtoOATrader nonWithdrawableBonus
   * @property {ProtoOAAccessRights|null} [accessRights] ProtoOATrader accessRights
   * @property {number} depositAssetId ProtoOATrader depositAssetId
   * @property {boolean|null} [swapFree] ProtoOATrader swapFree
   * @property {number|null} [leverageInCents] ProtoOATrader leverageInCents
   * @property {ProtoOATotalMarginCalculationType|null} [totalMarginCalculationType] ProtoOATrader totalMarginCalculationType
   * @property {number|null} [maxLeverage] ProtoOATrader maxLeverage
   * @property {boolean|null} [frenchRisk] ProtoOATrader frenchRisk
   * @property {number|null} [traderLogin] ProtoOATrader traderLogin
   * @property {ProtoOAAccountType|null} [accountType] ProtoOATrader accountType
   * @property {string|null} [brokerName] ProtoOATrader brokerName
   * @property {number|null} [registrationTimestamp] ProtoOATrader registrationTimestamp
   * @property {boolean|null} [isLimitedRisk] ProtoOATrader isLimitedRisk
   * @property {ProtoOALimitedRiskMarginCalculationStrategy|null} [limitedRiskMarginCalculationStrategy] ProtoOATrader limitedRiskMarginCalculationStrategy
   * @property {number|null} [moneyDigits] ProtoOATrader moneyDigits
   */

  /**
   * Constructs a new ProtoOATrader.
   * @exports ProtoOATrader
   * @classdesc Represents a ProtoOATrader.
   * @implements IProtoOATrader
   * @constructor
   * @param {IProtoOATrader=} [properties] Properties to set
   */
  function ProtoOATrader(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATrader ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader balance.
   * @member {number} balance
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.balance = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader balanceVersion.
   * @member {number} balanceVersion
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.balanceVersion = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader managerBonus.
   * @member {number} managerBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.managerBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader ibBonus.
   * @member {number} ibBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.ibBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader nonWithdrawableBonus.
   * @member {number} nonWithdrawableBonus
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.nonWithdrawableBonus = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader accessRights.
   * @member {ProtoOAAccessRights} accessRights
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.accessRights = 0;

  /**
   * ProtoOATrader depositAssetId.
   * @member {number} depositAssetId
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.depositAssetId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader swapFree.
   * @member {boolean} swapFree
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.swapFree = false;

  /**
   * ProtoOATrader leverageInCents.
   * @member {number} leverageInCents
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.leverageInCents = 0;

  /**
   * ProtoOATrader totalMarginCalculationType.
   * @member {ProtoOATotalMarginCalculationType} totalMarginCalculationType
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.totalMarginCalculationType = 0;

  /**
   * ProtoOATrader maxLeverage.
   * @member {number} maxLeverage
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.maxLeverage = 0;

  /**
   * ProtoOATrader frenchRisk.
   * @member {boolean} frenchRisk
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.frenchRisk = false;

  /**
   * ProtoOATrader traderLogin.
   * @member {number} traderLogin
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.traderLogin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader accountType.
   * @member {ProtoOAAccountType} accountType
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.accountType = 0;

  /**
   * ProtoOATrader brokerName.
   * @member {string} brokerName
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.brokerName = "";

  /**
   * ProtoOATrader registrationTimestamp.
   * @member {number} registrationTimestamp
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.registrationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrader isLimitedRisk.
   * @member {boolean} isLimitedRisk
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.isLimitedRisk = false;

  /**
   * ProtoOATrader limitedRiskMarginCalculationStrategy.
   * @member {ProtoOALimitedRiskMarginCalculationStrategy} limitedRiskMarginCalculationStrategy
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.limitedRiskMarginCalculationStrategy = 0;

  /**
   * ProtoOATrader moneyDigits.
   * @member {number} moneyDigits
   * @memberof ProtoOATrader
   * @instance
   */
  ProtoOATrader.prototype.moneyDigits = 0;

  /**
   * Creates a new ProtoOATrader instance using the specified properties.
   * @function create
   * @memberof ProtoOATrader
   * @static
   * @param {IProtoOATrader=} [properties] Properties to set
   * @returns {ProtoOATrader} ProtoOATrader instance
   */
  ProtoOATrader.create = function create(properties) {
    return new ProtoOATrader(properties);
  };

  /**
   * Encodes the specified ProtoOATrader message. Does not implicitly {@link ProtoOATrader.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATrader
   * @static
   * @param {IProtoOATrader} message ProtoOATrader message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATrader.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.ctidTraderAccountId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.balance);
    if (
      message.balanceVersion != null &&
      Object.hasOwnProperty.call(message, "balanceVersion")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.balanceVersion);
    if (
      message.managerBonus != null &&
      Object.hasOwnProperty.call(message, "managerBonus")
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.managerBonus);
    if (
      message.ibBonus != null &&
      Object.hasOwnProperty.call(message, "ibBonus")
    )
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.ibBonus);
    if (
      message.nonWithdrawableBonus != null &&
      Object.hasOwnProperty.call(message, "nonWithdrawableBonus")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int64(message.nonWithdrawableBonus);
    if (
      message.accessRights != null &&
      Object.hasOwnProperty.call(message, "accessRights")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.accessRights);
    writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.depositAssetId);
    if (
      message.swapFree != null &&
      Object.hasOwnProperty.call(message, "swapFree")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).bool(message.swapFree);
    if (
      message.leverageInCents != null &&
      Object.hasOwnProperty.call(message, "leverageInCents")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .uint32(message.leverageInCents);
    if (
      message.totalMarginCalculationType != null &&
      Object.hasOwnProperty.call(message, "totalMarginCalculationType")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int32(message.totalMarginCalculationType);
    if (
      message.maxLeverage != null &&
      Object.hasOwnProperty.call(message, "maxLeverage")
    )
      writer.uint32(/* id 12, wireType 0 =*/ 96).uint32(message.maxLeverage);
    if (
      message.frenchRisk != null &&
      Object.hasOwnProperty.call(message, "frenchRisk")
    )
      writer.uint32(/* id 13, wireType 0 =*/ 104).bool(message.frenchRisk);
    if (
      message.traderLogin != null &&
      Object.hasOwnProperty.call(message, "traderLogin")
    )
      writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.traderLogin);
    if (
      message.accountType != null &&
      Object.hasOwnProperty.call(message, "accountType")
    )
      writer.uint32(/* id 15, wireType 0 =*/ 120).int32(message.accountType);
    if (
      message.brokerName != null &&
      Object.hasOwnProperty.call(message, "brokerName")
    )
      writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.brokerName);
    if (
      message.registrationTimestamp != null &&
      Object.hasOwnProperty.call(message, "registrationTimestamp")
    )
      writer
        .uint32(/* id 17, wireType 0 =*/ 136)
        .int64(message.registrationTimestamp);
    if (
      message.isLimitedRisk != null &&
      Object.hasOwnProperty.call(message, "isLimitedRisk")
    )
      writer.uint32(/* id 18, wireType 0 =*/ 144).bool(message.isLimitedRisk);
    if (
      message.limitedRiskMarginCalculationStrategy != null &&
      Object.hasOwnProperty.call(
        message,
        "limitedRiskMarginCalculationStrategy",
      )
    )
      writer
        .uint32(/* id 19, wireType 0 =*/ 152)
        .int32(message.limitedRiskMarginCalculationStrategy);
    if (
      message.moneyDigits != null &&
      Object.hasOwnProperty.call(message, "moneyDigits")
    )
      writer.uint32(/* id 20, wireType 0 =*/ 160).uint32(message.moneyDigits);
    return writer;
  };

  /**
   * Decodes a ProtoOATrader message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATrader
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATrader} ProtoOATrader
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATrader.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATrader();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 2: {
          message.balance = reader.int64();
          break;
        }
        case 3: {
          message.balanceVersion = reader.int64();
          break;
        }
        case 4: {
          message.managerBonus = reader.int64();
          break;
        }
        case 5: {
          message.ibBonus = reader.int64();
          break;
        }
        case 6: {
          message.nonWithdrawableBonus = reader.int64();
          break;
        }
        case 7: {
          message.accessRights = reader.int32();
          break;
        }
        case 8: {
          message.depositAssetId = reader.int64();
          break;
        }
        case 9: {
          message.swapFree = reader.bool();
          break;
        }
        case 10: {
          message.leverageInCents = reader.uint32();
          break;
        }
        case 11: {
          message.totalMarginCalculationType = reader.int32();
          break;
        }
        case 12: {
          message.maxLeverage = reader.uint32();
          break;
        }
        case 13: {
          message.frenchRisk = reader.bool();
          break;
        }
        case 14: {
          message.traderLogin = reader.int64();
          break;
        }
        case 15: {
          message.accountType = reader.int32();
          break;
        }
        case 16: {
          message.brokerName = reader.string();
          break;
        }
        case 17: {
          message.registrationTimestamp = reader.int64();
          break;
        }
        case 18: {
          message.isLimitedRisk = reader.bool();
          break;
        }
        case 19: {
          message.limitedRiskMarginCalculationStrategy = reader.int32();
          break;
        }
        case 20: {
          message.moneyDigits = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("balance"))
      throw $util.ProtocolError("missing required 'balance'", {
        instance: message,
      });
    if (!message.hasOwnProperty("depositAssetId"))
      throw $util.ProtocolError("missing required 'depositAssetId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATrader
   * @function getTypeUrl
   * @memberof ProtoOATrader
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATrader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATrader";
  };

  return ProtoOATrader;
})());

export const ProtoOAPosition = ($root.ProtoOAPosition = (() => {
  /**
   * Properties of a ProtoOAPosition.
   * @exports IProtoOAPosition
   * @interface IProtoOAPosition
   * @property {number} positionId ProtoOAPosition positionId
   * @property {IProtoOATradeData} tradeData ProtoOAPosition tradeData
   * @property {ProtoOAPositionStatus} positionStatus ProtoOAPosition positionStatus
   * @property {number} swap ProtoOAPosition swap
   * @property {number|null} [price] ProtoOAPosition price
   * @property {number|null} [stopLoss] ProtoOAPosition stopLoss
   * @property {number|null} [takeProfit] ProtoOAPosition takeProfit
   * @property {number|null} [utcLastUpdateTimestamp] ProtoOAPosition utcLastUpdateTimestamp
   * @property {number|null} [commission] ProtoOAPosition commission
   * @property {number|null} [marginRate] ProtoOAPosition marginRate
   * @property {number|null} [mirroringCommission] ProtoOAPosition mirroringCommission
   * @property {boolean|null} [guaranteedStopLoss] ProtoOAPosition guaranteedStopLoss
   * @property {number|null} [usedMargin] ProtoOAPosition usedMargin
   * @property {ProtoOAOrderTriggerMethod|null} [stopLossTriggerMethod] ProtoOAPosition stopLossTriggerMethod
   * @property {number|null} [moneyDigits] ProtoOAPosition moneyDigits
   * @property {boolean|null} [trailingStopLoss] ProtoOAPosition trailingStopLoss
   */

  /**
   * Constructs a new ProtoOAPosition.
   * @exports ProtoOAPosition
   * @classdesc Represents a ProtoOAPosition.
   * @implements IProtoOAPosition
   * @constructor
   * @param {IProtoOAPosition=} [properties] Properties to set
   */
  function ProtoOAPosition(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAPosition positionId.
   * @member {number} positionId
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition tradeData.
   * @member {IProtoOATradeData} tradeData
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.tradeData = null;

  /**
   * ProtoOAPosition positionStatus.
   * @member {ProtoOAPositionStatus} positionStatus
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.positionStatus = 1;

  /**
   * ProtoOAPosition swap.
   * @member {number} swap
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.swap = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition price.
   * @member {number} price
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.price = 0;

  /**
   * ProtoOAPosition stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.stopLoss = 0;

  /**
   * ProtoOAPosition takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.takeProfit = 0;

  /**
   * ProtoOAPosition utcLastUpdateTimestamp.
   * @member {number} utcLastUpdateTimestamp
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition commission.
   * @member {number} commission
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition marginRate.
   * @member {number} marginRate
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.marginRate = 0;

  /**
   * ProtoOAPosition mirroringCommission.
   * @member {number} mirroringCommission
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.mirroringCommission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAPosition guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOAPosition usedMargin.
   * @member {number} usedMargin
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.usedMargin = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOAPosition stopLossTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopLossTriggerMethod
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.stopLossTriggerMethod = 1;

  /**
   * ProtoOAPosition moneyDigits.
   * @member {number} moneyDigits
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.moneyDigits = 0;

  /**
   * ProtoOAPosition trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAPosition
   * @instance
   */
  ProtoOAPosition.prototype.trailingStopLoss = false;

  /**
   * Creates a new ProtoOAPosition instance using the specified properties.
   * @function create
   * @memberof ProtoOAPosition
   * @static
   * @param {IProtoOAPosition=} [properties] Properties to set
   * @returns {ProtoOAPosition} ProtoOAPosition instance
   */
  ProtoOAPosition.create = function create(properties) {
    return new ProtoOAPosition(properties);
  };

  /**
   * Encodes the specified ProtoOAPosition message. Does not implicitly {@link ProtoOAPosition.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAPosition
   * @static
   * @param {IProtoOAPosition} message ProtoOAPosition message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAPosition.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.positionId);
    $root.ProtoOATradeData.encode(
      message.tradeData,
      writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
    ).ldelim();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.positionStatus);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.swap);
    if (message.price != null && Object.hasOwnProperty.call(message, "price"))
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.price);
    if (
      message.stopLoss != null &&
      Object.hasOwnProperty.call(message, "stopLoss")
    )
      writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.stopLoss);
    if (
      message.takeProfit != null &&
      Object.hasOwnProperty.call(message, "takeProfit")
    )
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.takeProfit);
    if (
      message.utcLastUpdateTimestamp != null &&
      Object.hasOwnProperty.call(message, "utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 8, wireType 0 =*/ 64)
        .int64(message.utcLastUpdateTimestamp);
    if (
      message.commission != null &&
      Object.hasOwnProperty.call(message, "commission")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.commission);
    if (
      message.marginRate != null &&
      Object.hasOwnProperty.call(message, "marginRate")
    )
      writer.uint32(/* id 10, wireType 1 =*/ 81).double(message.marginRate);
    if (
      message.mirroringCommission != null &&
      Object.hasOwnProperty.call(message, "mirroringCommission")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.mirroringCommission);
    if (
      message.guaranteedStopLoss != null &&
      Object.hasOwnProperty.call(message, "guaranteedStopLoss")
    )
      writer
        .uint32(/* id 12, wireType 0 =*/ 96)
        .bool(message.guaranteedStopLoss);
    if (
      message.usedMargin != null &&
      Object.hasOwnProperty.call(message, "usedMargin")
    )
      writer.uint32(/* id 13, wireType 0 =*/ 104).uint64(message.usedMargin);
    if (
      message.stopLossTriggerMethod != null &&
      Object.hasOwnProperty.call(message, "stopLossTriggerMethod")
    )
      writer
        .uint32(/* id 14, wireType 0 =*/ 112)
        .int32(message.stopLossTriggerMethod);
    if (
      message.moneyDigits != null &&
      Object.hasOwnProperty.call(message, "moneyDigits")
    )
      writer.uint32(/* id 15, wireType 0 =*/ 120).uint32(message.moneyDigits);
    if (
      message.trailingStopLoss != null &&
      Object.hasOwnProperty.call(message, "trailingStopLoss")
    )
      writer
        .uint32(/* id 16, wireType 0 =*/ 128)
        .bool(message.trailingStopLoss);
    return writer;
  };

  /**
   * Decodes a ProtoOAPosition message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAPosition
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAPosition} ProtoOAPosition
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAPosition.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAPosition();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.positionId = reader.int64();
          break;
        }
        case 2: {
          message.tradeData = $root.ProtoOATradeData.decode(
            reader,
            reader.uint32(),
          );
          break;
        }
        case 3: {
          message.positionStatus = reader.int32();
          break;
        }
        case 4: {
          message.swap = reader.int64();
          break;
        }
        case 5: {
          message.price = reader.double();
          break;
        }
        case 6: {
          message.stopLoss = reader.double();
          break;
        }
        case 7: {
          message.takeProfit = reader.double();
          break;
        }
        case 8: {
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        }
        case 9: {
          message.commission = reader.int64();
          break;
        }
        case 10: {
          message.marginRate = reader.double();
          break;
        }
        case 11: {
          message.mirroringCommission = reader.int64();
          break;
        }
        case 12: {
          message.guaranteedStopLoss = reader.bool();
          break;
        }
        case 13: {
          message.usedMargin = reader.uint64();
          break;
        }
        case 14: {
          message.stopLossTriggerMethod = reader.int32();
          break;
        }
        case 15: {
          message.moneyDigits = reader.uint32();
          break;
        }
        case 16: {
          message.trailingStopLoss = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tradeData"))
      throw $util.ProtocolError("missing required 'tradeData'", {
        instance: message,
      });
    if (!message.hasOwnProperty("positionStatus"))
      throw $util.ProtocolError("missing required 'positionStatus'", {
        instance: message,
      });
    if (!message.hasOwnProperty("swap"))
      throw $util.ProtocolError("missing required 'swap'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAPosition
   * @function getTypeUrl
   * @memberof ProtoOAPosition
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAPosition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAPosition";
  };

  return ProtoOAPosition;
})());

export const ProtoOATradeData = ($root.ProtoOATradeData = (() => {
  /**
   * Properties of a ProtoOATradeData.
   * @exports IProtoOATradeData
   * @interface IProtoOATradeData
   * @property {number} symbolId ProtoOATradeData symbolId
   * @property {number} volume ProtoOATradeData volume
   * @property {ProtoOATradeSide} tradeSide ProtoOATradeData tradeSide
   * @property {number|null} [openTimestamp] ProtoOATradeData openTimestamp
   * @property {string|null} [label] ProtoOATradeData label
   * @property {boolean|null} [guaranteedStopLoss] ProtoOATradeData guaranteedStopLoss
   * @property {string|null} [comment] ProtoOATradeData comment
   */

  /**
   * Constructs a new ProtoOATradeData.
   * @exports ProtoOATradeData
   * @classdesc Represents a ProtoOATradeData.
   * @implements IProtoOATradeData
   * @constructor
   * @param {IProtoOATradeData=} [properties] Properties to set
   */
  function ProtoOATradeData(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATradeData symbolId.
   * @member {number} symbolId
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData volume.
   * @member {number} volume
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.tradeSide = 1;

  /**
   * ProtoOATradeData openTimestamp.
   * @member {number} openTimestamp
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.openTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATradeData label.
   * @member {string} label
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.label = "";

  /**
   * ProtoOATradeData guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOATradeData comment.
   * @member {string} comment
   * @memberof ProtoOATradeData
   * @instance
   */
  ProtoOATradeData.prototype.comment = "";

  /**
   * Creates a new ProtoOATradeData instance using the specified properties.
   * @function create
   * @memberof ProtoOATradeData
   * @static
   * @param {IProtoOATradeData=} [properties] Properties to set
   * @returns {ProtoOATradeData} ProtoOATradeData instance
   */
  ProtoOATradeData.create = function create(properties) {
    return new ProtoOATradeData(properties);
  };

  /**
   * Encodes the specified ProtoOATradeData message. Does not implicitly {@link ProtoOATradeData.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATradeData
   * @static
   * @param {IProtoOATradeData} message ProtoOATradeData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATradeData.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.symbolId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.volume);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.tradeSide);
    if (
      message.openTimestamp != null &&
      Object.hasOwnProperty.call(message, "openTimestamp")
    )
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.openTimestamp);
    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
      writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.label);
    if (
      message.guaranteedStopLoss != null &&
      Object.hasOwnProperty.call(message, "guaranteedStopLoss")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .bool(message.guaranteedStopLoss);
    if (
      message.comment != null &&
      Object.hasOwnProperty.call(message, "comment")
    )
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.comment);
    return writer;
  };

  /**
   * Decodes a ProtoOATradeData message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATradeData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATradeData} ProtoOATradeData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATradeData.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATradeData();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.symbolId = reader.int64();
          break;
        }
        case 2: {
          message.volume = reader.int64();
          break;
        }
        case 3: {
          message.tradeSide = reader.int32();
          break;
        }
        case 4: {
          message.openTimestamp = reader.int64();
          break;
        }
        case 5: {
          message.label = reader.string();
          break;
        }
        case 6: {
          message.guaranteedStopLoss = reader.bool();
          break;
        }
        case 7: {
          message.comment = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATradeData
   * @function getTypeUrl
   * @memberof ProtoOATradeData
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATradeData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATradeData";
  };

  return ProtoOATradeData;
})());

export const ProtoOAOrder = ($root.ProtoOAOrder = (() => {
  /**
   * Properties of a ProtoOAOrder.
   * @exports IProtoOAOrder
   * @interface IProtoOAOrder
   * @property {number} orderId ProtoOAOrder orderId
   * @property {IProtoOATradeData} tradeData ProtoOAOrder tradeData
   * @property {ProtoOAOrderType} orderType ProtoOAOrder orderType
   * @property {ProtoOAOrderStatus} orderStatus ProtoOAOrder orderStatus
   * @property {number|null} [expirationTimestamp] ProtoOAOrder expirationTimestamp
   * @property {number|null} [executionPrice] ProtoOAOrder executionPrice
   * @property {number|null} [executedVolume] ProtoOAOrder executedVolume
   * @property {number|null} [utcLastUpdateTimestamp] ProtoOAOrder utcLastUpdateTimestamp
   * @property {number|null} [baseSlippagePrice] ProtoOAOrder baseSlippagePrice
   * @property {number|null} [slippageInPoints] ProtoOAOrder slippageInPoints
   * @property {boolean|null} [closingOrder] ProtoOAOrder closingOrder
   * @property {number|null} [limitPrice] ProtoOAOrder limitPrice
   * @property {number|null} [stopPrice] ProtoOAOrder stopPrice
   * @property {number|null} [stopLoss] ProtoOAOrder stopLoss
   * @property {number|null} [takeProfit] ProtoOAOrder takeProfit
   * @property {string|null} [clientOrderId] ProtoOAOrder clientOrderId
   * @property {ProtoOATimeInForce|null} [timeInForce] ProtoOAOrder timeInForce
   * @property {number|null} [positionId] ProtoOAOrder positionId
   * @property {number|null} [relativeStopLoss] ProtoOAOrder relativeStopLoss
   * @property {number|null} [relativeTakeProfit] ProtoOAOrder relativeTakeProfit
   * @property {boolean|null} [isStopOut] ProtoOAOrder isStopOut
   * @property {boolean|null} [trailingStopLoss] ProtoOAOrder trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOAOrder stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOAOrder.
   * @exports ProtoOAOrder
   * @classdesc Represents a ProtoOAOrder.
   * @implements IProtoOAOrder
   * @constructor
   * @param {IProtoOAOrder=} [properties] Properties to set
   */
  function ProtoOAOrder(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrder orderId.
   * @member {number} orderId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder tradeData.
   * @member {IProtoOATradeData} tradeData
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.tradeData = null;

  /**
   * ProtoOAOrder orderType.
   * @member {ProtoOAOrderType} orderType
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderType = 1;

  /**
   * ProtoOAOrder orderStatus.
   * @member {ProtoOAOrderStatus} orderStatus
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.orderStatus = 1;

  /**
   * ProtoOAOrder expirationTimestamp.
   * @member {number} expirationTimestamp
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder executionPrice.
   * @member {number} executionPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.executionPrice = 0;

  /**
   * ProtoOAOrder executedVolume.
   * @member {number} executedVolume
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.executedVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder utcLastUpdateTimestamp.
   * @member {number} utcLastUpdateTimestamp
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder baseSlippagePrice.
   * @member {number} baseSlippagePrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.baseSlippagePrice = 0;

  /**
   * ProtoOAOrder slippageInPoints.
   * @member {number} slippageInPoints
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.slippageInPoints = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder closingOrder.
   * @member {boolean} closingOrder
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.closingOrder = false;

  /**
   * ProtoOAOrder limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.limitPrice = 0;

  /**
   * ProtoOAOrder stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopPrice = 0;

  /**
   * ProtoOAOrder stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopLoss = 0;

  /**
   * ProtoOAOrder takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.takeProfit = 0;

  /**
   * ProtoOAOrder clientOrderId.
   * @member {string} clientOrderId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.clientOrderId = "";

  /**
   * ProtoOAOrder timeInForce.
   * @member {ProtoOATimeInForce} timeInForce
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.timeInForce = 3;

  /**
   * ProtoOAOrder positionId.
   * @member {number} positionId
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder relativeStopLoss.
   * @member {number} relativeStopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder relativeTakeProfit.
   * @member {number} relativeTakeProfit
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrder isStopOut.
   * @member {boolean} isStopOut
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.isStopOut = false;

  /**
   * ProtoOAOrder trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.trailingStopLoss = false;

  /**
   * ProtoOAOrder stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOAOrder
   * @instance
   */
  ProtoOAOrder.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOAOrder instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrder
   * @static
   * @param {IProtoOAOrder=} [properties] Properties to set
   * @returns {ProtoOAOrder} ProtoOAOrder instance
   */
  ProtoOAOrder.create = function create(properties) {
    return new ProtoOAOrder(properties);
  };

  /**
   * Encodes the specified ProtoOAOrder message. Does not implicitly {@link ProtoOAOrder.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrder
   * @static
   * @param {IProtoOAOrder} message ProtoOAOrder message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrder.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.orderId);
    $root.ProtoOATradeData.encode(
      message.tradeData,
      writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
    ).ldelim();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.orderType);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.orderStatus);
    if (
      message.expirationTimestamp != null &&
      Object.hasOwnProperty.call(message, "expirationTimestamp")
    )
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int64(message.expirationTimestamp);
    if (
      message.executionPrice != null &&
      Object.hasOwnProperty.call(message, "executionPrice")
    )
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.executionPrice);
    if (
      message.executedVolume != null &&
      Object.hasOwnProperty.call(message, "executedVolume")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.executedVolume);
    if (
      message.utcLastUpdateTimestamp != null &&
      Object.hasOwnProperty.call(message, "utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int64(message.utcLastUpdateTimestamp);
    if (
      message.baseSlippagePrice != null &&
      Object.hasOwnProperty.call(message, "baseSlippagePrice")
    )
      writer
        .uint32(/* id 10, wireType 1 =*/ 81)
        .double(message.baseSlippagePrice);
    if (
      message.slippageInPoints != null &&
      Object.hasOwnProperty.call(message, "slippageInPoints")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.slippageInPoints);
    if (
      message.closingOrder != null &&
      Object.hasOwnProperty.call(message, "closingOrder")
    )
      writer.uint32(/* id 12, wireType 0 =*/ 96).bool(message.closingOrder);
    if (
      message.limitPrice != null &&
      Object.hasOwnProperty.call(message, "limitPrice")
    )
      writer.uint32(/* id 13, wireType 1 =*/ 105).double(message.limitPrice);
    if (
      message.stopPrice != null &&
      Object.hasOwnProperty.call(message, "stopPrice")
    )
      writer.uint32(/* id 14, wireType 1 =*/ 113).double(message.stopPrice);
    if (
      message.stopLoss != null &&
      Object.hasOwnProperty.call(message, "stopLoss")
    )
      writer.uint32(/* id 15, wireType 1 =*/ 121).double(message.stopLoss);
    if (
      message.takeProfit != null &&
      Object.hasOwnProperty.call(message, "takeProfit")
    )
      writer.uint32(/* id 16, wireType 1 =*/ 129).double(message.takeProfit);
    if (
      message.clientOrderId != null &&
      Object.hasOwnProperty.call(message, "clientOrderId")
    )
      writer.uint32(/* id 17, wireType 2 =*/ 138).string(message.clientOrderId);
    if (
      message.timeInForce != null &&
      Object.hasOwnProperty.call(message, "timeInForce")
    )
      writer.uint32(/* id 18, wireType 0 =*/ 144).int32(message.timeInForce);
    if (
      message.positionId != null &&
      Object.hasOwnProperty.call(message, "positionId")
    )
      writer.uint32(/* id 19, wireType 0 =*/ 152).int64(message.positionId);
    if (
      message.relativeStopLoss != null &&
      Object.hasOwnProperty.call(message, "relativeStopLoss")
    )
      writer
        .uint32(/* id 20, wireType 0 =*/ 160)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      Object.hasOwnProperty.call(message, "relativeTakeProfit")
    )
      writer
        .uint32(/* id 21, wireType 0 =*/ 168)
        .int64(message.relativeTakeProfit);
    if (
      message.isStopOut != null &&
      Object.hasOwnProperty.call(message, "isStopOut")
    )
      writer.uint32(/* id 22, wireType 0 =*/ 176).bool(message.isStopOut);
    if (
      message.trailingStopLoss != null &&
      Object.hasOwnProperty.call(message, "trailingStopLoss")
    )
      writer
        .uint32(/* id 23, wireType 0 =*/ 184)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      Object.hasOwnProperty.call(message, "stopTriggerMethod")
    )
      writer
        .uint32(/* id 24, wireType 0 =*/ 192)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrder message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrder
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrder} ProtoOAOrder
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrder.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrder();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.orderId = reader.int64();
          break;
        }
        case 2: {
          message.tradeData = $root.ProtoOATradeData.decode(
            reader,
            reader.uint32(),
          );
          break;
        }
        case 3: {
          message.orderType = reader.int32();
          break;
        }
        case 4: {
          message.orderStatus = reader.int32();
          break;
        }
        case 6: {
          message.expirationTimestamp = reader.int64();
          break;
        }
        case 7: {
          message.executionPrice = reader.double();
          break;
        }
        case 8: {
          message.executedVolume = reader.int64();
          break;
        }
        case 9: {
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        }
        case 10: {
          message.baseSlippagePrice = reader.double();
          break;
        }
        case 11: {
          message.slippageInPoints = reader.int64();
          break;
        }
        case 12: {
          message.closingOrder = reader.bool();
          break;
        }
        case 13: {
          message.limitPrice = reader.double();
          break;
        }
        case 14: {
          message.stopPrice = reader.double();
          break;
        }
        case 15: {
          message.stopLoss = reader.double();
          break;
        }
        case 16: {
          message.takeProfit = reader.double();
          break;
        }
        case 17: {
          message.clientOrderId = reader.string();
          break;
        }
        case 18: {
          message.timeInForce = reader.int32();
          break;
        }
        case 19: {
          message.positionId = reader.int64();
          break;
        }
        case 20: {
          message.relativeStopLoss = reader.int64();
          break;
        }
        case 21: {
          message.relativeTakeProfit = reader.int64();
          break;
        }
        case 22: {
          message.isStopOut = reader.bool();
          break;
        }
        case 23: {
          message.trailingStopLoss = reader.bool();
          break;
        }
        case 24: {
          message.stopTriggerMethod = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tradeData"))
      throw $util.ProtocolError("missing required 'tradeData'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderType"))
      throw $util.ProtocolError("missing required 'orderType'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderStatus"))
      throw $util.ProtocolError("missing required 'orderStatus'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrder
   * @function getTypeUrl
   * @memberof ProtoOAOrder
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrder";
  };

  return ProtoOAOrder;
})());

export const ProtoOABonusDepositWithdraw = ($root.ProtoOABonusDepositWithdraw =
  (() => {
    /**
     * Properties of a ProtoOABonusDepositWithdraw.
     * @exports IProtoOABonusDepositWithdraw
     * @interface IProtoOABonusDepositWithdraw
     * @property {ProtoOAChangeBonusType} operationType ProtoOABonusDepositWithdraw operationType
     * @property {number} bonusHistoryId ProtoOABonusDepositWithdraw bonusHistoryId
     * @property {number} managerBonus ProtoOABonusDepositWithdraw managerBonus
     * @property {number} managerDelta ProtoOABonusDepositWithdraw managerDelta
     * @property {number} ibBonus ProtoOABonusDepositWithdraw ibBonus
     * @property {number} ibDelta ProtoOABonusDepositWithdraw ibDelta
     * @property {number} changeBonusTimestamp ProtoOABonusDepositWithdraw changeBonusTimestamp
     * @property {string|null} [externalNote] ProtoOABonusDepositWithdraw externalNote
     * @property {number|null} [introducingBrokerId] ProtoOABonusDepositWithdraw introducingBrokerId
     * @property {number|null} [moneyDigits] ProtoOABonusDepositWithdraw moneyDigits
     */

    /**
     * Constructs a new ProtoOABonusDepositWithdraw.
     * @exports ProtoOABonusDepositWithdraw
     * @classdesc Represents a ProtoOABonusDepositWithdraw.
     * @implements IProtoOABonusDepositWithdraw
     * @constructor
     * @param {IProtoOABonusDepositWithdraw=} [properties] Properties to set
     */
    function ProtoOABonusDepositWithdraw(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOABonusDepositWithdraw operationType.
     * @member {ProtoOAChangeBonusType} operationType
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.operationType = 0;

    /**
     * ProtoOABonusDepositWithdraw bonusHistoryId.
     * @member {number} bonusHistoryId
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.bonusHistoryId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw managerBonus.
     * @member {number} managerBonus
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.managerBonus = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw managerDelta.
     * @member {number} managerDelta
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.managerDelta = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw ibBonus.
     * @member {number} ibBonus
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.ibBonus = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw ibDelta.
     * @member {number} ibDelta
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.ibDelta = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw changeBonusTimestamp.
     * @member {number} changeBonusTimestamp
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.changeBonusTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw externalNote.
     * @member {string} externalNote
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.externalNote = "";

    /**
     * ProtoOABonusDepositWithdraw introducingBrokerId.
     * @member {number} introducingBrokerId
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.introducingBrokerId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOABonusDepositWithdraw moneyDigits.
     * @member {number} moneyDigits
     * @memberof ProtoOABonusDepositWithdraw
     * @instance
     */
    ProtoOABonusDepositWithdraw.prototype.moneyDigits = 0;

    /**
     * Creates a new ProtoOABonusDepositWithdraw instance using the specified properties.
     * @function create
     * @memberof ProtoOABonusDepositWithdraw
     * @static
     * @param {IProtoOABonusDepositWithdraw=} [properties] Properties to set
     * @returns {ProtoOABonusDepositWithdraw} ProtoOABonusDepositWithdraw instance
     */
    ProtoOABonusDepositWithdraw.create = function create(properties) {
      return new ProtoOABonusDepositWithdraw(properties);
    };

    /**
     * Encodes the specified ProtoOABonusDepositWithdraw message. Does not implicitly {@link ProtoOABonusDepositWithdraw.verify|verify} messages.
     * @function encode
     * @memberof ProtoOABonusDepositWithdraw
     * @static
     * @param {IProtoOABonusDepositWithdraw} message ProtoOABonusDepositWithdraw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOABonusDepositWithdraw.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.operationType);
      writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.bonusHistoryId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.managerBonus);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.managerDelta);
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.ibBonus);
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.ibDelta);
      writer
        .uint32(/* id 7, wireType 0 =*/ 56)
        .int64(message.changeBonusTimestamp);
      if (
        message.externalNote != null &&
        Object.hasOwnProperty.call(message, "externalNote")
      )
        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.externalNote);
      if (
        message.introducingBrokerId != null &&
        Object.hasOwnProperty.call(message, "introducingBrokerId")
      )
        writer
          .uint32(/* id 9, wireType 0 =*/ 72)
          .int64(message.introducingBrokerId);
      if (
        message.moneyDigits != null &&
        Object.hasOwnProperty.call(message, "moneyDigits")
      )
        writer.uint32(/* id 10, wireType 0 =*/ 80).uint32(message.moneyDigits);
      return writer;
    };

    /**
     * Decodes a ProtoOABonusDepositWithdraw message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOABonusDepositWithdraw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOABonusDepositWithdraw} ProtoOABonusDepositWithdraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOABonusDepositWithdraw.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOABonusDepositWithdraw();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.operationType = reader.int32();
            break;
          }
          case 2: {
            message.bonusHistoryId = reader.int64();
            break;
          }
          case 3: {
            message.managerBonus = reader.int64();
            break;
          }
          case 4: {
            message.managerDelta = reader.int64();
            break;
          }
          case 5: {
            message.ibBonus = reader.int64();
            break;
          }
          case 6: {
            message.ibDelta = reader.int64();
            break;
          }
          case 7: {
            message.changeBonusTimestamp = reader.int64();
            break;
          }
          case 8: {
            message.externalNote = reader.string();
            break;
          }
          case 9: {
            message.introducingBrokerId = reader.int64();
            break;
          }
          case 10: {
            message.moneyDigits = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("operationType"))
        throw $util.ProtocolError("missing required 'operationType'", {
          instance: message,
        });
      if (!message.hasOwnProperty("bonusHistoryId"))
        throw $util.ProtocolError("missing required 'bonusHistoryId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("managerBonus"))
        throw $util.ProtocolError("missing required 'managerBonus'", {
          instance: message,
        });
      if (!message.hasOwnProperty("managerDelta"))
        throw $util.ProtocolError("missing required 'managerDelta'", {
          instance: message,
        });
      if (!message.hasOwnProperty("ibBonus"))
        throw $util.ProtocolError("missing required 'ibBonus'", {
          instance: message,
        });
      if (!message.hasOwnProperty("ibDelta"))
        throw $util.ProtocolError("missing required 'ibDelta'", {
          instance: message,
        });
      if (!message.hasOwnProperty("changeBonusTimestamp"))
        throw $util.ProtocolError("missing required 'changeBonusTimestamp'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOABonusDepositWithdraw
     * @function getTypeUrl
     * @memberof ProtoOABonusDepositWithdraw
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOABonusDepositWithdraw.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOABonusDepositWithdraw";
    };

    return ProtoOABonusDepositWithdraw;
  })());

export const ProtoOADepositWithdraw = ($root.ProtoOADepositWithdraw = (() => {
  /**
   * Properties of a ProtoOADepositWithdraw.
   * @exports IProtoOADepositWithdraw
   * @interface IProtoOADepositWithdraw
   * @property {ProtoOAChangeBalanceType} operationType ProtoOADepositWithdraw operationType
   * @property {number} balanceHistoryId ProtoOADepositWithdraw balanceHistoryId
   * @property {number} balance ProtoOADepositWithdraw balance
   * @property {number} delta ProtoOADepositWithdraw delta
   * @property {number} changeBalanceTimestamp ProtoOADepositWithdraw changeBalanceTimestamp
   * @property {string|null} [externalNote] ProtoOADepositWithdraw externalNote
   * @property {number|null} [balanceVersion] ProtoOADepositWithdraw balanceVersion
   * @property {number|null} [equity] ProtoOADepositWithdraw equity
   * @property {number|null} [moneyDigits] ProtoOADepositWithdraw moneyDigits
   */

  /**
   * Constructs a new ProtoOADepositWithdraw.
   * @exports ProtoOADepositWithdraw
   * @classdesc Represents a ProtoOADepositWithdraw.
   * @implements IProtoOADepositWithdraw
   * @constructor
   * @param {IProtoOADepositWithdraw=} [properties] Properties to set
   */
  function ProtoOADepositWithdraw(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepositWithdraw operationType.
   * @member {ProtoOAChangeBalanceType} operationType
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.operationType = 0;

  /**
   * ProtoOADepositWithdraw balanceHistoryId.
   * @member {number} balanceHistoryId
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balanceHistoryId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw balance.
   * @member {number} balance
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balance = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw delta.
   * @member {number} delta
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.delta = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw changeBalanceTimestamp.
   * @member {number} changeBalanceTimestamp
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.changeBalanceTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw externalNote.
   * @member {string} externalNote
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.externalNote = "";

  /**
   * ProtoOADepositWithdraw balanceVersion.
   * @member {number} balanceVersion
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.balanceVersion = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw equity.
   * @member {number} equity
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.equity = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepositWithdraw moneyDigits.
   * @member {number} moneyDigits
   * @memberof ProtoOADepositWithdraw
   * @instance
   */
  ProtoOADepositWithdraw.prototype.moneyDigits = 0;

  /**
   * Creates a new ProtoOADepositWithdraw instance using the specified properties.
   * @function create
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {IProtoOADepositWithdraw=} [properties] Properties to set
   * @returns {ProtoOADepositWithdraw} ProtoOADepositWithdraw instance
   */
  ProtoOADepositWithdraw.create = function create(properties) {
    return new ProtoOADepositWithdraw(properties);
  };

  /**
   * Encodes the specified ProtoOADepositWithdraw message. Does not implicitly {@link ProtoOADepositWithdraw.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {IProtoOADepositWithdraw} message ProtoOADepositWithdraw message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepositWithdraw.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.operationType);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.balanceHistoryId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.balance);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.delta);
    writer
      .uint32(/* id 5, wireType 0 =*/ 40)
      .int64(message.changeBalanceTimestamp);
    if (
      message.externalNote != null &&
      Object.hasOwnProperty.call(message, "externalNote")
    )
      writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.externalNote);
    if (
      message.balanceVersion != null &&
      Object.hasOwnProperty.call(message, "balanceVersion")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.balanceVersion);
    if (message.equity != null && Object.hasOwnProperty.call(message, "equity"))
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.equity);
    if (
      message.moneyDigits != null &&
      Object.hasOwnProperty.call(message, "moneyDigits")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).uint32(message.moneyDigits);
    return writer;
  };

  /**
   * Decodes a ProtoOADepositWithdraw message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepositWithdraw} ProtoOADepositWithdraw
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepositWithdraw.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepositWithdraw();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.operationType = reader.int32();
          break;
        }
        case 2: {
          message.balanceHistoryId = reader.int64();
          break;
        }
        case 3: {
          message.balance = reader.int64();
          break;
        }
        case 4: {
          message.delta = reader.int64();
          break;
        }
        case 5: {
          message.changeBalanceTimestamp = reader.int64();
          break;
        }
        case 6: {
          message.externalNote = reader.string();
          break;
        }
        case 7: {
          message.balanceVersion = reader.int64();
          break;
        }
        case 8: {
          message.equity = reader.int64();
          break;
        }
        case 9: {
          message.moneyDigits = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("operationType"))
      throw $util.ProtocolError("missing required 'operationType'", {
        instance: message,
      });
    if (!message.hasOwnProperty("balanceHistoryId"))
      throw $util.ProtocolError("missing required 'balanceHistoryId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("balance"))
      throw $util.ProtocolError("missing required 'balance'", {
        instance: message,
      });
    if (!message.hasOwnProperty("delta"))
      throw $util.ProtocolError("missing required 'delta'", {
        instance: message,
      });
    if (!message.hasOwnProperty("changeBalanceTimestamp"))
      throw $util.ProtocolError("missing required 'changeBalanceTimestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADepositWithdraw
   * @function getTypeUrl
   * @memberof ProtoOADepositWithdraw
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADepositWithdraw.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADepositWithdraw";
  };

  return ProtoOADepositWithdraw;
})());

export const ProtoOADeal = ($root.ProtoOADeal = (() => {
  /**
   * Properties of a ProtoOADeal.
   * @exports IProtoOADeal
   * @interface IProtoOADeal
   * @property {number} dealId ProtoOADeal dealId
   * @property {number} orderId ProtoOADeal orderId
   * @property {number} positionId ProtoOADeal positionId
   * @property {number} volume ProtoOADeal volume
   * @property {number} filledVolume ProtoOADeal filledVolume
   * @property {number} symbolId ProtoOADeal symbolId
   * @property {number} createTimestamp ProtoOADeal createTimestamp
   * @property {number} executionTimestamp ProtoOADeal executionTimestamp
   * @property {number|null} [utcLastUpdateTimestamp] ProtoOADeal utcLastUpdateTimestamp
   * @property {number|null} [executionPrice] ProtoOADeal executionPrice
   * @property {ProtoOATradeSide} tradeSide ProtoOADeal tradeSide
   * @property {ProtoOADealStatus} dealStatus ProtoOADeal dealStatus
   * @property {number|null} [marginRate] ProtoOADeal marginRate
   * @property {number|null} [commission] ProtoOADeal commission
   * @property {number|null} [baseToUsdConversionRate] ProtoOADeal baseToUsdConversionRate
   * @property {IProtoOAClosePositionDetail|null} [closePositionDetail] ProtoOADeal closePositionDetail
   * @property {number|null} [moneyDigits] ProtoOADeal moneyDigits
   */

  /**
   * Constructs a new ProtoOADeal.
   * @exports ProtoOADeal
   * @classdesc Represents a ProtoOADeal.
   * @implements IProtoOADeal
   * @constructor
   * @param {IProtoOADeal=} [properties] Properties to set
   */
  function ProtoOADeal(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADeal dealId.
   * @member {number} dealId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.dealId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal orderId.
   * @member {number} orderId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal positionId.
   * @member {number} positionId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal volume.
   * @member {number} volume
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal filledVolume.
   * @member {number} filledVolume
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.filledVolume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal symbolId.
   * @member {number} symbolId
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal createTimestamp.
   * @member {number} createTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.createTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal executionTimestamp.
   * @member {number} executionTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.executionTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal utcLastUpdateTimestamp.
   * @member {number} utcLastUpdateTimestamp
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal executionPrice.
   * @member {number} executionPrice
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.executionPrice = 0;

  /**
   * ProtoOADeal tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.tradeSide = 1;

  /**
   * ProtoOADeal dealStatus.
   * @member {ProtoOADealStatus} dealStatus
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.dealStatus = 2;

  /**
   * ProtoOADeal marginRate.
   * @member {number} marginRate
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.marginRate = 0;

  /**
   * ProtoOADeal commission.
   * @member {number} commission
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.commission = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADeal baseToUsdConversionRate.
   * @member {number} baseToUsdConversionRate
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.baseToUsdConversionRate = 0;

  /**
   * ProtoOADeal closePositionDetail.
   * @member {IProtoOAClosePositionDetail|null|undefined} closePositionDetail
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.closePositionDetail = null;

  /**
   * ProtoOADeal moneyDigits.
   * @member {number} moneyDigits
   * @memberof ProtoOADeal
   * @instance
   */
  ProtoOADeal.prototype.moneyDigits = 0;

  /**
   * Creates a new ProtoOADeal instance using the specified properties.
   * @function create
   * @memberof ProtoOADeal
   * @static
   * @param {IProtoOADeal=} [properties] Properties to set
   * @returns {ProtoOADeal} ProtoOADeal instance
   */
  ProtoOADeal.create = function create(properties) {
    return new ProtoOADeal(properties);
  };

  /**
   * Encodes the specified ProtoOADeal message. Does not implicitly {@link ProtoOADeal.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADeal
   * @static
   * @param {IProtoOADeal} message ProtoOADeal message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADeal.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.dealId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.orderId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.filledVolume);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.createTimestamp);
    writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.executionTimestamp);
    if (
      message.utcLastUpdateTimestamp != null &&
      Object.hasOwnProperty.call(message, "utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .int64(message.utcLastUpdateTimestamp);
    if (
      message.executionPrice != null &&
      Object.hasOwnProperty.call(message, "executionPrice")
    )
      writer.uint32(/* id 10, wireType 1 =*/ 81).double(message.executionPrice);
    writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.tradeSide);
    writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.dealStatus);
    if (
      message.marginRate != null &&
      Object.hasOwnProperty.call(message, "marginRate")
    )
      writer.uint32(/* id 13, wireType 1 =*/ 105).double(message.marginRate);
    if (
      message.commission != null &&
      Object.hasOwnProperty.call(message, "commission")
    )
      writer.uint32(/* id 14, wireType 0 =*/ 112).int64(message.commission);
    if (
      message.baseToUsdConversionRate != null &&
      Object.hasOwnProperty.call(message, "baseToUsdConversionRate")
    )
      writer
        .uint32(/* id 15, wireType 1 =*/ 121)
        .double(message.baseToUsdConversionRate);
    if (
      message.closePositionDetail != null &&
      Object.hasOwnProperty.call(message, "closePositionDetail")
    )
      $root.ProtoOAClosePositionDetail.encode(
        message.closePositionDetail,
        writer.uint32(/* id 16, wireType 2 =*/ 130).fork(),
      ).ldelim();
    if (
      message.moneyDigits != null &&
      Object.hasOwnProperty.call(message, "moneyDigits")
    )
      writer.uint32(/* id 17, wireType 0 =*/ 136).uint32(message.moneyDigits);
    return writer;
  };

  /**
   * Decodes a ProtoOADeal message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADeal
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADeal} ProtoOADeal
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADeal.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADeal();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.dealId = reader.int64();
          break;
        }
        case 2: {
          message.orderId = reader.int64();
          break;
        }
        case 3: {
          message.positionId = reader.int64();
          break;
        }
        case 4: {
          message.volume = reader.int64();
          break;
        }
        case 5: {
          message.filledVolume = reader.int64();
          break;
        }
        case 6: {
          message.symbolId = reader.int64();
          break;
        }
        case 7: {
          message.createTimestamp = reader.int64();
          break;
        }
        case 8: {
          message.executionTimestamp = reader.int64();
          break;
        }
        case 9: {
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        }
        case 10: {
          message.executionPrice = reader.double();
          break;
        }
        case 11: {
          message.tradeSide = reader.int32();
          break;
        }
        case 12: {
          message.dealStatus = reader.int32();
          break;
        }
        case 13: {
          message.marginRate = reader.double();
          break;
        }
        case 14: {
          message.commission = reader.int64();
          break;
        }
        case 15: {
          message.baseToUsdConversionRate = reader.double();
          break;
        }
        case 16: {
          message.closePositionDetail = $root.ProtoOAClosePositionDetail.decode(
            reader,
            reader.uint32(),
          );
          break;
        }
        case 17: {
          message.moneyDigits = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("dealId"))
      throw $util.ProtocolError("missing required 'dealId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    if (!message.hasOwnProperty("filledVolume"))
      throw $util.ProtocolError("missing required 'filledVolume'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("createTimestamp"))
      throw $util.ProtocolError("missing required 'createTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("executionTimestamp"))
      throw $util.ProtocolError("missing required 'executionTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message,
      });
    if (!message.hasOwnProperty("dealStatus"))
      throw $util.ProtocolError("missing required 'dealStatus'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADeal
   * @function getTypeUrl
   * @memberof ProtoOADeal
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADeal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADeal";
  };

  return ProtoOADeal;
})());

export const ProtoOAClosePositionDetail = ($root.ProtoOAClosePositionDetail =
  (() => {
    /**
     * Properties of a ProtoOAClosePositionDetail.
     * @exports IProtoOAClosePositionDetail
     * @interface IProtoOAClosePositionDetail
     * @property {number} entryPrice ProtoOAClosePositionDetail entryPrice
     * @property {number} grossProfit ProtoOAClosePositionDetail grossProfit
     * @property {number} swap ProtoOAClosePositionDetail swap
     * @property {number} commission ProtoOAClosePositionDetail commission
     * @property {number} balance ProtoOAClosePositionDetail balance
     * @property {number|null} [quoteToDepositConversionRate] ProtoOAClosePositionDetail quoteToDepositConversionRate
     * @property {number|null} [closedVolume] ProtoOAClosePositionDetail closedVolume
     * @property {number|null} [balanceVersion] ProtoOAClosePositionDetail balanceVersion
     * @property {number|null} [moneyDigits] ProtoOAClosePositionDetail moneyDigits
     * @property {number|null} [pnlConversionFee] ProtoOAClosePositionDetail pnlConversionFee
     */

    /**
     * Constructs a new ProtoOAClosePositionDetail.
     * @exports ProtoOAClosePositionDetail
     * @classdesc Represents a ProtoOAClosePositionDetail.
     * @implements IProtoOAClosePositionDetail
     * @constructor
     * @param {IProtoOAClosePositionDetail=} [properties] Properties to set
     */
    function ProtoOAClosePositionDetail(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAClosePositionDetail entryPrice.
     * @member {number} entryPrice
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.entryPrice = 0;

    /**
     * ProtoOAClosePositionDetail grossProfit.
     * @member {number} grossProfit
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.grossProfit = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail swap.
     * @member {number} swap
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.swap = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail commission.
     * @member {number} commission
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.commission = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail balance.
     * @member {number} balance
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.balance = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail quoteToDepositConversionRate.
     * @member {number} quoteToDepositConversionRate
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.quoteToDepositConversionRate = 0;

    /**
     * ProtoOAClosePositionDetail closedVolume.
     * @member {number} closedVolume
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.closedVolume = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail balanceVersion.
     * @member {number} balanceVersion
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.balanceVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAClosePositionDetail moneyDigits.
     * @member {number} moneyDigits
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.moneyDigits = 0;

    /**
     * ProtoOAClosePositionDetail pnlConversionFee.
     * @member {number} pnlConversionFee
     * @memberof ProtoOAClosePositionDetail
     * @instance
     */
    ProtoOAClosePositionDetail.prototype.pnlConversionFee = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAClosePositionDetail instance using the specified properties.
     * @function create
     * @memberof ProtoOAClosePositionDetail
     * @static
     * @param {IProtoOAClosePositionDetail=} [properties] Properties to set
     * @returns {ProtoOAClosePositionDetail} ProtoOAClosePositionDetail instance
     */
    ProtoOAClosePositionDetail.create = function create(properties) {
      return new ProtoOAClosePositionDetail(properties);
    };

    /**
     * Encodes the specified ProtoOAClosePositionDetail message. Does not implicitly {@link ProtoOAClosePositionDetail.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAClosePositionDetail
     * @static
     * @param {IProtoOAClosePositionDetail} message ProtoOAClosePositionDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAClosePositionDetail.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.entryPrice);
      writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.grossProfit);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.swap);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.commission);
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.balance);
      if (
        message.quoteToDepositConversionRate != null &&
        Object.hasOwnProperty.call(message, "quoteToDepositConversionRate")
      )
        writer
          .uint32(/* id 6, wireType 1 =*/ 49)
          .double(message.quoteToDepositConversionRate);
      if (
        message.closedVolume != null &&
        Object.hasOwnProperty.call(message, "closedVolume")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.closedVolume);
      if (
        message.balanceVersion != null &&
        Object.hasOwnProperty.call(message, "balanceVersion")
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.balanceVersion);
      if (
        message.moneyDigits != null &&
        Object.hasOwnProperty.call(message, "moneyDigits")
      )
        writer.uint32(/* id 9, wireType 0 =*/ 72).uint32(message.moneyDigits);
      if (
        message.pnlConversionFee != null &&
        Object.hasOwnProperty.call(message, "pnlConversionFee")
      )
        writer
          .uint32(/* id 10, wireType 0 =*/ 80)
          .int64(message.pnlConversionFee);
      return writer;
    };

    /**
     * Decodes a ProtoOAClosePositionDetail message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAClosePositionDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAClosePositionDetail} ProtoOAClosePositionDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAClosePositionDetail.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAClosePositionDetail();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.entryPrice = reader.double();
            break;
          }
          case 2: {
            message.grossProfit = reader.int64();
            break;
          }
          case 3: {
            message.swap = reader.int64();
            break;
          }
          case 4: {
            message.commission = reader.int64();
            break;
          }
          case 5: {
            message.balance = reader.int64();
            break;
          }
          case 6: {
            message.quoteToDepositConversionRate = reader.double();
            break;
          }
          case 7: {
            message.closedVolume = reader.int64();
            break;
          }
          case 8: {
            message.balanceVersion = reader.int64();
            break;
          }
          case 9: {
            message.moneyDigits = reader.uint32();
            break;
          }
          case 10: {
            message.pnlConversionFee = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("entryPrice"))
        throw $util.ProtocolError("missing required 'entryPrice'", {
          instance: message,
        });
      if (!message.hasOwnProperty("grossProfit"))
        throw $util.ProtocolError("missing required 'grossProfit'", {
          instance: message,
        });
      if (!message.hasOwnProperty("swap"))
        throw $util.ProtocolError("missing required 'swap'", {
          instance: message,
        });
      if (!message.hasOwnProperty("commission"))
        throw $util.ProtocolError("missing required 'commission'", {
          instance: message,
        });
      if (!message.hasOwnProperty("balance"))
        throw $util.ProtocolError("missing required 'balance'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAClosePositionDetail
     * @function getTypeUrl
     * @memberof ProtoOAClosePositionDetail
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAClosePositionDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAClosePositionDetail";
    };

    return ProtoOAClosePositionDetail;
  })());

export const ProtoOATrendbar = ($root.ProtoOATrendbar = (() => {
  /**
   * Properties of a ProtoOATrendbar.
   * @exports IProtoOATrendbar
   * @interface IProtoOATrendbar
   * @property {number} volume ProtoOATrendbar volume
   * @property {ProtoOATrendbarPeriod|null} [period] ProtoOATrendbar period
   * @property {number|null} [low] ProtoOATrendbar low
   * @property {number|null} [deltaOpen] ProtoOATrendbar deltaOpen
   * @property {number|null} [deltaClose] ProtoOATrendbar deltaClose
   * @property {number|null} [deltaHigh] ProtoOATrendbar deltaHigh
   * @property {number|null} [utcTimestampInMinutes] ProtoOATrendbar utcTimestampInMinutes
   */

  /**
   * Constructs a new ProtoOATrendbar.
   * @exports ProtoOATrendbar
   * @classdesc Represents a ProtoOATrendbar.
   * @implements IProtoOATrendbar
   * @constructor
   * @param {IProtoOATrendbar=} [properties] Properties to set
   */
  function ProtoOATrendbar(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATrendbar volume.
   * @member {number} volume
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrendbar period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.period = 1;

  /**
   * ProtoOATrendbar low.
   * @member {number} low
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.low = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATrendbar deltaOpen.
   * @member {number} deltaOpen
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaOpen = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar deltaClose.
   * @member {number} deltaClose
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaClose = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar deltaHigh.
   * @member {number} deltaHigh
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.deltaHigh = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOATrendbar utcTimestampInMinutes.
   * @member {number} utcTimestampInMinutes
   * @memberof ProtoOATrendbar
   * @instance
   */
  ProtoOATrendbar.prototype.utcTimestampInMinutes = 0;

  /**
   * Creates a new ProtoOATrendbar instance using the specified properties.
   * @function create
   * @memberof ProtoOATrendbar
   * @static
   * @param {IProtoOATrendbar=} [properties] Properties to set
   * @returns {ProtoOATrendbar} ProtoOATrendbar instance
   */
  ProtoOATrendbar.create = function create(properties) {
    return new ProtoOATrendbar(properties);
  };

  /**
   * Encodes the specified ProtoOATrendbar message. Does not implicitly {@link ProtoOATrendbar.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATrendbar
   * @static
   * @param {IProtoOATrendbar} message ProtoOATrendbar message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATrendbar.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.volume);
    if (message.period != null && Object.hasOwnProperty.call(message, "period"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.period);
    if (message.low != null && Object.hasOwnProperty.call(message, "low"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.low);
    if (
      message.deltaOpen != null &&
      Object.hasOwnProperty.call(message, "deltaOpen")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).uint64(message.deltaOpen);
    if (
      message.deltaClose != null &&
      Object.hasOwnProperty.call(message, "deltaClose")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).uint64(message.deltaClose);
    if (
      message.deltaHigh != null &&
      Object.hasOwnProperty.call(message, "deltaHigh")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).uint64(message.deltaHigh);
    if (
      message.utcTimestampInMinutes != null &&
      Object.hasOwnProperty.call(message, "utcTimestampInMinutes")
    )
      writer
        .uint32(/* id 9, wireType 0 =*/ 72)
        .uint32(message.utcTimestampInMinutes);
    return writer;
  };

  /**
   * Decodes a ProtoOATrendbar message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATrendbar
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATrendbar} ProtoOATrendbar
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATrendbar.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATrendbar();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 3: {
          message.volume = reader.int64();
          break;
        }
        case 4: {
          message.period = reader.int32();
          break;
        }
        case 5: {
          message.low = reader.int64();
          break;
        }
        case 6: {
          message.deltaOpen = reader.uint64();
          break;
        }
        case 7: {
          message.deltaClose = reader.uint64();
          break;
        }
        case 8: {
          message.deltaHigh = reader.uint64();
          break;
        }
        case 9: {
          message.utcTimestampInMinutes = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATrendbar
   * @function getTypeUrl
   * @memberof ProtoOATrendbar
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATrendbar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATrendbar";
  };

  return ProtoOATrendbar;
})());

export const ProtoOAExpectedMargin = ($root.ProtoOAExpectedMargin = (() => {
  /**
   * Properties of a ProtoOAExpectedMargin.
   * @exports IProtoOAExpectedMargin
   * @interface IProtoOAExpectedMargin
   * @property {number} volume ProtoOAExpectedMargin volume
   * @property {number} buyMargin ProtoOAExpectedMargin buyMargin
   * @property {number} sellMargin ProtoOAExpectedMargin sellMargin
   */

  /**
   * Constructs a new ProtoOAExpectedMargin.
   * @exports ProtoOAExpectedMargin
   * @classdesc Represents a ProtoOAExpectedMargin.
   * @implements IProtoOAExpectedMargin
   * @constructor
   * @param {IProtoOAExpectedMargin=} [properties] Properties to set
   */
  function ProtoOAExpectedMargin(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExpectedMargin volume.
   * @member {number} volume
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMargin buyMargin.
   * @member {number} buyMargin
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.buyMargin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExpectedMargin sellMargin.
   * @member {number} sellMargin
   * @memberof ProtoOAExpectedMargin
   * @instance
   */
  ProtoOAExpectedMargin.prototype.sellMargin = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAExpectedMargin instance using the specified properties.
   * @function create
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {IProtoOAExpectedMargin=} [properties] Properties to set
   * @returns {ProtoOAExpectedMargin} ProtoOAExpectedMargin instance
   */
  ProtoOAExpectedMargin.create = function create(properties) {
    return new ProtoOAExpectedMargin(properties);
  };

  /**
   * Encodes the specified ProtoOAExpectedMargin message. Does not implicitly {@link ProtoOAExpectedMargin.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {IProtoOAExpectedMargin} message ProtoOAExpectedMargin message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExpectedMargin.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.volume);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.buyMargin);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.sellMargin);
    return writer;
  };

  /**
   * Decodes a ProtoOAExpectedMargin message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExpectedMargin} ProtoOAExpectedMargin
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExpectedMargin.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExpectedMargin();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.volume = reader.int64();
          break;
        }
        case 2: {
          message.buyMargin = reader.int64();
          break;
        }
        case 3: {
          message.sellMargin = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    if (!message.hasOwnProperty("buyMargin"))
      throw $util.ProtocolError("missing required 'buyMargin'", {
        instance: message,
      });
    if (!message.hasOwnProperty("sellMargin"))
      throw $util.ProtocolError("missing required 'sellMargin'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAExpectedMargin
   * @function getTypeUrl
   * @memberof ProtoOAExpectedMargin
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAExpectedMargin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAExpectedMargin";
  };

  return ProtoOAExpectedMargin;
})());

export const ProtoOATickData = ($root.ProtoOATickData = (() => {
  /**
   * Properties of a ProtoOATickData.
   * @exports IProtoOATickData
   * @interface IProtoOATickData
   * @property {number} timestamp ProtoOATickData timestamp
   * @property {number} tick ProtoOATickData tick
   */

  /**
   * Constructs a new ProtoOATickData.
   * @exports ProtoOATickData
   * @classdesc Represents a ProtoOATickData.
   * @implements IProtoOATickData
   * @constructor
   * @param {IProtoOATickData=} [properties] Properties to set
   */
  function ProtoOATickData(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATickData timestamp.
   * @member {number} timestamp
   * @memberof ProtoOATickData
   * @instance
   */
  ProtoOATickData.prototype.timestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATickData tick.
   * @member {number} tick
   * @memberof ProtoOATickData
   * @instance
   */
  ProtoOATickData.prototype.tick = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATickData instance using the specified properties.
   * @function create
   * @memberof ProtoOATickData
   * @static
   * @param {IProtoOATickData=} [properties] Properties to set
   * @returns {ProtoOATickData} ProtoOATickData instance
   */
  ProtoOATickData.create = function create(properties) {
    return new ProtoOATickData(properties);
  };

  /**
   * Encodes the specified ProtoOATickData message. Does not implicitly {@link ProtoOATickData.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATickData
   * @static
   * @param {IProtoOATickData} message ProtoOATickData message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATickData.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.timestamp);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.tick);
    return writer;
  };

  /**
   * Decodes a ProtoOATickData message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATickData
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATickData} ProtoOATickData
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATickData.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATickData();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.timestamp = reader.int64();
          break;
        }
        case 2: {
          message.tick = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("timestamp"))
      throw $util.ProtocolError("missing required 'timestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tick"))
      throw $util.ProtocolError("missing required 'tick'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATickData
   * @function getTypeUrl
   * @memberof ProtoOATickData
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATickData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATickData";
  };

  return ProtoOATickData;
})());

export const ProtoOACtidProfile = ($root.ProtoOACtidProfile = (() => {
  /**
   * Properties of a ProtoOACtidProfile.
   * @exports IProtoOACtidProfile
   * @interface IProtoOACtidProfile
   * @property {number} userId ProtoOACtidProfile userId
   */

  /**
   * Constructs a new ProtoOACtidProfile.
   * @exports ProtoOACtidProfile
   * @classdesc Represents a ProtoOACtidProfile.
   * @implements IProtoOACtidProfile
   * @constructor
   * @param {IProtoOACtidProfile=} [properties] Properties to set
   */
  function ProtoOACtidProfile(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACtidProfile userId.
   * @member {number} userId
   * @memberof ProtoOACtidProfile
   * @instance
   */
  ProtoOACtidProfile.prototype.userId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACtidProfile instance using the specified properties.
   * @function create
   * @memberof ProtoOACtidProfile
   * @static
   * @param {IProtoOACtidProfile=} [properties] Properties to set
   * @returns {ProtoOACtidProfile} ProtoOACtidProfile instance
   */
  ProtoOACtidProfile.create = function create(properties) {
    return new ProtoOACtidProfile(properties);
  };

  /**
   * Encodes the specified ProtoOACtidProfile message. Does not implicitly {@link ProtoOACtidProfile.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACtidProfile
   * @static
   * @param {IProtoOACtidProfile} message ProtoOACtidProfile message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACtidProfile.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.userId);
    return writer;
  };

  /**
   * Decodes a ProtoOACtidProfile message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACtidProfile
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACtidProfile} ProtoOACtidProfile
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACtidProfile.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACtidProfile();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.userId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("userId"))
      throw $util.ProtocolError("missing required 'userId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOACtidProfile
   * @function getTypeUrl
   * @memberof ProtoOACtidProfile
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOACtidProfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOACtidProfile";
  };

  return ProtoOACtidProfile;
})());

export const ProtoOACtidTraderAccount = ($root.ProtoOACtidTraderAccount =
  (() => {
    /**
     * Properties of a ProtoOACtidTraderAccount.
     * @exports IProtoOACtidTraderAccount
     * @interface IProtoOACtidTraderAccount
     * @property {number} ctidTraderAccountId ProtoOACtidTraderAccount ctidTraderAccountId
     * @property {boolean|null} [isLive] ProtoOACtidTraderAccount isLive
     * @property {number|null} [traderLogin] ProtoOACtidTraderAccount traderLogin
     * @property {number|null} [lastClosingDealTimestamp] ProtoOACtidTraderAccount lastClosingDealTimestamp
     * @property {number|null} [lastBalanceUpdateTimestamp] ProtoOACtidTraderAccount lastBalanceUpdateTimestamp
     */

    /**
     * Constructs a new ProtoOACtidTraderAccount.
     * @exports ProtoOACtidTraderAccount
     * @classdesc Represents a ProtoOACtidTraderAccount.
     * @implements IProtoOACtidTraderAccount
     * @constructor
     * @param {IProtoOACtidTraderAccount=} [properties] Properties to set
     */
    function ProtoOACtidTraderAccount(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOACtidTraderAccount ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOACtidTraderAccount
     * @instance
     */
    ProtoOACtidTraderAccount.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * ProtoOACtidTraderAccount isLive.
     * @member {boolean} isLive
     * @memberof ProtoOACtidTraderAccount
     * @instance
     */
    ProtoOACtidTraderAccount.prototype.isLive = false;

    /**
     * ProtoOACtidTraderAccount traderLogin.
     * @member {number} traderLogin
     * @memberof ProtoOACtidTraderAccount
     * @instance
     */
    ProtoOACtidTraderAccount.prototype.traderLogin = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOACtidTraderAccount lastClosingDealTimestamp.
     * @member {number} lastClosingDealTimestamp
     * @memberof ProtoOACtidTraderAccount
     * @instance
     */
    ProtoOACtidTraderAccount.prototype.lastClosingDealTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOACtidTraderAccount lastBalanceUpdateTimestamp.
     * @member {number} lastBalanceUpdateTimestamp
     * @memberof ProtoOACtidTraderAccount
     * @instance
     */
    ProtoOACtidTraderAccount.prototype.lastBalanceUpdateTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOACtidTraderAccount instance using the specified properties.
     * @function create
     * @memberof ProtoOACtidTraderAccount
     * @static
     * @param {IProtoOACtidTraderAccount=} [properties] Properties to set
     * @returns {ProtoOACtidTraderAccount} ProtoOACtidTraderAccount instance
     */
    ProtoOACtidTraderAccount.create = function create(properties) {
      return new ProtoOACtidTraderAccount(properties);
    };

    /**
     * Encodes the specified ProtoOACtidTraderAccount message. Does not implicitly {@link ProtoOACtidTraderAccount.verify|verify} messages.
     * @function encode
     * @memberof ProtoOACtidTraderAccount
     * @static
     * @param {IProtoOACtidTraderAccount} message ProtoOACtidTraderAccount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOACtidTraderAccount.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer
        .uint32(/* id 1, wireType 0 =*/ 8)
        .uint64(message.ctidTraderAccountId);
      if (
        message.isLive != null &&
        Object.hasOwnProperty.call(message, "isLive")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.isLive);
      if (
        message.traderLogin != null &&
        Object.hasOwnProperty.call(message, "traderLogin")
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.traderLogin);
      if (
        message.lastClosingDealTimestamp != null &&
        Object.hasOwnProperty.call(message, "lastClosingDealTimestamp")
      )
        writer
          .uint32(/* id 4, wireType 0 =*/ 32)
          .int64(message.lastClosingDealTimestamp);
      if (
        message.lastBalanceUpdateTimestamp != null &&
        Object.hasOwnProperty.call(message, "lastBalanceUpdateTimestamp")
      )
        writer
          .uint32(/* id 5, wireType 0 =*/ 40)
          .int64(message.lastBalanceUpdateTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOACtidTraderAccount message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOACtidTraderAccount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOACtidTraderAccount} ProtoOACtidTraderAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOACtidTraderAccount.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOACtidTraderAccount();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.ctidTraderAccountId = reader.uint64();
            break;
          }
          case 2: {
            message.isLive = reader.bool();
            break;
          }
          case 3: {
            message.traderLogin = reader.int64();
            break;
          }
          case 4: {
            message.lastClosingDealTimestamp = reader.int64();
            break;
          }
          case 5: {
            message.lastBalanceUpdateTimestamp = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOACtidTraderAccount
     * @function getTypeUrl
     * @memberof ProtoOACtidTraderAccount
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOACtidTraderAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOACtidTraderAccount";
    };

    return ProtoOACtidTraderAccount;
  })());

export const ProtoOAAssetClass = ($root.ProtoOAAssetClass = (() => {
  /**
   * Properties of a ProtoOAAssetClass.
   * @exports IProtoOAAssetClass
   * @interface IProtoOAAssetClass
   * @property {number|null} [id] ProtoOAAssetClass id
   * @property {string|null} [name] ProtoOAAssetClass name
   */

  /**
   * Constructs a new ProtoOAAssetClass.
   * @exports ProtoOAAssetClass
   * @classdesc Represents a ProtoOAAssetClass.
   * @implements IProtoOAAssetClass
   * @constructor
   * @param {IProtoOAAssetClass=} [properties] Properties to set
   */
  function ProtoOAAssetClass(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetClass id.
   * @member {number} id
   * @memberof ProtoOAAssetClass
   * @instance
   */
  ProtoOAAssetClass.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAssetClass name.
   * @member {string} name
   * @memberof ProtoOAAssetClass
   * @instance
   */
  ProtoOAAssetClass.prototype.name = "";

  /**
   * Creates a new ProtoOAAssetClass instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetClass
   * @static
   * @param {IProtoOAAssetClass=} [properties] Properties to set
   * @returns {ProtoOAAssetClass} ProtoOAAssetClass instance
   */
  ProtoOAAssetClass.create = function create(properties) {
    return new ProtoOAAssetClass(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetClass message. Does not implicitly {@link ProtoOAAssetClass.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetClass
   * @static
   * @param {IProtoOAAssetClass} message ProtoOAAssetClass message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetClass.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
      writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id);
    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetClass message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetClass
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetClass} ProtoOAAssetClass
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetClass.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetClass();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.int64();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAssetClass
   * @function getTypeUrl
   * @memberof ProtoOAAssetClass
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAssetClass.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAssetClass";
  };

  return ProtoOAAssetClass;
})());

export const ProtoOADepthQuote = ($root.ProtoOADepthQuote = (() => {
  /**
   * Properties of a ProtoOADepthQuote.
   * @exports IProtoOADepthQuote
   * @interface IProtoOADepthQuote
   * @property {number} id ProtoOADepthQuote id
   * @property {number} size ProtoOADepthQuote size
   * @property {number|null} [bid] ProtoOADepthQuote bid
   * @property {number|null} [ask] ProtoOADepthQuote ask
   */

  /**
   * Constructs a new ProtoOADepthQuote.
   * @exports ProtoOADepthQuote
   * @classdesc Represents a ProtoOADepthQuote.
   * @implements IProtoOADepthQuote
   * @constructor
   * @param {IProtoOADepthQuote=} [properties] Properties to set
   */
  function ProtoOADepthQuote(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepthQuote id.
   * @member {number} id
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.id = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote size.
   * @member {number} size
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.size = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote bid.
   * @member {number} bid
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.bid = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthQuote ask.
   * @member {number} ask
   * @memberof ProtoOADepthQuote
   * @instance
   */
  ProtoOADepthQuote.prototype.ask = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * Creates a new ProtoOADepthQuote instance using the specified properties.
   * @function create
   * @memberof ProtoOADepthQuote
   * @static
   * @param {IProtoOADepthQuote=} [properties] Properties to set
   * @returns {ProtoOADepthQuote} ProtoOADepthQuote instance
   */
  ProtoOADepthQuote.create = function create(properties) {
    return new ProtoOADepthQuote(properties);
  };

  /**
   * Encodes the specified ProtoOADepthQuote message. Does not implicitly {@link ProtoOADepthQuote.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepthQuote
   * @static
   * @param {IProtoOADepthQuote} message ProtoOADepthQuote message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepthQuote.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.size);
    if (message.bid != null && Object.hasOwnProperty.call(message, "bid"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.bid);
    if (message.ask != null && Object.hasOwnProperty.call(message, "ask"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).uint64(message.ask);
    return writer;
  };

  /**
   * Decodes a ProtoOADepthQuote message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepthQuote
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepthQuote} ProtoOADepthQuote
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepthQuote.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepthQuote();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.uint64();
          break;
        }
        case 3: {
          message.size = reader.uint64();
          break;
        }
        case 4: {
          message.bid = reader.uint64();
          break;
        }
        case 5: {
          message.ask = reader.uint64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("id"))
      throw $util.ProtocolError("missing required 'id'", { instance: message });
    if (!message.hasOwnProperty("size"))
      throw $util.ProtocolError("missing required 'size'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADepthQuote
   * @function getTypeUrl
   * @memberof ProtoOADepthQuote
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADepthQuote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADepthQuote";
  };

  return ProtoOADepthQuote;
})());

export const ProtoOAMarginCall = ($root.ProtoOAMarginCall = (() => {
  /**
   * Properties of a ProtoOAMarginCall.
   * @exports IProtoOAMarginCall
   * @interface IProtoOAMarginCall
   * @property {ProtoOANotificationType} marginCallType ProtoOAMarginCall marginCallType
   * @property {number} marginLevelThreshold ProtoOAMarginCall marginLevelThreshold
   * @property {number|null} [utcLastUpdateTimestamp] ProtoOAMarginCall utcLastUpdateTimestamp
   */

  /**
   * Constructs a new ProtoOAMarginCall.
   * @exports ProtoOAMarginCall
   * @classdesc Represents a ProtoOAMarginCall.
   * @implements IProtoOAMarginCall
   * @constructor
   * @param {IProtoOAMarginCall=} [properties] Properties to set
   */
  function ProtoOAMarginCall(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAMarginCall marginCallType.
   * @member {ProtoOANotificationType} marginCallType
   * @memberof ProtoOAMarginCall
   * @instance
   */
  ProtoOAMarginCall.prototype.marginCallType = 61;

  /**
   * ProtoOAMarginCall marginLevelThreshold.
   * @member {number} marginLevelThreshold
   * @memberof ProtoOAMarginCall
   * @instance
   */
  ProtoOAMarginCall.prototype.marginLevelThreshold = 0;

  /**
   * ProtoOAMarginCall utcLastUpdateTimestamp.
   * @member {number} utcLastUpdateTimestamp
   * @memberof ProtoOAMarginCall
   * @instance
   */
  ProtoOAMarginCall.prototype.utcLastUpdateTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAMarginCall instance using the specified properties.
   * @function create
   * @memberof ProtoOAMarginCall
   * @static
   * @param {IProtoOAMarginCall=} [properties] Properties to set
   * @returns {ProtoOAMarginCall} ProtoOAMarginCall instance
   */
  ProtoOAMarginCall.create = function create(properties) {
    return new ProtoOAMarginCall(properties);
  };

  /**
   * Encodes the specified ProtoOAMarginCall message. Does not implicitly {@link ProtoOAMarginCall.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAMarginCall
   * @static
   * @param {IProtoOAMarginCall} message ProtoOAMarginCall message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAMarginCall.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.marginCallType);
    writer
      .uint32(/* id 2, wireType 1 =*/ 17)
      .double(message.marginLevelThreshold);
    if (
      message.utcLastUpdateTimestamp != null &&
      Object.hasOwnProperty.call(message, "utcLastUpdateTimestamp")
    )
      writer
        .uint32(/* id 3, wireType 0 =*/ 24)
        .int64(message.utcLastUpdateTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOAMarginCall message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAMarginCall
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAMarginCall} ProtoOAMarginCall
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAMarginCall.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAMarginCall();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.marginCallType = reader.int32();
          break;
        }
        case 2: {
          message.marginLevelThreshold = reader.double();
          break;
        }
        case 3: {
          message.utcLastUpdateTimestamp = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("marginCallType"))
      throw $util.ProtocolError("missing required 'marginCallType'", {
        instance: message,
      });
    if (!message.hasOwnProperty("marginLevelThreshold"))
      throw $util.ProtocolError("missing required 'marginLevelThreshold'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAMarginCall
   * @function getTypeUrl
   * @memberof ProtoOAMarginCall
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAMarginCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAMarginCall";
  };

  return ProtoOAMarginCall;
})());

export const ProtoOAHoliday = ($root.ProtoOAHoliday = (() => {
  /**
   * Properties of a ProtoOAHoliday.
   * @exports IProtoOAHoliday
   * @interface IProtoOAHoliday
   * @property {number} holidayId ProtoOAHoliday holidayId
   * @property {string} name ProtoOAHoliday name
   * @property {string|null} [description] ProtoOAHoliday description
   * @property {string} scheduleTimeZone ProtoOAHoliday scheduleTimeZone
   * @property {number} holidayDate ProtoOAHoliday holidayDate
   * @property {boolean} isRecurring ProtoOAHoliday isRecurring
   * @property {number|null} [startSecond] ProtoOAHoliday startSecond
   * @property {number|null} [endSecond] ProtoOAHoliday endSecond
   */

  /**
   * Constructs a new ProtoOAHoliday.
   * @exports ProtoOAHoliday
   * @classdesc Represents a ProtoOAHoliday.
   * @implements IProtoOAHoliday
   * @constructor
   * @param {IProtoOAHoliday=} [properties] Properties to set
   */
  function ProtoOAHoliday(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAHoliday holidayId.
   * @member {number} holidayId
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.holidayId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAHoliday name.
   * @member {string} name
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.name = "";

  /**
   * ProtoOAHoliday description.
   * @member {string} description
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.description = "";

  /**
   * ProtoOAHoliday scheduleTimeZone.
   * @member {string} scheduleTimeZone
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.scheduleTimeZone = "";

  /**
   * ProtoOAHoliday holidayDate.
   * @member {number} holidayDate
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.holidayDate = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAHoliday isRecurring.
   * @member {boolean} isRecurring
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.isRecurring = false;

  /**
   * ProtoOAHoliday startSecond.
   * @member {number} startSecond
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.startSecond = 0;

  /**
   * ProtoOAHoliday endSecond.
   * @member {number} endSecond
   * @memberof ProtoOAHoliday
   * @instance
   */
  ProtoOAHoliday.prototype.endSecond = 0;

  /**
   * Creates a new ProtoOAHoliday instance using the specified properties.
   * @function create
   * @memberof ProtoOAHoliday
   * @static
   * @param {IProtoOAHoliday=} [properties] Properties to set
   * @returns {ProtoOAHoliday} ProtoOAHoliday instance
   */
  ProtoOAHoliday.create = function create(properties) {
    return new ProtoOAHoliday(properties);
  };

  /**
   * Encodes the specified ProtoOAHoliday message. Does not implicitly {@link ProtoOAHoliday.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAHoliday
   * @static
   * @param {IProtoOAHoliday} message ProtoOAHoliday message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAHoliday.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.holidayId);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.description);
    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.scheduleTimeZone);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.holidayDate);
    writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.isRecurring);
    if (
      message.startSecond != null &&
      Object.hasOwnProperty.call(message, "startSecond")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.startSecond);
    if (
      message.endSecond != null &&
      Object.hasOwnProperty.call(message, "endSecond")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.endSecond);
    return writer;
  };

  /**
   * Decodes a ProtoOAHoliday message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAHoliday
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAHoliday} ProtoOAHoliday
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAHoliday.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAHoliday();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.holidayId = reader.int64();
          break;
        }
        case 2: {
          message.name = reader.string();
          break;
        }
        case 3: {
          message.description = reader.string();
          break;
        }
        case 4: {
          message.scheduleTimeZone = reader.string();
          break;
        }
        case 5: {
          message.holidayDate = reader.int64();
          break;
        }
        case 6: {
          message.isRecurring = reader.bool();
          break;
        }
        case 7: {
          message.startSecond = reader.int32();
          break;
        }
        case 8: {
          message.endSecond = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("holidayId"))
      throw $util.ProtocolError("missing required 'holidayId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("name"))
      throw $util.ProtocolError("missing required 'name'", {
        instance: message,
      });
    if (!message.hasOwnProperty("scheduleTimeZone"))
      throw $util.ProtocolError("missing required 'scheduleTimeZone'", {
        instance: message,
      });
    if (!message.hasOwnProperty("holidayDate"))
      throw $util.ProtocolError("missing required 'holidayDate'", {
        instance: message,
      });
    if (!message.hasOwnProperty("isRecurring"))
      throw $util.ProtocolError("missing required 'isRecurring'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAHoliday
   * @function getTypeUrl
   * @memberof ProtoOAHoliday
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAHoliday.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAHoliday";
  };

  return ProtoOAHoliday;
})());

export const ProtoOADynamicLeverage = ($root.ProtoOADynamicLeverage = (() => {
  /**
   * Properties of a ProtoOADynamicLeverage.
   * @exports IProtoOADynamicLeverage
   * @interface IProtoOADynamicLeverage
   * @property {number} leverageId ProtoOADynamicLeverage leverageId
   * @property {Array.<IProtoOADynamicLeverageTier>|null} [tiers] ProtoOADynamicLeverage tiers
   */

  /**
   * Constructs a new ProtoOADynamicLeverage.
   * @exports ProtoOADynamicLeverage
   * @classdesc Represents a ProtoOADynamicLeverage.
   * @implements IProtoOADynamicLeverage
   * @constructor
   * @param {IProtoOADynamicLeverage=} [properties] Properties to set
   */
  function ProtoOADynamicLeverage(properties) {
    this.tiers = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADynamicLeverage leverageId.
   * @member {number} leverageId
   * @memberof ProtoOADynamicLeverage
   * @instance
   */
  ProtoOADynamicLeverage.prototype.leverageId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADynamicLeverage tiers.
   * @member {Array.<IProtoOADynamicLeverageTier>} tiers
   * @memberof ProtoOADynamicLeverage
   * @instance
   */
  ProtoOADynamicLeverage.prototype.tiers = $util.emptyArray;

  /**
   * Creates a new ProtoOADynamicLeverage instance using the specified properties.
   * @function create
   * @memberof ProtoOADynamicLeverage
   * @static
   * @param {IProtoOADynamicLeverage=} [properties] Properties to set
   * @returns {ProtoOADynamicLeverage} ProtoOADynamicLeverage instance
   */
  ProtoOADynamicLeverage.create = function create(properties) {
    return new ProtoOADynamicLeverage(properties);
  };

  /**
   * Encodes the specified ProtoOADynamicLeverage message. Does not implicitly {@link ProtoOADynamicLeverage.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADynamicLeverage
   * @static
   * @param {IProtoOADynamicLeverage} message ProtoOADynamicLeverage message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADynamicLeverage.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.leverageId);
    if (message.tiers != null && message.tiers.length)
      for (let i = 0; i < message.tiers.length; ++i)
        $root.ProtoOADynamicLeverageTier.encode(
          message.tiers[i],
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOADynamicLeverage message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADynamicLeverage
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADynamicLeverage} ProtoOADynamicLeverage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADynamicLeverage.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADynamicLeverage();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.leverageId = reader.int64();
          break;
        }
        case 2: {
          if (!(message.tiers && message.tiers.length)) message.tiers = [];
          message.tiers.push(
            $root.ProtoOADynamicLeverageTier.decode(reader, reader.uint32()),
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("leverageId"))
      throw $util.ProtocolError("missing required 'leverageId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADynamicLeverage
   * @function getTypeUrl
   * @memberof ProtoOADynamicLeverage
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADynamicLeverage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADynamicLeverage";
  };

  return ProtoOADynamicLeverage;
})());

export const ProtoOADynamicLeverageTier = ($root.ProtoOADynamicLeverageTier =
  (() => {
    /**
     * Properties of a ProtoOADynamicLeverageTier.
     * @exports IProtoOADynamicLeverageTier
     * @interface IProtoOADynamicLeverageTier
     * @property {number} volume ProtoOADynamicLeverageTier volume
     * @property {number} leverage ProtoOADynamicLeverageTier leverage
     */

    /**
     * Constructs a new ProtoOADynamicLeverageTier.
     * @exports ProtoOADynamicLeverageTier
     * @classdesc Represents a ProtoOADynamicLeverageTier.
     * @implements IProtoOADynamicLeverageTier
     * @constructor
     * @param {IProtoOADynamicLeverageTier=} [properties] Properties to set
     */
    function ProtoOADynamicLeverageTier(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOADynamicLeverageTier volume.
     * @member {number} volume
     * @memberof ProtoOADynamicLeverageTier
     * @instance
     */
    ProtoOADynamicLeverageTier.prototype.volume = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADynamicLeverageTier leverage.
     * @member {number} leverage
     * @memberof ProtoOADynamicLeverageTier
     * @instance
     */
    ProtoOADynamicLeverageTier.prototype.leverage = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOADynamicLeverageTier instance using the specified properties.
     * @function create
     * @memberof ProtoOADynamicLeverageTier
     * @static
     * @param {IProtoOADynamicLeverageTier=} [properties] Properties to set
     * @returns {ProtoOADynamicLeverageTier} ProtoOADynamicLeverageTier instance
     */
    ProtoOADynamicLeverageTier.create = function create(properties) {
      return new ProtoOADynamicLeverageTier(properties);
    };

    /**
     * Encodes the specified ProtoOADynamicLeverageTier message. Does not implicitly {@link ProtoOADynamicLeverageTier.verify|verify} messages.
     * @function encode
     * @memberof ProtoOADynamicLeverageTier
     * @static
     * @param {IProtoOADynamicLeverageTier} message ProtoOADynamicLeverageTier message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOADynamicLeverageTier.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.volume);
      writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.leverage);
      return writer;
    };

    /**
     * Decodes a ProtoOADynamicLeverageTier message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOADynamicLeverageTier
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOADynamicLeverageTier} ProtoOADynamicLeverageTier
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOADynamicLeverageTier.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOADynamicLeverageTier();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.volume = reader.int64();
            break;
          }
          case 2: {
            message.leverage = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("volume"))
        throw $util.ProtocolError("missing required 'volume'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leverage"))
        throw $util.ProtocolError("missing required 'leverage'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOADynamicLeverageTier
     * @function getTypeUrl
     * @memberof ProtoOADynamicLeverageTier
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOADynamicLeverageTier.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOADynamicLeverageTier";
    };

    return ProtoOADynamicLeverageTier;
  })());

export const ProtoOADealOffset = ($root.ProtoOADealOffset = (() => {
  /**
   * Properties of a ProtoOADealOffset.
   * @exports IProtoOADealOffset
   * @interface IProtoOADealOffset
   * @property {number} dealId ProtoOADealOffset dealId
   * @property {number} volume ProtoOADealOffset volume
   * @property {number|null} [executionTimestamp] ProtoOADealOffset executionTimestamp
   * @property {number|null} [executionPrice] ProtoOADealOffset executionPrice
   */

  /**
   * Constructs a new ProtoOADealOffset.
   * @exports ProtoOADealOffset
   * @classdesc Represents a ProtoOADealOffset.
   * @implements IProtoOADealOffset
   * @constructor
   * @param {IProtoOADealOffset=} [properties] Properties to set
   */
  function ProtoOADealOffset(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADealOffset dealId.
   * @member {number} dealId
   * @memberof ProtoOADealOffset
   * @instance
   */
  ProtoOADealOffset.prototype.dealId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealOffset volume.
   * @member {number} volume
   * @memberof ProtoOADealOffset
   * @instance
   */
  ProtoOADealOffset.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealOffset executionTimestamp.
   * @member {number} executionTimestamp
   * @memberof ProtoOADealOffset
   * @instance
   */
  ProtoOADealOffset.prototype.executionTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealOffset executionPrice.
   * @member {number} executionPrice
   * @memberof ProtoOADealOffset
   * @instance
   */
  ProtoOADealOffset.prototype.executionPrice = 0;

  /**
   * Creates a new ProtoOADealOffset instance using the specified properties.
   * @function create
   * @memberof ProtoOADealOffset
   * @static
   * @param {IProtoOADealOffset=} [properties] Properties to set
   * @returns {ProtoOADealOffset} ProtoOADealOffset instance
   */
  ProtoOADealOffset.create = function create(properties) {
    return new ProtoOADealOffset(properties);
  };

  /**
   * Encodes the specified ProtoOADealOffset message. Does not implicitly {@link ProtoOADealOffset.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADealOffset
   * @static
   * @param {IProtoOADealOffset} message ProtoOADealOffset message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADealOffset.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.dealId);
    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.volume);
    if (
      message.executionTimestamp != null &&
      Object.hasOwnProperty.call(message, "executionTimestamp")
    )
      writer
        .uint32(/* id 3, wireType 0 =*/ 24)
        .int64(message.executionTimestamp);
    if (
      message.executionPrice != null &&
      Object.hasOwnProperty.call(message, "executionPrice")
    )
      writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.executionPrice);
    return writer;
  };

  /**
   * Decodes a ProtoOADealOffset message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADealOffset
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADealOffset} ProtoOADealOffset
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADealOffset.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADealOffset();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.dealId = reader.int64();
          break;
        }
        case 2: {
          message.volume = reader.int64();
          break;
        }
        case 3: {
          message.executionTimestamp = reader.int64();
          break;
        }
        case 4: {
          message.executionPrice = reader.double();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("dealId"))
      throw $util.ProtocolError("missing required 'dealId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADealOffset
   * @function getTypeUrl
   * @memberof ProtoOADealOffset
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADealOffset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADealOffset";
  };

  return ProtoOADealOffset;
})());

export const ProtoOAPositionUnrealizedPnL =
  ($root.ProtoOAPositionUnrealizedPnL = (() => {
    /**
     * Properties of a ProtoOAPositionUnrealizedPnL.
     * @exports IProtoOAPositionUnrealizedPnL
     * @interface IProtoOAPositionUnrealizedPnL
     * @property {number} positionId ProtoOAPositionUnrealizedPnL positionId
     * @property {number} grossUnrealizedPnL ProtoOAPositionUnrealizedPnL grossUnrealizedPnL
     * @property {number} netUnrealizedPnL ProtoOAPositionUnrealizedPnL netUnrealizedPnL
     */

    /**
     * Constructs a new ProtoOAPositionUnrealizedPnL.
     * @exports ProtoOAPositionUnrealizedPnL
     * @classdesc Represents a ProtoOAPositionUnrealizedPnL.
     * @implements IProtoOAPositionUnrealizedPnL
     * @constructor
     * @param {IProtoOAPositionUnrealizedPnL=} [properties] Properties to set
     */
    function ProtoOAPositionUnrealizedPnL(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAPositionUnrealizedPnL positionId.
     * @member {number} positionId
     * @memberof ProtoOAPositionUnrealizedPnL
     * @instance
     */
    ProtoOAPositionUnrealizedPnL.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAPositionUnrealizedPnL grossUnrealizedPnL.
     * @member {number} grossUnrealizedPnL
     * @memberof ProtoOAPositionUnrealizedPnL
     * @instance
     */
    ProtoOAPositionUnrealizedPnL.prototype.grossUnrealizedPnL = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAPositionUnrealizedPnL netUnrealizedPnL.
     * @member {number} netUnrealizedPnL
     * @memberof ProtoOAPositionUnrealizedPnL
     * @instance
     */
    ProtoOAPositionUnrealizedPnL.prototype.netUnrealizedPnL = 0;

    /**
     * Creates a new ProtoOAPositionUnrealizedPnL instance using the specified properties.
     * @function create
     * @memberof ProtoOAPositionUnrealizedPnL
     * @static
     * @param {IProtoOAPositionUnrealizedPnL=} [properties] Properties to set
     * @returns {ProtoOAPositionUnrealizedPnL} ProtoOAPositionUnrealizedPnL instance
     */
    ProtoOAPositionUnrealizedPnL.create = function create(properties) {
      return new ProtoOAPositionUnrealizedPnL(properties);
    };

    /**
     * Encodes the specified ProtoOAPositionUnrealizedPnL message. Does not implicitly {@link ProtoOAPositionUnrealizedPnL.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAPositionUnrealizedPnL
     * @static
     * @param {IProtoOAPositionUnrealizedPnL} message ProtoOAPositionUnrealizedPnL message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAPositionUnrealizedPnL.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.positionId);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.grossUnrealizedPnL);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.netUnrealizedPnL);
      return writer;
    };

    /**
     * Decodes a ProtoOAPositionUnrealizedPnL message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAPositionUnrealizedPnL
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAPositionUnrealizedPnL} ProtoOAPositionUnrealizedPnL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAPositionUnrealizedPnL.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAPositionUnrealizedPnL();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.positionId = reader.int64();
            break;
          }
          case 2: {
            message.grossUnrealizedPnL = reader.int64();
            break;
          }
          case 3: {
            message.netUnrealizedPnL = reader.int32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("grossUnrealizedPnL"))
        throw $util.ProtocolError("missing required 'grossUnrealizedPnL'", {
          instance: message,
        });
      if (!message.hasOwnProperty("netUnrealizedPnL"))
        throw $util.ProtocolError("missing required 'netUnrealizedPnL'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAPositionUnrealizedPnL
     * @function getTypeUrl
     * @memberof ProtoOAPositionUnrealizedPnL
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAPositionUnrealizedPnL.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAPositionUnrealizedPnL";
    };

    return ProtoOAPositionUnrealizedPnL;
  })());

export const ProtoOAApplicationAuthReq = ($root.ProtoOAApplicationAuthReq =
  (() => {
    /**
     * Properties of a ProtoOAApplicationAuthReq.
     * @exports IProtoOAApplicationAuthReq
     * @interface IProtoOAApplicationAuthReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAApplicationAuthReq payloadType
     * @property {string} clientId ProtoOAApplicationAuthReq clientId
     * @property {string} clientSecret ProtoOAApplicationAuthReq clientSecret
     */

    /**
     * Constructs a new ProtoOAApplicationAuthReq.
     * @exports ProtoOAApplicationAuthReq
     * @classdesc Represents a ProtoOAApplicationAuthReq.
     * @implements IProtoOAApplicationAuthReq
     * @constructor
     * @param {IProtoOAApplicationAuthReq=} [properties] Properties to set
     */
    function ProtoOAApplicationAuthReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAApplicationAuthReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAApplicationAuthReq
     * @instance
     */
    ProtoOAApplicationAuthReq.prototype.payloadType = 2100;

    /**
     * ProtoOAApplicationAuthReq clientId.
     * @member {string} clientId
     * @memberof ProtoOAApplicationAuthReq
     * @instance
     */
    ProtoOAApplicationAuthReq.prototype.clientId = "";

    /**
     * ProtoOAApplicationAuthReq clientSecret.
     * @member {string} clientSecret
     * @memberof ProtoOAApplicationAuthReq
     * @instance
     */
    ProtoOAApplicationAuthReq.prototype.clientSecret = "";

    /**
     * Creates a new ProtoOAApplicationAuthReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAApplicationAuthReq
     * @static
     * @param {IProtoOAApplicationAuthReq=} [properties] Properties to set
     * @returns {ProtoOAApplicationAuthReq} ProtoOAApplicationAuthReq instance
     */
    ProtoOAApplicationAuthReq.create = function create(properties) {
      return new ProtoOAApplicationAuthReq(properties);
    };

    /**
     * Encodes the specified ProtoOAApplicationAuthReq message. Does not implicitly {@link ProtoOAApplicationAuthReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAApplicationAuthReq
     * @static
     * @param {IProtoOAApplicationAuthReq} message ProtoOAApplicationAuthReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAApplicationAuthReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.clientId);
      writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.clientSecret);
      return writer;
    };

    /**
     * Decodes a ProtoOAApplicationAuthReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAApplicationAuthReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAApplicationAuthReq} ProtoOAApplicationAuthReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAApplicationAuthReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAApplicationAuthReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.clientId = reader.string();
            break;
          }
          case 3: {
            message.clientSecret = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("clientId"))
        throw $util.ProtocolError("missing required 'clientId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("clientSecret"))
        throw $util.ProtocolError("missing required 'clientSecret'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAApplicationAuthReq
     * @function getTypeUrl
     * @memberof ProtoOAApplicationAuthReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAApplicationAuthReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAApplicationAuthReq";
    };

    return ProtoOAApplicationAuthReq;
  })());

export const ProtoOAApplicationAuthRes = ($root.ProtoOAApplicationAuthRes =
  (() => {
    /**
     * Properties of a ProtoOAApplicationAuthRes.
     * @exports IProtoOAApplicationAuthRes
     * @interface IProtoOAApplicationAuthRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAApplicationAuthRes payloadType
     */

    /**
     * Constructs a new ProtoOAApplicationAuthRes.
     * @exports ProtoOAApplicationAuthRes
     * @classdesc Represents a ProtoOAApplicationAuthRes.
     * @implements IProtoOAApplicationAuthRes
     * @constructor
     * @param {IProtoOAApplicationAuthRes=} [properties] Properties to set
     */
    function ProtoOAApplicationAuthRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAApplicationAuthRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAApplicationAuthRes
     * @instance
     */
    ProtoOAApplicationAuthRes.prototype.payloadType = 2101;

    /**
     * Creates a new ProtoOAApplicationAuthRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAApplicationAuthRes
     * @static
     * @param {IProtoOAApplicationAuthRes=} [properties] Properties to set
     * @returns {ProtoOAApplicationAuthRes} ProtoOAApplicationAuthRes instance
     */
    ProtoOAApplicationAuthRes.create = function create(properties) {
      return new ProtoOAApplicationAuthRes(properties);
    };

    /**
     * Encodes the specified ProtoOAApplicationAuthRes message. Does not implicitly {@link ProtoOAApplicationAuthRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAApplicationAuthRes
     * @static
     * @param {IProtoOAApplicationAuthRes} message ProtoOAApplicationAuthRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAApplicationAuthRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      return writer;
    };

    /**
     * Decodes a ProtoOAApplicationAuthRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAApplicationAuthRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAApplicationAuthRes} ProtoOAApplicationAuthRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAApplicationAuthRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAApplicationAuthRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Gets the default type url for ProtoOAApplicationAuthRes
     * @function getTypeUrl
     * @memberof ProtoOAApplicationAuthRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAApplicationAuthRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAApplicationAuthRes";
    };

    return ProtoOAApplicationAuthRes;
  })());

export const ProtoOAAccountAuthReq = ($root.ProtoOAAccountAuthReq = (() => {
  /**
   * Properties of a ProtoOAAccountAuthReq.
   * @exports IProtoOAAccountAuthReq
   * @interface IProtoOAAccountAuthReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountAuthReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAAccountAuthReq ctidTraderAccountId
   * @property {string} accessToken ProtoOAAccountAuthReq accessToken
   */

  /**
   * Constructs a new ProtoOAAccountAuthReq.
   * @exports ProtoOAAccountAuthReq
   * @classdesc Represents a ProtoOAAccountAuthReq.
   * @implements IProtoOAAccountAuthReq
   * @constructor
   * @param {IProtoOAAccountAuthReq=} [properties] Properties to set
   */
  function ProtoOAAccountAuthReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountAuthReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.payloadType = 2102;

  /**
   * ProtoOAAccountAuthReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAccountAuthReq accessToken.
   * @member {string} accessToken
   * @memberof ProtoOAAccountAuthReq
   * @instance
   */
  ProtoOAAccountAuthReq.prototype.accessToken = "";

  /**
   * Creates a new ProtoOAAccountAuthReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {IProtoOAAccountAuthReq=} [properties] Properties to set
   * @returns {ProtoOAAccountAuthReq} ProtoOAAccountAuthReq instance
   */
  ProtoOAAccountAuthReq.create = function create(properties) {
    return new ProtoOAAccountAuthReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountAuthReq message. Does not implicitly {@link ProtoOAAccountAuthReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {IProtoOAAccountAuthReq} message ProtoOAAccountAuthReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountAuthReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.accessToken);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountAuthReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountAuthReq} ProtoOAAccountAuthReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountAuthReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountAuthReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.accessToken = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAccountAuthReq
   * @function getTypeUrl
   * @memberof ProtoOAAccountAuthReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAccountAuthReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAccountAuthReq";
  };

  return ProtoOAAccountAuthReq;
})());

export const ProtoOAAccountAuthRes = ($root.ProtoOAAccountAuthRes = (() => {
  /**
   * Properties of a ProtoOAAccountAuthRes.
   * @exports IProtoOAAccountAuthRes
   * @interface IProtoOAAccountAuthRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountAuthRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAAccountAuthRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountAuthRes.
   * @exports ProtoOAAccountAuthRes
   * @classdesc Represents a ProtoOAAccountAuthRes.
   * @implements IProtoOAAccountAuthRes
   * @constructor
   * @param {IProtoOAAccountAuthRes=} [properties] Properties to set
   */
  function ProtoOAAccountAuthRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountAuthRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountAuthRes
   * @instance
   */
  ProtoOAAccountAuthRes.prototype.payloadType = 2103;

  /**
   * ProtoOAAccountAuthRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAccountAuthRes
   * @instance
   */
  ProtoOAAccountAuthRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountAuthRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {IProtoOAAccountAuthRes=} [properties] Properties to set
   * @returns {ProtoOAAccountAuthRes} ProtoOAAccountAuthRes instance
   */
  ProtoOAAccountAuthRes.create = function create(properties) {
    return new ProtoOAAccountAuthRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountAuthRes message. Does not implicitly {@link ProtoOAAccountAuthRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {IProtoOAAccountAuthRes} message ProtoOAAccountAuthRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountAuthRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountAuthRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountAuthRes} ProtoOAAccountAuthRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountAuthRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountAuthRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAccountAuthRes
   * @function getTypeUrl
   * @memberof ProtoOAAccountAuthRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAccountAuthRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAccountAuthRes";
  };

  return ProtoOAAccountAuthRes;
})());

export const ProtoOAErrorRes = ($root.ProtoOAErrorRes = (() => {
  /**
   * Properties of a ProtoOAErrorRes.
   * @exports IProtoOAErrorRes
   * @interface IProtoOAErrorRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAErrorRes payloadType
   * @property {number|null} [ctidTraderAccountId] ProtoOAErrorRes ctidTraderAccountId
   * @property {string} errorCode ProtoOAErrorRes errorCode
   * @property {string|null} [description] ProtoOAErrorRes description
   * @property {number|null} [maintenanceEndTimestamp] ProtoOAErrorRes maintenanceEndTimestamp
   */

  /**
   * Constructs a new ProtoOAErrorRes.
   * @exports ProtoOAErrorRes
   * @classdesc Represents a ProtoOAErrorRes.
   * @implements IProtoOAErrorRes
   * @constructor
   * @param {IProtoOAErrorRes=} [properties] Properties to set
   */
  function ProtoOAErrorRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAErrorRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.payloadType = 2142;

  /**
   * ProtoOAErrorRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAErrorRes errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.errorCode = "";

  /**
   * ProtoOAErrorRes description.
   * @member {string} description
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.description = "";

  /**
   * ProtoOAErrorRes maintenanceEndTimestamp.
   * @member {number} maintenanceEndTimestamp
   * @memberof ProtoOAErrorRes
   * @instance
   */
  ProtoOAErrorRes.prototype.maintenanceEndTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAErrorRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAErrorRes
   * @static
   * @param {IProtoOAErrorRes=} [properties] Properties to set
   * @returns {ProtoOAErrorRes} ProtoOAErrorRes instance
   */
  ProtoOAErrorRes.create = function create(properties) {
    return new ProtoOAErrorRes(properties);
  };

  /**
   * Encodes the specified ProtoOAErrorRes message. Does not implicitly {@link ProtoOAErrorRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAErrorRes
   * @static
   * @param {IProtoOAErrorRes} message ProtoOAErrorRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAErrorRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    if (
      message.ctidTraderAccountId != null &&
      Object.hasOwnProperty.call(message, "ctidTraderAccountId")
    )
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.errorCode);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.description);
    if (
      message.maintenanceEndTimestamp != null &&
      Object.hasOwnProperty.call(message, "maintenanceEndTimestamp")
    )
      writer
        .uint32(/* id 5, wireType 0 =*/ 40)
        .int64(message.maintenanceEndTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOAErrorRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAErrorRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAErrorRes} ProtoOAErrorRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAErrorRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAErrorRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.errorCode = reader.string();
          break;
        }
        case 4: {
          message.description = reader.string();
          break;
        }
        case 5: {
          message.maintenanceEndTimestamp = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAErrorRes
   * @function getTypeUrl
   * @memberof ProtoOAErrorRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAErrorRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAErrorRes";
  };

  return ProtoOAErrorRes;
})());

export const ProtoOAClientDisconnectEvent =
  ($root.ProtoOAClientDisconnectEvent = (() => {
    /**
     * Properties of a ProtoOAClientDisconnectEvent.
     * @exports IProtoOAClientDisconnectEvent
     * @interface IProtoOAClientDisconnectEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAClientDisconnectEvent payloadType
     * @property {string|null} [reason] ProtoOAClientDisconnectEvent reason
     */

    /**
     * Constructs a new ProtoOAClientDisconnectEvent.
     * @exports ProtoOAClientDisconnectEvent
     * @classdesc Represents a ProtoOAClientDisconnectEvent.
     * @implements IProtoOAClientDisconnectEvent
     * @constructor
     * @param {IProtoOAClientDisconnectEvent=} [properties] Properties to set
     */
    function ProtoOAClientDisconnectEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAClientDisconnectEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAClientDisconnectEvent
     * @instance
     */
    ProtoOAClientDisconnectEvent.prototype.payloadType = 2148;

    /**
     * ProtoOAClientDisconnectEvent reason.
     * @member {string} reason
     * @memberof ProtoOAClientDisconnectEvent
     * @instance
     */
    ProtoOAClientDisconnectEvent.prototype.reason = "";

    /**
     * Creates a new ProtoOAClientDisconnectEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAClientDisconnectEvent
     * @static
     * @param {IProtoOAClientDisconnectEvent=} [properties] Properties to set
     * @returns {ProtoOAClientDisconnectEvent} ProtoOAClientDisconnectEvent instance
     */
    ProtoOAClientDisconnectEvent.create = function create(properties) {
      return new ProtoOAClientDisconnectEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAClientDisconnectEvent message. Does not implicitly {@link ProtoOAClientDisconnectEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAClientDisconnectEvent
     * @static
     * @param {IProtoOAClientDisconnectEvent} message ProtoOAClientDisconnectEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAClientDisconnectEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      if (
        message.reason != null &&
        Object.hasOwnProperty.call(message, "reason")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.reason);
      return writer;
    };

    /**
     * Decodes a ProtoOAClientDisconnectEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAClientDisconnectEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAClientDisconnectEvent} ProtoOAClientDisconnectEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAClientDisconnectEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAClientDisconnectEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.reason = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Gets the default type url for ProtoOAClientDisconnectEvent
     * @function getTypeUrl
     * @memberof ProtoOAClientDisconnectEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAClientDisconnectEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAClientDisconnectEvent";
    };

    return ProtoOAClientDisconnectEvent;
  })());

export const ProtoOAAccountsTokenInvalidatedEvent =
  ($root.ProtoOAAccountsTokenInvalidatedEvent = (() => {
    /**
     * Properties of a ProtoOAAccountsTokenInvalidatedEvent.
     * @exports IProtoOAAccountsTokenInvalidatedEvent
     * @interface IProtoOAAccountsTokenInvalidatedEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountsTokenInvalidatedEvent payloadType
     * @property {Array.<number>|null} [ctidTraderAccountIds] ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds
     * @property {string|null} [reason] ProtoOAAccountsTokenInvalidatedEvent reason
     */

    /**
     * Constructs a new ProtoOAAccountsTokenInvalidatedEvent.
     * @exports ProtoOAAccountsTokenInvalidatedEvent
     * @classdesc Represents a ProtoOAAccountsTokenInvalidatedEvent.
     * @implements IProtoOAAccountsTokenInvalidatedEvent
     * @constructor
     * @param {IProtoOAAccountsTokenInvalidatedEvent=} [properties] Properties to set
     */
    function ProtoOAAccountsTokenInvalidatedEvent(properties) {
      this.ctidTraderAccountIds = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAAccountsTokenInvalidatedEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @instance
     */
    ProtoOAAccountsTokenInvalidatedEvent.prototype.payloadType = 2147;

    /**
     * ProtoOAAccountsTokenInvalidatedEvent ctidTraderAccountIds.
     * @member {Array.<number>} ctidTraderAccountIds
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @instance
     */
    ProtoOAAccountsTokenInvalidatedEvent.prototype.ctidTraderAccountIds =
      $util.emptyArray;

    /**
     * ProtoOAAccountsTokenInvalidatedEvent reason.
     * @member {string} reason
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @instance
     */
    ProtoOAAccountsTokenInvalidatedEvent.prototype.reason = "";

    /**
     * Creates a new ProtoOAAccountsTokenInvalidatedEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @static
     * @param {IProtoOAAccountsTokenInvalidatedEvent=} [properties] Properties to set
     * @returns {ProtoOAAccountsTokenInvalidatedEvent} ProtoOAAccountsTokenInvalidatedEvent instance
     */
    ProtoOAAccountsTokenInvalidatedEvent.create = function create(properties) {
      return new ProtoOAAccountsTokenInvalidatedEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAAccountsTokenInvalidatedEvent message. Does not implicitly {@link ProtoOAAccountsTokenInvalidatedEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @static
     * @param {IProtoOAAccountsTokenInvalidatedEvent} message ProtoOAAccountsTokenInvalidatedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAAccountsTokenInvalidatedEvent.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      if (
        message.ctidTraderAccountIds != null &&
        message.ctidTraderAccountIds.length
      )
        for (let i = 0; i < message.ctidTraderAccountIds.length; ++i)
          writer
            .uint32(/* id 2, wireType 0 =*/ 16)
            .int64(message.ctidTraderAccountIds[i]);
      if (
        message.reason != null &&
        Object.hasOwnProperty.call(message, "reason")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.reason);
      return writer;
    };

    /**
     * Decodes a ProtoOAAccountsTokenInvalidatedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAAccountsTokenInvalidatedEvent} ProtoOAAccountsTokenInvalidatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAAccountsTokenInvalidatedEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAAccountsTokenInvalidatedEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            if (
              !(
                message.ctidTraderAccountIds &&
                message.ctidTraderAccountIds.length
              )
            )
              message.ctidTraderAccountIds = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.ctidTraderAccountIds.push(reader.int64());
            } else message.ctidTraderAccountIds.push(reader.int64());
            break;
          }
          case 3: {
            message.reason = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Gets the default type url for ProtoOAAccountsTokenInvalidatedEvent
     * @function getTypeUrl
     * @memberof ProtoOAAccountsTokenInvalidatedEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAAccountsTokenInvalidatedEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAAccountsTokenInvalidatedEvent";
    };

    return ProtoOAAccountsTokenInvalidatedEvent;
  })());

export const ProtoOAVersionReq = ($root.ProtoOAVersionReq = (() => {
  /**
   * Properties of a ProtoOAVersionReq.
   * @exports IProtoOAVersionReq
   * @interface IProtoOAVersionReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAVersionReq payloadType
   */

  /**
   * Constructs a new ProtoOAVersionReq.
   * @exports ProtoOAVersionReq
   * @classdesc Represents a ProtoOAVersionReq.
   * @implements IProtoOAVersionReq
   * @constructor
   * @param {IProtoOAVersionReq=} [properties] Properties to set
   */
  function ProtoOAVersionReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAVersionReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAVersionReq
   * @instance
   */
  ProtoOAVersionReq.prototype.payloadType = 2104;

  /**
   * Creates a new ProtoOAVersionReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAVersionReq
   * @static
   * @param {IProtoOAVersionReq=} [properties] Properties to set
   * @returns {ProtoOAVersionReq} ProtoOAVersionReq instance
   */
  ProtoOAVersionReq.create = function create(properties) {
    return new ProtoOAVersionReq(properties);
  };

  /**
   * Encodes the specified ProtoOAVersionReq message. Does not implicitly {@link ProtoOAVersionReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAVersionReq
   * @static
   * @param {IProtoOAVersionReq} message ProtoOAVersionReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAVersionReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    return writer;
  };

  /**
   * Decodes a ProtoOAVersionReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAVersionReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAVersionReq} ProtoOAVersionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAVersionReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAVersionReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Gets the default type url for ProtoOAVersionReq
   * @function getTypeUrl
   * @memberof ProtoOAVersionReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAVersionReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAVersionReq";
  };

  return ProtoOAVersionReq;
})());

export const ProtoOAVersionRes = ($root.ProtoOAVersionRes = (() => {
  /**
   * Properties of a ProtoOAVersionRes.
   * @exports IProtoOAVersionRes
   * @interface IProtoOAVersionRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAVersionRes payloadType
   * @property {string} version ProtoOAVersionRes version
   */

  /**
   * Constructs a new ProtoOAVersionRes.
   * @exports ProtoOAVersionRes
   * @classdesc Represents a ProtoOAVersionRes.
   * @implements IProtoOAVersionRes
   * @constructor
   * @param {IProtoOAVersionRes=} [properties] Properties to set
   */
  function ProtoOAVersionRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAVersionRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAVersionRes
   * @instance
   */
  ProtoOAVersionRes.prototype.payloadType = 2105;

  /**
   * ProtoOAVersionRes version.
   * @member {string} version
   * @memberof ProtoOAVersionRes
   * @instance
   */
  ProtoOAVersionRes.prototype.version = "";

  /**
   * Creates a new ProtoOAVersionRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAVersionRes
   * @static
   * @param {IProtoOAVersionRes=} [properties] Properties to set
   * @returns {ProtoOAVersionRes} ProtoOAVersionRes instance
   */
  ProtoOAVersionRes.create = function create(properties) {
    return new ProtoOAVersionRes(properties);
  };

  /**
   * Encodes the specified ProtoOAVersionRes message. Does not implicitly {@link ProtoOAVersionRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAVersionRes
   * @static
   * @param {IProtoOAVersionRes} message ProtoOAVersionRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAVersionRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.version);
    return writer;
  };

  /**
   * Decodes a ProtoOAVersionRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAVersionRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAVersionRes} ProtoOAVersionRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAVersionRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAVersionRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.version = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("version"))
      throw $util.ProtocolError("missing required 'version'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAVersionRes
   * @function getTypeUrl
   * @memberof ProtoOAVersionRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAVersionRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAVersionRes";
  };

  return ProtoOAVersionRes;
})());

export const ProtoOANewOrderReq = ($root.ProtoOANewOrderReq = (() => {
  /**
   * Properties of a ProtoOANewOrderReq.
   * @exports IProtoOANewOrderReq
   * @interface IProtoOANewOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOANewOrderReq payloadType
   * @property {number} ctidTraderAccountId ProtoOANewOrderReq ctidTraderAccountId
   * @property {number} symbolId ProtoOANewOrderReq symbolId
   * @property {ProtoOAOrderType} orderType ProtoOANewOrderReq orderType
   * @property {ProtoOATradeSide} tradeSide ProtoOANewOrderReq tradeSide
   * @property {number} volume ProtoOANewOrderReq volume
   * @property {number|null} [limitPrice] ProtoOANewOrderReq limitPrice
   * @property {number|null} [stopPrice] ProtoOANewOrderReq stopPrice
   * @property {ProtoOATimeInForce|null} [timeInForce] ProtoOANewOrderReq timeInForce
   * @property {number|null} [expirationTimestamp] ProtoOANewOrderReq expirationTimestamp
   * @property {number|null} [stopLoss] ProtoOANewOrderReq stopLoss
   * @property {number|null} [takeProfit] ProtoOANewOrderReq takeProfit
   * @property {string|null} [comment] ProtoOANewOrderReq comment
   * @property {number|null} [baseSlippagePrice] ProtoOANewOrderReq baseSlippagePrice
   * @property {number|null} [slippageInPoints] ProtoOANewOrderReq slippageInPoints
   * @property {string|null} [label] ProtoOANewOrderReq label
   * @property {number|null} [positionId] ProtoOANewOrderReq positionId
   * @property {string|null} [clientOrderId] ProtoOANewOrderReq clientOrderId
   * @property {number|null} [relativeStopLoss] ProtoOANewOrderReq relativeStopLoss
   * @property {number|null} [relativeTakeProfit] ProtoOANewOrderReq relativeTakeProfit
   * @property {boolean|null} [guaranteedStopLoss] ProtoOANewOrderReq guaranteedStopLoss
   * @property {boolean|null} [trailingStopLoss] ProtoOANewOrderReq trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOANewOrderReq stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOANewOrderReq.
   * @exports ProtoOANewOrderReq
   * @classdesc Represents a ProtoOANewOrderReq.
   * @implements IProtoOANewOrderReq
   * @constructor
   * @param {IProtoOANewOrderReq=} [properties] Properties to set
   */
  function ProtoOANewOrderReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOANewOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.payloadType = 2106;

  /**
   * ProtoOANewOrderReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq symbolId.
   * @member {number} symbolId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq orderType.
   * @member {ProtoOAOrderType} orderType
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.orderType = 1;

  /**
   * ProtoOANewOrderReq tradeSide.
   * @member {ProtoOATradeSide} tradeSide
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.tradeSide = 1;

  /**
   * ProtoOANewOrderReq volume.
   * @member {number} volume
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.limitPrice = 0;

  /**
   * ProtoOANewOrderReq stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopPrice = 0;

  /**
   * ProtoOANewOrderReq timeInForce.
   * @member {ProtoOATimeInForce} timeInForce
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.timeInForce = 2;

  /**
   * ProtoOANewOrderReq expirationTimestamp.
   * @member {number} expirationTimestamp
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopLoss = 0;

  /**
   * ProtoOANewOrderReq takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.takeProfit = 0;

  /**
   * ProtoOANewOrderReq comment.
   * @member {string} comment
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.comment = "";

  /**
   * ProtoOANewOrderReq baseSlippagePrice.
   * @member {number} baseSlippagePrice
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.baseSlippagePrice = 0;

  /**
   * ProtoOANewOrderReq slippageInPoints.
   * @member {number} slippageInPoints
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.slippageInPoints = 0;

  /**
   * ProtoOANewOrderReq label.
   * @member {string} label
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.label = "";

  /**
   * ProtoOANewOrderReq positionId.
   * @member {number} positionId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq clientOrderId.
   * @member {string} clientOrderId
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.clientOrderId = "";

  /**
   * ProtoOANewOrderReq relativeStopLoss.
   * @member {number} relativeStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq relativeTakeProfit.
   * @member {number} relativeTakeProfit
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOANewOrderReq guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOANewOrderReq trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.trailingStopLoss = false;

  /**
   * ProtoOANewOrderReq stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOANewOrderReq
   * @instance
   */
  ProtoOANewOrderReq.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOANewOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {IProtoOANewOrderReq=} [properties] Properties to set
   * @returns {ProtoOANewOrderReq} ProtoOANewOrderReq instance
   */
  ProtoOANewOrderReq.create = function create(properties) {
    return new ProtoOANewOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOANewOrderReq message. Does not implicitly {@link ProtoOANewOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {IProtoOANewOrderReq} message ProtoOANewOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOANewOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.orderType);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.tradeSide);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.volume);
    if (
      message.limitPrice != null &&
      Object.hasOwnProperty.call(message, "limitPrice")
    )
      writer.uint32(/* id 7, wireType 1 =*/ 57).double(message.limitPrice);
    if (
      message.stopPrice != null &&
      Object.hasOwnProperty.call(message, "stopPrice")
    )
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.stopPrice);
    if (
      message.timeInForce != null &&
      Object.hasOwnProperty.call(message, "timeInForce")
    )
      writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.timeInForce);
    if (
      message.expirationTimestamp != null &&
      Object.hasOwnProperty.call(message, "expirationTimestamp")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .int64(message.expirationTimestamp);
    if (
      message.stopLoss != null &&
      Object.hasOwnProperty.call(message, "stopLoss")
    )
      writer.uint32(/* id 11, wireType 1 =*/ 89).double(message.stopLoss);
    if (
      message.takeProfit != null &&
      Object.hasOwnProperty.call(message, "takeProfit")
    )
      writer.uint32(/* id 12, wireType 1 =*/ 97).double(message.takeProfit);
    if (
      message.comment != null &&
      Object.hasOwnProperty.call(message, "comment")
    )
      writer.uint32(/* id 13, wireType 2 =*/ 106).string(message.comment);
    if (
      message.baseSlippagePrice != null &&
      Object.hasOwnProperty.call(message, "baseSlippagePrice")
    )
      writer
        .uint32(/* id 14, wireType 1 =*/ 113)
        .double(message.baseSlippagePrice);
    if (
      message.slippageInPoints != null &&
      Object.hasOwnProperty.call(message, "slippageInPoints")
    )
      writer
        .uint32(/* id 15, wireType 0 =*/ 120)
        .int32(message.slippageInPoints);
    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
      writer.uint32(/* id 16, wireType 2 =*/ 130).string(message.label);
    if (
      message.positionId != null &&
      Object.hasOwnProperty.call(message, "positionId")
    )
      writer.uint32(/* id 17, wireType 0 =*/ 136).int64(message.positionId);
    if (
      message.clientOrderId != null &&
      Object.hasOwnProperty.call(message, "clientOrderId")
    )
      writer.uint32(/* id 18, wireType 2 =*/ 146).string(message.clientOrderId);
    if (
      message.relativeStopLoss != null &&
      Object.hasOwnProperty.call(message, "relativeStopLoss")
    )
      writer
        .uint32(/* id 19, wireType 0 =*/ 152)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      Object.hasOwnProperty.call(message, "relativeTakeProfit")
    )
      writer
        .uint32(/* id 20, wireType 0 =*/ 160)
        .int64(message.relativeTakeProfit);
    if (
      message.guaranteedStopLoss != null &&
      Object.hasOwnProperty.call(message, "guaranteedStopLoss")
    )
      writer
        .uint32(/* id 21, wireType 0 =*/ 168)
        .bool(message.guaranteedStopLoss);
    if (
      message.trailingStopLoss != null &&
      Object.hasOwnProperty.call(message, "trailingStopLoss")
    )
      writer
        .uint32(/* id 22, wireType 0 =*/ 176)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      Object.hasOwnProperty.call(message, "stopTriggerMethod")
    )
      writer
        .uint32(/* id 23, wireType 0 =*/ 184)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOANewOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOANewOrderReq} ProtoOANewOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOANewOrderReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOANewOrderReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.symbolId = reader.int64();
          break;
        }
        case 4: {
          message.orderType = reader.int32();
          break;
        }
        case 5: {
          message.tradeSide = reader.int32();
          break;
        }
        case 6: {
          message.volume = reader.int64();
          break;
        }
        case 7: {
          message.limitPrice = reader.double();
          break;
        }
        case 8: {
          message.stopPrice = reader.double();
          break;
        }
        case 9: {
          message.timeInForce = reader.int32();
          break;
        }
        case 10: {
          message.expirationTimestamp = reader.int64();
          break;
        }
        case 11: {
          message.stopLoss = reader.double();
          break;
        }
        case 12: {
          message.takeProfit = reader.double();
          break;
        }
        case 13: {
          message.comment = reader.string();
          break;
        }
        case 14: {
          message.baseSlippagePrice = reader.double();
          break;
        }
        case 15: {
          message.slippageInPoints = reader.int32();
          break;
        }
        case 16: {
          message.label = reader.string();
          break;
        }
        case 17: {
          message.positionId = reader.int64();
          break;
        }
        case 18: {
          message.clientOrderId = reader.string();
          break;
        }
        case 19: {
          message.relativeStopLoss = reader.int64();
          break;
        }
        case 20: {
          message.relativeTakeProfit = reader.int64();
          break;
        }
        case 21: {
          message.guaranteedStopLoss = reader.bool();
          break;
        }
        case 22: {
          message.trailingStopLoss = reader.bool();
          break;
        }
        case 23: {
          message.stopTriggerMethod = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderType"))
      throw $util.ProtocolError("missing required 'orderType'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tradeSide"))
      throw $util.ProtocolError("missing required 'tradeSide'", {
        instance: message,
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOANewOrderReq
   * @function getTypeUrl
   * @memberof ProtoOANewOrderReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOANewOrderReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOANewOrderReq";
  };

  return ProtoOANewOrderReq;
})());

export const ProtoOAExecutionEvent = ($root.ProtoOAExecutionEvent = (() => {
  /**
   * Properties of a ProtoOAExecutionEvent.
   * @exports IProtoOAExecutionEvent
   * @interface IProtoOAExecutionEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExecutionEvent payloadType
   * @property {number} ctidTraderAccountId ProtoOAExecutionEvent ctidTraderAccountId
   * @property {ProtoOAExecutionType} executionType ProtoOAExecutionEvent executionType
   * @property {IProtoOAPosition|null} [position] ProtoOAExecutionEvent position
   * @property {IProtoOAOrder|null} [order] ProtoOAExecutionEvent order
   * @property {IProtoOADeal|null} [deal] ProtoOAExecutionEvent deal
   * @property {IProtoOABonusDepositWithdraw|null} [bonusDepositWithdraw] ProtoOAExecutionEvent bonusDepositWithdraw
   * @property {IProtoOADepositWithdraw|null} [depositWithdraw] ProtoOAExecutionEvent depositWithdraw
   * @property {string|null} [errorCode] ProtoOAExecutionEvent errorCode
   * @property {boolean|null} [isServerEvent] ProtoOAExecutionEvent isServerEvent
   */

  /**
   * Constructs a new ProtoOAExecutionEvent.
   * @exports ProtoOAExecutionEvent
   * @classdesc Represents a ProtoOAExecutionEvent.
   * @implements IProtoOAExecutionEvent
   * @constructor
   * @param {IProtoOAExecutionEvent=} [properties] Properties to set
   */
  function ProtoOAExecutionEvent(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAExecutionEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.payloadType = 2126;

  /**
   * ProtoOAExecutionEvent ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAExecutionEvent executionType.
   * @member {ProtoOAExecutionType} executionType
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.executionType = 2;

  /**
   * ProtoOAExecutionEvent position.
   * @member {IProtoOAPosition|null|undefined} position
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.position = null;

  /**
   * ProtoOAExecutionEvent order.
   * @member {IProtoOAOrder|null|undefined} order
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.order = null;

  /**
   * ProtoOAExecutionEvent deal.
   * @member {IProtoOADeal|null|undefined} deal
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.deal = null;

  /**
   * ProtoOAExecutionEvent bonusDepositWithdraw.
   * @member {IProtoOABonusDepositWithdraw|null|undefined} bonusDepositWithdraw
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.bonusDepositWithdraw = null;

  /**
   * ProtoOAExecutionEvent depositWithdraw.
   * @member {IProtoOADepositWithdraw|null|undefined} depositWithdraw
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.depositWithdraw = null;

  /**
   * ProtoOAExecutionEvent errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.errorCode = "";

  /**
   * ProtoOAExecutionEvent isServerEvent.
   * @member {boolean} isServerEvent
   * @memberof ProtoOAExecutionEvent
   * @instance
   */
  ProtoOAExecutionEvent.prototype.isServerEvent = false;

  /**
   * Creates a new ProtoOAExecutionEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {IProtoOAExecutionEvent=} [properties] Properties to set
   * @returns {ProtoOAExecutionEvent} ProtoOAExecutionEvent instance
   */
  ProtoOAExecutionEvent.create = function create(properties) {
    return new ProtoOAExecutionEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAExecutionEvent message. Does not implicitly {@link ProtoOAExecutionEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {IProtoOAExecutionEvent} message ProtoOAExecutionEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAExecutionEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.executionType);
    if (
      message.position != null &&
      Object.hasOwnProperty.call(message, "position")
    )
      $root.ProtoOAPosition.encode(
        message.position,
        writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
      ).ldelim();
    if (message.order != null && Object.hasOwnProperty.call(message, "order"))
      $root.ProtoOAOrder.encode(
        message.order,
        writer.uint32(/* id 5, wireType 2 =*/ 42).fork(),
      ).ldelim();
    if (message.deal != null && Object.hasOwnProperty.call(message, "deal"))
      $root.ProtoOADeal.encode(
        message.deal,
        writer.uint32(/* id 6, wireType 2 =*/ 50).fork(),
      ).ldelim();
    if (
      message.bonusDepositWithdraw != null &&
      Object.hasOwnProperty.call(message, "bonusDepositWithdraw")
    )
      $root.ProtoOABonusDepositWithdraw.encode(
        message.bonusDepositWithdraw,
        writer.uint32(/* id 7, wireType 2 =*/ 58).fork(),
      ).ldelim();
    if (
      message.depositWithdraw != null &&
      Object.hasOwnProperty.call(message, "depositWithdraw")
    )
      $root.ProtoOADepositWithdraw.encode(
        message.depositWithdraw,
        writer.uint32(/* id 8, wireType 2 =*/ 66).fork(),
      ).ldelim();
    if (
      message.errorCode != null &&
      Object.hasOwnProperty.call(message, "errorCode")
    )
      writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.errorCode);
    if (
      message.isServerEvent != null &&
      Object.hasOwnProperty.call(message, "isServerEvent")
    )
      writer.uint32(/* id 10, wireType 0 =*/ 80).bool(message.isServerEvent);
    return writer;
  };

  /**
   * Decodes a ProtoOAExecutionEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAExecutionEvent} ProtoOAExecutionEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAExecutionEvent.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAExecutionEvent();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.executionType = reader.int32();
          break;
        }
        case 4: {
          message.position = $root.ProtoOAPosition.decode(
            reader,
            reader.uint32(),
          );
          break;
        }
        case 5: {
          message.order = $root.ProtoOAOrder.decode(reader, reader.uint32());
          break;
        }
        case 6: {
          message.deal = $root.ProtoOADeal.decode(reader, reader.uint32());
          break;
        }
        case 7: {
          message.bonusDepositWithdraw =
            $root.ProtoOABonusDepositWithdraw.decode(reader, reader.uint32());
          break;
        }
        case 8: {
          message.depositWithdraw = $root.ProtoOADepositWithdraw.decode(
            reader,
            reader.uint32(),
          );
          break;
        }
        case 9: {
          message.errorCode = reader.string();
          break;
        }
        case 10: {
          message.isServerEvent = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("executionType"))
      throw $util.ProtocolError("missing required 'executionType'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAExecutionEvent
   * @function getTypeUrl
   * @memberof ProtoOAExecutionEvent
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAExecutionEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAExecutionEvent";
  };

  return ProtoOAExecutionEvent;
})());

export const ProtoOACancelOrderReq = ($root.ProtoOACancelOrderReq = (() => {
  /**
   * Properties of a ProtoOACancelOrderReq.
   * @exports IProtoOACancelOrderReq
   * @interface IProtoOACancelOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACancelOrderReq payloadType
   * @property {number} ctidTraderAccountId ProtoOACancelOrderReq ctidTraderAccountId
   * @property {number} orderId ProtoOACancelOrderReq orderId
   */

  /**
   * Constructs a new ProtoOACancelOrderReq.
   * @exports ProtoOACancelOrderReq
   * @classdesc Represents a ProtoOACancelOrderReq.
   * @implements IProtoOACancelOrderReq
   * @constructor
   * @param {IProtoOACancelOrderReq=} [properties] Properties to set
   */
  function ProtoOACancelOrderReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOACancelOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.payloadType = 2108;

  /**
   * ProtoOACancelOrderReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOACancelOrderReq orderId.
   * @member {number} orderId
   * @memberof ProtoOACancelOrderReq
   * @instance
   */
  ProtoOACancelOrderReq.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOACancelOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {IProtoOACancelOrderReq=} [properties] Properties to set
   * @returns {ProtoOACancelOrderReq} ProtoOACancelOrderReq instance
   */
  ProtoOACancelOrderReq.create = function create(properties) {
    return new ProtoOACancelOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOACancelOrderReq message. Does not implicitly {@link ProtoOACancelOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {IProtoOACancelOrderReq} message ProtoOACancelOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOACancelOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    return writer;
  };

  /**
   * Decodes a ProtoOACancelOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOACancelOrderReq} ProtoOACancelOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOACancelOrderReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOACancelOrderReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.orderId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOACancelOrderReq
   * @function getTypeUrl
   * @memberof ProtoOACancelOrderReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOACancelOrderReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOACancelOrderReq";
  };

  return ProtoOACancelOrderReq;
})());

export const ProtoOAAmendOrderReq = ($root.ProtoOAAmendOrderReq = (() => {
  /**
   * Properties of a ProtoOAAmendOrderReq.
   * @exports IProtoOAAmendOrderReq
   * @interface IProtoOAAmendOrderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAmendOrderReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAAmendOrderReq ctidTraderAccountId
   * @property {number} orderId ProtoOAAmendOrderReq orderId
   * @property {number|null} [volume] ProtoOAAmendOrderReq volume
   * @property {number|null} [limitPrice] ProtoOAAmendOrderReq limitPrice
   * @property {number|null} [stopPrice] ProtoOAAmendOrderReq stopPrice
   * @property {number|null} [expirationTimestamp] ProtoOAAmendOrderReq expirationTimestamp
   * @property {number|null} [stopLoss] ProtoOAAmendOrderReq stopLoss
   * @property {number|null} [takeProfit] ProtoOAAmendOrderReq takeProfit
   * @property {number|null} [slippageInPoints] ProtoOAAmendOrderReq slippageInPoints
   * @property {number|null} [relativeStopLoss] ProtoOAAmendOrderReq relativeStopLoss
   * @property {number|null} [relativeTakeProfit] ProtoOAAmendOrderReq relativeTakeProfit
   * @property {boolean|null} [guaranteedStopLoss] ProtoOAAmendOrderReq guaranteedStopLoss
   * @property {boolean|null} [trailingStopLoss] ProtoOAAmendOrderReq trailingStopLoss
   * @property {ProtoOAOrderTriggerMethod|null} [stopTriggerMethod] ProtoOAAmendOrderReq stopTriggerMethod
   */

  /**
   * Constructs a new ProtoOAAmendOrderReq.
   * @exports ProtoOAAmendOrderReq
   * @classdesc Represents a ProtoOAAmendOrderReq.
   * @implements IProtoOAAmendOrderReq
   * @constructor
   * @param {IProtoOAAmendOrderReq=} [properties] Properties to set
   */
  function ProtoOAAmendOrderReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAmendOrderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.payloadType = 2109;

  /**
   * ProtoOAAmendOrderReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq orderId.
   * @member {number} orderId
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq volume.
   * @member {number} volume
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq limitPrice.
   * @member {number} limitPrice
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.limitPrice = 0;

  /**
   * ProtoOAAmendOrderReq stopPrice.
   * @member {number} stopPrice
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopPrice = 0;

  /**
   * ProtoOAAmendOrderReq expirationTimestamp.
   * @member {number} expirationTimestamp
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.expirationTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq stopLoss.
   * @member {number} stopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopLoss = 0;

  /**
   * ProtoOAAmendOrderReq takeProfit.
   * @member {number} takeProfit
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.takeProfit = 0;

  /**
   * ProtoOAAmendOrderReq slippageInPoints.
   * @member {number} slippageInPoints
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.slippageInPoints = 0;

  /**
   * ProtoOAAmendOrderReq relativeStopLoss.
   * @member {number} relativeStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.relativeStopLoss = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq relativeTakeProfit.
   * @member {number} relativeTakeProfit
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.relativeTakeProfit = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAmendOrderReq guaranteedStopLoss.
   * @member {boolean} guaranteedStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.guaranteedStopLoss = false;

  /**
   * ProtoOAAmendOrderReq trailingStopLoss.
   * @member {boolean} trailingStopLoss
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.trailingStopLoss = false;

  /**
   * ProtoOAAmendOrderReq stopTriggerMethod.
   * @member {ProtoOAOrderTriggerMethod} stopTriggerMethod
   * @memberof ProtoOAAmendOrderReq
   * @instance
   */
  ProtoOAAmendOrderReq.prototype.stopTriggerMethod = 1;

  /**
   * Creates a new ProtoOAAmendOrderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {IProtoOAAmendOrderReq=} [properties] Properties to set
   * @returns {ProtoOAAmendOrderReq} ProtoOAAmendOrderReq instance
   */
  ProtoOAAmendOrderReq.create = function create(properties) {
    return new ProtoOAAmendOrderReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAmendOrderReq message. Does not implicitly {@link ProtoOAAmendOrderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {IProtoOAAmendOrderReq} message ProtoOAAmendOrderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAmendOrderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    if (
      message.limitPrice != null &&
      Object.hasOwnProperty.call(message, "limitPrice")
    )
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.limitPrice);
    if (
      message.stopPrice != null &&
      Object.hasOwnProperty.call(message, "stopPrice")
    )
      writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.stopPrice);
    if (
      message.expirationTimestamp != null &&
      Object.hasOwnProperty.call(message, "expirationTimestamp")
    )
      writer
        .uint32(/* id 7, wireType 0 =*/ 56)
        .int64(message.expirationTimestamp);
    if (
      message.stopLoss != null &&
      Object.hasOwnProperty.call(message, "stopLoss")
    )
      writer.uint32(/* id 8, wireType 1 =*/ 65).double(message.stopLoss);
    if (
      message.takeProfit != null &&
      Object.hasOwnProperty.call(message, "takeProfit")
    )
      writer.uint32(/* id 9, wireType 1 =*/ 73).double(message.takeProfit);
    if (
      message.slippageInPoints != null &&
      Object.hasOwnProperty.call(message, "slippageInPoints")
    )
      writer
        .uint32(/* id 10, wireType 0 =*/ 80)
        .int32(message.slippageInPoints);
    if (
      message.relativeStopLoss != null &&
      Object.hasOwnProperty.call(message, "relativeStopLoss")
    )
      writer
        .uint32(/* id 11, wireType 0 =*/ 88)
        .int64(message.relativeStopLoss);
    if (
      message.relativeTakeProfit != null &&
      Object.hasOwnProperty.call(message, "relativeTakeProfit")
    )
      writer
        .uint32(/* id 12, wireType 0 =*/ 96)
        .int64(message.relativeTakeProfit);
    if (
      message.guaranteedStopLoss != null &&
      Object.hasOwnProperty.call(message, "guaranteedStopLoss")
    )
      writer
        .uint32(/* id 13, wireType 0 =*/ 104)
        .bool(message.guaranteedStopLoss);
    if (
      message.trailingStopLoss != null &&
      Object.hasOwnProperty.call(message, "trailingStopLoss")
    )
      writer
        .uint32(/* id 14, wireType 0 =*/ 112)
        .bool(message.trailingStopLoss);
    if (
      message.stopTriggerMethod != null &&
      Object.hasOwnProperty.call(message, "stopTriggerMethod")
    )
      writer
        .uint32(/* id 15, wireType 0 =*/ 120)
        .int32(message.stopTriggerMethod);
    return writer;
  };

  /**
   * Decodes a ProtoOAAmendOrderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAmendOrderReq} ProtoOAAmendOrderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAmendOrderReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAmendOrderReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.orderId = reader.int64();
          break;
        }
        case 4: {
          message.volume = reader.int64();
          break;
        }
        case 5: {
          message.limitPrice = reader.double();
          break;
        }
        case 6: {
          message.stopPrice = reader.double();
          break;
        }
        case 7: {
          message.expirationTimestamp = reader.int64();
          break;
        }
        case 8: {
          message.stopLoss = reader.double();
          break;
        }
        case 9: {
          message.takeProfit = reader.double();
          break;
        }
        case 10: {
          message.slippageInPoints = reader.int32();
          break;
        }
        case 11: {
          message.relativeStopLoss = reader.int64();
          break;
        }
        case 12: {
          message.relativeTakeProfit = reader.int64();
          break;
        }
        case 13: {
          message.guaranteedStopLoss = reader.bool();
          break;
        }
        case 14: {
          message.trailingStopLoss = reader.bool();
          break;
        }
        case 15: {
          message.stopTriggerMethod = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAmendOrderReq
   * @function getTypeUrl
   * @memberof ProtoOAAmendOrderReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAmendOrderReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAmendOrderReq";
  };

  return ProtoOAAmendOrderReq;
})());

export const ProtoOAAmendPositionSLTPReq = ($root.ProtoOAAmendPositionSLTPReq =
  (() => {
    /**
     * Properties of a ProtoOAAmendPositionSLTPReq.
     * @exports IProtoOAAmendPositionSLTPReq
     * @interface IProtoOAAmendPositionSLTPReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAmendPositionSLTPReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAAmendPositionSLTPReq ctidTraderAccountId
     * @property {number} positionId ProtoOAAmendPositionSLTPReq positionId
     * @property {number|null} [stopLoss] ProtoOAAmendPositionSLTPReq stopLoss
     * @property {number|null} [takeProfit] ProtoOAAmendPositionSLTPReq takeProfit
     * @property {boolean|null} [guaranteedStopLoss] ProtoOAAmendPositionSLTPReq guaranteedStopLoss
     * @property {boolean|null} [trailingStopLoss] ProtoOAAmendPositionSLTPReq trailingStopLoss
     * @property {ProtoOAOrderTriggerMethod|null} [stopLossTriggerMethod] ProtoOAAmendPositionSLTPReq stopLossTriggerMethod
     */

    /**
     * Constructs a new ProtoOAAmendPositionSLTPReq.
     * @exports ProtoOAAmendPositionSLTPReq
     * @classdesc Represents a ProtoOAAmendPositionSLTPReq.
     * @implements IProtoOAAmendPositionSLTPReq
     * @constructor
     * @param {IProtoOAAmendPositionSLTPReq=} [properties] Properties to set
     */
    function ProtoOAAmendPositionSLTPReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAAmendPositionSLTPReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.payloadType = 2110;

    /**
     * ProtoOAAmendPositionSLTPReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAAmendPositionSLTPReq positionId.
     * @member {number} positionId
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAAmendPositionSLTPReq stopLoss.
     * @member {number} stopLoss
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.stopLoss = 0;

    /**
     * ProtoOAAmendPositionSLTPReq takeProfit.
     * @member {number} takeProfit
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.takeProfit = 0;

    /**
     * ProtoOAAmendPositionSLTPReq guaranteedStopLoss.
     * @member {boolean} guaranteedStopLoss
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.guaranteedStopLoss = false;

    /**
     * ProtoOAAmendPositionSLTPReq trailingStopLoss.
     * @member {boolean} trailingStopLoss
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.trailingStopLoss = false;

    /**
     * ProtoOAAmendPositionSLTPReq stopLossTriggerMethod.
     * @member {ProtoOAOrderTriggerMethod} stopLossTriggerMethod
     * @memberof ProtoOAAmendPositionSLTPReq
     * @instance
     */
    ProtoOAAmendPositionSLTPReq.prototype.stopLossTriggerMethod = 1;

    /**
     * Creates a new ProtoOAAmendPositionSLTPReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAAmendPositionSLTPReq
     * @static
     * @param {IProtoOAAmendPositionSLTPReq=} [properties] Properties to set
     * @returns {ProtoOAAmendPositionSLTPReq} ProtoOAAmendPositionSLTPReq instance
     */
    ProtoOAAmendPositionSLTPReq.create = function create(properties) {
      return new ProtoOAAmendPositionSLTPReq(properties);
    };

    /**
     * Encodes the specified ProtoOAAmendPositionSLTPReq message. Does not implicitly {@link ProtoOAAmendPositionSLTPReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAAmendPositionSLTPReq
     * @static
     * @param {IProtoOAAmendPositionSLTPReq} message ProtoOAAmendPositionSLTPReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAAmendPositionSLTPReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
      if (
        message.stopLoss != null &&
        Object.hasOwnProperty.call(message, "stopLoss")
      )
        writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.stopLoss);
      if (
        message.takeProfit != null &&
        Object.hasOwnProperty.call(message, "takeProfit")
      )
        writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.takeProfit);
      if (
        message.guaranteedStopLoss != null &&
        Object.hasOwnProperty.call(message, "guaranteedStopLoss")
      )
        writer
          .uint32(/* id 7, wireType 0 =*/ 56)
          .bool(message.guaranteedStopLoss);
      if (
        message.trailingStopLoss != null &&
        Object.hasOwnProperty.call(message, "trailingStopLoss")
      )
        writer
          .uint32(/* id 8, wireType 0 =*/ 64)
          .bool(message.trailingStopLoss);
      if (
        message.stopLossTriggerMethod != null &&
        Object.hasOwnProperty.call(message, "stopLossTriggerMethod")
      )
        writer
          .uint32(/* id 9, wireType 0 =*/ 72)
          .int32(message.stopLossTriggerMethod);
      return writer;
    };

    /**
     * Decodes a ProtoOAAmendPositionSLTPReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAAmendPositionSLTPReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAAmendPositionSLTPReq} ProtoOAAmendPositionSLTPReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAAmendPositionSLTPReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAAmendPositionSLTPReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.positionId = reader.int64();
            break;
          }
          case 4: {
            message.stopLoss = reader.double();
            break;
          }
          case 5: {
            message.takeProfit = reader.double();
            break;
          }
          case 7: {
            message.guaranteedStopLoss = reader.bool();
            break;
          }
          case 8: {
            message.trailingStopLoss = reader.bool();
            break;
          }
          case 9: {
            message.stopLossTriggerMethod = reader.int32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAAmendPositionSLTPReq
     * @function getTypeUrl
     * @memberof ProtoOAAmendPositionSLTPReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAAmendPositionSLTPReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAAmendPositionSLTPReq";
    };

    return ProtoOAAmendPositionSLTPReq;
  })());

export const ProtoOAClosePositionReq = ($root.ProtoOAClosePositionReq = (() => {
  /**
   * Properties of a ProtoOAClosePositionReq.
   * @exports IProtoOAClosePositionReq
   * @interface IProtoOAClosePositionReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAClosePositionReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAClosePositionReq ctidTraderAccountId
   * @property {number} positionId ProtoOAClosePositionReq positionId
   * @property {number} volume ProtoOAClosePositionReq volume
   */

  /**
   * Constructs a new ProtoOAClosePositionReq.
   * @exports ProtoOAClosePositionReq
   * @classdesc Represents a ProtoOAClosePositionReq.
   * @implements IProtoOAClosePositionReq
   * @constructor
   * @param {IProtoOAClosePositionReq=} [properties] Properties to set
   */
  function ProtoOAClosePositionReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAClosePositionReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.payloadType = 2111;

  /**
   * ProtoOAClosePositionReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionReq positionId.
   * @member {number} positionId
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAClosePositionReq volume.
   * @member {number} volume
   * @memberof ProtoOAClosePositionReq
   * @instance
   */
  ProtoOAClosePositionReq.prototype.volume = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAClosePositionReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {IProtoOAClosePositionReq=} [properties] Properties to set
   * @returns {ProtoOAClosePositionReq} ProtoOAClosePositionReq instance
   */
  ProtoOAClosePositionReq.create = function create(properties) {
    return new ProtoOAClosePositionReq(properties);
  };

  /**
   * Encodes the specified ProtoOAClosePositionReq message. Does not implicitly {@link ProtoOAClosePositionReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {IProtoOAClosePositionReq} message ProtoOAClosePositionReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAClosePositionReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume);
    return writer;
  };

  /**
   * Decodes a ProtoOAClosePositionReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAClosePositionReq} ProtoOAClosePositionReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAClosePositionReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAClosePositionReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.positionId = reader.int64();
          break;
        }
        case 4: {
          message.volume = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("positionId"))
      throw $util.ProtocolError("missing required 'positionId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("volume"))
      throw $util.ProtocolError("missing required 'volume'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAClosePositionReq
   * @function getTypeUrl
   * @memberof ProtoOAClosePositionReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAClosePositionReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAClosePositionReq";
  };

  return ProtoOAClosePositionReq;
})());

export const ProtoOATrailingSLChangedEvent =
  ($root.ProtoOATrailingSLChangedEvent = (() => {
    /**
     * Properties of a ProtoOATrailingSLChangedEvent.
     * @exports IProtoOATrailingSLChangedEvent
     * @interface IProtoOATrailingSLChangedEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATrailingSLChangedEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOATrailingSLChangedEvent ctidTraderAccountId
     * @property {number} positionId ProtoOATrailingSLChangedEvent positionId
     * @property {number} orderId ProtoOATrailingSLChangedEvent orderId
     * @property {number} stopPrice ProtoOATrailingSLChangedEvent stopPrice
     * @property {number} utcLastUpdateTimestamp ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp
     */

    /**
     * Constructs a new ProtoOATrailingSLChangedEvent.
     * @exports ProtoOATrailingSLChangedEvent
     * @classdesc Represents a ProtoOATrailingSLChangedEvent.
     * @implements IProtoOATrailingSLChangedEvent
     * @constructor
     * @param {IProtoOATrailingSLChangedEvent=} [properties] Properties to set
     */
    function ProtoOATrailingSLChangedEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOATrailingSLChangedEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.payloadType = 2107;

    /**
     * ProtoOATrailingSLChangedEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOATrailingSLChangedEvent positionId.
     * @member {number} positionId
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOATrailingSLChangedEvent orderId.
     * @member {number} orderId
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.orderId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOATrailingSLChangedEvent stopPrice.
     * @member {number} stopPrice
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.stopPrice = 0;

    /**
     * ProtoOATrailingSLChangedEvent utcLastUpdateTimestamp.
     * @member {number} utcLastUpdateTimestamp
     * @memberof ProtoOATrailingSLChangedEvent
     * @instance
     */
    ProtoOATrailingSLChangedEvent.prototype.utcLastUpdateTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOATrailingSLChangedEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOATrailingSLChangedEvent
     * @static
     * @param {IProtoOATrailingSLChangedEvent=} [properties] Properties to set
     * @returns {ProtoOATrailingSLChangedEvent} ProtoOATrailingSLChangedEvent instance
     */
    ProtoOATrailingSLChangedEvent.create = function create(properties) {
      return new ProtoOATrailingSLChangedEvent(properties);
    };

    /**
     * Encodes the specified ProtoOATrailingSLChangedEvent message. Does not implicitly {@link ProtoOATrailingSLChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOATrailingSLChangedEvent
     * @static
     * @param {IProtoOATrailingSLChangedEvent} message ProtoOATrailingSLChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOATrailingSLChangedEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.orderId);
      writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.stopPrice);
      writer
        .uint32(/* id 6, wireType 0 =*/ 48)
        .int64(message.utcLastUpdateTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOATrailingSLChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOATrailingSLChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOATrailingSLChangedEvent} ProtoOATrailingSLChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOATrailingSLChangedEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOATrailingSLChangedEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.positionId = reader.int64();
            break;
          }
          case 4: {
            message.orderId = reader.int64();
            break;
          }
          case 5: {
            message.stopPrice = reader.double();
            break;
          }
          case 6: {
            message.utcLastUpdateTimestamp = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("orderId"))
        throw $util.ProtocolError("missing required 'orderId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("stopPrice"))
        throw $util.ProtocolError("missing required 'stopPrice'", {
          instance: message,
        });
      if (!message.hasOwnProperty("utcLastUpdateTimestamp"))
        throw $util.ProtocolError("missing required 'utcLastUpdateTimestamp'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOATrailingSLChangedEvent
     * @function getTypeUrl
     * @memberof ProtoOATrailingSLChangedEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOATrailingSLChangedEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOATrailingSLChangedEvent";
    };

    return ProtoOATrailingSLChangedEvent;
  })());

export const ProtoOAAssetListReq = ($root.ProtoOAAssetListReq = (() => {
  /**
   * Properties of a ProtoOAAssetListReq.
   * @exports IProtoOAAssetListReq
   * @interface IProtoOAAssetListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetListReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAAssetListReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAssetListReq.
   * @exports ProtoOAAssetListReq
   * @classdesc Represents a ProtoOAAssetListReq.
   * @implements IProtoOAAssetListReq
   * @constructor
   * @param {IProtoOAAssetListReq=} [properties] Properties to set
   */
  function ProtoOAAssetListReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetListReq
   * @instance
   */
  ProtoOAAssetListReq.prototype.payloadType = 2112;

  /**
   * ProtoOAAssetListReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAssetListReq
   * @instance
   */
  ProtoOAAssetListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAssetListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {IProtoOAAssetListReq=} [properties] Properties to set
   * @returns {ProtoOAAssetListReq} ProtoOAAssetListReq instance
   */
  ProtoOAAssetListReq.create = function create(properties) {
    return new ProtoOAAssetListReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetListReq message. Does not implicitly {@link ProtoOAAssetListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {IProtoOAAssetListReq} message ProtoOAAssetListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetListReq} ProtoOAAssetListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetListReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetListReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAssetListReq
   * @function getTypeUrl
   * @memberof ProtoOAAssetListReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAssetListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAssetListReq";
  };

  return ProtoOAAssetListReq;
})());

export const ProtoOAAssetListRes = ($root.ProtoOAAssetListRes = (() => {
  /**
   * Properties of a ProtoOAAssetListRes.
   * @exports IProtoOAAssetListRes
   * @interface IProtoOAAssetListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetListRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAAssetListRes ctidTraderAccountId
   * @property {Array.<IProtoOAAsset>|null} [asset] ProtoOAAssetListRes asset
   */

  /**
   * Constructs a new ProtoOAAssetListRes.
   * @exports ProtoOAAssetListRes
   * @classdesc Represents a ProtoOAAssetListRes.
   * @implements IProtoOAAssetListRes
   * @constructor
   * @param {IProtoOAAssetListRes=} [properties] Properties to set
   */
  function ProtoOAAssetListRes(properties) {
    this.asset = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAssetListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.payloadType = 2113;

  /**
   * ProtoOAAssetListRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAAssetListRes asset.
   * @member {Array.<IProtoOAAsset>} asset
   * @memberof ProtoOAAssetListRes
   * @instance
   */
  ProtoOAAssetListRes.prototype.asset = $util.emptyArray;

  /**
   * Creates a new ProtoOAAssetListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {IProtoOAAssetListRes=} [properties] Properties to set
   * @returns {ProtoOAAssetListRes} ProtoOAAssetListRes instance
   */
  ProtoOAAssetListRes.create = function create(properties) {
    return new ProtoOAAssetListRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAssetListRes message. Does not implicitly {@link ProtoOAAssetListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {IProtoOAAssetListRes} message ProtoOAAssetListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAssetListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.asset != null && message.asset.length)
      for (let i = 0; i < message.asset.length; ++i)
        $root.ProtoOAAsset.encode(
          message.asset[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAAssetListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAssetListRes} ProtoOAAssetListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAssetListRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAssetListRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.asset && message.asset.length)) message.asset = [];
          message.asset.push(
            $root.ProtoOAAsset.decode(reader, reader.uint32()),
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAssetListRes
   * @function getTypeUrl
   * @memberof ProtoOAAssetListRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAssetListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAssetListRes";
  };

  return ProtoOAAssetListRes;
})());

export const ProtoOASymbolsListReq = ($root.ProtoOASymbolsListReq = (() => {
  /**
   * Properties of a ProtoOASymbolsListReq.
   * @exports IProtoOASymbolsListReq
   * @interface IProtoOASymbolsListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsListReq payloadType
   * @property {number} ctidTraderAccountId ProtoOASymbolsListReq ctidTraderAccountId
   * @property {boolean|null} [includeArchivedSymbols] ProtoOASymbolsListReq includeArchivedSymbols
   */

  /**
   * Constructs a new ProtoOASymbolsListReq.
   * @exports ProtoOASymbolsListReq
   * @classdesc Represents a ProtoOASymbolsListReq.
   * @implements IProtoOASymbolsListReq
   * @constructor
   * @param {IProtoOASymbolsListReq=} [properties] Properties to set
   */
  function ProtoOASymbolsListReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsListReq
   * @instance
   */
  ProtoOASymbolsListReq.prototype.payloadType = 2114;

  /**
   * ProtoOASymbolsListReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOASymbolsListReq
   * @instance
   */
  ProtoOASymbolsListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsListReq includeArchivedSymbols.
   * @member {boolean} includeArchivedSymbols
   * @memberof ProtoOASymbolsListReq
   * @instance
   */
  ProtoOASymbolsListReq.prototype.includeArchivedSymbols = false;

  /**
   * Creates a new ProtoOASymbolsListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {IProtoOASymbolsListReq=} [properties] Properties to set
   * @returns {ProtoOASymbolsListReq} ProtoOASymbolsListReq instance
   */
  ProtoOASymbolsListReq.create = function create(properties) {
    return new ProtoOASymbolsListReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsListReq message. Does not implicitly {@link ProtoOASymbolsListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {IProtoOASymbolsListReq} message ProtoOASymbolsListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (
      message.includeArchivedSymbols != null &&
      Object.hasOwnProperty.call(message, "includeArchivedSymbols")
    )
      writer
        .uint32(/* id 3, wireType 0 =*/ 24)
        .bool(message.includeArchivedSymbols);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsListReq} ProtoOASymbolsListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsListReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsListReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.includeArchivedSymbols = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbolsListReq
   * @function getTypeUrl
   * @memberof ProtoOASymbolsListReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbolsListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbolsListReq";
  };

  return ProtoOASymbolsListReq;
})());

export const ProtoOASymbolsListRes = ($root.ProtoOASymbolsListRes = (() => {
  /**
   * Properties of a ProtoOASymbolsListRes.
   * @exports IProtoOASymbolsListRes
   * @interface IProtoOASymbolsListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsListRes payloadType
   * @property {number} ctidTraderAccountId ProtoOASymbolsListRes ctidTraderAccountId
   * @property {Array.<IProtoOALightSymbol>|null} [symbol] ProtoOASymbolsListRes symbol
   * @property {Array.<IProtoOAArchivedSymbol>|null} [archivedSymbol] ProtoOASymbolsListRes archivedSymbol
   */

  /**
   * Constructs a new ProtoOASymbolsListRes.
   * @exports ProtoOASymbolsListRes
   * @classdesc Represents a ProtoOASymbolsListRes.
   * @implements IProtoOASymbolsListRes
   * @constructor
   * @param {IProtoOASymbolsListRes=} [properties] Properties to set
   */
  function ProtoOASymbolsListRes(properties) {
    this.symbol = [];
    this.archivedSymbol = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolsListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.payloadType = 2115;

  /**
   * ProtoOASymbolsListRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolsListRes symbol.
   * @member {Array.<IProtoOALightSymbol>} symbol
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.symbol = $util.emptyArray;

  /**
   * ProtoOASymbolsListRes archivedSymbol.
   * @member {Array.<IProtoOAArchivedSymbol>} archivedSymbol
   * @memberof ProtoOASymbolsListRes
   * @instance
   */
  ProtoOASymbolsListRes.prototype.archivedSymbol = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolsListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {IProtoOASymbolsListRes=} [properties] Properties to set
   * @returns {ProtoOASymbolsListRes} ProtoOASymbolsListRes instance
   */
  ProtoOASymbolsListRes.create = function create(properties) {
    return new ProtoOASymbolsListRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolsListRes message. Does not implicitly {@link ProtoOASymbolsListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {IProtoOASymbolsListRes} message ProtoOASymbolsListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolsListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbol != null && message.symbol.length)
      for (let i = 0; i < message.symbol.length; ++i)
        $root.ProtoOALightSymbol.encode(
          message.symbol[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    if (message.archivedSymbol != null && message.archivedSymbol.length)
      for (let i = 0; i < message.archivedSymbol.length; ++i)
        $root.ProtoOAArchivedSymbol.encode(
          message.archivedSymbol[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolsListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolsListRes} ProtoOASymbolsListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolsListRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolsListRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.symbol && message.symbol.length)) message.symbol = [];
          message.symbol.push(
            $root.ProtoOALightSymbol.decode(reader, reader.uint32()),
          );
          break;
        }
        case 4: {
          if (!(message.archivedSymbol && message.archivedSymbol.length))
            message.archivedSymbol = [];
          message.archivedSymbol.push(
            $root.ProtoOAArchivedSymbol.decode(reader, reader.uint32()),
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbolsListRes
   * @function getTypeUrl
   * @memberof ProtoOASymbolsListRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbolsListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbolsListRes";
  };

  return ProtoOASymbolsListRes;
})());

export const ProtoOASymbolByIdReq = ($root.ProtoOASymbolByIdReq = (() => {
  /**
   * Properties of a ProtoOASymbolByIdReq.
   * @exports IProtoOASymbolByIdReq
   * @interface IProtoOASymbolByIdReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolByIdReq payloadType
   * @property {number} ctidTraderAccountId ProtoOASymbolByIdReq ctidTraderAccountId
   * @property {Array.<number>|null} [symbolId] ProtoOASymbolByIdReq symbolId
   */

  /**
   * Constructs a new ProtoOASymbolByIdReq.
   * @exports ProtoOASymbolByIdReq
   * @classdesc Represents a ProtoOASymbolByIdReq.
   * @implements IProtoOASymbolByIdReq
   * @constructor
   * @param {IProtoOASymbolByIdReq=} [properties] Properties to set
   */
  function ProtoOASymbolByIdReq(properties) {
    this.symbolId = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolByIdReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.payloadType = 2116;

  /**
   * ProtoOASymbolByIdReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolByIdReq symbolId.
   * @member {Array.<number>} symbolId
   * @memberof ProtoOASymbolByIdReq
   * @instance
   */
  ProtoOASymbolByIdReq.prototype.symbolId = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolByIdReq instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {IProtoOASymbolByIdReq=} [properties] Properties to set
   * @returns {ProtoOASymbolByIdReq} ProtoOASymbolByIdReq instance
   */
  ProtoOASymbolByIdReq.create = function create(properties) {
    return new ProtoOASymbolByIdReq(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolByIdReq message. Does not implicitly {@link ProtoOASymbolByIdReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {IProtoOASymbolByIdReq} message ProtoOASymbolByIdReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolByIdReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbolId != null && message.symbolId.length)
      for (let i = 0; i < message.symbolId.length; ++i)
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolByIdReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolByIdReq} ProtoOASymbolByIdReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolByIdReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolByIdReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.symbolId && message.symbolId.length))
            message.symbolId = [];
          if ((tag & 7) === 2) {
            let end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) message.symbolId.push(reader.int64());
          } else message.symbolId.push(reader.int64());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbolByIdReq
   * @function getTypeUrl
   * @memberof ProtoOASymbolByIdReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbolByIdReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbolByIdReq";
  };

  return ProtoOASymbolByIdReq;
})());

export const ProtoOASymbolByIdRes = ($root.ProtoOASymbolByIdRes = (() => {
  /**
   * Properties of a ProtoOASymbolByIdRes.
   * @exports IProtoOASymbolByIdRes
   * @interface IProtoOASymbolByIdRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolByIdRes payloadType
   * @property {number} ctidTraderAccountId ProtoOASymbolByIdRes ctidTraderAccountId
   * @property {Array.<IProtoOASymbol>|null} [symbol] ProtoOASymbolByIdRes symbol
   * @property {Array.<IProtoOAArchivedSymbol>|null} [archivedSymbol] ProtoOASymbolByIdRes archivedSymbol
   */

  /**
   * Constructs a new ProtoOASymbolByIdRes.
   * @exports ProtoOASymbolByIdRes
   * @classdesc Represents a ProtoOASymbolByIdRes.
   * @implements IProtoOASymbolByIdRes
   * @constructor
   * @param {IProtoOASymbolByIdRes=} [properties] Properties to set
   */
  function ProtoOASymbolByIdRes(properties) {
    this.symbol = [];
    this.archivedSymbol = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASymbolByIdRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.payloadType = 2117;

  /**
   * ProtoOASymbolByIdRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASymbolByIdRes symbol.
   * @member {Array.<IProtoOASymbol>} symbol
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.symbol = $util.emptyArray;

  /**
   * ProtoOASymbolByIdRes archivedSymbol.
   * @member {Array.<IProtoOAArchivedSymbol>} archivedSymbol
   * @memberof ProtoOASymbolByIdRes
   * @instance
   */
  ProtoOASymbolByIdRes.prototype.archivedSymbol = $util.emptyArray;

  /**
   * Creates a new ProtoOASymbolByIdRes instance using the specified properties.
   * @function create
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {IProtoOASymbolByIdRes=} [properties] Properties to set
   * @returns {ProtoOASymbolByIdRes} ProtoOASymbolByIdRes instance
   */
  ProtoOASymbolByIdRes.create = function create(properties) {
    return new ProtoOASymbolByIdRes(properties);
  };

  /**
   * Encodes the specified ProtoOASymbolByIdRes message. Does not implicitly {@link ProtoOASymbolByIdRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {IProtoOASymbolByIdRes} message ProtoOASymbolByIdRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASymbolByIdRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.symbol != null && message.symbol.length)
      for (let i = 0; i < message.symbol.length; ++i)
        $root.ProtoOASymbol.encode(
          message.symbol[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    if (message.archivedSymbol != null && message.archivedSymbol.length)
      for (let i = 0; i < message.archivedSymbol.length; ++i)
        $root.ProtoOAArchivedSymbol.encode(
          message.archivedSymbol[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOASymbolByIdRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASymbolByIdRes} ProtoOASymbolByIdRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASymbolByIdRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASymbolByIdRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.symbol && message.symbol.length)) message.symbol = [];
          message.symbol.push(
            $root.ProtoOASymbol.decode(reader, reader.uint32()),
          );
          break;
        }
        case 4: {
          if (!(message.archivedSymbol && message.archivedSymbol.length))
            message.archivedSymbol = [];
          message.archivedSymbol.push(
            $root.ProtoOAArchivedSymbol.decode(reader, reader.uint32()),
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASymbolByIdRes
   * @function getTypeUrl
   * @memberof ProtoOASymbolByIdRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASymbolByIdRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASymbolByIdRes";
  };

  return ProtoOASymbolByIdRes;
})());

export const ProtoOASymbolsForConversionReq =
  ($root.ProtoOASymbolsForConversionReq = (() => {
    /**
     * Properties of a ProtoOASymbolsForConversionReq.
     * @exports IProtoOASymbolsForConversionReq
     * @interface IProtoOASymbolsForConversionReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsForConversionReq payloadType
     * @property {number} ctidTraderAccountId ProtoOASymbolsForConversionReq ctidTraderAccountId
     * @property {number} firstAssetId ProtoOASymbolsForConversionReq firstAssetId
     * @property {number} lastAssetId ProtoOASymbolsForConversionReq lastAssetId
     */

    /**
     * Constructs a new ProtoOASymbolsForConversionReq.
     * @exports ProtoOASymbolsForConversionReq
     * @classdesc Represents a ProtoOASymbolsForConversionReq.
     * @implements IProtoOASymbolsForConversionReq
     * @constructor
     * @param {IProtoOASymbolsForConversionReq=} [properties] Properties to set
     */
    function ProtoOASymbolsForConversionReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASymbolsForConversionReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASymbolsForConversionReq
     * @instance
     */
    ProtoOASymbolsForConversionReq.prototype.payloadType = 2118;

    /**
     * ProtoOASymbolsForConversionReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASymbolsForConversionReq
     * @instance
     */
    ProtoOASymbolsForConversionReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASymbolsForConversionReq firstAssetId.
     * @member {number} firstAssetId
     * @memberof ProtoOASymbolsForConversionReq
     * @instance
     */
    ProtoOASymbolsForConversionReq.prototype.firstAssetId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASymbolsForConversionReq lastAssetId.
     * @member {number} lastAssetId
     * @memberof ProtoOASymbolsForConversionReq
     * @instance
     */
    ProtoOASymbolsForConversionReq.prototype.lastAssetId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASymbolsForConversionReq instance using the specified properties.
     * @function create
     * @memberof ProtoOASymbolsForConversionReq
     * @static
     * @param {IProtoOASymbolsForConversionReq=} [properties] Properties to set
     * @returns {ProtoOASymbolsForConversionReq} ProtoOASymbolsForConversionReq instance
     */
    ProtoOASymbolsForConversionReq.create = function create(properties) {
      return new ProtoOASymbolsForConversionReq(properties);
    };

    /**
     * Encodes the specified ProtoOASymbolsForConversionReq message. Does not implicitly {@link ProtoOASymbolsForConversionReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASymbolsForConversionReq
     * @static
     * @param {IProtoOASymbolsForConversionReq} message ProtoOASymbolsForConversionReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASymbolsForConversionReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.firstAssetId);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.lastAssetId);
      return writer;
    };

    /**
     * Decodes a ProtoOASymbolsForConversionReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASymbolsForConversionReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASymbolsForConversionReq} ProtoOASymbolsForConversionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASymbolsForConversionReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASymbolsForConversionReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.firstAssetId = reader.int64();
            break;
          }
          case 4: {
            message.lastAssetId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("firstAssetId"))
        throw $util.ProtocolError("missing required 'firstAssetId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("lastAssetId"))
        throw $util.ProtocolError("missing required 'lastAssetId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASymbolsForConversionReq
     * @function getTypeUrl
     * @memberof ProtoOASymbolsForConversionReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASymbolsForConversionReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASymbolsForConversionReq";
    };

    return ProtoOASymbolsForConversionReq;
  })());

export const ProtoOASymbolsForConversionRes =
  ($root.ProtoOASymbolsForConversionRes = (() => {
    /**
     * Properties of a ProtoOASymbolsForConversionRes.
     * @exports IProtoOASymbolsForConversionRes
     * @interface IProtoOASymbolsForConversionRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolsForConversionRes payloadType
     * @property {number} ctidTraderAccountId ProtoOASymbolsForConversionRes ctidTraderAccountId
     * @property {Array.<IProtoOALightSymbol>|null} [symbol] ProtoOASymbolsForConversionRes symbol
     */

    /**
     * Constructs a new ProtoOASymbolsForConversionRes.
     * @exports ProtoOASymbolsForConversionRes
     * @classdesc Represents a ProtoOASymbolsForConversionRes.
     * @implements IProtoOASymbolsForConversionRes
     * @constructor
     * @param {IProtoOASymbolsForConversionRes=} [properties] Properties to set
     */
    function ProtoOASymbolsForConversionRes(properties) {
      this.symbol = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASymbolsForConversionRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASymbolsForConversionRes
     * @instance
     */
    ProtoOASymbolsForConversionRes.prototype.payloadType = 2119;

    /**
     * ProtoOASymbolsForConversionRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASymbolsForConversionRes
     * @instance
     */
    ProtoOASymbolsForConversionRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASymbolsForConversionRes symbol.
     * @member {Array.<IProtoOALightSymbol>} symbol
     * @memberof ProtoOASymbolsForConversionRes
     * @instance
     */
    ProtoOASymbolsForConversionRes.prototype.symbol = $util.emptyArray;

    /**
     * Creates a new ProtoOASymbolsForConversionRes instance using the specified properties.
     * @function create
     * @memberof ProtoOASymbolsForConversionRes
     * @static
     * @param {IProtoOASymbolsForConversionRes=} [properties] Properties to set
     * @returns {ProtoOASymbolsForConversionRes} ProtoOASymbolsForConversionRes instance
     */
    ProtoOASymbolsForConversionRes.create = function create(properties) {
      return new ProtoOASymbolsForConversionRes(properties);
    };

    /**
     * Encodes the specified ProtoOASymbolsForConversionRes message. Does not implicitly {@link ProtoOASymbolsForConversionRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASymbolsForConversionRes
     * @static
     * @param {IProtoOASymbolsForConversionRes} message ProtoOASymbolsForConversionRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASymbolsForConversionRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbol != null && message.symbol.length)
        for (let i = 0; i < message.symbol.length; ++i)
          $root.ProtoOALightSymbol.encode(
            message.symbol[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOASymbolsForConversionRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASymbolsForConversionRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASymbolsForConversionRes} ProtoOASymbolsForConversionRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASymbolsForConversionRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASymbolsForConversionRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbol && message.symbol.length)) message.symbol = [];
            message.symbol.push(
              $root.ProtoOALightSymbol.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASymbolsForConversionRes
     * @function getTypeUrl
     * @memberof ProtoOASymbolsForConversionRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASymbolsForConversionRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASymbolsForConversionRes";
    };

    return ProtoOASymbolsForConversionRes;
  })());

export const ProtoOASymbolChangedEvent = ($root.ProtoOASymbolChangedEvent =
  (() => {
    /**
     * Properties of a ProtoOASymbolChangedEvent.
     * @exports IProtoOASymbolChangedEvent
     * @interface IProtoOASymbolChangedEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolChangedEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOASymbolChangedEvent ctidTraderAccountId
     * @property {Array.<number>|null} [symbolId] ProtoOASymbolChangedEvent symbolId
     */

    /**
     * Constructs a new ProtoOASymbolChangedEvent.
     * @exports ProtoOASymbolChangedEvent
     * @classdesc Represents a ProtoOASymbolChangedEvent.
     * @implements IProtoOASymbolChangedEvent
     * @constructor
     * @param {IProtoOASymbolChangedEvent=} [properties] Properties to set
     */
    function ProtoOASymbolChangedEvent(properties) {
      this.symbolId = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASymbolChangedEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASymbolChangedEvent
     * @instance
     */
    ProtoOASymbolChangedEvent.prototype.payloadType = 2120;

    /**
     * ProtoOASymbolChangedEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASymbolChangedEvent
     * @instance
     */
    ProtoOASymbolChangedEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASymbolChangedEvent symbolId.
     * @member {Array.<number>} symbolId
     * @memberof ProtoOASymbolChangedEvent
     * @instance
     */
    ProtoOASymbolChangedEvent.prototype.symbolId = $util.emptyArray;

    /**
     * Creates a new ProtoOASymbolChangedEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOASymbolChangedEvent
     * @static
     * @param {IProtoOASymbolChangedEvent=} [properties] Properties to set
     * @returns {ProtoOASymbolChangedEvent} ProtoOASymbolChangedEvent instance
     */
    ProtoOASymbolChangedEvent.create = function create(properties) {
      return new ProtoOASymbolChangedEvent(properties);
    };

    /**
     * Encodes the specified ProtoOASymbolChangedEvent message. Does not implicitly {@link ProtoOASymbolChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASymbolChangedEvent
     * @static
     * @param {IProtoOASymbolChangedEvent} message ProtoOASymbolChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASymbolChangedEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolId != null && message.symbolId.length)
        for (let i = 0; i < message.symbolId.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
      return writer;
    };

    /**
     * Decodes a ProtoOASymbolChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASymbolChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASymbolChangedEvent} ProtoOASymbolChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASymbolChangedEvent.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASymbolChangedEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolId && message.symbolId.length))
              message.symbolId = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.symbolId.push(reader.int64());
            } else message.symbolId.push(reader.int64());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASymbolChangedEvent
     * @function getTypeUrl
     * @memberof ProtoOASymbolChangedEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASymbolChangedEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASymbolChangedEvent";
    };

    return ProtoOASymbolChangedEvent;
  })());

export const ProtoOAAssetClassListReq = ($root.ProtoOAAssetClassListReq =
  (() => {
    /**
     * Properties of a ProtoOAAssetClassListReq.
     * @exports IProtoOAAssetClassListReq
     * @interface IProtoOAAssetClassListReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetClassListReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAAssetClassListReq ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAAssetClassListReq.
     * @exports ProtoOAAssetClassListReq
     * @classdesc Represents a ProtoOAAssetClassListReq.
     * @implements IProtoOAAssetClassListReq
     * @constructor
     * @param {IProtoOAAssetClassListReq=} [properties] Properties to set
     */
    function ProtoOAAssetClassListReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAAssetClassListReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAAssetClassListReq
     * @instance
     */
    ProtoOAAssetClassListReq.prototype.payloadType = 2153;

    /**
     * ProtoOAAssetClassListReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAAssetClassListReq
     * @instance
     */
    ProtoOAAssetClassListReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAAssetClassListReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAAssetClassListReq
     * @static
     * @param {IProtoOAAssetClassListReq=} [properties] Properties to set
     * @returns {ProtoOAAssetClassListReq} ProtoOAAssetClassListReq instance
     */
    ProtoOAAssetClassListReq.create = function create(properties) {
      return new ProtoOAAssetClassListReq(properties);
    };

    /**
     * Encodes the specified ProtoOAAssetClassListReq message. Does not implicitly {@link ProtoOAAssetClassListReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAAssetClassListReq
     * @static
     * @param {IProtoOAAssetClassListReq} message ProtoOAAssetClassListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAAssetClassListReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAAssetClassListReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAAssetClassListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAAssetClassListReq} ProtoOAAssetClassListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAAssetClassListReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAAssetClassListReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAAssetClassListReq
     * @function getTypeUrl
     * @memberof ProtoOAAssetClassListReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAAssetClassListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAAssetClassListReq";
    };

    return ProtoOAAssetClassListReq;
  })());

export const ProtoOAAssetClassListRes = ($root.ProtoOAAssetClassListRes =
  (() => {
    /**
     * Properties of a ProtoOAAssetClassListRes.
     * @exports IProtoOAAssetClassListRes
     * @interface IProtoOAAssetClassListRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAssetClassListRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAAssetClassListRes ctidTraderAccountId
     * @property {Array.<IProtoOAAssetClass>|null} [assetClass] ProtoOAAssetClassListRes assetClass
     */

    /**
     * Constructs a new ProtoOAAssetClassListRes.
     * @exports ProtoOAAssetClassListRes
     * @classdesc Represents a ProtoOAAssetClassListRes.
     * @implements IProtoOAAssetClassListRes
     * @constructor
     * @param {IProtoOAAssetClassListRes=} [properties] Properties to set
     */
    function ProtoOAAssetClassListRes(properties) {
      this.assetClass = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAAssetClassListRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAAssetClassListRes
     * @instance
     */
    ProtoOAAssetClassListRes.prototype.payloadType = 2154;

    /**
     * ProtoOAAssetClassListRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAAssetClassListRes
     * @instance
     */
    ProtoOAAssetClassListRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAAssetClassListRes assetClass.
     * @member {Array.<IProtoOAAssetClass>} assetClass
     * @memberof ProtoOAAssetClassListRes
     * @instance
     */
    ProtoOAAssetClassListRes.prototype.assetClass = $util.emptyArray;

    /**
     * Creates a new ProtoOAAssetClassListRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAAssetClassListRes
     * @static
     * @param {IProtoOAAssetClassListRes=} [properties] Properties to set
     * @returns {ProtoOAAssetClassListRes} ProtoOAAssetClassListRes instance
     */
    ProtoOAAssetClassListRes.create = function create(properties) {
      return new ProtoOAAssetClassListRes(properties);
    };

    /**
     * Encodes the specified ProtoOAAssetClassListRes message. Does not implicitly {@link ProtoOAAssetClassListRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAAssetClassListRes
     * @static
     * @param {IProtoOAAssetClassListRes} message ProtoOAAssetClassListRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAAssetClassListRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.assetClass != null && message.assetClass.length)
        for (let i = 0; i < message.assetClass.length; ++i)
          $root.ProtoOAAssetClass.encode(
            message.assetClass[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAAssetClassListRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAAssetClassListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAAssetClassListRes} ProtoOAAssetClassListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAAssetClassListRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAAssetClassListRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.assetClass && message.assetClass.length))
              message.assetClass = [];
            message.assetClass.push(
              $root.ProtoOAAssetClass.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAAssetClassListRes
     * @function getTypeUrl
     * @memberof ProtoOAAssetClassListRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAAssetClassListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAAssetClassListRes";
    };

    return ProtoOAAssetClassListRes;
  })());

export const ProtoOATraderReq = ($root.ProtoOATraderReq = (() => {
  /**
   * Properties of a ProtoOATraderReq.
   * @exports IProtoOATraderReq
   * @interface IProtoOATraderReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderReq payloadType
   * @property {number} ctidTraderAccountId ProtoOATraderReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOATraderReq.
   * @exports ProtoOATraderReq
   * @classdesc Represents a ProtoOATraderReq.
   * @implements IProtoOATraderReq
   * @constructor
   * @param {IProtoOATraderReq=} [properties] Properties to set
   */
  function ProtoOATraderReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATraderReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATraderReq
   * @instance
   */
  ProtoOATraderReq.prototype.payloadType = 2121;

  /**
   * ProtoOATraderReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOATraderReq
   * @instance
   */
  ProtoOATraderReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOATraderReq instance using the specified properties.
   * @function create
   * @memberof ProtoOATraderReq
   * @static
   * @param {IProtoOATraderReq=} [properties] Properties to set
   * @returns {ProtoOATraderReq} ProtoOATraderReq instance
   */
  ProtoOATraderReq.create = function create(properties) {
    return new ProtoOATraderReq(properties);
  };

  /**
   * Encodes the specified ProtoOATraderReq message. Does not implicitly {@link ProtoOATraderReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATraderReq
   * @static
   * @param {IProtoOATraderReq} message ProtoOATraderReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATraderReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOATraderReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATraderReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATraderReq} ProtoOATraderReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATraderReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATraderReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATraderReq
   * @function getTypeUrl
   * @memberof ProtoOATraderReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATraderReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATraderReq";
  };

  return ProtoOATraderReq;
})());

export const ProtoOATraderRes = ($root.ProtoOATraderRes = (() => {
  /**
   * Properties of a ProtoOATraderRes.
   * @exports IProtoOATraderRes
   * @interface IProtoOATraderRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderRes payloadType
   * @property {number} ctidTraderAccountId ProtoOATraderRes ctidTraderAccountId
   * @property {IProtoOATrader} trader ProtoOATraderRes trader
   */

  /**
   * Constructs a new ProtoOATraderRes.
   * @exports ProtoOATraderRes
   * @classdesc Represents a ProtoOATraderRes.
   * @implements IProtoOATraderRes
   * @constructor
   * @param {IProtoOATraderRes=} [properties] Properties to set
   */
  function ProtoOATraderRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOATraderRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.payloadType = 2122;

  /**
   * ProtoOATraderRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOATraderRes trader.
   * @member {IProtoOATrader} trader
   * @memberof ProtoOATraderRes
   * @instance
   */
  ProtoOATraderRes.prototype.trader = null;

  /**
   * Creates a new ProtoOATraderRes instance using the specified properties.
   * @function create
   * @memberof ProtoOATraderRes
   * @static
   * @param {IProtoOATraderRes=} [properties] Properties to set
   * @returns {ProtoOATraderRes} ProtoOATraderRes instance
   */
  ProtoOATraderRes.create = function create(properties) {
    return new ProtoOATraderRes(properties);
  };

  /**
   * Encodes the specified ProtoOATraderRes message. Does not implicitly {@link ProtoOATraderRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOATraderRes
   * @static
   * @param {IProtoOATraderRes} message ProtoOATraderRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOATraderRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    $root.ProtoOATrader.encode(
      message.trader,
      writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
    ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOATraderRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOATraderRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOATraderRes} ProtoOATraderRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOATraderRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOATraderRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.trader = $root.ProtoOATrader.decode(reader, reader.uint32());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("trader"))
      throw $util.ProtocolError("missing required 'trader'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOATraderRes
   * @function getTypeUrl
   * @memberof ProtoOATraderRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOATraderRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOATraderRes";
  };

  return ProtoOATraderRes;
})());

export const ProtoOATraderUpdatedEvent = ($root.ProtoOATraderUpdatedEvent =
  (() => {
    /**
     * Properties of a ProtoOATraderUpdatedEvent.
     * @exports IProtoOATraderUpdatedEvent
     * @interface IProtoOATraderUpdatedEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOATraderUpdatedEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOATraderUpdatedEvent ctidTraderAccountId
     * @property {IProtoOATrader} trader ProtoOATraderUpdatedEvent trader
     */

    /**
     * Constructs a new ProtoOATraderUpdatedEvent.
     * @exports ProtoOATraderUpdatedEvent
     * @classdesc Represents a ProtoOATraderUpdatedEvent.
     * @implements IProtoOATraderUpdatedEvent
     * @constructor
     * @param {IProtoOATraderUpdatedEvent=} [properties] Properties to set
     */
    function ProtoOATraderUpdatedEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOATraderUpdatedEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOATraderUpdatedEvent
     * @instance
     */
    ProtoOATraderUpdatedEvent.prototype.payloadType = 2123;

    /**
     * ProtoOATraderUpdatedEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOATraderUpdatedEvent
     * @instance
     */
    ProtoOATraderUpdatedEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOATraderUpdatedEvent trader.
     * @member {IProtoOATrader} trader
     * @memberof ProtoOATraderUpdatedEvent
     * @instance
     */
    ProtoOATraderUpdatedEvent.prototype.trader = null;

    /**
     * Creates a new ProtoOATraderUpdatedEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOATraderUpdatedEvent
     * @static
     * @param {IProtoOATraderUpdatedEvent=} [properties] Properties to set
     * @returns {ProtoOATraderUpdatedEvent} ProtoOATraderUpdatedEvent instance
     */
    ProtoOATraderUpdatedEvent.create = function create(properties) {
      return new ProtoOATraderUpdatedEvent(properties);
    };

    /**
     * Encodes the specified ProtoOATraderUpdatedEvent message. Does not implicitly {@link ProtoOATraderUpdatedEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOATraderUpdatedEvent
     * @static
     * @param {IProtoOATraderUpdatedEvent} message ProtoOATraderUpdatedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOATraderUpdatedEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      $root.ProtoOATrader.encode(
        message.trader,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOATraderUpdatedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOATraderUpdatedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOATraderUpdatedEvent} ProtoOATraderUpdatedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOATraderUpdatedEvent.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOATraderUpdatedEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.trader = $root.ProtoOATrader.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("trader"))
        throw $util.ProtocolError("missing required 'trader'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOATraderUpdatedEvent
     * @function getTypeUrl
     * @memberof ProtoOATraderUpdatedEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOATraderUpdatedEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOATraderUpdatedEvent";
    };

    return ProtoOATraderUpdatedEvent;
  })());

export const ProtoOAReconcileReq = ($root.ProtoOAReconcileReq = (() => {
  /**
   * Properties of a ProtoOAReconcileReq.
   * @exports IProtoOAReconcileReq
   * @interface IProtoOAReconcileReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAReconcileReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAReconcileReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAReconcileReq.
   * @exports ProtoOAReconcileReq
   * @classdesc Represents a ProtoOAReconcileReq.
   * @implements IProtoOAReconcileReq
   * @constructor
   * @param {IProtoOAReconcileReq=} [properties] Properties to set
   */
  function ProtoOAReconcileReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAReconcileReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAReconcileReq
   * @instance
   */
  ProtoOAReconcileReq.prototype.payloadType = 2124;

  /**
   * ProtoOAReconcileReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAReconcileReq
   * @instance
   */
  ProtoOAReconcileReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAReconcileReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {IProtoOAReconcileReq=} [properties] Properties to set
   * @returns {ProtoOAReconcileReq} ProtoOAReconcileReq instance
   */
  ProtoOAReconcileReq.create = function create(properties) {
    return new ProtoOAReconcileReq(properties);
  };

  /**
   * Encodes the specified ProtoOAReconcileReq message. Does not implicitly {@link ProtoOAReconcileReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {IProtoOAReconcileReq} message ProtoOAReconcileReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAReconcileReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAReconcileReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAReconcileReq} ProtoOAReconcileReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAReconcileReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAReconcileReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAReconcileReq
   * @function getTypeUrl
   * @memberof ProtoOAReconcileReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAReconcileReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAReconcileReq";
  };

  return ProtoOAReconcileReq;
})());

export const ProtoOAReconcileRes = ($root.ProtoOAReconcileRes = (() => {
  /**
   * Properties of a ProtoOAReconcileRes.
   * @exports IProtoOAReconcileRes
   * @interface IProtoOAReconcileRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAReconcileRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAReconcileRes ctidTraderAccountId
   * @property {Array.<IProtoOAPosition>|null} [position] ProtoOAReconcileRes position
   * @property {Array.<IProtoOAOrder>|null} [order] ProtoOAReconcileRes order
   */

  /**
   * Constructs a new ProtoOAReconcileRes.
   * @exports ProtoOAReconcileRes
   * @classdesc Represents a ProtoOAReconcileRes.
   * @implements IProtoOAReconcileRes
   * @constructor
   * @param {IProtoOAReconcileRes=} [properties] Properties to set
   */
  function ProtoOAReconcileRes(properties) {
    this.position = [];
    this.order = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAReconcileRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.payloadType = 2125;

  /**
   * ProtoOAReconcileRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAReconcileRes position.
   * @member {Array.<IProtoOAPosition>} position
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.position = $util.emptyArray;

  /**
   * ProtoOAReconcileRes order.
   * @member {Array.<IProtoOAOrder>} order
   * @memberof ProtoOAReconcileRes
   * @instance
   */
  ProtoOAReconcileRes.prototype.order = $util.emptyArray;

  /**
   * Creates a new ProtoOAReconcileRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {IProtoOAReconcileRes=} [properties] Properties to set
   * @returns {ProtoOAReconcileRes} ProtoOAReconcileRes instance
   */
  ProtoOAReconcileRes.create = function create(properties) {
    return new ProtoOAReconcileRes(properties);
  };

  /**
   * Encodes the specified ProtoOAReconcileRes message. Does not implicitly {@link ProtoOAReconcileRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {IProtoOAReconcileRes} message ProtoOAReconcileRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAReconcileRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.position != null && message.position.length)
      for (let i = 0; i < message.position.length; ++i)
        $root.ProtoOAPosition.encode(
          message.position[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    if (message.order != null && message.order.length)
      for (let i = 0; i < message.order.length; ++i)
        $root.ProtoOAOrder.encode(
          message.order[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAReconcileRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAReconcileRes} ProtoOAReconcileRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAReconcileRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAReconcileRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.position && message.position.length))
            message.position = [];
          message.position.push(
            $root.ProtoOAPosition.decode(reader, reader.uint32()),
          );
          break;
        }
        case 4: {
          if (!(message.order && message.order.length)) message.order = [];
          message.order.push(
            $root.ProtoOAOrder.decode(reader, reader.uint32()),
          );
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAReconcileRes
   * @function getTypeUrl
   * @memberof ProtoOAReconcileRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAReconcileRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAReconcileRes";
  };

  return ProtoOAReconcileRes;
})());

export const ProtoOAOrderErrorEvent = ($root.ProtoOAOrderErrorEvent = (() => {
  /**
   * Properties of a ProtoOAOrderErrorEvent.
   * @exports IProtoOAOrderErrorEvent
   * @interface IProtoOAOrderErrorEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderErrorEvent payloadType
   * @property {string} errorCode ProtoOAOrderErrorEvent errorCode
   * @property {number|null} [orderId] ProtoOAOrderErrorEvent orderId
   * @property {number} ctidTraderAccountId ProtoOAOrderErrorEvent ctidTraderAccountId
   * @property {number|null} [positionId] ProtoOAOrderErrorEvent positionId
   * @property {string|null} [description] ProtoOAOrderErrorEvent description
   */

  /**
   * Constructs a new ProtoOAOrderErrorEvent.
   * @exports ProtoOAOrderErrorEvent
   * @classdesc Represents a ProtoOAOrderErrorEvent.
   * @implements IProtoOAOrderErrorEvent
   * @constructor
   * @param {IProtoOAOrderErrorEvent=} [properties] Properties to set
   */
  function ProtoOAOrderErrorEvent(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderErrorEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.payloadType = 2132;

  /**
   * ProtoOAOrderErrorEvent errorCode.
   * @member {string} errorCode
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.errorCode = "";

  /**
   * ProtoOAOrderErrorEvent orderId.
   * @member {number} orderId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent positionId.
   * @member {number} positionId
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.positionId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderErrorEvent description.
   * @member {string} description
   * @memberof ProtoOAOrderErrorEvent
   * @instance
   */
  ProtoOAOrderErrorEvent.prototype.description = "";

  /**
   * Creates a new ProtoOAOrderErrorEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {IProtoOAOrderErrorEvent=} [properties] Properties to set
   * @returns {ProtoOAOrderErrorEvent} ProtoOAOrderErrorEvent instance
   */
  ProtoOAOrderErrorEvent.create = function create(properties) {
    return new ProtoOAOrderErrorEvent(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderErrorEvent message. Does not implicitly {@link ProtoOAOrderErrorEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {IProtoOAOrderErrorEvent} message ProtoOAOrderErrorEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderErrorEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errorCode);
    if (
      message.orderId != null &&
      Object.hasOwnProperty.call(message, "orderId")
    )
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    writer
      .uint32(/* id 5, wireType 0 =*/ 40)
      .int64(message.ctidTraderAccountId);
    if (
      message.positionId != null &&
      Object.hasOwnProperty.call(message, "positionId")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.positionId);
    if (
      message.description != null &&
      Object.hasOwnProperty.call(message, "description")
    )
      writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.description);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderErrorEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderErrorEvent} ProtoOAOrderErrorEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderErrorEvent.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderErrorEvent();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.errorCode = reader.string();
          break;
        }
        case 3: {
          message.orderId = reader.int64();
          break;
        }
        case 5: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 6: {
          message.positionId = reader.int64();
          break;
        }
        case 7: {
          message.description = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("errorCode"))
      throw $util.ProtocolError("missing required 'errorCode'", {
        instance: message,
      });
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrderErrorEvent
   * @function getTypeUrl
   * @memberof ProtoOAOrderErrorEvent
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrderErrorEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrderErrorEvent";
  };

  return ProtoOAOrderErrorEvent;
})());

export const ProtoOADealListReq = ($root.ProtoOADealListReq = (() => {
  /**
   * Properties of a ProtoOADealListReq.
   * @exports IProtoOADealListReq
   * @interface IProtoOADealListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListReq payloadType
   * @property {number} ctidTraderAccountId ProtoOADealListReq ctidTraderAccountId
   * @property {number} fromTimestamp ProtoOADealListReq fromTimestamp
   * @property {number} toTimestamp ProtoOADealListReq toTimestamp
   * @property {number|null} [maxRows] ProtoOADealListReq maxRows
   */

  /**
   * Constructs a new ProtoOADealListReq.
   * @exports ProtoOADealListReq
   * @classdesc Represents a ProtoOADealListReq.
   * @implements IProtoOADealListReq
   * @constructor
   * @param {IProtoOADealListReq=} [properties] Properties to set
   */
  function ProtoOADealListReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADealListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.payloadType = 2133;

  /**
   * ProtoOADealListReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq fromTimestamp.
   * @member {number} fromTimestamp
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq toTimestamp.
   * @member {number} toTimestamp
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListReq maxRows.
   * @member {number} maxRows
   * @memberof ProtoOADealListReq
   * @instance
   */
  ProtoOADealListReq.prototype.maxRows = 0;

  /**
   * Creates a new ProtoOADealListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOADealListReq
   * @static
   * @param {IProtoOADealListReq=} [properties] Properties to set
   * @returns {ProtoOADealListReq} ProtoOADealListReq instance
   */
  ProtoOADealListReq.create = function create(properties) {
    return new ProtoOADealListReq(properties);
  };

  /**
   * Encodes the specified ProtoOADealListReq message. Does not implicitly {@link ProtoOADealListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADealListReq
   * @static
   * @param {IProtoOADealListReq} message ProtoOADealListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADealListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    if (
      message.maxRows != null &&
      Object.hasOwnProperty.call(message, "maxRows")
    )
      writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.maxRows);
    return writer;
  };

  /**
   * Decodes a ProtoOADealListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADealListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADealListReq} ProtoOADealListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADealListReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADealListReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.fromTimestamp = reader.int64();
          break;
        }
        case 4: {
          message.toTimestamp = reader.int64();
          break;
        }
        case 5: {
          message.maxRows = reader.int32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADealListReq
   * @function getTypeUrl
   * @memberof ProtoOADealListReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADealListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADealListReq";
  };

  return ProtoOADealListReq;
})());

export const ProtoOADealListRes = ($root.ProtoOADealListRes = (() => {
  /**
   * Properties of a ProtoOADealListRes.
   * @exports IProtoOADealListRes
   * @interface IProtoOADealListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListRes payloadType
   * @property {number} ctidTraderAccountId ProtoOADealListRes ctidTraderAccountId
   * @property {Array.<IProtoOADeal>|null} [deal] ProtoOADealListRes deal
   * @property {boolean} hasMore ProtoOADealListRes hasMore
   */

  /**
   * Constructs a new ProtoOADealListRes.
   * @exports ProtoOADealListRes
   * @classdesc Represents a ProtoOADealListRes.
   * @implements IProtoOADealListRes
   * @constructor
   * @param {IProtoOADealListRes=} [properties] Properties to set
   */
  function ProtoOADealListRes(properties) {
    this.deal = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADealListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.payloadType = 2134;

  /**
   * ProtoOADealListRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADealListRes deal.
   * @member {Array.<IProtoOADeal>} deal
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.deal = $util.emptyArray;

  /**
   * ProtoOADealListRes hasMore.
   * @member {boolean} hasMore
   * @memberof ProtoOADealListRes
   * @instance
   */
  ProtoOADealListRes.prototype.hasMore = false;

  /**
   * Creates a new ProtoOADealListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOADealListRes
   * @static
   * @param {IProtoOADealListRes=} [properties] Properties to set
   * @returns {ProtoOADealListRes} ProtoOADealListRes instance
   */
  ProtoOADealListRes.create = function create(properties) {
    return new ProtoOADealListRes(properties);
  };

  /**
   * Encodes the specified ProtoOADealListRes message. Does not implicitly {@link ProtoOADealListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADealListRes
   * @static
   * @param {IProtoOADealListRes} message ProtoOADealListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADealListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.deal != null && message.deal.length)
      for (let i = 0; i < message.deal.length; ++i)
        $root.ProtoOADeal.encode(
          message.deal[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
    return writer;
  };

  /**
   * Decodes a ProtoOADealListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADealListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADealListRes} ProtoOADealListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADealListRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADealListRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.deal && message.deal.length)) message.deal = [];
          message.deal.push($root.ProtoOADeal.decode(reader, reader.uint32()));
          break;
        }
        case 4: {
          message.hasMore = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("hasMore"))
      throw $util.ProtocolError("missing required 'hasMore'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADealListRes
   * @function getTypeUrl
   * @memberof ProtoOADealListRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADealListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADealListRes";
  };

  return ProtoOADealListRes;
})());

export const ProtoOAOrderListReq = ($root.ProtoOAOrderListReq = (() => {
  /**
   * Properties of a ProtoOAOrderListReq.
   * @exports IProtoOAOrderListReq
   * @interface IProtoOAOrderListReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderListReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAOrderListReq ctidTraderAccountId
   * @property {number} fromTimestamp ProtoOAOrderListReq fromTimestamp
   * @property {number} toTimestamp ProtoOAOrderListReq toTimestamp
   */

  /**
   * Constructs a new ProtoOAOrderListReq.
   * @exports ProtoOAOrderListReq
   * @classdesc Represents a ProtoOAOrderListReq.
   * @implements IProtoOAOrderListReq
   * @constructor
   * @param {IProtoOAOrderListReq=} [properties] Properties to set
   */
  function ProtoOAOrderListReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderListReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderListReq
   * @instance
   */
  ProtoOAOrderListReq.prototype.payloadType = 2175;

  /**
   * ProtoOAOrderListReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAOrderListReq
   * @instance
   */
  ProtoOAOrderListReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderListReq fromTimestamp.
   * @member {number} fromTimestamp
   * @memberof ProtoOAOrderListReq
   * @instance
   */
  ProtoOAOrderListReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderListReq toTimestamp.
   * @member {number} toTimestamp
   * @memberof ProtoOAOrderListReq
   * @instance
   */
  ProtoOAOrderListReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAOrderListReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderListReq
   * @static
   * @param {IProtoOAOrderListReq=} [properties] Properties to set
   * @returns {ProtoOAOrderListReq} ProtoOAOrderListReq instance
   */
  ProtoOAOrderListReq.create = function create(properties) {
    return new ProtoOAOrderListReq(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderListReq message. Does not implicitly {@link ProtoOAOrderListReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderListReq
   * @static
   * @param {IProtoOAOrderListReq} message ProtoOAOrderListReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderListReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderListReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderListReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderListReq} ProtoOAOrderListReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderListReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderListReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.fromTimestamp = reader.int64();
          break;
        }
        case 4: {
          message.toTimestamp = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrderListReq
   * @function getTypeUrl
   * @memberof ProtoOAOrderListReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrderListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrderListReq";
  };

  return ProtoOAOrderListReq;
})());

export const ProtoOAOrderListRes = ($root.ProtoOAOrderListRes = (() => {
  /**
   * Properties of a ProtoOAOrderListRes.
   * @exports IProtoOAOrderListRes
   * @interface IProtoOAOrderListRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderListRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAOrderListRes ctidTraderAccountId
   * @property {Array.<IProtoOAOrder>|null} [order] ProtoOAOrderListRes order
   * @property {boolean} hasMore ProtoOAOrderListRes hasMore
   */

  /**
   * Constructs a new ProtoOAOrderListRes.
   * @exports ProtoOAOrderListRes
   * @classdesc Represents a ProtoOAOrderListRes.
   * @implements IProtoOAOrderListRes
   * @constructor
   * @param {IProtoOAOrderListRes=} [properties] Properties to set
   */
  function ProtoOAOrderListRes(properties) {
    this.order = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderListRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderListRes
   * @instance
   */
  ProtoOAOrderListRes.prototype.payloadType = 2176;

  /**
   * ProtoOAOrderListRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAOrderListRes
   * @instance
   */
  ProtoOAOrderListRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderListRes order.
   * @member {Array.<IProtoOAOrder>} order
   * @memberof ProtoOAOrderListRes
   * @instance
   */
  ProtoOAOrderListRes.prototype.order = $util.emptyArray;

  /**
   * ProtoOAOrderListRes hasMore.
   * @member {boolean} hasMore
   * @memberof ProtoOAOrderListRes
   * @instance
   */
  ProtoOAOrderListRes.prototype.hasMore = false;

  /**
   * Creates a new ProtoOAOrderListRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderListRes
   * @static
   * @param {IProtoOAOrderListRes=} [properties] Properties to set
   * @returns {ProtoOAOrderListRes} ProtoOAOrderListRes instance
   */
  ProtoOAOrderListRes.create = function create(properties) {
    return new ProtoOAOrderListRes(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderListRes message. Does not implicitly {@link ProtoOAOrderListRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderListRes
   * @static
   * @param {IProtoOAOrderListRes} message ProtoOAOrderListRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderListRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.order != null && message.order.length)
      for (let i = 0; i < message.order.length; ++i)
        $root.ProtoOAOrder.encode(
          message.order[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderListRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderListRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderListRes} ProtoOAOrderListRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderListRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderListRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.order && message.order.length)) message.order = [];
          message.order.push(
            $root.ProtoOAOrder.decode(reader, reader.uint32()),
          );
          break;
        }
        case 4: {
          message.hasMore = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("hasMore"))
      throw $util.ProtocolError("missing required 'hasMore'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrderListRes
   * @function getTypeUrl
   * @memberof ProtoOAOrderListRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrderListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrderListRes";
  };

  return ProtoOAOrderListRes;
})());

export const ProtoOAExpectedMarginReq = ($root.ProtoOAExpectedMarginReq =
  (() => {
    /**
     * Properties of a ProtoOAExpectedMarginReq.
     * @exports IProtoOAExpectedMarginReq
     * @interface IProtoOAExpectedMarginReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExpectedMarginReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAExpectedMarginReq ctidTraderAccountId
     * @property {number} symbolId ProtoOAExpectedMarginReq symbolId
     * @property {Array.<number>|null} [volume] ProtoOAExpectedMarginReq volume
     */

    /**
     * Constructs a new ProtoOAExpectedMarginReq.
     * @exports ProtoOAExpectedMarginReq
     * @classdesc Represents a ProtoOAExpectedMarginReq.
     * @implements IProtoOAExpectedMarginReq
     * @constructor
     * @param {IProtoOAExpectedMarginReq=} [properties] Properties to set
     */
    function ProtoOAExpectedMarginReq(properties) {
      this.volume = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAExpectedMarginReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAExpectedMarginReq
     * @instance
     */
    ProtoOAExpectedMarginReq.prototype.payloadType = 2139;

    /**
     * ProtoOAExpectedMarginReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAExpectedMarginReq
     * @instance
     */
    ProtoOAExpectedMarginReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAExpectedMarginReq symbolId.
     * @member {number} symbolId
     * @memberof ProtoOAExpectedMarginReq
     * @instance
     */
    ProtoOAExpectedMarginReq.prototype.symbolId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAExpectedMarginReq volume.
     * @member {Array.<number>} volume
     * @memberof ProtoOAExpectedMarginReq
     * @instance
     */
    ProtoOAExpectedMarginReq.prototype.volume = $util.emptyArray;

    /**
     * Creates a new ProtoOAExpectedMarginReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAExpectedMarginReq
     * @static
     * @param {IProtoOAExpectedMarginReq=} [properties] Properties to set
     * @returns {ProtoOAExpectedMarginReq} ProtoOAExpectedMarginReq instance
     */
    ProtoOAExpectedMarginReq.create = function create(properties) {
      return new ProtoOAExpectedMarginReq(properties);
    };

    /**
     * Encodes the specified ProtoOAExpectedMarginReq message. Does not implicitly {@link ProtoOAExpectedMarginReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAExpectedMarginReq
     * @static
     * @param {IProtoOAExpectedMarginReq} message ProtoOAExpectedMarginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAExpectedMarginReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
      if (message.volume != null && message.volume.length)
        for (let i = 0; i < message.volume.length; ++i)
          writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.volume[i]);
      return writer;
    };

    /**
     * Decodes a ProtoOAExpectedMarginReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAExpectedMarginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAExpectedMarginReq} ProtoOAExpectedMarginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAExpectedMarginReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAExpectedMarginReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.symbolId = reader.int64();
            break;
          }
          case 4: {
            if (!(message.volume && message.volume.length)) message.volume = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.volume.push(reader.int64());
            } else message.volume.push(reader.int64());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("symbolId"))
        throw $util.ProtocolError("missing required 'symbolId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAExpectedMarginReq
     * @function getTypeUrl
     * @memberof ProtoOAExpectedMarginReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAExpectedMarginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAExpectedMarginReq";
    };

    return ProtoOAExpectedMarginReq;
  })());

export const ProtoOAExpectedMarginRes = ($root.ProtoOAExpectedMarginRes =
  (() => {
    /**
     * Properties of a ProtoOAExpectedMarginRes.
     * @exports IProtoOAExpectedMarginRes
     * @interface IProtoOAExpectedMarginRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAExpectedMarginRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAExpectedMarginRes ctidTraderAccountId
     * @property {Array.<IProtoOAExpectedMargin>|null} [margin] ProtoOAExpectedMarginRes margin
     * @property {number|null} [moneyDigits] ProtoOAExpectedMarginRes moneyDigits
     */

    /**
     * Constructs a new ProtoOAExpectedMarginRes.
     * @exports ProtoOAExpectedMarginRes
     * @classdesc Represents a ProtoOAExpectedMarginRes.
     * @implements IProtoOAExpectedMarginRes
     * @constructor
     * @param {IProtoOAExpectedMarginRes=} [properties] Properties to set
     */
    function ProtoOAExpectedMarginRes(properties) {
      this.margin = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAExpectedMarginRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAExpectedMarginRes
     * @instance
     */
    ProtoOAExpectedMarginRes.prototype.payloadType = 2140;

    /**
     * ProtoOAExpectedMarginRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAExpectedMarginRes
     * @instance
     */
    ProtoOAExpectedMarginRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAExpectedMarginRes margin.
     * @member {Array.<IProtoOAExpectedMargin>} margin
     * @memberof ProtoOAExpectedMarginRes
     * @instance
     */
    ProtoOAExpectedMarginRes.prototype.margin = $util.emptyArray;

    /**
     * ProtoOAExpectedMarginRes moneyDigits.
     * @member {number} moneyDigits
     * @memberof ProtoOAExpectedMarginRes
     * @instance
     */
    ProtoOAExpectedMarginRes.prototype.moneyDigits = 0;

    /**
     * Creates a new ProtoOAExpectedMarginRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAExpectedMarginRes
     * @static
     * @param {IProtoOAExpectedMarginRes=} [properties] Properties to set
     * @returns {ProtoOAExpectedMarginRes} ProtoOAExpectedMarginRes instance
     */
    ProtoOAExpectedMarginRes.create = function create(properties) {
      return new ProtoOAExpectedMarginRes(properties);
    };

    /**
     * Encodes the specified ProtoOAExpectedMarginRes message. Does not implicitly {@link ProtoOAExpectedMarginRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAExpectedMarginRes
     * @static
     * @param {IProtoOAExpectedMarginRes} message ProtoOAExpectedMarginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAExpectedMarginRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.margin != null && message.margin.length)
        for (let i = 0; i < message.margin.length; ++i)
          $root.ProtoOAExpectedMargin.encode(
            message.margin[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      if (
        message.moneyDigits != null &&
        Object.hasOwnProperty.call(message, "moneyDigits")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.moneyDigits);
      return writer;
    };

    /**
     * Decodes a ProtoOAExpectedMarginRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAExpectedMarginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAExpectedMarginRes} ProtoOAExpectedMarginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAExpectedMarginRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAExpectedMarginRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.margin && message.margin.length)) message.margin = [];
            message.margin.push(
              $root.ProtoOAExpectedMargin.decode(reader, reader.uint32()),
            );
            break;
          }
          case 4: {
            message.moneyDigits = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAExpectedMarginRes
     * @function getTypeUrl
     * @memberof ProtoOAExpectedMarginRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAExpectedMarginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAExpectedMarginRes";
    };

    return ProtoOAExpectedMarginRes;
  })());

export const ProtoOAMarginChangedEvent = ($root.ProtoOAMarginChangedEvent =
  (() => {
    /**
     * Properties of a ProtoOAMarginChangedEvent.
     * @exports IProtoOAMarginChangedEvent
     * @interface IProtoOAMarginChangedEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginChangedEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOAMarginChangedEvent ctidTraderAccountId
     * @property {number} positionId ProtoOAMarginChangedEvent positionId
     * @property {number} usedMargin ProtoOAMarginChangedEvent usedMargin
     * @property {number|null} [moneyDigits] ProtoOAMarginChangedEvent moneyDigits
     */

    /**
     * Constructs a new ProtoOAMarginChangedEvent.
     * @exports ProtoOAMarginChangedEvent
     * @classdesc Represents a ProtoOAMarginChangedEvent.
     * @implements IProtoOAMarginChangedEvent
     * @constructor
     * @param {IProtoOAMarginChangedEvent=} [properties] Properties to set
     */
    function ProtoOAMarginChangedEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginChangedEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginChangedEvent
     * @instance
     */
    ProtoOAMarginChangedEvent.prototype.payloadType = 2141;

    /**
     * ProtoOAMarginChangedEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAMarginChangedEvent
     * @instance
     */
    ProtoOAMarginChangedEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAMarginChangedEvent positionId.
     * @member {number} positionId
     * @memberof ProtoOAMarginChangedEvent
     * @instance
     */
    ProtoOAMarginChangedEvent.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * ProtoOAMarginChangedEvent usedMargin.
     * @member {number} usedMargin
     * @memberof ProtoOAMarginChangedEvent
     * @instance
     */
    ProtoOAMarginChangedEvent.prototype.usedMargin = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * ProtoOAMarginChangedEvent moneyDigits.
     * @member {number} moneyDigits
     * @memberof ProtoOAMarginChangedEvent
     * @instance
     */
    ProtoOAMarginChangedEvent.prototype.moneyDigits = 0;

    /**
     * Creates a new ProtoOAMarginChangedEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginChangedEvent
     * @static
     * @param {IProtoOAMarginChangedEvent=} [properties] Properties to set
     * @returns {ProtoOAMarginChangedEvent} ProtoOAMarginChangedEvent instance
     */
    ProtoOAMarginChangedEvent.create = function create(properties) {
      return new ProtoOAMarginChangedEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginChangedEvent message. Does not implicitly {@link ProtoOAMarginChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginChangedEvent
     * @static
     * @param {IProtoOAMarginChangedEvent} message ProtoOAMarginChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginChangedEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.positionId);
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.usedMargin);
      if (
        message.moneyDigits != null &&
        Object.hasOwnProperty.call(message, "moneyDigits")
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.moneyDigits);
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginChangedEvent} ProtoOAMarginChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginChangedEvent.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginChangedEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.positionId = reader.uint64();
            break;
          }
          case 4: {
            message.usedMargin = reader.uint64();
            break;
          }
          case 5: {
            message.moneyDigits = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("usedMargin"))
        throw $util.ProtocolError("missing required 'usedMargin'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginChangedEvent
     * @function getTypeUrl
     * @memberof ProtoOAMarginChangedEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginChangedEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginChangedEvent";
    };

    return ProtoOAMarginChangedEvent;
  })());

export const ProtoOACashFlowHistoryListReq =
  ($root.ProtoOACashFlowHistoryListReq = (() => {
    /**
     * Properties of a ProtoOACashFlowHistoryListReq.
     * @exports IProtoOACashFlowHistoryListReq
     * @interface IProtoOACashFlowHistoryListReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACashFlowHistoryListReq payloadType
     * @property {number} ctidTraderAccountId ProtoOACashFlowHistoryListReq ctidTraderAccountId
     * @property {number} fromTimestamp ProtoOACashFlowHistoryListReq fromTimestamp
     * @property {number} toTimestamp ProtoOACashFlowHistoryListReq toTimestamp
     */

    /**
     * Constructs a new ProtoOACashFlowHistoryListReq.
     * @exports ProtoOACashFlowHistoryListReq
     * @classdesc Represents a ProtoOACashFlowHistoryListReq.
     * @implements IProtoOACashFlowHistoryListReq
     * @constructor
     * @param {IProtoOACashFlowHistoryListReq=} [properties] Properties to set
     */
    function ProtoOACashFlowHistoryListReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOACashFlowHistoryListReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOACashFlowHistoryListReq
     * @instance
     */
    ProtoOACashFlowHistoryListReq.prototype.payloadType = 2143;

    /**
     * ProtoOACashFlowHistoryListReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOACashFlowHistoryListReq
     * @instance
     */
    ProtoOACashFlowHistoryListReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOACashFlowHistoryListReq fromTimestamp.
     * @member {number} fromTimestamp
     * @memberof ProtoOACashFlowHistoryListReq
     * @instance
     */
    ProtoOACashFlowHistoryListReq.prototype.fromTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOACashFlowHistoryListReq toTimestamp.
     * @member {number} toTimestamp
     * @memberof ProtoOACashFlowHistoryListReq
     * @instance
     */
    ProtoOACashFlowHistoryListReq.prototype.toTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOACashFlowHistoryListReq instance using the specified properties.
     * @function create
     * @memberof ProtoOACashFlowHistoryListReq
     * @static
     * @param {IProtoOACashFlowHistoryListReq=} [properties] Properties to set
     * @returns {ProtoOACashFlowHistoryListReq} ProtoOACashFlowHistoryListReq instance
     */
    ProtoOACashFlowHistoryListReq.create = function create(properties) {
      return new ProtoOACashFlowHistoryListReq(properties);
    };

    /**
     * Encodes the specified ProtoOACashFlowHistoryListReq message. Does not implicitly {@link ProtoOACashFlowHistoryListReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOACashFlowHistoryListReq
     * @static
     * @param {IProtoOACashFlowHistoryListReq} message ProtoOACashFlowHistoryListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOACashFlowHistoryListReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOACashFlowHistoryListReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOACashFlowHistoryListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOACashFlowHistoryListReq} ProtoOACashFlowHistoryListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOACashFlowHistoryListReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOACashFlowHistoryListReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.fromTimestamp = reader.int64();
            break;
          }
          case 4: {
            message.toTimestamp = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("fromTimestamp"))
        throw $util.ProtocolError("missing required 'fromTimestamp'", {
          instance: message,
        });
      if (!message.hasOwnProperty("toTimestamp"))
        throw $util.ProtocolError("missing required 'toTimestamp'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOACashFlowHistoryListReq
     * @function getTypeUrl
     * @memberof ProtoOACashFlowHistoryListReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOACashFlowHistoryListReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOACashFlowHistoryListReq";
    };

    return ProtoOACashFlowHistoryListReq;
  })());

export const ProtoOACashFlowHistoryListRes =
  ($root.ProtoOACashFlowHistoryListRes = (() => {
    /**
     * Properties of a ProtoOACashFlowHistoryListRes.
     * @exports IProtoOACashFlowHistoryListRes
     * @interface IProtoOACashFlowHistoryListRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOACashFlowHistoryListRes payloadType
     * @property {number} ctidTraderAccountId ProtoOACashFlowHistoryListRes ctidTraderAccountId
     * @property {Array.<IProtoOADepositWithdraw>|null} [depositWithdraw] ProtoOACashFlowHistoryListRes depositWithdraw
     */

    /**
     * Constructs a new ProtoOACashFlowHistoryListRes.
     * @exports ProtoOACashFlowHistoryListRes
     * @classdesc Represents a ProtoOACashFlowHistoryListRes.
     * @implements IProtoOACashFlowHistoryListRes
     * @constructor
     * @param {IProtoOACashFlowHistoryListRes=} [properties] Properties to set
     */
    function ProtoOACashFlowHistoryListRes(properties) {
      this.depositWithdraw = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOACashFlowHistoryListRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOACashFlowHistoryListRes
     * @instance
     */
    ProtoOACashFlowHistoryListRes.prototype.payloadType = 2144;

    /**
     * ProtoOACashFlowHistoryListRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOACashFlowHistoryListRes
     * @instance
     */
    ProtoOACashFlowHistoryListRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOACashFlowHistoryListRes depositWithdraw.
     * @member {Array.<IProtoOADepositWithdraw>} depositWithdraw
     * @memberof ProtoOACashFlowHistoryListRes
     * @instance
     */
    ProtoOACashFlowHistoryListRes.prototype.depositWithdraw = $util.emptyArray;

    /**
     * Creates a new ProtoOACashFlowHistoryListRes instance using the specified properties.
     * @function create
     * @memberof ProtoOACashFlowHistoryListRes
     * @static
     * @param {IProtoOACashFlowHistoryListRes=} [properties] Properties to set
     * @returns {ProtoOACashFlowHistoryListRes} ProtoOACashFlowHistoryListRes instance
     */
    ProtoOACashFlowHistoryListRes.create = function create(properties) {
      return new ProtoOACashFlowHistoryListRes(properties);
    };

    /**
     * Encodes the specified ProtoOACashFlowHistoryListRes message. Does not implicitly {@link ProtoOACashFlowHistoryListRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOACashFlowHistoryListRes
     * @static
     * @param {IProtoOACashFlowHistoryListRes} message ProtoOACashFlowHistoryListRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOACashFlowHistoryListRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.depositWithdraw != null && message.depositWithdraw.length)
        for (let i = 0; i < message.depositWithdraw.length; ++i)
          $root.ProtoOADepositWithdraw.encode(
            message.depositWithdraw[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOACashFlowHistoryListRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOACashFlowHistoryListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOACashFlowHistoryListRes} ProtoOACashFlowHistoryListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOACashFlowHistoryListRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOACashFlowHistoryListRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.depositWithdraw && message.depositWithdraw.length))
              message.depositWithdraw = [];
            message.depositWithdraw.push(
              $root.ProtoOADepositWithdraw.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOACashFlowHistoryListRes
     * @function getTypeUrl
     * @memberof ProtoOACashFlowHistoryListRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOACashFlowHistoryListRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOACashFlowHistoryListRes";
    };

    return ProtoOACashFlowHistoryListRes;
  })());

export const ProtoOAGetAccountListByAccessTokenReq =
  ($root.ProtoOAGetAccountListByAccessTokenReq = (() => {
    /**
     * Properties of a ProtoOAGetAccountListByAccessTokenReq.
     * @exports IProtoOAGetAccountListByAccessTokenReq
     * @interface IProtoOAGetAccountListByAccessTokenReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetAccountListByAccessTokenReq payloadType
     * @property {string} accessToken ProtoOAGetAccountListByAccessTokenReq accessToken
     */

    /**
     * Constructs a new ProtoOAGetAccountListByAccessTokenReq.
     * @exports ProtoOAGetAccountListByAccessTokenReq
     * @classdesc Represents a ProtoOAGetAccountListByAccessTokenReq.
     * @implements IProtoOAGetAccountListByAccessTokenReq
     * @constructor
     * @param {IProtoOAGetAccountListByAccessTokenReq=} [properties] Properties to set
     */
    function ProtoOAGetAccountListByAccessTokenReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetAccountListByAccessTokenReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenReq.prototype.payloadType = 2149;

    /**
     * ProtoOAGetAccountListByAccessTokenReq accessToken.
     * @member {string} accessToken
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenReq.prototype.accessToken = "";

    /**
     * Creates a new ProtoOAGetAccountListByAccessTokenReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @static
     * @param {IProtoOAGetAccountListByAccessTokenReq=} [properties] Properties to set
     * @returns {ProtoOAGetAccountListByAccessTokenReq} ProtoOAGetAccountListByAccessTokenReq instance
     */
    ProtoOAGetAccountListByAccessTokenReq.create = function create(properties) {
      return new ProtoOAGetAccountListByAccessTokenReq(properties);
    };

    /**
     * Encodes the specified ProtoOAGetAccountListByAccessTokenReq message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @static
     * @param {IProtoOAGetAccountListByAccessTokenReq} message ProtoOAGetAccountListByAccessTokenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetAccountListByAccessTokenReq.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
      return writer;
    };

    /**
     * Decodes a ProtoOAGetAccountListByAccessTokenReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetAccountListByAccessTokenReq} ProtoOAGetAccountListByAccessTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetAccountListByAccessTokenReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetAccountListByAccessTokenReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.accessToken = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("accessToken"))
        throw $util.ProtocolError("missing required 'accessToken'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetAccountListByAccessTokenReq
     * @function getTypeUrl
     * @memberof ProtoOAGetAccountListByAccessTokenReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetAccountListByAccessTokenReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetAccountListByAccessTokenReq";
    };

    return ProtoOAGetAccountListByAccessTokenReq;
  })());

export const ProtoOAGetAccountListByAccessTokenRes =
  ($root.ProtoOAGetAccountListByAccessTokenRes = (() => {
    /**
     * Properties of a ProtoOAGetAccountListByAccessTokenRes.
     * @exports IProtoOAGetAccountListByAccessTokenRes
     * @interface IProtoOAGetAccountListByAccessTokenRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetAccountListByAccessTokenRes payloadType
     * @property {string} accessToken ProtoOAGetAccountListByAccessTokenRes accessToken
     * @property {ProtoOAClientPermissionScope|null} [permissionScope] ProtoOAGetAccountListByAccessTokenRes permissionScope
     * @property {Array.<IProtoOACtidTraderAccount>|null} [ctidTraderAccount] ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount
     */

    /**
     * Constructs a new ProtoOAGetAccountListByAccessTokenRes.
     * @exports ProtoOAGetAccountListByAccessTokenRes
     * @classdesc Represents a ProtoOAGetAccountListByAccessTokenRes.
     * @implements IProtoOAGetAccountListByAccessTokenRes
     * @constructor
     * @param {IProtoOAGetAccountListByAccessTokenRes=} [properties] Properties to set
     */
    function ProtoOAGetAccountListByAccessTokenRes(properties) {
      this.ctidTraderAccount = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetAccountListByAccessTokenRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenRes.prototype.payloadType = 2150;

    /**
     * ProtoOAGetAccountListByAccessTokenRes accessToken.
     * @member {string} accessToken
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenRes.prototype.accessToken = "";

    /**
     * ProtoOAGetAccountListByAccessTokenRes permissionScope.
     * @member {ProtoOAClientPermissionScope} permissionScope
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenRes.prototype.permissionScope = 0;

    /**
     * ProtoOAGetAccountListByAccessTokenRes ctidTraderAccount.
     * @member {Array.<IProtoOACtidTraderAccount>} ctidTraderAccount
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @instance
     */
    ProtoOAGetAccountListByAccessTokenRes.prototype.ctidTraderAccount =
      $util.emptyArray;

    /**
     * Creates a new ProtoOAGetAccountListByAccessTokenRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @static
     * @param {IProtoOAGetAccountListByAccessTokenRes=} [properties] Properties to set
     * @returns {ProtoOAGetAccountListByAccessTokenRes} ProtoOAGetAccountListByAccessTokenRes instance
     */
    ProtoOAGetAccountListByAccessTokenRes.create = function create(properties) {
      return new ProtoOAGetAccountListByAccessTokenRes(properties);
    };

    /**
     * Encodes the specified ProtoOAGetAccountListByAccessTokenRes message. Does not implicitly {@link ProtoOAGetAccountListByAccessTokenRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @static
     * @param {IProtoOAGetAccountListByAccessTokenRes} message ProtoOAGetAccountListByAccessTokenRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetAccountListByAccessTokenRes.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
      if (
        message.permissionScope != null &&
        Object.hasOwnProperty.call(message, "permissionScope")
      )
        writer
          .uint32(/* id 3, wireType 0 =*/ 24)
          .int32(message.permissionScope);
      if (message.ctidTraderAccount != null && message.ctidTraderAccount.length)
        for (let i = 0; i < message.ctidTraderAccount.length; ++i)
          $root.ProtoOACtidTraderAccount.encode(
            message.ctidTraderAccount[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAGetAccountListByAccessTokenRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetAccountListByAccessTokenRes} ProtoOAGetAccountListByAccessTokenRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetAccountListByAccessTokenRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetAccountListByAccessTokenRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.accessToken = reader.string();
            break;
          }
          case 3: {
            message.permissionScope = reader.int32();
            break;
          }
          case 4: {
            if (
              !(message.ctidTraderAccount && message.ctidTraderAccount.length)
            )
              message.ctidTraderAccount = [];
            message.ctidTraderAccount.push(
              $root.ProtoOACtidTraderAccount.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("accessToken"))
        throw $util.ProtocolError("missing required 'accessToken'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetAccountListByAccessTokenRes
     * @function getTypeUrl
     * @memberof ProtoOAGetAccountListByAccessTokenRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetAccountListByAccessTokenRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetAccountListByAccessTokenRes";
    };

    return ProtoOAGetAccountListByAccessTokenRes;
  })());

export const ProtoOARefreshTokenReq = ($root.ProtoOARefreshTokenReq = (() => {
  /**
   * Properties of a ProtoOARefreshTokenReq.
   * @exports IProtoOARefreshTokenReq
   * @interface IProtoOARefreshTokenReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOARefreshTokenReq payloadType
   * @property {string} refreshToken ProtoOARefreshTokenReq refreshToken
   */

  /**
   * Constructs a new ProtoOARefreshTokenReq.
   * @exports ProtoOARefreshTokenReq
   * @classdesc Represents a ProtoOARefreshTokenReq.
   * @implements IProtoOARefreshTokenReq
   * @constructor
   * @param {IProtoOARefreshTokenReq=} [properties] Properties to set
   */
  function ProtoOARefreshTokenReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOARefreshTokenReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOARefreshTokenReq
   * @instance
   */
  ProtoOARefreshTokenReq.prototype.payloadType = 2173;

  /**
   * ProtoOARefreshTokenReq refreshToken.
   * @member {string} refreshToken
   * @memberof ProtoOARefreshTokenReq
   * @instance
   */
  ProtoOARefreshTokenReq.prototype.refreshToken = "";

  /**
   * Creates a new ProtoOARefreshTokenReq instance using the specified properties.
   * @function create
   * @memberof ProtoOARefreshTokenReq
   * @static
   * @param {IProtoOARefreshTokenReq=} [properties] Properties to set
   * @returns {ProtoOARefreshTokenReq} ProtoOARefreshTokenReq instance
   */
  ProtoOARefreshTokenReq.create = function create(properties) {
    return new ProtoOARefreshTokenReq(properties);
  };

  /**
   * Encodes the specified ProtoOARefreshTokenReq message. Does not implicitly {@link ProtoOARefreshTokenReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOARefreshTokenReq
   * @static
   * @param {IProtoOARefreshTokenReq} message ProtoOARefreshTokenReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOARefreshTokenReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.refreshToken);
    return writer;
  };

  /**
   * Decodes a ProtoOARefreshTokenReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOARefreshTokenReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOARefreshTokenReq} ProtoOARefreshTokenReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOARefreshTokenReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOARefreshTokenReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.refreshToken = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("refreshToken"))
      throw $util.ProtocolError("missing required 'refreshToken'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOARefreshTokenReq
   * @function getTypeUrl
   * @memberof ProtoOARefreshTokenReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOARefreshTokenReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOARefreshTokenReq";
  };

  return ProtoOARefreshTokenReq;
})());

export const ProtoOARefreshTokenRes = ($root.ProtoOARefreshTokenRes = (() => {
  /**
   * Properties of a ProtoOARefreshTokenRes.
   * @exports IProtoOARefreshTokenRes
   * @interface IProtoOARefreshTokenRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOARefreshTokenRes payloadType
   * @property {string} accessToken ProtoOARefreshTokenRes accessToken
   * @property {string} tokenType ProtoOARefreshTokenRes tokenType
   * @property {number} expiresIn ProtoOARefreshTokenRes expiresIn
   * @property {string} refreshToken ProtoOARefreshTokenRes refreshToken
   */

  /**
   * Constructs a new ProtoOARefreshTokenRes.
   * @exports ProtoOARefreshTokenRes
   * @classdesc Represents a ProtoOARefreshTokenRes.
   * @implements IProtoOARefreshTokenRes
   * @constructor
   * @param {IProtoOARefreshTokenRes=} [properties] Properties to set
   */
  function ProtoOARefreshTokenRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOARefreshTokenRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOARefreshTokenRes
   * @instance
   */
  ProtoOARefreshTokenRes.prototype.payloadType = 2174;

  /**
   * ProtoOARefreshTokenRes accessToken.
   * @member {string} accessToken
   * @memberof ProtoOARefreshTokenRes
   * @instance
   */
  ProtoOARefreshTokenRes.prototype.accessToken = "";

  /**
   * ProtoOARefreshTokenRes tokenType.
   * @member {string} tokenType
   * @memberof ProtoOARefreshTokenRes
   * @instance
   */
  ProtoOARefreshTokenRes.prototype.tokenType = "";

  /**
   * ProtoOARefreshTokenRes expiresIn.
   * @member {number} expiresIn
   * @memberof ProtoOARefreshTokenRes
   * @instance
   */
  ProtoOARefreshTokenRes.prototype.expiresIn = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOARefreshTokenRes refreshToken.
   * @member {string} refreshToken
   * @memberof ProtoOARefreshTokenRes
   * @instance
   */
  ProtoOARefreshTokenRes.prototype.refreshToken = "";

  /**
   * Creates a new ProtoOARefreshTokenRes instance using the specified properties.
   * @function create
   * @memberof ProtoOARefreshTokenRes
   * @static
   * @param {IProtoOARefreshTokenRes=} [properties] Properties to set
   * @returns {ProtoOARefreshTokenRes} ProtoOARefreshTokenRes instance
   */
  ProtoOARefreshTokenRes.create = function create(properties) {
    return new ProtoOARefreshTokenRes(properties);
  };

  /**
   * Encodes the specified ProtoOARefreshTokenRes message. Does not implicitly {@link ProtoOARefreshTokenRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOARefreshTokenRes
   * @static
   * @param {IProtoOARefreshTokenRes} message ProtoOARefreshTokenRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOARefreshTokenRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.tokenType);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.expiresIn);
    writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.refreshToken);
    return writer;
  };

  /**
   * Decodes a ProtoOARefreshTokenRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOARefreshTokenRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOARefreshTokenRes} ProtoOARefreshTokenRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOARefreshTokenRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOARefreshTokenRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.accessToken = reader.string();
          break;
        }
        case 3: {
          message.tokenType = reader.string();
          break;
        }
        case 4: {
          message.expiresIn = reader.int64();
          break;
        }
        case 5: {
          message.refreshToken = reader.string();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("accessToken"))
      throw $util.ProtocolError("missing required 'accessToken'", {
        instance: message,
      });
    if (!message.hasOwnProperty("tokenType"))
      throw $util.ProtocolError("missing required 'tokenType'", {
        instance: message,
      });
    if (!message.hasOwnProperty("expiresIn"))
      throw $util.ProtocolError("missing required 'expiresIn'", {
        instance: message,
      });
    if (!message.hasOwnProperty("refreshToken"))
      throw $util.ProtocolError("missing required 'refreshToken'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOARefreshTokenRes
   * @function getTypeUrl
   * @memberof ProtoOARefreshTokenRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOARefreshTokenRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOARefreshTokenRes";
  };

  return ProtoOARefreshTokenRes;
})());

export const ProtoOASubscribeSpotsReq = ($root.ProtoOASubscribeSpotsReq =
  (() => {
    /**
     * Properties of a ProtoOASubscribeSpotsReq.
     * @exports IProtoOASubscribeSpotsReq
     * @interface IProtoOASubscribeSpotsReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeSpotsReq payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeSpotsReq ctidTraderAccountId
     * @property {Array.<number>|null} [symbolId] ProtoOASubscribeSpotsReq symbolId
     * @property {boolean|null} [subscribeToSpotTimestamp] ProtoOASubscribeSpotsReq subscribeToSpotTimestamp
     */

    /**
     * Constructs a new ProtoOASubscribeSpotsReq.
     * @exports ProtoOASubscribeSpotsReq
     * @classdesc Represents a ProtoOASubscribeSpotsReq.
     * @implements IProtoOASubscribeSpotsReq
     * @constructor
     * @param {IProtoOASubscribeSpotsReq=} [properties] Properties to set
     */
    function ProtoOASubscribeSpotsReq(properties) {
      this.symbolId = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeSpotsReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeSpotsReq
     * @instance
     */
    ProtoOASubscribeSpotsReq.prototype.payloadType = 2127;

    /**
     * ProtoOASubscribeSpotsReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeSpotsReq
     * @instance
     */
    ProtoOASubscribeSpotsReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASubscribeSpotsReq symbolId.
     * @member {Array.<number>} symbolId
     * @memberof ProtoOASubscribeSpotsReq
     * @instance
     */
    ProtoOASubscribeSpotsReq.prototype.symbolId = $util.emptyArray;

    /**
     * ProtoOASubscribeSpotsReq subscribeToSpotTimestamp.
     * @member {boolean} subscribeToSpotTimestamp
     * @memberof ProtoOASubscribeSpotsReq
     * @instance
     */
    ProtoOASubscribeSpotsReq.prototype.subscribeToSpotTimestamp = false;

    /**
     * Creates a new ProtoOASubscribeSpotsReq instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeSpotsReq
     * @static
     * @param {IProtoOASubscribeSpotsReq=} [properties] Properties to set
     * @returns {ProtoOASubscribeSpotsReq} ProtoOASubscribeSpotsReq instance
     */
    ProtoOASubscribeSpotsReq.create = function create(properties) {
      return new ProtoOASubscribeSpotsReq(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeSpotsReq message. Does not implicitly {@link ProtoOASubscribeSpotsReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeSpotsReq
     * @static
     * @param {IProtoOASubscribeSpotsReq} message ProtoOASubscribeSpotsReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeSpotsReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolId != null && message.symbolId.length)
        for (let i = 0; i < message.symbolId.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
      if (
        message.subscribeToSpotTimestamp != null &&
        Object.hasOwnProperty.call(message, "subscribeToSpotTimestamp")
      )
        writer
          .uint32(/* id 4, wireType 0 =*/ 32)
          .bool(message.subscribeToSpotTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeSpotsReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeSpotsReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeSpotsReq} ProtoOASubscribeSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeSpotsReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeSpotsReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolId && message.symbolId.length))
              message.symbolId = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.symbolId.push(reader.int64());
            } else message.symbolId.push(reader.int64());
            break;
          }
          case 4: {
            message.subscribeToSpotTimestamp = reader.bool();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeSpotsReq
     * @function getTypeUrl
     * @memberof ProtoOASubscribeSpotsReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeSpotsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeSpotsReq";
    };

    return ProtoOASubscribeSpotsReq;
  })());

export const ProtoOASubscribeSpotsRes = ($root.ProtoOASubscribeSpotsRes =
  (() => {
    /**
     * Properties of a ProtoOASubscribeSpotsRes.
     * @exports IProtoOASubscribeSpotsRes
     * @interface IProtoOASubscribeSpotsRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeSpotsRes payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeSpotsRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOASubscribeSpotsRes.
     * @exports ProtoOASubscribeSpotsRes
     * @classdesc Represents a ProtoOASubscribeSpotsRes.
     * @implements IProtoOASubscribeSpotsRes
     * @constructor
     * @param {IProtoOASubscribeSpotsRes=} [properties] Properties to set
     */
    function ProtoOASubscribeSpotsRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeSpotsRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeSpotsRes
     * @instance
     */
    ProtoOASubscribeSpotsRes.prototype.payloadType = 2128;

    /**
     * ProtoOASubscribeSpotsRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeSpotsRes
     * @instance
     */
    ProtoOASubscribeSpotsRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASubscribeSpotsRes instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeSpotsRes
     * @static
     * @param {IProtoOASubscribeSpotsRes=} [properties] Properties to set
     * @returns {ProtoOASubscribeSpotsRes} ProtoOASubscribeSpotsRes instance
     */
    ProtoOASubscribeSpotsRes.create = function create(properties) {
      return new ProtoOASubscribeSpotsRes(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeSpotsRes message. Does not implicitly {@link ProtoOASubscribeSpotsRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeSpotsRes
     * @static
     * @param {IProtoOASubscribeSpotsRes} message ProtoOASubscribeSpotsRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeSpotsRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeSpotsRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeSpotsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeSpotsRes} ProtoOASubscribeSpotsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeSpotsRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeSpotsRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeSpotsRes
     * @function getTypeUrl
     * @memberof ProtoOASubscribeSpotsRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeSpotsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeSpotsRes";
    };

    return ProtoOASubscribeSpotsRes;
  })());

export const ProtoOAUnsubscribeSpotsReq = ($root.ProtoOAUnsubscribeSpotsReq =
  (() => {
    /**
     * Properties of a ProtoOAUnsubscribeSpotsReq.
     * @exports IProtoOAUnsubscribeSpotsReq
     * @interface IProtoOAUnsubscribeSpotsReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeSpotsReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeSpotsReq ctidTraderAccountId
     * @property {Array.<number>|null} [symbolId] ProtoOAUnsubscribeSpotsReq symbolId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeSpotsReq.
     * @exports ProtoOAUnsubscribeSpotsReq
     * @classdesc Represents a ProtoOAUnsubscribeSpotsReq.
     * @implements IProtoOAUnsubscribeSpotsReq
     * @constructor
     * @param {IProtoOAUnsubscribeSpotsReq=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeSpotsReq(properties) {
      this.symbolId = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeSpotsReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @instance
     */
    ProtoOAUnsubscribeSpotsReq.prototype.payloadType = 2129;

    /**
     * ProtoOAUnsubscribeSpotsReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @instance
     */
    ProtoOAUnsubscribeSpotsReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAUnsubscribeSpotsReq symbolId.
     * @member {Array.<number>} symbolId
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @instance
     */
    ProtoOAUnsubscribeSpotsReq.prototype.symbolId = $util.emptyArray;

    /**
     * Creates a new ProtoOAUnsubscribeSpotsReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @static
     * @param {IProtoOAUnsubscribeSpotsReq=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeSpotsReq} ProtoOAUnsubscribeSpotsReq instance
     */
    ProtoOAUnsubscribeSpotsReq.create = function create(properties) {
      return new ProtoOAUnsubscribeSpotsReq(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeSpotsReq message. Does not implicitly {@link ProtoOAUnsubscribeSpotsReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @static
     * @param {IProtoOAUnsubscribeSpotsReq} message ProtoOAUnsubscribeSpotsReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeSpotsReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolId != null && message.symbolId.length)
        for (let i = 0; i < message.symbolId.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeSpotsReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeSpotsReq} ProtoOAUnsubscribeSpotsReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeSpotsReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeSpotsReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolId && message.symbolId.length))
              message.symbolId = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.symbolId.push(reader.int64());
            } else message.symbolId.push(reader.int64());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeSpotsReq
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeSpotsReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeSpotsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeSpotsReq";
    };

    return ProtoOAUnsubscribeSpotsReq;
  })());

export const ProtoOAUnsubscribeSpotsRes = ($root.ProtoOAUnsubscribeSpotsRes =
  (() => {
    /**
     * Properties of a ProtoOAUnsubscribeSpotsRes.
     * @exports IProtoOAUnsubscribeSpotsRes
     * @interface IProtoOAUnsubscribeSpotsRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeSpotsRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeSpotsRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeSpotsRes.
     * @exports ProtoOAUnsubscribeSpotsRes
     * @classdesc Represents a ProtoOAUnsubscribeSpotsRes.
     * @implements IProtoOAUnsubscribeSpotsRes
     * @constructor
     * @param {IProtoOAUnsubscribeSpotsRes=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeSpotsRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeSpotsRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @instance
     */
    ProtoOAUnsubscribeSpotsRes.prototype.payloadType = 2130;

    /**
     * ProtoOAUnsubscribeSpotsRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @instance
     */
    ProtoOAUnsubscribeSpotsRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAUnsubscribeSpotsRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @static
     * @param {IProtoOAUnsubscribeSpotsRes=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeSpotsRes} ProtoOAUnsubscribeSpotsRes instance
     */
    ProtoOAUnsubscribeSpotsRes.create = function create(properties) {
      return new ProtoOAUnsubscribeSpotsRes(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeSpotsRes message. Does not implicitly {@link ProtoOAUnsubscribeSpotsRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @static
     * @param {IProtoOAUnsubscribeSpotsRes} message ProtoOAUnsubscribeSpotsRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeSpotsRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeSpotsRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeSpotsRes} ProtoOAUnsubscribeSpotsRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeSpotsRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeSpotsRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeSpotsRes
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeSpotsRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeSpotsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeSpotsRes";
    };

    return ProtoOAUnsubscribeSpotsRes;
  })());

export const ProtoOASpotEvent = ($root.ProtoOASpotEvent = (() => {
  /**
   * Properties of a ProtoOASpotEvent.
   * @exports IProtoOASpotEvent
   * @interface IProtoOASpotEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASpotEvent payloadType
   * @property {number} ctidTraderAccountId ProtoOASpotEvent ctidTraderAccountId
   * @property {number} symbolId ProtoOASpotEvent symbolId
   * @property {number|null} [bid] ProtoOASpotEvent bid
   * @property {number|null} [ask] ProtoOASpotEvent ask
   * @property {Array.<IProtoOATrendbar>|null} [trendbar] ProtoOASpotEvent trendbar
   * @property {number|null} [sessionClose] ProtoOASpotEvent sessionClose
   * @property {number|null} [timestamp] ProtoOASpotEvent timestamp
   */

  /**
   * Constructs a new ProtoOASpotEvent.
   * @exports ProtoOASpotEvent
   * @classdesc Represents a ProtoOASpotEvent.
   * @implements IProtoOASpotEvent
   * @constructor
   * @param {IProtoOASpotEvent=} [properties] Properties to set
   */
  function ProtoOASpotEvent(properties) {
    this.trendbar = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOASpotEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.payloadType = 2131;

  /**
   * ProtoOASpotEvent ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASpotEvent symbolId.
   * @member {number} symbolId
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOASpotEvent bid.
   * @member {number} bid
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.bid = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASpotEvent ask.
   * @member {number} ask
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.ask = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASpotEvent trendbar.
   * @member {Array.<IProtoOATrendbar>} trendbar
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.trendbar = $util.emptyArray;

  /**
   * ProtoOASpotEvent sessionClose.
   * @member {number} sessionClose
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.sessionClose = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOASpotEvent timestamp.
   * @member {number} timestamp
   * @memberof ProtoOASpotEvent
   * @instance
   */
  ProtoOASpotEvent.prototype.timestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOASpotEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOASpotEvent
   * @static
   * @param {IProtoOASpotEvent=} [properties] Properties to set
   * @returns {ProtoOASpotEvent} ProtoOASpotEvent instance
   */
  ProtoOASpotEvent.create = function create(properties) {
    return new ProtoOASpotEvent(properties);
  };

  /**
   * Encodes the specified ProtoOASpotEvent message. Does not implicitly {@link ProtoOASpotEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOASpotEvent
   * @static
   * @param {IProtoOASpotEvent} message ProtoOASpotEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOASpotEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    if (message.bid != null && Object.hasOwnProperty.call(message, "bid"))
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.bid);
    if (message.ask != null && Object.hasOwnProperty.call(message, "ask"))
      writer.uint32(/* id 5, wireType 0 =*/ 40).uint64(message.ask);
    if (message.trendbar != null && message.trendbar.length)
      for (let i = 0; i < message.trendbar.length; ++i)
        $root.ProtoOATrendbar.encode(
          message.trendbar[i],
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork(),
        ).ldelim();
    if (
      message.sessionClose != null &&
      Object.hasOwnProperty.call(message, "sessionClose")
    )
      writer.uint32(/* id 7, wireType 0 =*/ 56).uint64(message.sessionClose);
    if (
      message.timestamp != null &&
      Object.hasOwnProperty.call(message, "timestamp")
    )
      writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.timestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOASpotEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOASpotEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOASpotEvent} ProtoOASpotEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOASpotEvent.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOASpotEvent();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.symbolId = reader.int64();
          break;
        }
        case 4: {
          message.bid = reader.uint64();
          break;
        }
        case 5: {
          message.ask = reader.uint64();
          break;
        }
        case 6: {
          if (!(message.trendbar && message.trendbar.length))
            message.trendbar = [];
          message.trendbar.push(
            $root.ProtoOATrendbar.decode(reader, reader.uint32()),
          );
          break;
        }
        case 7: {
          message.sessionClose = reader.uint64();
          break;
        }
        case 8: {
          message.timestamp = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOASpotEvent
   * @function getTypeUrl
   * @memberof ProtoOASpotEvent
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOASpotEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOASpotEvent";
  };

  return ProtoOASpotEvent;
})());

export const ProtoOASubscribeLiveTrendbarReq =
  ($root.ProtoOASubscribeLiveTrendbarReq = (() => {
    /**
     * Properties of a ProtoOASubscribeLiveTrendbarReq.
     * @exports IProtoOASubscribeLiveTrendbarReq
     * @interface IProtoOASubscribeLiveTrendbarReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeLiveTrendbarReq payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId
     * @property {ProtoOATrendbarPeriod} period ProtoOASubscribeLiveTrendbarReq period
     * @property {number} symbolId ProtoOASubscribeLiveTrendbarReq symbolId
     */

    /**
     * Constructs a new ProtoOASubscribeLiveTrendbarReq.
     * @exports ProtoOASubscribeLiveTrendbarReq
     * @classdesc Represents a ProtoOASubscribeLiveTrendbarReq.
     * @implements IProtoOASubscribeLiveTrendbarReq
     * @constructor
     * @param {IProtoOASubscribeLiveTrendbarReq=} [properties] Properties to set
     */
    function ProtoOASubscribeLiveTrendbarReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeLiveTrendbarReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOASubscribeLiveTrendbarReq.prototype.payloadType = 2135;

    /**
     * ProtoOASubscribeLiveTrendbarReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOASubscribeLiveTrendbarReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASubscribeLiveTrendbarReq period.
     * @member {ProtoOATrendbarPeriod} period
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOASubscribeLiveTrendbarReq.prototype.period = 1;

    /**
     * ProtoOASubscribeLiveTrendbarReq symbolId.
     * @member {number} symbolId
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOASubscribeLiveTrendbarReq.prototype.symbolId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASubscribeLiveTrendbarReq instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @static
     * @param {IProtoOASubscribeLiveTrendbarReq=} [properties] Properties to set
     * @returns {ProtoOASubscribeLiveTrendbarReq} ProtoOASubscribeLiveTrendbarReq instance
     */
    ProtoOASubscribeLiveTrendbarReq.create = function create(properties) {
      return new ProtoOASubscribeLiveTrendbarReq(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @static
     * @param {IProtoOASubscribeLiveTrendbarReq} message ProtoOASubscribeLiveTrendbarReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeLiveTrendbarReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.symbolId);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeLiveTrendbarReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeLiveTrendbarReq} ProtoOASubscribeLiveTrendbarReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeLiveTrendbarReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeLiveTrendbarReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.period = reader.int32();
            break;
          }
          case 4: {
            message.symbolId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("period"))
        throw $util.ProtocolError("missing required 'period'", {
          instance: message,
        });
      if (!message.hasOwnProperty("symbolId"))
        throw $util.ProtocolError("missing required 'symbolId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeLiveTrendbarReq
     * @function getTypeUrl
     * @memberof ProtoOASubscribeLiveTrendbarReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeLiveTrendbarReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeLiveTrendbarReq";
    };

    return ProtoOASubscribeLiveTrendbarReq;
  })());

export const ProtoOASubscribeLiveTrendbarRes =
  ($root.ProtoOASubscribeLiveTrendbarRes = (() => {
    /**
     * Properties of a ProtoOASubscribeLiveTrendbarRes.
     * @exports IProtoOASubscribeLiveTrendbarRes
     * @interface IProtoOASubscribeLiveTrendbarRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeLiveTrendbarRes payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeLiveTrendbarRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOASubscribeLiveTrendbarRes.
     * @exports ProtoOASubscribeLiveTrendbarRes
     * @classdesc Represents a ProtoOASubscribeLiveTrendbarRes.
     * @implements IProtoOASubscribeLiveTrendbarRes
     * @constructor
     * @param {IProtoOASubscribeLiveTrendbarRes=} [properties] Properties to set
     */
    function ProtoOASubscribeLiveTrendbarRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeLiveTrendbarRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @instance
     */
    ProtoOASubscribeLiveTrendbarRes.prototype.payloadType = 2165;

    /**
     * ProtoOASubscribeLiveTrendbarRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @instance
     */
    ProtoOASubscribeLiveTrendbarRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASubscribeLiveTrendbarRes instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @static
     * @param {IProtoOASubscribeLiveTrendbarRes=} [properties] Properties to set
     * @returns {ProtoOASubscribeLiveTrendbarRes} ProtoOASubscribeLiveTrendbarRes instance
     */
    ProtoOASubscribeLiveTrendbarRes.create = function create(properties) {
      return new ProtoOASubscribeLiveTrendbarRes(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeLiveTrendbarRes message. Does not implicitly {@link ProtoOASubscribeLiveTrendbarRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @static
     * @param {IProtoOASubscribeLiveTrendbarRes} message ProtoOASubscribeLiveTrendbarRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeLiveTrendbarRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeLiveTrendbarRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeLiveTrendbarRes} ProtoOASubscribeLiveTrendbarRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeLiveTrendbarRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeLiveTrendbarRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeLiveTrendbarRes
     * @function getTypeUrl
     * @memberof ProtoOASubscribeLiveTrendbarRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeLiveTrendbarRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeLiveTrendbarRes";
    };

    return ProtoOASubscribeLiveTrendbarRes;
  })());

export const ProtoOAUnsubscribeLiveTrendbarReq =
  ($root.ProtoOAUnsubscribeLiveTrendbarReq = (() => {
    /**
     * Properties of a ProtoOAUnsubscribeLiveTrendbarReq.
     * @exports IProtoOAUnsubscribeLiveTrendbarReq
     * @interface IProtoOAUnsubscribeLiveTrendbarReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeLiveTrendbarReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId
     * @property {ProtoOATrendbarPeriod} period ProtoOAUnsubscribeLiveTrendbarReq period
     * @property {number} symbolId ProtoOAUnsubscribeLiveTrendbarReq symbolId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeLiveTrendbarReq.
     * @exports ProtoOAUnsubscribeLiveTrendbarReq
     * @classdesc Represents a ProtoOAUnsubscribeLiveTrendbarReq.
     * @implements IProtoOAUnsubscribeLiveTrendbarReq
     * @constructor
     * @param {IProtoOAUnsubscribeLiveTrendbarReq=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeLiveTrendbarReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeLiveTrendbarReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarReq.prototype.payloadType = 2136;

    /**
     * ProtoOAUnsubscribeLiveTrendbarReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAUnsubscribeLiveTrendbarReq period.
     * @member {ProtoOATrendbarPeriod} period
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarReq.prototype.period = 1;

    /**
     * ProtoOAUnsubscribeLiveTrendbarReq symbolId.
     * @member {number} symbolId
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarReq.prototype.symbolId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAUnsubscribeLiveTrendbarReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @static
     * @param {IProtoOAUnsubscribeLiveTrendbarReq=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeLiveTrendbarReq} ProtoOAUnsubscribeLiveTrendbarReq instance
     */
    ProtoOAUnsubscribeLiveTrendbarReq.create = function create(properties) {
      return new ProtoOAUnsubscribeLiveTrendbarReq(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeLiveTrendbarReq message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @static
     * @param {IProtoOAUnsubscribeLiveTrendbarReq} message ProtoOAUnsubscribeLiveTrendbarReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeLiveTrendbarReq.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.symbolId);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeLiveTrendbarReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeLiveTrendbarReq} ProtoOAUnsubscribeLiveTrendbarReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeLiveTrendbarReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeLiveTrendbarReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.period = reader.int32();
            break;
          }
          case 4: {
            message.symbolId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("period"))
        throw $util.ProtocolError("missing required 'period'", {
          instance: message,
        });
      if (!message.hasOwnProperty("symbolId"))
        throw $util.ProtocolError("missing required 'symbolId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeLiveTrendbarReq
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeLiveTrendbarReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeLiveTrendbarReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeLiveTrendbarReq";
    };

    return ProtoOAUnsubscribeLiveTrendbarReq;
  })());

export const ProtoOAUnsubscribeLiveTrendbarRes =
  ($root.ProtoOAUnsubscribeLiveTrendbarRes = (() => {
    /**
     * Properties of a ProtoOAUnsubscribeLiveTrendbarRes.
     * @exports IProtoOAUnsubscribeLiveTrendbarRes
     * @interface IProtoOAUnsubscribeLiveTrendbarRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeLiveTrendbarRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeLiveTrendbarRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeLiveTrendbarRes.
     * @exports ProtoOAUnsubscribeLiveTrendbarRes
     * @classdesc Represents a ProtoOAUnsubscribeLiveTrendbarRes.
     * @implements IProtoOAUnsubscribeLiveTrendbarRes
     * @constructor
     * @param {IProtoOAUnsubscribeLiveTrendbarRes=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeLiveTrendbarRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeLiveTrendbarRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarRes.prototype.payloadType = 2166;

    /**
     * ProtoOAUnsubscribeLiveTrendbarRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @instance
     */
    ProtoOAUnsubscribeLiveTrendbarRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAUnsubscribeLiveTrendbarRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @static
     * @param {IProtoOAUnsubscribeLiveTrendbarRes=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeLiveTrendbarRes} ProtoOAUnsubscribeLiveTrendbarRes instance
     */
    ProtoOAUnsubscribeLiveTrendbarRes.create = function create(properties) {
      return new ProtoOAUnsubscribeLiveTrendbarRes(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeLiveTrendbarRes message. Does not implicitly {@link ProtoOAUnsubscribeLiveTrendbarRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @static
     * @param {IProtoOAUnsubscribeLiveTrendbarRes} message ProtoOAUnsubscribeLiveTrendbarRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeLiveTrendbarRes.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeLiveTrendbarRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeLiveTrendbarRes} ProtoOAUnsubscribeLiveTrendbarRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeLiveTrendbarRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeLiveTrendbarRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeLiveTrendbarRes
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeLiveTrendbarRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeLiveTrendbarRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeLiveTrendbarRes";
    };

    return ProtoOAUnsubscribeLiveTrendbarRes;
  })());

export const ProtoOAGetTrendbarsReq = ($root.ProtoOAGetTrendbarsReq = (() => {
  /**
   * Properties of a ProtoOAGetTrendbarsReq.
   * @exports IProtoOAGetTrendbarsReq
   * @interface IProtoOAGetTrendbarsReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTrendbarsReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAGetTrendbarsReq ctidTraderAccountId
   * @property {number} fromTimestamp ProtoOAGetTrendbarsReq fromTimestamp
   * @property {number} toTimestamp ProtoOAGetTrendbarsReq toTimestamp
   * @property {ProtoOATrendbarPeriod} period ProtoOAGetTrendbarsReq period
   * @property {number} symbolId ProtoOAGetTrendbarsReq symbolId
   * @property {number|null} [count] ProtoOAGetTrendbarsReq count
   */

  /**
   * Constructs a new ProtoOAGetTrendbarsReq.
   * @exports ProtoOAGetTrendbarsReq
   * @classdesc Represents a ProtoOAGetTrendbarsReq.
   * @implements IProtoOAGetTrendbarsReq
   * @constructor
   * @param {IProtoOAGetTrendbarsReq=} [properties] Properties to set
   */
  function ProtoOAGetTrendbarsReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTrendbarsReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.payloadType = 2137;

  /**
   * ProtoOAGetTrendbarsReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq fromTimestamp.
   * @member {number} fromTimestamp
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq toTimestamp.
   * @member {number} toTimestamp
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.period = 1;

  /**
   * ProtoOAGetTrendbarsReq symbolId.
   * @member {number} symbolId
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsReq count.
   * @member {number} count
   * @memberof ProtoOAGetTrendbarsReq
   * @instance
   */
  ProtoOAGetTrendbarsReq.prototype.count = 0;

  /**
   * Creates a new ProtoOAGetTrendbarsReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {IProtoOAGetTrendbarsReq=} [properties] Properties to set
   * @returns {ProtoOAGetTrendbarsReq} ProtoOAGetTrendbarsReq instance
   */
  ProtoOAGetTrendbarsReq.create = function create(properties) {
    return new ProtoOAGetTrendbarsReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTrendbarsReq message. Does not implicitly {@link ProtoOAGetTrendbarsReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {IProtoOAGetTrendbarsReq} message ProtoOAGetTrendbarsReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTrendbarsReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.fromTimestamp);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.toTimestamp);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.period);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    if (message.count != null && Object.hasOwnProperty.call(message, "count"))
      writer.uint32(/* id 7, wireType 0 =*/ 56).uint32(message.count);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTrendbarsReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTrendbarsReq} ProtoOAGetTrendbarsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTrendbarsReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTrendbarsReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.fromTimestamp = reader.int64();
          break;
        }
        case 4: {
          message.toTimestamp = reader.int64();
          break;
        }
        case 5: {
          message.period = reader.int32();
          break;
        }
        case 6: {
          message.symbolId = reader.int64();
          break;
        }
        case 7: {
          message.count = reader.uint32();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAGetTrendbarsReq
   * @function getTypeUrl
   * @memberof ProtoOAGetTrendbarsReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAGetTrendbarsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAGetTrendbarsReq";
  };

  return ProtoOAGetTrendbarsReq;
})());

export const ProtoOAGetTrendbarsRes = ($root.ProtoOAGetTrendbarsRes = (() => {
  /**
   * Properties of a ProtoOAGetTrendbarsRes.
   * @exports IProtoOAGetTrendbarsRes
   * @interface IProtoOAGetTrendbarsRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTrendbarsRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAGetTrendbarsRes ctidTraderAccountId
   * @property {ProtoOATrendbarPeriod} period ProtoOAGetTrendbarsRes period
   * @property {number} timestamp ProtoOAGetTrendbarsRes timestamp
   * @property {Array.<IProtoOATrendbar>|null} [trendbar] ProtoOAGetTrendbarsRes trendbar
   * @property {number|null} [symbolId] ProtoOAGetTrendbarsRes symbolId
   */

  /**
   * Constructs a new ProtoOAGetTrendbarsRes.
   * @exports ProtoOAGetTrendbarsRes
   * @classdesc Represents a ProtoOAGetTrendbarsRes.
   * @implements IProtoOAGetTrendbarsRes
   * @constructor
   * @param {IProtoOAGetTrendbarsRes=} [properties] Properties to set
   */
  function ProtoOAGetTrendbarsRes(properties) {
    this.trendbar = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTrendbarsRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.payloadType = 2138;

  /**
   * ProtoOAGetTrendbarsRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsRes period.
   * @member {ProtoOATrendbarPeriod} period
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.period = 1;

  /**
   * ProtoOAGetTrendbarsRes timestamp.
   * @member {number} timestamp
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.timestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTrendbarsRes trendbar.
   * @member {Array.<IProtoOATrendbar>} trendbar
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.trendbar = $util.emptyArray;

  /**
   * ProtoOAGetTrendbarsRes symbolId.
   * @member {number} symbolId
   * @memberof ProtoOAGetTrendbarsRes
   * @instance
   */
  ProtoOAGetTrendbarsRes.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAGetTrendbarsRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {IProtoOAGetTrendbarsRes=} [properties] Properties to set
   * @returns {ProtoOAGetTrendbarsRes} ProtoOAGetTrendbarsRes instance
   */
  ProtoOAGetTrendbarsRes.create = function create(properties) {
    return new ProtoOAGetTrendbarsRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTrendbarsRes message. Does not implicitly {@link ProtoOAGetTrendbarsRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {IProtoOAGetTrendbarsRes} message ProtoOAGetTrendbarsRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTrendbarsRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.period);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.timestamp);
    if (message.trendbar != null && message.trendbar.length)
      for (let i = 0; i < message.trendbar.length; ++i)
        $root.ProtoOATrendbar.encode(
          message.trendbar[i],
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork(),
        ).ldelim();
    if (
      message.symbolId != null &&
      Object.hasOwnProperty.call(message, "symbolId")
    )
      writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.symbolId);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTrendbarsRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTrendbarsRes} ProtoOAGetTrendbarsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTrendbarsRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTrendbarsRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.period = reader.int32();
          break;
        }
        case 4: {
          message.timestamp = reader.int64();
          break;
        }
        case 5: {
          if (!(message.trendbar && message.trendbar.length))
            message.trendbar = [];
          message.trendbar.push(
            $root.ProtoOATrendbar.decode(reader, reader.uint32()),
          );
          break;
        }
        case 6: {
          message.symbolId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("period"))
      throw $util.ProtocolError("missing required 'period'", {
        instance: message,
      });
    if (!message.hasOwnProperty("timestamp"))
      throw $util.ProtocolError("missing required 'timestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAGetTrendbarsRes
   * @function getTypeUrl
   * @memberof ProtoOAGetTrendbarsRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAGetTrendbarsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAGetTrendbarsRes";
  };

  return ProtoOAGetTrendbarsRes;
})());

export const ProtoOAGetTickDataReq = ($root.ProtoOAGetTickDataReq = (() => {
  /**
   * Properties of a ProtoOAGetTickDataReq.
   * @exports IProtoOAGetTickDataReq
   * @interface IProtoOAGetTickDataReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTickDataReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAGetTickDataReq ctidTraderAccountId
   * @property {number} symbolId ProtoOAGetTickDataReq symbolId
   * @property {ProtoOAQuoteType} type ProtoOAGetTickDataReq type
   * @property {number} fromTimestamp ProtoOAGetTickDataReq fromTimestamp
   * @property {number} toTimestamp ProtoOAGetTickDataReq toTimestamp
   */

  /**
   * Constructs a new ProtoOAGetTickDataReq.
   * @exports ProtoOAGetTickDataReq
   * @classdesc Represents a ProtoOAGetTickDataReq.
   * @implements IProtoOAGetTickDataReq
   * @constructor
   * @param {IProtoOAGetTickDataReq=} [properties] Properties to set
   */
  function ProtoOAGetTickDataReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTickDataReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.payloadType = 2145;

  /**
   * ProtoOAGetTickDataReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq symbolId.
   * @member {number} symbolId
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq type.
   * @member {ProtoOAQuoteType} type
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.type = 1;

  /**
   * ProtoOAGetTickDataReq fromTimestamp.
   * @member {number} fromTimestamp
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.fromTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataReq toTimestamp.
   * @member {number} toTimestamp
   * @memberof ProtoOAGetTickDataReq
   * @instance
   */
  ProtoOAGetTickDataReq.prototype.toTimestamp = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAGetTickDataReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {IProtoOAGetTickDataReq=} [properties] Properties to set
   * @returns {ProtoOAGetTickDataReq} ProtoOAGetTickDataReq instance
   */
  ProtoOAGetTickDataReq.create = function create(properties) {
    return new ProtoOAGetTickDataReq(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTickDataReq message. Does not implicitly {@link ProtoOAGetTickDataReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {IProtoOAGetTickDataReq} message ProtoOAGetTickDataReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTickDataReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId);
    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.type);
    writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.fromTimestamp);
    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.toTimestamp);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTickDataReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTickDataReq} ProtoOAGetTickDataReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTickDataReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTickDataReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.symbolId = reader.int64();
          break;
        }
        case 4: {
          message.type = reader.int32();
          break;
        }
        case 5: {
          message.fromTimestamp = reader.int64();
          break;
        }
        case 6: {
          message.toTimestamp = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("type"))
      throw $util.ProtocolError("missing required 'type'", {
        instance: message,
      });
    if (!message.hasOwnProperty("fromTimestamp"))
      throw $util.ProtocolError("missing required 'fromTimestamp'", {
        instance: message,
      });
    if (!message.hasOwnProperty("toTimestamp"))
      throw $util.ProtocolError("missing required 'toTimestamp'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAGetTickDataReq
   * @function getTypeUrl
   * @memberof ProtoOAGetTickDataReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAGetTickDataReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAGetTickDataReq";
  };

  return ProtoOAGetTickDataReq;
})());

export const ProtoOAGetTickDataRes = ($root.ProtoOAGetTickDataRes = (() => {
  /**
   * Properties of a ProtoOAGetTickDataRes.
   * @exports IProtoOAGetTickDataRes
   * @interface IProtoOAGetTickDataRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetTickDataRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAGetTickDataRes ctidTraderAccountId
   * @property {Array.<IProtoOATickData>|null} [tickData] ProtoOAGetTickDataRes tickData
   * @property {boolean} hasMore ProtoOAGetTickDataRes hasMore
   */

  /**
   * Constructs a new ProtoOAGetTickDataRes.
   * @exports ProtoOAGetTickDataRes
   * @classdesc Represents a ProtoOAGetTickDataRes.
   * @implements IProtoOAGetTickDataRes
   * @constructor
   * @param {IProtoOAGetTickDataRes=} [properties] Properties to set
   */
  function ProtoOAGetTickDataRes(properties) {
    this.tickData = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAGetTickDataRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.payloadType = 2146;

  /**
   * ProtoOAGetTickDataRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAGetTickDataRes tickData.
   * @member {Array.<IProtoOATickData>} tickData
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.tickData = $util.emptyArray;

  /**
   * ProtoOAGetTickDataRes hasMore.
   * @member {boolean} hasMore
   * @memberof ProtoOAGetTickDataRes
   * @instance
   */
  ProtoOAGetTickDataRes.prototype.hasMore = false;

  /**
   * Creates a new ProtoOAGetTickDataRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {IProtoOAGetTickDataRes=} [properties] Properties to set
   * @returns {ProtoOAGetTickDataRes} ProtoOAGetTickDataRes instance
   */
  ProtoOAGetTickDataRes.create = function create(properties) {
    return new ProtoOAGetTickDataRes(properties);
  };

  /**
   * Encodes the specified ProtoOAGetTickDataRes message. Does not implicitly {@link ProtoOAGetTickDataRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {IProtoOAGetTickDataRes} message ProtoOAGetTickDataRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAGetTickDataRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    if (message.tickData != null && message.tickData.length)
      for (let i = 0; i < message.tickData.length; ++i)
        $root.ProtoOATickData.encode(
          message.tickData[i],
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
        ).ldelim();
    writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
    return writer;
  };

  /**
   * Decodes a ProtoOAGetTickDataRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAGetTickDataRes} ProtoOAGetTickDataRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAGetTickDataRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAGetTickDataRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          if (!(message.tickData && message.tickData.length))
            message.tickData = [];
          message.tickData.push(
            $root.ProtoOATickData.decode(reader, reader.uint32()),
          );
          break;
        }
        case 4: {
          message.hasMore = reader.bool();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("hasMore"))
      throw $util.ProtocolError("missing required 'hasMore'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAGetTickDataRes
   * @function getTypeUrl
   * @memberof ProtoOAGetTickDataRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAGetTickDataRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAGetTickDataRes";
  };

  return ProtoOAGetTickDataRes;
})());

export const ProtoOAGetCtidProfileByTokenReq =
  ($root.ProtoOAGetCtidProfileByTokenReq = (() => {
    /**
     * Properties of a ProtoOAGetCtidProfileByTokenReq.
     * @exports IProtoOAGetCtidProfileByTokenReq
     * @interface IProtoOAGetCtidProfileByTokenReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetCtidProfileByTokenReq payloadType
     * @property {string} accessToken ProtoOAGetCtidProfileByTokenReq accessToken
     */

    /**
     * Constructs a new ProtoOAGetCtidProfileByTokenReq.
     * @exports ProtoOAGetCtidProfileByTokenReq
     * @classdesc Represents a ProtoOAGetCtidProfileByTokenReq.
     * @implements IProtoOAGetCtidProfileByTokenReq
     * @constructor
     * @param {IProtoOAGetCtidProfileByTokenReq=} [properties] Properties to set
     */
    function ProtoOAGetCtidProfileByTokenReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetCtidProfileByTokenReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @instance
     */
    ProtoOAGetCtidProfileByTokenReq.prototype.payloadType = 2151;

    /**
     * ProtoOAGetCtidProfileByTokenReq accessToken.
     * @member {string} accessToken
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @instance
     */
    ProtoOAGetCtidProfileByTokenReq.prototype.accessToken = "";

    /**
     * Creates a new ProtoOAGetCtidProfileByTokenReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @static
     * @param {IProtoOAGetCtidProfileByTokenReq=} [properties] Properties to set
     * @returns {ProtoOAGetCtidProfileByTokenReq} ProtoOAGetCtidProfileByTokenReq instance
     */
    ProtoOAGetCtidProfileByTokenReq.create = function create(properties) {
      return new ProtoOAGetCtidProfileByTokenReq(properties);
    };

    /**
     * Encodes the specified ProtoOAGetCtidProfileByTokenReq message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @static
     * @param {IProtoOAGetCtidProfileByTokenReq} message ProtoOAGetCtidProfileByTokenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetCtidProfileByTokenReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.accessToken);
      return writer;
    };

    /**
     * Decodes a ProtoOAGetCtidProfileByTokenReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetCtidProfileByTokenReq} ProtoOAGetCtidProfileByTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetCtidProfileByTokenReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetCtidProfileByTokenReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.accessToken = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("accessToken"))
        throw $util.ProtocolError("missing required 'accessToken'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetCtidProfileByTokenReq
     * @function getTypeUrl
     * @memberof ProtoOAGetCtidProfileByTokenReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetCtidProfileByTokenReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetCtidProfileByTokenReq";
    };

    return ProtoOAGetCtidProfileByTokenReq;
  })());

export const ProtoOAGetCtidProfileByTokenRes =
  ($root.ProtoOAGetCtidProfileByTokenRes = (() => {
    /**
     * Properties of a ProtoOAGetCtidProfileByTokenRes.
     * @exports IProtoOAGetCtidProfileByTokenRes
     * @interface IProtoOAGetCtidProfileByTokenRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetCtidProfileByTokenRes payloadType
     * @property {IProtoOACtidProfile} profile ProtoOAGetCtidProfileByTokenRes profile
     */

    /**
     * Constructs a new ProtoOAGetCtidProfileByTokenRes.
     * @exports ProtoOAGetCtidProfileByTokenRes
     * @classdesc Represents a ProtoOAGetCtidProfileByTokenRes.
     * @implements IProtoOAGetCtidProfileByTokenRes
     * @constructor
     * @param {IProtoOAGetCtidProfileByTokenRes=} [properties] Properties to set
     */
    function ProtoOAGetCtidProfileByTokenRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetCtidProfileByTokenRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @instance
     */
    ProtoOAGetCtidProfileByTokenRes.prototype.payloadType = 2152;

    /**
     * ProtoOAGetCtidProfileByTokenRes profile.
     * @member {IProtoOACtidProfile} profile
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @instance
     */
    ProtoOAGetCtidProfileByTokenRes.prototype.profile = null;

    /**
     * Creates a new ProtoOAGetCtidProfileByTokenRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @static
     * @param {IProtoOAGetCtidProfileByTokenRes=} [properties] Properties to set
     * @returns {ProtoOAGetCtidProfileByTokenRes} ProtoOAGetCtidProfileByTokenRes instance
     */
    ProtoOAGetCtidProfileByTokenRes.create = function create(properties) {
      return new ProtoOAGetCtidProfileByTokenRes(properties);
    };

    /**
     * Encodes the specified ProtoOAGetCtidProfileByTokenRes message. Does not implicitly {@link ProtoOAGetCtidProfileByTokenRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @static
     * @param {IProtoOAGetCtidProfileByTokenRes} message ProtoOAGetCtidProfileByTokenRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetCtidProfileByTokenRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      $root.ProtoOACtidProfile.encode(
        message.profile,
        writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAGetCtidProfileByTokenRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetCtidProfileByTokenRes} ProtoOAGetCtidProfileByTokenRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetCtidProfileByTokenRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetCtidProfileByTokenRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.profile = $root.ProtoOACtidProfile.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("profile"))
        throw $util.ProtocolError("missing required 'profile'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetCtidProfileByTokenRes
     * @function getTypeUrl
     * @memberof ProtoOAGetCtidProfileByTokenRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetCtidProfileByTokenRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetCtidProfileByTokenRes";
    };

    return ProtoOAGetCtidProfileByTokenRes;
  })());

export const ProtoOADepthEvent = ($root.ProtoOADepthEvent = (() => {
  /**
   * Properties of a ProtoOADepthEvent.
   * @exports IProtoOADepthEvent
   * @interface IProtoOADepthEvent
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADepthEvent payloadType
   * @property {number} ctidTraderAccountId ProtoOADepthEvent ctidTraderAccountId
   * @property {number} symbolId ProtoOADepthEvent symbolId
   * @property {Array.<IProtoOADepthQuote>|null} [newQuotes] ProtoOADepthEvent newQuotes
   * @property {Array.<number>|null} [deletedQuotes] ProtoOADepthEvent deletedQuotes
   */

  /**
   * Constructs a new ProtoOADepthEvent.
   * @exports ProtoOADepthEvent
   * @classdesc Represents a ProtoOADepthEvent.
   * @implements IProtoOADepthEvent
   * @constructor
   * @param {IProtoOADepthEvent=} [properties] Properties to set
   */
  function ProtoOADepthEvent(properties) {
    this.newQuotes = [];
    this.deletedQuotes = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOADepthEvent payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.payloadType = 2155;

  /**
   * ProtoOADepthEvent ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOADepthEvent symbolId.
   * @member {number} symbolId
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.symbolId = $util.Long
    ? $util.Long.fromBits(0, 0, true)
    : 0;

  /**
   * ProtoOADepthEvent newQuotes.
   * @member {Array.<IProtoOADepthQuote>} newQuotes
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.newQuotes = $util.emptyArray;

  /**
   * ProtoOADepthEvent deletedQuotes.
   * @member {Array.<number>} deletedQuotes
   * @memberof ProtoOADepthEvent
   * @instance
   */
  ProtoOADepthEvent.prototype.deletedQuotes = $util.emptyArray;

  /**
   * Creates a new ProtoOADepthEvent instance using the specified properties.
   * @function create
   * @memberof ProtoOADepthEvent
   * @static
   * @param {IProtoOADepthEvent=} [properties] Properties to set
   * @returns {ProtoOADepthEvent} ProtoOADepthEvent instance
   */
  ProtoOADepthEvent.create = function create(properties) {
    return new ProtoOADepthEvent(properties);
  };

  /**
   * Encodes the specified ProtoOADepthEvent message. Does not implicitly {@link ProtoOADepthEvent.verify|verify} messages.
   * @function encode
   * @memberof ProtoOADepthEvent
   * @static
   * @param {IProtoOADepthEvent} message ProtoOADepthEvent message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOADepthEvent.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.symbolId);
    if (message.newQuotes != null && message.newQuotes.length)
      for (let i = 0; i < message.newQuotes.length; ++i)
        $root.ProtoOADepthQuote.encode(
          message.newQuotes[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim();
    if (message.deletedQuotes != null && message.deletedQuotes.length) {
      writer.uint32(/* id 5, wireType 2 =*/ 42).fork();
      for (let i = 0; i < message.deletedQuotes.length; ++i)
        writer.uint64(message.deletedQuotes[i]);
      writer.ldelim();
    }
    return writer;
  };

  /**
   * Decodes a ProtoOADepthEvent message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOADepthEvent
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOADepthEvent} ProtoOADepthEvent
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOADepthEvent.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOADepthEvent();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.symbolId = reader.uint64();
          break;
        }
        case 4: {
          if (!(message.newQuotes && message.newQuotes.length))
            message.newQuotes = [];
          message.newQuotes.push(
            $root.ProtoOADepthQuote.decode(reader, reader.uint32()),
          );
          break;
        }
        case 5: {
          if (!(message.deletedQuotes && message.deletedQuotes.length))
            message.deletedQuotes = [];
          if ((tag & 7) === 2) {
            let end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2)
              message.deletedQuotes.push(reader.uint64());
          } else message.deletedQuotes.push(reader.uint64());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("symbolId"))
      throw $util.ProtocolError("missing required 'symbolId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOADepthEvent
   * @function getTypeUrl
   * @memberof ProtoOADepthEvent
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOADepthEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOADepthEvent";
  };

  return ProtoOADepthEvent;
})());

export const ProtoOASubscribeDepthQuotesReq =
  ($root.ProtoOASubscribeDepthQuotesReq = (() => {
    /**
     * Properties of a ProtoOASubscribeDepthQuotesReq.
     * @exports IProtoOASubscribeDepthQuotesReq
     * @interface IProtoOASubscribeDepthQuotesReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeDepthQuotesReq payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeDepthQuotesReq ctidTraderAccountId
     * @property {Array.<number>|null} [symbolId] ProtoOASubscribeDepthQuotesReq symbolId
     */

    /**
     * Constructs a new ProtoOASubscribeDepthQuotesReq.
     * @exports ProtoOASubscribeDepthQuotesReq
     * @classdesc Represents a ProtoOASubscribeDepthQuotesReq.
     * @implements IProtoOASubscribeDepthQuotesReq
     * @constructor
     * @param {IProtoOASubscribeDepthQuotesReq=} [properties] Properties to set
     */
    function ProtoOASubscribeDepthQuotesReq(properties) {
      this.symbolId = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeDepthQuotesReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @instance
     */
    ProtoOASubscribeDepthQuotesReq.prototype.payloadType = 2156;

    /**
     * ProtoOASubscribeDepthQuotesReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @instance
     */
    ProtoOASubscribeDepthQuotesReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASubscribeDepthQuotesReq symbolId.
     * @member {Array.<number>} symbolId
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @instance
     */
    ProtoOASubscribeDepthQuotesReq.prototype.symbolId = $util.emptyArray;

    /**
     * Creates a new ProtoOASubscribeDepthQuotesReq instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @static
     * @param {IProtoOASubscribeDepthQuotesReq=} [properties] Properties to set
     * @returns {ProtoOASubscribeDepthQuotesReq} ProtoOASubscribeDepthQuotesReq instance
     */
    ProtoOASubscribeDepthQuotesReq.create = function create(properties) {
      return new ProtoOASubscribeDepthQuotesReq(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOASubscribeDepthQuotesReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @static
     * @param {IProtoOASubscribeDepthQuotesReq} message ProtoOASubscribeDepthQuotesReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeDepthQuotesReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolId != null && message.symbolId.length)
        for (let i = 0; i < message.symbolId.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeDepthQuotesReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeDepthQuotesReq} ProtoOASubscribeDepthQuotesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeDepthQuotesReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeDepthQuotesReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolId && message.symbolId.length))
              message.symbolId = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.symbolId.push(reader.int64());
            } else message.symbolId.push(reader.int64());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeDepthQuotesReq
     * @function getTypeUrl
     * @memberof ProtoOASubscribeDepthQuotesReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeDepthQuotesReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeDepthQuotesReq";
    };

    return ProtoOASubscribeDepthQuotesReq;
  })());

export const ProtoOASubscribeDepthQuotesRes =
  ($root.ProtoOASubscribeDepthQuotesRes = (() => {
    /**
     * Properties of a ProtoOASubscribeDepthQuotesRes.
     * @exports IProtoOASubscribeDepthQuotesRes
     * @interface IProtoOASubscribeDepthQuotesRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASubscribeDepthQuotesRes payloadType
     * @property {number} ctidTraderAccountId ProtoOASubscribeDepthQuotesRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOASubscribeDepthQuotesRes.
     * @exports ProtoOASubscribeDepthQuotesRes
     * @classdesc Represents a ProtoOASubscribeDepthQuotesRes.
     * @implements IProtoOASubscribeDepthQuotesRes
     * @constructor
     * @param {IProtoOASubscribeDepthQuotesRes=} [properties] Properties to set
     */
    function ProtoOASubscribeDepthQuotesRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASubscribeDepthQuotesRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @instance
     */
    ProtoOASubscribeDepthQuotesRes.prototype.payloadType = 2157;

    /**
     * ProtoOASubscribeDepthQuotesRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @instance
     */
    ProtoOASubscribeDepthQuotesRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASubscribeDepthQuotesRes instance using the specified properties.
     * @function create
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @static
     * @param {IProtoOASubscribeDepthQuotesRes=} [properties] Properties to set
     * @returns {ProtoOASubscribeDepthQuotesRes} ProtoOASubscribeDepthQuotesRes instance
     */
    ProtoOASubscribeDepthQuotesRes.create = function create(properties) {
      return new ProtoOASubscribeDepthQuotesRes(properties);
    };

    /**
     * Encodes the specified ProtoOASubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOASubscribeDepthQuotesRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @static
     * @param {IProtoOASubscribeDepthQuotesRes} message ProtoOASubscribeDepthQuotesRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASubscribeDepthQuotesRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOASubscribeDepthQuotesRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASubscribeDepthQuotesRes} ProtoOASubscribeDepthQuotesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASubscribeDepthQuotesRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASubscribeDepthQuotesRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASubscribeDepthQuotesRes
     * @function getTypeUrl
     * @memberof ProtoOASubscribeDepthQuotesRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASubscribeDepthQuotesRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASubscribeDepthQuotesRes";
    };

    return ProtoOASubscribeDepthQuotesRes;
  })());

export const ProtoOAUnsubscribeDepthQuotesReq =
  ($root.ProtoOAUnsubscribeDepthQuotesReq = (() => {
    /**
     * Properties of a ProtoOAUnsubscribeDepthQuotesReq.
     * @exports IProtoOAUnsubscribeDepthQuotesReq
     * @interface IProtoOAUnsubscribeDepthQuotesReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeDepthQuotesReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId
     * @property {Array.<number>|null} [symbolId] ProtoOAUnsubscribeDepthQuotesReq symbolId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeDepthQuotesReq.
     * @exports ProtoOAUnsubscribeDepthQuotesReq
     * @classdesc Represents a ProtoOAUnsubscribeDepthQuotesReq.
     * @implements IProtoOAUnsubscribeDepthQuotesReq
     * @constructor
     * @param {IProtoOAUnsubscribeDepthQuotesReq=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeDepthQuotesReq(properties) {
      this.symbolId = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeDepthQuotesReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @instance
     */
    ProtoOAUnsubscribeDepthQuotesReq.prototype.payloadType = 2158;

    /**
     * ProtoOAUnsubscribeDepthQuotesReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @instance
     */
    ProtoOAUnsubscribeDepthQuotesReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAUnsubscribeDepthQuotesReq symbolId.
     * @member {Array.<number>} symbolId
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @instance
     */
    ProtoOAUnsubscribeDepthQuotesReq.prototype.symbolId = $util.emptyArray;

    /**
     * Creates a new ProtoOAUnsubscribeDepthQuotesReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @static
     * @param {IProtoOAUnsubscribeDepthQuotesReq=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeDepthQuotesReq} ProtoOAUnsubscribeDepthQuotesReq instance
     */
    ProtoOAUnsubscribeDepthQuotesReq.create = function create(properties) {
      return new ProtoOAUnsubscribeDepthQuotesReq(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeDepthQuotesReq message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @static
     * @param {IProtoOAUnsubscribeDepthQuotesReq} message ProtoOAUnsubscribeDepthQuotesReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeDepthQuotesReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolId != null && message.symbolId.length)
        for (let i = 0; i < message.symbolId.length; ++i)
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.symbolId[i]);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeDepthQuotesReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeDepthQuotesReq} ProtoOAUnsubscribeDepthQuotesReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeDepthQuotesReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeDepthQuotesReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolId && message.symbolId.length))
              message.symbolId = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) message.symbolId.push(reader.int64());
            } else message.symbolId.push(reader.int64());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeDepthQuotesReq
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeDepthQuotesReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeDepthQuotesReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeDepthQuotesReq";
    };

    return ProtoOAUnsubscribeDepthQuotesReq;
  })());

export const ProtoOAUnsubscribeDepthQuotesRes =
  ($root.ProtoOAUnsubscribeDepthQuotesRes = (() => {
    /**
     * Properties of a ProtoOAUnsubscribeDepthQuotesRes.
     * @exports IProtoOAUnsubscribeDepthQuotesRes
     * @interface IProtoOAUnsubscribeDepthQuotesRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAUnsubscribeDepthQuotesRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAUnsubscribeDepthQuotesRes.
     * @exports ProtoOAUnsubscribeDepthQuotesRes
     * @classdesc Represents a ProtoOAUnsubscribeDepthQuotesRes.
     * @implements IProtoOAUnsubscribeDepthQuotesRes
     * @constructor
     * @param {IProtoOAUnsubscribeDepthQuotesRes=} [properties] Properties to set
     */
    function ProtoOAUnsubscribeDepthQuotesRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAUnsubscribeDepthQuotesRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @instance
     */
    ProtoOAUnsubscribeDepthQuotesRes.prototype.payloadType = 2159;

    /**
     * ProtoOAUnsubscribeDepthQuotesRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @instance
     */
    ProtoOAUnsubscribeDepthQuotesRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAUnsubscribeDepthQuotesRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @static
     * @param {IProtoOAUnsubscribeDepthQuotesRes=} [properties] Properties to set
     * @returns {ProtoOAUnsubscribeDepthQuotesRes} ProtoOAUnsubscribeDepthQuotesRes instance
     */
    ProtoOAUnsubscribeDepthQuotesRes.create = function create(properties) {
      return new ProtoOAUnsubscribeDepthQuotesRes(properties);
    };

    /**
     * Encodes the specified ProtoOAUnsubscribeDepthQuotesRes message. Does not implicitly {@link ProtoOAUnsubscribeDepthQuotesRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @static
     * @param {IProtoOAUnsubscribeDepthQuotesRes} message ProtoOAUnsubscribeDepthQuotesRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAUnsubscribeDepthQuotesRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAUnsubscribeDepthQuotesRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAUnsubscribeDepthQuotesRes} ProtoOAUnsubscribeDepthQuotesRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAUnsubscribeDepthQuotesRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAUnsubscribeDepthQuotesRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAUnsubscribeDepthQuotesRes
     * @function getTypeUrl
     * @memberof ProtoOAUnsubscribeDepthQuotesRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAUnsubscribeDepthQuotesRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAUnsubscribeDepthQuotesRes";
    };

    return ProtoOAUnsubscribeDepthQuotesRes;
  })());

export const ProtoOASymbolCategoryListReq =
  ($root.ProtoOASymbolCategoryListReq = (() => {
    /**
     * Properties of a ProtoOASymbolCategoryListReq.
     * @exports IProtoOASymbolCategoryListReq
     * @interface IProtoOASymbolCategoryListReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolCategoryListReq payloadType
     * @property {number} ctidTraderAccountId ProtoOASymbolCategoryListReq ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOASymbolCategoryListReq.
     * @exports ProtoOASymbolCategoryListReq
     * @classdesc Represents a ProtoOASymbolCategoryListReq.
     * @implements IProtoOASymbolCategoryListReq
     * @constructor
     * @param {IProtoOASymbolCategoryListReq=} [properties] Properties to set
     */
    function ProtoOASymbolCategoryListReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASymbolCategoryListReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASymbolCategoryListReq
     * @instance
     */
    ProtoOASymbolCategoryListReq.prototype.payloadType = 2160;

    /**
     * ProtoOASymbolCategoryListReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASymbolCategoryListReq
     * @instance
     */
    ProtoOASymbolCategoryListReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOASymbolCategoryListReq instance using the specified properties.
     * @function create
     * @memberof ProtoOASymbolCategoryListReq
     * @static
     * @param {IProtoOASymbolCategoryListReq=} [properties] Properties to set
     * @returns {ProtoOASymbolCategoryListReq} ProtoOASymbolCategoryListReq instance
     */
    ProtoOASymbolCategoryListReq.create = function create(properties) {
      return new ProtoOASymbolCategoryListReq(properties);
    };

    /**
     * Encodes the specified ProtoOASymbolCategoryListReq message. Does not implicitly {@link ProtoOASymbolCategoryListReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASymbolCategoryListReq
     * @static
     * @param {IProtoOASymbolCategoryListReq} message ProtoOASymbolCategoryListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASymbolCategoryListReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOASymbolCategoryListReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASymbolCategoryListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASymbolCategoryListReq} ProtoOASymbolCategoryListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASymbolCategoryListReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASymbolCategoryListReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASymbolCategoryListReq
     * @function getTypeUrl
     * @memberof ProtoOASymbolCategoryListReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASymbolCategoryListReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASymbolCategoryListReq";
    };

    return ProtoOASymbolCategoryListReq;
  })());

export const ProtoOASymbolCategoryListRes =
  ($root.ProtoOASymbolCategoryListRes = (() => {
    /**
     * Properties of a ProtoOASymbolCategoryListRes.
     * @exports IProtoOASymbolCategoryListRes
     * @interface IProtoOASymbolCategoryListRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOASymbolCategoryListRes payloadType
     * @property {number} ctidTraderAccountId ProtoOASymbolCategoryListRes ctidTraderAccountId
     * @property {Array.<IProtoOASymbolCategory>|null} [symbolCategory] ProtoOASymbolCategoryListRes symbolCategory
     */

    /**
     * Constructs a new ProtoOASymbolCategoryListRes.
     * @exports ProtoOASymbolCategoryListRes
     * @classdesc Represents a ProtoOASymbolCategoryListRes.
     * @implements IProtoOASymbolCategoryListRes
     * @constructor
     * @param {IProtoOASymbolCategoryListRes=} [properties] Properties to set
     */
    function ProtoOASymbolCategoryListRes(properties) {
      this.symbolCategory = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOASymbolCategoryListRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOASymbolCategoryListRes
     * @instance
     */
    ProtoOASymbolCategoryListRes.prototype.payloadType = 2161;

    /**
     * ProtoOASymbolCategoryListRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOASymbolCategoryListRes
     * @instance
     */
    ProtoOASymbolCategoryListRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOASymbolCategoryListRes symbolCategory.
     * @member {Array.<IProtoOASymbolCategory>} symbolCategory
     * @memberof ProtoOASymbolCategoryListRes
     * @instance
     */
    ProtoOASymbolCategoryListRes.prototype.symbolCategory = $util.emptyArray;

    /**
     * Creates a new ProtoOASymbolCategoryListRes instance using the specified properties.
     * @function create
     * @memberof ProtoOASymbolCategoryListRes
     * @static
     * @param {IProtoOASymbolCategoryListRes=} [properties] Properties to set
     * @returns {ProtoOASymbolCategoryListRes} ProtoOASymbolCategoryListRes instance
     */
    ProtoOASymbolCategoryListRes.create = function create(properties) {
      return new ProtoOASymbolCategoryListRes(properties);
    };

    /**
     * Encodes the specified ProtoOASymbolCategoryListRes message. Does not implicitly {@link ProtoOASymbolCategoryListRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOASymbolCategoryListRes
     * @static
     * @param {IProtoOASymbolCategoryListRes} message ProtoOASymbolCategoryListRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOASymbolCategoryListRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.symbolCategory != null && message.symbolCategory.length)
        for (let i = 0; i < message.symbolCategory.length; ++i)
          $root.ProtoOASymbolCategory.encode(
            message.symbolCategory[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOASymbolCategoryListRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOASymbolCategoryListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOASymbolCategoryListRes} ProtoOASymbolCategoryListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOASymbolCategoryListRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOASymbolCategoryListRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.symbolCategory && message.symbolCategory.length))
              message.symbolCategory = [];
            message.symbolCategory.push(
              $root.ProtoOASymbolCategory.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOASymbolCategoryListRes
     * @function getTypeUrl
     * @memberof ProtoOASymbolCategoryListRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOASymbolCategoryListRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOASymbolCategoryListRes";
    };

    return ProtoOASymbolCategoryListRes;
  })());

export const ProtoOAAccountLogoutReq = ($root.ProtoOAAccountLogoutReq = (() => {
  /**
   * Properties of a ProtoOAAccountLogoutReq.
   * @exports IProtoOAAccountLogoutReq
   * @interface IProtoOAAccountLogoutReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountLogoutReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAAccountLogoutReq ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountLogoutReq.
   * @exports ProtoOAAccountLogoutReq
   * @classdesc Represents a ProtoOAAccountLogoutReq.
   * @implements IProtoOAAccountLogoutReq
   * @constructor
   * @param {IProtoOAAccountLogoutReq=} [properties] Properties to set
   */
  function ProtoOAAccountLogoutReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountLogoutReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountLogoutReq
   * @instance
   */
  ProtoOAAccountLogoutReq.prototype.payloadType = 2162;

  /**
   * ProtoOAAccountLogoutReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAccountLogoutReq
   * @instance
   */
  ProtoOAAccountLogoutReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountLogoutReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {IProtoOAAccountLogoutReq=} [properties] Properties to set
   * @returns {ProtoOAAccountLogoutReq} ProtoOAAccountLogoutReq instance
   */
  ProtoOAAccountLogoutReq.create = function create(properties) {
    return new ProtoOAAccountLogoutReq(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountLogoutReq message. Does not implicitly {@link ProtoOAAccountLogoutReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {IProtoOAAccountLogoutReq} message ProtoOAAccountLogoutReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountLogoutReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountLogoutReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountLogoutReq} ProtoOAAccountLogoutReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountLogoutReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountLogoutReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAccountLogoutReq
   * @function getTypeUrl
   * @memberof ProtoOAAccountLogoutReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAccountLogoutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAccountLogoutReq";
  };

  return ProtoOAAccountLogoutReq;
})());

export const ProtoOAAccountLogoutRes = ($root.ProtoOAAccountLogoutRes = (() => {
  /**
   * Properties of a ProtoOAAccountLogoutRes.
   * @exports IProtoOAAccountLogoutRes
   * @interface IProtoOAAccountLogoutRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountLogoutRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAAccountLogoutRes ctidTraderAccountId
   */

  /**
   * Constructs a new ProtoOAAccountLogoutRes.
   * @exports ProtoOAAccountLogoutRes
   * @classdesc Represents a ProtoOAAccountLogoutRes.
   * @implements IProtoOAAccountLogoutRes
   * @constructor
   * @param {IProtoOAAccountLogoutRes=} [properties] Properties to set
   */
  function ProtoOAAccountLogoutRes(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAAccountLogoutRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAAccountLogoutRes
   * @instance
   */
  ProtoOAAccountLogoutRes.prototype.payloadType = 2163;

  /**
   * ProtoOAAccountLogoutRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAAccountLogoutRes
   * @instance
   */
  ProtoOAAccountLogoutRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAAccountLogoutRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {IProtoOAAccountLogoutRes=} [properties] Properties to set
   * @returns {ProtoOAAccountLogoutRes} ProtoOAAccountLogoutRes instance
   */
  ProtoOAAccountLogoutRes.create = function create(properties) {
    return new ProtoOAAccountLogoutRes(properties);
  };

  /**
   * Encodes the specified ProtoOAAccountLogoutRes message. Does not implicitly {@link ProtoOAAccountLogoutRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {IProtoOAAccountLogoutRes} message ProtoOAAccountLogoutRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAAccountLogoutRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    return writer;
  };

  /**
   * Decodes a ProtoOAAccountLogoutRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAAccountLogoutRes} ProtoOAAccountLogoutRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAAccountLogoutRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAAccountLogoutRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAAccountLogoutRes
   * @function getTypeUrl
   * @memberof ProtoOAAccountLogoutRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAAccountLogoutRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAAccountLogoutRes";
  };

  return ProtoOAAccountLogoutRes;
})());

export const ProtoOAAccountDisconnectEvent =
  ($root.ProtoOAAccountDisconnectEvent = (() => {
    /**
     * Properties of a ProtoOAAccountDisconnectEvent.
     * @exports IProtoOAAccountDisconnectEvent
     * @interface IProtoOAAccountDisconnectEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAAccountDisconnectEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOAAccountDisconnectEvent ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAAccountDisconnectEvent.
     * @exports ProtoOAAccountDisconnectEvent
     * @classdesc Represents a ProtoOAAccountDisconnectEvent.
     * @implements IProtoOAAccountDisconnectEvent
     * @constructor
     * @param {IProtoOAAccountDisconnectEvent=} [properties] Properties to set
     */
    function ProtoOAAccountDisconnectEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAAccountDisconnectEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAAccountDisconnectEvent
     * @instance
     */
    ProtoOAAccountDisconnectEvent.prototype.payloadType = 2164;

    /**
     * ProtoOAAccountDisconnectEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAAccountDisconnectEvent
     * @instance
     */
    ProtoOAAccountDisconnectEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAAccountDisconnectEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAAccountDisconnectEvent
     * @static
     * @param {IProtoOAAccountDisconnectEvent=} [properties] Properties to set
     * @returns {ProtoOAAccountDisconnectEvent} ProtoOAAccountDisconnectEvent instance
     */
    ProtoOAAccountDisconnectEvent.create = function create(properties) {
      return new ProtoOAAccountDisconnectEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAAccountDisconnectEvent message. Does not implicitly {@link ProtoOAAccountDisconnectEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAAccountDisconnectEvent
     * @static
     * @param {IProtoOAAccountDisconnectEvent} message ProtoOAAccountDisconnectEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAAccountDisconnectEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAAccountDisconnectEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAAccountDisconnectEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAAccountDisconnectEvent} ProtoOAAccountDisconnectEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAAccountDisconnectEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAAccountDisconnectEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAAccountDisconnectEvent
     * @function getTypeUrl
     * @memberof ProtoOAAccountDisconnectEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAAccountDisconnectEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAAccountDisconnectEvent";
    };

    return ProtoOAAccountDisconnectEvent;
  })());

export const ProtoOAMarginCallListReq = ($root.ProtoOAMarginCallListReq =
  (() => {
    /**
     * Properties of a ProtoOAMarginCallListReq.
     * @exports IProtoOAMarginCallListReq
     * @interface IProtoOAMarginCallListReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallListReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAMarginCallListReq ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAMarginCallListReq.
     * @exports ProtoOAMarginCallListReq
     * @classdesc Represents a ProtoOAMarginCallListReq.
     * @implements IProtoOAMarginCallListReq
     * @constructor
     * @param {IProtoOAMarginCallListReq=} [properties] Properties to set
     */
    function ProtoOAMarginCallListReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallListReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallListReq
     * @instance
     */
    ProtoOAMarginCallListReq.prototype.payloadType = 2167;

    /**
     * ProtoOAMarginCallListReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAMarginCallListReq
     * @instance
     */
    ProtoOAMarginCallListReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAMarginCallListReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallListReq
     * @static
     * @param {IProtoOAMarginCallListReq=} [properties] Properties to set
     * @returns {ProtoOAMarginCallListReq} ProtoOAMarginCallListReq instance
     */
    ProtoOAMarginCallListReq.create = function create(properties) {
      return new ProtoOAMarginCallListReq(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallListReq message. Does not implicitly {@link ProtoOAMarginCallListReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallListReq
     * @static
     * @param {IProtoOAMarginCallListReq} message ProtoOAMarginCallListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallListReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallListReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallListReq} ProtoOAMarginCallListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallListReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallListReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallListReq
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallListReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallListReq";
    };

    return ProtoOAMarginCallListReq;
  })());

export const ProtoOAMarginCallListRes = ($root.ProtoOAMarginCallListRes =
  (() => {
    /**
     * Properties of a ProtoOAMarginCallListRes.
     * @exports IProtoOAMarginCallListRes
     * @interface IProtoOAMarginCallListRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallListRes payloadType
     * @property {Array.<IProtoOAMarginCall>|null} [marginCall] ProtoOAMarginCallListRes marginCall
     */

    /**
     * Constructs a new ProtoOAMarginCallListRes.
     * @exports ProtoOAMarginCallListRes
     * @classdesc Represents a ProtoOAMarginCallListRes.
     * @implements IProtoOAMarginCallListRes
     * @constructor
     * @param {IProtoOAMarginCallListRes=} [properties] Properties to set
     */
    function ProtoOAMarginCallListRes(properties) {
      this.marginCall = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallListRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallListRes
     * @instance
     */
    ProtoOAMarginCallListRes.prototype.payloadType = 2168;

    /**
     * ProtoOAMarginCallListRes marginCall.
     * @member {Array.<IProtoOAMarginCall>} marginCall
     * @memberof ProtoOAMarginCallListRes
     * @instance
     */
    ProtoOAMarginCallListRes.prototype.marginCall = $util.emptyArray;

    /**
     * Creates a new ProtoOAMarginCallListRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallListRes
     * @static
     * @param {IProtoOAMarginCallListRes=} [properties] Properties to set
     * @returns {ProtoOAMarginCallListRes} ProtoOAMarginCallListRes instance
     */
    ProtoOAMarginCallListRes.create = function create(properties) {
      return new ProtoOAMarginCallListRes(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallListRes message. Does not implicitly {@link ProtoOAMarginCallListRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallListRes
     * @static
     * @param {IProtoOAMarginCallListRes} message ProtoOAMarginCallListRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallListRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      if (message.marginCall != null && message.marginCall.length)
        for (let i = 0; i < message.marginCall.length; ++i)
          $root.ProtoOAMarginCall.encode(
            message.marginCall[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallListRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallListRes} ProtoOAMarginCallListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallListRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallListRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            if (!(message.marginCall && message.marginCall.length))
              message.marginCall = [];
            message.marginCall.push(
              $root.ProtoOAMarginCall.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallListRes
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallListRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallListRes";
    };

    return ProtoOAMarginCallListRes;
  })());

export const ProtoOAMarginCallUpdateReq = ($root.ProtoOAMarginCallUpdateReq =
  (() => {
    /**
     * Properties of a ProtoOAMarginCallUpdateReq.
     * @exports IProtoOAMarginCallUpdateReq
     * @interface IProtoOAMarginCallUpdateReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallUpdateReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAMarginCallUpdateReq ctidTraderAccountId
     * @property {IProtoOAMarginCall} marginCall ProtoOAMarginCallUpdateReq marginCall
     */

    /**
     * Constructs a new ProtoOAMarginCallUpdateReq.
     * @exports ProtoOAMarginCallUpdateReq
     * @classdesc Represents a ProtoOAMarginCallUpdateReq.
     * @implements IProtoOAMarginCallUpdateReq
     * @constructor
     * @param {IProtoOAMarginCallUpdateReq=} [properties] Properties to set
     */
    function ProtoOAMarginCallUpdateReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallUpdateReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallUpdateReq
     * @instance
     */
    ProtoOAMarginCallUpdateReq.prototype.payloadType = 2169;

    /**
     * ProtoOAMarginCallUpdateReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAMarginCallUpdateReq
     * @instance
     */
    ProtoOAMarginCallUpdateReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAMarginCallUpdateReq marginCall.
     * @member {IProtoOAMarginCall} marginCall
     * @memberof ProtoOAMarginCallUpdateReq
     * @instance
     */
    ProtoOAMarginCallUpdateReq.prototype.marginCall = null;

    /**
     * Creates a new ProtoOAMarginCallUpdateReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallUpdateReq
     * @static
     * @param {IProtoOAMarginCallUpdateReq=} [properties] Properties to set
     * @returns {ProtoOAMarginCallUpdateReq} ProtoOAMarginCallUpdateReq instance
     */
    ProtoOAMarginCallUpdateReq.create = function create(properties) {
      return new ProtoOAMarginCallUpdateReq(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallUpdateReq message. Does not implicitly {@link ProtoOAMarginCallUpdateReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallUpdateReq
     * @static
     * @param {IProtoOAMarginCallUpdateReq} message ProtoOAMarginCallUpdateReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallUpdateReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      $root.ProtoOAMarginCall.encode(
        message.marginCall,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallUpdateReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallUpdateReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallUpdateReq} ProtoOAMarginCallUpdateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallUpdateReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallUpdateReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.marginCall = $root.ProtoOAMarginCall.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("marginCall"))
        throw $util.ProtocolError("missing required 'marginCall'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateReq
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallUpdateReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallUpdateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallUpdateReq";
    };

    return ProtoOAMarginCallUpdateReq;
  })());

export const ProtoOAMarginCallUpdateRes = ($root.ProtoOAMarginCallUpdateRes =
  (() => {
    /**
     * Properties of a ProtoOAMarginCallUpdateRes.
     * @exports IProtoOAMarginCallUpdateRes
     * @interface IProtoOAMarginCallUpdateRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallUpdateRes payloadType
     */

    /**
     * Constructs a new ProtoOAMarginCallUpdateRes.
     * @exports ProtoOAMarginCallUpdateRes
     * @classdesc Represents a ProtoOAMarginCallUpdateRes.
     * @implements IProtoOAMarginCallUpdateRes
     * @constructor
     * @param {IProtoOAMarginCallUpdateRes=} [properties] Properties to set
     */
    function ProtoOAMarginCallUpdateRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallUpdateRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallUpdateRes
     * @instance
     */
    ProtoOAMarginCallUpdateRes.prototype.payloadType = 2170;

    /**
     * Creates a new ProtoOAMarginCallUpdateRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallUpdateRes
     * @static
     * @param {IProtoOAMarginCallUpdateRes=} [properties] Properties to set
     * @returns {ProtoOAMarginCallUpdateRes} ProtoOAMarginCallUpdateRes instance
     */
    ProtoOAMarginCallUpdateRes.create = function create(properties) {
      return new ProtoOAMarginCallUpdateRes(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallUpdateRes message. Does not implicitly {@link ProtoOAMarginCallUpdateRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallUpdateRes
     * @static
     * @param {IProtoOAMarginCallUpdateRes} message ProtoOAMarginCallUpdateRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallUpdateRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallUpdateRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallUpdateRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallUpdateRes} ProtoOAMarginCallUpdateRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallUpdateRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallUpdateRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateRes
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallUpdateRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallUpdateRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallUpdateRes";
    };

    return ProtoOAMarginCallUpdateRes;
  })());

export const ProtoOAMarginCallUpdateEvent =
  ($root.ProtoOAMarginCallUpdateEvent = (() => {
    /**
     * Properties of a ProtoOAMarginCallUpdateEvent.
     * @exports IProtoOAMarginCallUpdateEvent
     * @interface IProtoOAMarginCallUpdateEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallUpdateEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOAMarginCallUpdateEvent ctidTraderAccountId
     * @property {IProtoOAMarginCall} marginCall ProtoOAMarginCallUpdateEvent marginCall
     */

    /**
     * Constructs a new ProtoOAMarginCallUpdateEvent.
     * @exports ProtoOAMarginCallUpdateEvent
     * @classdesc Represents a ProtoOAMarginCallUpdateEvent.
     * @implements IProtoOAMarginCallUpdateEvent
     * @constructor
     * @param {IProtoOAMarginCallUpdateEvent=} [properties] Properties to set
     */
    function ProtoOAMarginCallUpdateEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallUpdateEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallUpdateEvent
     * @instance
     */
    ProtoOAMarginCallUpdateEvent.prototype.payloadType = 2171;

    /**
     * ProtoOAMarginCallUpdateEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAMarginCallUpdateEvent
     * @instance
     */
    ProtoOAMarginCallUpdateEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAMarginCallUpdateEvent marginCall.
     * @member {IProtoOAMarginCall} marginCall
     * @memberof ProtoOAMarginCallUpdateEvent
     * @instance
     */
    ProtoOAMarginCallUpdateEvent.prototype.marginCall = null;

    /**
     * Creates a new ProtoOAMarginCallUpdateEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallUpdateEvent
     * @static
     * @param {IProtoOAMarginCallUpdateEvent=} [properties] Properties to set
     * @returns {ProtoOAMarginCallUpdateEvent} ProtoOAMarginCallUpdateEvent instance
     */
    ProtoOAMarginCallUpdateEvent.create = function create(properties) {
      return new ProtoOAMarginCallUpdateEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallUpdateEvent message. Does not implicitly {@link ProtoOAMarginCallUpdateEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallUpdateEvent
     * @static
     * @param {IProtoOAMarginCallUpdateEvent} message ProtoOAMarginCallUpdateEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallUpdateEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      $root.ProtoOAMarginCall.encode(
        message.marginCall,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallUpdateEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallUpdateEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallUpdateEvent} ProtoOAMarginCallUpdateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallUpdateEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallUpdateEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.marginCall = $root.ProtoOAMarginCall.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("marginCall"))
        throw $util.ProtocolError("missing required 'marginCall'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallUpdateEvent
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallUpdateEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallUpdateEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallUpdateEvent";
    };

    return ProtoOAMarginCallUpdateEvent;
  })());

export const ProtoOAMarginCallTriggerEvent =
  ($root.ProtoOAMarginCallTriggerEvent = (() => {
    /**
     * Properties of a ProtoOAMarginCallTriggerEvent.
     * @exports IProtoOAMarginCallTriggerEvent
     * @interface IProtoOAMarginCallTriggerEvent
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAMarginCallTriggerEvent payloadType
     * @property {number} ctidTraderAccountId ProtoOAMarginCallTriggerEvent ctidTraderAccountId
     * @property {IProtoOAMarginCall} marginCall ProtoOAMarginCallTriggerEvent marginCall
     */

    /**
     * Constructs a new ProtoOAMarginCallTriggerEvent.
     * @exports ProtoOAMarginCallTriggerEvent
     * @classdesc Represents a ProtoOAMarginCallTriggerEvent.
     * @implements IProtoOAMarginCallTriggerEvent
     * @constructor
     * @param {IProtoOAMarginCallTriggerEvent=} [properties] Properties to set
     */
    function ProtoOAMarginCallTriggerEvent(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAMarginCallTriggerEvent payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAMarginCallTriggerEvent
     * @instance
     */
    ProtoOAMarginCallTriggerEvent.prototype.payloadType = 2172;

    /**
     * ProtoOAMarginCallTriggerEvent ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAMarginCallTriggerEvent
     * @instance
     */
    ProtoOAMarginCallTriggerEvent.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAMarginCallTriggerEvent marginCall.
     * @member {IProtoOAMarginCall} marginCall
     * @memberof ProtoOAMarginCallTriggerEvent
     * @instance
     */
    ProtoOAMarginCallTriggerEvent.prototype.marginCall = null;

    /**
     * Creates a new ProtoOAMarginCallTriggerEvent instance using the specified properties.
     * @function create
     * @memberof ProtoOAMarginCallTriggerEvent
     * @static
     * @param {IProtoOAMarginCallTriggerEvent=} [properties] Properties to set
     * @returns {ProtoOAMarginCallTriggerEvent} ProtoOAMarginCallTriggerEvent instance
     */
    ProtoOAMarginCallTriggerEvent.create = function create(properties) {
      return new ProtoOAMarginCallTriggerEvent(properties);
    };

    /**
     * Encodes the specified ProtoOAMarginCallTriggerEvent message. Does not implicitly {@link ProtoOAMarginCallTriggerEvent.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAMarginCallTriggerEvent
     * @static
     * @param {IProtoOAMarginCallTriggerEvent} message ProtoOAMarginCallTriggerEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAMarginCallTriggerEvent.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      $root.ProtoOAMarginCall.encode(
        message.marginCall,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAMarginCallTriggerEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAMarginCallTriggerEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAMarginCallTriggerEvent} ProtoOAMarginCallTriggerEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAMarginCallTriggerEvent.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAMarginCallTriggerEvent();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.marginCall = $root.ProtoOAMarginCall.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("marginCall"))
        throw $util.ProtocolError("missing required 'marginCall'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAMarginCallTriggerEvent
     * @function getTypeUrl
     * @memberof ProtoOAMarginCallTriggerEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAMarginCallTriggerEvent.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAMarginCallTriggerEvent";
    };

    return ProtoOAMarginCallTriggerEvent;
  })());

export const ProtoOAGetDynamicLeverageByIDReq =
  ($root.ProtoOAGetDynamicLeverageByIDReq = (() => {
    /**
     * Properties of a ProtoOAGetDynamicLeverageByIDReq.
     * @exports IProtoOAGetDynamicLeverageByIDReq
     * @interface IProtoOAGetDynamicLeverageByIDReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetDynamicLeverageByIDReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAGetDynamicLeverageByIDReq ctidTraderAccountId
     * @property {number} leverageId ProtoOAGetDynamicLeverageByIDReq leverageId
     */

    /**
     * Constructs a new ProtoOAGetDynamicLeverageByIDReq.
     * @exports ProtoOAGetDynamicLeverageByIDReq
     * @classdesc Represents a ProtoOAGetDynamicLeverageByIDReq.
     * @implements IProtoOAGetDynamicLeverageByIDReq
     * @constructor
     * @param {IProtoOAGetDynamicLeverageByIDReq=} [properties] Properties to set
     */
    function ProtoOAGetDynamicLeverageByIDReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetDynamicLeverageByIDReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDReq.prototype.payloadType = 2177;

    /**
     * ProtoOAGetDynamicLeverageByIDReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAGetDynamicLeverageByIDReq leverageId.
     * @member {number} leverageId
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDReq.prototype.leverageId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAGetDynamicLeverageByIDReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @static
     * @param {IProtoOAGetDynamicLeverageByIDReq=} [properties] Properties to set
     * @returns {ProtoOAGetDynamicLeverageByIDReq} ProtoOAGetDynamicLeverageByIDReq instance
     */
    ProtoOAGetDynamicLeverageByIDReq.create = function create(properties) {
      return new ProtoOAGetDynamicLeverageByIDReq(properties);
    };

    /**
     * Encodes the specified ProtoOAGetDynamicLeverageByIDReq message. Does not implicitly {@link ProtoOAGetDynamicLeverageByIDReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @static
     * @param {IProtoOAGetDynamicLeverageByIDReq} message ProtoOAGetDynamicLeverageByIDReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetDynamicLeverageByIDReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.leverageId);
      return writer;
    };

    /**
     * Decodes a ProtoOAGetDynamicLeverageByIDReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetDynamicLeverageByIDReq} ProtoOAGetDynamicLeverageByIDReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetDynamicLeverageByIDReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetDynamicLeverageByIDReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.leverageId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leverageId"))
        throw $util.ProtocolError("missing required 'leverageId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetDynamicLeverageByIDReq
     * @function getTypeUrl
     * @memberof ProtoOAGetDynamicLeverageByIDReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetDynamicLeverageByIDReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetDynamicLeverageByIDReq";
    };

    return ProtoOAGetDynamicLeverageByIDReq;
  })());

export const ProtoOAGetDynamicLeverageByIDRes =
  ($root.ProtoOAGetDynamicLeverageByIDRes = (() => {
    /**
     * Properties of a ProtoOAGetDynamicLeverageByIDRes.
     * @exports IProtoOAGetDynamicLeverageByIDRes
     * @interface IProtoOAGetDynamicLeverageByIDRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetDynamicLeverageByIDRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAGetDynamicLeverageByIDRes ctidTraderAccountId
     * @property {IProtoOADynamicLeverage} leverage ProtoOAGetDynamicLeverageByIDRes leverage
     */

    /**
     * Constructs a new ProtoOAGetDynamicLeverageByIDRes.
     * @exports ProtoOAGetDynamicLeverageByIDRes
     * @classdesc Represents a ProtoOAGetDynamicLeverageByIDRes.
     * @implements IProtoOAGetDynamicLeverageByIDRes
     * @constructor
     * @param {IProtoOAGetDynamicLeverageByIDRes=} [properties] Properties to set
     */
    function ProtoOAGetDynamicLeverageByIDRes(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetDynamicLeverageByIDRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDRes.prototype.payloadType = 2178;

    /**
     * ProtoOAGetDynamicLeverageByIDRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAGetDynamicLeverageByIDRes leverage.
     * @member {IProtoOADynamicLeverage} leverage
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @instance
     */
    ProtoOAGetDynamicLeverageByIDRes.prototype.leverage = null;

    /**
     * Creates a new ProtoOAGetDynamicLeverageByIDRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @static
     * @param {IProtoOAGetDynamicLeverageByIDRes=} [properties] Properties to set
     * @returns {ProtoOAGetDynamicLeverageByIDRes} ProtoOAGetDynamicLeverageByIDRes instance
     */
    ProtoOAGetDynamicLeverageByIDRes.create = function create(properties) {
      return new ProtoOAGetDynamicLeverageByIDRes(properties);
    };

    /**
     * Encodes the specified ProtoOAGetDynamicLeverageByIDRes message. Does not implicitly {@link ProtoOAGetDynamicLeverageByIDRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @static
     * @param {IProtoOAGetDynamicLeverageByIDRes} message ProtoOAGetDynamicLeverageByIDRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetDynamicLeverageByIDRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      $root.ProtoOADynamicLeverage.encode(
        message.leverage,
        writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
      ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOAGetDynamicLeverageByIDRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetDynamicLeverageByIDRes} ProtoOAGetDynamicLeverageByIDRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetDynamicLeverageByIDRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetDynamicLeverageByIDRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.leverage = $root.ProtoOADynamicLeverage.decode(
              reader,
              reader.uint32(),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("leverage"))
        throw $util.ProtocolError("missing required 'leverage'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetDynamicLeverageByIDRes
     * @function getTypeUrl
     * @memberof ProtoOAGetDynamicLeverageByIDRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetDynamicLeverageByIDRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetDynamicLeverageByIDRes";
    };

    return ProtoOAGetDynamicLeverageByIDRes;
  })());

export const ProtoOADealListByPositionIdReq =
  ($root.ProtoOADealListByPositionIdReq = (() => {
    /**
     * Properties of a ProtoOADealListByPositionIdReq.
     * @exports IProtoOADealListByPositionIdReq
     * @interface IProtoOADealListByPositionIdReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListByPositionIdReq payloadType
     * @property {number} ctidTraderAccountId ProtoOADealListByPositionIdReq ctidTraderAccountId
     * @property {number} positionId ProtoOADealListByPositionIdReq positionId
     * @property {number} fromTimestamp ProtoOADealListByPositionIdReq fromTimestamp
     * @property {number} toTimestamp ProtoOADealListByPositionIdReq toTimestamp
     */

    /**
     * Constructs a new ProtoOADealListByPositionIdReq.
     * @exports ProtoOADealListByPositionIdReq
     * @classdesc Represents a ProtoOADealListByPositionIdReq.
     * @implements IProtoOADealListByPositionIdReq
     * @constructor
     * @param {IProtoOADealListByPositionIdReq=} [properties] Properties to set
     */
    function ProtoOADealListByPositionIdReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOADealListByPositionIdReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOADealListByPositionIdReq
     * @instance
     */
    ProtoOADealListByPositionIdReq.prototype.payloadType = 2179;

    /**
     * ProtoOADealListByPositionIdReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOADealListByPositionIdReq
     * @instance
     */
    ProtoOADealListByPositionIdReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealListByPositionIdReq positionId.
     * @member {number} positionId
     * @memberof ProtoOADealListByPositionIdReq
     * @instance
     */
    ProtoOADealListByPositionIdReq.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealListByPositionIdReq fromTimestamp.
     * @member {number} fromTimestamp
     * @memberof ProtoOADealListByPositionIdReq
     * @instance
     */
    ProtoOADealListByPositionIdReq.prototype.fromTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealListByPositionIdReq toTimestamp.
     * @member {number} toTimestamp
     * @memberof ProtoOADealListByPositionIdReq
     * @instance
     */
    ProtoOADealListByPositionIdReq.prototype.toTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOADealListByPositionIdReq instance using the specified properties.
     * @function create
     * @memberof ProtoOADealListByPositionIdReq
     * @static
     * @param {IProtoOADealListByPositionIdReq=} [properties] Properties to set
     * @returns {ProtoOADealListByPositionIdReq} ProtoOADealListByPositionIdReq instance
     */
    ProtoOADealListByPositionIdReq.create = function create(properties) {
      return new ProtoOADealListByPositionIdReq(properties);
    };

    /**
     * Encodes the specified ProtoOADealListByPositionIdReq message. Does not implicitly {@link ProtoOADealListByPositionIdReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOADealListByPositionIdReq
     * @static
     * @param {IProtoOADealListByPositionIdReq} message ProtoOADealListByPositionIdReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOADealListByPositionIdReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
      writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.fromTimestamp);
      writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.toTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOADealListByPositionIdReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOADealListByPositionIdReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOADealListByPositionIdReq} ProtoOADealListByPositionIdReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOADealListByPositionIdReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOADealListByPositionIdReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.positionId = reader.int64();
            break;
          }
          case 4: {
            message.fromTimestamp = reader.int64();
            break;
          }
          case 5: {
            message.toTimestamp = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("fromTimestamp"))
        throw $util.ProtocolError("missing required 'fromTimestamp'", {
          instance: message,
        });
      if (!message.hasOwnProperty("toTimestamp"))
        throw $util.ProtocolError("missing required 'toTimestamp'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOADealListByPositionIdReq
     * @function getTypeUrl
     * @memberof ProtoOADealListByPositionIdReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOADealListByPositionIdReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOADealListByPositionIdReq";
    };

    return ProtoOADealListByPositionIdReq;
  })());

export const ProtoOADealListByPositionIdRes =
  ($root.ProtoOADealListByPositionIdRes = (() => {
    /**
     * Properties of a ProtoOADealListByPositionIdRes.
     * @exports IProtoOADealListByPositionIdRes
     * @interface IProtoOADealListByPositionIdRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealListByPositionIdRes payloadType
     * @property {number} ctidTraderAccountId ProtoOADealListByPositionIdRes ctidTraderAccountId
     * @property {Array.<IProtoOADeal>|null} [deal] ProtoOADealListByPositionIdRes deal
     * @property {number|null} [hasMore] ProtoOADealListByPositionIdRes hasMore
     */

    /**
     * Constructs a new ProtoOADealListByPositionIdRes.
     * @exports ProtoOADealListByPositionIdRes
     * @classdesc Represents a ProtoOADealListByPositionIdRes.
     * @implements IProtoOADealListByPositionIdRes
     * @constructor
     * @param {IProtoOADealListByPositionIdRes=} [properties] Properties to set
     */
    function ProtoOADealListByPositionIdRes(properties) {
      this.deal = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOADealListByPositionIdRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOADealListByPositionIdRes
     * @instance
     */
    ProtoOADealListByPositionIdRes.prototype.payloadType = 2180;

    /**
     * ProtoOADealListByPositionIdRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOADealListByPositionIdRes
     * @instance
     */
    ProtoOADealListByPositionIdRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealListByPositionIdRes deal.
     * @member {Array.<IProtoOADeal>} deal
     * @memberof ProtoOADealListByPositionIdRes
     * @instance
     */
    ProtoOADealListByPositionIdRes.prototype.deal = $util.emptyArray;

    /**
     * ProtoOADealListByPositionIdRes hasMore.
     * @member {number} hasMore
     * @memberof ProtoOADealListByPositionIdRes
     * @instance
     */
    ProtoOADealListByPositionIdRes.prototype.hasMore = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOADealListByPositionIdRes instance using the specified properties.
     * @function create
     * @memberof ProtoOADealListByPositionIdRes
     * @static
     * @param {IProtoOADealListByPositionIdRes=} [properties] Properties to set
     * @returns {ProtoOADealListByPositionIdRes} ProtoOADealListByPositionIdRes instance
     */
    ProtoOADealListByPositionIdRes.create = function create(properties) {
      return new ProtoOADealListByPositionIdRes(properties);
    };

    /**
     * Encodes the specified ProtoOADealListByPositionIdRes message. Does not implicitly {@link ProtoOADealListByPositionIdRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOADealListByPositionIdRes
     * @static
     * @param {IProtoOADealListByPositionIdRes} message ProtoOADealListByPositionIdRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOADealListByPositionIdRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.deal != null && message.deal.length)
        for (let i = 0; i < message.deal.length; ++i)
          $root.ProtoOADeal.encode(
            message.deal[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      if (
        message.hasMore != null &&
        Object.hasOwnProperty.call(message, "hasMore")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.hasMore);
      return writer;
    };

    /**
     * Decodes a ProtoOADealListByPositionIdRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOADealListByPositionIdRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOADealListByPositionIdRes} ProtoOADealListByPositionIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOADealListByPositionIdRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOADealListByPositionIdRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.deal && message.deal.length)) message.deal = [];
            message.deal.push(
              $root.ProtoOADeal.decode(reader, reader.uint32()),
            );
            break;
          }
          case 4: {
            message.hasMore = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOADealListByPositionIdRes
     * @function getTypeUrl
     * @memberof ProtoOADealListByPositionIdRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOADealListByPositionIdRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOADealListByPositionIdRes";
    };

    return ProtoOADealListByPositionIdRes;
  })());

export const ProtoOADealOffsetListReq = ($root.ProtoOADealOffsetListReq =
  (() => {
    /**
     * Properties of a ProtoOADealOffsetListReq.
     * @exports IProtoOADealOffsetListReq
     * @interface IProtoOADealOffsetListReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealOffsetListReq payloadType
     * @property {number} ctidTraderAccountId ProtoOADealOffsetListReq ctidTraderAccountId
     * @property {number} dealId ProtoOADealOffsetListReq dealId
     */

    /**
     * Constructs a new ProtoOADealOffsetListReq.
     * @exports ProtoOADealOffsetListReq
     * @classdesc Represents a ProtoOADealOffsetListReq.
     * @implements IProtoOADealOffsetListReq
     * @constructor
     * @param {IProtoOADealOffsetListReq=} [properties] Properties to set
     */
    function ProtoOADealOffsetListReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOADealOffsetListReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOADealOffsetListReq
     * @instance
     */
    ProtoOADealOffsetListReq.prototype.payloadType = 2185;

    /**
     * ProtoOADealOffsetListReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOADealOffsetListReq
     * @instance
     */
    ProtoOADealOffsetListReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealOffsetListReq dealId.
     * @member {number} dealId
     * @memberof ProtoOADealOffsetListReq
     * @instance
     */
    ProtoOADealOffsetListReq.prototype.dealId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOADealOffsetListReq instance using the specified properties.
     * @function create
     * @memberof ProtoOADealOffsetListReq
     * @static
     * @param {IProtoOADealOffsetListReq=} [properties] Properties to set
     * @returns {ProtoOADealOffsetListReq} ProtoOADealOffsetListReq instance
     */
    ProtoOADealOffsetListReq.create = function create(properties) {
      return new ProtoOADealOffsetListReq(properties);
    };

    /**
     * Encodes the specified ProtoOADealOffsetListReq message. Does not implicitly {@link ProtoOADealOffsetListReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOADealOffsetListReq
     * @static
     * @param {IProtoOADealOffsetListReq} message ProtoOADealOffsetListReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOADealOffsetListReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.dealId);
      return writer;
    };

    /**
     * Decodes a ProtoOADealOffsetListReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOADealOffsetListReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOADealOffsetListReq} ProtoOADealOffsetListReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOADealOffsetListReq.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOADealOffsetListReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.dealId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("dealId"))
        throw $util.ProtocolError("missing required 'dealId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOADealOffsetListReq
     * @function getTypeUrl
     * @memberof ProtoOADealOffsetListReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOADealOffsetListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOADealOffsetListReq";
    };

    return ProtoOADealOffsetListReq;
  })());

export const ProtoOADealOffsetListRes = ($root.ProtoOADealOffsetListRes =
  (() => {
    /**
     * Properties of a ProtoOADealOffsetListRes.
     * @exports IProtoOADealOffsetListRes
     * @interface IProtoOADealOffsetListRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOADealOffsetListRes payloadType
     * @property {number} ctidTraderAccountId ProtoOADealOffsetListRes ctidTraderAccountId
     * @property {Array.<IProtoOADealOffset>|null} [offsetBy] ProtoOADealOffsetListRes offsetBy
     * @property {Array.<IProtoOADealOffset>|null} [offsetting] ProtoOADealOffsetListRes offsetting
     */

    /**
     * Constructs a new ProtoOADealOffsetListRes.
     * @exports ProtoOADealOffsetListRes
     * @classdesc Represents a ProtoOADealOffsetListRes.
     * @implements IProtoOADealOffsetListRes
     * @constructor
     * @param {IProtoOADealOffsetListRes=} [properties] Properties to set
     */
    function ProtoOADealOffsetListRes(properties) {
      this.offsetBy = [];
      this.offsetting = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOADealOffsetListRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOADealOffsetListRes
     * @instance
     */
    ProtoOADealOffsetListRes.prototype.payloadType = 2186;

    /**
     * ProtoOADealOffsetListRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOADealOffsetListRes
     * @instance
     */
    ProtoOADealOffsetListRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOADealOffsetListRes offsetBy.
     * @member {Array.<IProtoOADealOffset>} offsetBy
     * @memberof ProtoOADealOffsetListRes
     * @instance
     */
    ProtoOADealOffsetListRes.prototype.offsetBy = $util.emptyArray;

    /**
     * ProtoOADealOffsetListRes offsetting.
     * @member {Array.<IProtoOADealOffset>} offsetting
     * @memberof ProtoOADealOffsetListRes
     * @instance
     */
    ProtoOADealOffsetListRes.prototype.offsetting = $util.emptyArray;

    /**
     * Creates a new ProtoOADealOffsetListRes instance using the specified properties.
     * @function create
     * @memberof ProtoOADealOffsetListRes
     * @static
     * @param {IProtoOADealOffsetListRes=} [properties] Properties to set
     * @returns {ProtoOADealOffsetListRes} ProtoOADealOffsetListRes instance
     */
    ProtoOADealOffsetListRes.create = function create(properties) {
      return new ProtoOADealOffsetListRes(properties);
    };

    /**
     * Encodes the specified ProtoOADealOffsetListRes message. Does not implicitly {@link ProtoOADealOffsetListRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOADealOffsetListRes
     * @static
     * @param {IProtoOADealOffsetListRes} message ProtoOADealOffsetListRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOADealOffsetListRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.offsetBy != null && message.offsetBy.length)
        for (let i = 0; i < message.offsetBy.length; ++i)
          $root.ProtoOADealOffset.encode(
            message.offsetBy[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      if (message.offsetting != null && message.offsetting.length)
        for (let i = 0; i < message.offsetting.length; ++i)
          $root.ProtoOADealOffset.encode(
            message.offsetting[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
          ).ldelim();
      return writer;
    };

    /**
     * Decodes a ProtoOADealOffsetListRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOADealOffsetListRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOADealOffsetListRes} ProtoOADealOffsetListRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOADealOffsetListRes.decode = function decode(reader, length, error) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOADealOffsetListRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.offsetBy && message.offsetBy.length))
              message.offsetBy = [];
            message.offsetBy.push(
              $root.ProtoOADealOffset.decode(reader, reader.uint32()),
            );
            break;
          }
          case 4: {
            if (!(message.offsetting && message.offsetting.length))
              message.offsetting = [];
            message.offsetting.push(
              $root.ProtoOADealOffset.decode(reader, reader.uint32()),
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOADealOffsetListRes
     * @function getTypeUrl
     * @memberof ProtoOADealOffsetListRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOADealOffsetListRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOADealOffsetListRes";
    };

    return ProtoOADealOffsetListRes;
  })());

export const ProtoOAGetPositionUnrealizedPnLReq =
  ($root.ProtoOAGetPositionUnrealizedPnLReq = (() => {
    /**
     * Properties of a ProtoOAGetPositionUnrealizedPnLReq.
     * @exports IProtoOAGetPositionUnrealizedPnLReq
     * @interface IProtoOAGetPositionUnrealizedPnLReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetPositionUnrealizedPnLReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAGetPositionUnrealizedPnLReq ctidTraderAccountId
     */

    /**
     * Constructs a new ProtoOAGetPositionUnrealizedPnLReq.
     * @exports ProtoOAGetPositionUnrealizedPnLReq
     * @classdesc Represents a ProtoOAGetPositionUnrealizedPnLReq.
     * @implements IProtoOAGetPositionUnrealizedPnLReq
     * @constructor
     * @param {IProtoOAGetPositionUnrealizedPnLReq=} [properties] Properties to set
     */
    function ProtoOAGetPositionUnrealizedPnLReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetPositionUnrealizedPnLReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLReq.prototype.payloadType = 2187;

    /**
     * ProtoOAGetPositionUnrealizedPnLReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLReq.prototype.ctidTraderAccountId =
      $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new ProtoOAGetPositionUnrealizedPnLReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @static
     * @param {IProtoOAGetPositionUnrealizedPnLReq=} [properties] Properties to set
     * @returns {ProtoOAGetPositionUnrealizedPnLReq} ProtoOAGetPositionUnrealizedPnLReq instance
     */
    ProtoOAGetPositionUnrealizedPnLReq.create = function create(properties) {
      return new ProtoOAGetPositionUnrealizedPnLReq(properties);
    };

    /**
     * Encodes the specified ProtoOAGetPositionUnrealizedPnLReq message. Does not implicitly {@link ProtoOAGetPositionUnrealizedPnLReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @static
     * @param {IProtoOAGetPositionUnrealizedPnLReq} message ProtoOAGetPositionUnrealizedPnLReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetPositionUnrealizedPnLReq.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      return writer;
    };

    /**
     * Decodes a ProtoOAGetPositionUnrealizedPnLReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetPositionUnrealizedPnLReq} ProtoOAGetPositionUnrealizedPnLReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetPositionUnrealizedPnLReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetPositionUnrealizedPnLReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetPositionUnrealizedPnLReq
     * @function getTypeUrl
     * @memberof ProtoOAGetPositionUnrealizedPnLReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetPositionUnrealizedPnLReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetPositionUnrealizedPnLReq";
    };

    return ProtoOAGetPositionUnrealizedPnLReq;
  })());

export const ProtoOAGetPositionUnrealizedPnLRes =
  ($root.ProtoOAGetPositionUnrealizedPnLRes = (() => {
    /**
     * Properties of a ProtoOAGetPositionUnrealizedPnLRes.
     * @exports IProtoOAGetPositionUnrealizedPnLRes
     * @interface IProtoOAGetPositionUnrealizedPnLRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAGetPositionUnrealizedPnLRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAGetPositionUnrealizedPnLRes ctidTraderAccountId
     * @property {Array.<IProtoOAPositionUnrealizedPnL>|null} [positionUnrealizedPnL] ProtoOAGetPositionUnrealizedPnLRes positionUnrealizedPnL
     * @property {number} moneyDigits ProtoOAGetPositionUnrealizedPnLRes moneyDigits
     */

    /**
     * Constructs a new ProtoOAGetPositionUnrealizedPnLRes.
     * @exports ProtoOAGetPositionUnrealizedPnLRes
     * @classdesc Represents a ProtoOAGetPositionUnrealizedPnLRes.
     * @implements IProtoOAGetPositionUnrealizedPnLRes
     * @constructor
     * @param {IProtoOAGetPositionUnrealizedPnLRes=} [properties] Properties to set
     */
    function ProtoOAGetPositionUnrealizedPnLRes(properties) {
      this.positionUnrealizedPnL = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAGetPositionUnrealizedPnLRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLRes.prototype.payloadType = 2188;

    /**
     * ProtoOAGetPositionUnrealizedPnLRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLRes.prototype.ctidTraderAccountId =
      $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * ProtoOAGetPositionUnrealizedPnLRes positionUnrealizedPnL.
     * @member {Array.<IProtoOAPositionUnrealizedPnL>} positionUnrealizedPnL
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLRes.prototype.positionUnrealizedPnL =
      $util.emptyArray;

    /**
     * ProtoOAGetPositionUnrealizedPnLRes moneyDigits.
     * @member {number} moneyDigits
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @instance
     */
    ProtoOAGetPositionUnrealizedPnLRes.prototype.moneyDigits = 0;

    /**
     * Creates a new ProtoOAGetPositionUnrealizedPnLRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @static
     * @param {IProtoOAGetPositionUnrealizedPnLRes=} [properties] Properties to set
     * @returns {ProtoOAGetPositionUnrealizedPnLRes} ProtoOAGetPositionUnrealizedPnLRes instance
     */
    ProtoOAGetPositionUnrealizedPnLRes.create = function create(properties) {
      return new ProtoOAGetPositionUnrealizedPnLRes(properties);
    };

    /**
     * Encodes the specified ProtoOAGetPositionUnrealizedPnLRes message. Does not implicitly {@link ProtoOAGetPositionUnrealizedPnLRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @static
     * @param {IProtoOAGetPositionUnrealizedPnLRes} message ProtoOAGetPositionUnrealizedPnLRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAGetPositionUnrealizedPnLRes.encode = function encode(
      message,
      writer,
    ) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (
        message.positionUnrealizedPnL != null &&
        message.positionUnrealizedPnL.length
      )
        for (let i = 0; i < message.positionUnrealizedPnL.length; ++i)
          $root.ProtoOAPositionUnrealizedPnL.encode(
            message.positionUnrealizedPnL[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.moneyDigits);
      return writer;
    };

    /**
     * Decodes a ProtoOAGetPositionUnrealizedPnLRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAGetPositionUnrealizedPnLRes} ProtoOAGetPositionUnrealizedPnLRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAGetPositionUnrealizedPnLRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAGetPositionUnrealizedPnLRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (
              !(
                message.positionUnrealizedPnL &&
                message.positionUnrealizedPnL.length
              )
            )
              message.positionUnrealizedPnL = [];
            message.positionUnrealizedPnL.push(
              $root.ProtoOAPositionUnrealizedPnL.decode(
                reader,
                reader.uint32(),
              ),
            );
            break;
          }
          case 4: {
            message.moneyDigits = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("moneyDigits"))
        throw $util.ProtocolError("missing required 'moneyDigits'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAGetPositionUnrealizedPnLRes
     * @function getTypeUrl
     * @memberof ProtoOAGetPositionUnrealizedPnLRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAGetPositionUnrealizedPnLRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAGetPositionUnrealizedPnLRes";
    };

    return ProtoOAGetPositionUnrealizedPnLRes;
  })());

export const ProtoOAOrderDetailsReq = ($root.ProtoOAOrderDetailsReq = (() => {
  /**
   * Properties of a ProtoOAOrderDetailsReq.
   * @exports IProtoOAOrderDetailsReq
   * @interface IProtoOAOrderDetailsReq
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderDetailsReq payloadType
   * @property {number} ctidTraderAccountId ProtoOAOrderDetailsReq ctidTraderAccountId
   * @property {number} orderId ProtoOAOrderDetailsReq orderId
   */

  /**
   * Constructs a new ProtoOAOrderDetailsReq.
   * @exports ProtoOAOrderDetailsReq
   * @classdesc Represents a ProtoOAOrderDetailsReq.
   * @implements IProtoOAOrderDetailsReq
   * @constructor
   * @param {IProtoOAOrderDetailsReq=} [properties] Properties to set
   */
  function ProtoOAOrderDetailsReq(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderDetailsReq payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderDetailsReq
   * @instance
   */
  ProtoOAOrderDetailsReq.prototype.payloadType = 2181;

  /**
   * ProtoOAOrderDetailsReq ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAOrderDetailsReq
   * @instance
   */
  ProtoOAOrderDetailsReq.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderDetailsReq orderId.
   * @member {number} orderId
   * @memberof ProtoOAOrderDetailsReq
   * @instance
   */
  ProtoOAOrderDetailsReq.prototype.orderId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * Creates a new ProtoOAOrderDetailsReq instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderDetailsReq
   * @static
   * @param {IProtoOAOrderDetailsReq=} [properties] Properties to set
   * @returns {ProtoOAOrderDetailsReq} ProtoOAOrderDetailsReq instance
   */
  ProtoOAOrderDetailsReq.create = function create(properties) {
    return new ProtoOAOrderDetailsReq(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderDetailsReq message. Does not implicitly {@link ProtoOAOrderDetailsReq.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderDetailsReq
   * @static
   * @param {IProtoOAOrderDetailsReq} message ProtoOAOrderDetailsReq message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderDetailsReq.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.orderId);
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderDetailsReq message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderDetailsReq
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderDetailsReq} ProtoOAOrderDetailsReq
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderDetailsReq.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderDetailsReq();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.orderId = reader.int64();
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("orderId"))
      throw $util.ProtocolError("missing required 'orderId'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrderDetailsReq
   * @function getTypeUrl
   * @memberof ProtoOAOrderDetailsReq
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrderDetailsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrderDetailsReq";
  };

  return ProtoOAOrderDetailsReq;
})());

export const ProtoOAOrderDetailsRes = ($root.ProtoOAOrderDetailsRes = (() => {
  /**
   * Properties of a ProtoOAOrderDetailsRes.
   * @exports IProtoOAOrderDetailsRes
   * @interface IProtoOAOrderDetailsRes
   * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderDetailsRes payloadType
   * @property {number} ctidTraderAccountId ProtoOAOrderDetailsRes ctidTraderAccountId
   * @property {IProtoOAOrder} order ProtoOAOrderDetailsRes order
   * @property {Array.<IProtoOADeal>|null} [deal] ProtoOAOrderDetailsRes deal
   */

  /**
   * Constructs a new ProtoOAOrderDetailsRes.
   * @exports ProtoOAOrderDetailsRes
   * @classdesc Represents a ProtoOAOrderDetailsRes.
   * @implements IProtoOAOrderDetailsRes
   * @constructor
   * @param {IProtoOAOrderDetailsRes=} [properties] Properties to set
   */
  function ProtoOAOrderDetailsRes(properties) {
    this.deal = [];
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }

  /**
   * ProtoOAOrderDetailsRes payloadType.
   * @member {ProtoOAPayloadType} payloadType
   * @memberof ProtoOAOrderDetailsRes
   * @instance
   */
  ProtoOAOrderDetailsRes.prototype.payloadType = 2182;

  /**
   * ProtoOAOrderDetailsRes ctidTraderAccountId.
   * @member {number} ctidTraderAccountId
   * @memberof ProtoOAOrderDetailsRes
   * @instance
   */
  ProtoOAOrderDetailsRes.prototype.ctidTraderAccountId = $util.Long
    ? $util.Long.fromBits(0, 0, false)
    : 0;

  /**
   * ProtoOAOrderDetailsRes order.
   * @member {IProtoOAOrder} order
   * @memberof ProtoOAOrderDetailsRes
   * @instance
   */
  ProtoOAOrderDetailsRes.prototype.order = null;

  /**
   * ProtoOAOrderDetailsRes deal.
   * @member {Array.<IProtoOADeal>} deal
   * @memberof ProtoOAOrderDetailsRes
   * @instance
   */
  ProtoOAOrderDetailsRes.prototype.deal = $util.emptyArray;

  /**
   * Creates a new ProtoOAOrderDetailsRes instance using the specified properties.
   * @function create
   * @memberof ProtoOAOrderDetailsRes
   * @static
   * @param {IProtoOAOrderDetailsRes=} [properties] Properties to set
   * @returns {ProtoOAOrderDetailsRes} ProtoOAOrderDetailsRes instance
   */
  ProtoOAOrderDetailsRes.create = function create(properties) {
    return new ProtoOAOrderDetailsRes(properties);
  };

  /**
   * Encodes the specified ProtoOAOrderDetailsRes message. Does not implicitly {@link ProtoOAOrderDetailsRes.verify|verify} messages.
   * @function encode
   * @memberof ProtoOAOrderDetailsRes
   * @static
   * @param {IProtoOAOrderDetailsRes} message ProtoOAOrderDetailsRes message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ProtoOAOrderDetailsRes.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (
      message.payloadType != null &&
      Object.hasOwnProperty.call(message, "payloadType")
    )
      writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
    writer
      .uint32(/* id 2, wireType 0 =*/ 16)
      .int64(message.ctidTraderAccountId);
    $root.ProtoOAOrder.encode(
      message.order,
      writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
    ).ldelim();
    if (message.deal != null && message.deal.length)
      for (let i = 0; i < message.deal.length; ++i)
        $root.ProtoOADeal.encode(
          message.deal[i],
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork(),
        ).ldelim();
    return writer;
  };

  /**
   * Decodes a ProtoOAOrderDetailsRes message from the specified reader or buffer.
   * @function decode
   * @memberof ProtoOAOrderDetailsRes
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ProtoOAOrderDetailsRes} ProtoOAOrderDetailsRes
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ProtoOAOrderDetailsRes.decode = function decode(reader, length, error) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    let end = length === undefined ? reader.len : reader.pos + length,
      message = new $root.ProtoOAOrderDetailsRes();
    while (reader.pos < end) {
      let tag = reader.uint32();
      if (tag === error) break;
      switch (tag >>> 3) {
        case 1: {
          message.payloadType = reader.int32();
          break;
        }
        case 2: {
          message.ctidTraderAccountId = reader.int64();
          break;
        }
        case 3: {
          message.order = $root.ProtoOAOrder.decode(reader, reader.uint32());
          break;
        }
        case 4: {
          if (!(message.deal && message.deal.length)) message.deal = [];
          message.deal.push($root.ProtoOADeal.decode(reader, reader.uint32()));
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    if (!message.hasOwnProperty("ctidTraderAccountId"))
      throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
        instance: message,
      });
    if (!message.hasOwnProperty("order"))
      throw $util.ProtocolError("missing required 'order'", {
        instance: message,
      });
    return message;
  };

  /**
   * Gets the default type url for ProtoOAOrderDetailsRes
   * @function getTypeUrl
   * @memberof ProtoOAOrderDetailsRes
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ProtoOAOrderDetailsRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = "type.googleapis.com";
    }
    return typeUrlPrefix + "/ProtoOAOrderDetailsRes";
  };

  return ProtoOAOrderDetailsRes;
})());

export const ProtoOAOrderListByPositionIdReq =
  ($root.ProtoOAOrderListByPositionIdReq = (() => {
    /**
     * Properties of a ProtoOAOrderListByPositionIdReq.
     * @exports IProtoOAOrderListByPositionIdReq
     * @interface IProtoOAOrderListByPositionIdReq
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderListByPositionIdReq payloadType
     * @property {number} ctidTraderAccountId ProtoOAOrderListByPositionIdReq ctidTraderAccountId
     * @property {number} positionId ProtoOAOrderListByPositionIdReq positionId
     * @property {number|null} [fromTimestamp] ProtoOAOrderListByPositionIdReq fromTimestamp
     * @property {number|null} [toTimestamp] ProtoOAOrderListByPositionIdReq toTimestamp
     */

    /**
     * Constructs a new ProtoOAOrderListByPositionIdReq.
     * @exports ProtoOAOrderListByPositionIdReq
     * @classdesc Represents a ProtoOAOrderListByPositionIdReq.
     * @implements IProtoOAOrderListByPositionIdReq
     * @constructor
     * @param {IProtoOAOrderListByPositionIdReq=} [properties] Properties to set
     */
    function ProtoOAOrderListByPositionIdReq(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAOrderListByPositionIdReq payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAOrderListByPositionIdReq
     * @instance
     */
    ProtoOAOrderListByPositionIdReq.prototype.payloadType = 2183;

    /**
     * ProtoOAOrderListByPositionIdReq ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAOrderListByPositionIdReq
     * @instance
     */
    ProtoOAOrderListByPositionIdReq.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAOrderListByPositionIdReq positionId.
     * @member {number} positionId
     * @memberof ProtoOAOrderListByPositionIdReq
     * @instance
     */
    ProtoOAOrderListByPositionIdReq.prototype.positionId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAOrderListByPositionIdReq fromTimestamp.
     * @member {number} fromTimestamp
     * @memberof ProtoOAOrderListByPositionIdReq
     * @instance
     */
    ProtoOAOrderListByPositionIdReq.prototype.fromTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAOrderListByPositionIdReq toTimestamp.
     * @member {number} toTimestamp
     * @memberof ProtoOAOrderListByPositionIdReq
     * @instance
     */
    ProtoOAOrderListByPositionIdReq.prototype.toTimestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ProtoOAOrderListByPositionIdReq instance using the specified properties.
     * @function create
     * @memberof ProtoOAOrderListByPositionIdReq
     * @static
     * @param {IProtoOAOrderListByPositionIdReq=} [properties] Properties to set
     * @returns {ProtoOAOrderListByPositionIdReq} ProtoOAOrderListByPositionIdReq instance
     */
    ProtoOAOrderListByPositionIdReq.create = function create(properties) {
      return new ProtoOAOrderListByPositionIdReq(properties);
    };

    /**
     * Encodes the specified ProtoOAOrderListByPositionIdReq message. Does not implicitly {@link ProtoOAOrderListByPositionIdReq.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAOrderListByPositionIdReq
     * @static
     * @param {IProtoOAOrderListByPositionIdReq} message ProtoOAOrderListByPositionIdReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAOrderListByPositionIdReq.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.positionId);
      if (
        message.fromTimestamp != null &&
        Object.hasOwnProperty.call(message, "fromTimestamp")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.fromTimestamp);
      if (
        message.toTimestamp != null &&
        Object.hasOwnProperty.call(message, "toTimestamp")
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.toTimestamp);
      return writer;
    };

    /**
     * Decodes a ProtoOAOrderListByPositionIdReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAOrderListByPositionIdReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAOrderListByPositionIdReq} ProtoOAOrderListByPositionIdReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAOrderListByPositionIdReq.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAOrderListByPositionIdReq();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            message.positionId = reader.int64();
            break;
          }
          case 4: {
            message.fromTimestamp = reader.int64();
            break;
          }
          case 5: {
            message.toTimestamp = reader.int64();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("positionId"))
        throw $util.ProtocolError("missing required 'positionId'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAOrderListByPositionIdReq
     * @function getTypeUrl
     * @memberof ProtoOAOrderListByPositionIdReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAOrderListByPositionIdReq.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAOrderListByPositionIdReq";
    };

    return ProtoOAOrderListByPositionIdReq;
  })());

export const ProtoOAOrderListByPositionIdRes =
  ($root.ProtoOAOrderListByPositionIdRes = (() => {
    /**
     * Properties of a ProtoOAOrderListByPositionIdRes.
     * @exports IProtoOAOrderListByPositionIdRes
     * @interface IProtoOAOrderListByPositionIdRes
     * @property {ProtoOAPayloadType|null} [payloadType] ProtoOAOrderListByPositionIdRes payloadType
     * @property {number} ctidTraderAccountId ProtoOAOrderListByPositionIdRes ctidTraderAccountId
     * @property {Array.<IProtoOAOrder>|null} [order] ProtoOAOrderListByPositionIdRes order
     * @property {boolean} hasMore ProtoOAOrderListByPositionIdRes hasMore
     */

    /**
     * Constructs a new ProtoOAOrderListByPositionIdRes.
     * @exports ProtoOAOrderListByPositionIdRes
     * @classdesc Represents a ProtoOAOrderListByPositionIdRes.
     * @implements IProtoOAOrderListByPositionIdRes
     * @constructor
     * @param {IProtoOAOrderListByPositionIdRes=} [properties] Properties to set
     */
    function ProtoOAOrderListByPositionIdRes(properties) {
      this.order = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoOAOrderListByPositionIdRes payloadType.
     * @member {ProtoOAPayloadType} payloadType
     * @memberof ProtoOAOrderListByPositionIdRes
     * @instance
     */
    ProtoOAOrderListByPositionIdRes.prototype.payloadType = 2184;

    /**
     * ProtoOAOrderListByPositionIdRes ctidTraderAccountId.
     * @member {number} ctidTraderAccountId
     * @memberof ProtoOAOrderListByPositionIdRes
     * @instance
     */
    ProtoOAOrderListByPositionIdRes.prototype.ctidTraderAccountId = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * ProtoOAOrderListByPositionIdRes order.
     * @member {Array.<IProtoOAOrder>} order
     * @memberof ProtoOAOrderListByPositionIdRes
     * @instance
     */
    ProtoOAOrderListByPositionIdRes.prototype.order = $util.emptyArray;

    /**
     * ProtoOAOrderListByPositionIdRes hasMore.
     * @member {boolean} hasMore
     * @memberof ProtoOAOrderListByPositionIdRes
     * @instance
     */
    ProtoOAOrderListByPositionIdRes.prototype.hasMore = false;

    /**
     * Creates a new ProtoOAOrderListByPositionIdRes instance using the specified properties.
     * @function create
     * @memberof ProtoOAOrderListByPositionIdRes
     * @static
     * @param {IProtoOAOrderListByPositionIdRes=} [properties] Properties to set
     * @returns {ProtoOAOrderListByPositionIdRes} ProtoOAOrderListByPositionIdRes instance
     */
    ProtoOAOrderListByPositionIdRes.create = function create(properties) {
      return new ProtoOAOrderListByPositionIdRes(properties);
    };

    /**
     * Encodes the specified ProtoOAOrderListByPositionIdRes message. Does not implicitly {@link ProtoOAOrderListByPositionIdRes.verify|verify} messages.
     * @function encode
     * @memberof ProtoOAOrderListByPositionIdRes
     * @static
     * @param {IProtoOAOrderListByPositionIdRes} message ProtoOAOrderListByPositionIdRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoOAOrderListByPositionIdRes.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.payloadType != null &&
        Object.hasOwnProperty.call(message, "payloadType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.payloadType);
      writer
        .uint32(/* id 2, wireType 0 =*/ 16)
        .int64(message.ctidTraderAccountId);
      if (message.order != null && message.order.length)
        for (let i = 0; i < message.order.length; ++i)
          $root.ProtoOAOrder.encode(
            message.order[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork(),
          ).ldelim();
      writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.hasMore);
      return writer;
    };

    /**
     * Decodes a ProtoOAOrderListByPositionIdRes message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoOAOrderListByPositionIdRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoOAOrderListByPositionIdRes} ProtoOAOrderListByPositionIdRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoOAOrderListByPositionIdRes.decode = function decode(
      reader,
      length,
      error,
    ) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.ProtoOAOrderListByPositionIdRes();
      while (reader.pos < end) {
        let tag = reader.uint32();
        if (tag === error) break;
        switch (tag >>> 3) {
          case 1: {
            message.payloadType = reader.int32();
            break;
          }
          case 2: {
            message.ctidTraderAccountId = reader.int64();
            break;
          }
          case 3: {
            if (!(message.order && message.order.length)) message.order = [];
            message.order.push(
              $root.ProtoOAOrder.decode(reader, reader.uint32()),
            );
            break;
          }
          case 4: {
            message.hasMore = reader.bool();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      if (!message.hasOwnProperty("ctidTraderAccountId"))
        throw $util.ProtocolError("missing required 'ctidTraderAccountId'", {
          instance: message,
        });
      if (!message.hasOwnProperty("hasMore"))
        throw $util.ProtocolError("missing required 'hasMore'", {
          instance: message,
        });
      return message;
    };

    /**
     * Gets the default type url for ProtoOAOrderListByPositionIdRes
     * @function getTypeUrl
     * @memberof ProtoOAOrderListByPositionIdRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoOAOrderListByPositionIdRes.getTypeUrl = function getTypeUrl(
      typeUrlPrefix,
    ) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = "type.googleapis.com";
      }
      return typeUrlPrefix + "/ProtoOAOrderListByPositionIdRes";
    };

    return ProtoOAOrderListByPositionIdRes;
  })());

export { $root as default };
