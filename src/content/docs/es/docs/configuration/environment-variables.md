---
title: Variables de entorno
description: Todos los ajustes de OpenFishing, con los valores por defecto de la imagen Docker, agrupados por función.
prev: false
---

OpenFishing se configura por completo con variables de entorno, en la sección `environment:`
de tu archivo compose (o con `-e` en `docker run`). Los valores por defecto de abajo son los de
la imagen Docker. Casi todas las instalaciones ponen `BASE_URL` y `TZ`; lo demás es opcional.

## Dirección y hora

- **`BASE_URL`** · por defecto: sin definir\
  La dirección con la que se abre OpenFishing, con `http://` o `https://`, por ejemplo
  `http://192.168.1.50:3000` o `https://fishing.example.com`. El servidor toma de ella el
  esquema: **sin ella supone HTTPS y en una instalación con HTTP simple se rechaza cada
  guardado** («Cross-site POST form submissions are forbidden»). También construye los enlaces de los códigos QR y para compartir, que apuntan a `http://localhost:5173` si no está definida.
- **`PROTOCOL_HEADER`** · por defecto: sin definir\
  Solo para un proxy inverso que informa él mismo del esquema, por ejemplo
  `PROTOCOL_HEADER=x-forwarded-proto`. Si se define, tiene prioridad sobre el esquema de `BASE_URL`.
- **`TZ`** · por defecto: UTC\
  Tu zona horaria, por ejemplo `Europe/Madrid` o `America/New_York`. Sin ella, las horas de
  captura se desplazan.

## Almacenamiento

- **`DATABASE_URL`** · por defecto: `/app/data/openfishing.db`\
  El archivo de la base de datos SQLite, en el volumen `/app/data`. No cambiar.
- **`UPLOAD_PATH`** · por defecto: `/app/uploads`\
  Donde se guardan las fotos, en el volumen `/app/uploads`. No cambiar.
- **`BODY_SIZE_LIMIT`** · por defecto: `104857600` (≈ 100 MB)\
  La subida más grande en bytes. Un proxy inverso delante necesita un límite equivalente.

## Inicio de sesión

- **`ADMIN_PASSWORD`** · por defecto: sin definir\
  Activa el inicio de sesión. Es la contraseña de la cuenta `admin` (el usuario siempre es
  `admin`) y se vuelve a leer en cada arranque. Sin definir: la instancia está abierta, sin inicio de sesión.
- **`AUTH_PASSWORD`** · obsoleta\
  El nombre antiguo de `ADMIN_PASSWORD`. Sigue funcionando; usa `ADMIN_PASSWORD`.

Ver [Multiusuario y autenticación](/es/docs/multi-user/authentication).

## Correo para restablecer la contraseña

La opción «olvidé mi contraseña» solo aparece si están definidas al menos `SMTP_HOST` y `SMTP_FROM`.

- **`SMTP_HOST`** · por defecto: sin definir\
  Tu servidor de correo.
- **`SMTP_PORT`** · por defecto: `587`\
  El puerto `465` implica TLS; los demás usan STARTTLS.
- **`SMTP_SECURE`** · por defecto: sin definir\
  Ponla a `true` para TLS implícito (normalmente con el puerto 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · por defecto: sin definir\
  Credenciales del servidor de correo. Omítelas en relés que no las necesitan.
- **`SMTP_FROM`** · por defecto: sin definir\
  El remitente, por ejemplo `OpenFishing <noreply@example.com>`.

Por ejemplo, con una cuenta de correo en el puerto 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Contraseña de tu cuenta de correo
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Mapa

- **`MAP_TILE_URL`** · por defecto: OpenStreetMap\
  Una plantilla de URL de teselas para
  usar tu propio servidor de teselas u otro en lugar de OpenStreetMap.\
  Por ejemplo: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · por defecto: sin definir\
  La atribución que se muestra en el mapa para `MAP_TILE_URL`. La mayoría de proveedores la exigen.

## Funciones de IA

- **`CHATBOT`** · por defecto: sin definir\
  Ponla a `true` para activar el chatbot de IA. Necesita los ajustes de LiteLLM de abajo. Consulta [Funciones de IA](/es/docs/ai/ai-features).
- **`LITELLM_URL`** · por defecto: sin definir\
  Tu proxy LiteLLM, por ejemplo `http://litellm:4000`.
- **`LITELLM_MODEL`** · por defecto: sin definir\
  El modelo del chatbot, que coincida con un `model_name` de tu `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · por defecto: sin definir\
  Modelo opcional para identificar peces y señuelos en fotos. Si falta, usa `LITELLM_MODEL`.

Ver [Funciones de IA](/es/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · por defecto: sin definir\
  **Cualquier** valor activa el modo demo de solo lectura, incluso `false` o `0`. Para
  desactivarlo, quita la línea. Ver [Modo demo](/es/docs/demo/demo-mode).
