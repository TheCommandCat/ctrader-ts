import type { CTraderConnection } from "../connection.js";
import { PayloadType, QuoteType, TrendbarPeriod } from "../enums.js";
import type {
	ArchivedSymbol,
	Asset,
	AssetClass,
	DepthEvent,
	FullSymbol,
	LightSymbol,
	SpotEvent,
	SymbolCategory,
	SymbolChangedEvent,
	TickData,
	Trendbar,
} from "../types.js";

export interface GetTrendbarsParams {
	symbolId: number;
	period: TrendbarPeriod;
	fromTimestamp?: number;
	toTimestamp?: number;
	count?: number;
}

export interface GetTickDataParams {
	symbolId: number;
	type: QuoteType;
	fromTimestamp?: number;
	toTimestamp?: number;
}

export class CTraderMarket {
	private readonly connection: CTraderConnection;
	private accountId: number;

	private readonly activeSpotSubscriptions = new Set<number>();
	private readonly activeTrendbarSubscriptions = new Map<number, Set<TrendbarPeriod>>();
	private readonly activeDepthSubscriptions = new Set<number>();

	constructor(connection: CTraderConnection, accountId: number) {
		this.connection = connection;
		this.accountId = accountId;
	}

	setAccountId(accountId: number): void {
		this.accountId = accountId;
	}

	async getAssets(): Promise<Asset[]> {
		const res = await this.connection.request(PayloadType.ASSET_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return (res["asset"] as Asset[] | undefined) ?? [];
	}

	async getAssetClasses(): Promise<AssetClass[]> {
		const res = await this.connection.request(PayloadType.ASSET_CLASS_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return (res["assetClass"] as AssetClass[] | undefined) ?? [];
	}

	async getSymbols(includeArchived = false): Promise<{ symbols: LightSymbol[]; archivedSymbols: ArchivedSymbol[] }> {
		const res = await this.connection.request(PayloadType.SYMBOLS_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
			includeArchivedSymbols: includeArchived,
		});
		return {
			symbols: (res["symbol"] as LightSymbol[] | undefined) ?? [],
			archivedSymbols: (res["archivedSymbol"] as ArchivedSymbol[] | undefined) ?? [],
		};
	}

	async getSymbolsById(symbolIds: number[]): Promise<FullSymbol[]> {
		const res = await this.connection.request(PayloadType.SYMBOL_BY_ID_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId: symbolIds,
		});
		return (res["symbol"] as FullSymbol[] | undefined) ?? [];
	}

	async getSymbolCategories(): Promise<SymbolCategory[]> {
		const res = await this.connection.request(PayloadType.SYMBOL_CATEGORY_LIST_REQ, {
			ctidTraderAccountId: this.accountId,
		});
		return (res["symbolCategory"] as SymbolCategory[] | undefined) ?? [];
	}

	async getSymbolsForConversion(firstAssetId: number, lastAssetId: number): Promise<LightSymbol[]> {
		const res = await this.connection.request(PayloadType.SYMBOLS_FOR_CONVERSION_REQ, {
			ctidTraderAccountId: this.accountId,
			firstAssetId,
			lastAssetId,
		});
		return (res["symbol"] as LightSymbol[] | undefined) ?? [];
	}

	async subscribeSpots(symbolIds: number[], subscribeToSpotTimestamp?: boolean): Promise<void> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			symbolId: symbolIds,
		};
		if (subscribeToSpotTimestamp !== undefined) payload["subscribeToSpotTimestamp"] = subscribeToSpotTimestamp;
		await this.connection.request(PayloadType.SUBSCRIBE_SPOTS_REQ, payload);
		for (const id of symbolIds) this.activeSpotSubscriptions.add(id);
	}

	async unsubscribeSpots(symbolIds: number[]): Promise<void> {
		await this.connection.request(PayloadType.UNSUBSCRIBE_SPOTS_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId: symbolIds,
		});
		for (const id of symbolIds) this.activeSpotSubscriptions.delete(id);
	}

	async subscribeLiveTrendbar(symbolId: number, period: TrendbarPeriod): Promise<void> {
		await this.connection.request(PayloadType.SUBSCRIBE_LIVE_TRENDBAR_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId,
			period,
		});
		let periods = this.activeTrendbarSubscriptions.get(symbolId);
		if (periods === undefined) {
			periods = new Set();
			this.activeTrendbarSubscriptions.set(symbolId, periods);
		}
		periods.add(period);
	}

	async unsubscribeLiveTrendbar(symbolId: number, period: TrendbarPeriod): Promise<void> {
		await this.connection.request(PayloadType.UNSUBSCRIBE_LIVE_TRENDBAR_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId,
			period,
		});
		const periods = this.activeTrendbarSubscriptions.get(symbolId);
		if (periods !== undefined) {
			periods.delete(period);
			if (periods.size === 0) this.activeTrendbarSubscriptions.delete(symbolId);
		}
	}

	async subscribeDepth(symbolIds: number[]): Promise<void> {
		await this.connection.request(PayloadType.SUBSCRIBE_DEPTH_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId: symbolIds,
		});
		for (const id of symbolIds) this.activeDepthSubscriptions.add(id);
	}

	async unsubscribeDepth(symbolIds: number[]): Promise<void> {
		await this.connection.request(PayloadType.UNSUBSCRIBE_DEPTH_REQ, {
			ctidTraderAccountId: this.accountId,
			symbolId: symbolIds,
		});
		for (const id of symbolIds) this.activeDepthSubscriptions.delete(id);
	}

	async getTrendbars(params: GetTrendbarsParams): Promise<{ trendbars: Trendbar[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			symbolId: params.symbolId,
			period: params.period,
		};
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		if (params.count !== undefined) payload["count"] = params.count;
		const res = await this.connection.request(PayloadType.GET_TRENDBARS_REQ, payload);
		return {
			trendbars: (res["trendbar"] as Trendbar[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	async getTickData(params: GetTickDataParams): Promise<{ ticks: TickData[]; hasMore: boolean }> {
		const payload: Record<string, unknown> = {
			ctidTraderAccountId: this.accountId,
			symbolId: params.symbolId,
			type: params.type,
		};
		if (params.fromTimestamp !== undefined) payload["fromTimestamp"] = params.fromTimestamp;
		if (params.toTimestamp !== undefined) payload["toTimestamp"] = params.toTimestamp;
		const res = await this.connection.request(PayloadType.GET_TICK_DATA_REQ, payload);
		return {
			ticks: (res["tickData"] as TickData[] | undefined) ?? [],
			hasMore: (res["hasMore"] as boolean | undefined) ?? false,
		};
	}

	onSpot(handler: (event: SpotEvent) => void): () => void {
		return this.connection.on(PayloadType.SPOT_EVENT, (payload) => {
			handler(payload as unknown as SpotEvent);
		});
	}

	onDepth(handler: (event: DepthEvent) => void): () => void {
		return this.connection.on(PayloadType.DEPTH_EVENT, (payload) => {
			handler(payload as unknown as DepthEvent);
		});
	}

	onSymbolChanged(handler: (event: SymbolChangedEvent) => void): () => void {
		return this.connection.on(PayloadType.SYMBOL_CHANGED_EVENT, (payload) => {
			handler(payload as unknown as SymbolChangedEvent);
		});
	}

	async restoreSubscriptions(): Promise<void> {
		if (this.activeSpotSubscriptions.size > 0) {
			await this.connection.request(PayloadType.SUBSCRIBE_SPOTS_REQ, {
				ctidTraderAccountId: this.accountId,
				symbolId: [...this.activeSpotSubscriptions],
			});
		}
		for (const [symbolId, periods] of this.activeTrendbarSubscriptions) {
			for (const period of periods) {
				await this.connection.request(PayloadType.SUBSCRIBE_LIVE_TRENDBAR_REQ, {
					ctidTraderAccountId: this.accountId,
					symbolId,
					period,
				});
			}
		}
		if (this.activeDepthSubscriptions.size > 0) {
			await this.connection.request(PayloadType.SUBSCRIBE_DEPTH_REQ, {
				ctidTraderAccountId: this.accountId,
				symbolId: [...this.activeDepthSubscriptions],
			});
		}
	}
}
