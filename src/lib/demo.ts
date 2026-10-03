// Shapes the exported Invictus results for the demo chart, at build time.
// The browser only gets the shaped arrays, never this file or the raw JSON.
import raw from '../data/invictus-demo.json';
export { path, gap, pct, yOf, key, NAIVE, DEFAULT } from './chart';

export const POINTS = 240;

import type { Kpis } from './chart';
type Raw = {
  strategy: string;
  market: { profile: string; calendar: string; bar: string; seed: number; start: string; end: string; bars: number };
  price: [number, number][];
  variants: Record<string, { curve: [number, number][]; kpis: Kpis }>;
};

const data = raw as unknown as Raw;
const lastDay = data.price[data.price.length - 1][0];
const grid = Array.from({ length: POINTS }, (_, i) => (lastDay * i) / (POINTS - 1));

// Step-resample a [day, value] series onto the shared grid.
function resample(series: [number, number][]): number[] {
  const out: number[] = [];
  let j = 0;
  for (const t of grid) {
    while (j + 1 < series.length && series[j + 1][0] <= t) j++;
    out.push(series[j][1]);
  }
  return out;
}

export const meta = { strategy: data.strategy, market: data.market, lastDay };
export const price = resample(data.price);
export const variants = Object.fromEntries(
  Object.entries(data.variants).map(([k, v]) => [k, { curve: resample(v.curve), kpis: v.kpis }]),
);

const all = Object.values(variants).flatMap((v) => v.curve);
export const range = { min: Math.min(...all) - 0.02, max: Math.max(...all) + 0.02 };


