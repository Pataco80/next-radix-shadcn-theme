# Next Radix Shadcn Theme

> ### Note Importante concernant la langue et traduction / Important Note about Language and Translation
>
> **🇫🇷 FR** :
>
> - La documentation de ce projet est effectuée en français par défaut.
> - Les sections de ce document sont présentées en français puis en anglais, ou dans un format bilingue.
> - La documentation détaillée est accessible dans le [README.md](./docs/README.md) du dossier `/docs`.
>
> **🇬🇧 EN**:
>
> - The documentation of this project is done in French by default.
> - Sections in this document are presented in French and then in English, or in a bilingual format.
> - Detailed documentation is accessible in the [README.md](./docs/README.md) file in the `/docs` folder.

## Introduction / Introduction

**🇫🇷** Ce projet a pour objectif de créer des interfaces visuelles Shadcn avec l'usage de variables à longues portées pour obtenir des composants avec une palette de couleurs plus complète. Il introduit aussi un système de design aux dimensions fluides pour la typographie, mais aussi pour les espacements utilisés pour les layouts, conteneurs, composants, etc... en influant sur les marges et rembourrages.

**🇬🇧** This project aims to create Shadcn visual interfaces with the use of long-range variables to obtain components with a more complete color palette. It also introduces a design system with fluid dimensions for typography, but also for spacing used for layouts, containers, components, etc... by influencing margins and padding.

Ceci est un projet [Next.js](https://nextjs.org) créé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). / This is a [Next.js](https://nextjs.org) project created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Structure du projet / Project Structure

```
📁 next-radix-shadcn-theme/
├── 📄 .cspell.json                # Configuration pour la vérification orthographique / Spell checking configuration
├── 📄 .cursorrules.md             # Directives pour l'assistant IA Cursor / Guidelines for Cursor AI assistant
├── 📄 .editorconfig               # Configuration de l'éditeur / Editor configuration for consistent coding style
├── 📄 .eslintrc.json              # Configuration ESLint / ESLint configuration
├── 📁 .git/                       # Dépôt Git / Git repository
├── 📄 .gitignore                  # Modèles d'exclusion Git / Git exclusion patterns
├── 📄 .npmrc                      # Configuration NPM/PNPM / NPM/PNPM configuration
├── 📄 .prettierrc                 # Configuration du formateur de code / Prettier code formatter configuration
├── 📄 README.md                   # Documentation du projet (ce fichier) / Project documentation (this file)
├── 📁 app/                        # Répertoire App Router de Next.js / Next.js App Router directory
│   ├── 📄 favicon.ico             # Favicon du site web / Website favicon
│   ├── 📄 globals.css             # Styles CSS globaux / Global CSS styles
│   ├── 📄 layout.tsx              # Composant de mise en page racine / Root layout component
│   └── 📄 page.tsx                # Composant de la page d'accueil / Home page component
├── 📁 docs/                       # Documentation détaillée du projet / Detailed project documentation
│   ├── 📄 README.md               # Point d'entrée de la documentation / Documentation entry point
│   ├── 📁 cursor-config/          # Documentation de configuration Cursor / Cursor configuration documentation
│   │   ├── 📁 fr/                 # Documentation en français pour Cursor / French documentation for Cursor
│   │   └── 📁 en/                 # Documentation en anglais pour Cursor / English documentation for Cursor
│   └── 📁 project/                # Documentation du projet / Project documentation
│       ├── 📁 fr/                 # Documentation en français du projet / French project documentation
│       └── 📁 en/                 # Documentation en anglais du projet / English project documentation
├── 📄 next-env.d.ts               # Déclarations TypeScript pour Next.js / TypeScript declarations for Next.js
├── 📄 next.config.mjs             # Configuration Next.js / Next.js configuration
├── 📁 node_modules/               # Dépendances (non suivies dans Git) / Dependencies (not tracked in Git)
├── 📄 package.json                # Métadonnées du projet et dépendances / Project metadata and dependencies
├── 📄 pnpm-lock.yaml              # Fichier de verrouillage PNPM / PNPM lock file
├── 📄 pnpm-workspace.yaml         # Configuration de l'espace de travail PNPM / PNPM workspace configuration
├── 📄 postcss.config.mjs          # Configuration PostCSS / PostCSS configuration
├── 📁 public/                     # Ressources statiques / Static assets
├── 📁 scripts/                    # Scripts utilitaires / Utility scripts
├── 📄 tsconfig.json               # Configuration principale TypeScript / Main TypeScript configuration
├── 📄 tsconfig.node.json          # Configuration TypeScript pour Node.js / TypeScript configuration for Node.js
└── 📄 tsconfig.scripts.json       # Configuration TypeScript pour les scripts / TypeScript configuration for scripts
```

## Documentation / Documentation

**🇫🇷** Ce projet inclut une documentation détaillée dans le répertoire `docs/` :

**🇬🇧** This project includes detailed documentation in the `docs/` directory:

| Français                                                      | English                                                     |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| [Accueil de la documentation](./docs/README.md)               | [Documentation Home](./docs/README.md)                      |
| [Scripts disponibles](./docs/project/fr/scripts.md)           | [Available Scripts](./docs/project/en/scripts.md)           |
| [Structure du projet](./docs/project/fr/project-structure.md) | [Project Structure](./docs/project/en/project-structure.md) |
| [Design du projet](./docs/project/fr/project-design.md)       | [Project Design](./docs/project/en/project-design.md)       |
| [Dépendances du projet](./docs/project/fr/dependencies.md)    | [Project Dependencies](./docs/project/en/dependencies.md)   |
| [Configuration Cursor](./docs/cursor-config/fr/)              | [Cursor Configuration](./docs/cursor-config/en/)            |

## 🇫🇷 Français

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

Ce projet inclut plusieurs scripts personnalisés pour faciliter le développement et la maintenance. Pour une liste complète avec des descriptions détaillées, consultez [scripts.md](./docs/project/fr/scripts.md).

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

## 🇬🇧 English

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family from Vercel.

## Custom Scripts

This project includes several custom scripts to facilitate development and maintenance. For a complete list with detailed descriptions, see [scripts.md](./docs/project/en/scripts.md).

Here are some of the most commonly used scripts:

```bash
# Start the development server after cleaning the .next folder
pnpm refresh

# Clean the .next folder and build the project
pnpm rebuild

# Clean only the .next folder
pnpm clean

# Reset the project: clean .next, remove node_modules, and reinstall dependencies
pnpm reset
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
