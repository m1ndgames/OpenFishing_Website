---
title: Modo demo
description: Qué hace DEMO_MODE — una instancia de solo lectura con las escrituras bloqueadas — y cómo lo usa la demo pública.
---

El **modo demo** convierte una instancia de OpenFishing en **solo lectura**. Define la variable de entorno
**`DEMO_MODE`** con cualquier valor para activarlo (consulta
[Variables de entorno](/es/docs/configuration/environment-variables)).

## Qué hace

- **Todas las escrituras están bloqueadas** — los visitantes pueden explorar todo pero no pueden crear, editar
  ni eliminar.
- Un **banner** indica que la instancia es una demo, e intentar escribir muestra un **toast** que explica que
  las escrituras están deshabilitadas.
- **El cambio de idioma sigue funcionando**, para que los visitantes puedan ver la demo en cualquiera de los
  [9 idiomas](/es/docs/features/languages).

## La demo pública

La demo oficial en **[demo.openfishing.org](https://demo.openfishing.org)** funciona en este modo. Es una
instancia totalmente poblada que puedes explorar libremente sin afectar a ningún dato.

```yaml
environment:
  - DEMO_MODE=1
```
