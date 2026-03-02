#!/usr/bin/env node
import * as p from "@clack/prompts";
import {
  saveConfig,
  loadStoredConfig,
  getConfigPath,
  DEMO_ENDPOINT,
  type Environment,
} from "../src/config.js";
import { CTraderConnection } from "../src/connection.js";
import { CTraderAuth } from "../src/modules/auth.js";

const OAUTH_TOKEN_URL = "https://openapi.ctrader.com/apps/token";
const REDIRECT_URI = "https://openapi.ctrader.com";

async function exchangeCodeForToken(
  code: string,
  clientId: string,
  clientSecret: string,
): Promise<{ accessToken: string; refreshToken: string }> {
  const url = new URL(OAUTH_TOKEN_URL);
  url.searchParams.set("grant_type", "authorization_code");
  url.searchParams.set("code", code);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("client_secret", clientSecret);

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} from token endpoint`);

  const body = (await res.json()) as Record<string, unknown>;
  if (body["errorCode"])
    throw new Error(`${body["errorCode"]}: ${body["description"]}`);
  if (!body["accessToken"]) throw new Error("No accessToken in response");

  return {
    accessToken: body["accessToken"] as string,
    refreshToken: body["refreshToken"] as string,
  };
}

function buildAuthUrl(clientId: string): string {
  const url = new URL(
    "https://id.ctrader.com/my/settings/openapi/grantingaccess/",
  );
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("scope", "trading");
  url.searchParams.set("product", "web");
  return url.toString();
}

function extractCode(raw: string): string | null {
  const trimmed = raw.trim();
  try {
    return new URL(trimmed).searchParams.get("code");
  } catch {
    if (trimmed.startsWith("code=")) return trimmed.slice(5);
    if (trimmed && !trimmed.includes(" ")) return trimmed;
    return null;
  }
}

async function run(): Promise<void> {
  p.intro("ctrader-ts — setup");

  const stored = loadStoredConfig();

  // ─── Step 1: App credentials ──────────────────────────────────────────────
  p.log.step("Step 1 of 3  —  App credentials");
  p.log.info(
    "Go to https://openapi.ctrader.com/apps → select your app → View Credentials",
  );

  const clientId = await p.text({
    message: "Client ID",
    placeholder: "19544_xxxxxx",
    ...(stored.clientId ? { initialValue: stored.clientId } : {}),
    validate: (v) => (v?.trim() ? undefined : "Required"),
  });
  if (p.isCancel(clientId)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const clientSecret = await p.password({
    message: "Client Secret",
    validate: (v) => (v?.trim() ? undefined : "Required"),
  });
  if (p.isCancel(clientSecret)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  // ─── Step 2: Get access token ─────────────────────────────────────────────
  p.log.step("Step 2 of 3  —  Authorize");

  let accessToken: string;
  let refreshToken: string;

  if (stored.accessToken && stored.refreshToken) {
    const refresh = await p.confirm({
      message: "You have a stored token. Re-authorize to get a fresh one?",
      initialValue: false,
    });
    if (p.isCancel(refresh)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    if (!refresh) {
      accessToken = stored.accessToken;
      refreshToken = stored.refreshToken;
    } else {
      ({ accessToken, refreshToken } = await doOAuthFlow(
        clientId as string,
        clientSecret as string,
      ));
    }
  } else {
    ({ accessToken, refreshToken } = await doOAuthFlow(
      clientId as string,
      clientSecret as string,
    ));
  }

  // ─── Step 3: Pick account ─────────────────────────────────────────────────
  p.log.step("Step 3 of 3  —  Choose account");

  const spinner = p.spinner();
  spinner.start("Fetching accounts…");

  const connection = new CTraderConnection({ host: DEMO_ENDPOINT });
  const auth = new CTraderAuth(connection);
  let accounts: Awaited<ReturnType<typeof auth.getAccountsByToken>>;

  try {
    await connection.connect();
    await auth.authenticateApp(clientId as string, clientSecret as string);
    accounts = await auth.getAccountsByToken(accessToken);
    connection.disconnect();
    spinner.stop(
      `Found ${accounts.length} account${accounts.length !== 1 ? "s" : ""}`,
    );
  } catch (err) {
    connection.disconnect();
    spinner.stop("Failed");
    p.log.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }

  if (accounts.length === 0) {
    p.log.error(
      "No accounts linked to this token. Re-authorize and make sure to approve at least one account.",
    );
    process.exit(1);
  }

  const accountChoice = await p.select({
    message: "Account",
    options: accounts.map((a) => {
      const type = a.isLive ? "live" : "demo";
      const parts: string[] = [type];
      if (a.traderLogin) parts.push(`login ${a.traderLogin}`);
      if (a.brokerTitleShort) parts.push(a.brokerTitleShort);
      return {
        value: String(a.ctidTraderAccountId),
        label: String(a.ctidTraderAccountId),
        hint: parts.join("  ·  "),
      };
    }),
    initialValue: stored.accountId ? String(stored.accountId) : undefined,
  });
  if (p.isCancel(accountChoice)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const chosen = accounts.find(
    (a) => String(a.ctidTraderAccountId) === accountChoice,
  )!;
  const environment: Environment = chosen.isLive ? "live" : "demo";

  // ─── Save ─────────────────────────────────────────────────────────────────
  saveConfig({
    clientId: clientId as string,
    clientSecret: clientSecret as string,
    accessToken,
    refreshToken,
    accountId: Number(accountChoice),
    environment,
  });

  const login = chosen.traderLogin ? `  ·  login ${chosen.traderLogin}` : "";
  p.outro(
    `Saved  ·  account ${accountChoice} (${environment}${login})  →  ${getConfigPath()}`,
  );
}

async function doOAuthFlow(
  clientId: string,
  clientSecret: string,
): Promise<{ accessToken: string; refreshToken: string }> {
  const authUrl = buildAuthUrl(clientId);

  p.log.info("1. Make sure this redirect URI is registered in your app:");
  p.log.info(
    `   https://openapi.ctrader.com/apps → Edit → Redirect URIs → add: ${REDIRECT_URI}`,
  );
  p.log.info("");
  p.log.info(
    "2. Open this URL in your browser and log in with your cTrader ID:",
  );
  p.log.info(`   ${authUrl}`);
  p.log.info("");
  p.log.info(
    "3. After approving, you'll be redirected to openapi.ctrader.com.",
  );
  p.log.info("   Copy the full URL from the address bar and paste it below.");

  const redirected = await p.text({
    message: "Paste the redirect URL",
    placeholder: "https://openapi.ctrader.com/?code=abc123xyz",
    validate: (v) =>
      extractCode(v ?? "")
        ? undefined
        : "No code found — paste the full URL from your browser's address bar",
  });
  if (p.isCancel(redirected)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const code = extractCode(redirected as string)!;

  const spinner = p.spinner();
  spinner.start("Exchanging code for access token…");

  try {
    const tokens = await exchangeCodeForToken(code, clientId, clientSecret);
    spinner.stop("Access token obtained");
    return tokens;
  } catch (err) {
    spinner.stop("Token exchange failed");
    p.log.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}

run().catch((err) => {
  process.stderr.write(String(err) + "\n");
  process.exit(1);
});
