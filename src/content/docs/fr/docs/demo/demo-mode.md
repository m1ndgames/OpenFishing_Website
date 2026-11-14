---
title: "Mode démo"
description: "Ce que fait DEMO_MODE (une instance en lecture seule, sans enregistrement) et comment la démo publique l'utilise."
---

Le **mode démo** rend une instance OpenFishing **en lecture seule** : on peut tout regarder, mais
rien modifier. La démo publique fonctionne ainsi.

## L'activer

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**N'importe quelle valeur l'active, même `false` ou `0`.** Pour le désactiver, supprimez la ligne
et lancez `docker compose up -d`. Voir [Variables d'environnement](/fr/docs/configuration/environment-variables).

## Ce qu'il fait

- **Rien ne peut être enregistré** : les visiteurs voient tout mais ne peuvent rien créer, modifier ni supprimer.
- Une **bannière** (« Mode démo ») indique qu'il s'agit d'une démo, et une tentative d'enregistrement affiche un court message qui explique pourquoi.
- **Le changement de langue fonctionne toujours** : les visiteurs voient la démo dans les [9 langues](/fr/docs/features/languages).
- Le **chatbot IA** ne répond pas ; il affiche « Le chatbot IA est désactivé dans cette démo. »

## La démo publique

La démo officielle sur **[demo.openfishing.org](https://demo.openfishing.org)** tourne dans ce mode.
Elle est remplie de données d'exemple et vous pouvez l'explorer librement sans rien changer.
