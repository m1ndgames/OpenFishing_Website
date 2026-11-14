---
title: "Copia de seguridad y restauración"
description: "Haz una copia de tu colección en un solo ZIP y restáurala, en el mismo equipo o en uno nuevo."
---

OpenFishing guarda todo lo que has registrado, fotos incluidas, en **un solo archivo ZIP** que
descargas. Guarda una copia en otro sitio que no sea el equipo donde funciona OpenFishing.

## Hacer una copia

1. Abre **Ajustes → Copia de seguridad y restauración**.
2. En **Exportar copia de seguridad**, elige **Exportar**.

El ZIP contiene tus señuelos, puntos, capturas y aparejos con sus fotos. Con inicio de sesión,
cada persona copia así solo su propia cuenta.

:::caution
Una restauración no se puede deshacer. Exporta antes una copia reciente.
:::

## Restaurar una copia

1. Abre **Ajustes → Copia de seguridad y restauración**.
2. En **Importar copia de seguridad**, elige **Elegir archivo** y selecciona el ZIP.
3. Marca la casilla que confirma que se reemplazarán tus datos actuales.
4. Elige **Importar y reemplazar**.

Todo lo de tu cuenta se reemplaza por el contenido de la copia. OpenFishing comprueba antes el
formato de la copia y no cambia nada si no encaja.

Si funciona, verás **Importación exitosa** con el número de señuelos, puntos y capturas restaurados.

## Copiar toda la instancia (admin)

Con inicio de sesión, el admin copia y restaura todas las cuentas a la vez en **Ajustes → Admin**:

- **Exportar todo** descarga todas las cuentas y sus datos en un solo ZIP.
- **Restaurar copia completa** reemplaza todos los datos y cuentas con una copia completa. Se
  cierra la sesión de todos y la contraseña del admin vuelve a salir de `ADMIN_PASSWORD`.

Para restaurar, marca la confirmación y selecciona **Restaurar todo y reemplazar**.

## Pasar a un equipo nuevo

1. En el equipo antiguo, [actualiza OpenFishing](/es/docs/getting-started/installation#actualizar) a la última versión y exporta una copia nueva.
   Apunta el **Formato de copia** que aparece en **Ajustes**.
2. [Instala OpenFishing](/es/docs/getting-started/installation) en el equipo nuevo. Su **Formato de copia** en **Ajustes** debe coincidir con el del equipo antiguo.
3. Ábrelo y restaura: en **Ajustes → Copia de seguridad y restauración** si no tienes inicio de
   sesión, o con una copia completa en **Ajustes → Admin → Restaurar copia completa** si lo usan
   varias personas.
4. Revisa tus señuelos y fotos antes de apagar el equipo antiguo.

## Qué hay en el ZIP

- `backup.json`: tus registros.
- `uploads/`: las fotos.

Es un ZIP normal, así que puedes abrirlo para comprobarlo.

## Copias y volúmenes

Las copias no sustituyen a los [volúmenes](/es/docs/getting-started/installation) que guardan la base de datos activa y las fotos.
Mantén ambos y exporta una copia antes de cambios grandes como una actualización.
