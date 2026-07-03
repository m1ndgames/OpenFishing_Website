---
title: Variables de entorno
description: Referencia completa de cada variable de entorno de OpenFishing, con valores por defecto y descripciones.
---

OpenFishing se configura por completo mediante variables de entorno. Cada variable es opcional salvo donde se
indique; las variables no definidas recurren a los valores por defecto de abajo.

## Tabla de referencia

| Variable | Por defecto | Descripción |
|---|---|---|
| `DATABASE_URL` | `local.db` | Ruta al archivo de base de datos SQLite. En Docker, apúntala a tu volumen de datos, p. ej. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Directorio para fotos de señuelos/puntos/capturas. **Monta un volumen** aquí (p. ej. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | URL base pública, usada para construir los enlaces de código QR y restablecimiento de contraseña. Defínela con tu URL HTTPS real detrás de un proxy inverso. |
| `ADMIN_PASSWORD` | _(sin definir)_ | Defínela para **habilitar el inicio de sesión multiusuario**. Es la contraseña de la cuenta `admin` (el nombre de usuario es siempre `admin`, resincronizado en cada arranque). Sin definir = instancia de un solo inquilino totalmente abierta. |
| `AUTH_PASSWORD` | _(sin definir)_ | Nombre alternativo **obsoleto** para `ADMIN_PASSWORD`. Prefiere `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(sin definir)_ | Nombre de host del servidor SMTP para los correos de «contraseña olvidada». |
| `SMTP_PORT` | _(sin definir)_ | Puerto del servidor SMTP. |
| `SMTP_SECURE` | _(sin definir)_ | Usar TLS para la conexión SMTP. |
| `SMTP_USER` | _(sin definir)_ | Nombre de usuario SMTP. |
| `SMTP_PASS` | _(sin definir)_ | Contraseña SMTP. |
| `SMTP_FROM` | _(sin definir)_ | La dirección `From:` del correo saliente. |
| `DEMO_MODE` | _(sin definir)_ | Cualquier valor = **modo demo de solo lectura** (todas las escrituras bloqueadas). |
| `CHATBOT` | _(sin definir)_ | Cualquier valor verdadero habilita el **chatbot de IA** (requiere las variables de LiteLLM). |
| `LITELLM_URL` | _(sin definir)_ | URL base de tu proxy LiteLLM, p. ej. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(sin definir)_ | Nombre de modelo que coincide con una entrada de `litellm.config.yaml`. |
| `LITELLM_VISION_MODEL` | _(sin definir)_ | Modelo con capacidad de visión opcional para identificación de peces/señuelos. Recurre a `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Tamaño máximo de subida en bytes (por defecto ≈ 100 MB). |

:::note
La función SMTP de «contraseña olvidada» solo aparece cuando al menos `SMTP_HOST` **y** `SMTP_FROM` están
definidos. Sin ellos, la opción de restablecimiento está oculta.
:::

## Notas sobre los valores por defecto

Los valores por defecto de arriba son los predeterminados integrados en el código de la app. En un contenedor,
normalmente sobrescribirás las rutas para apuntar a volúmenes montados:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Agrupadas por propósito

- **Almacenamiento:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Red / enlaces:** `BASE_URL`
- **Autenticación:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` obsoleto)
- **Correo / restablecimiento de contraseña:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **Funciones de IA:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Consulta [Multiusuario y autenticación](/es/docs/multi-user/authentication),
[Funciones de IA](/es/docs/ai/ai-features) y [Modo demo](/es/docs/demo/demo-mode) para ver cómo encajan estos
grupos.
