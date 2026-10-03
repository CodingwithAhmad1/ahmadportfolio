# Content

## Add a blog post

1. Create `src/content/blog/my-post-name.md`. The filename becomes the URL.
2. Start it with front matter:

   ```md
   ---
   title: My post title
   description: One sentence shown in lists and search results.
   date: 2026-10-03
   draft: true
   ---
   ```

3. Write in Markdown. Use `##` for sections (the title is already the `#`).
4. Run `npm run dev` and check it at `/blog/my-post-name`.
5. Remove `draft: true` when it's ready, then commit and push.

## Add a project

1. Create `src/content/projects/my-project.mdx`. The filename becomes `/work/my-project`.
2. Start it with front matter:

   ```md
   ---
   title: My Project
   tagline: One sentence on what it is.
   order: 6                 # position in lists; the flagship is 1
   year: '2026'
   status: Live             # Live, Open source, Private, Launching soon or In use
   stack: [TypeScript, Postgres]
   links:
     live: https://...      # optional
     repo: https://...      # optional, public repos only
   proof: The single strongest, checkable fact. Shown when a visitor hovers the row.
   ---
   ```

3. Write the case study: the problem, how it works, the engineering, the proof.
4. Diagrams: import `Flow` and pass the steps. Screenshots: put the PNG in `src/assets/work/` and use `<Image>` with `class="shot"`.

## Give it a colour and a demo

1. Add a colour world to `src/styles/global.css`: `[data-world='my-project'] { --world: #hex; --on: #000 or #fff; }`. Check the text colour against it for contrast.
2. Add `helps:` (who it's for) and three `stats:` to the front matter, each with a `source`.
3. Build a demo in `src/components/toys/` and add it to the `toys` map in `src/pages/index.astro`. Use the colour tokens (`--ink`, `--paper`, `--muted`, `--line`) so it repaints in the project's world.

## Refresh the demo data

From this repo's root:

```bash
python3 scripts/refresh-demo-data.py
```

## Back every number

Any number that a reader might doubt gets a note saying where it came from:

```mdx
import Note from '../../components/Note.astro';

The monitor watches 305 sources.<Note>Unique URLs in <code>citations.ts</code>.</Note>
```

On wide screens the note sits in the margin; on phones it drops under the line.

## Edit the home page copy

- **Statement and bridge sentence:** `src/site.ts`.
- **Each project row:** `people` (shown as "For …") and `problem` in the project's front matter.
- **Stats:** three per project in front matter, each with a `source`. Lead with what a visitor cares about (who it helps, what it does, what it caught), never test, commit or line counts.
- **Invictus features:** the `features` list in `src/content/projects/invictus.mdx`. Each is a short title and one sentence.
- **Ticker tape:** the `tape` list in `src/pages/index.astro`. Every item must be a real result or a real feature.

## Regenerate the Invictus demo

After the engine changes what it trades, from this repo:

```bash
../backtestengine/.venv/bin/python scripts/export-invictus-demo.py
```

The boot, the demo and the trading floor all update from that one file.

## Update socials

They live in `src/site.ts`. A social link with an empty `href` is hidden.

## Writing checklist

- [ ] The title says what the reader gets
- [ ] The description works on its own as one sentence
- [ ] The first paragraph says why this matters
- [ ] Code samples run as written
- [ ] Links work
- [ ] Read it out loud once before publishing

## Post ideas

Add ideas here as they come up.

- Why I built this site, and the choices behind it
- A project write-up: what went wrong and what I'd change
- Something I learned this month
- How I stop my backtests lying to me
- A visa guide that keeps itself up to date
