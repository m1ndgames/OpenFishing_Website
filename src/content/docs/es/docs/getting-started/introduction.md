---
title: Introducción
description: Qué es OpenFishing, cómo mantiene tus datos en tu propio servidor, qué se comunica con Internet y un resumen de sus funciones.
---

**OpenFishing** es una aplicación web autoalojada para que los pescadores organicen su
**colección de señuelos**, marquen sus **puntos de pesca** en un mapa, registren sus **capturas**
y controlen sus **aparejos**, todo desde una única aplicación respetuosa con la privacidad que
funciona en tu propio servidor.

Se distribuye como una sola imagen **Docker** con una única base de datos **SQLite**. No hay
servicio en la nube, ni cuenta con terceros, ni telemetría: tus fotos y registros viven en tu
servidor y en ningún otro sitio. ¿Quieres verla antes de instalar? Abre la
[demo en vivo](https://demo.openfishing.org): sin registro, solo lectura.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Una captura en OpenFishing: una perca sobre la regla de medir con su longitud, el señuelo que la pescó, el Índice de picada y el lugar en el mapa" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Una captura en OpenFishing: una perca sobre la regla de medir con su longitud, el señuelo que la pescó, el Índice de picada y el lugar en el mapa" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Verlo en la demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (se abre en una pestaña nueva)</span></a></figcaption>
</figure>

## Resumen de funciones

| Área | Qué hace |
|---|---|
| [Señuelos](/es/docs/features/lures) | Fototeca con etiquetas, especies, favoritos, seguimiento de señuelos perdidos, etiquetas QR y búsqueda rápida. |
| [Puntos](/es/docs/features/spots) | Mapa interactivo de tus puntos de pesca con GPS y fotos. |
| [Capturas](/es/docs/features/catches) | Registra especie, peso, longitud, GPS, captura y suelta y estilo de recuperación, con un índice de picada basado en el tiempo. |
| [Equipo](/es/docs/features/tackle) | Cañas, carretes, sedales y combos, con historial de bobinas. |

También incluye:

- **Análisis**: [Índice de picada](/es/docs/features/bite-index), [Estadísticas](/es/docs/features/stats)
- **Compartir**: [Enlaces para compartir](/es/docs/features/share-links)
- **Opciones**: [Temas y apariencia](/es/docs/features/themes), [Idiomas](/es/docs/features/languages)
- **Gestionar tu servidor**: [Multiusuario](/es/docs/multi-user/authentication), [Funciones de IA](/es/docs/ai/ai-features), [Copia de seguridad y restauración](/es/docs/backup/backup-restore), [API REST](/es/docs/api/rest-api)

## Filosofía

- **Autoalojado y centrado en la privacidad**: tú lo ejecutas, los datos son tuyos. Tus registros
  y fotos se quedan en tu servidor.
- **Sin nube**: no hace falta ninguna cuenta ni servicio en la nube para que funcione.
- **Código abierto**: publicado bajo licencia AGPL-3.0 en
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Fácil de ejecutar**: un contenedor, un archivo SQLite, dos volúmenes para la base de datos y las subidas.

## Qué se comunica con Internet

Tus registros y fotos nunca salen de tu servidor. Estas funciones obtienen datos de fuera, y
ninguna otra:

- **[Tiempo](/es/docs/features/bite-index)**: al registrar una captura, abrir un punto o preguntar al chatbot por un lugar, el servidor pide a
  [Open-Meteo](https://open-meteo.com/) el tiempo actual allí. Solo se envían las coordenadas.
- **Mapa de [puntos](/es/docs/features/spots)**: cuando se muestra un mapa, tu navegador carga teselas de OpenStreetMap, que ve la zona que miras.
  Con `MAP_TILE_URL` usas tu propio servidor de teselas.
- **[Funciones de IA](/es/docs/ai/ai-features)**: solo si las configuras; el proveedor de IA que elijas recibe tu pregunta o tu foto.
- **[Restablecer contraseña](/es/docs/multi-user/authentication)**: solo si SMTP está configurado; tu propio servidor de correo envía el email.

## Siguientes pasos

- [Instala OpenFishing](/es/docs/getting-started/installation) en tu NAS o servidor doméstico.
- Echa un vistazo antes a la [demo en vivo](https://demo.openfishing.org).
- Ajusta el comportamiento con las [variables de entorno](/es/docs/configuration/environment-variables).

:::note
¿Falta algo o no está claro? [Abre una issue en GitHub](https://github.com/m1ndgames/OpenFishing/issues)
y lo añadiremos.
:::
