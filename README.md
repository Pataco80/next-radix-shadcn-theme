Ceci est un projet [Next.js](https://nextjs.org) créé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Structure du projet

```
next-radix-theme/
├── .cspell.json                # Configuration pour la vérification orthographique
├── .cursorrules.md             # Directives pour l'assistant IA Cursor
├── .editorconfig               # Configuration de l'éditeur pour un style de codage cohérent
├── .eslintrc.json              # Configuration ESLint
├── .git/                       # Dépôt Git
├── .gitignore                  # Modèles d'exclusion Git
├── .npmrc                      # Configuration NPM/PNPM
├── .prettierrc                 # Configuration du formateur de code Prettier
├── README.md                   # Documentation du projet (ce fichier)
├── app/                        # Répertoire App Router de Next.js
│   ├── favicon.ico             # Favicon du site web
│   ├── globals.css             # Styles CSS globaux
│   ├── layout.tsx              # Composant de mise en page racine
│   └── page.tsx                # Composant de la page d'accueil
├── docs/                       # Documentation détaillée du projet
│   ├── index.md                # Point d'entrée de la documentation
│   ├── scripts.md              # Documentation des scripts disponibles
│   ├── project-structure.md    # Structure détaillée du projet
│   ├── project-design.md       # Conception détaillée du projet
│   ├── en/                     # Traductions en anglais de la documentation
│   └── fr/                     # Traductions en français de la documentation
├── next-env.d.ts               # Déclarations TypeScript pour Next.js
├── next.config.ts              # Configuration Next.js
├── node_modules/               # Dépendances (non suivies dans Git)
├── package.json                # Métadonnées du projet et dépendances
├── pnpm-lock.yaml              # Fichier de verrouillage PNPM
├── pnpm-workspace.yaml         # Configuration de l'espace de travail PNPM
├── postcss.config.mjs          # Configuration PostCSS
├── public/                     # Ressources statiques
├── scripts/                    # Scripts utilitaires
├── tsconfig.json               # Configuration principale TypeScript
├── tsconfig.node.json          # Configuration TypeScript pour Node.js
└── tsconfig.scripts.json       # Configuration TypeScript pour les scripts
```

## Documentation

Ce projet inclut une documentation détaillée dans le répertoire `docs/` :

- [Accueil de la documentation](./docs/index.md) - Point d'entrée avec table des matières
- [Scripts disponibles](./docs/scripts.md) - Description détaillée de tous les scripts disponibles
- [Structure du projet](./docs/project-structure.md) - Explication détaillée de la structure du projet

## Démarrage

Tout d'abord, lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à modifier la page en modifiant `app/page.tsx`. La page se met à jour automatiquement lorsque vous modifiez le fichier.

Ce projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour optimiser et charger automatiquement [Geist](https://vercel.com/font), une nouvelle famille de polices pour Vercel.

## Scripts personnalisés

Ce projet inclut plusieurs scripts personnalisés pour faciliter le développement et la maintenance. Pour une liste complète avec des descriptions détaillées, consultez [scripts.md](./docs/scripts.md).

Voici quelques-uns des scripts les plus couramment utilisés :

```bash
# Démarrer le serveur de développement après avoir nettoyé le dossier .next
pnpm refresh

# Nettoyer le dossier .next et construire le projet
pnpm rebuild

# Nettoyer uniquement le dossier .next
pnpm clean

# Réinitialiser le projet : nettoyer .next, supprimer node_modules et réinstaller les dépendances
pnpm reset
```

## En savoir plus

Pour en savoir plus sur Next.js, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) - découvrez les fonctionnalités et l'API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - un tutoriel interactif Next.js.

Vous pouvez consulter [le dépôt GitHub Next.js](https://github.com/vercel/next.js) - vos commentaires et contributions sont les bienvenus !

## Déploiement sur Vercel

Le moyen le plus simple de déployer votre application Next.js est d'utiliser la [Plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) des créateurs de Next.js.

Consultez notre [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
