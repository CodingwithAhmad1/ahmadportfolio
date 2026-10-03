# ahmadportfolio

My portfolio and blog, built with [Astro](https://astro.build). Software for people, every project playable on the home page, and Miran, the trading engine for what comes next.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/site.ts`: name, statement and contact links (email and LinkedIn still to fill in)
- `src/content/projects/`: case studies, one MDX file each
- `src/content/blog/`: blog posts, one Markdown file each
- `src/styles/global.css`: colours and fonts
- `src/pages/index.astro`: the home page, which holds everything
- `src/components/Boot.astro`: the home page intro
- `src/components/TradingFloor.astro`: the animated backdrop behind Miran
- `src/components/BacktestDemo.astro` and `src/components/toys/`: the live demo for each project
- `scripts/export-miran-demo.py` and `scripts/refresh-demo-data.py`: regenerate demo data from the real projects

## Docs

Plans, design notes and how-tos live in [`documents/`](documents/README.md).

## Deploy

`npm run build` writes a static site to `dist/`. It deploys to Vercel, Netlify or GitHub Pages without extra setup.
