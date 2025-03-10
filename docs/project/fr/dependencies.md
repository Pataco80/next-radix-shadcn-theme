# Dépendances du projet

Ce document décrit les principales dépendances utilisées dans le projet Next.js Radix Theme et leur rôle.

## Dépendances de production

### Framework et UI

- **next**: Framework React pour le développement d'applications web
- **react**: Bibliothèque JavaScript pour construire des interfaces utilisateur
- **react-dom**: Package pour manipuler le DOM dans les applications React

### Utilitaires

- **ts-node**: Exécution de TypeScript directement sans compilation préalable

### Traduction (en attente)

- **@iamtraction/google-translate**: Bibliothèque pour l'intégration avec l'API Google Translate
  > **Note**: Cette dépendance est actuellement en attente des travaux qui seront effectués sur la branche `feature/translate`. Elle sera utilisée pour automatiser la traduction de la documentation du français vers l'anglais.

## Dépendances de développement

### Linting et formatage

- **eslint**: Outil d'analyse statique pour identifier les problèmes dans le code JavaScript
- **eslint-config-next**: Configuration ESLint recommandée pour les projets Next.js
- **eslint-config-prettier**: Désactive les règles ESLint qui pourraient entrer en conflit avec Prettier

### TypeScript

- **typescript**: Langage de programmation qui ajoute des types statiques à JavaScript
- **@types/node**: Types TypeScript pour Node.js
- **@types/react**: Types TypeScript pour React
- **@types/react-dom**: Types TypeScript pour React DOM

### CSS et UI

- **tailwindcss**: Framework CSS utilitaire
- **@tailwindcss/postcss**: Plugins PostCSS pour Tailwind CSS

### Analyse de bundle et dépendances

- **@next/bundle-analyzer**: Plugin officiel Next.js pour analyser les bundles JavaScript
  > **Utilisation**: Exécutez `pnpm analyze` pour générer une analyse visuelle du bundle de l'application
- **bundle-buddy**: Outil complémentaire pour analyser les duplications dans les bundles JavaScript
- **depcheck**: Outil pour identifier les dépendances inutilisées dans le projet
  > **Utilisation**: Exécutez `pnpm check-deps` pour obtenir une liste des dépendances non utilisées

## Scripts disponibles

### Analyse des bundles

```bash
# Analyse le bundle de l'application
pnpm analyze
```

Ce script génère une analyse visuelle du bundle de l'application dans votre navigateur, vous permettant d'identifier :

- La taille des différents modules
- Les dépendances les plus volumineuses
- Les opportunités d'optimisation
- La composition détaillée de chaque bundle

### Vérification des dépendances inutilisées

```bash
# Vérifie les dépendances inutilisées
pnpm check-deps
```

Ce script analyse le code source du projet et identifie :

- Les dépendances de production inutilisées
- Les dépendances de développement inutilisées
- Les fichiers qui pourraient être importés mais ne le sont pas

### Configuration de l'analyseur de bundle

L'analyseur de bundle est configuré dans le fichier `next.config.mjs` :

```javascript
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
	// Configuration Next.js
}

export default withBundleAnalyzer(nextConfig)
```

### Configuration de depcheck

Depcheck est configuré dans le fichier `.depcheckrc.json` :

```json
{
	"ignorePatterns": ["node_modules", ".next", "public", "*.d.ts"],
	"ignoreMatches": [
		"@types/*",
		"eslint-*",
		"@eslint/*",
		"typescript",
		"@next/bundle-analyzer",
		"tailwindcss",
		"@tailwindcss/*"
	],
	"specials": [
		"bin",
		"eslint",
		"tslint",
		"webpack",
		"jest",
		"mocha",
		"react",
		"next"
	]
}
```
