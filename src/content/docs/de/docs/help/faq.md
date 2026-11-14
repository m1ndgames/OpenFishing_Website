---
title: FAQ & Fehlerbehebung
description: Lösungen für häufige Installationsprobleme (ARM-Rechner, Portkonflikte, vergessenes Admin-Passwort) und Antworten zu Volumes, Updates, Uploads und Login.
---

Probleme stehen hier unter der Meldung, die du tatsächlich siehst. Suchst du nach dem genauen
Fehlertext, landest du meist direkt bei der Lösung.

Wo eine Antwort `docker compose up -d` nennt, kannst du auf einem NAS stattdessen den Stack in dessen
App neu bereitstellen.

## Installation

### Speichern scheitert: „Cross-site POST form submissions are forbidden“

`BASE_URL` fehlt oder beginnt mit `https://`, während du die App über einfaches `http://` öffnest. Setze sie auf genau die Adresse, die du öffnest, zum Beispiel `BASE_URL=http://192.168.1.50:3000`, und führe `docker compose up -d` erneut aus. Hinter einem Reverse Proxy setzt du `BASE_URL` auf die `https://`-Adresse, die man öffnet; das allein reicht. Siehe [Umgebungsvariablen](/de/docs/configuration/environment-variables#adresse-und-zeit).

### Der Container startet nicht: „exec format error“

Der Rechner hat einen ARM-Prozessor (häufig bei kleinen NAS-Modellen und Einplatinenrechnern).
Das OpenFishing-Image gibt es nur für **64-Bit-Intel oder -AMD (amd64)**, deshalb läuft es dort
nicht. Prüfe es mit `uname -m`: `x86_64` funktioniert, `aarch64` oder `armv7l` nicht. Siehe
[Bevor du anfängst](/de/docs/getting-started/installation#bevor-du-anfängst).

### „Port is already allocated“ oder „address already in use“

Etwas anderes auf dem Rechner nutzt bereits Port 3000. Ändere die **linke** Zahl in der
Compose-Datei, zum Beispiel auf `"8080:3000"`, führe `docker compose up -d` erneut aus und öffne
die App stattdessen auf Port 8080.

### „docker compose“ ist kein Befehl

Ältere Docker-Installationen, auch manche NAS-Pakete, nutzen das separate Werkzeug `docker-compose`. Führe dieselben Befehle mit Bindestrich aus: `docker-compose up -d`, `docker-compose pull`.

### Die Seite lädt nicht

- Prüfe, ob der Container läuft: `docker ps` sollte `openfishing` auflisten.
- Lies sein Log auf Fehler: `docker logs openfishing`.
- Nutze von einem anderen Gerät aus die Netzwerkadresse des Rechners (zum Beispiel
  `http://192.168.1.50:3000`), nicht `localhost`.
- Klappt es auf dem Rechner, aber nicht vom Handy? Gib Port 3000 in der Firewall des Rechners frei
  (auf einem NAS in den Sicherheits- oder Firewall-Einstellungen).

### Brauche ich persistente Volumes?

**Ja.** Ohne sie gehen Daten und Fotos verloren, sobald der Container neu erstellt wird. Die
Compose-Datei in [OpenFishing installieren](/de/docs/getting-started/installation) richtet beide ein.

## Betrieb

### Wie aktualisiere ich?

Erst sichern, dann `docker compose pull` und `docker compose up -d`. Siehe
[Aktualisieren](/de/docs/getting-started/installation#aktualisieren).

### Muss ich Datenbank-Migrationen ausführen?

**Nein.** Migrationen **laufen beim Start automatisch**. Hol ein neueres Image und starte neu:
Das Schema wird für dich aktualisiert.

### Ich habe das Admin-Passwort vergessen

Trage ein neues `ADMIN_PASSWORD` in die Compose-Datei ein und führe `docker compose up -d` aus.
Das `admin`-Konto wird bei jedem Start aus dieser Variable übernommen, das neue Passwort gilt
also sofort. Andere Benutzer können ihres per E-Mail zurücksetzen, wenn
[SMTP eingerichtet ist](/de/docs/configuration/environment-variables).

### Gibt es standardmäßig einen Login?

Nein. OpenFishing ist **offen**, solange du kein `ADMIN_PASSWORD` setzt. Siehe
[Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication). Stelle eine offene
Instanz nicht ins öffentliche Internet.

### Warum wird mein Upload abgelehnt?

Uploads sind durch **`BODY_SIZE_LIMIT`** begrenzt (Standard ≈ 100 MB, also `104857600` Bytes).
Erhöhe den Wert für größere Fotos, und achte darauf, dass auch ein vorgeschalteter Reverse Proxy
die größere Body-Größe erlaubt (`client_max_body_size` bei nginx).

### „Aus Foto erkennen“ meldet „Etwas ist schiefgelaufen. Bitte versuche es erneut.“

Auf deinem Server ist keine KI eingerichtet. Die Schaltfläche braucht `LITELLM_URL` und ein Modell;
siehe [KI-Funktionen](/de/docs/ai/ai-features).

### „Speicherkontingent überschritten“

Der Admin hat für dein Konto ein Speicherlimit gesetzt (**Kontingent (MB)** unter **Einstellungen →
Admin**). Lösche Fotos, die du nicht brauchst, oder bitte den Admin, es zu erhöhen.

### Wie betreibe ich OpenFishing hinter einem Reverse Proxy?

Beende HTTPS an deinem Proxy, leite mit den üblichen Proxy-Headern auf Port `3000` weiter und
setze `BASE_URL` auf die öffentliche Adresse, damit [QR-Codes](/de/docs/features/qr-labels) und
Passwort-Reset-Links stimmen.
[OpenFishing installieren](/de/docs/getting-started/installation#reverse-proxy-und-https) hat
Beispiele für Caddy und nginx.

### Schickt OpenFishing meine Daten irgendwohin?

Deine Einträge und Fotos bleiben auf deinem Server. Wetter für den Beissindex, Kartenkacheln und
die optionalen KI-Funktionen kontaktieren Dienste von außen; die
[Einführung](/de/docs/getting-started/introduction#was-mit-dem-internet-spricht) listet genau auf, welche. Kartenkacheln können über [`MAP_TILE_URL`](/de/docs/configuration/environment-variables#karte) von deinem eigenen Server kommen.

### Ich finde „Teilen-Link erstellen“ nicht

Freigabelinks brauchen Login. Setze `ADMIN_PASSWORD` (siehe [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication)) und führe
`docker compose up -d` aus; danach erscheint der Button bei jedem Köder, jeder Stelle und jedem Fang.

## Backups

### Wiederherstellen scheitert: „Schema-Konflikt“

Das Backup stammt aus einer anderen Version von OpenFishing. [Aktualisiere](/de/docs/getting-started/installation#aktualisieren) beide Installationen
auf die neueste Version, exportiere auf der alten ein frisches Backup und spiele dieses ein.

### „Dies ist ein persönliches Backup“ oder „Dies ist ein vollständiges Backup“

Persönliche und vollständige Backups werden an verschiedenen Stellen eingespielt. Ein persönliches
Backup aus **Einstellungen → Backup & Wiederherstellen** stellst du dort wieder her. Ein vollständiges Backup, das der Admin in **Einstellungen → Admin** erstellt,
nur dort.

## Hilfe

### Wo bekomme ich Hilfe oder melde einen Fehler?

Eröffne ein Issue auf [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
