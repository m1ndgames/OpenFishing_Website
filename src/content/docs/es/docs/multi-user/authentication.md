---
title: Multiusuario y autenticación
description: Activa el inicio de sesión para alojar a amigos y familia, crea cuentas, fija cuotas de almacenamiento y gestiona contraseñas olvidadas.
---

De serie, OpenFishing tiene **una sola colección compartida y ningún inicio de sesión**:
cualquiera que pueda abrir su dirección puede usarlo. En una red doméstica de confianza está
bien. Para alojar a amigos y familia, o para llegar a OpenFishing desde internet, activa el
inicio de sesión.

## Activar el inicio de sesión

El archivo compose de [Instalar OpenFishing](/es/docs/getting-started/installation) ya tiene la
línea, desactivada con un `#`:

```yaml title="docker-compose.yml"
    environment:
      # Login: quita # y pon contraseña
      # - ADMIN_PASSWORD=
```

Quita el `# ` delante de `- ADMIN_PASSWORD=`, escribe tu propia contraseña justo después del `=`
y ejecuta `docker compose up -d`. Aparece una pantalla de inicio de sesión: entra con el usuario
**admin** y esa contraseña.

## La cuenta admin

- El nombre de usuario es siempre `admin`.
- La contraseña es la que diga `ADMIN_PASSWORD`. OpenFishing la lee en cada arranque: para
  cambiarla, edita la línea y vuelve a ejecutar `docker compose up -d`.

## Añadir a un familiar

1. Entra como `admin` y abre **Ajustes → Admin**.
2. En **Crear usuario**, rellena **Correo**, **Nombre de usuario** y **Contraseña**.
3. Deja **Cuota (MB)** vacía para no limitar las subidas, o escribe un número.
4. Elige **Crear**.

Envíale la dirección, su nombre de usuario y la contraseña. Entra con su correo o su nombre de
usuario y puede elegir una contraseña nueva en **Ajustes → Mi cuenta → Cambiar contraseña**.

## Quién ve qué

Cada cuenta tiene sus propios señuelos, puntos, capturas y aparejos. Nadie ve los de los demás.

## Gestionar cuentas

**Ajustes → Admin** muestra todas las cuentas. En cada una puedes editar el usuario y el email, cambiar
la cuota de almacenamiento y escribir una contraseña nueva en el campo **Restablecer contraseña**, y luego seleccionar
**Guardar**. También puedes activar o desactivar el [chatbot de IA](/es/docs/ai/ai-features), **Regenerar token** para la
[API REST](/es/docs/api/rest-api), **Desactivar** la cuenta o **Eliminarla**. Eliminar borra la cuenta y todos sus
datos para siempre.

## Contraseñas olvidadas

- **Un familiar:** el admin escribe una contraseña nueva en el campo **Restablecer contraseña** de esa cuenta, en **Ajustes → Admin**, y selecciona **Guardar**. Con el correo
  configurado (al menos `SMTP_HOST` y `SMTP_FROM`, ver
  [Variables de entorno](/es/docs/configuration/environment-variables)), la pantalla de inicio
  de sesión también ofrece un enlace por correo.
- **El admin:** cambia `ADMIN_PASSWORD` y ejecuta `docker compose up -d`.
