# Design

## Idea

**Show your working.** Other portfolios make claims; this one shows proof. Every number carries a note saying where it came from, and the best project can be used right on the page.

Quiet and confident, with one bold moment per page: the giant name on the home page, the playable backtest in the Invictus band, the oversized title on each case study. Everything else stays calm so those stand out.

## Colour

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#e6eae4` | `#121a16` | Page background (cool lichen grey) |
| `--ink` | `#17241e` | `#e2e8e0` | Main text (deep pine) |
| `--muted` | `#5e6b63` | `#93a097` | Secondary text, dates, meta |
| `--line` | `#c3cbc2` | `#2c3832` | Dividers |
| `--accent` | `#2b44d6` | `#9aa8ff` | Links, hover, focus, the live line in the demo (cobalt ink) |
| `--paper-2` | `#dde2da` | `#18221d` | The flagship band, code blocks, diagram fills |
| `--ghost` | `#9aa59c` | `#56635a` | The naive backtest line, the price strip |
| `--gain` / `--loss` | `#2f7a4f` / `#b4442f` | `#6fcf97` / `#f08a73` | Positive and negative returns only |

Use the accent sparingly: links, hover states, focus rings. Never as a large fill.

## Type

- **Syne** (variable, 400 to 800) for headings, nav, titles and labels.
- **Newsreader** (serif) for body text and intros.
- Body size is 19px, line height 1.6 (1.7 in posts). Keep text columns under about 68 characters.

## Layout

- Left-aligned. Max width 72rem with a fluid gutter.
- Projects and posts are **rows separated by lines**, not cards.
- Generous vertical space between sections instead of boxes and backgrounds.

## Evidence notes

A small cobalt number after a claim, and the source in the right margin, like a footnote you never have to scroll to. On phones the note drops under its line with a thin rule. Use them for numbers and technical claims, not for every sentence.

## Motion

- The hero letters thicken as the pointer approaches.
- The demo curve glides to its new shape when a control changes, so you see what the change did.
- Project titles morph between the list and the case study (CSS view transitions; browsers without support just load the page).
- Nothing moves on its own.
- Respect `prefers-reduced-motion`: the effect switches off.
- No fade-in-on-scroll, no loading screen, no hover animations on every element.

## Avoid

These are the things that make a site look templated:

- Cards with rounded corners and drop shadows for every item
- All-caps labels above headings
- Gradient backgrounds and glows
- Numbered markers (01, 02, 03) on things that aren't a sequence
- Arrows tacked onto every link

## Accessibility checklist

- [ ] Text contrast at least 4.5:1 in both themes
- [ ] Visible focus ring on every link and button
- [ ] Works with keyboard only
- [ ] Works with JavaScript off
- [ ] Images have alt text
