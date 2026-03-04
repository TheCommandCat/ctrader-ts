#!/usr/bin/env node
import { Command } from "commander";
import type {
	CTrader,
	LimitOrderOptions,
	MarketOrderOptions,
	ModifyOptions,
	StopOrderOptions,
} from "../src/client.js";
import { connect } from "../src/connect.js";
import { TrendbarPeriod } from "../src/enums.js";
import type { SlTpSpec } from "../src/types.js";

let cachedClient: CTrader | null = null;

async function getClient(): Promise<CTrader> {
	if (cachedClient === null) {
		cachedClient = await connect();
	}
	return cachedClient;
}

function dump(data: unknown): void {
	process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
}

/**
 * Parse "50p" / "$25" / "2%e" into SlTpSpec. Formats:
 *   - "50" or "50p" → { pips: 50 }
 *   - "$25" or "25d" → { dollars: 25 }
 *   - "0.02e" or "2%" → { equity: 0.02 }
 */
function parseSlTp(raw: string): SlTpSpec {
	const s = raw.trim();
	if (s.endsWith("%")) {
		const n = Number(s.slice(0, -1));
		if (Number.isNaN(n)) throw new Error(`Invalid equity spec: ${raw}`);
		return { equity: n / 100 };
	}
	if (s.endsWith("e")) {
		const n = Number(s.slice(0, -1));
		if (Number.isNaN(n)) throw new Error(`Invalid equity spec: ${raw}`);
		return { equity: n };
	}
	if (s.startsWith("$")) {
		const n = Number(s.slice(1));
		if (Number.isNaN(n)) throw new Error(`Invalid dollar spec: ${raw}`);
		return { dollars: n };
	}
	if (s.endsWith("d")) {
		const n = Number(s.slice(0, -1));
		if (Number.isNaN(n)) throw new Error(`Invalid dollar spec: ${raw}`);
		return { dollars: n };
	}
	if (s.endsWith("p")) {
		const n = Number(s.slice(0, -1));
		if (Number.isNaN(n)) throw new Error(`Invalid pips spec: ${raw}`);
		return { pips: n };
	}
	const n = Number(s);
	if (Number.isNaN(n)) throw new Error(`Invalid SL/TP spec: ${raw}`);
	return { pips: n };
}

function buildMarketOpts(opts: {
	lots: string;
	sl?: string | undefined;
	tp?: string | undefined;
	label?: string | undefined;
	comment?: string | undefined;
}): MarketOrderOptions {
	const result: MarketOrderOptions = { lots: Number(opts.lots) };
	if (opts.sl !== undefined) result.sl = parseSlTp(opts.sl);
	if (opts.tp !== undefined) result.tp = parseSlTp(opts.tp);
	if (opts.label !== undefined) result.label = opts.label;
	if (opts.comment !== undefined) result.comment = opts.comment;
	return result;
}

const periodMap: Record<string, TrendbarPeriod | undefined> = {
	M1: TrendbarPeriod.M1,
	M2: TrendbarPeriod.M2,
	M3: TrendbarPeriod.M3,
	M4: TrendbarPeriod.M4,
	M5: TrendbarPeriod.M5,
	M10: TrendbarPeriod.M10,
	M15: TrendbarPeriod.M15,
	M30: TrendbarPeriod.M30,
	H1: TrendbarPeriod.H1,
	H4: TrendbarPeriod.H4,
	H12: TrendbarPeriod.H12,
	D1: TrendbarPeriod.D1,
	W1: TrendbarPeriod.W1,
	MN1: TrendbarPeriod.MN1,
};

const program = new Command();

program
	.name("ctrader-cli")
	.description("cTrader Open API CLI — trade, monitor, and analyze from the terminal")
	.version("0.1.0");

// ─── auth ────────────────────────────────────────────────────────────────────

program
	.command("auth")
	.description("Run interactive OAuth setup (delegates to bin/auth.js)")
	.action(async () => {
		const { execFileSync } = await import("node:child_process");
		execFileSync("node", [new URL("../bin/auth.js", import.meta.url).pathname], {
			stdio: "inherit",
		});
	});

// ─── state ───────────────────────────────────────────────────────────────────

program
	.command("state")
	.description("Full account snapshot: balance, equity, margin, P&L, positions, orders")
	.action(async () => {
		const ct = await getClient();
		const state = await ct.getState();
		dump(state);
		ct.disconnect();
	});

// ─── positions ───────────────────────────────────────────────────────────────

program
	.command("positions")
	.description("List all open positions and pending orders")
	.action(async () => {
		const ct = await getClient();
		const { positions, orders } = await ct.getPositions();
		dump({ positions, orders });
		ct.disconnect();
	});

// ─── buy ─────────────────────────────────────────────────────────────────────

program
	.command("buy")
	.description("Market BUY — execute immediately at best price")
	.argument("<symbol>", "Symbol name (e.g. EURUSD)")
	.argument("<lots>", "Volume in lots (0.01 = micro)")
	.option("--sl <spec>", "Stop loss: 50 (pips), $25 (dollars), 2% (equity)")
	.option("--tp <spec>", "Take profit: 50 (pips), $25 (dollars), 2% (equity)")
	.option("--label <label>", "Order label")
	.option("--comment <comment>", "Order comment")
	.action(
		async (
			symbol: string,
			lots: string,
			opts: { sl?: string; tp?: string; label?: string; comment?: string },
		) => {
			const ct = await getClient();
			const pos = await ct.buy(symbol, buildMarketOpts({ lots, ...opts }));
			dump(pos);
			ct.disconnect();
		},
	);

// ─── sell ────────────────────────────────────────────────────────────────────

program
	.command("sell")
	.description("Market SELL — execute immediately at best price")
	.argument("<symbol>", "Symbol name (e.g. EURUSD)")
	.argument("<lots>", "Volume in lots")
	.option("--sl <spec>", "Stop loss")
	.option("--tp <spec>", "Take profit")
	.option("--label <label>", "Order label")
	.option("--comment <comment>", "Order comment")
	.action(
		async (
			symbol: string,
			lots: string,
			opts: { sl?: string; tp?: string; label?: string; comment?: string },
		) => {
			const ct = await getClient();
			const pos = await ct.sell(symbol, buildMarketOpts({ lots, ...opts }));
			dump(pos);
			ct.disconnect();
		},
	);

// ─── buy-limit ───────────────────────────────────────────────────────────────

program
	.command("buy-limit")
	.description("Place a limit BUY order — fills when price drops to limit price")
	.argument("<symbol>", "Symbol name")
	.argument("<lots>", "Volume in lots")
	.argument("<limitPrice>", "Limit price")
	.option("--sl <spec>", "Stop loss")
	.option("--tp <spec>", "Take profit")
	.option("--label <label>", "Order label")
	.option("--expires <ms>", "Expiry Unix ms timestamp")
	.action(
		async (
			symbol: string,
			lots: string,
			limitPrice: string,
			opts: { sl?: string; tp?: string; label?: string; expires?: string },
		) => {
			const ct = await getClient();
			const base = buildMarketOpts({
				lots,
				sl: opts.sl,
				tp: opts.tp,
				label: opts.label,
			});
			const orderOpts: LimitOrderOptions = {
				...base,
				limitPrice: Number(limitPrice),
			};
			if (opts.expires !== undefined) orderOpts.expirationTimestamp = Number(opts.expires);
			const event = await ct.buyLimit(symbol, orderOpts);
			dump(event);
			ct.disconnect();
		},
	);

// ─── sell-limit ──────────────────────────────────────────────────────────────

program
	.command("sell-limit")
	.description("Place a limit SELL order — fills when price rises to limit price")
	.argument("<symbol>", "Symbol name")
	.argument("<lots>", "Volume in lots")
	.argument("<limitPrice>", "Limit price")
	.option("--sl <spec>", "Stop loss")
	.option("--tp <spec>", "Take profit")
	.option("--label <label>", "Order label")
	.option("--expires <ms>", "Expiry Unix ms timestamp")
	.action(
		async (
			symbol: string,
			lots: string,
			limitPrice: string,
			opts: { sl?: string; tp?: string; label?: string; expires?: string },
		) => {
			const ct = await getClient();
			const base = buildMarketOpts({
				lots,
				sl: opts.sl,
				tp: opts.tp,
				label: opts.label,
			});
			const orderOpts: LimitOrderOptions = {
				...base,
				limitPrice: Number(limitPrice),
			};
			if (opts.expires !== undefined) orderOpts.expirationTimestamp = Number(opts.expires);
			const event = await ct.sellLimit(symbol, orderOpts);
			dump(event);
			ct.disconnect();
		},
	);

// ─── buy-stop ────────────────────────────────────────────────────────────────

program
	.command("buy-stop")
	.description("Place a stop BUY order — triggers on breakout above stop price")
	.argument("<symbol>", "Symbol name")
	.argument("<lots>", "Volume in lots")
	.argument("<stopPrice>", "Stop trigger price")
	.option("--sl <spec>", "Stop loss")
	.option("--tp <spec>", "Take profit")
	.option("--label <label>", "Order label")
	.option("--expires <ms>", "Expiry Unix ms timestamp")
	.action(
		async (
			symbol: string,
			lots: string,
			stopPrice: string,
			opts: { sl?: string; tp?: string; label?: string; expires?: string },
		) => {
			const ct = await getClient();
			const base = buildMarketOpts({
				lots,
				sl: opts.sl,
				tp: opts.tp,
				label: opts.label,
			});
			const orderOpts: StopOrderOptions = {
				...base,
				stopPrice: Number(stopPrice),
			};
			if (opts.expires !== undefined) orderOpts.expirationTimestamp = Number(opts.expires);
			const event = await ct.buyStop(symbol, orderOpts);
			dump(event);
			ct.disconnect();
		},
	);

// ─── sell-stop ───────────────────────────────────────────────────────────────

program
	.command("sell-stop")
	.description("Place a stop SELL order — triggers on breakdown below stop price")
	.argument("<symbol>", "Symbol name")
	.argument("<lots>", "Volume in lots")
	.argument("<stopPrice>", "Stop trigger price")
	.option("--sl <spec>", "Stop loss")
	.option("--tp <spec>", "Take profit")
	.option("--label <label>", "Order label")
	.option("--expires <ms>", "Expiry Unix ms timestamp")
	.action(
		async (
			symbol: string,
			lots: string,
			stopPrice: string,
			opts: { sl?: string; tp?: string; label?: string; expires?: string },
		) => {
			const ct = await getClient();
			const base = buildMarketOpts({
				lots,
				sl: opts.sl,
				tp: opts.tp,
				label: opts.label,
			});
			const orderOpts: StopOrderOptions = {
				...base,
				stopPrice: Number(stopPrice),
			};
			if (opts.expires !== undefined) orderOpts.expirationTimestamp = Number(opts.expires);
			const event = await ct.sellStop(symbol, orderOpts);
			dump(event);
			ct.disconnect();
		},
	);

// ─── close ───────────────────────────────────────────────────────────────────

program
	.command("close")
	.description("Close an open position by ID (full or partial)")
	.argument("<positionId>", "Position ID")
	.option("--lots <lots>", "Lots to close (omit for full close)")
	.action(async (positionId: string, opts: { lots?: string }) => {
		const ct = await getClient();
		const closeOpts = opts.lots !== undefined ? { lots: Number(opts.lots) } : undefined;
		const event = await ct.close(Number(positionId), closeOpts);
		dump(event);
		ct.disconnect();
	});

// ─── close-all ───────────────────────────────────────────────────────────────

program
	.command("close-all")
	.description("Close ALL open positions on the account")
	.action(async () => {
		const ct = await getClient();
		const events = await ct.closeAll();
		dump({ closed: events.length });
		ct.disconnect();
	});

// ─── close-symbol ────────────────────────────────────────────────────────────

program
	.command("close-symbol")
	.description("Close all positions on a specific symbol")
	.argument("<symbol>", "Symbol name")
	.action(async (symbol: string) => {
		const ct = await getClient();
		const events = await ct.closeSymbol(symbol);
		dump({ closed: events.length, symbol });
		ct.disconnect();
	});

// ─── modify ──────────────────────────────────────────────────────────────────

program
	.command("modify")
	.description("Modify SL/TP on an open position")
	.argument("<positionId>", "Position ID")
	.option("--sl <spec>", "New stop loss: 50 (pips), $25 (dollars), 2% (equity)")
	.option("--tp <spec>", "New take profit: 50 (pips), $25 (dollars), 2% (equity)")
	.action(async (positionId: string, opts: { sl?: string; tp?: string }) => {
		const ct = await getClient();
		const modOpts: ModifyOptions = {};
		if (opts.sl !== undefined) modOpts.sl = parseSlTp(opts.sl);
		if (opts.tp !== undefined) modOpts.tp = parseSlTp(opts.tp);
		await ct.modify(Number(positionId), modOpts);
		dump({ modified: Number(positionId) });
		ct.disconnect();
	});

// ─── resize ─────────────────────────────────────────────────────────────────

program
	.command("resize")
	.description("Resize a position — change its volume to a new target in lots")
	.argument("<positionId>", "Position ID")
	.argument("<newLots>", "Desired total position size in lots (e.g. 0.05, 0.1, 1.0)")
	.action(async (positionId: string, newLots: string) => {
		const ct = await getClient();
		const event = await ct.resize(Number(positionId), Number(newLots));
		if (event === undefined) {
			dump({
				resized: Number(positionId),
				change: "none",
				message: "Position already at target size",
			});
		} else {
			dump({ resized: Number(positionId), newLots: Number(newLots), event });
		}
		ct.disconnect();
	});
// ─── cancel ──────────────────────────────────────────────────────────────────

program
	.command("cancel")
	.description("Cancel a pending order (limit/stop/stop-limit)")
	.argument("<orderId>", "Pending order ID")
	.action(async (orderId: string) => {
		const ct = await getClient();
		await ct.cancelOrder(Number(orderId));
		dump({ cancelled: Number(orderId) });
		ct.disconnect();
	});

// ─── history ─────────────────────────────────────────────────────────────────

program
	.command("history")
	.description("Get trade execution history")
	.option("--from <ms>", "Start Unix timestamp in ms")
	.option("--to <ms>", "End Unix timestamp in ms")
	.option("--max <rows>", "Max results")
	.action(async (opts: { from?: string; to?: string; max?: string }) => {
		const ct = await getClient();
		const dealOpts: Record<string, number> = {};
		if (opts.from !== undefined) dealOpts.from = Number(opts.from);
		if (opts.to !== undefined) dealOpts.to = Number(opts.to);
		if (opts.max !== undefined) dealOpts.maxRows = Number(opts.max);
		const result = await ct.getDeals(dealOpts);
		dump(result);
		ct.disconnect();
	});

// ─── bars ────────────────────────────────────────────────────────────────────

program
	.command("bars")
	.description("Get historical OHLCV candlestick bars")
	.argument("<symbol>", "Symbol name")
	.argument("<period>", "Candle period: M1 M5 M15 M30 H1 H4 H12 D1 W1 MN1")
	.argument("<from>", "Start Unix timestamp in ms")
	.argument("<to>", "End Unix timestamp in ms")
	.option("--count <n>", "Max number of bars")
	.action(
		async (
			symbol: string,
			periodStr: string,
			from: string,
			to: string,
			opts: { count?: string },
		) => {
			const period = periodMap[periodStr];
			if (period === undefined) {
				process.stderr.write(
					`Invalid period: ${periodStr}. Valid: M1 M2 M3 M4 M5 M10 M15 M30 H1 H4 H12 D1 W1 MN1\n`,
				);
				process.exit(1);
			}
			const ct = await getClient();
			const params: {
				period: TrendbarPeriod;
				fromTimestamp: number;
				toTimestamp: number;
				count?: number;
			} = {
				period,
				fromTimestamp: Number(from),
				toTimestamp: Number(to),
			};
			if (opts.count !== undefined) params.count = Number(opts.count);
			const result = await ct.getTrendbars(symbol, params);
			dump(result);
			ct.disconnect();
		},
	);

// ─── watch ───────────────────────────────────────────────────────────────────

program
	.command("watch")
	.description("Stream live bid/ask prices (Ctrl+C to stop)")
	.argument("<symbols...>", "One or more symbol names (e.g. EURUSD XAUUSD)")
	.action(async (symbols: string[]) => {
		const ct = await getClient();
		const stop = await ct.watchSpots(symbols, (price) => {
			const line = [
				price.symbol,
				price.bidDecimal !== undefined ? `bid=${price.bidDecimal}` : "",
				price.askDecimal !== undefined ? `ask=${price.askDecimal}` : "",
			]
				.filter(Boolean)
				.join("  ");
			process.stdout.write(`${line}\n`);
		});

		const cleanup = async (): Promise<void> => {
			await stop();
			ct.disconnect();
			process.exit(0);
		};

		process.on("SIGINT", () => {
			void cleanup();
		});
		process.on("SIGTERM", () => {
			void cleanup();
		});
	});
// ─── symbols ────────────────────────────────────────────────────────────────

program

	.command("symbols")

	.description("List all available trading symbols")

	.option("--json", "Output as JSON")

	.action(async (opts: { json?: boolean }) => {
		const ct = await getClient();

		const symbols = await ct.getSymbols();

		if (opts.json) {
			dump(symbols);
		} else {
			// Table format with columns: symbolId, symbolName

			const rows: string[][] = symbols.map((s) => [String(s.symbolId), s.symbolName || ""]);

			const header = ["Symbol ID", "Symbol Name"];

			const colWidths = [
				Math.max(
					header[0]?.length ?? 0,
					...(rows.length > 0 ? rows.map((r) => r[0]?.length ?? 0) : [1]),
				),
				Math.max(
					header[1]?.length ?? 0,
					...(rows.length > 0 ? rows.map((r) => r[1]?.length ?? 0) : [1]),
				),
			];

			const sep = (widths: number[]) => `  ${widths.map((w) => "-".repeat(w)).join("  ")}\n`;

			const row = (cells: string[], widths: number[]) =>
				`  ${cells.map((c, i) => String(c).padEnd(widths[i] ?? 0)).join("  ")}\n`;

			process.stdout.write(row(header, colWidths));

			process.stdout.write(sep(colWidths));

			for (const r of rows) {
				process.stdout.write(row(r, colWidths));
			}
		}

		ct.disconnect();
	});

// ─── symbol-info ────────────────────────────────────────────────────────────

program

	.command("symbol-info")

	.description("Show detailed info for a symbol")

	.argument("<symbol>", "Symbol name (e.g. EURUSD)")

	.option("--json", "Output as JSON")

	.action(async (symbol: string, opts: { json?: boolean }) => {
		const ct = await getClient();

		const details = await ct.getSymbolDetails([symbol]);

		if (details.length === 0) {
			process.stderr.write(`Symbol not found: ${symbol}\n`);

			ct.disconnect();

			process.exit(1);
		}

		const info = details[0]!;

		if (opts.json) {
			dump(info);
		} else {
			// Formatted key-value output

			const fields: [string, string][] = [
				["Symbol ID", String(info.symbolId)],
				["Symbol Name", String(info.symbolId)],
				["Digits", String(info.digits)],
				["Pip Position", String(info.pipPosition)],
				["Lot Size", String(info.lotSize ?? "")],
				["Min Volume", String(info.minVolume ?? "")],
				["Max Volume", String(info.maxVolume ?? "")],
				["Step Volume", String(info.stepVolume ?? "")],
			];

			if (info.schedule !== undefined && info.schedule.length > 0) {
				fields.push(["Trading Hours", `${info.schedule.length} schedule(s)`]);
			}

			const maxKeyLen = Math.max(...fields.map((f) => f[0].length));

			for (const [key, val] of fields) {
				process.stdout.write(`${key.padEnd(maxKeyLen)}  ${String(val)}\n`);
			}
		}

		ct.disconnect();
	});

program.parseAsync(process.argv).catch((err: unknown) => {
	process.stderr.write(`${String(err)}\n`);
	process.exit(1);
});
