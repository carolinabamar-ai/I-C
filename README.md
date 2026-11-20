# Ingeniería y Consciencia (I&C) — Sitio institucional

Proyecto completo de web institucional responsive en español para una consultora uruguaya de energía eólica y solar.

## Contenido

- Inicio `/`: portada con logo centrado, eslogan, presentación y nueve servicios en lista vertical sin íconos.
- Nosotros `/nosotros`: texto «Acerca de», misión, tecnología, identidad y equipo editable.
- Servicios `/servicios`: nueve servicios en bloques verticales con fotografías y enlaces de consulta.
- Contacto `/contacto`: formulario validado, honeypot, rate limiting, PostgreSQL y notificación opcional.
- Panel `/admin/solicitudes`: autenticación básica, estados y exportación CSV.
- Privacidad, 404, 500, sitemap, robots y health check.

## Requisitos

- Node.js 20 o superior
- PostgreSQL (recomendado Neon)

## Instalación local

1. Crear un proyecto PostgreSQL en [Neon](https://neon.tech/) y copiar la cadena de conexión (`DATABASE_URL`).
2. Copiar `.env.example` a `.env` y completar `DATABASE_URL`, `ADMIN_USER` y `ADMIN_PASSWORD`.
3. Ejecutar `npm install`.
4. Ejecutar `npm run db:init` para crear la tabla (también se intenta crear al iniciar).
5. Ejecutar `npm run dev`.
6. Abrir `http://localhost:3000`, probar `/contacto` y revisar `/admin/solicitudes`.

**Sin DATABASE_URL:** la web pública se puede visualizar, pero el formulario no guardará solicitudes y el panel no estará disponible.

## Publicar en Render

1. Crear un repositorio privado o público en GitHub y subir los archivos del proyecto (sin `.env`).
2. En Render, crear un Blueprint desde el repositorio y usar `render.yaml`, o un Web Service Node manual.
3. Configurar `DATABASE_URL`, `ADMIN_USER`, `ADMIN_PASSWORD`, `SITE_URL` (dominio público HTTPS) y `NODE_ENV=production`.
4. Verificar `https://TU-DOMINIO/healthz`.
5. Enviar una solicitud de prueba y confirmar su aparición en `/admin/solicitudes`.
6. Configurar un dominio propio y actualizar `SITE_URL`.
7. Para avisos por email, agregar `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` y `NOTIFY_EMAIL`.

## Personalización antes de publicar

- **Contacto real:** `config/site.js` (email, teléfono, WhatsApp, LinkedIn).
- **Equipo real:** `data/equipo.js` (las tarjetas aparecen cuando se cargan perfiles).
- **Logo:** `public/img/logo-original-pdf.png` es un recorte del diseño presente en el PDF entregado. Para máxima calidad, sustituirlo por el archivo vectorial original del logo, conservando el nombre o actualizando las referencias. El recorte mantiene la composición y proporciones del PDF.
- **Fotografías:** `public/img/parque-principal.jpg`, `parque-camino.jpg` y `parque-atardecer.jpg` provienen de las tres fotos compartidas.
- **Tipografías:** Josefin Sans (títulos) y Source Sans 3 (texto), editables en `public/css/styles.css`.
- **Colores:** variables CSS en `public/css/styles.css`.
- **Privacidad:** revisar el texto de `/privacidad` con asesoría jurídica antes de publicar.
- **Seguridad:** utilizar credenciales únicas y fuertes para el panel; Basic Auth requiere HTTPS en producción. Para un panel más avanzado, agregar sesiones y protección CSRF. En la versión actual, el panel usa Basic Auth y las acciones de cambio de estado requieren esa autenticación.

## Estructura

```
config/site.js
data/servicios.js, data/equipo.js
db/index.js, db/schema.sql, db/init.js
routes/index.js, routes/contacto.js, routes/admin.js
views/partials/head.ejs, header.ejs, footer.ejs
views/pages/inicio.ejs, nosotros.ejs, servicios.ejs, contacto.ejs,
  gracias.ejs, privacidad.ejs, error.ejs, admin.ejs
public/css/styles.css
public/js/main.js
public/img/*
server.js, package.json, render.yaml, .env.example, .gitignore
```

## Nota sobre diseño

El proyecto se basa en las últimas decisiones compartidas: logo centrado en portada, eslogan debajo, menú de cuatro opciones, servicios en lista vertical sin íconos y fotografías reales. El PDF de identidad visual se usa como referencia de la Semilla del Viento.
