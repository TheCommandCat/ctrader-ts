import type { CTraderConnection } from "../connection.js";
import { OrderTriggerMethod, OrderType, PayloadType, TimeInForce, TradeSide } from "../enums.js";
import type { ExecutionEvent, OrderErrorEvent, TrailingSLChangedEvent } from "../types.js";

/**
 * Parameters for creating a new order via the cTrader protocol. Volume is in protocol units (1 lot = 100,000).
 */
export interface NewOrderParams {
	/** Numeric symbol identifier */
	symbolId: number;
	/** BUY or SELL */
	tradeSide: TradeSide;
	/** Volume in protocol units (1 lot = 100,000 units). Use lotsToUnits() to convert. */
	volume: number;
	label?: string;
	comment?: string;
	clientOrderId?: string;
	/** Existing position ID — set this to add volume to an existing position */
	positionId?: number;
	stopLoss?: number;
	takeProfit?: number;
	/** Relative SL/TP distance in protocol units (use resolveSlTp helper for human-friendly conversion) */
	relativeStopLoss?: number;
	/** Relative SL/TP distance in protocol units (use resolveSlTp helper for human-friendly conversion) */
	relativeTakeProfit?: number;
	guaranteedStopLoss?: boolean;
	trailingStopLoss?: boolean;
	stopTriggerMethod?: OrderTriggerMethod;
}

/**
 * Parameters for a limit order (fill at price or better)
 */
export interface LimitOrderParams extends NewOrderParams {
	limitPrice: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

/**
 * Parameters for a stop order (triggers at price)
 */
export interface StopOrderParams extends NewOrderParams {
	stopPrice: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

/**
 * Parameters for a market range order (market with slippage control)
 */
export interface MarketRangeOrderParams extends NewOrderParams {
	baseSlippagePrice: number;
	slippageInPoints: number;
}

/**
 * Parameters for a stop-limit order (stop trigger → limit order)
 */
export interface StopLimitOrderParams extends NewOrderParams {
	stopPrice: number;
	slippageInPoints: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

/**
 * Fields to modify on an existing pending order. Only set the fields you want to change.
 */
export interface AmendOrderParams {
	volume?: number;
	limitPrice?: number;
	stopPrice?: number;
	expirationTimestamp?: number;
	stopLoss?: number;
	takeProfit?: number;
	slippageInPoints?: number;
	relativeStopLoss?: number;
	relativeTakeProfit?: number;
	guaranteedStopLoss?: boolean;
	trailingStopLoss?: boolean;
	stopTriggerMethod?: OrderTriggerMethod;
}

/**
 * Fields to modify SL/TP on an open position
 */
export interface AmendSltpParams {
	stopLoss?: number;
	takeProfit?: number;
	guaranteedStopLoss?: boolean;
	trailingStopLoss?: boolean;
	stopLossTriggerMethod?: OrderTriggerMethod;
}

/**
 * Low-level trading operations — direct protocol wrappers for order management. Use CTrader (client.ts) for the high-level API with human-friendly units.
 */
export class CTraderTrading {
	private readonly connection: CTraderConnection;
	private accountId: number;

	constructor(connection: CTraderConnection, accountId: number) {
		this.connection = connection;
		this.accountId = accountId;
	}

	setAccountId(accountId: number): void {
		this.accountId = accountId;
	}

	/**
	 * Execute a market order
	 */
	async marketOrder(params: NewOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.MARKET });
	}

	/**
	 * Place a limit order
	 */
	async limitOrder(params: LimitOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.LIMIT });
	}

	/**
	 * Place a stop order
	 */
	async stopOrder(params: StopOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.STOP });
	}

	/**
	 * Place a stop-limit order
	 */
	async stopLimitOrder(params: StopLimitOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.STOP_LIMIT });
	}

	/**
	 * Place a market range order
	 */
	async marketRangeOrder(params: MarketRangeOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.MARKET_RANGE });
	}

	/**
	 * Close a position partially or fully
	 */
	async closePosition(positionId: number, volume: number): Promise<ExecutionEvent> {
		const res = await this.connection.request(PayloadType.CLOSE_POSITION_REQ, {
			ctidTraderAccountId: this.accountId,
			positionId,
			volume,
		});
		return res as unknown as ExecutionEvent;
	}

	/**
	 * Modify SL/TP on an existing position
	 */
	async amendPositionSltp(positionId: number, params: AmendSltpParams): Promise<void> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			positionId,
		};
		if (params.stopLoss !== undefined) payload["stopLoss"] = params.stopLoss;
		if (params.takeProfit !== undefined) payload["takeProfit"] = params.takeProfit;
		if (params.guaranteedStopLoss !== undefined) payload["guaranteedStopLoss"] = params.guaranteedStopLoss;
		if (params.trailingStopLoss !== undefined) payload["trailingStopLoss"] = params.trailingStopLoss;
		if (params.stopLossTriggerMethod !== undefined) payload["stopLossTriggerMethod"] = params.stopLossTriggerMethod;
		await this.connection.request(PayloadType.AMEND_POSITION_SLTP_REQ, payload);
	}

	/**
	 * Modify an existing pending order
	 */
	async amendOrder(orderId: number, params: AmendOrderParams): Promise<void> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			orderId,
		};
		if (params.volume !== undefined) payload["volume"] = params.volume;
		if (params.limitPrice !== undefined) payload["limitPrice"] = params.limitPrice;
		if (params.stopPrice !== undefined) payload["stopPrice"] = params.stopPrice;
		if (params.expirationTimestamp !== undefined) payload["expirationTimestamp"] = params.expirationTimestamp;
		if (params.stopLoss !== undefined) payload["stopLoss"] = params.stopLoss;
		if (params.takeProfit !== undefined) payload["takeProfit"] = params.takeProfit;
		if (params.slippageInPoints !== undefined) payload["slippageInPoints"] = params.slippageInPoints;
		if (params.relativeStopLoss !== undefined) payload["relativeStopLoss"] = params.relativeStopLoss;
		if (params.relativeTakeProfit !== undefined) payload["relativeTakeProfit"] = params.relativeTakeProfit;
		if (params.guaranteedStopLoss !== undefined) payload["guaranteedStopLoss"] = params.guaranteedStopLoss;
		if (params.trailingStopLoss !== undefined) payload["trailingStopLoss"] = params.trailingStopLoss;
		if (params.stopTriggerMethod !== undefined) payload["stopTriggerMethod"] = params.stopTriggerMethod;
		await this.connection.request(PayloadType.AMEND_ORDER_REQ, payload);
	}

	/**
	 * Cancel a pending order
	 */
	async cancelOrder(orderId: number): Promise<void> {
		await this.connection.request(PayloadType.CANCEL_ORDER_REQ, {
			ctidTraderAccountId: this.accountId,
			orderId,
		});
	}

	/**
	 * Subscribe to order execution events
	 */
	onExecution(handler: (event: ExecutionEvent) => void): () => void {
		return this.connection.on(PayloadType.EXECUTION_EVENT, (payload) => {
			handler(payload as unknown as ExecutionEvent);
		});
	}

	/**
	 * Subscribe to order error events
	 */
	onOrderError(handler: (event: OrderErrorEvent) => void): () => void {
		return this.connection.on(PayloadType.ORDER_ERROR_EVENT, (payload) => {
			handler(payload as unknown as OrderErrorEvent);
		});
	}

	/**
	 * Subscribe to trailing stop loss change events
	 */
	onTrailingSLChanged(handler: (event: TrailingSLChangedEvent) => void): () => void {
		return this.connection.on(PayloadType.TRAILING_SL_CHANGED_EVENT, (payload) => {
			handler(payload as unknown as TrailingSLChangedEvent);
		});
	}

	private async sendNewOrder(params: NewOrderParams & { orderType: OrderType }): Promise<ExecutionEvent> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			symbolId: params.symbolId,
			orderType: params.orderType,
			tradeSide: params.tradeSide,
			volume: params.volume,
		};
		if ("limitPrice" in params && params.limitPrice !== undefined) payload["limitPrice"] = params.limitPrice;
		if ("stopPrice" in params && params.stopPrice !== undefined) payload["stopPrice"] = params.stopPrice;
		if ("baseSlippagePrice" in params && params.baseSlippagePrice !== undefined) payload["baseSlippagePrice"] = params.baseSlippagePrice;
		if ("slippageInPoints" in params && params.slippageInPoints !== undefined) payload["slippageInPoints"] = params.slippageInPoints;
		if ("timeInForce" in params && params.timeInForce !== undefined) payload["timeInForce"] = params.timeInForce;
		if ("expirationTimestamp" in params && params.expirationTimestamp !== undefined) payload["expirationTimestamp"] = params.expirationTimestamp;
		if (params.stopLoss !== undefined) payload["stopLoss"] = params.stopLoss;
		if (params.takeProfit !== undefined) payload["takeProfit"] = params.takeProfit;
		if (params.relativeStopLoss !== undefined) payload["relativeStopLoss"] = params.relativeStopLoss;
		if (params.relativeTakeProfit !== undefined) payload["relativeTakeProfit"] = params.relativeTakeProfit;
		if (params.guaranteedStopLoss !== undefined) payload["guaranteedStopLoss"] = params.guaranteedStopLoss;
		if (params.trailingStopLoss !== undefined) payload["trailingStopLoss"] = params.trailingStopLoss;
		if (params.stopTriggerMethod !== undefined) payload["stopTriggerMethod"] = params.stopTriggerMethod;
		if (params.label !== undefined) payload["label"] = params.label;
		if (params.comment !== undefined) payload["comment"] = params.comment;
		if (params.clientOrderId !== undefined) payload["clientOrderId"] = params.clientOrderId;
		if (params.positionId !== undefined) payload["positionId"] = params.positionId;

		const res = await this.connection.request(PayloadType.NEW_ORDER_REQ, payload);
		return res as unknown as ExecutionEvent;
	}
}
