import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://robben.dk",
  integrations: [mdx()],
  responsiveImages: true,
});
