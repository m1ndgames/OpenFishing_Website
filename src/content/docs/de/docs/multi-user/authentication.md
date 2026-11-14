---
title: Mehrbenutzer & Authentifizierung
description: Schalte den Login ein, um Freunde und Familie zu hosten, lege Konten an, setze Speicherkontingente und hilf bei vergessenen Passwörtern.
---

Ab Werk hat OpenFishing **eine gemeinsame Sammlung und keinen Login**: Wer die Adresse öffnen
kann, kann es nutzen. Im eigenen, vertrauenswürdigen Heimnetz ist das in Ordnung. Willst du
Freunde und Familie hosten oder OpenFishing aus dem Internet erreichen, schalte den Login ein.

## Login einschalten

Die Compose-Datei aus [OpenFishing installieren](/de/docs/getting-started/installation) enthält
die Zeile schon, mit einem `#` abgeschaltet:

```yaml title="docker-compose.yml"
    environment:
      # Login: # weg, Passwort eintragen
      # - ADMIN_PASSWORD=
```

Entferne das `# ` vor `- ADMIN_PASSWORD=`, schreib dein eigenes Passwort direkt hinter das `=`
und führe `docker compose up -d` aus. Ein Anmeldebildschirm erscheint: Melde dich mit dem
Benutzernamen **admin** und diesem Passwort an.

## Das Admin-Konto

- Der Benutzername ist immer `admin`.
- Das Passwort ist, was in `ADMIN_PASSWORD` steht. OpenFishing liest es bei jedem Start. Zum
  Ändern bearbeitest du die Zeile und führst `docker compose up -d` erneut aus.

## Ein Familienmitglied hinzufügen

1. Melde dich als `admin` an und öffne **Einstellungen → Admin**.
2. Fülle unter **Benutzer anlegen** die Felder **E-Mail**, **Benutzername** und **Passwort** aus.
3. Lass **Kontingent (MB)** leer für unbegrenzte Uploads, oder gib eine Zahl ein.
4. Wähle **Anlegen**.

Schick der Person die Adresse, ihren Benutzernamen und das Passwort. Sie meldet sich mit E-Mail
oder Benutzername an und kann unter **Einstellungen → Mein Konto → Passwort ändern** ein neues
Passwort wählen.

## Wer was sieht

Jedes Konto hat eigene Köder, Angelstellen, Fänge und Ausrüstung. Niemand sieht die Daten anderer.

## Konten verwalten

**Einstellungen → Admin** listet alle Konten. Bei jedem kannst du Benutzername und E-Mail ändern, das
Speicherkontingent anpassen und im Feld **Passwort zurücksetzen** ein neues Passwort eintragen, dann wählst du
**Speichern**. Außerdem kannst du den [KI-Chatbot](/de/docs/ai/ai-features) ein- oder ausschalten, für die
[REST-API](/de/docs/api/rest-api) **Token neu erzeugen**, das Konto **Deaktivieren** oder **Löschen**. Löschen
entfernt das Konto und alle seine Daten endgültig.

## Vergessene Passwörter

- **Ein Familienmitglied:** Der Admin trägt im Feld **Passwort zurücksetzen** des Kontos unter **Einstellungen → Admin** ein neues Passwort ein und wählt **Speichern**. Ist E-Mail eingerichtet (mindestens `SMTP_HOST` und `SMTP_FROM`, siehe
  [Umgebungsvariablen](/de/docs/configuration/environment-variables)), bietet der
  Anmeldebildschirm zusätzlich einen Link per E-Mail an.
- **Der Admin:** Ändere `ADMIN_PASSWORD` und führe `docker compose up -d` aus.
