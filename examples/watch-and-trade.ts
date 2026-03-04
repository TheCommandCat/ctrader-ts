/**
 * Watch and Trade Example
 *
 * Demonstrates streaming price data and conditional trading:
 * - Connect to cTrader
 * - Subscribe to spot price updates for a symbol
 * - Stream 5 price ticks and log bid/ask values
 * - Unsubscribe after 5 ticks
 * - If a price condition is met, place a buy order
 * - Disconnect
 *
 * This pattern shows how to:
 * - Use watchSpots() for real-time price streaming
 * - Implement tick-counting logic
 * - React to price movements
 * - Unsubscribe from streams
 *
 * Run: npx ts-node examples/watch-and-trade.ts
 */

import { connect } from "../src/index.js";

async function main() {
  const ct = await connect();

  try {
    // Get available symbols
    const symbols = await ct.getSymbols();
    const eurusd = symbols.find((s) => s.symbolName === "EURUSD");

    if (!eurusd) {
      console.log("EURUSD not found in available symbols");
      return;
    }

    console.log(`Watching EURUSD (ID: ${eurusd.symbolId})...`);
    console.log();

    // Track tick count for stopping after 5 ticks
    let tickCount = 0;
    const maxTicks = 5;
    let stopWatching: (() => Promise<void>) | undefined;

    // Subscribe to spot price updates
    // watchSpots calls the handler once per price update (not an array)
    stopWatching = await ct.watchSpots(["EURUSD"], (spot) => {
      tickCount++;
      console.log(
        `Tick ${tickCount}: Bid=${spot.bidDecimal?.toFixed(5) ?? "N/A"} Ask=${spot.askDecimal?.toFixed(5) ?? "N/A"}`,
      );

      // Example: If bid drops below 1.050, place a buy order
      // NOTE: Adjust this threshold (1.050) based on your trading strategy
      const triggerPrice = 1.05;
      if (
        spot.bidDecimal !== undefined &&
        spot.bidDecimal < triggerPrice &&
        tickCount === 1
      ) {
        console.log(
          `\nPrice condition met (bid < ${triggerPrice.toFixed(3)})!`,
        );
        console.log(`(Buy order would be placed here)`);
        console.log();
      }

      // Stop watching after maxTicks
      if (tickCount >= maxTicks) {
        console.log(`\nReached ${maxTicks} ticks, stopping watch...`);
        stopWatching?.();
      }
    });

    // Wait a bit to allow ticks to come in
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Manual cleanup if we haven't hit max ticks yet
    if (tickCount < maxTicks && stopWatching) {
      await stopWatching();
      console.log(`Stopped after ${tickCount} ticks`);
    }

    console.log(`\n=== Watch Summary ===`);
    console.log(`Total ticks received: ${tickCount}`);
    console.log(`Symbol watched: EURUSD`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    ct.disconnect();
    console.log("\nDisconnected");
  }
}

main();
