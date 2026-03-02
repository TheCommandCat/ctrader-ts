import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

export type Environment = "demo" | "live";

export interface CTraderConfig {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  refreshToken?: string;
  accountId: number;
  environment: Environment;
}

export type PartialConfig = Partial<CTraderConfig>;

const CONFIG_DIR = join(homedir(), ".config", "ctrader-ts");
const CONFIG_PATH = join(CONFIG_DIR, "config.json");

export const DEMO_HOST = "demo.ctraderapi.com";
export const LIVE_HOST = "live.ctraderapi.com";
export const API_PORT = 5035;

/** @deprecated Use DEMO_HOST instead */
export const DEMO_ENDPOINT = DEMO_HOST;
/** @deprecated Use LIVE_HOST instead */
export const LIVE_ENDPOINT = LIVE_HOST;

export function hostForEnvironment(environment: Environment): string {
  return environment === "live" ? LIVE_HOST : DEMO_HOST;
}

/** @deprecated Use hostForEnvironment instead */
export function endpointForEnvironment(environment: Environment): string {
  return hostForEnvironment(environment);
}

export function loadStoredConfig(): PartialConfig {
  if (!existsSync(CONFIG_PATH)) return {};
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, "utf-8")) as PartialConfig;
  } catch {
    return {};
  }
}

export function saveConfig(config: CTraderConfig): void {
  if (!existsSync(CONFIG_DIR)) mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

export function getConfigPath(): string {
  return CONFIG_PATH;
}

function fromEnv(): PartialConfig {
  const env = process.env;
  const result: PartialConfig = {};
  if (env["CTRADER_CLIENT_ID"]) result.clientId = env["CTRADER_CLIENT_ID"];
  if (env["CTRADER_CLIENT_SECRET"])
    result.clientSecret = env["CTRADER_CLIENT_SECRET"];
  if (env["CTRADER_ACCESS_TOKEN"])
    result.accessToken = env["CTRADER_ACCESS_TOKEN"];
  if (env["CTRADER_REFRESH_TOKEN"])
    result.refreshToken = env["CTRADER_REFRESH_TOKEN"];
  if (env["CTRADER_ACCOUNT_ID"])
    result.accountId = Number(env["CTRADER_ACCOUNT_ID"]);
  if (
    env["CTRADER_ENVIRONMENT"] === "live" ||
    env["CTRADER_ENVIRONMENT"] === "demo"
  ) {
    result.environment = env["CTRADER_ENVIRONMENT"];
  }
  return result;
}

export function resolveConfig(overrides?: PartialConfig): CTraderConfig {
  const stored = loadStoredConfig();
  const env = fromEnv();
  const merged: PartialConfig = { ...stored, ...env, ...overrides };

  if (!merged.clientId)
    throw new Error(
      "Missing clientId. Run `ctrader-ts auth` or set CTRADER_CLIENT_ID.",
    );
  if (!merged.clientSecret)
    throw new Error(
      "Missing clientSecret. Run `ctrader-ts auth` or set CTRADER_CLIENT_SECRET.",
    );
  if (!merged.accessToken)
    throw new Error(
      "Missing accessToken. Run `ctrader-ts auth` or set CTRADER_ACCESS_TOKEN.",
    );
  if (!merged.accountId)
    throw new Error(
      "Missing accountId. Run `ctrader-ts auth` or set CTRADER_ACCOUNT_ID.",
    );

  const result: CTraderConfig = {
    clientId: merged.clientId,
    clientSecret: merged.clientSecret,
    accessToken: merged.accessToken,
    accountId: merged.accountId,
    environment: merged.environment ?? "demo",
  };
  if (merged.refreshToken) result.refreshToken = merged.refreshToken;
  return result;
}
