---
title: FAQ & dépannage
description: Solutions aux problèmes d'installation courants (machines ARM, conflits de port, mot de passe admin oublié) et réponses sur les volumes, les mises à jour, les envois et la connexion.
---

Les problèmes sont classés selon le message que vous voyez réellement : chercher le texte exact
de l'erreur mène en général directement à la solution.

Quand une réponse indique `docker compose up -d`, sur un NAS vous pouvez plutôt redéployer la stack
dans son app.

## Installation

### L'enregistrement échoue : « Cross-site POST form submissions are forbidden »

`BASE_URL` manque ou commence par `https://` alors que vous ouvrez l'application en simple `http://`. Réglez-la sur l'adresse exacte que vous ouvrez, par exemple `BASE_URL=http://192.168.1.50:3000`, puis relancez `docker compose up -d`. Derrière un reverse proxy, réglez `BASE_URL` sur l'adresse `https://` que l'on ouvre ; cela suffit. Voir [Variables d'environnement](/fr/docs/configuration/environment-variables#adresse-et-heure).

### Le conteneur ne démarre pas : « exec format error »

La machine a un processeur ARM (fréquent sur les petits NAS et les ordinateurs monocartes).
L'image OpenFishing n'existe que pour **Intel ou AMD 64 bits (amd64)**, elle ne peut donc pas y
tourner. Vérifiez avec `uname -m` : `x86_64` fonctionne, `aarch64` ou `armv7l` non. Voir
[Avant de commencer](/fr/docs/getting-started/installation#avant-de-commencer).

### « Port is already allocated » ou « address already in use »

Un autre programme utilise déjà le port 3000. Changez le nombre de **gauche** dans le fichier
compose, par exemple `"8080:3000"`, relancez `docker compose up -d` et ouvrez l'application sur
le port 8080.

### « docker compose » n'est pas une commande

Les installations Docker plus anciennes, dont certains paquets NAS, utilisent l'outil séparé `docker-compose`. Lancez les mêmes commandes avec un tiret : `docker-compose up -d`, `docker-compose pull`.

### La page ne se charge pas

- Vérifiez que le conteneur tourne : `docker ps` doit lister `openfishing`.
- Lisez son journal à la recherche d'erreurs : `docker logs openfishing`.
- Depuis un autre appareil, utilisez l'adresse réseau de la machine (par exemple
  `http://192.168.1.50:3000`), pas `localhost`.
- Ça marche sur la machine mais pas depuis votre téléphone ? Autorisez le port 3000 dans le pare-feu
  de la machine (sur un NAS, dans ses réglages de sécurité ou de pare-feu).

### Ai-je besoin de volumes persistants ?

**Oui.** Sans eux, vos données et photos sont perdues quand le conteneur est recréé. Le fichier
compose de [Installer OpenFishing](/fr/docs/getting-started/installation) les crée tous les deux.

## Au quotidien

### Comment mettre à jour ?

Sauvegardez d'abord, puis `docker compose pull` et `docker compose up -d`. Voir
[Mettre à jour](/fr/docs/getting-started/installation#mettre-à-jour).

### Dois-je lancer les migrations de la base ?

**Non.** Les migrations **s'exécutent automatiquement au démarrage**. Récupérez une image plus
récente et redémarrez : le schéma est mis à jour pour vous.

### J'ai oublié le mot de passe admin

Indiquez un nouveau `ADMIN_PASSWORD` dans le fichier compose et lancez `docker compose up -d`.
Le compte `admin` est resynchronisé depuis cette variable à chaque démarrage, le nouveau mot de
passe fonctionne donc tout de suite. Les autres utilisateurs peuvent réinitialiser le leur par
e-mail si [SMTP est configuré](/fr/docs/configuration/environment-variables).

### Y a-t-il une connexion par défaut ?

Non. OpenFishing est **ouvert** tant que vous ne définissez pas `ADMIN_PASSWORD`. Voir
[Multi-utilisateur & authentification](/fr/docs/multi-user/authentication). N'exposez pas une
instance ouverte sur Internet.

### Pourquoi mon envoi est-il refusé ?

Les envois sont limités par **`BODY_SIZE_LIMIT`** (par défaut ≈ 100 Mo, soit `104857600`
octets). Augmentez-le pour des photos plus grandes, et vérifiez que le reverse proxy éventuel
autorise aussi cette taille (`client_max_body_size` avec nginx).

### « Identifier depuis la photo » affiche « Une erreur s’est produite. Veuillez réessayer. »

L'IA n'est pas configurée sur votre serveur. Le bouton a besoin de `LITELLM_URL` et d'un modèle ;
voir [Fonctions d'IA](/fr/docs/ai/ai-features).

### « Quota de téléchargement dépassé »

L'admin a fixé une limite de stockage pour votre compte (**Quota (Mo)** dans **Paramètres →
Admin**). Supprimez les photos inutiles, ou demandez à l'admin de l'augmenter.

### Comment faire tourner OpenFishing derrière un reverse proxy ?

Terminez HTTPS sur votre proxy, transférez vers le port `3000` avec les en-têtes de proxy
standard, et réglez `BASE_URL` sur l'adresse publique pour que les [QR codes](/fr/docs/features/qr-labels)
et les liens de réinitialisation soient corrects.
[Installer OpenFishing](/fr/docs/getting-started/installation#reverse-proxy-et-https) contient
des exemples pour Caddy et nginx.

### OpenFishing envoie-t-il mes données quelque part ?

Vos données et vos photos restent sur votre serveur. La météo de l'indice de morsure, les tuiles
de carte et les fonctions d'IA optionnelles contactent des services extérieurs ;
l'[Introduction](/fr/docs/getting-started/introduction#ce-qui-communique-avec-internet) les liste précisément. Les tuiles de carte peuvent venir de votre propre serveur via [`MAP_TILE_URL`](/fr/docs/configuration/environment-variables#carte).

### Je ne trouve pas « Créer un lien de partage »

Les liens de partage nécessitent la connexion. Définissez `ADMIN_PASSWORD` (voir [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication)) et
lancez `docker compose up -d` ; le bouton apparaît alors sur chaque leurre, spot et prise.

## Sauvegardes

### La restauration échoue : « Incompatibilité de schéma »

La sauvegarde vient d'une autre version d'OpenFishing. [Mettez à jour](/fr/docs/getting-started/installation#mettre-à-jour) les deux installations
vers la dernière version, exportez une sauvegarde récente sur l'ancienne et restaurez-la.

### « Ceci est une sauvegarde personnelle » ou « Ceci est une sauvegarde complète »

Les sauvegardes personnelles et complètes se restaurent à des endroits différents. Une sauvegarde
personnelle, faite dans **Paramètres → Sauvegarde & Restauration**, se restaure là. Une sauvegarde complète, faite par l'admin dans **Paramètres → Admin**,
se restaure uniquement là.

## Aide

### Où obtenir de l'aide ou signaler un bug ?

Ouvrez une issue sur [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
