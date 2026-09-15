import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    originalUrl: z.string().url().optional().or(z.literal('')),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    legacyImages: z.boolean().default(false),
  }),
});

export const collections = { posts };
