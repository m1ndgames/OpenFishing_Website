---
title: FAQ / Solución de problemas
description: Volúmenes persistentes, migraciones automáticas, notas sobre proxy inverso y el límite de tamaño de subida.
---

## ¿Necesito volúmenes persistentes?

**Sí.** Tanto la base de datos SQLite (`/app/data`) como el directorio de subidas (`/app/uploads`) deben estar
en volúmenes persistentes. Sin ellos, tus datos y fotos se pierden cuando el contenedor se recrea. Consulta
[Instalación](/es/docs/getting-started/installation).

## ¿Tengo que ejecutar migraciones de base de datos?

**No.** En producción, las **migraciones de base de datos se ejecutan automáticamente al arrancar**. Solo
descarga una imagen más nueva y reinicia — el esquema se actualiza por ti.

## ¿Cómo ejecuto OpenFishing detrás de un proxy inverso?

- Termina TLS en tu proxy (nginx, Caddy, Traefik…) y reenvía al puerto `3000` del contenedor.
- Define **`BASE_URL`** con tu URL HTTPS pública para que los [códigos QR](/es/docs/features/qr-labels) y los
  enlaces de restablecimiento de contraseña sean correctos.
- **Reenvía las cabeceras de proxy estándar** (host y forwarded-for/proto) para que la app vea la URL externa
  correcta.

## ¿Por qué se rechaza mi subida?

Las subidas están limitadas por **`BODY_SIZE_LIMIT`** (por defecto ≈ 100 MB, es decir, `104857600` bytes).
Súbelo si necesitas fotos más grandes, y asegúrate de que cualquier proxy inverso por delante también permita
el tamaño de cuerpo mayor.

## ¿Hay inicio de sesión por defecto?

No — OpenFishing es **abierto** a menos que definas `ADMIN_PASSWORD`. Consulta
[Multiusuario y autenticación](/es/docs/multi-user/authentication). No expongas una instancia abierta a la
Internet pública.

## ¿Dónde puedo obtener ayuda o reportar un error?

Abre una incidencia en [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
