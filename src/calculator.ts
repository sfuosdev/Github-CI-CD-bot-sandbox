export type Operator = "+" | "-" | "*" | "/" | "^" | "%";

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function modulo(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

export function calculate(a: number, op: Operator, b: number): number {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Invalid number input");
  }

  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "^":
      return power(a, b);
    case "%":
      return modulo(a, b);
    default: {
      const _exhaustive: never = op;
      throw new Error(`Unsupported operator: ${String(_exhaustive)}`);
    }
  }
}
