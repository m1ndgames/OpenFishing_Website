---
title: Mehrbenutzer & Authentifizierung
description: Aktiviere den Login, um Freunde und Familie zu hosten, mit benutzerbezogener Trennung, Kontingenten, einem Admin-Panel und SMTP-Passwort-Reset.
---

Standardmäßig läuft OpenFishing **single-tenant und vollständig offen** — ohne Login. Setze die
Umgebungsvariable **`ADMIN_PASSWORD`**, um den **Mehrbenutzer-Modus** zu aktivieren.

## Login aktivieren

Setze `ADMIN_PASSWORD` (siehe [Umgebungsvariablen](/de/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Sobald gesetzt, erscheint ein Login-Bildschirm. Benutzer melden sich mit ihrer **E-Mail/ihrem Benutzernamen +
Passwort** an.

:::note
`AUTH_PASSWORD` ist ein **veralteter** Ausweichname für `ADMIN_PASSWORD`. Verwende `ADMIN_PASSWORD`.
:::

## Das Admin-Konto

- Das **`admin`**-Konto existiert immer, wenn die Authentifizierung aktiviert ist.
- Sein Benutzername ist immer `admin`; sein Passwort ist das, worauf `ADMIN_PASSWORD` gesetzt ist.
- Es wird **bei jedem Start aus der Umgebungsvariable neu synchronisiert**, sodass das Ändern der Variable und
  ein Neustart das Passwort aktualisiert.

## Das Admin-Panel

Admins erhalten ein Panel unter **`/settings/admin`**, um die Instanz zu verwalten:

- **Benutzer** — Konten erstellen, aktivieren/deaktivieren und verwalten.
- **Speicherkontingente** — begrenze, wie viel jeder Benutzer hochladen kann.
- **Chatbot-Schalter** — [KI-Funktionen](/de/docs/ai/ai-features) pro Benutzer aktivieren/deaktivieren.
- **API-Tokens** — [REST-API](/de/docs/api/rest-api)-Bearer-Tokens verwalten.

## Benutzerbezogene Datentrennung

Die Köder, Stellen, Fänge und Ausrüstung jedes Benutzers sind **isoliert** — Benutzer sehen nur ihre eigenen Daten.

## Passwort-Reset (SMTP)

Wenn du SMTP konfigurierst (mindestens `SMTP_HOST` und `SMTP_FROM`), können Benutzer vergessene Passwörter per
E-Mail zurücksetzen. Ohne konfiguriertes SMTP ist die Reset-Option ausgeblendet. Siehe die
[SMTP-Variablen](/de/docs/configuration/environment-variables).

## Benutzerbezogene Speicherkontingente

Admins können **Speicherkontingente** pro Benutzer im Admin-Panel festlegen, sodass kein einzelner Benutzer die
Festplatte mit Uploads füllen kann.
