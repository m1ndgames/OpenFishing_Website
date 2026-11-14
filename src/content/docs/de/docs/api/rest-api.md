---
title: REST-API
description: "Die schreibgeschützte JSON-API von OpenFishing: ein Token pro Konto, die Endpunkte und die eingebaute Swagger-Oberfläche."
---

OpenFishing hat eine **schreibgeschützte JSON-API**, mit der du Köder, Angelstellen, Fänge und
Ausrüstung in andere Werkzeuge holst: eine Tabelle, ein Heim-Dashboard, ein Skript. Ändern lässt
sich darüber nichts.

## Dein Token

- **Login eingeschaltet:** Jedes Konto hat ein eigenes Token. Kopiere es unter **Einstellungen →
  Mein Konto → API-Token**. **Token neu erzeugen** stellt ein neues aus; das alte funktioniert
  dann nicht mehr.
- **Kein Login** (eine gemeinsame Sammlung, siehe [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication)):
  Die API ist ebenfalls offen und braucht kein Token.

Schick das Token im Header `Authorization` mit:

```http
Authorization: Bearer <dein Token>
```

## Endpunkte

Jede Ressource hat eine Liste und einen Einzeleintrag:

- `GET /api/v1/<resource>` listet sie auf.
- `GET /api/v1/<resource>/{id}` liefert einen.

Die Ressourcen sind `lures`, `spots`, `catches`, `rods`, `reels`, `lines` und `combos`. Mit
Login bekommst du nur die Daten deines eigenen Kontos.

## Im Browser ausprobieren

- **`/api-docs`** auf deiner Instanz öffnet eine Swagger-Oberfläche, in der du jeden Endpunkt testen kannst.
- **`/api/openapi`** liefert die OpenAPI-Spezifikation für Werkzeuge, die Clients erzeugen.

## Beispiel

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

Die Antwort ist JSON. Jeder Köder enthält alle seine Felder; hier gekürzt:

```json
[
  {
    "id": "6f1c2b7e-3d4a-4b8e-9f21-0a5c7d9e1b34",
    "lureNumber": 1,
    "name": "Perch shad",
    "brand": "Example",
    "color": "Perch",
    "favourite": true,
    "lost": false,
    "tags": ["perch", "river"]
  }
]
```
