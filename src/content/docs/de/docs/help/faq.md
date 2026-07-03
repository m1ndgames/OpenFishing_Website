---
title: FAQ / Fehlerbehebung
description: Persistente Volumes, automatische Migrationen, Reverse-Proxy-Hinweise und das Upload-Größenlimit.
---

## Brauche ich persistente Volumes?

**Ja.** Sowohl die SQLite-Datenbank (`/app/data`) als auch das Uploads-Verzeichnis (`/app/uploads`) müssen auf
persistenten Volumes liegen. Ohne sie gehen deine Daten und Fotos verloren, wenn der Container neu erstellt
wird. Siehe [Installation](/de/docs/getting-started/installation).

## Muss ich Datenbank-Migrationen ausführen?

**Nein.** In der Produktion **laufen Datenbank-Migrationen automatisch beim Start**. Ziehe einfach ein neueres
Image und starte neu — das Schema wird für dich aktualisiert.

## Wie betreibe ich OpenFishing hinter einem Reverse Proxy?

- Terminiere TLS an deinem Proxy (nginx, Caddy, Traefik…) und leite an Port `3000` des Containers weiter.
- Setze **`BASE_URL`** auf deine öffentliche HTTPS-URL, damit [QR-Codes](/de/docs/features/qr-labels) und
  Passwort-Reset-Links korrekt sind.
- **Leite die üblichen Proxy-Header weiter** (Host und Forwarded-For/Proto), damit die App die richtige externe
  URL sieht.

## Warum wird mein Upload abgelehnt?

Uploads sind durch **`BODY_SIZE_LIMIT`** begrenzt (Standard ≈ 100 MB, also `104857600` Bytes). Erhöhe ihn, wenn
du größere Fotos brauchst, und stelle sicher, dass ein vorgeschalteter Reverse Proxy ebenfalls die größere
Body-Größe erlaubt.

## Gibt es standardmäßig einen Login?

Nein — OpenFishing ist **offen**, es sei denn, du setzt `ADMIN_PASSWORD`. Siehe
[Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication). Setze eine offene Instanz nicht dem
öffentlichen Internet aus.

## Wo bekomme ich Hilfe oder melde einen Fehler?

Öffne ein Issue auf [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
