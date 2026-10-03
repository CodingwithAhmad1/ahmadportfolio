# Decisions

A short log of choices, newest at the bottom. Add an entry whenever you pick one option over another and the reason won't be obvious later.

Format: date, decision, why, and what would make you revisit it.

---

### 2026-10-03: Astro for the site

**Why:** Mostly static content, Markdown posts built in, very fast pages, little JavaScript.
**Revisit if:** The site needs app-like features such as logins or dashboards.

### 2026-10-03: Astro 5 instead of 7

**Why:** Astro 7 needs Node 22.12+, and this machine has Node 20.
**Revisit if:** Node is upgraded. Then upgrade Astro and read its migration guide.

### 2026-10-03: Projects in `src/site.ts`, not a content collection

**Superseded** by the projects collection below.

### 2026-10-03: Plain CSS, no Tailwind

**Why:** A small site with a custom look; CSS variables cover theming.
**Revisit if:** Styling starts repeating across many components.

### 2026-10-03: Theme follows system setting

**Superseded** by the toggle below.

### 2026-10-03: Projects as an MDX content collection

**Why:** Each project now has a full case study with diagrams, notes and screenshots. MDX lets a case study use components.
**Revisit if:** Never likely; this is the standard Astro pattern.

### 2026-10-03: The demo uses exported results, not a live engine

**Why:** The Invictus repo stays private and a static site can't run Python. Exporting 18 precomputed runs gives real engine output with no server, no engine code in the browser, and a page that works without JavaScript.
**Revisit if:** Visitors should run their own strategies. That would need a hosted API and rate limiting.

### 2026-10-03: Synthetic market data in the demo

**Why:** Invictus's own seeded generator avoids licensing real market data, and a market with no edge by construction makes the point sharper: any profit the naive backtest shows is an illusion.
**Revisit if:** A real dataset with a clear licence becomes available and tells a better story.

### 2026-10-03: Custom SVG chart instead of a charting library

**Why:** Two lines and a shaded gap don't need a library. Hand-written SVG keeps the page light, matches the site's look exactly, and renders on the server.
**Revisit if:** The demo grows candles, trade markers or zooming. Then use Lightweight Charts, the library Invictus itself uses.

### 2026-10-03: Manual theme toggle

**Why:** Lets a visitor override their system setting. The saved choice is applied by a tiny inline script before first paint, so there's no flash.
**Revisit if:** Never likely.

### 2026-10-03: Name and age only

**Why:** Ahmad's choice. No about page, photo or CV; the work speaks.
**Revisit if:** Ahmad wants an about page.

### 2026-10-03: How private and shared work is shown

**Why:** Invictus, JurisLearning and Speak Up repos are private, so their pages describe and show the work and cite file paths in notes instead of linking code. ReportIQ is public and links to GitHub. Speak Up names Dubai College, with permission, and uses no school logo. ReportIQ's test policy is described as "modelled on a large manufacturer's" and 3M is never named.
**Revisit if:** A repo goes public, or a project gets a live URL.
