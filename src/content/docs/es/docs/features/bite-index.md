---
title: Índice de picada
description: Cómo se calcula y valora la puntuación meteorológica automática de 0 a 10 del Índice de picada de OpenFishing.
---

El **Índice de picada** es una puntuación automática de **0 a 10** que valora cuán favorables eran las
condiciones de pesca para una captura dada, según los datos meteorológicos.

## Cómo se calcula

El índice es una mezcla ponderada de tres factores derivados del clima:

| Factor | Peso | Idea |
|---|---|---|
| **Tendencia de presión** | ×0.5 | El cambio de la presión barométrica influye mucho en la actividad alimentaria. |
| **Luz** | ×0.3 | Los niveles de luz afectan a cuándo están activos los peces. |
| **Estabilidad de la temperatura** | ×0.2 | Las temperaturas estables tienden a significar un comportamiento más predecible. |

Los datos meteorológicos provienen de la [API gratuita de Open-Meteo](https://open-meteo.com/). La puntuación
resultante se almacena como una **instantánea en cada captura**, por lo que refleja las condiciones de ese
momento y nunca cambia retroactivamente.

## Etiquetas de valoración

La puntuación numérica se asigna a una etiqueta amigable:

| Puntuación | Valoración |
|---|---|
| Baja | **Mala** |
| … | **Regular** |
| … | **Buena** |
| Alta | **Excelente** |

## Relacionado

- El Índice de picada se captura automáticamente en cada [captura](/es/docs/features/catches).
