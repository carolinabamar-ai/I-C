# Brief final — Ingeniería y Consciencia (I&C)

## Objetivo
Crear una **web institucional responsive** (desktop y móvil), entregable como proyecto de código completo en ZIP. La previsualización principal se trabajó en escritorio; no incluir mockup de celular en la presentación si no se pide, pero la web debe adaptarse al móvil.

## Identidad visual
- Usar **logo_original.png** como archivo original; NO reinterpretar ni redibujar el símbolo.
- Paleta: azul noche `#13233B`, dorado `#D4960F`, verde azulado `#2A8580`; fondo crema/marfil claro, no fondo azul.
- Google Fonts: **Josefin Sans** 400 y 600 para títulos y navegación; **Source Sans 3** 400 y 600 para cuerpo de texto. Reemplazan Fraunces e Inter de las primeras versiones.
- Geometría sagrada/Flor de la Vida muy sutil como textura, detalles lineales dorados y ondas discretas en verde azulado y dorado.
- Estilo moderno, sobrio, espacioso, sin iconografía decorativa en servicios, sin fotografías con personas.
- Inspiración de estilo aportada por el usuario: https://postresucubs.onrender.com/ (referencia estética, no copiar contenidos).

## Menú
`Inicio | Nosotros | Servicios | Contacto` en ese orden. En portada NO colocar el nombre ni logo arriba a la izquierda; el logo va centrado en el hero. En páginas interiores, encabezado de marca discreto como referencia visual, siempre usando el archivo original.

## Inicio
- Fondo crema con geometría sagrada tenue.
- Logo original centrado.
- Categoría pequeña: `ENERGÍA EÓLICA Y SOLAR`.
- Eslogan exacto: **«Ingeniería con consciencia, energía con propósito.»** Centrado, de tamaño moderado y peso visual liviano (no gigante ni demasiado grueso).
- Debajo, texto: «Asesoramos a propietarios, operadores e inversores de parques eólicos y solares para sacar el máximo rendimiento de sus activos, con decisiones técnicas sólidas y una mirada de largo plazo.»
- No sustituir logo por los redibujos de las imágenes generadas.

## Nosotros
- Título centrado `Nosotros`, subtítulo `Ingeniería que mira más allá del dato.`
- Una de las fotografías reales de parques eólicos como **banner panorámico a todo el ancho**.
- **TODO el texto de Acerca de debe ir DEBAJO de la fotografía**, nunca a su lado. Distribuir en bloques/columnas legibles en escritorio, apilados en móvil.
- Texto del PDF original:

«En Ingeniería y Consciencia asesoramos a propietarios, operadores e inversores de parques eólicos y solares para sacar el máximo rendimiento de sus activos, con decisiones técnicas sólidas y una mirada de largo plazo.

Nuestro trabajo empieza en el sitio. Vamos al parque, inspeccionamos los aerogeneradores, las subestaciones y trabajamos con los equipos de operación, porque las mejores decisiones técnicas se toman mirando de cerca el activo y a quienes lo operan, no desde un escritorio.

Nuestra misión es unir la ingeniería con la consciencia de lo que está en juego: la producción y el valor del activo, la vida útil de las máquinas, la seguridad de las personas y el cuidado del entorno.

Aportamos claridad técnica e independencia de criterio para anticipar fallas, optimizar la producción y extender la vida útil de cada parque.

Combinamos experiencia real en la industria, con una sólida base académica —maestría en Energía Eólica e Inteligencia Artificial y docencia en el Área de Energía Eólica de UTEC— que nos permite ver más allá del dato y transformar cada análisis en acciones concretas en el parque.

Nuestra identidad se inspira en la geometría sagrada: cada parte de un sistema está conectada con el todo. Así entendemos la ingeniería.

En Ingeniería y Consciencia creemos que la energía no solo se genera: se cuida, se mide y se gestiona con responsabilidad.»

Destacar la última frase como cierre.

## Servicios
- Última propuesta preferida: **interfaz interactiva de dos paneles en escritorio**. A la izquierda listado de 9 títulos; a la derecha el detalle del servicio seleccionado, con descripción y foto grande. La selección cambia el panel sin navegar a otra página. En móvil, adaptar a acordeón o selector con detalle debajo.
- Sin iconos, sin fotos de personas. Usar las **tres fotografías reales** incluidas en `assets/fotos/` sin recrearlas. Se pueden reutilizar entre servicios; no inventar nueve fotografías.
- Servicios oficiales:
  1. Energía eólica: acompañamiento técnico integral de parques
  2. Análisis de performance
  3. Seguimiento técnico de contratistas
  4. Inspección de aerogeneradores
  5. Operación y mantenimiento
  6. Subestaciones de media y alta tensión
  7. Análisis de repotenciamiento
  8. Plan de mantenimiento de grandes componentes
  9. Análisis de datos con inteligencia artificial
- Las descripciones detalladas pueden derivarse del PDF si aparecen allí; de lo contrario, utilizar textos breves provisionales, claramente editables, sin inventar credenciales ni resultados.

## Contacto
- Sección pendiente de definición. Diseñar un formulario básico (nombre, correo, mensaje) y espacio para datos reales de contacto, **sin inventar email, teléfono, dirección ni enlaces**. No simular envío funcional si no hay backend/servicio configurado.

## Requisitos de implementación
- Crear proyecto funcional (por ejemplo React + Vite), código fuente, estilos y assets locales; instrucciones de instalación/ejecución y ZIP final.
- Responsive, accesible (contraste, etiquetas, teclado, textos alternativos), carga optimizada de fotos, navegación por anclas o rutas funcionales.
- Importar fuentes de Google Fonts con los pesos indicados.
- Respetar las fotografías originales y el logo; las imágenes de `referencias/` son **mockups visuales, no fuentes finales de marca**.
- No considerar como aprobadas las imágenes generadas que muestran un logo redibujado o iconos: prevalecen el logo original y las últimas decisiones textuales.

## Pedido para la próxima conversación
«Usá este brief y los archivos adjuntos para desarrollar una web institucional completa y responsive para Ingeniería y Consciencia. Generá un proyecto ejecutable con las cuatro secciones, las fuentes y colores exactos, el logo original y las tres fotos reales. Implementá los nueve servicios como selector interactivo sin iconos. Entregá un ZIP descargable con código fuente, assets y README. No inventes datos de contacto. Mostrá primero una previsualización si es posible.»
