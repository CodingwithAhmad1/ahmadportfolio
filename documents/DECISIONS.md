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

**Why:** Only a few projects, and no project pages yet. One file is simplest.
**Revisit if:** Projects need their own pages (Phase 4 in the plan).

### 2026-10-03: Plain CSS, no Tailwind

**Why:** A small site with a custom look; CSS variables cover theming.
**Revisit if:** Styling starts repeating across many components.

### 2026-10-03: Theme follows system setting

**Why:** Zero JavaScript and no flash of the wrong theme.
**Revisit if:** A manual toggle is wanted (Phase 5).
