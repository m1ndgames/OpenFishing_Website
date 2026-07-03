---
title: Índice de fisgada
description: Como é calculada e avaliada a pontuação meteorológica automática de 0 a 10 do Índice de fisgada do OpenFishing.
---

O **Índice de fisgada** é uma pontuação automática de **0 a 10** que avalia quão favoráveis eram as condições
de pesca para uma dada captura, com base em dados meteorológicos.

## Como é calculado

O índice é uma mistura ponderada de três fatores derivados do clima:

| Fator | Peso | Ideia |
|---|---|---|
| **Tendência de pressão** | ×0.5 | A variação da pressão barométrica influencia fortemente a atividade alimentar. |
| **Luz** | ×0.3 | Os níveis de luz afetam quando os peixes estão ativos. |
| **Estabilidade da temperatura** | ×0.2 | Temperaturas estáveis tendem a significar um comportamento mais previsível. |

Os dados meteorológicos provêm da [API gratuita Open-Meteo](https://open-meteo.com/). A pontuação resultante é
armazenada como um **instantâneo em cada captura**, por isso reflete as condições daquele momento e nunca muda
retroativamente.

## Etiquetas de avaliação

A pontuação numérica corresponde a uma etiqueta amigável:

| Pontuação | Avaliação |
|---|---|
| Baixa | **Fraca** |
| … | **Razoável** |
| … | **Boa** |
| Alta | **Excelente** |

## Relacionado

- O Índice de fisgada é capturado automaticamente em cada [captura](/pt/docs/features/catches).
