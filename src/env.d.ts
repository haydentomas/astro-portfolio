/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


// env.d.ts
import type { CollectionEntry } from 'astro:content';

declare global {
  namespace Astro {
    interface Collections {
      projectstagged: CollectionEntry<'projectstagged'> & {
        data: CollectionEntry<'projectstagged'>['data'] & {
          icons: string[]; // Array of icon names (e.g., ["javascript", "react"])
        };
      };
    }
  }
}