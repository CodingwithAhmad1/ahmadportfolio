# ahmadportfolio

My portfolio and blog, built with [Astro](https://astro.build). Software for people, every project playable on the home page, and Invictus, the trading engine for what comes next.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/site.ts`: name, statement, bridge sentence and social links
- `src/content/projects/`: case studies, one MDX file each
- `src/content/blog/`: blog posts, one Markdown file each
- `src/styles/global.css`: colours and fonts
- `src/pages/index.astro`: the home page, which holds everything
- `src/components/Boot.astro`: the home page intro
- `src/components/TradingFloor.astro`: the animated backdrop behind Invictus
- `src/components/BacktestDemo.astro` and `src/components/toys/`: the live demo for each project
- `scripts/export-invictus-demo.py` and `scripts/refresh-demo-data.py`: regenerate demo data from the real projects

## Docs

Plans, design notes and how-tos live in [`documents/`](documents/README.md).

## Deploy

`npm run build` writes a static site to `dist/`. It deploys to Vercel, Netlify or GitHub Pages without extra setup.
