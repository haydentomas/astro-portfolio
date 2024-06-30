import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.optional(z.string()),
      image: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      // Add a 'draft' property, which is a boolean false or true no ``
      draft: z.optional(z.boolean()),
    })
 });



 const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
    
      pubDate: z.date(),
      description: z.string(),
      author: z.optional(z.string()),
      image: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      projectURL: z.string(),
      // Add a 'draft' property, which is a boolean false or true no ``
      draft: z.optional(z.boolean()),
    })
 });


 
 const projectsTaggedCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      whatwedid: z.array(z.string()),
      homeText1: z.string().optional(),
      pubDate: z.date(),
      description: z.string(),
      author: z.optional(z.string()),
      image: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      imageprojects: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      projectURL: z.string(),
      pageURL: z.string(),
      ogImage: z.string().optional(), // Make it optional in case a post doesn't have a custom OG image
      icons: z.array(z.enum(["javascript", "react", "html", /* Add more as needed */])),
      // Add a 'draft' property, which is a boolean false or true no ``
      draft: z.optional(z.boolean()),
      Section1Content: z.string().optional(),
    })
 });

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  projectstagged: projectsTaggedCollection,
};