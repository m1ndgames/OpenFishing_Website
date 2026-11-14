---
title: Fonctions d'IA
description: "Activez le chatbot optionnel Ami Pêcheur et l'identification par photo avec un proxy LiteLLM lancé à côté d'OpenFishing."
---

OpenFishing propose deux fonctions d'IA **optionnelles** : le chatbot **Ami Pêcheur** et **Identifier depuis la photo**. Les deux
passent par [LiteLLM](https://litellm.ai/), un petit proxy lancé à côté d'OpenFishing qui transmet
les requêtes au fournisseur d'IA de votre choix. Votre clé d'API reste sur votre serveur.

## Mise en place

1. Dans le dossier de votre `docker-compose.yml`, créez `litellm.config.yaml` :

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Mettez la clé d'API de votre fournisseur dans un fichier nommé `.env` dans le même dossier :

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Remplacez votre `docker-compose.yml` par cette version. C'est le fichier d'installation plus les
   lignes d'IA et le service `litellm` ; gardez vos propres lignes d'adresse, de fuseau horaire et de mot
   de passe.

   ```yaml title="docker-compose.yml" wrap=false
   services:
     openfishing:
       image: ghcr.io/m1ndgames/openfishing
       container_name: openfishing
       restart: unless-stopped
       ports:
         - "3000:3000"
       volumes:
         - openfishing-db:/app/data
         - openfishing-uploads:/app/uploads
       environment:
         # Adresse où vous l'ouvrez
         - BASE_URL=http://192.168.1.50:3000
         # Votre fuseau horaire
         - TZ=Europe/Berlin
         # Connexion : ôtez #, mot de passe
         # - ADMIN_PASSWORD=
         - CHATBOT=true
         - LITELLM_URL=http://litellm:4000
         - LITELLM_MODEL=claude-sonnet
       depends_on:
         - litellm

     litellm:
       image: ghcr.io/berriai/litellm:main-latest
       command: ["--config", "/config.yaml"]
       volumes:
         - ./litellm.config.yaml:/config.yaml
       env_file:
         - .env

   volumes:
     openfishing-db:
     openfishing-uploads:
   ```

4. Relancez `docker compose up -d`, ou redéployez la stack dans l'app de votre NAS.

Plutôt OpenAI ? Dans `litellm.config.yaml`, utilisez `model: openai/gpt-4o` avec
`api_key: os.environ/OPENAI_API_KEY`, et mettez `OPENAI_API_KEY` dans `.env` à la place. `LITELLM_MODEL` doit
correspondre à un `model_name` du fichier.

## Ami Pêcheur

Avec `CHATBOT=true`, un bouton de discussion ouvre **Ami Pêcheur**. Il répond aux questions sur vos propres
leurres, spots, prises et matériel, et connaît la météo actuelle quand vous parlez d'un lieu. Avec la
connexion activée, l'admin peut le désactiver par personne dans **Paramètres → Admin** (**Chatbot : activé**).

## Identifier depuis la photo

Quand vous ajoutez une nouvelle prise ou un nouveau leurre, un bouton **Identifier depuis la photo** apparaît dès qu'il y
a une photo. Il propose l'espèce, ou les détails du leurre. Il a besoin de `LITELLM_URL` et utilise
`LITELLM_VISION_MODEL` s'il est défini (un modèle capable de lire les images), sinon `LITELLM_MODEL`.
Il n'a pas besoin de `CHATBOT`. Sans IA configurée, le bouton s'affiche quand même mais répond
« Une erreur s’est produite. Veuillez réessayer. »

:::note
Sans ces réglages, il n'y a pas de chatbot et **Identifier depuis la photo** ne peut pas répondre ; tout le reste
fonctionne de la même façon. Tous les réglages sont listés dans [Variables d'environnement](/fr/docs/configuration/environment-variables).
:::
