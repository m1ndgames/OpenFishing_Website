---
title: Introducción
description: Qué es OpenFishing, su filosofía autoalojada y centrada en la privacidad, y una visión general de sus funciones.
---

**OpenFishing** es una aplicación web autoalojada para que los pescadores organicen su **colección de señuelos**,
marquen **puntos de pesca** en un mapa, registren sus **capturas** y controlen sus **aparejos** — todo desde
una única aplicación centrada en la privacidad que se ejecuta en tu propio servidor.

Es una aplicación [SvelteKit](https://kit.svelte.dev/) respaldada por una única base de datos **SQLite**,
distribuida como una sola imagen **Docker**. No hay servicio en la nube, ni cuenta con terceros, ni
telemetría: tus fotos y datos residen en tu infraestructura y en ningún otro lugar.

## Filosofía

- **Autoalojado y centrado en la privacidad** — tú lo ejecutas, tú eres dueño de los datos. Nada sale de tu servidor.
- **Sin nube** — no se requieren dependencias externas para que el núcleo de la aplicación funcione.
- **Código abierto** — publicado bajo la licencia AGPL-3.0 en
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Sencillo de ejecutar** — un contenedor, un archivo SQLite, dos volúmenes para la base de datos y los archivos.

## Visión general de las funciones

| Área | Qué hace |
|---|---|
| [Señuelos](/es/docs/features/lures) | Biblioteca de fotos con etiquetas, especies, favoritos, seguimiento de señuelos perdidos, etiquetas QR y búsqueda rápida. |
| [Puntos](/es/docs/features/spots) | Mapa interactivo Leaflet de tus puntos de pesca con GPS y fotos. |
| [Capturas](/es/docs/features/catches) | Registra especie, peso, longitud, GPS, captura y suelta y presentación, con un Índice de picada basado en el clima. |
| [Índice de picada](/es/docs/features/bite-index) | Una puntuación automática de 0 a 10 que valora las condiciones de pesca a partir de datos meteorológicos. |
| [Aparejos](/es/docs/features/tackle) | Cañas, carretes, líneas y equipos, con historial de bobinas. |
| [Estadísticas](/es/docs/features/stats) | Tendencias en tus capturas y equipo. |
| [Funciones de IA](/es/docs/ai/ai-features) | Chatbot opcional más identificación de peces y señuelos a partir de fotos. |
| [Multiusuario](/es/docs/multi-user/authentication) | Inicio de sesión opcional para alojar a amigos y familia, con cuotas y un panel de administración. |
| [Enlaces para compartir](/es/docs/features/share-links) | Páginas públicas de solo lectura para un señuelo, punto o captura. |
| [API REST](/es/docs/api/rest-api) | API JSON de solo lectura con tokens Bearer y una interfaz Swagger. |
| [Copia de seguridad y restauración](/es/docs/backup/backup-restore) | Exportación/importación ZIP con un clic. |
| [Idiomas](/es/docs/features/languages) | 9 idiomas con un selector de banderas. |

## Próximos pasos

- Sigue el [Inicio rápido](/es/docs/getting-started/quick-start) para ponerte en marcha con un solo comando.
- Despliega correctamente con [Instalación (docker-compose)](/es/docs/getting-started/installation).
- Ajusta el comportamiento con las [Variables de entorno](/es/docs/configuration/environment-variables).

:::note
Esta documentación es una referencia concisa. Para detalles a nivel de código fuente, consulta el
[repositorio de OpenFishing](https://github.com/m1ndgames/OpenFishing) en GitHub.
:::
