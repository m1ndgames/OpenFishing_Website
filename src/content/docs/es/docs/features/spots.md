---
title: Puntos
description: Marca puntos de pesca en un mapa interactivo con coordenadas GPS y fotos, y ve las capturas cercanas automáticamente.
---

Los **puntos** te permiten recordar exactamente dónde pescas. Cada punto vive en un mapa interactivo
[Leaflet](https://leafletjs.com/).

## Qué puedes registrar

- **Ubicación en el mapa** — coloca un marcador en el mapa o introduce directamente las coordenadas GPS.
- **Fotos** — adjunta imágenes del punto.
- **Notas** — describe el acceso, la estructura o las condiciones.

## Proximidad de capturas

OpenFishing vincula puntos y capturas por distancia. Usando la fórmula de círculo máximo **Haversine**,
cualquier [captura](/es/docs/features/catches) registrada **a menos de 100 m** de un punto aparece
automáticamente en ese punto — así construyes una imagen de qué ubicaciones realmente producen peces, sin
asociar manualmente cada captura.

## Relacionado

- Registra una [captura](/es/docs/features/catches) con su propia ubicación GPS.
- Comparte un punto públicamente con un [enlace para compartir](/es/docs/features/share-links).
