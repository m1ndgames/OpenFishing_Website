---
title: Spot
description: Segna gli spot di pesca su una mappa interattiva con coordinate GPS e foto, e vedi automaticamente le catture nelle vicinanze.
---

Gli **spot** ti permettono di ricordare esattamente dove peschi. Ogni spot vive su una mappa interattiva
[Leaflet](https://leafletjs.com/).

## Cosa puoi registrare

- **Posizione sulla mappa** — posiziona un segnaposto sulla mappa o inserisci direttamente le coordinate GPS.
- **Foto** — allega immagini dello spot.
- **Note** — descrivi l'accesso, la struttura o le condizioni.

## Prossimità delle catture

OpenFishing collega spot e catture in base alla distanza. Usando la formula del cerchio massimo **Haversine**,
qualsiasi [cattura](/it/docs/features/catches) registrata **entro 100 m** da uno spot appare automaticamente
su quello spot — così costruisci un quadro di quali luoghi producono davvero pesci, senza associare
manualmente ogni cattura.

## Correlati

- Registra una [cattura](/it/docs/features/catches) con la sua posizione GPS.
- Condividi uno spot pubblicamente con un [link di condivisione](/it/docs/features/share-links).
