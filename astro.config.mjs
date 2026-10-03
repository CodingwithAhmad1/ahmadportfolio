import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // TODO: set to the real domain once it's bought (needed for RSS, sitemap and share images).
  // site: 'https://example.com',
  integrations: [mdx()],
  // Every project lives on the home page now.
  redirects: { '/work': '/#work' },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
