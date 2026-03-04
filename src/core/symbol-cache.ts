import type { CTraderMarket } from "../modules/market.js";
import type { LightSymbol } from "../protocol/types.js";

export class SymbolCache {
	private readonly market: CTraderMarket;
	private nameToId: Map<string, number> | null = null;
	private idToSymbol: Map<number, LightSymbol> | null = null;

	constructor(market: CTraderMarket) {
		this.market = market;
	}

	async resolveId(symbolOrId: string | number): Promise<number> {
		if (typeof symbolOrId === "number") return symbolOrId;
		const map = await this.getNameToId();
		const id = map.get(symbolOrId.toUpperCase());
		if (id === undefined)
			throw new Error(
				`Symbol not found: "${symbolOrId}". Call client.refreshSymbols() to update the cache.`,
			);
		return id;
	}

	async getSymbol(symbolOrId: string | number): Promise<LightSymbol> {
		const id = await this.resolveId(symbolOrId);
		const map = await this.getIdToSymbol();
		const sym = map.get(id);
		if (sym === undefined) throw new Error(`Symbol id ${id} not found in cache.`);
		return sym;
	}

	async refresh(): Promise<void> {
		const { symbols } = await this.market.getSymbols();
		this.nameToId = new Map(symbols.map((s) => [s.symbolName?.toUpperCase() ?? "", s.symbolId]));
		this.idToSymbol = new Map(symbols.map((s) => [s.symbolId, s]));
	}

	private async getNameToId(): Promise<Map<string, number>> {
		if (this.nameToId === null) await this.refresh();
		return this.nameToId!;
	}

	private async getIdToSymbol(): Promise<Map<number, LightSymbol>> {
		if (this.idToSymbol === null) await this.refresh();
		return this.idToSymbol!;
	}
}
