---
title: "Modo demo"
description: "Qué hace DEMO_MODE (una instancia de solo lectura, sin guardar) y cómo la usa la demo pública."
---

El **modo demo** deja una instancia de OpenFishing **en solo lectura**: se puede mirar todo, pero
no cambiar nada. La demo pública funciona así.

## Activarlo

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Cualquier valor lo activa, incluso `false` o `0`.** Para desactivarlo, borra la línea y ejecuta
`docker compose up -d`. Ver [Variables de entorno](/es/docs/configuration/environment-variables).

## Qué hace

- **No se puede guardar nada**: los visitantes ven todo, pero no pueden crear, editar ni eliminar.
- Un **aviso** («Modo demo») indica que es una demo, y al intentar guardar aparece un mensaje breve que explica por qué no funcionó.
- **Cambiar de idioma sigue funcionando**, así que se puede ver la demo en los [9 idiomas](/es/docs/features/languages).
- El **chatbot de IA** no responde; muestra «El chatbot de IA está deshabilitado en esta demo.»

## La demo pública

La demo oficial en **[demo.openfishing.org](https://demo.openfishing.org)** funciona en este modo.
Está llena de datos de ejemplo y puedes explorarla libremente sin cambiar nada.
