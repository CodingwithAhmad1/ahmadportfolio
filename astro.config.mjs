import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ahmad-azim.com',
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
