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
    // Who the project is for, shown on its row on the home page.
    helps: z.string(),
    // The people it's for, shown big on the home page, and the problem they have.
    people: z.string().optional(),
    problem: z.string().optional(),
    order: z.number(),
    year: z.string(),
    status: z.enum(['Live', 'Open source', 'Private', 'Launching soon', 'In use']),
    stack: z.array(z.string()),
    links: z
      .object({ live: z.string().url().optional(), repo: z.string().url().optional() })
      .default({}),
    // The single strongest fact, shown in project lists.
    proof: z.string(),
    // Three headline numbers for the home page panel, each with where it came from.
    stats: z.array(z.object({ value: z.string(), label: z.string(), source: z.string() })).length(3),
    // What it can do, as short titled lines. Shown as modules on the home page.
    features: z.array(z.object({ title: z.string(), detail: z.string() })).default([]),
    flagship: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
