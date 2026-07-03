---
title: Pontos
description: Marca pontos de pesca num mapa interativo com coordenadas GPS e fotos, e vê as capturas próximas automaticamente.
---

Os **pontos** permitem-te lembrar exatamente onde pescas. Cada ponto vive num mapa interativo
[Leaflet](https://leafletjs.com/).

## O que podes registar

- **Localização no mapa** — coloca um marcador no mapa ou introduz diretamente as coordenadas GPS.
- **Fotos** — anexa imagens do ponto.
- **Notas** — descreve o acesso, a estrutura ou as condições.

## Proximidade das capturas

O OpenFishing liga pontos e capturas por distância. Usando a fórmula de círculo máximo **Haversine**, qualquer
[captura](/pt/docs/features/catches) registada **a menos de 100 m** de um ponto aparece automaticamente nesse
ponto — assim constróis uma imagem de que locais realmente produzem peixe, sem associar manualmente cada
captura.

## Relacionado

- Regista uma [captura](/pt/docs/features/catches) com a sua própria localização GPS.
- Partilha um ponto publicamente com uma [ligação de partilha](/pt/docs/features/share-links).
