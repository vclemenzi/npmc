import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), compressor(), sitemap()],
  adapter: cloudflare({ mode: "directory" })
});
