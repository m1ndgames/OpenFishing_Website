---
title: KI-Funktionen
description: Aktiviere den optionalen selbst gehosteten Chatbot und die fotobasierte Fisch- und Ködererkennung über einen LiteLLM-Sidecar.
---

OpenFishing hat **optionale** KI-Funktionen, die von einem **[LiteLLM](https://litellm.ai/)**-Proxy angetrieben
werden, den du selbst betreibst. Deine API-Schlüssel bleiben serverseitig — sie werden niemals dem Browser
offengelegt.

## Den Chatbot aktivieren

Setze diese Umgebungsvariablen (siehe [Umgebungsvariablen](/de/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — jeder truthy-Wert aktiviert das schwebende Chat-Widget.
- **`LITELLM_URL`** — die Basis-URL deines LiteLLM-Proxys.
- **`LITELLM_MODEL`** — ein Modellname, der einem Eintrag in deiner `litellm.config.yaml` entspricht.

Der Chatbot kann Fragen zu **deinen eigenen Daten** beantworten (deine Köder, Stellen, Fänge und Ausrüstung).

## LiteLLM als Sidecar betreiben

Betreibe LiteLLM neben OpenFishing im selben Compose-Projekt:

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    ports:
      - "3000:3000"
    environment:
      - CHATBOT=true
      - LITELLM_URL=http://litellm:4000
      - LITELLM_MODEL=your-model-name
      - LITELLM_VISION_MODEL=your-vision-model   # optional
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Gib hier deine Provider-API-Schlüssel an, z. B. über eine env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Deine `litellm.config.yaml` definiert die Modelle (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` müssen mit den dort
deklarierten Namen übereinstimmen). Provider-API-Schlüssel werden auf der **LiteLLM**-Seite konfiguriert und
erreichen niemals das Frontend von OpenFishing.

## Fotoerkennung

Wenn du **`LITELLM_VISION_MODEL`** setzt (ein bilderkennungsfähiges Modell), fügt OpenFishing Folgendes hinzu:

- **Fischerkennung** — schlage eine Art aus einem Foto im **Fang-Formular** vor.
- **Ködererkennung** — erkenne einen Köder aus einem Foto im **Köder-hinzufügen-Formular**.

Wenn `LITELLM_VISION_MODEL` nicht gesetzt ist, greift die Erkennung auf `LITELLM_MODEL` zurück.

:::note
KI-Funktionen sind vollständig optional. Ohne eine dieser Variablen läuft OpenFishing genau wie zuvor — kein
Chatbot, keine Erkennung.
:::
