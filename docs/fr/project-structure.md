# Structure du projet

Ce document décrit en détail la structure du projet Next.js Radix Theme, expliquant le rôle de chaque dossier et fichier important.

## Vue d'ensemble

```
next-radix-theme/
├── .cspell.json           # Configuration pour la vérification orthographique
├── .cursorrules.md        # Directives pour l'assistant IA Cursor
├── .editorconfig          # Configuration de l'éditeur pour un style de codage cohérent
├── .eslintrc.json         # Configuration ESLint
├── .git/                  # Dépôt Git
├── .gitignore             # Modèles d'exclusion Git
├── .npmrc                 # Configuration NPM/PNPM
├── .prettierrc            # Configuration du formateur de code Prettier
├── README.md              # Documentation principale du projet
├── app/                   # Dossier principal de l'application Next.js (App Router)
│   ├── favicon.ico        # Favicon du site
│   ├── globals.css        # Styles CSS globaux
│   ├── layout.tsx         # Composant de mise en page racine
│   └── page.tsx           # Composant de la page d'accueil
├── docs/                  # Documentation détaillée du projet
│   ├── index.md           # Point d'entrée de la documentation
│   ├── scripts.md         # Documentation des scripts disponibles
│   ├── translation-guide.md # Guide d'utilisation des fonctionnalités de traduction
│   └── project-structure.md # Ce document
├── next-env.d.ts          # Déclarations TypeScript pour Next.js
├── next.config.ts         # Configuration Next.js
├── node_modules/          # Dépendances (non suivies dans git)
├── package.json           # Métadonnées du projet et dépendances
├── pnpm-lock.yaml         # Fichier de verrouillage PNPM
├── pnpm-workspace.yaml    # Configuration de l'espace de travail PNPM
├── postcss.config.mjs     # Configuration PostCSS
├── public/                # Ressources statiques
├── scripts/               # Scripts utilitaires
│   ├── translate-en.ts    # Script pour traduire les fichiers Markdown en anglais
│   └── translate-fr.ts    # Script pour traduire les fichiers Markdown en français
├── tsconfig.json          # Configuration principale TypeScript
├── tsconfig.node.json     # Configuration TypeScript pour Node.js
└── tsconfig.scripts.json  # Configuration TypeScript pour les scripts
```

## Dossiers principaux

### `/app`

Ce dossier contient les composants principaux de l'application Next.js utilisant l'App Router. C'est ici que se trouve la logique principale de l'application.

- `layout.tsx` : Composant de mise en page racine qui enveloppe toutes les pages
- `page.tsx` : Composant de la page d'accueil
- `globals.css` : Styles CSS globaux appliqués à toute l'application
- `favicon.ico` : Icône du site web

### `/docs`

Ce dossier contient la documentation détaillée du projet, organisée en fichiers Markdown thématiques.

- `index.md` : Point d'entrée de la documentation avec une table des matières
- `SCRIPTS.md` : Documentation des scripts disponibles dans le projet
- `translation-guide.md` : Guide d'utilisation des fonctionnalités de traduction
- `project-structure.md` : Ce document décrivant la structure du projet

### `/public`

Ce dossier contient les ressources statiques qui seront servies à la racine du domaine. Placez ici les images, polices et autres fichiers statiques.

### `/scripts`

Ce dossier contient des scripts utilitaires pour faciliter le développement et la maintenance du projet.

- `translate-en.ts` : Script pour traduire les fichiers Markdown en anglais
- `translate-fr.ts` : Script pour traduire les fichiers Markdown en français

### `/.private`

Ce dossier contient des fichiers qui ne sont pas commités dans le dépôt Git. Il est utilisé pour stocker des données temporaires ou sensibles.

- `translations/fr/` : Dossier contenant les traductions françaises des fichiers Markdown

## Fichiers de configuration

### Configuration Next.js

- `next.config.ts` : Configuration principale de Next.js
- `next-env.d.ts` : Déclarations TypeScript pour Next.js

### Configuration TypeScript

- `tsconfig.json` : Configuration principale TypeScript pour le projet
- `tsconfig.node.json` : Configuration TypeScript spécifique aux environnements Node.js
- `tsconfig.scripts.json` : Configuration TypeScript pour les scripts utilitaires dans le dossier `scripts/`

### Configuration des outils de développement

- `.cspell.json` : Configuration pour la vérification orthographique
- `.editorconfig` : Configuration de l'éditeur pour un style de codage cohérent
- `.eslintrc.json` : Configuration ESLint pour le linting du code
- `.prettierrc` : Configuration Prettier pour le formatage du code
- `.vscode/settings.json` : Paramètres spécifiques à VS Code

### Configuration de gestion des paquets

- `package.json` : Métadonnées du projet et dépendances
- `pnpm-lock.yaml` : Fichier de verrouillage PNPM
- `pnpm-workspace.yaml` : Configuration de l'espace de travail PNPM
- `.npmrc` : Configuration NPM/PNPM

### Autres fichiers de configuration

- `postcss.config.mjs` : Configuration PostCSS pour le traitement CSS
- `.gitignore` : Modèles d'exclusion Git

## Conventions de nommage

- Les dossiers utilisent des noms en minuscules avec des tirets si nécessaire (ex: `next-radix-theme`)
- Les composants React utilisent PascalCase (ex: `Layout.tsx`, `Page.tsx`)
- Les fichiers de configuration utilisent généralement des noms en minuscules avec des points (ex: `.eslintrc.json`)
- Les fichiers cachés commencent par un point (ex: `.gitignore`)

## Organisation du code

- Les composants React sont organisés selon la structure de l'App Router de Next.js
- Les fichiers de documentation sont regroupés dans le dossier `/docs`
- Les scripts utilitaires sont regroupés dans le dossier `/scripts`
- Les ressources statiques sont placées dans le dossier `/public`
