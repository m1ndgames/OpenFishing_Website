---
title: OpenFishing installieren
description: Was du brauchst, die docker-compose-Datei, wo du sie ausführst, was du sehen solltest und wie du aktualisierst.
---

OpenFishing läuft als ein Docker-Container auf einem Rechner, der dir gehört. Diese Seite führt
dich von einem leeren Rechner bis zu deiner eigenen laufenden Instanz. Erst mal umschauen? Die
[Live-Demo](https://demo.openfishing.org) braucht keine Installation und keine Anmeldung.

## Bevor du anfängst

Du brauchst:

- **Einen Rechner, der durchläuft**, zum Beispiel ein NAS, einen Mini-PC oder einen Homeserver.
- **Docker mit Docker Compose** darauf. Auf vielen NAS-Systemen ist Docker eine App im
  Paketzentrum; unter Linux hilft [Dockers Installationsanleitung](https://docs.docker.com/engine/install/). Auf Synology heißt sie Container Manager, auf QNAP Container Station.
- **Einen 64-Bit-Prozessor von Intel oder AMD (amd64).** Das Image gibt es nur für amd64,
  Rechner mit ARM-Prozessor können es nicht ausführen. Zum Prüfen führe `uname -m` auf dem
  Rechner aus: `x86_64` heißt, alles passt; `aarch64` oder `armv7l` heißt, es ist ein ARM-Rechner.
  Kein Terminal? Schau beim Hersteller nach, welchen Prozessor dein NAS-Modell hat.

## Nur ausprobieren?

Für einen schnellen Blick ohne Compose-Datei reicht ein Befehl:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Ersetze `192.168.1.50` durch die Adresse deines Rechners, damit Links und QR-Etiketten auch auf deinen anderen Geräten funktionieren.

Das startet OpenFishing ohne Login. Wenn du es behalten willst, wechsle zur Compose-Datei:
Sie hält deine Einstellungen an einem Ort.

## 1. Die Compose-Datei anlegen

Lege einen Ordner `openfishing` an und speichere darin diese Datei:

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
      # Adresse, unter der du es öffnest
      - BASE_URL=http://192.168.1.50:3000
      # Deine Zeitzone
      - TZ=Europe/Berlin
      # Login: # weg, Passwort eintragen
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Passe diese Zeilen an, bevor du startest:**

- `BASE_URL`: die Adresse, die du im Browser eingibst, mit `http://` und Port, zum Beispiel die
  Adresse deines NAS. **Sie ist Pflicht:** Ohne sie geht OpenFishing von HTTPS aus, und jedes
  Speichern scheitert mit „Cross-site POST form submissions are forbidden“. Sie landet auch in
  QR-Codes, nimm also die Adresse, unter der andere Geräte den Rechner erreichen.
  Gib dem Rechner im Router eine feste Adresse (eine *DHCP-Reservierung*), sonst kann sie sich
  ändern und deine QR-Codes führen ins Leere.
- `TZ`: deine [Zeitzone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), damit Fangzeiten nicht verschoben sind.
- `ADMIN_PASSWORD`: Ohne gibt es keinen Login, und jeder in deinem Netzwerk hat vollen Zugriff.
  Entferne das `#` und trage ein eigenes Passwort ein, bevor andere oder das Internet die App
  erreichen. Der Benutzername ist immer `admin`.

## 2. Starten

**Mit einer NAS-Docker-App oder Portainer?** Lege einen neuen *Stack* (oder ein *Projekt*) an,
füge die Datei oben ein und stelle ihn bereit.

**Mit einem Terminal?** Verbinde dich mit dem Rechner (zum Beispiel per SSH), wechsle in den
Ordner und führe aus:

```bash
docker compose up -d
```

Der erste Start dauert ein bis zwei Minuten, während Docker das Image herunterlädt.

## 3. Öffnen

Öffne die Adresse aus `BASE_URL`, zum Beispiel **`http://192.168.1.50:3000`**
(oder `http://localhost:3000` auf dem Rechner selbst). Du solltest deine leere Ködersammlung
sehen, bereit für den ersten Köder. Hast du `ADMIN_PASSWORD` gesetzt, melde dich zuerst als
**`admin`** an.

Lädt die Seite noch nicht, läuft vielleicht noch der erste Start: `docker compose logs openfishing`
zeigt `Listening on`, sobald alles bereit ist.

Du bist drin. Als Nächstes [legst du deinen ersten Köder an](/de/docs/features/lures).

## Wo deine Daten liegen

- **SQLite-Datenbank (Köder, Angelstellen, Fänge, Ausrüstung)**: Pfad im Container `/app/data`, Volume `openfishing-db`
- **Deine Fotos**: Pfad im Container `/app/uploads`, Volume `openfishing-uploads`

:::caution
Behalte beide Volumes. Ein Container ohne sie verliert alles, sobald er entfernt wird. Für
Kopien an anderer Stelle nutze [Sicherung & Wiederherstellung](/de/docs/backup/backup-restore).
:::

## Aktualisieren

Mach zuerst eine Sicherung (in den **Einstellungen**, siehe
[Sicherung & Wiederherstellung](/de/docs/backup/backup-restore)), dann hole das neue Image und
starte neu:

```bash
docker compose pull
docker compose up -d
```

Datenbank-Migrationen laufen beim Start automatisch, und deine Daten bleiben in den Volumes. In
einer NAS-Docker-App oder Portainer nutze die Aktion *Pull und neu bereitstellen* (oder
*Aktualisieren*) des Stacks.

Mit dem Einzeiler gestartet? Führe `docker pull ghcr.io/m1ndgames/openfishing` aus,
entferne den alten Container (`docker rm -f <name>`) und führe denselben `docker run`-Befehl
erneut aus: Die benannten Volumes behalten deine Daten.

Du willst selbst bestimmen, wann aktualisiert wird? Ersetze das Image durch ein Versions-Tag von der
[Release-Seite](https://github.com/m1ndgames/OpenFishing/releases), etwa `ghcr.io/m1ndgames/openfishing:<version>`, und ändere es, wenn du
bereit bist. Halte beide Rechner auf derselben Version, wenn du ein Backup umziehst.

## Reverse Proxy und HTTPS

Um OpenFishing von außerhalb zu erreichen, stelle es hinter einen Reverse Proxy, der HTTPS
übernimmt, und setze `BASE_URL` auf die öffentliche Adresse. Mit Caddy ist das die ganze
Konfiguration:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Mit nginx leite die üblichen Proxy-Header weiter und erlaube Uploads in Fotogröße:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Setze vorher `ADMIN_PASSWORD`: Eine Instanz ohne Login gehört nie ins offene Internet.

## Nächste Schritte

- Leg deinen ersten Köder an: [Köderbox](/de/docs/features/lures) zeigt, was du erfassen kannst.
- Alle Einstellungen (E-Mail, KI, Upload-Limits, Demo-Modus) stehen in der
  [Referenz der Umgebungsvariablen](/de/docs/configuration/environment-variables).
- Freunde und Familie mitnutzen lassen: [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication).
- Etwas klappt nicht? Siehe [FAQ & Fehlerbehebung](/de/docs/help/faq).
