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

**Superseded** by the black stage below.

### 2026-10-03: Name only

**Why:** Ahmad's choice; he dropped his age on the v4 pass. No about page, photo or CV; the work speaks.
**Revisit if:** Ahmad wants an about page.

### 2026-10-03: How private and shared work is shown

**Why:** Invictus, JurisLearning and Speak Up repos are private, so their pages describe and show the work and cite file paths in notes instead of linking code. ReportIQ is public and links to GitHub. Speak Up names Dubai College, with permission, and uses no school logo. ReportIQ's test policy is described as "modelled on a large manufacturer's" and 3M is never named.
**Revisit if:** A repo goes public, or a project gets a live URL.

### 2026-10-03: Everything on the home page, every project playable (v3)

**Why:** Ahmad's feedback on v2: nobody will click into a project and read it. Visitors click and expect to see something. Each project now opens in place, in its own colour, as a working demo. Case studies remain for depth.
**Revisit if:** A project can't be shown as a demo. Then use a short video loop rather than text.

### 2026-10-03: People first, Invictus as the engine

**Why:** Ahmad's premise is social impact. The four impact projects lead and each says who it helps. Invictus is framed honestly as the engine that should fund his **future** ambitions and interests, not the current projects. It doesn't make money today.
**Revisit if:** Invictus starts earning, or the mission changes.

### 2026-10-03: A black stage with colour worlds, no theme toggle

**Superseded** by the Trading Floor palette below; the colour-world system stays.

**Why:** One strong look beats two average ones. Five saturated worlds read best against black. The token system lets each panel repaint every component inside it with no extra code.
**Revisit if:** Readability complaints on long case study pages; then consider a light reading mode for those pages only.

### 2026-10-03: Demos use real data where it exists

**Why:** The radar draws Student Atlas's real 305 sources. The deck uses JurisLearning's real case summaries. ReportIQ uses its real gap rules and question wording, with layer 1 approximated by simple rules in the browser and labelled as such. Speak Up's ideas are samples and say so. Nothing pretends to be live when it isn't.
**Revisit if:** A project gets a public API worth calling live.

### 2026-10-03: v4, a boot that proves the point, and a trading floor

**Why:** Ahmad wanted the first seconds to say "wow" and the page to read as one story. The boot replays the real demo (+18% naive, +2% after costs), so the intro is the Invictus argument, not decoration. The engine section is the only place things move on their own, which sets it apart from the calm project rows.
**Revisit if:** The boot feels slow on repeat visits, or the trading floor costs too much on phones.

### 2026-10-03: Trading Floor palette, amber means money

**Why:** Pure black plus five saturated colours read as toys. A warm near-black, warm white text and one amber accent reserved for Invictus look like one brand. Project colours were retuned to one brightness; ReportIQ moved to violet so it doesn't clash with amber.
**Revisit if:** Amber starts appearing on things that aren't Invictus.

### 2026-10-03: No connecting line, no hero table, no "loop" section

**Why:** Tried in v4 and cut by Ahmad: the scroll-drawn amber thread, the project status board in the hero, the mission heading, and a closing section showing Invictus money flowing to the four projects (that framing was wrong, see above).
**Revisit if:** The page needs more connective tissue between projects and engine.

### 2026-10-03: Stats say what matters

**Why:** "4,442 tests" means nothing to a visitor. Every stat now states an outcome or a capability, with its source. The Invictus feature modules and stats were later cut from the home page; the demo carries the argument.
**Revisit if:** Never. Keep vanity counts off the home page.

### 2026-10-03: Trim to essentials

**Why:** Ahmad cut everything that explained instead of showed: the bridge sentence, project problem lines and status labels, the Student Atlas monitor log, the engine's feature modules and stats, the demo's price strip and "naive" label. The demo now opens on the naive backtest. A verbatim Schwarzman quote fills the pause before the engine.
**Revisit if:** Visitors can't tell what a project is from its row alone.

### 2026-10-03: One style for external links, contact in the footer

**Why:** Text links like "Open the live site" looked unfinished. `LinkChip` shows where you're going. Contact is a small footer pill beside LinkedIn and GitHub, not a header button.
**Revisit if:** Contact needs to be easier to find.
