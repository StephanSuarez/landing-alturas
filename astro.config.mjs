// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Pages el sitio vive en /landing-alturas/: el flujo de despliegue define BASE_PATH.
// En local no se define y el sitio queda en la raíz (http://localhost:4321).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://stephansuarez.github.io',
  base,
  // La página de precios se retiró (el brief prohíbe publicar precios). El destino no hereda la base.
  redirects: { '/precios': base.replace(/\/$/, '') + '/servicios' },
});
