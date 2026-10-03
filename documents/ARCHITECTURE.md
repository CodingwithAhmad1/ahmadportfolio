# Architecture

## Stack

- **Astro 5**, static output, with MDX for case studies. No client framework. JavaScript runs only for the hero letters, the backtest demo and the theme toggle, and every page reads fine without it.
- **Plain CSS** with custom properties. Global styles in `src/styles/global.css`, everything else scoped in components.
- **Google Fonts**: Syne (display) and Newsreader (body).
- **Node 20+**. Upgrading to Astro 7 needs Node 22.12+.

## Folder map

```
src/
  site.ts                   Name, age, intro and social links
  content.config.ts         Schemas for the blog and projects collections
  content/blog/             Posts, one Markdown file each
  content/projects/         Case studies, one MDX file each (order, status, proof line in front matter)
  data/invictus-demo.json   Real Invictus output behind the demo (generated, don't edit by hand)
  assets/work/              Screenshots, optimised at build time
  lib/
    projects.ts             getProjects(): the collection, sorted by `order`
    demo.ts                 Shapes the demo JSON at build time (resamples curves to 240 points)
    chart.ts                Path and formatting helpers shared by the build and the browser
  layouts/Base.astro        HTML shell, meta tags, fonts, theme bootstrap, header and footer
  components/
    Header.astro            Name mark, nav, theme toggle
    Footer.astro            Socials and copyright
    Socials.astro           Social link list
    NameHero.astro          Home page hero and the pointer-weight script
    BacktestDemo.astro      The playable backtest: controls, chart, KPIs
    ProjectRows.astro       Project list used on home and /work
    Note.astro              Evidence note: numbered marker plus margin note
    Flow.astro              Pipeline diagram used in case studies
    Knowability.astro       The two-bar diagram on the Invictus page
  pages/
    index.astro             Home
    work/index.astro        All projects
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

- **Projects** come from `getProjects()`. The one with `flagship: true` gets the band on the home page; the rest are rows.
- **Posts** come from `getCollection('blog')`. Posts with `draft: true` are filtered out everywhere.
- A URL is the filename: `invictus.mdx` becomes `/work/invictus`, `hello-world.md` becomes `/blog/hello-world`.

## The backtest demo

1. `scripts/export-invictus-demo.py` runs the real Invictus engine (from `../backtestengine`) on a seeded synthetic market, 18 times: 2 fill timings × 3 commissions × 3 slippages. It writes curves and KPIs to `src/data/invictus-demo.json`. Invictus's own data folders are pointed at a temp directory, so nothing in that repo changes. Same inputs give byte-identical output.
2. At build time `src/lib/demo.ts` resamples every curve onto one 240-point grid and the page renders the default state as plain SVG, so it works with JavaScript off.
3. The shaped arrays (about 34 KB) are embedded in the page. The browser script swaps and animates curves when a control changes. The raw JSON never ships.

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
