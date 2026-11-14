---
title: Introduction
description: Ce qu'est OpenFishing, comment il garde vos données sur votre propre serveur, ce qui communique avec Internet, et un aperçu des fonctionnalités.
---

**OpenFishing** est une application web auto-hébergée qui permet aux pêcheurs d'organiser leur
**collection de leurres**, de marquer leurs **spots de pêche** sur une carte, d'enregistrer leurs
**prises** et de suivre leur **matériel**, le tout dans une seule application respectueuse de la
vie privée, qui tourne sur votre propre serveur.

Elle est livrée sous forme d'une seule image **Docker** avec une seule base de données **SQLite**.
Pas de service cloud, pas de compte chez un tiers, pas de télémétrie : vos photos et vos données
vivent sur votre serveur et nulle part ailleurs. Envie de la voir avant d'installer ? Ouvrez la
[démo en ligne](https://demo.openfishing.org) : sans inscription, en lecture seule.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Une prise dans OpenFishing : une perche sur le tapis de mesure avec sa taille, le leurre qui l'a prise, l'indice de morsure et le coin sur la carte" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Une prise dans OpenFishing : une perche sur le tapis de mesure avec sa taille, le leurre qui l'a prise, l'indice de morsure et le coin sur la carte" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Voir dans la démo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (s'ouvre dans un nouvel onglet)</span></a></figcaption>
</figure>

## Aperçu des fonctionnalités

| Domaine | Ce qu'il fait |
|---|---|
| [Leurres](/fr/docs/features/lures) | Photothèque avec tags, espèces, favoris, suivi des leurres perdus, étiquettes QR et recherche rapide. |
| [Spots](/fr/docs/features/spots) | Carte interactive de vos spots de pêche avec GPS et photos. |
| [Prises](/fr/docs/features/catches) | Enregistrez espèce, poids, taille, GPS, Attraper & Relâcher et style de récupération, avec un indice de morsure basé sur la météo. |
| [Matériel](/fr/docs/features/tackle) | Cannes, moulinets, fils et combos, avec l'historique des bobines. |

Également inclus :

- **Analyses** : [Indice de morsure](/fr/docs/features/bite-index), [Statistiques](/fr/docs/features/stats)
- **Partage** : [Liens de partage](/fr/docs/features/share-links)
- **Options** : [Thèmes & apparence](/fr/docs/features/themes), [Langues](/fr/docs/features/languages)
- **Gérer votre serveur** : [Multi-utilisateur](/fr/docs/multi-user/authentication), [Fonctions d'IA](/fr/docs/ai/ai-features), [Sauvegarde & restauration](/fr/docs/backup/backup-restore), [API REST](/fr/docs/api/rest-api)

## Philosophie

- **Auto-hébergé & respectueux de la vie privée** : vous l'hébergez, les données sont à vous. Vos
  données et vos photos restent sur votre serveur.
- **Sans cloud** : aucun compte ni service cloud n'est nécessaire au fonctionnement de l'application.
- **Open source** : publié sous licence AGPL-3.0 sur
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simple à faire tourner** : un conteneur, un fichier SQLite, deux volumes pour la base et les envois.

## Ce qui communique avec Internet

Vos données et vos photos ne quittent jamais votre serveur. Ces fonctionnalités vont chercher des
données à l'extérieur, et aucune autre :

- **[Météo](/fr/docs/features/bite-index)** : quand vous enregistrez une prise, ouvrez un spot ou interrogez le chatbot sur un lieu, le serveur
  demande à [Open-Meteo](https://open-meteo.com/) la météo actuelle à cet endroit. Seules les coordonnées sont envoyées.
- **Carte des [spots](/fr/docs/features/spots)** : dès qu'une carte s'affiche, votre navigateur charge des tuiles depuis OpenStreetMap, qui voit la zone
  consultée. `MAP_TILE_URL` permet d'utiliser votre propre serveur de tuiles.
- **[Fonctions d'IA](/fr/docs/ai/ai-features)** : seulement si vous les configurez ; le fournisseur d'IA choisi reçoit votre question ou votre photo.
- **[Réinitialisation du mot de passe](/fr/docs/multi-user/authentication)** : seulement si SMTP est configuré ; votre propre serveur de messagerie envoie l'e-mail.

## Étapes suivantes

- [Installez OpenFishing](/fr/docs/getting-started/installation) sur votre NAS ou serveur domestique.
- Faites d'abord un tour dans la [démo en ligne](https://demo.openfishing.org).
- Ajustez le comportement avec les [variables d'environnement](/fr/docs/configuration/environment-variables).

:::note
Quelque chose manque ou n'est pas clair ? [Ouvrez une issue sur GitHub](https://github.com/m1ndgames/OpenFishing/issues)
et nous l'ajouterons.
:::
