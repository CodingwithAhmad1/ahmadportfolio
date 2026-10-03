# Design

## Idea

**People first, proof always, nothing to read unless you want to.**

The home page is the whole portfolio. A statement, then four giant project names. Open one and it floods with its own colour and turns into a working demo of the project. Below them, Invictus, framed as the engine that will fund the rest in the long run, with its playable backtest. Every stat carries its source underneath. Case study pages exist for anyone who wants the depth, but nobody has to visit them.

## Colour

A black stage (`#000`) with off-white type (`#f3f1ec`) and film grain. Each project owns a colour world. When a project opens, its panel redefines every colour token, so all the components inside repaint in its colours.

| Project | Colour | Text on it |
| --- | --- | --- |
| Student Atlas | `#ff5b2e` ember | black |
| ReportIQ | `#f2df3a` highlighter | black |
| JurisLearning | `#a0183a` oxblood | white |
| Speak Up | `#2bd982` ballot green | black |
| Invictus | `#3b5bff` cobalt | white |

Worlds are set in `src/styles/global.css` under `[data-world='…']`. A new project needs one line there.

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

- On load, a wave of weight rolls through the statement once.
- Every big letter on the page (statement, project names, Invictus) thickens as the pointer approaches.
- A project opens with its colour flooding in and its panel sliding open.
- Hovering a project's colour swatch tints the statement.
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
