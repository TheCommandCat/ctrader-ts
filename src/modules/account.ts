import type { CTraderConnection } from "../connection.js";
import { PayloadType } from "../enums.js";
import type {
	Deal,
	DealOffset,
	DepositWithdraw,
	DynamicLeverage,
	ExpectedMargin,
	MarginCall,
	MarginCallEvent,
	MarginChangedEvent,
	Order,
	Position,
	PositionUnrealizedPnL,
	Trader,
	TraderUpdatedEvent,
} from "../types.js";

export interface DealListParams {
	fromTimestamp?: number;
	toTimestamp?: number;
	maxRows?: number;
}

export interface OrderListParams {
	fromTimestamp?: number;
	toTimestamp?: number;
}

export interface TimeRangeParams {
	fromTimestamp?: number;
	toTimestamp?: number;
}

export class CTraderAccount {
	private readonly connection: CTraderConnection;
	private accountId: number;

	constructor(connection: CTraderConnection, accountId: number) {
		this.connection = connection;
		this.accountId = accountId;
	}

	setAccountId(accountId: number): void {
		this.accountId = accountId;
	}

	async getTrader(): Promise<Trader> {
		const res = await this.connection.request(PayloadType.TRADER_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return res["trader"] as Trader;
	}

	async reconcile(returnProtectionOrders?: boolean): Promise<{ positions: Position[]; orders: Order[] }> {
		const payload: Record<string, unknown> = { ctidTraderAccountId: this.accountId };
		if (returnProtectionOrders !== undefined) payload["returnProtectionOrders"] = returnProtectionOrders;
		const res = await this.connection.request(PayloadType.RECONCILE_REQ, payload);
		return {
			positions: (res["position"] as Position[] | undefined) ?? [],
			orders: (res["order"] as Order[] | undefined) ?? [],
		};
	}

	async getDeals(params: DealListParams = {}): Promise<{ deals: Deal[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = { ctidTraderAccountId: this.accountId };
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		if (params.maxRows !== undefined) payload["maxRows"] = params.maxRows;
		const res = await this.connection.request(PayloadType.DEAL_LIST_REQ, payload);
		return {
			deals: (res["deal"] as Deal[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	async getDealsByPosition(positionId: number, params: TimeRangeParams = {}): Promise<{ deals: Deal[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = { ctidTraderAccountId: this.accountId, positionId };
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		const res = await this.connection.request(PayloadType.DEAL_LIST_BY_POSITION_REQ, payload);
		return {
			deals: (res["deal"] as Deal[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	async getDealOffsets(dealId: number): Promise<{ offsetBy: DealOffset[]; offsetting: DealOffset[] }> {
		const res = await this.connection.request(PayloadType.DEAL_OFFSET_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
			dealId,
		});
		return {
			offsetBy: (res["offsetBy"] as DealOffset[] | undefined) ?? [],
			offsetting: (res["offsetting"] as DealOffset[] | undefined) ?? [],
		};
	}

	async getOrders(params: OrderListParams = {}): Promise<{ orders: Order[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = { ctidTraderAccountId: this.accountId };
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		const res = await this.connection.request(PayloadType.ORDER_LIST_REQ, payload);
		return {
			orders: (res["order"] as Order[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	async getOrderDetails(orderId: number): Promise<{ order: Order; deals: Deal[] }> {
		const res = await this.connection.request(PayloadType.ORDER_DETAILS_REQ, {
			ctidTraderAccountId: this.accountId,
			orderId,
		});
		return {
			order: res["order"] as Order,
			deals: (res["deal"] as Deal[] | undefined) ?? [],
		};
	}

	async getOrdersByPosition(positionId: number, params: TimeRangeParams = {}): Promise<{ orders: Order[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = { ctidTraderAccountId: this.accountId, positionId };
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		const res = await this.connection.request(PayloadType.ORDER_LIST_BY_POSITION_REQ, payload);
		return {
			orders: (res["order"] as Order[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	async getCashFlowHistory(fromTimestamp: number, toTimestamp: number): Promise<DepositWithdraw[]> {
		const res = await this.connection.request(PayloadType.CASH_FLOW_HISTORY_REQ, {
			ctidTraderAccountId: this.accountId,
			fromTimestamp,
			toTimestamp,
		});
		return (res["depositWithdraw"] as DepositWithdraw[] | undefined) ?? [];
	}

	async getExpectedMargin(symbolId: number, volumes: number[]): Promise<{ margins: ExpectedMargin[]; moneyDigits?: number }> {
		const res = await this.connection.request(PayloadType.EXPECTED_MARGIN_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId,
			volume: volumes,
		});
		const result: { margins: ExpectedMargin[]; moneyDigits?: number } = {
			margins: (res["margin"] as ExpectedMargin[] | undefined) ?? [],
		};
		if (res["moneyDigits"] !== undefined) result.moneyDigits = res["moneyDigits"] as number;
		return result;
	}

	async getPositionUnrealizedPnl(): Promise<{ pnls: PositionUnrealizedPnL[]; moneyDigits: number }> {
		const res = await this.connection.request(PayloadType.GET_POSITION_UNREALIZED_PNL_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return {
			pnls: (res["positionUnrealizedPnL"] as PositionUnrealizedPnL[] | undefined) ?? [],
			moneyDigits: res["moneyDigits"] as number,
		};
	}

	async getDynamicLeverage(leverageId: number): Promise<DynamicLeverage> {
		const res = await this.connection.request(PayloadType.GET_DYNAMIC_LEVERAGE_REQ, {
			ctidTraderAccountId: this.accountId,
			leverageId,
		});
		return res["leverage"] as DynamicLeverage;
	}

	async getMarginCalls(): Promise<MarginCall[]> {
		const res = await this.connection.request(PayloadType.MARGIN_CALL_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return (res["marginCall"] as MarginCall[] | undefined) ?? [];
	}

	async updateMarginCall(marginCall: MarginCall): Promise<void> {
		await this.connection.request(PayloadType.MARGIN_CALL_UPDATE_REQ, {
			ctidTraderAccountId: this.accountId,
			marginCall: marginCall as unknown as Record<string, unknown>,
		});
	}

	onTraderUpdated(handler: (event: TraderUpdatedEvent) => void): () => void {
		return this.connection.on(PayloadType.TRADER_UPDATED_EVENT, (payload) => {
			handler(payload as unknown as TraderUpdatedEvent);
		});
	}

	onMarginChanged(handler: (event: MarginChangedEvent) => void): () => void {
		return this.connection.on(PayloadType.MARGIN_CHANGED_EVENT, (payload) => {
			handler(payload as unknown as MarginChangedEvent);
		});
	}

	onMarginCallUpdate(handler: (event: MarginCallEvent) => void): () => void {
		return this.connection.on(PayloadType.MARGIN_CALL_UPDATE_EVENT, (payload) => {
			handler(payload as unknown as MarginCallEvent);
		});
	}

	onMarginCallTrigger(handler: (event: MarginCallEvent) => void): () => void {
		return this.connection.on(PayloadType.MARGIN_CALL_TRIGGER_EVENT, (payload) => {
			handler(payload as unknown as MarginCallEvent);
		});
	}
}
