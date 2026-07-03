---
title: Avvio rapido
description: Esegui OpenFishing con un solo comando, accedi per la prima volta e scopri dove risiedono i tuoi dati.
---

Il modo più rapido per provare OpenFishing sulla tua macchina è un singolo `docker run`.

## Comando unico

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Poi apri **http://localhost:3000**.

Questo avvia OpenFishing in modalità **single-tenant, completamente aperta** — senza login. Chiunque possa raggiungere
la porta ha accesso completo, quindi esponila solo su una rete fidata finché non abiliti l'[autenticazione](/it/docs/multi-user/authentication).

## Primo accesso

- **Senza `ADMIN_PASSWORD`** (come sopra): l'app è aperta — non c'è schermata di login e tutte
  le funzionalità sono immediatamente disponibili.
- **Con `ADMIN_PASSWORD` impostata**: appare una schermata di login. Il nome utente admin è sempre
  `admin`, e la password è quella che imposti in `ADMIN_PASSWORD`. L'account viene
  risincronizzato dalla variabile d'ambiente a ogni avvio.

Consulta [Multiutente e autenticazione](/it/docs/multi-user/authentication) per il quadro completo.

## Dove risiedono i tuoi dati

OpenFishing conserva due cose che devi rendere persistenti:

| Dati | Percorso del container | Nel comando sopra |
|---|---|---|
| Database SQLite | `/app/data` | volume denominato `openfishing-db` |
| Foto caricate | `/app/uploads` | volume denominato `openfishing-uploads` |

:::caution
Sia il database sia la directory degli upload **devono** trovarsi su volumi persistenti. Se esegui il
container senza volumi, tutto va perso quando il container viene rimosso.
:::

Per una configurazione pronta per la produzione con volumi denominati e variabili d'ambiente in un file, usa l'[installazione docker-compose](/it/docs/getting-started/installation).
