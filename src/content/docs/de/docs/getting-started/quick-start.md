---
title: Schnellstart
description: OpenFishing mit einem einzigen Befehl ausführen, sich zum ersten Mal anmelden und erfahren, wo deine Daten liegen.
---

Der schnellste Weg, OpenFishing auf deinem eigenen Rechner auszuprobieren, ist ein einziges `docker run`.

## Einzeiler

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Öffne dann **http://localhost:3000**.

Dies startet OpenFishing im **Single-Tenant-Modus, vollständig offen** — ohne Login. Jeder, der
den Port erreichen kann, hat vollen Zugriff. Gib ihn daher nur in einem vertrauenswürdigen Netzwerk frei, bis du
die [Authentifizierung](/de/docs/multi-user/authentication) aktivierst.

## Erste Anmeldung

- **Ohne `ADMIN_PASSWORD`** (wie oben): Die App ist offen — es gibt keinen Login-Bildschirm und alle
  Funktionen sind sofort verfügbar.
- **Mit gesetztem `ADMIN_PASSWORD`**: Ein Login-Bildschirm erscheint. Der Admin-Benutzername ist immer
  `admin`, und das Passwort ist das, was du in `ADMIN_PASSWORD` festlegst. Das Konto wird
  bei jedem Start aus der Umgebungsvariable neu synchronisiert.

Siehe [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication) für das vollständige Bild.

## Wo deine Daten liegen

OpenFishing bewahrt zwei Dinge auf, die du persistent speichern musst:

| Daten | Container-Pfad | Im obigen Befehl |
|---|---|---|
| SQLite-Datenbank | `/app/data` | benanntes Volume `openfishing-db` |
| Hochgeladene Fotos | `/app/uploads` | benanntes Volume `openfishing-uploads` |

:::caution
Sowohl die Datenbank als auch das Uploads-Verzeichnis **müssen** auf persistenten Volumes liegen. Wenn du den
Container ohne Volumes ausführst, geht alles verloren, wenn der Container entfernt wird.
:::

Für ein produktionsreifes Setup mit benannten Volumes und Umgebungsvariablen in einer Datei nutze die
[docker-compose-Installation](/de/docs/getting-started/installation).
