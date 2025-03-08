# Scripts disponibles

Ce document décrit tous les scripts disponibles dans ce projet Next.js. Utilisez ces scripts avec votre gestionnaire de paquets préféré (npm, yarn, pnpm ou bun).

## Scripts de démarrage

- `dev`: Démarre le serveur de développement avec Turbopack

  ```bash
  pnpm dev
  ```

- `start`: Démarre l'application en mode production

  ```bash
  pnpm start
  ```

## Scripts de build

- `build`: Compile l'application pour la production

  ```bash
  pnpm build
  ```

- `rebuild`: Nettoie le dossier `.next` puis compile l'application

  ```bash
  pnpm rebuild
  ```

## Scripts de nettoyage

- `clean`: Supprime le dossier `.next`

  ```bash
  pnpm clean
  ```

- `clean:modules`: Supprime le dossier `node_modules`

  ```bash
  pnpm clean:modules
  ```

- `cache:clean`: Nettoie le cache de pnpm

  ```bash
  pnpm cache:clean
  ```

## Scripts de réinitialisation

- `refresh`: Nettoie le dossier `.next` puis démarre le serveur de développement

  ```bash
  pnpm refresh
  ```

- `reset`: Réinitialise complètement le projet (nettoie `.next`, supprime `node_modules` et réinstalle les dépendances)

  ```bash
  pnpm reset
  ```

## Scripts d'installation

- `update-lock`: Met à jour le fichier de verrouillage sans nettoyer le projet

  ```bash
  pnpm update-lock
  ```

- `install:timeout`: Installe les dépendances avec un délai réseau augmenté (pour les connexions lentes)

  ```bash
  pnpm install:timeout
  ```

- `install:registry`: Installe les dépendances en utilisant le registre npm officiel

  ```bash
  pnpm install:registry
  ```

## Scripts de linting

- `lint`: Exécute ESLint pour vérifier le code

  ```bash
  pnpm lint
  ```

## Scripts de traduction

> **Note importante** : Tous les scripts de traduction utilisent maintenant un système centralisé qui permet de traduire les fichiers Markdown dans différentes langues.
>
> **Préservation des blocs de code** : Le système est conçu pour préserver les blocs de code lors de la traduction. Si vous rencontrez des problèmes avec des blocs de code déformés dans les fichiers traduits, vous pouvez les corriger manuellement ou relancer la traduction.
>
> **Correction des liens Markdown** : Le système corrige automatiquement les liens Markdown qui peuvent être déformés pendant la traduction, comme les espaces ajoutés entre les crochets et les parenthèses.

### Script de traduction générique

- `translate`: Script de base pour traduire des fichiers dans n'importe quelle langue supportée

  ```bash
  pnpm translate <langue> [options] [fichiers]
  ```

  Exemple :

  ```bash
  pnpm translate fr README.md docs/index.md
  ```

### Traduction en français

- `translate:fr`: Traduit des fichiers Markdown spécifiques en français

  ```bash
  pnpm translate:fr <fichier1.md> <fichier2.md> ...
  ```

- `translate:fr:all`: Traduit tous les fichiers Markdown prédéfinis en français

  ```bash
  pnpm translate:fr:all
  ```

- `translate:fr:find`: Recherche et traduit tous les fichiers Markdown du projet en français

  ```bash
  pnpm translate:fr:find
  ```

### Traduction en anglais

- `translate:en`: Traduit des fichiers Markdown spécifiques en anglais

  ```bash
  pnpm translate:en <fichier1.md> <fichier2.md> ...
  ```

- `translate:en:all`: Traduit tous les fichiers Markdown prédéfinis en anglais

  ```bash
  pnpm translate:en:all
  ```

- `translate:en:find`: Recherche et traduit tous les fichiers Markdown du projet en anglais

  ```bash
  pnpm translate:en:find
  ```

Les fichiers traduits en français sont sauvegardés dans le dossier `docs/fr/`, et les fichiers traduits en anglais dans le dossier `docs/en/`.

### Ajout de nouvelles langues

Pour ajouter une nouvelle langue de traduction, il suffit de modifier le fichier `scripts/translate/translate.config.ts` en ajoutant la langue dans le tableau `languages`. Par exemple, pour ajouter l'espagnol :

```typescript
export const languages = [
	{ code: 'fr', name: 'Français', dir: 'fr' },
	{ code: 'en', name: 'English', dir: 'en' },
	{ code: 'es', name: 'Español', dir: 'es' },
]
```

Le système est conçu pour gérer automatiquement les dossiers de sortie et les exclusions. Lorsque vous ajoutez une nouvelle langue :

1. Un nouveau dossier de sortie est créé automatiquement (`docs/es/` dans l'exemple ci-dessus)
2. Ce dossier est automatiquement exclu lors de la recherche de fichiers à traduire pour éviter les traductions en boucle
3. Aucune autre configuration n'est nécessaire

Ensuite, vous pouvez utiliser le script générique pour traduire dans cette nouvelle langue :

```bash
pnpm translate es --all
```
