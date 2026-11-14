---
title: "Sauvegarde & restauration"
description: "Sauvegardez votre collection dans un seul ZIP et restaurez-la, sur la même machine ou une nouvelle."
---

OpenFishing sauvegarde tout ce que vous avez enregistré, photos comprises, dans **un seul fichier
ZIP** à télécharger. Gardez-en une copie ailleurs que sur la machine qui fait tourner OpenFishing.

## Faire une sauvegarde

1. Ouvrez **Paramètres → Sauvegarde & Restauration**.
2. Sous **Exporter la sauvegarde**, choisissez **Exporter**.

Le ZIP contient vos leurres, spots, prises et matériel avec leurs photos. Avec la connexion
activée, chacun ne sauvegarde ainsi que son propre compte.

:::caution
Une restauration est irréversible. Exportez d'abord une sauvegarde récente.
:::

## Restaurer une sauvegarde

1. Ouvrez **Paramètres → Sauvegarde & Restauration**.
2. Sous **Importer une sauvegarde**, choisissez **Choisir un fichier** et sélectionnez le ZIP.
3. Cochez la case confirmant que vos données actuelles seront remplacées.
4. Choisissez **Importer & Remplacer**.

Tout le contenu de votre compte est remplacé par celui de la sauvegarde. OpenFishing vérifie
d'abord le format de la sauvegarde et ne change rien s'il ne correspond pas.

Si tout se passe bien, vous voyez **Import réussi** avec le nombre de leurres, spots et prises restaurés.

## Sauvegarder toute l'instance (admin)

Avec la connexion activée, l'admin sauvegarde et restaure tous les comptes d'un coup dans **Paramètres → Admin** :

- **Tout exporter** télécharge tous les comptes et leurs données dans un seul ZIP.
- **Restaurer la sauvegarde complète** remplace toutes les données et tous les comptes par une
  sauvegarde complète. Tout le monde est déconnecté, et le mot de passe admin revient de `ADMIN_PASSWORD`.

Pour restaurer, cochez la confirmation et sélectionnez **Tout restaurer & remplacer**.

## Passer à une nouvelle machine

1. Sur l'ancienne machine, [mettez OpenFishing à jour](/fr/docs/getting-started/installation#mettre-à-jour) vers la dernière version, puis exportez une
   sauvegarde récente. Notez le **Format de sauvegarde** affiché dans **Paramètres**.
2. [Installez OpenFishing](/fr/docs/getting-started/installation) sur la nouvelle machine. Son **Format de sauvegarde** dans **Paramètres** doit correspondre à l'ancienne machine.
3. Ouvrez-le et restaurez : dans **Paramètres → Sauvegarde & Restauration** sans connexion, ou avec
   une sauvegarde complète dans **Paramètres → Admin → Restaurer la sauvegarde complète** si
   plusieurs personnes l'utilisent.
4. Vérifiez vos leurres et vos photos avant d'éteindre l'ancienne machine.

## Contenu du ZIP

- `backup.json`: vos enregistrements.
- `uploads/`: les photos.

C'est un ZIP ordinaire : vous pouvez l'ouvrir pour le vérifier.

## Sauvegardes et volumes

Les sauvegardes ne remplacent pas les [volumes](/fr/docs/getting-started/installation) qui contiennent la base de données active
et les photos. Gardez les deux, et exportez une sauvegarde avant un gros changement comme une mise à jour.
