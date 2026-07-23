import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://beetul.github.io/",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
