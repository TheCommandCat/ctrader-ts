<div align="center">

<img src="./assets/banner.png" alt="ctrader-ts — TypeScript client for cTrader Open API" width="100%" />

<br />
<br />

[![npm version](https://img.shields.io/npm/v/ctrader-ts?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/ctrader-ts)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-≥18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![cTrader](https://img.shields.io/badge/cTrader-Open%20API-FF6B35?style=flat-square)](https://help.ctrader.com/open-api/)

**The TypeScript/Node.js client for the cTrader Open API**

Trade forex, CFDs, and commodities programmatically. Build trading bots, portfolio dashboards, and AI trading agents.

*Unofficial community project · Not affiliated with Spotware* 🤝

[Getting Started](#-getting-started) · [API Reference](#-library-api) · [CLI](#%EF%B8%8F-cli) · [Examples](#-examples) · [For AI Agents](#-for-ai-agents)

</div>

---

## Why ctrader-ts?

There's no official TypeScript SDK for the cTrader Open API. The raw API is a protobuf/WebSocket protocol — powerful but painful to use directly. This library wraps it into a clean, type-safe interface:

```ts
import { connect } from "ctrader-ts";

const ct = await connect();
const pos = await ct.buy("EURUSD", { lots: 0.1, sl: { pips: 50 }, tp: { equity: 0.02 } });
await ct.modify(pos.positionId, { sl: { pips: 30 } });  // preserves existing TP
await ct.close(pos.positionId);
```

**What you get:**

- **Zero boilerplate** — `connect()` handles auth, WebSocket setup, heartbeat, and reconnection
- **Human-friendly units** — trade in lots, set SL/TP in pips, dollars, or equity %. No unit conversions.
- **Full type safety** — every method, parameter, and response is typed. No `any`, no `@ts-ignore`.
- **Auto-retry** — rate-limit errors are retried automatically with exponential backoff
- **Actionable errors** — error messages tell you exactly what went wrong and how to fix it
- **AI-agent ready** — designed for LLM agents to understand and use without documentation lookup
- **CLI included** — every operation available from the terminal with `--json` output

---

## 🚀 Getting Started

### Install

```bash
npm install ctrader-ts
```

### Authenticate

You need a cTrader Open API application. Create one at [openapi.ctrader.com/apps](https://openapi.ctrader.com/apps), then run:

```bash
npx ctrader-ts auth
```

The interactive wizard walks you through OAuth in 3 steps. Credentials are saved to `~/.config/ctrader-ts/config.json`.

**Environment variables** work too:

```bash
export CTRADER_CLIENT_ID=your_client_id
export CTRADER_CLIENT_SECRET=your_client_secret
export CTRADER_ACCESS_TOKEN=your_access_token
export CTRADER_ACCOUNT_ID=12345678
export CTRADER_ENVIRONMENT=demo   # or live
```

### Connect and trade

```ts
import { connect } from "ctrader-ts";

const ct = await connect();

// Get a complete account snapshot
const state = await ct.getState();
console.log(`Balance: $${state.balance}, Equity: $${state.equity}`);
console.log(`Open positions: ${state.positions.length}`);

// Each position includes computed convenience fields
for (const pos of state.positions) {
  console.log(`${pos.volumeInLots} lots at ${pos.entryPrice}`);
}

// Place a trade
const pos = await ct.buy("EURUSD", {
  lots: 0.1,
  sl: { pips: 50 },
  tp: { dollars: 25 },
});

console.log(`Opened position ${pos.positionId} at ${pos.price}`);

ct.disconnect();
```

---

## 📦 Library API

### Account & Portfolio

```ts
// Complete account snapshot — call this first
const state = await ct.getState();
// → { balance, equity, usedMargin, freeMargin, marginLevel, unrealizedPnl,
//     positions (enriched), orders, moneyDigits }

// Trader profile with leverage
const trader = await ct.getTrader();
// → { ...traderFields, leverage: 100 }  (computed from leverageInCents)

// Position + order snapshot
const { positions, orders } = await ct.getPositions();

// Deal and order history (defaults to last 24h)
const { deals } = await ct.getDeals();
const { deals: recentDeals } = await ct.getDeals({ from: Date.now() - 7 * 86400000 });
const { orders: orderHistory } = await ct.getOrders({ from: Date.now() - 86400000 });

// Margin estimation before trading
const { margins } = await ct.getExpectedMargin("EURUSD", [0.1, 0.5, 1.0]);
```

### Trading

**Market orders** — execute immediately, return the opened `Position`:

```ts
const p1 = await ct.buy("EURUSD", { lots: 0.1 });
const p2 = await ct.buy("EURUSD", { lots: 0.05, sl: { pips: 50 }, tp: { pips: 100 } });
const p3 = await ct.sell("USDJPY", { lots: 0.1, sl: { dollars: 30 } });
const p4 = await ct.buy("XAUUSD", { lots: 0.01, sl: { equity: 0.02 } });
```

**Pending orders:**

```ts
await ct.buyLimit("EURUSD",  { lots: 0.1, limitPrice: 1.0800 });
await ct.sellLimit("EURUSD", { lots: 0.1, limitPrice: 1.1200 });
await ct.buyStop("EURUSD",   { lots: 0.1, stopPrice: 1.1050 });
await ct.sellStop("EURUSD",  { lots: 0.1, stopPrice: 1.0950 });
```

### SL/TP — three ways, zero math

No manual pip calculations. Every order accepts `sl` and `tp` in whichever unit makes sense:

| Unit | Example | What it means |
|---|---|---|
| **Pips** | `{ pips: 50 }` | 50 pips from entry — symbol-aware (handles JPY, gold, etc.) |
| **Dollars** | `{ dollars: 25 }` | Lose/gain exactly $25 on this trade |
| **Equity %** | `{ equity: 0.02 }` | Risk 2% of your account equity |

The library automatically resolves symbol details and current prices to compute the exact values.

### Position Management

Positions use their real cTrader `positionId` — no invented ID system:

```ts
// Modify SL/TP — preserves the other when only one is changed
await ct.modify(pos.positionId, { sl: { pips: 30 } });           // keeps existing TP
await ct.modify(pos.positionId, { tp: { dollars: 50 } });        // keeps existing SL
await ct.modify(pos.positionId, { sl: { pips: 30 }, tp: { dollars: 50 } });  // change both

// Resize — change position volume to a new target
await ct.resize(pos.positionId, 0.2);   // increase to 0.2 lots
await ct.resize(pos.positionId, 0.05);  // decrease to 0.05 lots

// Close — full or partial
await ct.close(pos.positionId);
await ct.close(pos.positionId, { lots: 0.02 });  // partial close

// Bulk operations
await ct.closeSymbol("EURUSD");  // close all EURUSD positions
await ct.closeAll();             // close everything

// Cancel pending order
await ct.cancelOrder(orderId);
```

### Market Data

```ts
// Available symbols
const symbols = await ct.getSymbols();

// Full details for a single symbol
const info = await ct.getSymbolInfo("EURUSD");
// → { digits, pipPosition, minVolume, maxVolume, stepVolume, lotSize, swapLong, swapShort, ... }

// Stream live bid/ask — returns an unsubscribe function
const stop = await ct.watchSpots(["EURUSD", "GBPUSD"], (price) => {
  console.log(price.symbol, price.bidDecimal, price.askDecimal);
});
await stop(); // done

// Historical candles
const { trendbars } = await ct.getTrendbars("EURUSD", {
  period: TrendbarPeriod.H1,
  count: 100,
});

// Raw tick data
const { ticks } = await ct.getTickData("EURUSD", {
  type: QuoteType.BID,
  fromTimestamp: Date.now() - 3_600_000,
  toTimestamp: Date.now(),
});
```

### Events

All return an unsubscribe function:

```ts
ct.onExecution((e)         => console.log("fill:", e.executionType, e.position?.positionId));
ct.onOrderError((e)        => console.error("order rejected:", e.errorCode));
ct.onTrailingSLChanged((e) => console.log("trailing SL moved to:", e.stopPrice));
ct.onMarginChanged((e)     => console.log("margin updated:", e.usedMargin));
ct.onTokenInvalidated(()   => console.warn("token expired — run ctrader-ts auth"));
ct.onClientDisconnect((e)  => console.warn("server dropped connection:", e.reason));
```

### Raw Protocol Access

Everything the high-level API doesn't expose is available via `ct.raw`:

```ts
ct.raw.trading.marketRangeOrder({ ... });
ct.raw.account.getDynamicLeverage(leverageId);
ct.raw.market.subscribeLiveTrendbar(symbolId, TrendbarPeriod.M1);
ct.raw.auth.refreshToken(refreshToken);
```

### connect() options

```ts
const ct = await connect({
  environment: "live",   // override stored environment
  accountId: 12345678,   // override stored account
  accessToken: "...",    // override stored token
});
```

---

## 🖥️ CLI

Every operation available from the terminal. Add `--json` for pipe-friendly structured output.

```bash
# Auth
ctrader-ts auth

# Account
ctrader-ts state                                      # full account snapshot
ctrader-ts positions                                  # open positions + orders

# Trade
ctrader-ts buy  EURUSD 0.1 --sl-pips 50 --tp-pips 100
ctrader-ts sell USDJPY 0.1 --sl-dollars 30
ctrader-ts buy  XAUUSD 0.01 --sl-equity 0.02

# Pending orders
ctrader-ts buy-limit  EURUSD 0.1 1.0800
ctrader-ts sell-limit EURUSD 0.1 1.1200
ctrader-ts buy-stop   EURUSD 0.1 1.1050

# Manage positions
ctrader-ts close 12345678                              # full close
ctrader-ts close 12345678 --lots 0.05                  # partial
ctrader-ts modify 12345678 --sl-pips 30 --tp-dollars 50
ctrader-ts resize 12345678 0.2                         # resize to 0.2 lots
ctrader-ts close-symbol EURUSD
ctrader-ts close-all
ctrader-ts cancel 87654321

# Market data
ctrader-ts symbols                                     # list all symbols
ctrader-ts symbol-info EURUSD                          # full symbol details
ctrader-ts watch EURUSD GBPUSD                         # live prices, Ctrl+C to stop
ctrader-ts bars EURUSD H1 2024-01-01 2024-12-31       # historical candles

# History
ctrader-ts history --from 2024-01-01 --to 2024-12-31

# JSON output for piping
ctrader-ts state --json
ctrader-ts positions --json | jq '.positions[].positionId'
```

---

## 📁 Examples

See the [`examples/`](./examples) directory for runnable scripts:

- **[`basic-trade.ts`](./examples/basic-trade.ts)** — Open a position with SL/TP, modify the stop loss, close the position
- **[`watch-and-trade.ts`](./examples/watch-and-trade.ts)** — Stream live prices and react to conditions
- **[`portfolio-report.ts`](./examples/portfolio-report.ts)** — Generate an account report with positions, leverage, and deal history

```bash
npx ts-node examples/basic-trade.ts
```

---

## 🤖 For AI Agents

Designed from the ground up for LLM-powered trading agents:

- **`getState()` first** — one call gives a complete picture: balance, equity, margin, all positions with `volumeInLots` and `entryPrice`, all pending orders
- **Human units everywhere** — `{ pips }`, `{ dollars }`, `{ equity }` — no protocol encoding knowledge needed
- **Real position IDs** — every `buy()`/`sell()` returns the actual `positionId`, so modify/resize/close are unambiguous
- **Actionable errors** — every error includes a `hint` property with recovery instructions (e.g. "Run `ctrader-ts auth` to re-authenticate")
- **Auto-retry** — rate-limit errors retry automatically — agents don't need retry logic
- **CLI with `--json`** — agents with shell access get structured output without Node.js in the loop
- **`llms.txt`** — machine-readable API reference included in the package

```ts
import { connect, CTraderError } from "ctrader-ts";

const ct = await connect();
const state = await ct.getState();
// reason about state.equity, state.positions, state.marginLevel...

try {
  const pos = await ct.buy("EURUSD", { lots: 0.1, sl: { equity: 0.01 } });
  console.log("opened", pos.positionId);
} catch (e) {
  if (e instanceof CTraderError) {
    console.error(e.hint);   // "Your access token has expired. Run `ctrader-ts auth`..."
    if (e.isAuthError)   { /* re-authenticate */ }
    if (e.isRateLimit)   { /* auto-retried, only thrown after 3 failures */ }
    if (e.isMaintenance) { /* server down, try later */ }
  }
}
```

---

## ⚙️ Error Handling

Every error from the cTrader API becomes a typed `CTraderError` with:

| Property | Type | Description |
|----------|------|-------------|
| `code` | `string` | Machine-readable error code |
| `description` | `string` | Server-provided description |
| `hint` | `string \| undefined` | Actionable recovery instructions |
| `isAuthError` | `boolean` | Token expired / not authenticated |
| `isRateLimit` | `boolean` | Too many requests (auto-retried first) |
| `isMaintenance` | `boolean` | Server under maintenance |
| `retryAfter` | `number \| undefined` | Wait time in ms (rate limit only) |

```ts
import { CTraderError, RequestTimeoutError, NotConnectedError } from "ctrader-ts";

try {
  await ct.buy("EURUSD", { lots: 999 });
} catch (e) {
  if (e instanceof CTraderError) {
    console.error(e.message);
    // "[NOT_ENOUGH_MONEY] Insufficient free margin — Reduce position size or close
    //  existing positions to free up margin."
  }
}
```

---

## 🔄 Reliability

### Auto-Reconnection

Connection drops are handled automatically:

- Reconnects with exponential backoff (2s → 60s max)
- Re-authenticates after reconnect (app + account auth)
- Restores all active spot / depth / trendbar subscriptions

### Auto-Retry on Rate Limit

Rate-limit errors (`REQUEST_FREQUENCY_EXCEEDED`) are retried automatically:

- Exponential backoff: 1s → 2s → 4s
- Uses server-provided `retryAfter` when available
- Up to 3 retries before throwing to your code

No user code needed for either.

---

## 🏗️ Architecture

```
connect()  →  CTrader (high-level, human-friendly API)
  └─ CTrader
       ├─ connection → CTraderConnection (TLS/TCP, heartbeat, reconnect, auto-retry)
       └─ raw
            ├─ auth    → CTraderAuth (app/account auth, token management)
            ├─ trading → CTraderTrading (order CRUD, execution events)
            ├─ account → CTraderAccount (balance, history, margin)
            └─ market  → CTraderMarket (symbols, spots, trendbars, depth)
```

| Layer | When to use |
|-------|------------|
| `ct.buy()`, `ct.getState()` | Most of the time — clean API, human units |
| `ct.raw.trading.*` | Need parameters the high-level API doesn't expose |
| `ct.connection.*` | Direct WebSocket control, custom event handling |

---

## 📜 License

MIT — use it however you want.

---

<div align="center">

**[npm](https://www.npmjs.com/package/ctrader-ts)** · **[GitHub](https://github.com/thecommandcat/ctrader-ts)** · **[cTrader Open API Docs](https://help.ctrader.com/open-api/)**

</div>
