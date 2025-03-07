# Structure du projet

Ce document décrit en détail la structure du projet de thème Next.js Radix, expliquant le rôle de chaque dossier et fichier important.

## Aperçu

**Code_block_0**

## Fichiers principaux

### `/ App

Ce dossier contient les principaux composants de l'application suivante.js à l'aide de l'application du routeur. C'est là que se trouve la logique principale de l'application.

- `Layout.TSX`: composant de mise en page racine qui enveloppe toutes les pages
- `page.tsx`: composant de la page d'accueil
- `Globals.css`: styles CSS globaux appliqués à l'ensemble de l'application
- `favicon.ico`: icône de site Web

### `/ docs`

Ce dossier contient la documentation détaillée du projet, organisé dans des fichiers de démarrage thématique.

- `index.md`: point d'entrée de documentation avec une table des matières
- `scripts.md`: documentation des scripts disponibles dans le projet
- `traduction-guide.md`: guide de l'utilisateur pour les fonctionnalités de traduction
- `Project --tructure.md`: Ce document décrivant la structure du projet

### `/ public`

Ce fichier contient les ressources statiques qui seront servies à la racine du domaine. Placez les images, les polices et autres fichiers statiques ici.

### `/ scripts`

Ce fichier contient des scripts utilitaires pour faciliter le développement et la maintenance du projet.

- `Traduire-Fr.ts`: Script TypeCript pour traduire les fichiers de démarque en français

Fichiers de configuration ##

### Configuration Next.js

- `next.config.ts`: configuration principale de next.js
- `Next-env.d.ts`: Type TypeCript pour next.js

Configuration ### Typecript

- `tsconfig.json`: configuration de typeScript pour le projet

### Configuration des outils de développement

- `.cspell.json`: configuration pour la vérification de l'orthographe
- `.EditorConfig`: configuration de l'éditeur pour un style de cohérent
- `.eslintrc.json`: la configuration est pour la ligne de code
- `.prettierrc`: configuration plus jolie pour la mise en forme du code

### Configuration de gestion des packages

- `package.json`: métadonnées du projet et dépendances
- `pnpm-block.yaml`: fichier de verrouillage pnpm
- `PNPM-TORKSPACE.YAM
- `.npmrc`: configuration npm / pnpm

### Autres fichiers de configuration

- `postcss.config.mjs`: configuration postcss pour le traitement CSS
- `.gitignore`: modèles d'exclusion GIT

## Conventions de nom

-Les fichiers utilisent de minuscules noms avec des tirets si nécessaire (Ex: Next-Radix-Thème`) - React Composants Utilisez PascalCase (Ex: `Layout.TSX`,` Page.TSX`)

- Les fichiers de configuration utilisent généralement de minuscules noms avec des points (par exemple: `.eslintrc.json`)
- Les fichiers cachés commencent par un point (par exemple: `.gitignore`)

## Organisation du code

- Les composants de réaction sont organisés en fonction de la structure de l'application App de Next.js
- Les fichiers de documentation sont regroupés dans le dossier `/ docs`
- Les scripts utilitaires sont regroupés dans le dossier `/ scripts
- Des ressources statiques sont placées dans le fichier `/ public '
