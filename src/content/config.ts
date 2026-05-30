import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// PROJECTS: each project is a Markdown file in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Optional links shown on the project card / page
    url: z.string().url().optional(), // live demo
    repo: z.string().url().optional(), // source code
    // Pin a project to the top of the homepage
    featured: z.boolean().default(false),
  }),
});

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

export const collections = { projects, blog };
