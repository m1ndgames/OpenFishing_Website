---
title: "Índice de mordida"
description: "Como o OpenFishing calcula o índice de mordida de 0 a 10 a partir do tempo e o que significam as classificações."
---

O **índice de mordida** é uma nota de **0 a 10** sobre quão bom está o tempo para pescar. O
OpenFishing calcula-a com o tempo no local da captura **no momento em que a registas** e guarda-a com
a captura.

:::note
A nota usa o tempo no momento em que gravas, não a hora que indicas para a captura. Regista as
capturas junto à água para uma nota certa; uma captura adicionada horas depois recebe o tempo desse
momento posterior.
:::

## Como é calculado

Três componentes, cada uma pontuada de 0 a 10, são ponderadas e somadas:

- **Tendência de pressão** (50 %): 10 se a pressão desceu mais de 1,5 hPa nas últimas 3 horas, como antes de uma frente; 7 se estável; 2 se a subir.
- **Condições de luz** (30 %): 10 ao amanhecer (a hora antes do nascer do sol) e ao anoitecer (a hora depois do pôr do sol); 8 na hora antes do pôr do sol; 6 de noite e nas duas horas após o nascer do sol; 2 durante o dia.
- **Estabilidade de temperatura** (20 %): 10 se a temperatura variou menos de 3 °C nas últimas 3 horas; 2 para uma variação maior.

O teu servidor obtém o tempo do serviço gratuito [Open-Meteo](https://open-meteo.com/).

## Classificações

| Pontuação | Classificação |
|---|---|
| 8,5 ou mais | **Excelente** |
| 6,5 a 8,4 | **Bom** |
| 4 a 6,4 | **Razoável** |
| Abaixo de 4 | **Mau** |

## Onde o vês

- Em cada [captura](/pt/docs/features/catches), guardado quando a registas.
- Em cada [local](/pt/docs/features/spots), como nota atual, obtida quando o abres.
