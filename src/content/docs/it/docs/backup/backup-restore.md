---
title: Backup e ripristino
description: Backup e ripristino ZIP con un clic, per utente o per l'intera istanza, e cosa contiene l'archivio.
---

OpenFishing dispone di **backup e ripristino** integrati come archivi ZIP scaricabili/caricabili.

## Backup e ripristino per utente

Da **`/settings`**, qualsiasi utente può eseguire il backup e ripristinare **i propri dati** — le proprie esche,
spot, catture e attrezzatura, oltre agli upload associati.

## Backup e ripristino dell'intera istanza (admin)

Dal pannello di amministrazione a **`/settings/admin`**, un admin può eseguire il backup e ripristinare
l'**intera istanza** — inclusi tutti gli utenti e account.

:::caution
Un **ripristino completo** esegue una **cancellazione e ricostruzione** completa dell'istanza: i dati esistenti
vengono sostituiti dal contenuto dell'archivio. Esegui prima un nuovo backup.
:::

## Formato dell'archivio

Un backup è uno ZIP contenente:

- **`backup.json`** — i dati strutturati (record).
- **`uploads/`** — i file foto associati.

Poiché è un semplice ZIP, puoi archiviarlo ovunque e ispezionarlo se necessario.

## Correlati

- Ricorda che il database live e gli upload devono trovarsi su
  [volumi persistenti](/it/docs/getting-started/installation) — i backup completano, ma non sostituiscono,
  volumi adeguati.
