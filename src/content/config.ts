import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// BLOG: each post is a Markdown file in src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Set draft: true to keep a post out of the published list
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
