Il s'agit d'un projet [next.js] (https://nextjs.org) avec [`Create-Next-App`] (https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Structure du projet

`` '
Radix-Radix /
├fique
├fiques. .Cursorrules.md # Guidelines pour l'assistant de curseur AI
├fique
├fique
├fique
├fique
├fique
├── .prettierrc # Configuration du formateur de code plus joli
├fiques..
├fiques paramètres spécifiques au code.
│ └fiques paramètres.json # vs paramètres de code
├fique
├fique application / # Next.js Router de l'application Router
│ ├fique
│ ├fique
│ ├fique
│ └fique
├fiques docs / # Documentation détaillée du projet
│ ├fiques index.md # Point d'entrée de documentation
│ ├fiques
│ ├fiques-guide de traduction.MD # Guide des fonctionnalités de traduction
│ ├fiques-structure du projet.MD # Structure détaillée du projet
│ ├── EN / # Traductions anglaises de la documentation
│ └fiques
├fiquesl-env.d.ts # Déclaration de typescript pour next.js
├fique
├fiques les dépendances Node_Modules / # (non suivis en git)
├fiques-package.json # métadonnées et dépendances du projet
├fique
├── PNPM-workspace.yaml # Configuration de l'espace de travail PNPM
├fiqueslos.config.mjs
├fiques les actifs publics / # statiques
Scripts / # scripts utilitaires
│ ├fique
│ └fiques
└fique
`` '

## documentation

Ce projet comprend une documentation détaillée dans le répertoire «Docs /`:

- [Documentation Home] (./ Docs / index.md) - Point d'entrée avec table des matières
- [Scripts disponibles] (./ docs / scripts.md) - Description détaillée de tous les scripts disponibles
- [Guide de traduction] (./ docs / traduction-guide.md) - comment utiliser les fonctionnalités de traduction
- [Structure du projet] (./ docs / project-structure.md) - Explication détaillée de la structure du projet

## Commencer

Tout d'abord, exécutez le serveur de développement:

`` `bash
NPM Run Dev
# ou
chou
# ou
pnpm dev
# ou
chignon
`` '

Ouvrir [http: // localhost: 3000] (http: // localhost: 3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à modifier la page en modifiant `app / page.tsx`. La page indique automatiquement la mise à jour lorsque vous modifiez le fichier.

Ce projet utilise [`Next / Font`] (https://nextjs.org/docs/app/building-your-application/optimiser/fonts) pour optimiser et charger automatiquement [Geist] (https://vercel.com/font), une nouvelle famille Font pour Vercel.

## Scripts personnalisés

Ce projet comprend plusieurs scripts personnalisés pour aider au développement et à la maintenance. Pour une liste complète avec des descriptions détaillées, voir [scripts.md] (./ docs / scripts.md).

Voici quelques-uns des scripts les plus couramment utilisés:

`` `bash
# Démarrer le serveur de développement après le nettoyage du dossier .Next
Rafraîchissement PNPM

# Clean .Next dossier et construisez le projet
PNPM Rebuild

# Nettoyez uniquement le dossier .Next
PNPM Clean

# Réinitialiser le projet: nettoyer .Next, supprimer Node_Modules et réinstaller les dépendances
Réinitialisation PNPM

# Traduire des fichiers de marque spécifiques en français (sorties vers DOCS / FR /)
PNPM traduit: FR <Fichier1.md> <File2.md> ...

# Traduire tous les fichiers de démarque prédéfinis en français
pnpm traduit: fr: tout

# Trouver et traduire tous les fichiers de marque dans le projet
PNPM traduit: FR: trouver

# Traduire tous les fichiers de marque dans le dossier / dossier en anglais (sorties vers les documents / en /)
pnpm traduit: en
`` '

## Apprendre encore plus

Pour en savoir plus sur Next.js, jetez un œil aux ressources suivantes:

- [next.js Documentation] (https://nextjs.org/docs) - Découvrez les fonctionnalités et l'API Next.js.
- [Learn next.js] (https://nextjs.org/learn) - un didacticiel interactif next.js.

Vous pouvez consulter [le référentiel GitHub suivant.

## Déployer sur Vercel

Le moyen le plus simple de déployer votre application suivante.

Consultez notre documentation de déploiement [Next.js] (https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.