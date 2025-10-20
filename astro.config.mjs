// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Reemplaza con el dominio de producción de tu sitio web.
  site: "https://example.com",
  base: "/dialnet-inves-testweb/",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});
