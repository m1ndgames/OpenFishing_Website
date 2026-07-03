---
title: Sicherung & Wiederherstellung
description: Ein-Klick-ZIP-Sicherung und -Wiederherstellung, pro Benutzer oder für die gesamte Instanz, und was das Archiv enthält.
---

OpenFishing verfügt über eine integrierte **Sicherung und Wiederherstellung** als herunter-/hochladbare ZIP-Archive.

## Sicherung & Wiederherstellung pro Benutzer

Unter **`/settings`** kann jeder Benutzer **seine eigenen Daten** sichern und wiederherstellen — seine Köder,
Stellen, Fänge und Ausrüstung sowie die zugehörigen Uploads.

## Vollständige Instanz-Sicherung & -Wiederherstellung (Admin)

Über das Admin-Panel unter **`/settings/admin`** kann ein Admin die **gesamte Instanz** sichern und
wiederherstellen — inklusive aller Benutzer und Konten.

:::caution
Eine **Vollständige Wiederherstellung** führt ein komplettes **Löschen und Neuaufbauen** der Instanz durch:
Bestehende Daten werden durch den Inhalt des Archivs ersetzt. Erstelle zuerst eine frische Sicherung.
:::

## Archivformat

Eine Sicherung ist ein ZIP, das Folgendes enthält:

- **`backup.json`** — die strukturierten Daten (Datensätze).
- **`uploads/`** — die zugehörigen Fotodateien.

Da es sich um ein einfaches ZIP handelt, kannst du es überall speichern und bei Bedarf inspizieren.

## Verwandt

- Denke daran, dass die Live-Datenbank und die Uploads auf
  [persistenten Volumes](/de/docs/getting-started/installation) liegen müssen — Sicherungen ergänzen
  ordentliche Volumes, ersetzen sie aber nicht.
