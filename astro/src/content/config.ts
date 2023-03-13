// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)

// Old svelte-kit blog
const skBlog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str))
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    img: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog-sk': skBlog,
  projects,
};