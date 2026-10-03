# Design

## Idea

**People first, then the engine for what comes next.**

The home page is a short story. A boot sequence replays the real Invictus demo: the naive backtest climbs to +18%, real costs cut it to +2%, and the screen closes onto a line under the hero statement. Then the four projects, each a full-width row that says who it's for and opens into its colour and a working demo. A quiet black pause carries one verbatim quote (Schwarzman, *What It Takes*). The **engine** is a trading floor: ticker tape, the INVICTUS wordmark with the tape running through its letters, and the playable backtest, which opens on the naive settings so the visitor adds the costs themselves. Then Recent Articles and a footer of small pills: LinkedIn, GitHub, Contact.

Invictus funds Ahmad's **future** ambitions and interests, not the current projects. Never draw money flowing from it into the four projects.

## Colour: "Trading Floor"

Warm near-black stage, warm white for people, **amber for money**. Amber only appears on Invictus, the boot and live readouts, so the colour itself carries the story.

| Token | Value |
| --- | --- |
| `--paper` | `#0b0b0c` (engine: `#060607`) |
| `--paper-2` / `--paper-3` | `#141416` / `#1c1c21` |
| `--ink` / `--muted` | `#edebe6` / `#8e8b84` |
| `--line` | `#24242c` |
| `--signal` | `#ffb000` |
| `--gain` / `--loss` | `#4ade80` / `#f05252` |

| Project | Colour |
| --- | --- |
| Student Atlas | `#ff6b3d` ember |
| ReportIQ | `#9b8cff` violet |
| JurisLearning | `#e5486a` rose |
| Speak Up | `#5eead4` teal |
| Invictus | `#ffb000` amber |

Worlds are set in `src/styles/global.css` under `[data-world='…']`.

## Copy

Every number must tell a visitor something they care about: who it helps, what it does, what it caught. No test, commit or line counts on the home page.

## Type

- **Syne** (variable, 400 to 800) for headings, nav, titles and labels. At 800 its glyphs are heavy slabs; the INVICTUS wordmark is an SVG (tape clipped to the letters, masked outline) in `index.astro`.
- **JetBrains Mono** for data, labels, the tape and the boot.
- **Newsreader** (serif) for body text and intros.
- Body size is 19px, line height 1.6 (1.7 in posts). Keep text columns under about 68 characters.

## Layout

- Left-aligned. Max width 72rem with a fluid gutter.
- Projects and posts are **rows separated by lines**, not cards.
- Generous vertical space between sections instead of boxes and backgrounds.

## Evidence notes

A small number after a claim, and the source in the right margin, like a footnote you never have to scroll to. On phones the note drops under its line with a thin rule. Use them for numbers and technical claims, not for every sentence.

## Motion

- **Boot** (home page only, 4s): first arrival only, never when coming back from another page on the site, following a link to a project, or with reduced motion. Skippable by any key, click or scroll. `?boot` forces it. Armed by an inline script in `<head>`, with a 7s failsafe.
- The JurisLearning case card flips to the next case on click.
- **The engine is the only place things move on their own**: candles at three depths, order-book depth, fill tickets, ticker tape. The canvas only runs on screen and draws one still frame with reduced motion. All prices come from the demo's synthetic market. The calm of the mission and the hum of the engine is deliberate.
- Letters thicken as the pointer approaches. After the boot, the statement rises into place.
- Respect `prefers-reduced-motion` everywhere.

## Links that leave the site

One style everywhere: `LinkChip.astro`, a thin outlined pill showing the address on one line and an arrow box that fills on hover. The whole pill is the link. Footer pills (`Socials.astro`) are smaller and match each other.

## Quotes

Only verbatim quotes, checked against at least two sources, with the source named. Never paraphrase into quotation marks.

## Avoid

These are the things that make a site look templated:

- Cards with rounded corners and drop shadows for every item
- All-caps labels above headings
- Gradient backgrounds and glows (amber glow on the boot line and wordmark is the one exception)
- Numbered markers (01, 02, 03) on things that aren't a sequence
- Arrows tacked onto every link

## Accessibility checklist

- [ ] Text contrast at least 4.5:1 in both themes
- [ ] Visible focus ring on every link and button
- [ ] Works with keyboard only
- [ ] Works with JavaScript off
- [ ] Images have alt text
