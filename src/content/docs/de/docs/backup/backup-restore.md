---
title: "Sicherung & Wiederherstellung"
description: "Sichere deine Sammlung als eine ZIP-Datei und stelle sie wieder her, auf demselben Rechner oder einem neuen."
---

OpenFishing sichert alles, was du erfasst hast, samt Fotos, als **eine ZIP-Datei** zum Herunterladen.
Bewahre eine Kopie an einem anderen Ort als dem Rechner auf, auf dem OpenFishing läuft.

## Backup erstellen

1. Öffne **Einstellungen → Backup & Wiederherstellen**.
2. Wähle unter **Backup exportieren** die Schaltfläche **Exportieren**.

Die ZIP-Datei enthält deine Köder, Angelstellen, Fänge und Ausrüstung samt Fotos. Mit Login
sichert jede Person auf diesem Weg nur ihr eigenes Konto.

:::caution
Eine Wiederherstellung lässt sich nicht rückgängig machen. Exportiere vorher ein frisches Backup.
:::

## Backup wiederherstellen

1. Öffne **Einstellungen → Backup & Wiederherstellen**.
2. Wähle unter **Backup importieren** **Datei wählen** und such die ZIP-Datei aus.
3. Setz das Häkchen, das bestätigt, dass deine aktuellen Daten ersetzt werden.
4. Wähle **Importieren & Ersetzen**.

Alles in deinem Konto wird durch den Inhalt des Backups ersetzt. OpenFishing prüft vorher das
Format des Backups und ändert nichts, wenn es nicht passt.

Hat es geklappt, siehst du **Import erfolgreich** mit der Zahl der wiederhergestellten Köder, Stellen und Fänge.

## Die ganze Instanz sichern (Admin)

Mit Login sichert der Admin alle Konten auf einmal unter **Einstellungen → Admin** und stellt sie dort
auch wieder her:

- **Alles exportieren** lädt alle Konten und ihre Daten als eine ZIP-Datei herunter.
- **Vollständiges Backup wiederherstellen** ersetzt alle Daten und Konten durch ein vollständiges
  Backup. Alle werden abgemeldet, und das Admin-Passwort kommt wieder aus `ADMIN_PASSWORD`.

Zum Wiederherstellen setzt du das Häkchen zur Bestätigung und tippst auf **Alles wiederherstellen & ersetzen**.

## Auf einen neuen Rechner umziehen

1. [Aktualisiere OpenFishing](/de/docs/getting-started/installation#aktualisieren) auf dem alten Rechner auf die neueste Version und exportiere dann
   ein frisches Backup. Notiere das **Backup-Format** unter **Einstellungen**.
2. [Installiere OpenFishing](/de/docs/getting-started/installation) auf dem neuen Rechner. Sein **Backup-Format** unter **Einstellungen** muss zum alten Rechner passen.
3. Öffne es und stelle wieder her: unter **Einstellungen → Backup & Wiederherstellen**, wenn du
   keinen Login hast, oder mit einem vollständigen Backup unter **Einstellungen → Admin →
   Vollständiges Backup wiederherstellen**, wenn mehrere Personen es nutzen.
4. Prüfe Köder und Fotos, bevor du den alten Rechner abschaltest.

## Was in der ZIP-Datei steckt

- `backup.json`: deine Einträge.
- `uploads/`: die Fotos.

Es ist eine normale ZIP-Datei, du kannst sie also zur Kontrolle öffnen.

## Backups und Volumes

Backups ersetzen nicht die [Volumes](/de/docs/getting-started/installation), in denen die laufende Datenbank und die Fotos
liegen. Behalte beides und exportiere vor großen Änderungen wie einem Update ein Backup.
