---
title: Introduction
description: Ce qu'est OpenFishing, sa philosophie auto-hébergée et respectueuse de la vie privée, et un aperçu de ses fonctionnalités.
---

**OpenFishing** est une application web auto-hébergée permettant aux pêcheurs d'organiser leur **collection de leurres**,
de marquer leurs **spots de pêche** sur une carte, d'enregistrer leurs **prises** et de suivre leur **matériel** — le tout depuis
une seule application respectueuse de la vie privée qui s'exécute sur votre propre serveur.

C'est une application [SvelteKit](https://kit.svelte.dev/) reposant sur une unique base de données **SQLite**,
livrée sous forme d'une seule image **Docker**. Il n'y a aucun service cloud, aucun compte auprès d'un tiers et
aucune télémétrie : vos photos et vos données résident sur votre infrastructure et nulle part ailleurs.

## Philosophie

- **Auto-hébergé & respectueux de la vie privée** — vous l'exécutez, vous possédez les données. Rien ne quitte votre serveur.
- **Sans cloud** — aucune dépendance externe requise pour le fonctionnement du cœur de l'application.
- **Open source** — publié sous licence AGPL-3.0 sur
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simple à exécuter** — un conteneur, un fichier SQLite, deux volumes pour la base de données et les fichiers.

## Aperçu des fonctionnalités

| Domaine | Ce que ça fait |
|---|---|
| [Leurres](/fr/docs/features/lures) | Bibliothèque photo avec tags, espèces, favoris, suivi des leurres perdus, étiquettes QR et recherche rapide. |
| [Spots](/fr/docs/features/spots) | Carte Leaflet interactive de vos spots de pêche avec GPS et photos. |
| [Prises](/fr/docs/features/catches) | Enregistrez l'espèce, le poids, la longueur, le GPS, le no-kill et la présentation, avec un indice de touche basé sur la météo. |
| [Indice de touche](/fr/docs/features/bite-index) | Un score automatique de 0 à 10 évaluant les conditions de pêche à partir des données météo. |
| [Matériel](/fr/docs/features/tackle) | Cannes, moulinets, lignes et ensembles, avec l'historique des bobines. |
| [Statistiques](/fr/docs/features/stats) | Tendances de vos prises et de votre matériel. |
| [Fonctions d'IA](/fr/docs/ai/ai-features) | Chatbot optionnel plus identification des poissons et leurres à partir de photos. |
| [Multi-utilisateur](/fr/docs/multi-user/authentication) | Connexion optionnelle pour héberger amis et famille, avec quotas et panneau d'administration. |
| [Liens de partage](/fr/docs/features/share-links) | Pages publiques en lecture seule pour un leurre, un spot ou une prise. |
| [API REST](/fr/docs/api/rest-api) | API JSON en lecture seule avec jetons Bearer et interface Swagger. |
| [Sauvegarde & restauration](/fr/docs/backup/backup-restore) | Export/import ZIP en un clic. |
| [Langues](/fr/docs/features/languages) | 9 langues avec un sélecteur à drapeaux. |

## Prochaines étapes

- Suivez le [Démarrage rapide](/fr/docs/getting-started/quick-start) pour être opérationnel en une seule commande.
- Déployez correctement avec [Installation (docker-compose)](/fr/docs/getting-started/installation).
- Ajustez le comportement avec les [Variables d'environnement](/fr/docs/configuration/environment-variables).

:::note
Cette documentation est une référence concise. Pour un niveau de détail au niveau du code source, consultez le
[dépôt OpenFishing](https://github.com/m1ndgames/OpenFishing) sur GitHub.
:::
