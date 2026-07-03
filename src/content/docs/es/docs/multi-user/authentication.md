---
title: Multiusuario y autenticación
description: Activa el inicio de sesión para alojar a amigos y familia, con aislamiento por usuario, cuotas, un panel de administración y restablecimiento de contraseña por SMTP.
---

Por defecto, OpenFishing funciona en modo **de un solo inquilino y totalmente abierto** — sin inicio de sesión.
Define la variable de entorno **`ADMIN_PASSWORD`** para activar el **modo multiusuario**.

## Activar el inicio de sesión

Define `ADMIN_PASSWORD` (consulta [Variables de entorno](/es/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Una vez definido, aparece una pantalla de inicio de sesión. Los usuarios inician sesión con su **correo/nombre
de usuario + contraseña**.

:::note
`AUTH_PASSWORD` es un nombre alternativo **obsoleto** para `ADMIN_PASSWORD`. Usa `ADMIN_PASSWORD`.
:::

## La cuenta admin

- La cuenta **`admin`** siempre existe cuando la autenticación está habilitada.
- Su nombre de usuario es siempre `admin`; su contraseña es la que se defina en `ADMIN_PASSWORD`.
- Se **vuelve a sincronizar desde la variable de entorno en cada arranque**, por lo que cambiar la variable y
  reiniciar actualiza la contraseña.

## El panel de administración

Los administradores tienen un panel en **`/settings/admin`** para gestionar la instancia:

- **Usuarios** — crear, habilitar/deshabilitar y gestionar cuentas.
- **Cuotas de almacenamiento** — limitar cuánto puede subir cada usuario.
- **Interruptor del chatbot** — habilitar/deshabilitar las [funciones de IA](/es/docs/ai/ai-features) por usuario.
- **Tokens de API** — gestionar los tokens Bearer de la [API REST](/es/docs/api/rest-api).

## Aislamiento de datos por usuario

Los señuelos, puntos, capturas y aparejos de cada usuario están **aislados** — los usuarios solo ven sus propios datos.

## Restablecimiento de contraseña (SMTP)

Si configuras SMTP (al menos `SMTP_HOST` y `SMTP_FROM`), los usuarios pueden restablecer contraseñas olvidadas
por correo. Sin SMTP configurado, la opción de restablecimiento está oculta. Consulta las
[variables SMTP](/es/docs/configuration/environment-variables).

## Cuotas de almacenamiento por usuario

Los administradores pueden establecer **cuotas de almacenamiento** por usuario desde el panel de administración,
para que ningún usuario pueda llenar el disco con subidas.
