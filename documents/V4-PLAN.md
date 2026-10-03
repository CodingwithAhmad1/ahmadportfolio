# V4 plan: one line, one story

## What's wrong with v3

1. **There's no story.** The page goes: a statement, five rainbow pills, four rows that all look the same, then a blue slab. Nothing connects the four projects to each other or to Invictus. The only link is one italic sentence ("And the engine that will pay for it") that most people will scroll straight past.
2. **The colours fight each other.** Pure black plus five fully saturated colours (orange, yellow, red, green, blue) reads as a box of toys rather than one brand. The pills in the hero look like tags in a to-do app.
3. **The page doesn't open with anything.** You land on static text. Nothing tells you in the first second that this person builds serious things.
4. **Invictus doesn't feel like trading.** It's a flat blue page with a chart on it. It should feel like walking onto a trading floor.

## The idea: one line runs the whole page

One thin, glowing line connects everything, and it's the same line from start to finish:

- **Load:** it draws a price trace across the black screen. That's the first thing you see.
- **Hero:** the trace settles flat and becomes the baseline the headline sits on.
- **Mission:** it turns 90° and runs down the left margin. Each project is a *station* on it: a node that lights up in that project's colour as you scroll past.
- **Engine:** at Invictus it turns horizontal again and *becomes* the equity curve in the backtest demo.
- **Loop:** at the bottom it splits into four branches that run back up to the four project colours. Money from the engine flows back to the mission.

The structure tells the story without anyone reading a word: **people → the engine → back to people.**

## Page structure (acts)

| # | Act | What you see | What it says |
| --- | --- | --- | --- |
| 0 | **Boot** (under 2s, once per session, skippable, off with reduced motion) | Black screen. Three mono lines type fast: `> loading 4 projects for people … ok` / `> starting invictus engine … ok` / `> 4,442 tests passing`. Meanwhile the amber price line draws across the screen. Then the name decodes letter by letter (scramble) and the boot panel wipes up to reveal the hero, which is already rendered underneath. | "This is built by someone precise." Previews the whole story in three lines. |
| 1 | **Hero** | `Ahmad Azim, 1X.` Giant statement on the baseline. One sentence. A small live readout bottom-right: `4 projects · 1 engine · 4,442 tests`. No pills. Sticky chapter counter appears once you scroll (`MISSION 1/4`, `ENGINE`). | Who he is and the thesis. |
| 2 | **The mission** | Section header: "Four problems. Four groups of people." The four projects as stations on the vertical line. Each row has the same three beats: **who** (big), **problem** (one line), **proof** (one number). Click to flood open into the playable demo (keep v3's best interaction). | Coherent, comparable, people-first. |
| 3 | **The bridge** | Full-width pinned moment: "Impact needs funding that doesn't depend on anyone's permission." The line bends and accelerates; the background shifts from stage black to terminal black. | Why Invictus exists. Connects acts 2 and 4. |
| 4 | **The engine** (Invictus) | The trading floor. Ambient trading layer (below) behind the content. Giant `INVICTUS` with a scrolling tape running through the letters. Then the playable backtest, then stats as a terminal readout. | Most impressive build, honestly framed: "doesn't make money yet". |
| 5 | **The loop** | The line splits into four coloured branches back to the projects. "When the engine pays, it pays for these." | Closes the story. |
| 6 | **Writing + contact** | Compact. | |

## The trading floor (Invictus ambient layer)

One `<canvas>` behind the Invictus section, only running while it's on screen, and driven by **the real demo data** (`src/data/invictus-demo.json`), so nothing is a fake price.

Layers, back to front:

1. **Depth field of candlesticks.** OHLC candles built from the demo price series, drifting slowly left at three depths (parallax). Far ones are dim and blurred; near ones are crisp. Gains in the accent, losses in the loss colour.
2. **Ticker tape.** Two horizontal tapes in mono type at different speeds, one passing *through* the giant `INVICTUS` wordmark (masked so it shows inside the letters). Content is honest: strategy name, market profile, bar size, test count, regression cases, Sharpe after costs.
3. **Order-book depth.** Bid and ask bars breathing at the right edge, with a mid-price line.
4. **Fill tickets.** Small mono slips (`FILL  BUY  4h  @ 1.09751  slip 0.75bp`) that float up and fade, pulled from the demo's actual trades.
5. **Pointer.** Moving the pointer tilts the depth field slightly and brightens candles near it.

Rules: pauses off-screen (`IntersectionObserver`), caps at 60fps, lowers the count on phones, freezes into a single still frame with `prefers-reduced-motion`. Readable content always sits on a solid panel above the noise.

This replaces the v3 rule "nothing moves on its own" *only inside the engine*. The mission stays calm on purpose: people sections are still, the money section hums. That contrast is part of the story.

## Colour: "Trading Floor"

Drop the pure black and the rainbow. Use one warm near-black stage, and let **colour carry the story**: amber means money (the engine, the line), warm white means people, and each project keeps its own colour, retuned so all of them sit at the same brightness and read as one family.

| Token | Value | Use |
| --- | --- | --- |
| `--bg-0` | `#0b0b0c` | page |
| `--bg-1` | `#141416` | raised panels |
| `--bg-2` | `#1c1c21` | inputs, demo surfaces |
| `--line` | `#272735` | hairlines |
| `--ink` | `#edebe6` | text (warm off-white: people) |
| `--muted` | `#8e8b84` | secondary text |
| `--signal` | `#ffb000` | **terminal amber: money.** The line, Invictus, live readouts, focus rings |
| `--gain` | `#4ade80` | up |
| `--loss` | `#f05252` | down, used for losses only |

Project worlds, retuned to one brightness band:

| Project | v3 | v4 |
| --- | --- | --- |
| Student Atlas | `#ff5b2e` | `#ff6b3d` ember |
| ReportIQ | `#f2df3a` (would clash with amber) | `#9b8cff` violet |
| JurisLearning | `#a0183a` (too dark on black) | `#e5486a` rose |
| Speak Up | `#2bd982` | `#5eead4` teal (moved away from `--gain`) |
| Invictus | `#3b5bff` flat flood | `#07070a` terminal black, lit by amber and the gain/loss colours coming *out* of the data |

The amber line is the one thing on the page that's always amber. When it reaches a project it takes on that project's colour; when it reaches the engine it turns back to amber. Linear (`#08090a`, sparse signal accents) and the Bloomberg terminal are the references.

Alternative if amber feels too loud: "Linear signal" (`#08090a` / `#0f1011` / `#1a1b1e`, text `#e2e4e7`, accent `#8fa4ff`).

## Type

Keep Syne for display and Newsreader for body (they're working). Add a proper mono for all data, labels, tape and the counter: **JetBrains Mono** or **Geist Mono**. The mono is what makes the Invictus section and the readouts feel like instruments.

## Build order

1. **Tokens + palette** in `global.css`. Retune worlds. Swap pure black. (Small, instant visual win.)
2. **Content restructure** in `index.astro`: acts, section headers, the who / problem / proof row, the bridge, the loop. Update `site.ts` copy.
3. **The line**: one SVG path laid out in page coordinates, drawn with `stroke-dashoffset` tied to scroll (CSS scroll-driven animations where supported, a small JS fallback). Stations light up via `IntersectionObserver`.
4. **Boot sequence**: inline script in `Base.astro`, `sessionStorage` to skip on return, click/keypress to skip, under 1.5s, never blocks content with JS off.
5. **Trading floor canvas**: new `src/components/TradingFloor.astro`, fed by `src/lib/demo.ts`.
6. **Invictus wordmark with tape through the letters.**
7. **The loop** and footer.
8. **Pass**: performance (Lighthouse ≥ 90 on mobile), reduced motion, keyboard, JS off, phone layout.
9. Update `DESIGN.md` (new palette, motion rule change, the line).

Dependencies: **GSAP + ScrollTrigger** (now free, including SplitText and ScrambleText) for the scroll-scrubbed line, pinning and the boot scramble. **Lenis** (~3kb) for smooth scroll, synced to ScrollTrigger. No Three.js: the trading floor is plain Canvas 2D.

## References

- Boot: [Brittany Chiang v4](https://v4.brittanychiang.com) (logo stroke-draw loader, `src/components/loader.js` in [bchiang7/v4](https://github.com/bchiang7/v4)), [Dennis Snellenberg](https://dennissnellenberg.com) (short greeting cycle, then a wipe), [Henry Heffernan](https://henryheffernan.com) (BIOS boot).
- Thread and acts: [SBS The Boat](https://www.sbs.com.au/theboat/), [Lusion](https://lusion.co) (sticky chapter counter), [Stripe annual letter](https://stripe.com/annual-updates/2024).
- Data as ambience: [Stripe globe write-up](https://stripe.com/blog/globe): real data, moving slowly, never frantic.
- Restraint: [Linear](https://linear.app), [XTX Markets](https://www.xtxmarkets.com) (big stat callouts on dark), [Jane Street](https://www.janestreet.com).

## Open questions for Ahmad

- Age for the hero (`site.ts` has a TODO).
- Amber as the money colour, or the calmer Linear-style periwinkle?
- Boot sequence on every first visit, or only on the home page?
