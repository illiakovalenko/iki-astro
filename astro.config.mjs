import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    locales: ["da-DK", "en"]
  },
  output: "server",
  adapter: vercel()
});