# Deployment

The site builds to static files in `dist/`, so any static host works.

## Recommended: Vercel or Netlify

1. Sign in with GitHub and import `CodingwithAhmad1/ahmadportfolio`.
2. The framework is detected as Astro. Build command `npm run build`, output `dist`.
3. Every push to `main` deploys automatically. Pull requests get preview URLs.

## Alternative: GitHub Pages

1. Add the official Astro GitHub Action (`withastro/action`) as `.github/workflows/deploy.yml`.
2. In repo settings, set Pages source to GitHub Actions.
3. Without a custom domain the site lives at `codingwithahmad1.github.io/ahmadportfolio`, so set `base: '/ahmadportfolio'` in `astro.config.mjs`.

## Custom domain

1. Buy a domain (Cloudflare Registrar, Porkbun or Namecheap).
2. Add it in the host's dashboard and follow its DNS instructions.
3. Set `site: 'https://yourdomain.com'` in `astro.config.mjs` (needed for RSS, sitemap and share images).

## Before each release

- [ ] `npm run build` passes locally
- [ ] Check the home page, a post and the work page on mobile width
- [ ] No placeholder links left (`#`, `example.com`)
