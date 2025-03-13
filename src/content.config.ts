// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const skBlog = defineCollection({
    loader: glob({ base: './src/data/sk-blog', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        slug: z.string(),
    })
});
// const dogs = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { skBlog };