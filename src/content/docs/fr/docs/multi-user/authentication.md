---
title: Multi-utilisateur & authentification
description: Activez la connexion pour héberger amis et famille, avec isolation par utilisateur, quotas, un panneau d'administration et réinitialisation de mot de passe par SMTP.
---

Par défaut, OpenFishing fonctionne en mode **mono-locataire et entièrement ouvert** — sans connexion. Définissez
la variable d'environnement **`ADMIN_PASSWORD`** pour activer le **mode multi-utilisateur**.

## Activer la connexion

Définissez `ADMIN_PASSWORD` (voir [Variables d'environnement](/fr/docs/configuration/environment-variables)) :

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Une fois défini, un écran de connexion apparaît. Les utilisateurs se connectent avec leur **e-mail/nom
d'utilisateur + mot de passe**.

:::note
`AUTH_PASSWORD` est un nom de repli **déprécié** pour `ADMIN_PASSWORD`. Utilisez `ADMIN_PASSWORD`.
:::

## Le compte admin

- Le compte **`admin`** existe toujours lorsque l'authentification est activée.
- Son nom d'utilisateur est toujours `admin` ; son mot de passe est celui défini dans `ADMIN_PASSWORD`.
- Il est **resynchronisé depuis la variable d'environnement à chaque démarrage**, donc modifier la variable et
  redémarrer met à jour le mot de passe.

## Le panneau d'administration

Les administrateurs disposent d'un panneau à **`/settings/admin`** pour gérer l'instance :

- **Utilisateurs** — créer, activer/désactiver et gérer les comptes.
- **Quotas de stockage** — limiter la quantité que chaque utilisateur peut téléverser.
- **Bascule du chatbot** — activer/désactiver les [fonctions d'IA](/fr/docs/ai/ai-features) par utilisateur.
- **Jetons d'API** — gérer les jetons Bearer de l'[API REST](/fr/docs/api/rest-api).

## Isolation des données par utilisateur

Les leurres, spots, prises et matériel de chaque utilisateur sont **isolés** — les utilisateurs ne voient que
leurs propres données.

## Réinitialisation de mot de passe (SMTP)

Si vous configurez SMTP (au moins `SMTP_HOST` et `SMTP_FROM`), les utilisateurs peuvent réinitialiser les mots
de passe oubliés par e-mail. Sans SMTP configuré, l'option de réinitialisation est masquée. Voir les
[variables SMTP](/fr/docs/configuration/environment-variables).

## Quotas de stockage par utilisateur

Les administrateurs peuvent définir des **quotas de stockage** par utilisateur depuis le panneau
d'administration, pour qu'aucun utilisateur ne puisse remplir le disque avec des téléversements.
