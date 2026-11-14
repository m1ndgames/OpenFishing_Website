---
title: Introduzione
description: Cos'è OpenFishing, come tiene i tuoi dati sul tuo server, cosa comunica con Internet e una panoramica delle funzionalità.
---

**OpenFishing** è un'app web self-hosted che permette ai pescatori di organizzare la propria
**collezione di esche**, segnare gli **spot di pesca** su una mappa, registrare le **catture** e
tenere traccia dell'**attrezzatura**, tutto da un'unica applicazione attenta alla privacy che
gira sul tuo server.

È distribuita come un'unica immagine **Docker** con un solo database **SQLite**. Niente servizi
cloud, niente account presso terzi, niente telemetria: le tue foto e i tuoi dati vivono sul tuo
server e da nessun'altra parte. Vuoi vederla prima di installarla? Apri la
[demo dal vivo](https://demo.openfishing.org): senza registrazione, in sola lettura.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Una cattura in OpenFishing: un persico sul tappetino di misura con la lunghezza, l'esca che l'ha preso, l'Indice di abboccata e il posto sulla mappa" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Una cattura in OpenFishing: un persico sul tappetino di misura con la lunghezza, l'esca che l'ha preso, l'Indice di abboccata e il posto sulla mappa" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Guardalo nella demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (si apre in una nuova scheda)</span></a></figcaption>
</figure>

## Panoramica delle funzionalità

| Area | Cosa fa |
|---|---|
| [Esche](/it/docs/features/lures) | Fototeca con tag, specie, preferiti, tracciamento delle esche perse, etichette QR e ricerca rapida. |
| [Spot](/it/docs/features/spots) | Mappa interattiva dei tuoi spot di pesca con GPS e foto. |
| [Catture](/it/docs/features/catches) | Registra specie, peso, lunghezza, GPS, cattura e rilascio e stile di recupero, con un indice di abboccata basato sul meteo. |
| [Attrezzatura](/it/docs/features/tackle) | Canne, mulinelli, lenze e combo, con lo storico delle bobine. |

Inoltre:

- **Analisi**: [Indice di abboccata](/it/docs/features/bite-index), [Statistiche](/it/docs/features/stats)
- **Condivisione**: [Link di condivisione](/it/docs/features/share-links)
- **Opzioni**: [Temi e aspetto](/it/docs/features/themes), [Lingue](/it/docs/features/languages)
- **Gestire il tuo server**: [Multiutente](/it/docs/multi-user/authentication), [Funzioni di IA](/it/docs/ai/ai-features), [Backup e ripristino](/it/docs/backup/backup-restore), [API REST](/it/docs/api/rest-api)

## Filosofia

- **Self-hosted e attenta alla privacy**: la gestisci tu, i dati sono tuoi. I tuoi dati e le tue
  foto restano sul tuo server.
- **Senza cloud**: nessun account e nessun servizio cloud necessari per far funzionare l'app.
- **Open source**: rilasciata con licenza AGPL-3.0 su
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Semplice da gestire**: un container, un file SQLite, due volumi per database e caricamenti.

## Cosa comunica con Internet

I tuoi dati e le tue foto non lasciano mai il tuo server. Queste funzionalità recuperano dati
dall'esterno, e nessun'altra:

- **[Meteo](/it/docs/features/bite-index)**: quando registri una cattura, apri uno spot o chiedi al chatbot di un luogo, il server chiede a
  [Open-Meteo](https://open-meteo.com/) il meteo attuale lì. Vengono inviate solo le coordinate.
- **Mappa degli [spot](/it/docs/features/spots)**: quando viene mostrata una mappa, il browser carica le tessere da OpenStreetMap, che vede la zona
  che guardi. Con `MAP_TILE_URL` usi un tuo server di tessere.
- **[Funzioni di IA](/it/docs/ai/ai-features)**: solo se le configuri; il fornitore di IA che scegli riceve la tua domanda o la tua foto.
- **[Reimpostazione password](/it/docs/multi-user/authentication)**: solo se SMTP è configurato; il tuo server di posta invia l'email.

## Prossimi passi

- [Installa OpenFishing](/it/docs/getting-started/installation) sul tuo NAS o server di casa.
- Dai prima un'occhiata alla [demo dal vivo](https://demo.openfishing.org).
- Regola il comportamento con le [variabili d'ambiente](/it/docs/configuration/environment-variables).

:::note
Manca qualcosa o non è chiaro? [Apri una issue su GitHub](https://github.com/m1ndgames/OpenFishing/issues)
e lo aggiungeremo.
:::
