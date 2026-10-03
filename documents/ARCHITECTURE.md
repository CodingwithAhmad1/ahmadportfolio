# Architecture

## Stack

- **Astro 5**, static output. No client framework; the only JavaScript is the hero effect.
- **Plain CSS** with custom properties. Global styles in `src/styles/global.css`, everything else scoped in components.
- **Google Fonts**: Syne (display) and Newsreader (body).
- **Node 20+**. Upgrading to Astro 7 needs Node 22.12+.

## Folder map

```
src/
  site.ts                 Single source of truth for name, intro, socials, projects
  content.config.ts       Blog collection schema
  content/blog/           Posts, one Markdown file each
  layouts/Base.astro      HTML shell, meta tags, fonts, header and footer
  components/
    Header.astro          Name mark and main nav
    Footer.astro          Socials and copyright
    Socials.astro         Social link list, used in hero and footer
    NameHero.astro        Home page hero and the pointer-weight script
  pages/
    index.astro           Home
    work.astro            All projects
    blog/index.astro      All posts
    blog/[...slug].astro  Single post
  styles/global.css       Tokens, base type, shared .rows list style
public/                   Files served as-is (favicon)
documents/                These notes
```

## How pages get data

- **Projects** come from the `projects` array in `src/site.ts`.
- **Posts** come from `getCollection('blog')`. Posts with `draft: true` are filtered out everywhere.
- A post's URL is its filename: `hello-world.md` becomes `/blog/hello-world`.

## Conventions

- Shared list styling lives in the `.rows` class. Reuse it rather than adding new list styles.
- Colours and fonts are only ever referenced through CSS variables.
- Component styles are scoped by default; use `:global()` only for Markdown output.
- Keep JavaScript optional. Every page must work with JS disabled.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Local server at http://localhost:4321 |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
