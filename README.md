# Sitio corporativo · Línea+Vital

Sitio estático de información que cierra la venta por WhatsApp. Hecho con Astro: genera HTML plano, con JavaScript solo para el menú, los acordeones y el formulario.

La landing original de trabajo en alturas (con precios) quedó en la rama `backup-landing-alturas`.

## Reglas del contenido (brief)

- No se publican precios, tarifas ni costos.
- Todo botón de WhatsApp dice "Hablar con un asesor" y va al +57 311 252 5109.
- Solo información del brief o de los PDF de Línea+Vital: nada de testimonios, cifras, clientes o certificaciones inventadas.

## Qué tocar

| Quiero cambiar | Archivo |
|---|---|
| WhatsApp, teléfonos, correo, redes, menú de servicios, centros de capacitación | `src/data/site.ts` |
| Textos de una página | `src/pages/*.astro` y `src/pages/servicios/*.astro` |
| Encabezado, menú, pie, botón flotante, SEO | `src/layouts/Base.astro` |
| Colores (uno por servicio) y estilos | `src/styles/global.css` |
| Fotos | `public/fotos/`, y luego `<Foto src="/fotos/archivo.jpg" alt="…" />` |
| Imagen al compartir en redes | `public/og.jpg` (general) y `public/og-alturas.jpg` (1200×630) |

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para revisarlo
```

## Publicar

Cada push a `main` publica en GitHub Pages (`.github/workflows/`). Cualquier hosting estático sirve la carpeta `dist/`.

## Pendiente

- URL de Facebook en `src/data/site.ts`.
- Fotos reales: las actuales son imágenes sintéticas de la landing original y solo cubren trabajo en alturas y espacios confinados.
- El formulario no guarda datos: abre WhatsApp con la solicitud escrita.
