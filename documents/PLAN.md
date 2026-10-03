# Plan

## Goals

1. **Show my work.** Someone landing here should understand what I build within 10 seconds.
2. **Publish writing.** Make it easy enough to post that I actually do it, at least once a month.
3. **Be mine.** The site should look like no one else's, and stay fast and simple to maintain.

## Who it's for

- Recruiters and hiring managers checking my projects
- Developers who find a post through search or social
- Future collaborators looking for a way to reach me

## Roadmap

### Phase 1: Skeleton (done)

- [x] Astro project with home, work and writing pages
- [x] Hero with the interactive name
- [x] Blog powered by Markdown content collection
- [x] Repo on GitHub

### Phase 2: Make it real

- [x] Real intro and five real projects
- [ ] Social links and email (see Later)
- [ ] Write 2 or 3 posts before sharing the site
- [ ] Deploy (see [DEPLOYMENT.md](DEPLOYMENT.md))
- [ ] Connect a custom domain
- [ ] Set `site` in `astro.config.mjs` to the live URL

### Phase 3: Blog essentials

- [ ] RSS feed (`@astrojs/rss`)
- [ ] Sitemap (`@astrojs/sitemap`)
- [ ] Open Graph and Twitter card meta tags, plus a default share image
- [ ] Syntax highlighting theme that matches the palette
- [ ] Reading time on each post
- [ ] Tags, and a page per tag
- [ ] 404 page

### Phase 4: Project depth (done in v2)

- [x] Move projects from `src/site.ts` to a `projects` content collection
- [x] A page per project: problem, what I built, stack, screenshots, links
- [x] Optimised images via `astro:assets`

### Phase 5: Polish and extras

- [x] Manual light/dark toggle
- [ ] Privacy-friendly analytics (Plausible, Umami or Vercel Analytics)
- [ ] Lighthouse 95+ in every category
- [ ] Newsletter or "follow" option, if posting becomes regular

## Later

The single backlog of things to come back to. Tick them off here.

### Before launch

- [ ] Set your age in `src/site.ts` (it shows next to your name once set)
- [ ] Add a public email, LinkedIn and X to `src/site.ts`. Empty links are hidden, so only GitHub shows today
- [ ] Buy a domain, deploy (see [DEPLOYMENT.md](DEPLOYMENT.md)) and set `site` in `astro.config.mjs`
- [ ] Replace the "Hello, world" post with a real first post
- [ ] Rewrite each case study's first paragraph in your own words. The structure and facts are right; the voice should be yours

### Screenshots to capture

- [ ] **JurisLearning**: the feed, a case page and the LNAT essay bank, once it's live on Render. Then add the live link to `src/content/projects/jurislearning.mdx` and change its status to `Live`
- [ ] **Speak Up**: run it with a fresh database of made-up students. Never screenshot the real `instance/parliament_app.db`, which holds real student accounts
- [ ] **Invictus**: the equity vs benchmark chart, KPI cards, robustness and evaluation views. Run it with `BACKTEST_DATA_ROOT` pointed at a temporary folder so the screenshots use synthetic data
- [ ] **Student Atlas**: the Activity feed, which shows the monitor at work, is a better shot than the home page
- [ ] A terminal capture of the Invictus test run, for the proof section

### Demos

- [ ] When JurisLearning launches, add its live link and switch its status to `Live`
- [ ] Re-export `src/data/juris-cases.json` and `atlas-sources.json` when those projects add content (see CONTENT.md)
- [ ] Consider a short screen recording per project as an alternative view on phones

### Keep the numbers true

Every number on the site has a note saying where it came from. When a number changes, update the number and its note together.

- [ ] Refresh Invictus stats (tests, commits, lines) every month or so. Commands are in [CONTENT.md](CONTENT.md)
- [ ] If Invictus's engine changes what it trades, re-run `scripts/export-invictus-demo.py` so the demo matches
- [ ] Student Atlas: re-count sources and citations when content grows

### ReportIQ repository (public)

- [ ] The public repo still contains 3M-branded files (`docs/3MRulesBook.pdf`, the 3M explainer and banner HTML, and a sample report marked "Confidential" naming 3M). 3M isn't a client, but a public repo carrying another company's name and branding can read as an affiliation. Consider renaming to a fictional company or removing them
- [ ] Check that `backend/data/usage.json`, which is tracked in git, holds nothing private
- [ ] Add a README screenshot and a short "what this is" line so visitors from the portfolio land well

### Nice to have

- [ ] RSS feed and sitemap
- [ ] Open Graph share images per page, ideally the demo chart for Invictus
- [ ] Load the fonts from the site itself instead of Google Fonts, for speed and privacy
- [ ] Lighthouse pass and a screen reader check of the demo
- [ ] Upgrade to Astro 7 once Node is 22.12 or newer

## Ideas parking lot

Things that might be fun later. Not commitments.

- "Now" page: what I'm working on this month
- Uses page: tools, editor, hardware
- Search across posts
- Comments via GitHub Discussions (giscus)
- Hero variations, such as letters reacting to scroll on mobile

## Current focus

V2 redesign, see [V2-PLAN.md](V2-PLAN.md). Update this line when the focus changes.
