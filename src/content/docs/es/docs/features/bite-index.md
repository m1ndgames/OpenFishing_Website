---
title: "Índice de picada"
description: "Cómo calcula OpenFishing el índice de picada de 0 a 10 a partir del tiempo y qué significan sus niveles."
---

El **índice de picada** es una nota de **0 a 10** sobre lo bueno que es el tiempo para pescar.
OpenFishing la calcula con el tiempo en el lugar de la captura **en el momento en que la registras**
y la guarda con la captura.

:::note
La nota usa el tiempo al guardar, no la hora que indicas para la captura. Registra las capturas en
el agua para una nota precisa; una que añadas horas después recibe el tiempo de ese momento posterior.
:::

## Cómo se calcula

Tres partes, cada una puntuada de 0 a 10, se ponderan y se suman:

- **Tendencia de presión** (50 %): 10 si la presión bajó más de 1,5 hPa en las últimas 3 horas, como antes de un frente; 7 si se mantiene; 2 si sube.
- **Condiciones de luz** (30 %): 10 al amanecer (la hora antes de salir el sol) y al anochecer (la hora después de la puesta); 8 en la hora antes de la puesta; 6 de noche y en las dos horas tras el amanecer; 2 de día.
- **Estabilidad de temperatura** (20 %): 10 si la temperatura cambió menos de 3 °C en las últimas 3 horas; 2 si el cambio fue mayor.

Tu servidor obtiene el tiempo del servicio gratuito [Open-Meteo](https://open-meteo.com/).

## Niveles

| Puntuación | Nivel |
|---|---|
| 8,5 o más | **Excelente** |
| 6,5 a 8,4 | **Bueno** |
| 4 a 6,4 | **Regular** |
| Menos de 4 | **Malo** |

## Dónde lo ves

- En cada [captura](/es/docs/features/catches), guardado al registrarla.
- En cada [punto](/es/docs/features/spots), como nota actual de ese lugar, obtenida al abrirlo.
