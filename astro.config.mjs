// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages at https://nikhil951.github.io/tech-stack/
  // `site` is the origin; `base` is the subpath the repo is served from.
  // If you later add a custom domain, set `site` to it and remove `base`.
  site: 'https://nikhil951.github.io',
  base: '/tech-stack',
});
