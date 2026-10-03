"""Regenerate src/data/invictus-demo.json from the real Invictus engine.

Generates a seeded synthetic market, runs one strategy under 18 combinations of
fill timing, commission and slippage, and writes the equity curves and KPIs the
home page demo draws. Nothing is written inside the Invictus repo: its data and
output folders are pointed at a temporary directory.

Run from this repo's root, with Invictus's own Python:

    ../backtestengine/.venv/bin/python scripts/export-invictus-demo.py

Set INVICTUS_DIR if the engine lives somewhere other than ../backtestengine.
"""
import itertools
import json
import logging
import os
import sys
import tempfile
import warnings
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src" / "data" / "invictus-demo.json"
ENGINE = Path(os.environ.get("INVICTUS_DIR", Path(__file__).resolve().parents[2] / "backtestengine"))

STRATEGY = "macd_atr_trend"
MARKET = dict(calendar="fx_24_5", start="2019-01-01", end="2025-01-01", bar_seconds=4 * 3600,
              price0=1.1, tick_size=0.00001, profile="fx_major", seed=7)
FILLS = ["same_bar_close", "next_bar_open"]
FEES = [0, 0.5, 1.0]        # bps per side; keys must match the demo's radio values
SLIPPAGES = [0, 0.75, 1.5]  # bps per side

tmp = Path(tempfile.mkdtemp(prefix="invictus-demo-"))
os.environ["BACKTEST_DATA_ROOT"] = str(tmp / "data")
os.environ["BACKTEST_OUTPUT_DIR"] = str(tmp / "out")
sys.path.insert(0, str(ENGINE))
warnings.filterwarnings("ignore")
logging.disable(logging.WARNING)

import pandas as pd  # noqa: E402

import config  # noqa: E402
from engine.synthetic.market import generate_bars  # noqa: E402
from main.pipeline import run_backtest  # noqa: E402

bars = generate_bars(**MARKET)
hist = config.settings.historical_data_dir
hist.mkdir(parents=True, exist_ok=True)
bars.to_csv(hist / "synth.csv", index=False)
bars = bars.set_index("UTC")
t0 = bars.index[0]


def day(ts) -> float:
    return round((pd.Timestamp(ts) - t0).total_seconds() / 86400, 2)


daily = bars["Close"].resample("1D").last().dropna()
price = [[day(t), round(float(v), 5)] for t, v in daily.items()]

variants = {}
for fill, fee, slip in itertools.product(FILLS, FEES, SLIPPAGES):
    r = run_backtest(STRATEGY, {}, data_source={"type": "local", "filename": "synth.csv"},
                     execution_config={"model": fill}, fee_bps=fee, slippage_bps=slip,
                     write_disk=False, store_result=False)
    k = r["kpis"]
    # Compound each trade's return on the price at its timestamp, matching the
    # engine's compounded KPI to within a fraction of a percent.
    equity, curve = 1.0, [[0, 1.0]]
    for trade in r["charts"]["trades_detail"]:
        ts = pd.Timestamp(trade["timestamp"])
        equity *= 1 + trade["pnl"] / float(bars["Close"].asof(ts))
        curve.append([day(ts), round(equity, 4)])
    variants[f"{fill}|{fee}|{slip}"] = {
        "curve": curve,
        "kpis": {"return": k["total_return_pct_compounded"], "sharpe": k["sharpe_ratio_annual"],
                 "pf": k["profit_factor"], "maxdd": k["max_drawdown_pct_compounded"],
                 "trades": k["n_trades"], "win": k["win_rate"]},
    }
    print(f"{fill:15s} fee={fee:<4} slip={slip:<5} return={k['total_return_pct_compounded']:+.2%}")

market = {"profile": MARKET["profile"], "calendar": MARKET["calendar"], "bar": "4h", "seed": MARKET["seed"],
          "start": MARKET["start"], "end": MARKET["end"], "bars": len(bars)}
OUT.write_text(json.dumps({"strategy": STRATEGY, "market": market, "price": price, "variants": variants},
                          separators=(",", ":")))
print(f"wrote {OUT}")
