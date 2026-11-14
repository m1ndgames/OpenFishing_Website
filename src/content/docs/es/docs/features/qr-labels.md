---
title: Etiquetas QR
description: Imprime pequeñas etiquetas de código QR para tus señuelos para vincular un señuelo físico con su entrada.
---

OpenFishing puede generar **etiquetas de código QR** para que un señuelo físico enlace directamente con su
entrada en tu biblioteca.

## Imprimir etiquetas

1. Abre **Ajustes → Códigos QR**. La página **Etiquetas QR faltantes** lista los señuelos que aún no tienen etiqueta.
2. Selecciona **Imprimir códigos QR** e imprime en etiquetas de **12,5 mm**, lo bastante pequeñas para un señuelo o su caja. Cada etiqueta mide unos 41 mm de largo.
3. Pega cada etiqueta y selecciona **Colocar etiqueta** en ese señuelo para que salga de la lista.

Cada etiqueta lleva un enlace hecho con tu **`BASE_URL`**, así que al escanearla se abre ese señuelo.
Pon en `BASE_URL` la dirección con la que abres OpenFishing; mira [Variables de entorno](/es/docs/configuration/environment-variables). Con inicio de sesión, el señuelo solo se abre en un móvil con la sesión iniciada.

## Relacionado

- Las etiquetas hacen referencia a los números secuenciales `#0001` descritos en [Señuelos](/es/docs/features/lures).
