# V2 plan: beat neo.steinhoff.group

## The benchmark, honestly

**What it does well**

- A strong first impression: a branded loading screen, a live clock and coordinates in the hero.
- Numbers everywhere: count-up stats, a scrolling ticker of roles, a numbered track record with results.
- Complete: work, products, about, principles, "now", academics, and contact with every channel plus a vCard.

**Where it's weak**

- **Claims without proof.** IQ, portfolio size, client counts: all self-reported. Both products say "link soon". Nothing can be clicked, run or checked.
- **Content hidden behind animation.** Whole sections stay blank until scroll animations fire. Slow devices, screenshots and some crawlers see a black page.
- **A template look.** Dark grid, mono all-caps labels, 01–09 numbering, green glow, a pill nav. It looks like many other portfolios.
- **A loader in front of the content.** It costs a visitor time before they've seen anything.

## How we win

Neo sells **claims**. We sell **proof**.

Every number on the site links to its source: a test file, a commit graph, a live app, a public repo. And the flagship project isn't described; **you can use it**, right on the page.

| | Neo | Ahmad v2 |
| --- | --- | --- |
| Headline numbers | Self-reported | Each one links to evidence |
| Products | "Link soon" | Live demos, real screenshots, a playable backtest |
| First paint | Loader, then animation | Content instantly, motion added on top |
| Look | Common dark template | Its own identity (see [DESIGN.md](DESIGN.md)) |
| Works without JS | No | Yes |
| Lighthouse | Not measured | 100 / 100 / 100 / 100 as a goal |

Positioning in one line: **a builder who ships rigorous systems**. That means trading infrastructure with 2,000+ tests, a visa guide that watches 305 government sources by itself, and an AI that is never allowed to invent a quote.

## Site structure

```
/                     Home
/work                 All projects
/work/invictus        Flagship case study with the interactive demo
/work/student-atlas   Case study
/work/jurislearning   Case study
/work/speak-up        Case study (student parliament)
/work/reportiq        Case study (whistleblowing, open source)
/blog                 Writing
/blog/[slug]          Post
```

## Home page, top to bottom

1. **Hero.** Keep the giant interactive name, since it's already ours. Under it, one line of positioning and one line of live proof pulled at build time, for example: "Last commit 2 days ago."
2. **Invictus, full width.** The flagship gets its own band straight after the hero, not a row in a list. A real equity curve on a real chart, three verifiable numbers, and a button to open the demo.
3. **Other work.** Four projects as rows with a screenshot that appears on hover or focus. Each row has a single strongest fact.
4. **Writing.** The three latest posts.
5. **Contact.** Email, GitHub, LinkedIn. Short and clean.

## Flagship: Invictus (backtesting engine)

This is where the site wins. The repo is private, so the page carries the proof itself.

### The interactive demo

A **playable backtest** inside the case study:

- A price chart (TradingView Lightweight Charts, the library Invictus itself uses) with entries and exits marked.
- An equity curve vs buy-and-hold underneath.
- **Controls the visitor can change**: fill model (`same_bar_close` vs `next_bar_open`), slippage, commission. Each change instantly swaps in a precomputed result, so the Sharpe ratio and equity curve visibly move.
- The message it teaches in five seconds: *optimistic assumptions create fake edge, and Invictus shows you how much.*

**How we build it without exposing the engine:** run Invictus locally on its own synthetic market generator (`engine/synthetic/`), which avoids any data licensing issue. Export one JSON file per combination of settings (for example 2 fill models × 3 slippage levels × 2 commission levels = 12 small files). The page only loads JSON, with no server and no engine code.

### Case study sections

1. **The problem.** Most backtests lie through look-ahead, perfect fills and overfitting.
2. **The demo** above.
3. **The knowability contract.** A small diagram of one bar: what is known when, and how gaps through limit and stop orders are priced.
4. **The DSL.** A short strategy in the DSL, with the point that look-ahead can't even be written.
5. **Rigour.** Walk-forward, Deflated Sharpe Ratio, Hansen SPA, Monte Carlo. One sentence each, and why it matters.
6. **Engineering.** Numba-compiled fill kernels, content-addressed Parquet storage, live trading that matches the backtest exactly, 75 tools for AI agents.
7. **Evidence strip.** 2,094 tests, a 380-case regression baseline, 641 commits in 8 months, ~140k lines. Show a real terminal capture of the test run.
8. **Screenshots** of the real app: chart, KPI cards, robustness and evaluation views.

## The other four

| Project | Strongest proof | Asset to make |
| --- | --- | --- |
| **Student Atlas** | Live at thestudentatlas.vercel.app. 305 government sources checked every 12 hours, 312 citations, 100 nationalities | Screenshots, plus a diagram of the monitor → alert → review loop |
| **ReportIQ** (whistleblowing) | Public repo. Quotes are checked word for word against the source; the AI picks follow-up questions but never writes them | Use the existing `analysis-page-result.png`, a diagram of the 3-layer intake, and live GitHub stars |
| **JurisLearning** | Full-stack, deployed. 36 pages, news pulled in every 2 hours, 40+ case summaries | Screenshots of the feed, a case page and the LNAT bank |
| **Speak Up** (student parliament) | 5 roles, anonymous posting with integrity safeguards, AI-drafted prefect responses | Screenshots using fake demo data only, and credit to Harihar Rengan |

Each case study uses the same template: the problem, what I built, the interesting engineering, the result, the stack, and links.

## Design direction

Keep what's ours, raise the ambition, and don't copy Neo's dark-grid look.

- **Keep:** the variable-weight name hero, the pine/lichen/cobalt palette, and Syne with Newsreader.
- **Add:**
  - a manual light/dark toggle
  - smooth page transitions (Astro View Transitions), so opening a project feels like zooming into it
  - real product imagery
- **One bold moment per page:** the name on home and the playable chart on Invictus. Everything else stays calm.
- **Rules that beat Neo:**
  - no loader
  - all text is visible before any JavaScript runs
  - motion respects reduced-motion settings
  - every number is a link

## Technical additions

- `projects` content collection with MDX case studies (replaces the array in `src/site.ts`)
- `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`
- `lightweight-charts` on the Invictus page only, loaded when the demo scrolls into view
- `astro:assets` for optimised screenshots (AVIF/WebP)
- Open Graph images per page
- GitHub data fetched at build time: last commit, stars on ReportIQ
- Deploy on Vercel with a custom domain

## Answers (3 October 2026)

1. **3M:** modelled after 3M, not a client. The site says "a code of conduct modelled on a large manufacturer's" and never names 3M.
2. **Speak Up:** Dubai College can be named. No collaborator credit on the site.
3. **Invictus:** the repo stays private. The case study, the demo and the source notes carry the proof.
4. **JurisLearning:** launching on Render. Status is "Launching soon" with no live link yet.
5. **About Ahmad:** name and age only. No about page, photo or CV. `/about` and `/now` were dropped from the structure.

## Progress

### Built

- [x] `projects` content collection with five MDX case studies (`/work/[slug]`)
- [x] Invictus flagship band on the home page with the playable backtest
- [x] Demo data from the real engine on its own synthetic market, regenerated by `scripts/export-invictus-demo.py`
- [x] Evidence notes: numbered margin notes that say where each number came from
- [x] Knowability contract diagram and pipeline diagrams for the other projects
- [x] Light/dark toggle, remembered per visitor
- [x] Cross-page title morphs (CSS view transitions, no JavaScript)
- [x] Screenshots: Invictus research view, Student Atlas, ReportIQ

### Still to do

See "Later" in [PLAN.md](PLAN.md). That list is the single backlog.

## Phases

### Phase A: Content and assets (no code)

- [x] Answer the open questions
- [ ] Capture screenshots of JurisLearning, Speak Up and more Invictus views (see Later in PLAN.md)
- [x] Export Invictus demo JSON (18 variants on synthetic data)
- [ ] Capture the Invictus test run in a terminal
- [ ] Rewrite each case study's opening paragraph in my own voice

### Phase B: Structure

- [x] `projects` collection, case study layout, `/work/[slug]` pages
- [x] Home page with the Invictus band and project rows
- [x] Theme toggle, view transitions

### Phase C: Flagship

- [x] Invictus case study page
- [x] Interactive backtest demo
- [x] Knowability contract diagram

### Phase D: Ship

- [ ] RSS, sitemap, Open Graph images
- [ ] Lighthouse 100s, keyboard and screen reader pass
- [ ] Deploy and connect the domain
- [ ] Two blog posts, ideally "How I stop my backtests lying to me" and "A visa guide that keeps itself up to date"

## Not doing

- A loading screen or "enter" gate
- Fake count-up stats or numbers that can't be checked
- A scrolling ticker of job titles
- Copying the dark grid with mono labels
