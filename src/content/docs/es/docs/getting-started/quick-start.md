---
title: Inicio rápido
description: Ejecuta OpenFishing en un solo comando, inicia sesión por primera vez y descubre dónde residen tus datos.
---

La forma más rápida de probar OpenFishing en tu propia máquina es un único `docker run`.

## Una sola línea

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Luego abre **http://localhost:3000**.

Esto inicia OpenFishing en modo **de un solo inquilino, totalmente abierto** — sin inicio de sesión. Cualquiera que pueda alcanzar
el puerto tiene acceso completo, así que exponlo solo en una red de confianza hasta que habilites la
[autenticación](/es/docs/multi-user/authentication).

## Primer inicio de sesión

- **Sin `ADMIN_PASSWORD`** (como arriba): la aplicación está abierta — no hay pantalla de inicio de sesión y todas
  las funciones están disponibles de inmediato.
- **Con `ADMIN_PASSWORD` definido**: aparece una pantalla de inicio de sesión. El nombre de usuario admin es siempre
  `admin`, y la contraseña es la que establezcas en `ADMIN_PASSWORD`. La cuenta se
  vuelve a sincronizar desde la variable de entorno en cada arranque.

Consulta [Multiusuario y autenticación](/es/docs/multi-user/authentication) para el panorama completo.

## Dónde residen tus datos

OpenFishing conserva dos cosas que debes persistir:

| Datos | Ruta del contenedor | En el comando anterior |
|---|---|---|
| Base de datos SQLite | `/app/data` | volumen con nombre `openfishing-db` |
| Fotos subidas | `/app/uploads` | volumen con nombre `openfishing-uploads` |

:::caution
Tanto la base de datos como el directorio de subidas **deben** estar en volúmenes persistentes. Si ejecutas el
contenedor sin volúmenes, todo se pierde cuando el contenedor se elimina.
:::

Para una configuración lista para producción con volúmenes con nombre y variables de entorno en un archivo, usa la
[instalación con docker-compose](/es/docs/getting-started/installation).
