import { describe, test, expect } from "bun:test";
import { pipsToRelative } from "./helpers.js";

describe("pipsToRelative", () => {
  test("converts pips with default pipPosition (4)", () => {
    // 10 pips * 10^(5-4) = 10 * 10 = 100
    expect(pipsToRelative(10)).toBe(100);
  });

  test("converts pips with pipPosition 4 (forex majors)", () => {
    expect(pipsToRelative(50, 4)).toBe(500);
    expect(pipsToRelative(1, 4)).toBe(10);
    expect(pipsToRelative(0.5, 4)).toBe(5);
  });

  test("converts pips with pipPosition 2 (JPY pairs)", () => {
    // 10 pips * 10^(5-2) = 10 * 1000 = 10000
    expect(pipsToRelative(10, 2)).toBe(10000);
    expect(pipsToRelative(1, 2)).toBe(1000);
  });

  test("converts pips with pipPosition 1 (XAUUSD)", () => {
    // 100 pips * 10^(5-1) = 100 * 10000 = 1000000
    expect(pipsToRelative(100, 1)).toBe(1000000);
    expect(pipsToRelative(1, 1)).toBe(10000);
  });

  test("handles zero pips", () => {
    expect(pipsToRelative(0)).toBe(0);
    expect(pipsToRelative(0, 2)).toBe(0);
  });

  test("rounds to integer", () => {
    // 1.5 pips * 10^(5-4) = 1.5 * 10 = 15
    expect(pipsToRelative(1.5, 4)).toBe(15);
    // 1.33 pips * 10^(5-4) = 1.33 * 10 = 13.3 → 13
    expect(pipsToRelative(1.33, 4)).toBe(13);
  });

  test("handles pipPosition 0", () => {
    // 5 pips * 10^(5-0) = 5 * 100000 = 500000
    expect(pipsToRelative(5, 0)).toBe(500000);
  });
});
