// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://jomeridi.github.io",
  base: "/inv-es-astro-web/",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});
