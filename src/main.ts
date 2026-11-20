import { calculate, type Operator } from "./calculator.js";

const VALID_OPERATORS: ReadonlySet<string> = new Set([
  "+",
  "-",
  "*",
  "/",
  "^",
  "%",
]);

export function evaluateForm(
  leftRaw: string,
  opRaw: string,
  rightRaw: string,
): string {
  const a = Number(leftRaw);
  const b = Number(rightRaw);

  if (!VALID_OPERATORS.has(opRaw)) {
    throw new Error(`Unsupported operator: ${opRaw}`);
  }

  const value = calculate(a, opRaw as Operator, b);
  return `Result: ${String(value)}`;
}

export function initCalculator(doc: Document = document): void {
  const leftEl = doc.getElementById("left") as HTMLInputElement | null;
  const rightEl = doc.getElementById("right") as HTMLInputElement | null;
  const opEl = doc.getElementById("operator") as HTMLSelectElement | null;
  const btnEl = doc.getElementById("calculate-btn") as HTMLButtonElement | null;
  const resultEl = doc.getElementById("result") as HTMLParagraphElement | null;

  if (!leftEl || !rightEl || !opEl || !btnEl || !resultEl) {
    return;
  }

  btnEl.addEventListener("click", () => {
    try {
      resultEl.textContent = evaluateForm(
        leftEl.value,
        opEl.value,
        rightEl.value,
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : "Calculation error";
      resultEl.textContent = `Error: ${message}`;
    }
  });
}

if (typeof document !== "undefined") {
  initCalculator(document);
}
