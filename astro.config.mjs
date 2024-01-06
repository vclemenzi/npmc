import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), compressor(), sitemap()],
  adapter: node({
    mode: "standalone"
  })
});