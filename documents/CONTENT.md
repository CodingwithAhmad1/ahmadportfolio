# Content

## Add a blog post

1. Create `src/content/blog/my-post-name.md`. The filename becomes the URL.
2. Start it with front matter:

   ```md
   ---
   title: My post title
   description: One sentence shown in lists and search results.
   date: 2026-10-03
   draft: true
   ---
   ```

3. Write in Markdown. Use `##` for sections (the title is already the `#`).
4. Run `npm run dev` and check it at `/blog/my-post-name`.
5. Remove `draft: true` when it's ready, then commit and push.

## Add a project

Add an entry to the `projects` array in `src/site.ts`:

```ts
{
  title: 'Project name',
  summary: 'One sentence on what it does and who it is for.',
  year: '2026',
  stack: 'TypeScript, Postgres',
  href: 'https://github.com/CodingwithAhmad1/repo',
},
```

Newest first. The home page shows the first three.

## Update socials or intro

Both live in `src/site.ts`. Remove a social link by deleting its line.

## Writing checklist

- [ ] The title says what the reader gets
- [ ] The description works on its own as one sentence
- [ ] The first paragraph says why this matters
- [ ] Code samples run as written
- [ ] Links work
- [ ] Read it out loud once before publishing

## Post ideas

Add ideas here as they come up.

- Why I built this site, and the choices behind it
- A project write-up: what went wrong and what I'd change
- Something I learned this month
