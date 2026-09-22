// Mapa del sitio para buscadores, armado con las páginas que existen en src/pages.
import type { APIRoute } from 'astro';

const paginas = Object.keys(import.meta.glob('./**/*.astro'))
  .map((f) => f.replace(/^\.\//, '/').replace(/(index)?\.astro$/, ''))
  .map((p) => (p.endsWith('/') ? p : p + '/'));

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const urls = paginas.map((p) => `<url><loc>${new URL(base + p, site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
