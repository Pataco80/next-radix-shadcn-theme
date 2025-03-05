# Guide de traduction

Ce guide explique comment utiliser les fonctionnalités de traduction intégrées dans ce projet pour traduire des fichiers Markdown.

## Prérequis

Le script de traduction utilise la bibliothèque `@iamtraction/google-translate` qui sera automatiquement installée lors de la première utilisation. Vous devez avoir `ts-node` installé pour exécuter le script TypeScript.

## Commandes disponibles

### Traduire des fichiers spécifiques en français

Pour traduire des fichiers Markdown spécifiques en français :

```bash
pnpm translate:fr <fichier1.md> <fichier2.md> ...
```

Exemple :

```bash
pnpm translate:fr README.md docs/scripts.md
```

### Traduire tous les fichiers prédéfinis en français

Pour traduire tous les fichiers Markdown prédéfinis dans la configuration en français :

```bash
pnpm translate:fr:all
```

Les fichiers prédéfinis sont configurés dans le script `scripts/translate-fr.ts` dans la section `TRANSLATION_CONFIG.defaultFiles`.

### Rechercher et traduire tous les fichiers Markdown en français

Pour rechercher automatiquement tous les fichiers Markdown du projet et les traduire en français :

```bash
pnpm translate:fr:find
```

Cette commande exclut automatiquement certains dossiers comme `node_modules`, `.git`, `.next`, `docs/en` et `docs/fr`.

### Traduire tous les fichiers du dossier docs en anglais

Pour traduire tous les fichiers Markdown du dossier `docs` en anglais :

```bash
pnpm translate:en
```

Cette commande traduit tous les fichiers Markdown trouvés dans le dossier `docs` (à l'exception des sous-dossiers `en` et `fr`) et les sauvegarde dans le dossier `docs/en/` en conservant la même structure de dossiers.

## Configuration

### Configuration pour la traduction en français

La configuration de traduction en français se trouve dans le fichier `scripts/translate-fr.ts` dans l'objet `TRANSLATION_CONFIG` :

```typescript
const TRANSLATION_CONFIG = {
	// Liste prédéfinie des fichiers Markdown à traduire avec --all
	defaultFiles: [
		'README.md',
		'.cursorrules.md',
		'docs/index.md',
		'docs/SCRIPTS.md',
		'docs/translation-guide.md',
		'docs/project-structure.md',
	],

	// Dossiers à exclure lors de la recherche de fichiers Markdown avec --find
	excludedDirs: [
		'node_modules',
		'.git',
		'.next',
		'.private',
		'docs/en',
		'docs/fr',
	],

	// Dossiers spécifiques à inclure lors de la recherche, même s'ils sont dans un dossier exclu
	includeDirs: ['docs'],

	// Dossiers spécifiques à exclure, même s'ils sont dans un dossier inclus
	excludeSpecificDirs: ['docs/en', 'docs/fr'],

	// Langue cible pour la traduction
	targetLanguage: 'fr',

	// Dossier de destination pour les traductions
	outputDir: path.join('docs', 'fr'),
}
```

### Configuration pour la traduction en anglais

La configuration de traduction en anglais se trouve dans le fichier `scripts/translate-en.ts` dans l'objet `TRANSLATION_CONFIG` :

```typescript
const TRANSLATION_CONFIG = {
	// Dossier source contenant les fichiers à traduire
	sourceDir: 'docs',

	// Langue cible pour la traduction
	targetLanguage: 'en',

	// Dossier de destination pour les traductions
	outputDir: path.join('docs', 'en'),
}
```

## Résultats de traduction

### Traductions en français

Tous les fichiers traduits en français sont sauvegardés dans le dossier `docs/fr/` avec le même nom que le fichier original.

Par exemple, si vous traduisez `README.md`, le résultat sera sauvegardé dans `docs/fr/README.md`.

### Traductions en anglais

Tous les fichiers traduits en anglais sont sauvegardés dans le dossier `docs/en/` en conservant la même structure de dossiers que dans le dossier `docs`.

Par exemple, si vous traduisez `docs/translation-guide.md`, le résultat sera sauvegardé dans `docs/en/translation-guide.md`.

## Limitations

- Le script ne traduit que les fichiers Markdown (.md)
- La qualité de la traduction dépend de l'API Google Translate
- Les fichiers volumineux sont divisés en morceaux pour éviter les limites de l'API

## Dépannage

Si vous rencontrez des problèmes avec le script de traduction :

1. Vérifiez que vous avez une connexion Internet active
2. Assurez-vous que `ts-node` est installé (`pnpm install -D ts-node`)
3. Vérifiez les permissions du script (`chmod +x scripts/translate-fr.ts` ou `chmod +x scripts/translate-en.ts`)
4. Consultez les messages d'erreur dans la console pour plus d'informations
