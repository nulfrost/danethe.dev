import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    published_at: z.date(),
  }),
});

export const collections = {
  "2021": blogCollection,
  "2022": blogCollection,
  "2023": blogCollection,
};
