---
title: Introduzione
description: Cos'è OpenFishing, la sua filosofia self-hosted e attenta alla privacy, e una panoramica delle sue funzionalità.
---

**OpenFishing** è un'app web self-hosted che permette ai pescatori di organizzare la propria **collezione di esche**,
segnare gli **spot di pesca** su una mappa, registrare le proprie **catture** e tenere traccia della propria **attrezzatura** — il tutto da
un'unica applicazione attenta alla privacy che gira sul tuo server.

È un'app [SvelteKit](https://kit.svelte.dev/) basata su un unico database **SQLite**,
distribuita come una sola immagine **Docker**. Non c'è alcun servizio cloud, nessun account con terze parti e
nessuna telemetria: le tue foto e i tuoi dati risiedono sulla tua infrastruttura e da nessun'altra parte.

## Filosofia

- **Self-hosted e attento alla privacy** — lo gestisci tu, i dati sono tuoi. Nulla lascia il tuo server.
- **Senza cloud** — nessuna dipendenza esterna necessaria per il funzionamento del cuore dell'app.
- **Open source** — rilasciato sotto licenza AGPL-3.0 su
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Semplice da eseguire** — un container, un file SQLite, due volumi per il database e gli upload.

## Panoramica delle funzionalità

| Area | Cosa fa |
|---|---|
| [Esche](/it/docs/features/lures) | Libreria fotografica con tag, specie, preferiti, tracciamento delle esche perse, etichette QR e ricerca rapida. |
| [Spot](/it/docs/features/spots) | Mappa Leaflet interattiva dei tuoi spot di pesca con GPS e foto. |
| [Catture](/it/docs/features/catches) | Registra specie, peso, lunghezza, GPS, catch & release e presentazione, con un Indice di abboccata basato sul meteo. |
| [Indice di abboccata](/it/docs/features/bite-index) | Un punteggio automatico da 0 a 10 che valuta le condizioni di pesca dai dati meteo. |
| [Attrezzatura](/it/docs/features/tackle) | Canne, mulinelli, fili e combo, con lo storico delle bobine. |
| [Statistiche](/it/docs/features/stats) | Tendenze delle tue catture e della tua attrezzatura. |
| [Funzioni di IA](/it/docs/ai/ai-features) | Chatbot opzionale più identificazione di pesci ed esche dalle foto. |
| [Multiutente](/it/docs/multi-user/authentication) | Login opzionale per ospitare amici e famiglia, con quote e un pannello di amministrazione. |
| [Link di condivisione](/it/docs/features/share-links) | Pagine pubbliche di sola lettura per un'esca, uno spot o una cattura. |
| [API REST](/it/docs/api/rest-api) | API JSON di sola lettura con token Bearer e un'interfaccia Swagger. |
| [Backup e ripristino](/it/docs/backup/backup-restore) | Esportazione/importazione ZIP con un clic. |
| [Lingue](/it/docs/features/languages) | 9 lingue con un selettore a bandiere. |

## Prossimi passi

- Segui l'[Avvio rapido](/it/docs/getting-started/quick-start) per partire con un solo comando.
- Esegui un deploy corretto con [Installazione (docker-compose)](/it/docs/getting-started/installation).
- Regola il comportamento con le [Variabili d'ambiente](/it/docs/configuration/environment-variables).

:::note
Questa documentazione è un riferimento conciso. Per dettagli a livello di codice sorgente, consulta il
[repository OpenFishing](https://github.com/m1ndgames/OpenFishing) su GitHub.
:::
