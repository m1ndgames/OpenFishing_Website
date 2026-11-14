---
title: FAQ e risoluzione dei problemi
description: Soluzioni a problemi di installazione comuni (macchine ARM, conflitti di porta, password admin dimenticata) e risposte su volumi, aggiornamenti, caricamenti e accesso.
---

I problemi sono elencati con il messaggio che vedi davvero: cercare il testo esatto dell'errore
di solito porta dritto alla soluzione.

Dove una risposta dice `docker compose up -d`, su un NAS puoi invece ridistribuire lo stack nella sua
app.

## Installazione

### Il salvataggio fallisce: «Cross-site POST form submissions are forbidden»

`BASE_URL` manca o inizia con `https://` mentre apri l'app in semplice `http://`. Impostala sull'indirizzo esatto che apri, ad esempio `BASE_URL=http://192.168.1.50:3000`, ed esegui di nuovo `docker compose up -d`. Dietro un reverse proxy, imposta `BASE_URL` sull'indirizzo `https://` che si apre; basta questo. Vedi [Variabili d'ambiente](/it/docs/configuration/environment-variables#indirizzo-e-ora).

### Il container non parte: «exec format error»

La macchina ha un processore ARM (comune nei NAS piccoli e nei computer a scheda singola).
L'immagine di OpenFishing esiste solo per **Intel o AMD a 64 bit (amd64)**, quindi lì non può
funzionare. Verificalo con `uname -m`: `x86_64` funziona, `aarch64` o `armv7l` no. Vedi
[Prima di iniziare](/it/docs/getting-started/installation#prima-di-iniziare).

### «Port is already allocated» o «address already in use»

Un altro programma sulla macchina usa già la porta 3000. Cambia il numero a **sinistra** nel file
compose, ad esempio `"8080:3000"`, esegui di nuovo `docker compose up -d` e apri l'app sulla
porta 8080.

### «docker compose» non è un comando

Le installazioni Docker più vecchie, compresi alcuni pacchetti NAS, usano lo strumento separato `docker-compose`. Esegui gli stessi comandi con il trattino: `docker-compose up -d`, `docker-compose pull`.

### La pagina non si carica

- Controlla che il container sia in esecuzione: `docker ps` dovrebbe elencare `openfishing`.
- Leggi il suo log in cerca di errori: `docker logs openfishing`.
- Da un altro dispositivo usa l'indirizzo di rete della macchina (ad esempio
  `http://192.168.1.50:3000`), non `localhost`.
- Funziona sulla macchina ma non dal telefono? Consenti la porta 3000 nel firewall della macchina
  (su un NAS, nelle impostazioni di sicurezza o firewall).

### Servono volumi persistenti?

**Sì.** Senza di essi, dati e foto vanno persi quando il container viene ricreato. Il file compose
in [Installare OpenFishing](/it/docs/getting-started/installation) li crea entrambi.

## Uso quotidiano

### Come aggiorno?

Prima fai un backup, poi `docker compose pull` e `docker compose up -d`. Vedi
[Aggiornare](/it/docs/getting-started/installation#aggiornare).

### Devo eseguire le migrazioni del database?

**No.** Le migrazioni **vengono eseguite automaticamente all'avvio**. Scarica un'immagine più
recente e riavvia: lo schema viene aggiornato per te.

### Ho dimenticato la password admin

Imposta un nuovo `ADMIN_PASSWORD` nel file compose ed esegui `docker compose up -d`. L'account
`admin` viene risincronizzato da quella variabile a ogni avvio, quindi la nuova password funziona
subito. Gli altri utenti possono reimpostare la propria via email se
[SMTP è configurato](/it/docs/configuration/environment-variables).

### C'è un accesso predefinito?

No. OpenFishing è **aperto** finché non imposti `ADMIN_PASSWORD`. Vedi
[Multiutente e autenticazione](/it/docs/multi-user/authentication). Non esporre un'istanza
aperta su Internet.

### Perché il mio caricamento viene rifiutato?

I caricamenti sono limitati da **`BODY_SIZE_LIMIT`** (predefinito ≈ 100 MB, cioè `104857600`
byte). Aumentalo se ti servono foto più grandi, e assicurati che anche un eventuale reverse proxy
consenta quella dimensione (`client_max_body_size` in nginx).

### «Identifica dalla foto» dice «Qualcosa è andato storto. Riprova.»

L'IA non è configurata sul tuo server. Il pulsante richiede `LITELLM_URL` e un modello; vedi
[Funzioni di IA](/it/docs/ai/ai-features).

### «Quota di caricamento superata»

L'admin ha impostato un limite di spazio per il tuo account (**Quota (MB)** in **Impostazioni →
Admin**). Elimina le foto che non ti servono o chiedi all'admin di aumentarlo.

### Come eseguo OpenFishing dietro un reverse proxy?

Termina HTTPS sul proxy, inoltra alla porta `3000` con le intestazioni proxy standard e imposta
`BASE_URL` sull'indirizzo pubblico, così [codici QR](/it/docs/features/qr-labels) e link di
reimpostazione sono corretti.
[Installare OpenFishing](/it/docs/getting-started/installation#reverse-proxy-e-https) ha esempi
per Caddy e nginx.

### OpenFishing invia i miei dati da qualche parte?

I tuoi dati e le tue foto restano sul tuo server. Il meteo per l'indice di abboccata, le tessere
della mappa e le funzioni di IA opzionali contattano servizi esterni;
l'[Introduzione](/it/docs/getting-started/introduction#cosa-comunica-con-internet) li elenca con precisione. Le tessere della mappa possono arrivare dal tuo server con [`MAP_TILE_URL`](/it/docs/configuration/environment-variables#mappa).

### Non trovo «Crea link di condivisione»

I link di condivisione richiedono il login. Imposta `ADMIN_PASSWORD` (vedi [Multiutente e autenticazione](/it/docs/multi-user/authentication)) ed esegui
`docker compose up -d`; il pulsante comparirà su ogni esca, spot e cattura.

## Backup

### Il ripristino non riesce: «Mancata corrispondenza dello schema»

Il backup viene da un'altra versione di OpenFishing. [Aggiorna](/it/docs/getting-started/installation#aggiornare) entrambe le installazioni
all'ultima versione, esporta un backup recente sulla vecchia e ripristina quello.

### «Questo è un backup personale» o «Questo è un backup completo»

I backup personali e completi si ripristinano in punti diversi. Un backup personale, creato in **Impostazioni → Backup e ripristino**,
si ripristina lì. Un backup completo, creato dall'admin in **Impostazioni → Admin**, si ripristina solo lì.

## Aiuto

### Dove trovo aiuto o segnalo un bug?

Apri una issue su [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
