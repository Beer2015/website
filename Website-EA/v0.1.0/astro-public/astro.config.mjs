import { defineConfig } from 'astro/config';

// Content-stage only: no database, credentials, license or payment backend.
// Astro static output needs no Cloudflare SSR adapter.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
