/**
 * Portfolio Report Example
 *
 * Demonstrates reading account and portfolio data:
 * - Connect to cTrader
 * - Get account state snapshot
 * - Retrieve trader account information
 * - Log account metrics: balance, equity, margin level, leverage
 * - Loop through open positions and log each position details
 * - Retrieve recent deals from the last 24 hours
 * - Display summary report
 * - Disconnect
 *
 * This pattern shows how to:
 * - Query account state and trader info
 * - Convert units to lots for readable position sizes
 * - Retrieve historical deal data
 * - Generate reports from API data
 *
 * Run: npx ts-node examples/portfolio-report.ts
 */

import { connect, unitsToLots } from "../src/index.js";

async function main() {
	const ct = await connect();

	try {
		// Get account state
		const state = await ct.getState();
		console.log("=== Account State ===");
		console.log(`Balance: ${state.balance}`);
		console.log(`Equity: ${state.equity}`);
		console.log(`Used Margin: ${state.usedMargin}`);
		console.log(`Free Margin: ${state.freeMargin}`);
		console.log(`Unrealized P&L: ${state.unrealizedPnl}`);
		console.log();

		// Get trader account info
		const trader = await ct.getTrader();
		console.log("=== Trader Account Info ===");
		console.log(`Broker: ${trader.brokerName ?? "N/A"}`);
		console.log(`Account ID: ${trader.ctidTraderAccountId}`);

		// Calculate margin level
		const marginLevel = state.usedMargin > 0 ? (state.equity / state.usedMargin) * 100 : 0;
		console.log(`Margin Level: ${marginLevel.toFixed(2)}%`);

		// Leverage: leverageInCents / 100 = actual leverage ratio
		const leverage = trader.leverageInCents !== undefined ? trader.leverageInCents / 100 : "N/A";
		console.log(`Leverage: 1:${leverage}`);
		console.log();

		// Report on open positions
		console.log("=== Open Positions ===");
		if (state.positions.length === 0) {
			console.log("No open positions");
		} else {
			const symbols = await ct.getSymbols();

			state.positions.forEach((position, index) => {
				// Find the symbol name
				const symbol = symbols.find((s) => s.symbolId === position.tradeData.symbolId);
				const symbolName = symbol?.symbolName ?? `ID:${position.tradeData.symbolId}`;

				// Convert volume from units to lots
				const lots = unitsToLots(position.tradeData.volume);

				// Determine side (Buy or Sell)
				const side = position.tradeData.tradeSide === 1 ? "BUY" : "SELL";

				console.log(`\nPosition ${index + 1}:`);
				console.log(`  Symbol: ${symbolName}`);
				console.log(`  Side: ${side}`);
				console.log(`  Volume: ${lots.toFixed(2)} lots`);
				console.log(`  Entry Price: ${position.price ?? "N/A"}`);
				console.log(`  Swap: ${position.swap}`);
				if (position.stopLoss !== undefined) {
					console.log(`  Stop Loss: ${position.stopLoss}`);
				}
				if (position.takeProfit !== undefined) {
					console.log(`  Take Profit: ${position.takeProfit}`);
				}
			});
		}
		console.log();

		// Get recent deals (last 24 hours)
		console.log("=== Recent Deals ===");
		const now = Date.now();
		const oneDayAgo = now - 24 * 60 * 60 * 1000;
		const { deals, hasMore } = await ct.getDeals(oneDayAgo, now);

		console.log(`Deals in last 24h: ${deals.length}`);
		if (hasMore) {
			console.log(`(more deals available — increase maxRows to fetch all)`);
		}
		console.log();

		// Summary
		console.log("=== Summary ===");
		console.log(`Total Balance: ${state.balance}`);
		console.log(`Equity: ${state.equity}`);
		console.log(`Open Positions: ${state.positions.length}`);
		console.log(`Recent Deals (24h): ${deals.length}`);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		ct.disconnect();
		console.log("\nDisconnected");
	}
}

main();
