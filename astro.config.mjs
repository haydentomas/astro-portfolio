import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
  image: {
    serviceEntryPoint: '@astrojs/image/sharp',
  },
  site: 'https://haydentomas.co.uk',
  integrations: [mdx(), sitemap(), tailwind(), critters()],

});