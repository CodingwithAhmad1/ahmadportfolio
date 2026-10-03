// Drawing helpers shared by the build and the browser. No data in here, so the
// client bundle stays small.
export type Kpis = { return: number; sharpe: number; pf: number; maxdd: number; trades: number; win: number };
export type Range = { min: number; max: number };

export const NAIVE = 'same_bar_close|0|0';
export const DEFAULT = 'next_bar_open|0.5|0.75';

export const key = (fill: string, fee: string, slip: string) => `${fill}|${fee}|${slip}`;

// SVG points over a 1000 × 100 box; the chart stretches it to fit.
function points(values: number[], min: number, max: number): string[] {
  return values.map((v, i) => {
    const x = (i / (values.length - 1)) * 1000;
    const y = 100 - ((v - min) / (max - min)) * 100;
    return `${x.toFixed(1)},${y.toFixed(2)}`;
  });
}

export function path(values: number[], min: number, max: number): string {
  return `M${points(values, min, max).join('L')}`;
}

// The area between two curves, for shading what the costs took.
export function gap(top: number[], bottom: number[], min: number, max: number): string {
  const back = points(bottom, min, max).reverse();
  return `M${points(top, min, max).join('L')}L${back.join('L')}Z`;
}

export const yOf = (v: number, r: Range) => 100 - ((v - r.min) / (r.max - r.min)) * 100;

export const pct = (x: number, digits = 1) => `${x >= 0 ? '+' : '−'}${Math.abs(x * 100).toFixed(digits)}%`;
