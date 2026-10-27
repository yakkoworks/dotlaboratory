// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://dotlaboratory.xyz',

  integrations: [
    starlight({
      title: 'YakkoWorks StarMap',
    }),
  ],
});