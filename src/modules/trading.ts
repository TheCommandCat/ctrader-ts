import type { CTraderConnection } from "../connection.js";
import { OrderTriggerMethod, OrderType, PayloadType, TimeInForce, TradeSide } from "../enums.js";
import type { ExecutionEvent, OrderErrorEvent, TrailingSLChangedEvent } from "../types.js";

export interface NewOrderParams {
	symbolId: number;
	tradeSide: TradeSide;
	volume: number;
	label?: string;
	comment?: string;
	clientOrderId?: string;
	positionId?: number;
	stopLoss?: number;
	takeProfit?: number;
	relativeStopLoss?: number;
	relativeTakeProfit?: number;
	guaranteedStopLoss?: boolean;
	trailingStopLoss?: boolean;
	stopTriggerMethod?: OrderTriggerMethod;
}

export interface LimitOrderParams extends NewOrderParams {
	limitPrice: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

export interface StopOrderParams extends NewOrderParams {
	stopPrice: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

export interface MarketRangeOrderParams extends NewOrderParams {
	baseSlippagePrice: number;
	slippageInPoints: number;
}

export interface StopLimitOrderParams extends NewOrderParams {
	stopPrice: number;
	slippageInPoints: number;
	timeInForce?: TimeInForce;
	expirationTimestamp?: number;
}

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

export interface AmendSltpParams {
	stopLoss?: number;
	takeProfit?: number;
	guaranteedStopLoss?: boolean;
	trailingStopLoss?: boolean;
	stopLossTriggerMethod?: OrderTriggerMethod;
}

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

	async marketOrder(params: NewOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.MARKET });
	}

	async limitOrder(params: LimitOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.LIMIT });
	}

	async stopOrder(params: StopOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.STOP });
	}

	async stopLimitOrder(params: StopLimitOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.STOP_LIMIT });
	}

	async marketRangeOrder(params: MarketRangeOrderParams): Promise<ExecutionEvent> {
		return this.sendNewOrder({ ...params, orderType: OrderType.MARKET_RANGE });
	}

	async closePosition(positionId: number, volume: number): Promise<ExecutionEvent> {
		const res = await this.connection.request(PayloadType.CLOSE_POSITION_REQ, {
			ctidTraderAccountId: this.accountId,
			positionId,
			volume,
		});
		return res as unknown as ExecutionEvent;
	}

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

	async cancelOrder(orderId: number): Promise<void> {
		await this.connection.request(PayloadType.CANCEL_ORDER_REQ, {
			ctidTraderAccountId: this.accountId,
			orderId,
		});
	}

	onExecution(handler: (event: ExecutionEvent) => void): () => void {
		return this.connection.on(PayloadType.EXECUTION_EVENT, (payload) => {
			handler(payload as unknown as ExecutionEvent);
		});
	}

	onOrderError(handler: (event: OrderErrorEvent) => void): () => void {
		return this.connection.on(PayloadType.ORDER_ERROR_EVENT, (payload) => {
			handler(payload as unknown as OrderErrorEvent);
		});
	}

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
