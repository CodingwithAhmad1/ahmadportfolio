import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    order: z.number(),
    year: z.string(),
    status: z.enum(['Live', 'Open source', 'Private', 'Launching soon', 'In use']),
    stack: z.array(z.string()),
    links: z
      .object({ live: z.string().url().optional(), repo: z.string().url().optional() })
      .default({}),
    // The single strongest fact, shown in project lists.
    proof: z.string(),
    flagship: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
