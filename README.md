# Ingeniería y Consciencia — Sitio institucional

Proyecto completo de **web institucional responsive** implementado en React + Vite. Se construyó a partir del `BRIEF_FINAL.md` incluido y utiliza **sin modificar** el logo y las tres fotografías originales entregadas.

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar en tu computadora

```bash
npm install
npm run dev
```

Abrí la URL indicada por Vite (habitualmente http://localhost:5173).

## Generar versión de producción

```bash
npm run build
npm run preview
```

El resultado estático queda en `dist/`. Se puede publicar en Render (Static Site), Netlify o Vercel. Para Render: **Build command** `npm install && npm run build`, **Publish directory** `dist`. Configurá una regla de rewrite de `/*` a `/index.html` para que funcionen las rutas `/nosotros`, `/servicios` y `/contacto` al recargar.

## Páginas

- `/` — Inicio, logo centrado, eslogan y fotografía original.
- `/nosotros` — Banner panorámico, todo el texto institucional debajo y cierre destacado.
- `/servicios` — Selector de 9 servicios; lista a la izquierda y detalle/foto a la derecha; responsive en móvil.
- `/contacto` — Formulario de nombre, correo y mensaje. **No envía mensajes:** permite copiar/descargar la consulta hasta configurar un canal de recepción real.

## Personalización

- Textos y descripciones: `src/data.js` (las descripciones de servicios son provisionales y editables).
- Colores, tipografía, responsive: `src/styles.css`.
- Logo **original**: `public/assets/logo_original.png` (no redibujado ni deformado).
- Fotos **originales**: `public/assets/parque_eolico_*.jpg`.
- Las imágenes `public/assets/referencia_*.png` son referencias de diseño, **no** imágenes utilizadas en la web.

## Contacto: pendiente antes de publicar

El brief no incluye email, teléfono, dirección ni servicio de formularios. Para habilitar el envío real de consultas, hay que elegir y configurar un backend, servicio de formularios o proveedor de correo. **No hay envío simulado ni datos de contacto inventados.**

## Notas de diseño

Fuentes Josefin Sans 400/600 y Source Sans 3 400/600 desde Google Fonts. Paleta exacta: `#13233B`, `#D4960F`, `#2A8580`, crema `#F7F5F0`. Sin íconos en servicios ni fotografías de personas. Menú en el orden Inicio, Nosotros, Servicios, Contacto.


## Últimos ajustes visuales (noviembre de 2026)
- Portada: sin marca duplicada arriba a la izquierda, logo original centrado y más grande, espacio debajo, sin rótulo «Energía eólica y solar», eslogan de tamaño moderado.
- Nosotros: logo original en el encabezado izquierdo, fotografía original del atardecer como banner y texto «Acerca de» completamente debajo, en párrafos verticales.
- Servicios: logo original en el encabezado izquierdo, selector de nueve servicios a la izquierda y detalle interactivo a la derecha, usando la fotografía real del parque eólico con aerogenerador en primer plano.
- La tercera fotografía original se utiliza en la portada. No se utilizan imágenes generadas como fotografías reales ni se altera el logo.

## GitHub y despliegue

Subí **el contenido de esta carpeta** a la raíz de tu repositorio de GitHub (no solamente el ZIP). Incluí `.github/workflows/ci.yml`, `.gitignore`, `package.json`, `index.html`, `src/`, `public/` y `vite.config.js`. No subas `node_modules/` ni `dist/`.

En tu computadora ejecutá `npm install` y luego `npm run build` para verificar la compilación. `npm install` generará `package-lock.json`; subí también ese archivo a GitHub para fijar las versiones de las dependencias. El archivo no se incluye en esta entrega porque el entorno de generación no pudo acceder al registro de npm para producirlo de manera verificable.

El repositorio incluye un workflow de GitHub Actions que intenta compilar el sitio en cada push, y configuraciones de rutas para Vercel y Netlify. Para Vercel, importá el repositorio, elegí Vite y usá `dist` como directorio de salida.

**Pendiente antes de producción:** conectar el formulario de Contacto a un proveedor de recepción real. Actualmente copia/descarga el texto de la consulta, pero no lo envía.
