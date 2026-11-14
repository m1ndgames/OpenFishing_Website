---
title: Multi-utilisateur & authentification
description: Activez la connexion pour accueillir amis et famille, créez des comptes, fixez des quotas de stockage et gérez les mots de passe oubliés.
---

Par défaut, OpenFishing a **une seule collection partagée et pas de connexion** : quiconque peut
ouvrir son adresse peut l'utiliser. Sur un réseau domestique de confiance, cela convient. Pour
accueillir amis et famille, ou pour accéder à OpenFishing depuis Internet, activez la connexion.

## Activer la connexion

Le fichier compose de [Installer OpenFishing](/fr/docs/getting-started/installation) contient
déjà la ligne, désactivée par un `#` :

```yaml title="docker-compose.yml"
    environment:
      # Connexion : ôtez #, mot de passe
      # - ADMIN_PASSWORD=
```

Retirez le `# ` devant `- ADMIN_PASSWORD=`, tapez votre propre mot de passe juste après le `=`,
puis lancez `docker compose up -d`. Un écran de connexion apparaît : connectez-vous avec le nom
d'utilisateur **admin** et ce mot de passe.

## Le compte admin

- Le nom d'utilisateur est toujours `admin`.
- Le mot de passe est celui indiqué dans `ADMIN_PASSWORD`. OpenFishing le relit à chaque
  démarrage : pour le changer, modifiez la ligne et relancez `docker compose up -d`.

## Ajouter un membre de la famille

1. Connectez-vous en tant qu'`admin` et ouvrez **Paramètres → Admin**.
2. Sous **Créer un utilisateur**, remplissez **E-mail**, **Nom d'utilisateur** et **Mot de passe**.
3. Laissez **Quota (Mo)** vide pour ne pas limiter les envois, ou saisissez un nombre.
4. Choisissez **Créer**.

Envoyez-lui l'adresse, son nom d'utilisateur et le mot de passe. La personne se connecte avec son
e-mail ou son nom d'utilisateur et peut choisir un nouveau mot de passe dans **Paramètres → Mon
compte → Changer le mot de passe**.

## Qui voit quoi

Chaque compte a ses propres leurres, spots, prises et matériel. Personne ne voit ceux des autres.

## Gérer les comptes

**Paramètres → Admin** liste tous les comptes. Pour chacun, vous pouvez modifier le nom d'utilisateur et
l'e-mail, changer le quota de stockage et saisir un nouveau mot de passe dans le champ **Réinitialiser le mot de passe**,
puis sélectionner **Enregistrer**. Vous pouvez aussi activer ou désactiver le [chatbot IA](/fr/docs/ai/ai-features),
**Régénérer le jeton** pour l'[API REST](/fr/docs/api/rest-api), **Désactiver** le compte ou le **Supprimer**. La
suppression efface définitivement le compte et toutes ses données.

## Mots de passe oubliés

- **Un membre de la famille :** l'admin saisit un nouveau mot de passe dans le champ **Réinitialiser le mot de passe** du compte, sous **Paramètres → Admin**, puis sélectionne **Enregistrer**. Si l'e-mail est configuré (au moins `SMTP_HOST` et `SMTP_FROM`, voir
  [Variables d'environnement](/fr/docs/configuration/environment-variables)), l'écran de
  connexion propose aussi un lien par e-mail.
- **L'admin :** changez `ADMIN_PASSWORD` et lancez `docker compose up -d`.
