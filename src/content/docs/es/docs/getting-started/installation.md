---
title: Instalar OpenFishing
description: Qué necesitas, el archivo docker-compose, dónde ejecutarlo, qué deberías ver y cómo actualizar.
---

OpenFishing funciona como un único contenedor Docker en un equipo que es tuyo. Esta página te
lleva de una máquina vacía a tu propia instancia en marcha. ¿Quieres echar un vistazo antes? La
[demo en vivo](https://demo.openfishing.org) no necesita instalación ni registro.

## Antes de empezar

Necesitas:

- **Un equipo siempre encendido**, como un NAS, un mini PC o un servidor doméstico.
- **Docker con Docker Compose** instalado en él. En muchos NAS, Docker es una aplicación del
  centro de paquetes; en Linux, sigue la [guía de instalación de Docker](https://docs.docker.com/engine/install/). En Synology se llama Container Manager; en QNAP, Container Station.
- **Un procesador de 64 bits Intel o AMD (amd64).** La imagen solo existe para amd64, así que los
  equipos con procesador ARM no pueden ejecutarla. Para comprobarlo, ejecuta `uname -m` en el
  equipo: `x86_64` significa que todo está bien; `aarch64` o `armv7l` significa que es un equipo ARM.
  ¿Sin terminal? Busca el procesador de tu modelo de NAS en su ficha técnica.

## ¿Solo quieres probarlo?

Para un vistazo rápido sin archivo compose, basta un comando:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Cambia `192.168.1.50` por la dirección de tu equipo, para que los enlaces y las etiquetas QR funcionen también en tus otros dispositivos.

Así OpenFishing arranca sin inicio de sesión. Cuando decidas quedártelo, pasa al archivo
compose: guarda tus ajustes en un solo lugar.

## 1. Crear el archivo compose

Crea una carpeta llamada `openfishing` y guarda en ella este archivo:

```yaml title="docker-compose.yml"
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Dirección con la que lo abres
      - BASE_URL=http://192.168.1.50:3000
      # Tu zona horaria
      - TZ=Europe/Berlin
      # Login: quita # y pon contraseña
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Cambia estas líneas antes de arrancarlo:**

- `BASE_URL`: la dirección que escribirás en el navegador, con `http://` y el puerto, por
  ejemplo la de tu NAS. **Es obligatoria:** sin ella, OpenFishing supone HTTPS y cada guardado
  falla con «Cross-site POST form submissions are forbidden». También va en los códigos QR, así
  que usa la dirección con la que otros dispositivos llegan al equipo.
  Dale al equipo una dirección fija en tu router (una *reserva DHCP*); si no, puede cambiar y
  tus códigos QR dejarán de llevar a él.
- `TZ`: tu [zona horaria](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), para que las horas de captura no se desplacen.
- `ADMIN_PASSWORD`: sin ella no hay pantalla de inicio de sesión y cualquiera en tu red tiene
  acceso completo. Quita el `#` y añade tu contraseña antes de que otras personas o Internet
  puedan llegar a la aplicación. El usuario siempre es `admin`.

## 2. Arrancarlo

**¿Usas una aplicación Docker del NAS o Portainer?** Crea un nuevo *stack* (o *proyecto*), pega
el archivo de arriba y despliégalo.

**¿Usas un terminal?** Conéctate al equipo (por ejemplo por SSH), entra en la carpeta y ejecuta:

```bash
docker compose up -d
```

El primer arranque tarda uno o dos minutos mientras Docker descarga la imagen.

## 3. Abrirlo

Abre la dirección que pusiste en `BASE_URL`, por ejemplo **`http://192.168.1.50:3000`**
(o `http://localhost:3000` en el propio equipo). Deberías ver tu colección de señuelos vacía,
lista para el primer señuelo. Si pusiste `ADMIN_PASSWORD`, inicia sesión primero como **`admin`**.

Si la página aún no carga, puede que el primer arranque siga en marcha: `docker compose logs openfishing`
muestra `Listening on` cuando está listo.

Ya estás dentro. Ahora, [añade tu primer señuelo](/es/docs/features/lures).

## Dónde están tus datos

- **Base de datos SQLite (señuelos, puntos, capturas, aparejos)**: ruta en el contenedor `/app/data`, volumen `openfishing-db`
- **Tus fotos**: ruta en el contenedor `/app/uploads`, volumen `openfishing-uploads`

:::caution
Conserva ambos volúmenes. Un contenedor arrancado sin ellos lo pierde todo al eliminarse. Para
copias en otro lugar, usa [Copia de seguridad y restauración](/es/docs/backup/backup-restore).
:::

## Actualizar

Haz primero una copia de seguridad (en **Ajustes**, ver
[Copia de seguridad y restauración](/es/docs/backup/backup-restore)), luego descarga la nueva
imagen y reinicia:

```bash
docker compose pull
docker compose up -d
```

Las migraciones de la base de datos se ejecutan automáticamente al arrancar, y tus datos siguen
en los volúmenes. En una aplicación Docker del NAS o Portainer, usa la acción *pull y volver a
desplegar* (o *actualizar*) del stack.

¿Empezaste con el comando único? Ejecuta `docker pull ghcr.io/m1ndgames/openfishing`,
elimina el contenedor antiguo (`docker rm -f <nombre>`) y vuelve a ejecutar el mismo comando
`docker run`: los volúmenes con nombre conservan tus datos.

¿Quieres decidir cuándo actualizar? Sustituye la imagen por una etiqueta de versión de la
[página de versiones](https://github.com/m1ndgames/OpenFishing/releases), como `ghcr.io/m1ndgames/openfishing:<version>`, y cámbiala cuando
quieras. Mantén ambos equipos en la misma versión al mover una copia.

## Proxy inverso y HTTPS

Para acceder a OpenFishing desde fuera de casa, ponlo detrás de un proxy inverso que gestione
HTTPS y ajusta `BASE_URL` a la dirección pública. Con Caddy, esta es toda la configuración:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Con nginx, reenvía las cabeceras de proxy estándar y permite subidas del tamaño de una foto:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Pon `ADMIN_PASSWORD` antes de hacerlo: una instancia sin inicio de sesión nunca debe quedar
expuesta a Internet.

## Siguientes pasos

- Añade tu primer señuelo: [Señuelos](/es/docs/features/lures) muestra lo que puedes registrar.
- Todos los ajustes (correo, IA, límites de subida, modo demo) están en la
  [referencia de variables de entorno](/es/docs/configuration/environment-variables).
- Para amigos y familia: [Multiusuario y autenticación](/es/docs/multi-user/authentication).
- ¿Algo no funciona? Consulta [FAQ y solución de problemas](/es/docs/help/faq).
