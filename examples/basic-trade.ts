/**
 * Basic Trade Example
 *
 * Demonstrates core trading operations:
 * - Connect to cTrader
 * - Check account state (balance, equity, free margin)
 * - Find a symbol (EURUSD)
 * - Place a buy order with stop loss and take profit
 * - Modify the stop loss
 * - Close the position
 * - Disconnect
 *
 * Run: npx ts-node examples/basic-trade.ts
 */

import { connect } from "../src/index.js";

async function main() {
	const ct = await connect();

	try {
		// Get current account state
		const state = await ct.getState();
		console.log("=== Account State ===");
		console.log(`Balance: ${state.balance}`);
		console.log(`Equity: ${state.equity}`);
		console.log(`Free Margin: ${state.freeMargin}`);
		console.log();

		// Get available symbols
		const symbols = await ct.getSymbols();
		const eurusd = symbols.find((s) => s.symbolName === "EURUSD");

		if (!eurusd) {
			console.log("EURUSD not found in available symbols");
			return;
		}

		console.log(`Found EURUSD: ID=${eurusd.symbolId}`);
		console.log();

		// Place a buy order with stop loss and take profit
		console.log("=== Opening Position ===");
		const position = await ct.buy("EURUSD", {
			lots: 0.01,
			sl: { pips: 50 },
			tp: { pips: 100 },
		});

		console.log(`Position Opened:`);
		console.log(`  Position ID: ${position.positionId}`);
		console.log(`  Entry Price: ${position.price}`);
		console.log(`  Volume: ${position.tradeData.volume} units`);
		console.log();

		// Wait 2 seconds
		console.log("Waiting 2 seconds before modifying...");
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Modify the stop loss
		console.log("=== Modifying Position ===");
		await ct.modify(position.positionId, {
			sl: { pips: 30 },
		});
		console.log(`Stop Loss modified to 30 pips`);
		console.log();

		// Close the position
		console.log("=== Closing Position ===");
		const closeEvent = await ct.close(position.positionId);
		console.log(`Position closed`);
		console.log(`  Execution type: ${closeEvent.executionType}`);
		console.log();

		// Get final state
		const finalState = await ct.getState();
		console.log("=== Final Account State ===");
		console.log(`Balance: ${finalState.balance}`);
		console.log(`Equity: ${finalState.equity}`);
		console.log(`Unrealized P&L: ${finalState.unrealizedPnl}`);
	} catch (error) {
		console.error("Error:", error);
	} finally {
		ct.disconnect();
		console.log("\nDisconnected");
	}
}

main();
