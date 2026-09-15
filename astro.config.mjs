// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Pages el sitio vive en /landing-alturas/: el flujo de despliegue define BASE_PATH.
// En local no se define y el sitio queda en la raíz (http://localhost:4321).
export default defineConfig({
  site: 'https://stephansuarez.github.io',
  base: process.env.BASE_PATH || '/',
});
