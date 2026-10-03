# ahmadportfolio

My portfolio and blog, built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/site.ts`: name, age, intro and social links
- `src/content/projects/`: case studies, one MDX file each
- `src/content/blog/`: blog posts, one Markdown file each
- `src/styles/global.css`: colours and fonts
- `src/components/BacktestDemo.astro`: the playable Invictus backtest
- `scripts/export-invictus-demo.py`: regenerates the demo data from the real engine

## Docs

Plans, design notes and how-tos live in [`documents/`](documents/README.md).

## Deploy

`npm run build` writes a static site to `dist/`. It deploys to Vercel, Netlify or GitHub Pages without extra setup.
