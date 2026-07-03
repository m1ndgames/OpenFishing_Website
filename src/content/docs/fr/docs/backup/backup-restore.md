---
title: Sauvegarde & restauration
description: Sauvegarde et restauration ZIP en un clic, par utilisateur ou pour toute l'instance, et ce que contient l'archive.
---

OpenFishing dispose d'une **sauvegarde et restauration** intégrée sous forme d'archives ZIP téléchargeables/téléversables.

## Sauvegarde & restauration par utilisateur

Depuis **`/settings`**, chaque utilisateur peut sauvegarder et restaurer **ses propres données** — ses leurres,
spots, prises et matériel, ainsi que les téléversements associés.

## Sauvegarde & restauration de toute l'instance (admin)

Depuis le panneau d'administration à **`/settings/admin`**, un administrateur peut sauvegarder et restaurer
**toute l'instance** — tous les utilisateurs et comptes inclus.

:::caution
Une **restauration complète** effectue un **effacement et une reconstruction** complets de l'instance : les
données existantes sont remplacées par le contenu de l'archive. Faites d'abord une nouvelle sauvegarde.
:::

## Format de l'archive

Une sauvegarde est un ZIP contenant :

- **`backup.json`** — les données structurées (enregistrements).
- **`uploads/`** — les fichiers photo associés.

Comme c'est un simple ZIP, vous pouvez le stocker n'importe où et l'inspecter si nécessaire.

## Associé

- Rappelez-vous que la base de données en direct et les téléversements doivent être sur des
  [volumes persistants](/fr/docs/getting-started/installation) — les sauvegardes complètent, mais ne remplacent
  pas, des volumes appropriés.
