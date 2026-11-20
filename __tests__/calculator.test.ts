import {
  add,
  calculate,
  divide,
  modulo,
  multiply,
  power,
  subtract,
} from "../src/calculator";

describe("calculator functions", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-4, 1.5)).toBe(-2.5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(3, 8)).toBe(-5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
    expect(multiply(-3, 5)).toBe(-15);
  });

  test("divides two numbers and throws on zero", () => {
    expect(divide(20, 4)).toBe(5);
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("computes exponentiation and modulo", () => {
    expect(power(2, 5)).toBe(32);
    expect(modulo(10, 3)).toBe(1);
    expect(() => modulo(10, 0)).toThrow("Cannot divide by zero");
  });

  test("dispatches via calculate() across all operators and error cases", () => {
    expect(calculate(8, "+", 2)).toBe(10);
    expect(calculate(8, "-", 2)).toBe(6);
    expect(calculate(8, "*", 2)).toBe(16);
    expect(calculate(8, "/", 2)).toBe(4);
    expect(calculate(2, "^", 5)).toBe(32);
    expect(calculate(10, "%", 3)).toBe(1);
    expect(() => calculate(Number.NaN, "+", 2)).toThrow("Invalid number input");
    expect(() => calculate(2, "?", 2)).toThrow("Unsupported operator");
  });
});
