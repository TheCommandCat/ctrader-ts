import type { CTraderAccount } from "./modules/account.js";
import type { CTraderMarket } from "./modules/market.js";
import type { SymbolCache } from "./symbol-cache.js";
import type { FullSymbol, SpotEvent } from "./types.js";
import type { SlTpSpec } from "./types.js";

export type { SlTpSpec };

interface SlTpContext {
	account: CTraderAccount;
	market: CTraderMarket;
	symbols: SymbolCache;
	symbolId: number;
	volumeInUnits: number;
}

interface ResolvedSlTp {
	relativeStopLoss?: number;
	relativeTakeProfit?: number;
}

/**
 * Convert pips to protocol relative SL/TP units.
 * Formula: pips * 10^(5 - pipPosition)
 */
export function pipsToRelative(pips: number, pipPosition = 4): number {
	return Math.round(pips * Math.pow(10, 5 - pipPosition));
}

/**
 * Resolve human-friendly SlTpSpec (pips / dollars / equity) into protocol-level
 * relative SL/TP values. Fetches symbol details, account equity, and spot price
 * as needed, with per-call caching to avoid duplicate requests.
 */
export async function resolveSlTp(
	ctx: SlTpContext,
	sl: SlTpSpec | undefined,
	tp: SlTpSpec | undefined,
): Promise<ResolvedSlTp> {
	const result: ResolvedSlTp = {};
	if (sl === undefined && tp === undefined) return result;

	const cache = new RequestCache(ctx);

	if (sl !== undefined) {
		const pips = await specToPips(cache, sl, ctx.volumeInUnits);
		const sym = await cache.getSymbolDetails();
		result.relativeStopLoss = pipsToRelative(pips, sym.pipPosition);
	}

	if (tp !== undefined) {
		const pips = await specToPips(cache, tp, ctx.volumeInUnits);
		const sym = await cache.getSymbolDetails();
		result.relativeTakeProfit = pipsToRelative(pips, sym.pipPosition);
	}

	return result;
}

async function specToPips(
	cache: RequestCache,
	spec: SlTpSpec,
	volumeInUnits: number,
): Promise<number> {
	if ("pips" in spec) return spec.pips;

	const sym = await cache.getSymbolDetails();
	const pipSize = Math.pow(10, -sym.pipPosition);
	const lotSize = sym.lotSize ?? 100_000;
	const lots = volumeInUnits / 100_000;

	// pipValue = pipSize * lotSize * quoteToAccountRate (assumed 1:1 for USD accounts)
	const pipValue = pipSize * lotSize * 1;

	let dollars: number;
	if ("dollars" in spec) {
		dollars = spec.dollars;
	} else {
		const trader = await cache.getTrader();
		const equity = trader.balance;
		dollars = equity * spec.equity;
	}

	// distancePips = dollars / (pipValue * lots)
	const distancePips = dollars / (pipValue * lots);
	return distancePips;
}

/**
 * Per-call cache: ensures parallel resolutions within the same order don't
 * double-fetch symbol details, trader info, or spot prices.
 */
class RequestCache {
	private readonly ctx: SlTpContext;
	private symbolPromise: Promise<FullSymbol> | null = null;
	private traderPromise: Promise<{ balance: number }> | null = null;
	private spotPromise: Promise<SpotEvent> | null = null;

	constructor(ctx: SlTpContext) {
		this.ctx = ctx;
	}

	getSymbolDetails(): Promise<FullSymbol> {
		if (this.symbolPromise === null) {
			this.symbolPromise = this.ctx.market
				.getSymbolsById([this.ctx.symbolId])
				.then((symbols) => {
					const sym = symbols[0];
					if (sym === undefined) {
						throw new Error(`Symbol details not found for id ${this.ctx.symbolId}`);
					}
					return sym;
				});
		}
		return this.symbolPromise;
	}

	getTrader(): Promise<{ balance: number }> {
		if (this.traderPromise === null) {
			this.traderPromise = this.ctx.account.getTrader();
		}
		return this.traderPromise;
	}

	getSpotPrice(): Promise<SpotEvent> {
		if (this.spotPromise === null) {
			this.spotPromise = this.fetchOneSpot();
		}
		return this.spotPromise;
	}

	private fetchOneSpot(): Promise<SpotEvent> {
		return new Promise<SpotEvent>((resolve, reject) => {
			const timeout = setTimeout(() => {
				unsub();
				void this.ctx.market.unsubscribeSpots([this.ctx.symbolId]).catch(() => {});
				reject(new Error(`Timed out waiting for spot price on symbol ${this.ctx.symbolId}`));
			}, 10_000);

			const unsub = this.ctx.market.onSpot((event: SpotEvent) => {
				if (event.symbolId === this.ctx.symbolId) {
					clearTimeout(timeout);
					unsub();
					void this.ctx.market.unsubscribeSpots([this.ctx.symbolId]).catch(() => {});
					resolve(event);
				}
			});

			this.ctx.market.subscribeSpots([this.ctx.symbolId]).catch((err: unknown) => {
				clearTimeout(timeout);
				unsub();
				reject(err);
			});
		});
	}
}
