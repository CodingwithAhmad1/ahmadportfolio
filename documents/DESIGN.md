# Design

## Idea

Quiet, confident, and a little playful in exactly one place. The giant name in the hero is the memorable moment. Everything else stays calm so it can stand out.

## Colour

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#e6eae4` | `#121a16` | Page background (cool lichen grey) |
| `--ink` | `#17241e` | `#e2e8e0` | Main text (deep pine) |
| `--muted` | `#5e6b63` | `#93a097` | Secondary text, dates, meta |
| `--line` | `#c3cbc2` | `#2c3832` | Dividers |
| `--accent` | `#2b44d6` | `#9aa8ff` | Links, hover, focus (cobalt ink) |

Use the accent sparingly: links, hover states, focus rings. Never as a large fill.

## Type

- **Syne** (variable, 400 to 800) for headings, nav, titles and labels.
- **Newsreader** (serif) for body text and intros.
- Body size is 19px, line height 1.6 (1.7 in posts). Keep text columns under about 68 characters.

## Layout

- Left-aligned. Max width 72rem with a fluid gutter.
- Projects and posts are **rows separated by lines**, not cards.
- Generous vertical space between sections instead of boxes and backgrounds.

## Motion

- Only the hero letters move, and only in response to the pointer.
- Respect `prefers-reduced-motion`: the effect switches off.
- No fade-in-on-scroll, no hover animations on every element.

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
