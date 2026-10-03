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

- [ ] Fill in `src/site.ts`: real intro, social links, email
- [ ] Replace placeholder projects with 3 to 5 real ones
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

### Phase 4: Project depth

- [ ] Move projects from `src/site.ts` to a `projects` content collection
- [ ] A page per project: problem, what I built, stack, screenshots, links
- [ ] Optimised images via `astro:assets`

### Phase 5: Polish and extras

- [ ] Manual light/dark toggle (currently follows the system setting)
- [ ] About page with a longer bio and photo
- [ ] Privacy-friendly analytics (Plausible, Umami or Vercel Analytics)
- [ ] Lighthouse 95+ in every category
- [ ] Newsletter or "follow" option, if posting becomes regular

## Ideas parking lot

Things that might be fun later. Not commitments.

- "Now" page: what I'm working on this month
- Uses page: tools, editor, hardware
- Search across posts
- Comments via GitHub Discussions (giscus)
- Hero variations, such as letters reacting to scroll on mobile

## Current focus

Phase 2. Update this line when the focus changes.
