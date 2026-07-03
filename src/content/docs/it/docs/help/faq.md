---
title: FAQ / Risoluzione dei problemi
description: Volumi persistenti, migrazioni automatiche, note sul reverse proxy e il limite di dimensione degli upload.
---

## Ho bisogno di volumi persistenti?

**Sì.** Sia il database SQLite (`/app/data`) sia la directory degli upload (`/app/uploads`) devono trovarsi su
volumi persistenti. Senza di essi, i tuoi dati e le foto vanno persi quando il container viene ricreato. Vedi
[Installazione](/it/docs/getting-started/installation).

## Devo eseguire le migrazioni del database?

**No.** In produzione, le **migrazioni del database vengono eseguite automaticamente all'avvio**. Basta
scaricare un'immagine più recente e riavviare — lo schema viene aggiornato per te.

## Come eseguo OpenFishing dietro un reverse proxy?

- Termina il TLS sul tuo proxy (nginx, Caddy, Traefik…) e inoltra alla porta `3000` del container.
- Imposta **`BASE_URL`** sul tuo URL HTTPS pubblico così che i [QR-code](/it/docs/features/qr-labels) e i link
  di reset della password siano corretti.
- **Inoltra gli header di proxy standard** (host e forwarded-for/proto) così che l'app veda l'URL esterno
  corretto.

## Perché il mio upload viene rifiutato?

Gli upload sono limitati da **`BODY_SIZE_LIMIT`** (predefinito ≈ 100 MB, cioè `104857600` byte). Aumentalo se ti
servono foto più grandi, e assicurati che qualsiasi reverse proxy a monte consenta anch'esso la dimensione del
corpo maggiore.

## C'è un login predefinito?

No — OpenFishing è **aperto** a meno che tu non imposti `ADMIN_PASSWORD`. Vedi
[Multiutente e autenticazione](/it/docs/multi-user/authentication). Non esporre un'istanza aperta alla rete
Internet pubblica.

## Dove posso ottenere aiuto o segnalare un bug?

Apri una issue su [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
