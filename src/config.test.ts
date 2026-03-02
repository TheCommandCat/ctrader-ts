import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import {
  hostForEnvironment,
  resolveConfig,
  loadStoredConfig,
  getConfigPath,
  DEMO_HOST,
  LIVE_HOST,
  API_PORT,
} from "./config.js";

describe("hostForEnvironment", () => {
  test('returns demo host for "demo"', () => {
    expect(hostForEnvironment("demo")).toBe(DEMO_HOST);
    expect(hostForEnvironment("demo")).toBe("demo.ctraderapi.com");
  });

  test('returns live host for "live"', () => {
    expect(hostForEnvironment("live")).toBe(LIVE_HOST);
    expect(hostForEnvironment("live")).toBe("live.ctraderapi.com");
  });
});

describe("constants", () => {
  test("API_PORT is 5035", () => {
    expect(API_PORT).toBe(5035);
  });

  test("DEMO_HOST is demo.ctraderapi.com", () => {
    expect(DEMO_HOST).toBe("demo.ctraderapi.com");
  });

  test("LIVE_HOST is live.ctraderapi.com", () => {
    expect(LIVE_HOST).toBe("live.ctraderapi.com");
  });
});

describe("getConfigPath", () => {
  test("returns a path under home directory", () => {
    const path = getConfigPath();
    expect(path).toContain(".config/ctrader-ts/config.json");
  });
});

describe("loadStoredConfig", () => {
  test("returns an object (may be empty or populated)", () => {
    const config = loadStoredConfig();
    expect(typeof config).toBe("object");
    expect(config).not.toBeNull();
  });
});

describe("resolveConfig", () => {
  const savedEnv: Record<string, string | undefined> = {};
  const envKeys = [
    "CTRADER_CLIENT_ID",
    "CTRADER_CLIENT_SECRET",
    "CTRADER_ACCESS_TOKEN",
    "CTRADER_REFRESH_TOKEN",
    "CTRADER_ACCOUNT_ID",
    "CTRADER_ENVIRONMENT",
  ];

  beforeEach(() => {
    for (const key of envKeys) {
      savedEnv[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of envKeys) {
      if (savedEnv[key] !== undefined) {
        process.env[key] = savedEnv[key];
      } else {
        delete process.env[key];
      }
    }
  });

  test("resolves config from overrides", () => {
    const config = resolveConfig({
      clientId: "cid",
      clientSecret: "csec",
      accessToken: "atok",
      accountId: 12345,
    });
    expect(config.clientId).toBe("cid");
    expect(config.clientSecret).toBe("csec");
    expect(config.accessToken).toBe("atok");
    expect(config.accountId).toBe(12345);
    expect(config.environment).toBe("demo"); // default
  });

  test('defaults environment to "demo"', () => {
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
    });
    expect(config.environment).toBe("demo");
  });

  test('respects environment override to "live"', () => {
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
      environment: "live",
    });
    expect(config.environment).toBe("live");
  });

  test("includes refreshToken when provided", () => {
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
      refreshToken: "rt",
    });
    expect(config.refreshToken).toBe("rt");
  });

  test("overrides take precedence over everything", () => {
    process.env["CTRADER_CLIENT_ID"] = "env-cid";
    process.env["CTRADER_CLIENT_SECRET"] = "env-csec";
    process.env["CTRADER_ACCESS_TOKEN"] = "env-atok";
    process.env["CTRADER_ACCOUNT_ID"] = "999";

    const config = resolveConfig({
      clientId: "override-cid",
      clientSecret: "override-csec",
      accessToken: "override-atok",
      accountId: 42,
    });
    expect(config.clientId).toBe("override-cid");
    expect(config.clientSecret).toBe("override-csec");
    expect(config.accessToken).toBe("override-atok");
    expect(config.accountId).toBe(42);
  });

  test("env vars are used when no override provided", () => {
    process.env["CTRADER_CLIENT_ID"] = "env-cid";
    process.env["CTRADER_CLIENT_SECRET"] = "env-csec";
    process.env["CTRADER_ACCESS_TOKEN"] = "env-atok";
    process.env["CTRADER_ACCOUNT_ID"] = "999";
    process.env["CTRADER_ENVIRONMENT"] = "live";

    const config = resolveConfig();
    expect(config.clientId).toBe("env-cid");
    expect(config.clientSecret).toBe("env-csec");
    expect(config.accessToken).toBe("env-atok");
    expect(config.accountId).toBe(999);
    expect(config.environment).toBe("live");
  });

  test("ignores invalid CTRADER_ENVIRONMENT values", () => {
    process.env["CTRADER_ENVIRONMENT"] = "staging";
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
    });
    expect(config.environment).toBe("demo");
  });

  test("CTRADER_REFRESH_TOKEN env var is picked up", () => {
    process.env["CTRADER_REFRESH_TOKEN"] = "env-rt";
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
    });
    expect(config.refreshToken).toBe("env-rt");
  });

  test("result has all required fields", () => {
    const config = resolveConfig({
      clientId: "c",
      clientSecret: "s",
      accessToken: "a",
      accountId: 1,
    });
    expect(config).toHaveProperty("clientId");
    expect(config).toHaveProperty("clientSecret");
    expect(config).toHaveProperty("accessToken");
    expect(config).toHaveProperty("accountId");
    expect(config).toHaveProperty("environment");
  });
});
