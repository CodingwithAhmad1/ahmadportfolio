# Architecture

## Stack

- **Astro 5**, static output, with MDX for case studies. No client framework. JavaScript runs the boot, the letter effect, the trading floor and the five demos. Everything reads fine without it, and the accordion still opens.
- **Plain CSS** with custom properties. Global styles in `src/styles/global.css`, everything else scoped in components.
- **Google Fonts**: Syne (display), Newsreader (body) and JetBrains Mono (data and labels).
- **Node 20+**. Upgrading to Astro 7 needs Node 22.12+.

## Folder map

```
src/
  site.ts                   Name, statement, and `contact` (email, LinkedIn, GitHub)
  content.config.ts         Schemas for the blog and projects collections
  content/blog/             Posts, one Markdown file each
  content/projects/         Case studies, one MDX file each (order, status, proof line in front matter)
  data/invictus-demo.json   Real Invictus output behind the demo (generated, don't edit by hand)
  data/atlas-sources.json   Host of every source Student Atlas cites (from its citations.ts)
  data/juris-cases.json     JurisLearning's landmark cases, shortened (from its case_seeds.py)
  scripts/flex.ts           Pointer-weight effect for every .flex element
  scripts/scramble.ts       Text that decodes into place (the boot's name)
  assets/work/              Screenshots, optimised at build time
  lib/
    projects.ts             getProjects(): the collection, sorted by `order`
    demo.ts                 Shapes the demo JSON at build time (resamples curves to 240 points)
    chart.ts                Path and formatting helpers shared by the build and the browser
  layouts/Base.astro        HTML shell, meta tags, fonts, header and footer, and a `head` slot
  components/
    Header.astro            Nav, plus the name mark on every page except home
    Footer.astro            Socials and copyright (the footer is #contact)
    Socials.astro           LinkedIn, GitHub and Contact pills
    LinkChip.astro          The one style for external links (live site, source)
    Flex.astro              Text whose letters respond to the pointer
    Boot.astro              Home page intro: replays the demo, then closes onto the hero
    TradingFloor.astro      Canvas behind the engine: candles, order book, fill tickets
    BacktestDemo.astro      The playable backtest: controls, chart, KPIs
    toys/AtlasRadar.astro   Student Atlas: radar of the 305 real sources
    toys/ReportDesk.astro   ReportIQ: type a report, watch the three layers
    toys/CaseDeck.astro     JurisLearning: deck of its 42 landmark cases
    toys/ParliamentBoard.astro  Speak Up: vote, reorder, prefect view, drafted replies
    Note.astro              Evidence note: numbered marker plus margin note
    Flow.astro              Pipeline diagram used in case studies
    Knowability.astro       The two-bar diagram on the Invictus page
  pages/
    index.astro             Home: boot, hero, project rows, quote, Invictus engine, Recent Articles
    work/[slug].astro       Case study template
    blog/index.astro        All posts
    blog/[...slug].astro    Single post
  styles/global.css         Tokens, base type, rows, evidence notes, code theme
scripts/
  export-invictus-demo.py   Regenerates the demo JSON from the real engine
public/                     Files served as-is (favicon)
documents/                  These notes
```

## How pages get data

- **Projects** come from `getProjects()`. The one with `flagship: true` (Invictus) gets the engine section; the rest are rows in the accordion, showing `people` and the title. Each row is a native `<details>` element, so it opens without JavaScript, and only one opens at a time. Its demo comes from the `toys` map in `src/pages/index.astro`.
- `/work` redirects to `/#work`. Case study pages stay at `/work/[slug]` for anyone who wants depth.
- **Posts** come from `getCollection('blog')`. Posts with `draft: true` are filtered out everywhere.
- A URL is the filename: `invictus.mdx` becomes `/work/invictus`, `hello-world.md` becomes `/blog/hello-world`.

## The backtest demo

1. `scripts/export-invictus-demo.py` runs the real Invictus engine (from `../backtestengine`) on a seeded synthetic market, 18 times: 2 fill timings × 3 commissions × 3 slippages. It writes curves and KPIs to `src/data/invictus-demo.json`. Invictus's own data folders are pointed at a temp directory, so nothing in that repo changes. Same inputs give byte-identical output.
2. At build time `src/lib/demo.ts` resamples every curve onto one 240-point grid and the page renders the naive state as plain SVG (the demo opens on it), so it works with JavaScript off.
3. The shaped arrays (about 34 KB) are embedded in the page. The browser script swaps and animates curves when a control changes. The raw JSON never ships.
4. The boot reuses the naive and default curves. The trading floor buckets the raw price series into candles at build time. So every price on the home page comes from the same synthetic market.

## The boot

An inline script in the home page's `<head>` adds `html.boot` before first paint, unless the visitor has reduced motion, arrived from another page on this site, or followed a link with a hash. `?boot` forces it. `Boot.astro` runs the timeline, then swaps the class to `html.booted`, which plays the hero's entrance. A 7-second timer clears `boot` if the script never runs.

## Conventions

- Shared list styling lives in the `.rows` class. Reuse it rather than adding new list styles.
- Colours and fonts are only ever referenced through CSS variables.
- Component styles are scoped by default; use `:global()` only for Markdown output.
- Keep JavaScript optional. Every page must work with JS disabled.
- Wide elements inside a case study (diagrams, the demo, screenshots) carry the `wide` or `shot` class so they break out of the text column.
- Every number gets a `<Note>` saying where it came from.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Local server at http://localhost:4321 |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check every page and component |
| `npm run demo:export` | Regenerate the Invictus demo data from the real engine |
