---
title: Installer OpenFishing
description: Ce qu'il vous faut, le fichier docker-compose, où le lancer, ce que vous devriez voir et comment mettre à jour.
---

OpenFishing tourne dans un seul conteneur Docker, sur un ordinateur qui vous appartient. Cette
page vous mène d'une machine vide à votre propre instance en marche. Envie de jeter un œil
d'abord ? La [démo en ligne](https://demo.openfishing.org) ne demande ni installation ni inscription.

## Avant de commencer

Il vous faut :

- **Un ordinateur toujours allumé**, par exemple un NAS, un mini-PC ou un serveur domestique.
- **Docker avec Docker Compose** installé dessus. Sur beaucoup de NAS, Docker est une application
  du centre de paquets ; sous Linux, suivez le [guide d'installation de Docker](https://docs.docker.com/engine/install/). Sur Synology, elle s'appelle Container Manager ; sur QNAP, Container Station.
- **Un processeur 64 bits Intel ou AMD (amd64).** L'image n'existe que pour amd64 : les machines
  à processeur ARM ne peuvent pas la faire tourner. Pour vérifier, lancez `uname -m` sur la
  machine : `x86_64` signifie que tout va bien ; `aarch64` ou `armv7l` signifie une machine ARM.
  Pas de terminal ? Cherchez le processeur de votre modèle de NAS dans sa fiche technique.

## Juste pour essayer ?

Pour un coup d'œil rapide sans fichier compose, une commande suffit :

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Remplacez `192.168.1.50` par l'adresse de votre machine, pour que les liens et les étiquettes QR fonctionnent aussi sur vos autres appareils.

OpenFishing démarre alors sans connexion. Quand vous décidez de le garder, passez au fichier
compose : il regroupe vos réglages au même endroit.

## 1. Créer le fichier compose

Créez un dossier `openfishing` et enregistrez-y ce fichier :

```yaml title="docker-compose.yml"
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

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Modifiez ces lignes avant de le démarrer :**

- `BASE_URL` : l'adresse que vous tapez dans le navigateur, avec `http://` et le port, par
  exemple l'adresse de votre NAS. **Elle est obligatoire :** sans elle, OpenFishing suppose
  HTTPS et chaque enregistrement échoue avec « Cross-site POST form submissions are forbidden ».
  Elle sert aussi aux QR codes : utilisez l'adresse par laquelle les autres appareils joignent la machine.
  Donnez à la machine une adresse fixe dans votre box (une *réservation DHCP*), sinon elle peut
  changer et vos QR codes ne mènent plus nulle part.
- `TZ` : votre [fuseau horaire](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), pour que les heures de prise ne soient pas décalées.
- `ADMIN_PASSWORD` : sans lui, il n'y a pas d'écran de connexion et toute personne sur votre
  réseau a un accès complet. Retirez le `#` et ajoutez votre mot de passe avant que d'autres
  ou Internet puissent accéder à l'application. Le nom d'utilisateur est toujours `admin`.

## 2. Le démarrer

**Avec une application Docker de NAS ou Portainer ?** Créez une nouvelle *stack* (ou un
*projet*), collez le fichier ci-dessus et déployez-la.

**Avec un terminal ?** Connectez-vous à la machine (par exemple en SSH), allez dans le dossier et lancez :

```bash
docker compose up -d
```

Le premier démarrage prend une à deux minutes, le temps que Docker télécharge l'image.

## 3. L'ouvrir

Ouvrez l'adresse indiquée dans `BASE_URL`, par exemple **`http://192.168.1.50:3000`**
(ou `http://localhost:3000` sur la machine elle-même). Vous devriez voir votre collection de
leurres vide, prête pour le premier leurre. Si vous avez défini `ADMIN_PASSWORD`, connectez-vous
d'abord en tant que **`admin`**.

Si la page ne s'affiche pas encore, le premier démarrage est peut-être en cours :
`docker compose logs openfishing` affiche `Listening on` quand tout est prêt.

Vous y êtes. Ensuite, [ajoutez votre premier leurre](/fr/docs/features/lures).

## Où sont vos données

- **Base SQLite (leurres, spots, prises, matériel)** : chemin dans le conteneur `/app/data`, volume `openfishing-db`
- **Vos photos** : chemin dans le conteneur `/app/uploads`, volume `openfishing-uploads`

:::caution
Gardez les deux volumes. Un conteneur lancé sans eux perd tout lorsqu'il est supprimé. Pour des
copies ailleurs, utilisez [Sauvegarde & restauration](/fr/docs/backup/backup-restore).
:::

## Mettre à jour

Faites d'abord une sauvegarde (dans les **Paramètres**, voir
[Sauvegarde & restauration](/fr/docs/backup/backup-restore)), puis récupérez la nouvelle image et redémarrez :

```bash
docker compose pull
docker compose up -d
```

Les migrations de la base s'exécutent automatiquement au démarrage, et vos données restent dans
les volumes. Dans une application Docker de NAS ou Portainer, utilisez l'action *pull et
redéployer* (ou *mettre à jour*) de la stack.

Démarré avec la commande unique ? Lancez `docker pull ghcr.io/m1ndgames/openfishing`,
supprimez l'ancien conteneur (`docker rm -f <nom>`) et relancez la même commande `docker run` :
les volumes nommés conservent vos données.

Vous voulez choisir quand mettre à jour ? Remplacez l'image par une étiquette de version de la
[page des versions](https://github.com/m1ndgames/OpenFishing/releases), par exemple `ghcr.io/m1ndgames/openfishing:<version>`, et changez-la
quand vous êtes prêt. Gardez les deux machines sur la même version pour déplacer une sauvegarde.

## Reverse proxy et HTTPS

Pour accéder à OpenFishing depuis l'extérieur, placez-le derrière un reverse proxy qui gère
HTTPS, et réglez `BASE_URL` sur l'adresse publique. Avec Caddy, voici toute la configuration :

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Avec nginx, transmettez les en-têtes de proxy standard et autorisez des envois de la taille d'une photo :

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Définissez `ADMIN_PASSWORD` avant : une instance sans connexion ne doit jamais être exposée à Internet.

## Étapes suivantes

- Ajoutez votre premier leurre : [Leurres](/fr/docs/features/lures) montre ce que vous pouvez enregistrer.
- Tous les réglages (e-mail, IA, limites d'envoi, mode démo) sont dans la
  [référence des variables d'environnement](/fr/docs/configuration/environment-variables).
- Accueillir amis et famille : [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication).
- Quelque chose ne marche pas ? Consultez [FAQ & dépannage](/fr/docs/help/faq).
