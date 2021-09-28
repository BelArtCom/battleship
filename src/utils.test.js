import { isPositiveInt } from "./utils.js";

describe("isPositiveInt", () => {
  test("returns true if string is integer", () => {
    expect(isPositiveInt("42")).toBe(true);
    expect(isPositiveInt("1")).toBe(true);
    expect(isPositiveInt("007")).toBe(true);
});

test("returns false if string is non-integer", () => {
    expect(isPositiveInt("fgt")).toBe(false);
    expect(isPositiveInt("10E3")).toBe(false);
    expect(isPositiveInt("10e3")).toBe(false);
    expect(isPositiveInt("0")).toBe(false);
    expect(isPositiveInt("-1")).toBe(false);
    expect(isPositiveInt("12frg")).toBe(false);
    expect(isPositiveInt("hjk61")).toBe(false);
    expect(isPositiveInt("34fgt65")).toBe(false);
    expect(isPositiveInt("sdr546gty")).toBe(false);
    expect(isPositiveInt("0.1")).toBe(false);
    expect(isPositiveInt("0,1")).toBe(false);
  });

});
