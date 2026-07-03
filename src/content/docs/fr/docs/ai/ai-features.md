---
title: Fonctions d'IA
description: Activez le chatbot auto-hébergé optionnel et l'identification des poissons et leurres à partir de photos via un sidecar LiteLLM.
---

OpenFishing dispose de fonctions d'IA **optionnelles** propulsées par un proxy **[LiteLLM](https://litellm.ai/)**
que vous exécutez vous-même. Vos clés d'API restent côté serveur — elles ne sont jamais exposées au navigateur.

## Activer le chatbot

Définissez ces variables d'environnement (voir
[Variables d'environnement](/fr/docs/configuration/environment-variables)) :

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — toute valeur vraie active le widget de chat flottant.
- **`LITELLM_URL`** — l'URL de base de votre proxy LiteLLM.
- **`LITELLM_MODEL`** — un nom de modèle correspondant à une entrée de votre `litellm.config.yaml`.

Le chatbot peut répondre aux questions sur **vos propres données** (vos leurres, spots, prises et matériel).

## Exécuter LiteLLM en tant que sidecar

Exécutez LiteLLM aux côtés d'OpenFishing dans le même projet compose :

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
      - LITELLM_VISION_MODEL=your-vision-model   # optionnel
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Indiquez ici les clés d'API de votre fournisseur, p. ex. via un env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Votre `litellm.config.yaml` définit les modèles (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` doivent correspondre
aux noms qu'il déclare). Les clés d'API du fournisseur sont configurées côté **LiteLLM** et n'atteignent jamais
le frontend d'OpenFishing.

## Identification par photo

Si vous définissez **`LITELLM_VISION_MODEL`** (un modèle compatible vision), OpenFishing ajoute :

- **Identification des poissons** — suggérer une espèce à partir d'une photo sur le **formulaire de prise**.
- **Identification des leurres** — reconnaître un leurre à partir d'une photo sur le **formulaire d'ajout de leurre**.

Si `LITELLM_VISION_MODEL` n'est pas défini, l'identification revient à `LITELLM_MODEL`.

:::note
Les fonctions d'IA sont entièrement optionnelles. Sans aucune de ces variables, OpenFishing fonctionne
exactement comme avant — pas de chatbot, pas d'identification.
:::
