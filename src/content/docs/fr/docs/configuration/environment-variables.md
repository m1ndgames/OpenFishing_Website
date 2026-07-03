---
title: Variables d'environnement
description: Référence complète de chaque variable d'environnement d'OpenFishing, avec valeurs par défaut et descriptions.
---

OpenFishing se configure entièrement via des variables d'environnement. Chaque variable est optionnelle sauf
indication contraire ; les variables non définies utilisent les valeurs par défaut ci-dessous.

## Tableau de référence

| Variable | Par défaut | Description |
|---|---|---|
| `DATABASE_URL` | `local.db` | Chemin du fichier de base de données SQLite. Dans Docker, pointez-le vers votre volume de données, p. ex. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Répertoire des photos de leurres/spots/prises. **Montez un volume** ici (p. ex. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | URL de base publique, utilisée pour construire les liens de QR-code et de réinitialisation de mot de passe. Définissez-la sur votre véritable URL HTTPS derrière un reverse proxy. |
| `ADMIN_PASSWORD` | _(non défini)_ | À définir pour **activer la connexion multi-utilisateur**. C'est le mot de passe du compte `admin` (le nom d'utilisateur est toujours `admin`, resynchronisé à chaque démarrage). Non défini = instance mono-locataire entièrement ouverte. |
| `AUTH_PASSWORD` | _(non défini)_ | Nom de repli **déprécié** pour `ADMIN_PASSWORD`. Préférez `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(non défini)_ | Nom d'hôte du serveur SMTP pour les e-mails « mot de passe oublié ». |
| `SMTP_PORT` | _(non défini)_ | Port du serveur SMTP. |
| `SMTP_SECURE` | _(non défini)_ | Utiliser TLS pour la connexion SMTP. |
| `SMTP_USER` | _(non défini)_ | Nom d'utilisateur SMTP. |
| `SMTP_PASS` | _(non défini)_ | Mot de passe SMTP. |
| `SMTP_FROM` | _(non défini)_ | L'adresse `From:` du courrier sortant. |
| `DEMO_MODE` | _(non défini)_ | Toute valeur = **mode démo en lecture seule** (toutes les écritures bloquées). |
| `CHATBOT` | _(non défini)_ | Toute valeur vraie active le **chatbot IA** (nécessite les variables LiteLLM). |
| `LITELLM_URL` | _(non défini)_ | URL de base de votre proxy LiteLLM, p. ex. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(non défini)_ | Nom de modèle correspondant à une entrée de `litellm.config.yaml`. |
| `LITELLM_VISION_MODEL` | _(non défini)_ | Modèle compatible vision optionnel pour l'identification poisson/leurre. Revient à `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Taille maximale de téléversement en octets (par défaut ≈ 100 Mo). |

:::note
La fonction SMTP « mot de passe oublié » n'apparaît que lorsque au moins `SMTP_HOST` **et** `SMTP_FROM` sont
définis. Sans eux, l'option de réinitialisation est masquée.
:::

## Notes sur les valeurs par défaut

Les valeurs par défaut ci-dessus sont les valeurs par défaut intégrées au code de l'application. Dans un
conteneur, vous remplacerez généralement les chemins pour pointer vers des volumes montés :

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Groupées par objectif

- **Stockage :** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Réseau / liens :** `BASE_URL`
- **Authentification :** `ADMIN_PASSWORD` (`AUTH_PASSWORD` déprécié)
- **E-mail / réinitialisation de mot de passe :** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **Fonctions d'IA :** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Démo :** `DEMO_MODE`

Voir [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication),
[Fonctions d'IA](/fr/docs/ai/ai-features) et [Mode démo](/fr/docs/demo/demo-mode) pour comprendre comment ces
groupes s'articulent.
