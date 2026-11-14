---
title: Installare OpenFishing
description: Cosa ti serve, il file docker-compose, dove eseguirlo, cosa dovresti vedere e come aggiornare.
---

OpenFishing gira come un unico container Docker su un computer che possiedi. Questa pagina ti
porta da una macchina vuota alla tua istanza in funzione. Vuoi dare prima un'occhiata? La
[demo dal vivo](https://demo.openfishing.org) non richiede installazione né registrazione.

## Prima di iniziare

Ti serve:

- **Un computer sempre acceso**, come un NAS, un mini PC o un server di casa.
- **Docker con Docker Compose** installato. Su molti NAS Docker è un'app del centro pacchetti;
  su Linux, segui la [guida di installazione di Docker](https://docs.docker.com/engine/install/). Su Synology si chiama Container Manager, su QNAP Container Station.
- **Un processore a 64 bit Intel o AMD (amd64).** L'immagine esiste solo per amd64, quindi le
  macchine con processore ARM non possono eseguirla. Per verificarlo, esegui `uname -m` sulla
  macchina: `x86_64` significa che va bene; `aarch64` o `armv7l` significa che è una macchina ARM.
  Niente terminale? Cerca il processore del tuo modello di NAS nella scheda tecnica.

## Vuoi solo provarlo?

Per un'occhiata veloce senza file compose basta un comando:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Sostituisci `192.168.1.50` con l'indirizzo della tua macchina, così link ed etichette QR funzionano anche sugli altri dispositivi.

Così OpenFishing parte senza accesso. Quando decidi di tenerlo, passa al file compose: tiene le
tue impostazioni in un unico posto.

## 1. Creare il file compose

Crea una cartella chiamata `openfishing` e salvaci questo file:

```yaml title="docker-compose.yml"
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Indirizzo con cui lo apri
      - BASE_URL=http://192.168.1.50:3000
      # Il tuo fuso orario
      - TZ=Europe/Berlin
      # Accesso: togli #, metti password
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Modifica queste righe prima di avviarlo:**

- `BASE_URL`: l'indirizzo che digiterai nel browser, con `http://` e la porta, ad esempio
  quello del tuo NAS. **È obbligatorio:** senza, OpenFishing presume HTTPS e ogni salvataggio
  fallisce con «Cross-site POST form submissions are forbidden». Finisce anche nei codici QR,
  quindi usa l'indirizzo con cui gli altri dispositivi raggiungono la macchina.
  Assegna alla macchina un indirizzo fisso nel router (una *prenotazione DHCP*), altrimenti può
  cambiare e i codici QR non porteranno più lì.
- `TZ`: il tuo [fuso orario](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), così gli orari delle catture non sono sfalsati.
- `ADMIN_PASSWORD`: senza, non c'è una schermata di accesso e chiunque nella tua rete ha
  accesso completo. Togli il `#` e aggiungi la tua password prima che altri o Internet possano
  raggiungere l'app. Il nome utente è sempre `admin`.

## 2. Avviarlo

**Usi un'app Docker del NAS o Portainer?** Crea un nuovo *stack* (o *progetto*), incolla il file
qui sopra e distribuiscilo.

**Usi un terminale?** Collegati alla macchina (ad esempio via SSH), entra nella cartella ed esegui:

```bash
docker compose up -d
```

Il primo avvio richiede un paio di minuti, mentre Docker scarica l'immagine.

## 3. Aprirlo

Apri l'indirizzo che hai messo in `BASE_URL`, ad esempio **`http://192.168.1.50:3000`**
(o `http://localhost:3000` sulla macchina stessa). Dovresti vedere la tua collezione di esche
vuota, pronta per la prima esca. Se hai impostato `ADMIN_PASSWORD`, accedi prima come **`admin`**.

Se la pagina non si carica ancora, il primo avvio potrebbe essere in corso:
`docker compose logs openfishing` mostra `Listening on` quando è pronto.

Ci sei. Ora [aggiungi la tua prima esca](/it/docs/features/lures).

## Dove sono i tuoi dati

- **Database SQLite (esche, spot, catture, attrezzatura)**: percorso nel container `/app/data`, volume `openfishing-db`
- **Le tue foto**: percorso nel container `/app/uploads`, volume `openfishing-uploads`

:::caution
Conserva entrambi i volumi. Un container avviato senza di essi perde tutto quando viene rimosso.
Per copie altrove usa [Backup e ripristino](/it/docs/backup/backup-restore).
:::

## Aggiornare

Fai prima un backup (nelle **Impostazioni**, vedi [Backup e ripristino](/it/docs/backup/backup-restore)),
poi scarica la nuova immagine e riavvia:

```bash
docker compose pull
docker compose up -d
```

Le migrazioni del database vengono eseguite automaticamente all'avvio e i tuoi dati restano nei
volumi. In un'app Docker del NAS o Portainer, usa l'azione *pull e ridistribuisci* (o
*aggiorna*) dello stack.

Hai iniziato con il comando singolo? Esegui `docker pull ghcr.io/m1ndgames/openfishing`,
rimuovi il vecchio container (`docker rm -f <nome>`) ed esegui di nuovo lo stesso comando
`docker run`: i volumi con nome conservano i tuoi dati.

Vuoi scegliere tu quando aggiornare? Sostituisci l'immagine con un tag di versione dalla
[pagina delle release](https://github.com/m1ndgames/OpenFishing/releases), come `ghcr.io/m1ndgames/openfishing:<version>`, e cambialo quando sei
pronto. Tieni le due macchine sulla stessa versione quando sposti un backup.

## Reverse proxy e HTTPS

Per raggiungere OpenFishing da fuori casa, mettilo dietro un reverse proxy che gestisca HTTPS e
imposta `BASE_URL` sull'indirizzo pubblico. Con Caddy, questa è tutta la configurazione:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Con nginx, inoltra le intestazioni proxy standard e consenti caricamenti delle dimensioni di una foto:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Imposta prima `ADMIN_PASSWORD`: un'istanza senza accesso non deve mai essere esposta a Internet.

## Prossimi passi

- Aggiungi la tua prima esca: [Esche](/it/docs/features/lures) mostra cosa puoi registrare.
- Tutte le impostazioni (email, IA, limiti di caricamento, modalità demo) sono nel
  [riferimento delle variabili d'ambiente](/it/docs/configuration/environment-variables).
- Per amici e famiglia: [Multiutente e autenticazione](/it/docs/multi-user/authentication).
- Qualcosa non funziona? Vedi [FAQ e risoluzione dei problemi](/it/docs/help/faq).
