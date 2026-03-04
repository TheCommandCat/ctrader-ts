import { beforeEach, describe, expect, mock, test } from "bun:test";
import { SymbolCache } from "../core/symbol-cache.js";
import type { CTraderMarket } from "../modules/market.js";
import type { LightSymbol } from "../protocol/types.js";

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeMockMarket(symbols: LightSymbol[]): CTraderMarket {
	return {
		getSymbols: mock(async () => ({ symbols })),
	} as unknown as CTraderMarket;
}

const SYMBOLS: LightSymbol[] = [
	{ symbolId: 1, symbolName: "EURUSD", enabled: true },
	{ symbolId: 2, symbolName: "BTCUSD", enabled: true },
	{ symbolId: 3, symbolName: "XAUUSD", enabled: true },
	{ symbolId: 4, symbolName: "USDJPY", enabled: true },
];

// ── Tests ────────────────────────────────────────────────────────────────────

describe("SymbolCache", () => {
	let market: CTraderMarket;
	let cache: SymbolCache;

	beforeEach(() => {
		market = makeMockMarket(SYMBOLS);
		cache = new SymbolCache(market);
	});

	describe("resolveId", () => {
		test("returns numeric ID when given a number", async () => {
			const id = await cache.resolveId(42);
			expect(id).toBe(42);
			// Should NOT call getSymbols for numeric input
			expect(market.getSymbols).not.toHaveBeenCalled();
		});

		test("resolves symbol name to ID", async () => {
			const id = await cache.resolveId("EURUSD");
			expect(id).toBe(1);
		});

		test("is case-insensitive", async () => {
			expect(await cache.resolveId("eurusd")).toBe(1);
			expect(await cache.resolveId("EurUsd")).toBe(1);
			expect(await cache.resolveId("EURUSD")).toBe(1);
		});

		test("resolves different symbols correctly", async () => {
			expect(await cache.resolveId("BTCUSD")).toBe(2);
			expect(await cache.resolveId("XAUUSD")).toBe(3);
			expect(await cache.resolveId("USDJPY")).toBe(4);
		});

		test("throws for unknown symbol", async () => {
			await expect(cache.resolveId("INVALID")).rejects.toThrow('Symbol not found: "INVALID"');
		});

		test("lazy-loads symbols on first call", async () => {
			expect(market.getSymbols).not.toHaveBeenCalled();
			await cache.resolveId("EURUSD");
			expect(market.getSymbols).toHaveBeenCalledTimes(1);
		});

		test("does not re-fetch on subsequent calls", async () => {
			await cache.resolveId("EURUSD");
			await cache.resolveId("BTCUSD");
			await cache.resolveId("XAUUSD");
			expect(market.getSymbols).toHaveBeenCalledTimes(1);
		});
	});

	describe("getSymbol", () => {
		test("returns full LightSymbol object by name", async () => {
			const sym = await cache.getSymbol("EURUSD");
			expect(sym.symbolId).toBe(1);
			expect(sym.symbolName).toBe("EURUSD");
		});

		test("returns full LightSymbol object by ID", async () => {
			// First resolve a name to populate the cache
			await cache.resolveId("EURUSD");
			const sym = await cache.getSymbol(1);
			expect(sym.symbolId).toBe(1);
			expect(sym.symbolName).toBe("EURUSD");
		});

		test("throws for unknown symbol ID", async () => {
			await expect(cache.getSymbol(9999)).rejects.toThrow("Symbol id 9999 not found in cache.");
		});
	});

	describe("refresh", () => {
		test("updates cache with fresh data", async () => {
			// Initial resolve
			await cache.resolveId("EURUSD");
			expect(market.getSymbols).toHaveBeenCalledTimes(1);

			// Refresh forces a new fetch
			await cache.refresh();
			expect(market.getSymbols).toHaveBeenCalledTimes(2);
		});

		test("picks up new symbols after refresh", async () => {
			// First load has only the original symbols
			await cache.resolveId("EURUSD");
			await expect(cache.resolveId("GBPUSD")).rejects.toThrow();

			// Add a new symbol to the mock
			const newSymbols: LightSymbol[] = [
				...SYMBOLS,
				{ symbolId: 5, symbolName: "GBPUSD", enabled: true },
			];
			(
				market as unknown as {
					getSymbols: () => Promise<{ symbols: LightSymbol[] }>;
				}
			).getSymbols = mock(async () => ({ symbols: newSymbols }));

			await cache.refresh();
			expect(await cache.resolveId("GBPUSD")).toBe(5);
		});
	});

	describe("edge cases", () => {
		test("handles symbols with undefined symbolName", async () => {
			const marketWithUndefined = makeMockMarket([
				{ symbolId: 10, symbolName: undefined },
				{ symbolId: 11, symbolName: "VALID" },
			]);
			const c = new SymbolCache(marketWithUndefined);

			// The undefined name maps to "" (uppercased), shouldn't crash
			expect(await c.resolveId("VALID")).toBe(11);
		});

		test("handles empty symbol list", async () => {
			const emptyMarket = makeMockMarket([]);
			const c = new SymbolCache(emptyMarket);

			await expect(c.resolveId("EURUSD")).rejects.toThrow('Symbol not found: "EURUSD"');
		});
	});
});
