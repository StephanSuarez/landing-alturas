# Landing alturas · Línea Vital

Sitio estático de información que cierra la venta por WhatsApp. Hecho con Astro: genera HTML plano, sin JavaScript salvo el del formulario.

## Qué tocar

| Quiero cambiar | Archivo |
|---|---|
| Número de WhatsApp, precios, redes | `src/data/site.ts` |
| Textos de una página | `src/pages/*.astro` |
| Encabezado, pie, botón flotante | `src/layouts/Base.astro` |
| Colores y estilos | `src/styles/global.css` |
| Fotos | `public/fotos/`, y luego `<Foto src="/fotos/archivo.jpg" alt="…" />` |

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para revisarlo
```

## Publicar

Cualquier hosting de archivos estáticos sirve la carpeta `dist/`. Configuración: comando `npm run build`, carpeta de salida `dist`.

## Pendiente antes de publicar

- Número de WhatsApp definitivo en `src/data/site.ts`. Hoy los botones apuntan a un número de relleno.
- Fotos reales en cada recuadro marcado "Foto: …".
- Horario y dirección en `src/pages/contacto.astro`.
- URL de Facebook en `src/data/site.ts`.
- Confirmar si los precios de seguridad social son mensuales.
- Confirmar que "curso de alturas primera vez" es el de Trabajador autorizado de 32 horas.
