---
title: Copia de seguridad y restauración
description: Copia de seguridad y restauración ZIP con un clic, por usuario o de toda la instancia, y qué contiene el archivo.
---

OpenFishing tiene **copia de seguridad y restauración** integradas como archivos ZIP descargables/subibles.

## Copia de seguridad y restauración por usuario

Desde **`/settings`**, cualquier usuario puede hacer copia de seguridad y restaurar **sus propios datos** — sus
señuelos, puntos, capturas y aparejos, además de las subidas asociadas.

## Copia de seguridad y restauración de toda la instancia (admin)

Desde el panel de administración en **`/settings/admin`**, un administrador puede hacer copia de seguridad y
restaurar **toda la instancia** — incluidos todos los usuarios y cuentas.

:::caution
Una **restauración completa** realiza un **borrado y reconstrucción** completos de la instancia: los datos
existentes se reemplazan por el contenido del archivo. Haz primero una copia de seguridad nueva.
:::

## Formato del archivo

Una copia de seguridad es un ZIP que contiene:

- **`backup.json`** — los datos estructurados (registros).
- **`uploads/`** — los archivos de fotos asociados.

Como es un ZIP normal, puedes almacenarlo en cualquier lugar e inspeccionarlo si es necesario.

## Relacionado

- Recuerda que la base de datos activa y las subidas deben estar en
  [volúmenes persistentes](/es/docs/getting-started/installation) — las copias de seguridad complementan, pero
  no reemplazan, unos volúmenes adecuados.
