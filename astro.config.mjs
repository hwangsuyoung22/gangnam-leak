import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gangnam-leak.netlify.app",
  integrations: [sitemap()],
});