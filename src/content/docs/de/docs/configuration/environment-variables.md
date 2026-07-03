---
title: Umgebungsvariablen
description: Vollständige Referenz aller OpenFishing-Umgebungsvariablen mit Standardwerten und Beschreibungen.
---

OpenFishing wird vollständig über Umgebungsvariablen konfiguriert. Jede Variable ist optional, außer wo anders
angegeben; nicht gesetzte Variablen greifen auf die untenstehenden Standardwerte zurück.

## Referenztabelle

| Variable | Standard | Beschreibung |
|---|---|---|
| `DATABASE_URL` | `local.db` | Pfad zur SQLite-Datenbankdatei. In Docker zeige damit auf dein Daten-Volume, z. B. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Verzeichnis für Köder-/Stellen-/Fang-Fotos. **Binde hier ein Volume ein** (z. B. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | Öffentliche Basis-URL, verwendet zum Erstellen von QR-Code- und Passwort-Reset-Links. Setze sie auf deine echte HTTPS-URL hinter einem Reverse Proxy. |
| `ADMIN_PASSWORD` | _(nicht gesetzt)_ | Setzen, um den **Mehrbenutzer-Login zu aktivieren**. Es ist das Passwort für das `admin`-Konto (Benutzername ist immer `admin`, bei jedem Start neu synchronisiert). Nicht gesetzt = vollständig offene Single-Tenant-Instanz. |
| `AUTH_PASSWORD` | _(nicht gesetzt)_ | **Veralteter** Ausweichname für `ADMIN_PASSWORD`. Bevorzuge `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(nicht gesetzt)_ | SMTP-Server-Hostname für „Passwort vergessen“-E-Mails. |
| `SMTP_PORT` | _(nicht gesetzt)_ | SMTP-Server-Port. |
| `SMTP_SECURE` | _(nicht gesetzt)_ | TLS für die SMTP-Verbindung verwenden. |
| `SMTP_USER` | _(nicht gesetzt)_ | SMTP-Benutzername. |
| `SMTP_PASS` | _(nicht gesetzt)_ | SMTP-Passwort. |
| `SMTP_FROM` | _(nicht gesetzt)_ | Die `From:`-Adresse für ausgehende E-Mails. |
| `DEMO_MODE` | _(nicht gesetzt)_ | Jeder Wert = **schreibgeschützter Demo-Modus** (alle Schreibvorgänge blockiert). |
| `CHATBOT` | _(nicht gesetzt)_ | Jeder truthy-Wert aktiviert den **KI-Chatbot** (erfordert die LiteLLM-Variablen). |
| `LITELLM_URL` | _(nicht gesetzt)_ | Basis-URL deines LiteLLM-Proxys, z. B. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(nicht gesetzt)_ | Modellname, der einem `litellm.config.yaml`-Eintrag entspricht. |
| `LITELLM_VISION_MODEL` | _(nicht gesetzt)_ | Optionales bilderkennungsfähiges Modell für Fisch-/Ködererkennung. Greift auf `LITELLM_MODEL` zurück. |
| `BODY_SIZE_LIMIT` | `104857600` | Maximale Upload-Größe in Bytes (Standard ≈ 100 MB). |

:::note
Die **SMTP**-„Passwort vergessen“-Funktion erscheint nur, wenn mindestens `SMTP_HOST` **und** `SMTP_FROM`
gesetzt sind. Ohne sie ist die Reset-Option ausgeblendet.
:::

## Hinweise zu den Standardwerten

Die obigen Standardwerte sind die eingebauten Code-Standards der App. In einem Container überschreibst du
typischerweise die Pfade, um auf eingebundene Volumes zu zeigen:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Nach Zweck gruppiert

- **Speicher:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Netzwerk / Links:** `BASE_URL`
- **Authentifizierung:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` veraltet)
- **E-Mail / Passwort-Reset:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **KI-Funktionen:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Siehe [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication),
[KI-Funktionen](/de/docs/ai/ai-features) und [Demo-Modus](/de/docs/demo/demo-mode), wie diese Gruppen
zusammenpassen.
