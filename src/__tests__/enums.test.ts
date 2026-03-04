import { describe, expect, test } from "bun:test";
import {
	AccessRights,
	AccountType,
	DealStatus,
	ExecutionType,
	OrderStatus,
	OrderType,
	PayloadType,
	PositionStatus,
	TimeInForce,
	TradeSide,
	TrendbarPeriod,
} from "../protocol/enums.js";

describe("PayloadType", () => {
	test("protocol envelope types", () => {
		expect(PayloadType.PROTO_MESSAGE).toBe(5);
		expect(PayloadType.ERROR_RES).toBe(50);
		expect(PayloadType.HEARTBEAT_EVENT).toBe(51);
	});

	test("auth payload types", () => {
		expect(PayloadType.APP_AUTH_REQ).toBe(2100);
		expect(PayloadType.APP_AUTH_RES).toBe(2101);
		expect(PayloadType.ACCOUNT_AUTH_REQ).toBe(2102);
		expect(PayloadType.ACCOUNT_AUTH_RES).toBe(2103);
	});

	test("trading payload types", () => {
		expect(PayloadType.NEW_ORDER_REQ).toBe(2106);
		expect(PayloadType.CLOSE_POSITION_REQ).toBe(2111);
		expect(PayloadType.AMEND_POSITION_SLTP_REQ).toBe(2110);
		expect(PayloadType.EXECUTION_EVENT).toBe(2126);
	});

	test("market data payload types", () => {
		expect(PayloadType.SYMBOLS_LIST_REQ).toBe(2114);
		expect(PayloadType.SYMBOLS_LIST_RES).toBe(2115);
		expect(PayloadType.SUBSCRIBE_SPOTS_REQ).toBe(2127);
		expect(PayloadType.SPOT_EVENT).toBe(2131);
		expect(PayloadType.GET_TRENDBARS_REQ).toBe(2137);
		expect(PayloadType.GET_TRENDBARS_RES).toBe(2138);
	});

	test("token invalidation event", () => {
		expect(PayloadType.ACCOUNTS_TOKEN_INVALIDATED_EVENT).toBe(2147);
	});
});

describe("OrderType", () => {
	test("has correct values", () => {
		expect(OrderType.MARKET).toBe(1);
		expect(OrderType.LIMIT).toBe(2);
		expect(OrderType.STOP).toBe(3);
		expect(OrderType.STOP_LIMIT).toBe(6);
	});
});

describe("TradeSide", () => {
	test("has correct values", () => {
		expect(TradeSide.BUY).toBe(1);
		expect(TradeSide.SELL).toBe(2);
	});
});

describe("TimeInForce", () => {
	test("has correct values", () => {
		expect(TimeInForce.GOOD_TILL_DATE).toBe(1);
		expect(TimeInForce.GOOD_TILL_CANCEL).toBe(2);
		expect(TimeInForce.IMMEDIATE_OR_CANCEL).toBe(3);
		expect(TimeInForce.FILL_OR_KILL).toBe(4);
	});
});

describe("ExecutionType", () => {
	test("has correct values", () => {
		expect(ExecutionType.ORDER_ACCEPTED).toBe(2);
		expect(ExecutionType.ORDER_FILLED).toBe(3);
		expect(ExecutionType.ORDER_CANCELLED).toBe(5);
		expect(ExecutionType.ORDER_REJECTED).toBe(7);
	});
});

describe("PositionStatus", () => {
	test("has correct values", () => {
		expect(PositionStatus.OPEN).toBe(1);
		expect(PositionStatus.CLOSED).toBe(2);
		expect(PositionStatus.CREATED).toBe(3);
		expect(PositionStatus.ERROR).toBe(4);
	});
});

describe("OrderStatus", () => {
	test("has correct values", () => {
		expect(OrderStatus.ACCEPTED).toBe(1);
		expect(OrderStatus.FILLED).toBe(2);
		expect(OrderStatus.REJECTED).toBe(3);
		expect(OrderStatus.CANCELLED).toBe(5);
	});
});

describe("DealStatus", () => {
	test("has correct values", () => {
		expect(DealStatus.FILLED).toBe(2);
		expect(DealStatus.PARTIALLY_FILLED).toBe(3);
		expect(DealStatus.REJECTED).toBe(4);
		expect(DealStatus.ERROR).toBe(6);
	});
});

describe("TrendbarPeriod", () => {
	test("timeframe values are correct", () => {
		expect(TrendbarPeriod.M1).toBe(1);
		expect(TrendbarPeriod.M5).toBe(5);
		expect(TrendbarPeriod.M15).toBe(7);
		expect(TrendbarPeriod.H1).toBe(9);
		expect(TrendbarPeriod.H4).toBe(10);
		expect(TrendbarPeriod.D1).toBe(12);
		expect(TrendbarPeriod.W1).toBe(13);
	});
});

describe("AccessRights", () => {
	test("has correct values", () => {
		expect(AccessRights.FULL_ACCESS).toBe(0);
		expect(AccessRights.CLOSE_ONLY).toBe(1);
		expect(AccessRights.NO_TRADING).toBe(2);
		expect(AccessRights.NO_LOGIN).toBe(3);
	});
});

describe("AccountType", () => {
	test("has correct values", () => {
		expect(AccountType.HEDGED).toBe(0);
		expect(AccountType.NETTED).toBe(1);
		expect(AccountType.SPREAD_BETTING).toBe(2);
	});
});
