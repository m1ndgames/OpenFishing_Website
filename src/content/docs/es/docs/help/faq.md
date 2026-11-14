---
title: FAQ y solución de problemas
description: Soluciones a problemas de instalación habituales (equipos ARM, conflictos de puerto, contraseña de admin olvidada) y respuestas sobre volúmenes, actualizaciones, subidas e inicio de sesión.
---

Los problemas aparecen con el mensaje que realmente ves, así que buscar el texto exacto del error
suele llevarte directo a la solución.

Cuando una respuesta dice `docker compose up -d`, en un NAS puedes redesplegar el stack en su app.

## Instalación

### Guardar falla: «Cross-site POST form submissions are forbidden»

Falta `BASE_URL` o empieza por `https://` mientras abres la aplicación con `http://` simple. Ponla con la dirección exacta que abres, por ejemplo `BASE_URL=http://192.168.1.50:3000`, y vuelve a ejecutar `docker compose up -d`. Detrás de un proxy inverso, pon en `BASE_URL` la dirección `https://` que se abre; con eso basta. Ver [Variables de entorno](/es/docs/configuration/environment-variables#dirección-y-hora).

### El contenedor no arranca: «exec format error»

El equipo tiene un procesador ARM (habitual en NAS pequeños y ordenadores de placa única). La
imagen de OpenFishing solo existe para **Intel o AMD de 64 bits (amd64)**, así que no puede
funcionar ahí. Compruébalo con `uname -m`: `x86_64` funciona, `aarch64` o `armv7l` no. Ver
[Antes de empezar](/es/docs/getting-started/installation#antes-de-empezar).

### «Port is already allocated» o «address already in use»

Otro programa del equipo ya usa el puerto 3000. Cambia el número de la **izquierda** en el
archivo compose, por ejemplo `"8080:3000"`, vuelve a ejecutar `docker compose up -d` y abre la
aplicación en el puerto 8080.

### «docker compose» no es un comando

Las instalaciones de Docker más antiguas, incluidos algunos paquetes de NAS, usan la herramienta aparte `docker-compose`. Ejecuta los mismos comandos con guion: `docker-compose up -d`, `docker-compose pull`.

### La página no carga

- Comprueba que el contenedor está en marcha: `docker ps` debería mostrar `openfishing`.
- Revisa su registro en busca de errores: `docker logs openfishing`.
- Desde otro dispositivo, usa la dirección de red del equipo (por ejemplo
  `http://192.168.1.50:3000`), no `localhost`.
- ¿Funciona en el equipo pero no desde el móvil? Permite el puerto 3000 en el cortafuegos del equipo
  (en un NAS, en sus ajustes de seguridad o cortafuegos).

### ¿Necesito volúmenes persistentes?

**Sí.** Sin ellos, tus datos y fotos se pierden al recrear el contenedor. El archivo compose de
[Instalar OpenFishing](/es/docs/getting-started/installation) crea los dos.

## En el día a día

### ¿Cómo actualizo?

Primero haz una copia de seguridad, luego `docker compose pull` y `docker compose up -d`. Ver
[Actualizar](/es/docs/getting-started/installation#actualizar).

### ¿Tengo que ejecutar migraciones de la base de datos?

**No.** Las migraciones **se ejecutan automáticamente al arrancar**. Descarga una imagen más
reciente y reinicia: el esquema se actualiza solo.

### He olvidado la contraseña de admin

Pon un nuevo `ADMIN_PASSWORD` en el archivo compose y ejecuta `docker compose up -d`. La cuenta
`admin` se sincroniza con esa variable en cada arranque, así que la nueva contraseña funciona
enseguida. Los demás usuarios pueden restablecer la suya por correo si
[SMTP está configurado](/es/docs/configuration/environment-variables).

### ¿Hay inicio de sesión por defecto?

No. OpenFishing está **abierto** mientras no pongas `ADMIN_PASSWORD`. Ver
[Multiusuario y autenticación](/es/docs/multi-user/authentication). No expongas una instancia
abierta a Internet.

### ¿Por qué se rechaza mi subida?

Las subidas están limitadas por **`BODY_SIZE_LIMIT`** (por defecto ≈ 100 MB, es decir
`104857600` bytes). Súbelo si necesitas fotos más grandes, y asegúrate de que un proxy inverso
delante también permite ese tamaño (`client_max_body_size` en nginx).

### «Identificar desde foto» dice «Algo salió mal. Inténtalo de nuevo.»

La IA no está configurada en tu servidor. El botón necesita `LITELLM_URL` y un modelo; mira
[Funciones de IA](/es/docs/ai/ai-features).

### «Cuota de subida superada»

El admin ha puesto un límite de almacenamiento a tu cuenta (**Cuota (MB)** en **Ajustes → Admin**).
Borra fotos que no necesites o pide al admin que lo aumente.

### ¿Cómo ejecuto OpenFishing detrás de un proxy inverso?

Termina HTTPS en tu proxy, reenvía al puerto `3000` con las cabeceras de proxy estándar y ajusta
`BASE_URL` a la dirección pública para que los [códigos QR](/es/docs/features/qr-labels) y los
enlaces de restablecimiento sean correctos.
[Instalar OpenFishing](/es/docs/getting-started/installation#proxy-inverso-y-https) tiene
ejemplos para Caddy y nginx.

### ¿OpenFishing envía mis datos a algún sitio?

Tus registros y fotos se quedan en tu servidor. El tiempo del índice de picada, las teselas del
mapa y las funciones de IA opcionales contactan servicios externos; la
[Introducción](/es/docs/getting-started/introduction#qué-se-comunica-con-internet) enumera exactamente cuáles. Las teselas del mapa pueden venir de tu propio servidor con [`MAP_TILE_URL`](/es/docs/configuration/environment-variables#mapa).

### No encuentro «Crear enlace para compartir»

Los enlaces para compartir necesitan inicio de sesión. Define `ADMIN_PASSWORD` (consulta [Multiusuario y autenticación](/es/docs/multi-user/authentication))
y ejecuta `docker compose up -d`; el botón aparecerá en cada señuelo, punto y captura.

## Copias de seguridad

### La restauración falla: «Discrepancia de esquema»

La copia viene de otra versión de OpenFishing. [Actualiza](/es/docs/getting-started/installation#actualizar) ambas instalaciones a la última
versión, exporta una copia nueva en la antigua y restaura esa.

### «Esta es una copia personal» o «Esta es una copia completa»

Las copias personales y completas se restauran en sitios distintos. Una copia personal, hecha en
**Ajustes → Copia de seguridad y restauración**, se restaura ahí. Una copia completa, hecha por el admin en **Ajustes → Admin**, solo se restaura ahí.

## Ayuda

### ¿Dónde consigo ayuda o informo de un error?

Abre una issue en [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
