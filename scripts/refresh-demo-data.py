"""Refresh the data behind the Student Atlas and JurisLearning demos.

Reads the sibling project repos and writes:
  src/data/atlas-sources.json  host of every unique source cited by Student Atlas
  src/data/juris-cases.json    JurisLearning's landmark cases, shortened for cards

Run from this repo's root with any Python 3:

    python3 scripts/refresh-demo-data.py

Set PROJECTS_DIR if the repos don't live next to this one.
The Miran demo has its own script: export-miran-demo.py.
"""
import ast
import json
import os
import re
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
PROJECTS = Path(os.environ.get("PROJECTS_DIR", ROOT.parent))
DATA = ROOT / "src" / "data"


def first_sentences(text: str, n: int) -> str:
    return " ".join(re.split(r"(?<=[.!?])\s+", text)[:n])


citations = (PROJECTS / "student-atlas/frontend/src/data/citations.ts").read_text()
urls = sorted(set(re.findall(r"url:\s*['\"]([^'\"]+)", citations)))
hosts = [urlparse(u).netloc.removeprefix("www.") for u in urls]
(DATA / "atlas-sources.json").write_text(json.dumps(hosts))
print(f"atlas: {len(hosts)} sources across {len(set(hosts))} sites")

seeds = ast.parse((PROJECTS / "JurisLearning/backend/app/constants/case_seeds.py").read_text())
cases = next(
    ast.literal_eval(n.value) for n in seeds.body
    if isinstance(n, ast.Assign) and getattr(n.targets[0], "id", None) == "CASE_SEEDS"
)
cards = [
    {
        "title": re.sub(r"\s*\[\d{4}\]$", "", c["title"]),
        "year": c["year"],
        "court": c["court"],
        "facts": first_sentences(c["summary"], 2),
        "why": first_sentences(c["significance"], 1),
    }
    for c in cases
]
(DATA / "juris-cases.json").write_text(json.dumps(cards, ensure_ascii=False))
print(f"juris: {len(cards)} cases")
