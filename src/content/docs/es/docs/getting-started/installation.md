---
title: Instalación (docker-compose)
description: Una configuración completa de docker-compose para OpenFishing con volúmenes persistentes y las variables de entorno esenciales.
---

Para cualquier cosa más allá de una prueba rápida, ejecuta OpenFishing con **docker-compose**. Esto te da
volúmenes con nombre, variables de entorno en un solo lugar y reinicios sencillos.

## docker-compose.yml

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Archivo de base de datos SQLite persistente (dentro del volumen /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Directorio de subidas (dentro del volumen /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # URL pública — usada para los enlaces de código QR y restablecimiento de contraseña
      - BASE_URL=https://fishing.yourdomain.com
      # Defínelo para habilitar el inicio de sesión; omítelo para una instancia de un solo inquilino totalmente abierta
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Levántalo:

```bash
docker compose up -d
```

Luego navega a tu `BASE_URL` (o `http://localhost:3000` en local).

## Los volúmenes persistentes son obligatorios

Los dos volúmenes no son opcionales:

- `/app/data` contiene la **base de datos SQLite** — tus señuelos, puntos, capturas y aparejos.
- `/app/uploads` contiene cada **foto** que añades.

:::caution
Si alguna ruta no está montada en un volumen persistente, esos datos se destruyen cuando el
contenedor se recrea. Haz siempre una copia de seguridad de ambos — consulta [Copia de seguridad y restauración](/es/docs/backup/backup-restore).
:::

## Variables de entorno esenciales

El ejemplo anterior usa lo esencial. La lista completa — SMTP, IA, modo demo, límites de subida y
más — está documentada en la [referencia de variables de entorno](/es/docs/configuration/environment-variables).

## Proxy inverso

Coloca OpenFishing detrás de tu proxy inverso (nginx, Caddy, Traefik…) y termina TLS allí.
Define **`BASE_URL`** con la URL HTTPS pública para que los códigos QR y los enlaces de restablecimiento de contraseña apunten al
lugar correcto, y reenvía las cabeceras de proxy estándar. Consulta las
[FAQ](/es/docs/help/faq) para más detalles.
