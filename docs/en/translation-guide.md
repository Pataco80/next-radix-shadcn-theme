# Translation guide

This guide explains how to use the integrated translation features in this project to translate Markdown files.

## Prerequis

The translation script uses the `@iamtraction/google-translate` library which will be automatically installed during the first use. You must have `ts-node` installed to execute the TypeScript script.

## Available commands

### Translate specific files in French

To translate specific Markdown files in French:

```bash
pnpm translate:fr <file1.md> <file2.md> ...
```

Example:

```bash
pnpm translate:fr README.md docs/scripts.md
```

### Translate all predefined files in French

To translate all predefined Markdown files in French configuration:

```bash
pnpm translate:fr:all
```

The predefined files are configured in the scripts/translate-fr script.

### Search and translate all Markdown files in French

To automatically search for all the Markdown files on the project and translate them into French:

```bash
pnpm translate:fr:find
```

This command automatically excludes certain files such as `node_modules`, `.git`, `.next`, `docs/en` and `docs/fr`.

### Translate all files in the Docs folder in English

To translate all the Markdown files of the `docs` folder in English:

```bash
pnpm translate:en
```

This command translates all the Markdown files found in the `docs` folder (with the exception of the sub-folders `en` and `fr`) and save them in the `docs/en/` folder, keeping the same folder structure.

## Configuration

### Configuration for French translation

The French translation configuration is found in the file `scripts/translate-fr.ts` in the object `TRANSLATION_CONFIG`:

```typescript
const TRANSLATION_CONFIG = {
	// Predefined list of Markdown files to translate with --all
	defaultFiles: [
		'README.md',
		'.cursorrules.md',
		'docs/index.md',
		'docs/SCRIPTS.md',
		'docs/translation-guide.md',
		'docs/project-structure.md',
	],

	// folders to be excluded when searching for Markdown files with --find
	excludedDirs: [
		'node_modules',
		'.git',
		'.next',
		'.private',
		'docs/en',
		'docs/fr',
	],

	// Specific files to include during research, even if they are in an excluded file
	includeDirs: ['docs'],

	// specific files to be excluded, even if they are in a file included
	excludeSpecificDirs: ['docs/en', 'docs/fr'],

	// Target language for translation
	targetLanguage: 'fr',

	// Destination file for translations
	outputDir: path.join('docs', 'fr'),
}
```

### Configuration for English translation

The English translation configuration is found in the file `scripts/translate-en.ts` in the object `TRANSLATION_CONFIG`:

```typescript
const TRANSLATION_CONFIG = {
	// Source folder containing the files to be translated
	sourceDir: 'docs',

	// Target language for translation
	targetLanguage: 'en',

	// Destination file for translations
	outputDir: path.join('docs', 'en'),
}
```

## Translation results

### Translations in French

All files translated into French are saved in the `docs/fr/` folder with the same name as the original file.

For example, if you translate `README.md`, the result will be saved in `docs/fr/README.md`.

### Translations in English

All files translated into English are saved in the `docs/en/` folder, keeping the same folder structure as in the `docs` folder.

For example, if you translate `docs/translation-guide.md`, the result will be saved in `docs/en/translation-guide.md`.

## Limitations

- The script only translates Markdown files (.md)
- The quality of the translation depends on the Google Translate API
- bulky files are divided into pieces to avoid the limits of the API

## Troubleshooting

If you encounter problems with the translation script:

1. Check that you have an active internet connection
2. Make sure that `ts-node` is installed (`pnpm install -D ts-node`)
3. Check the script permissions (`chmod +x scripts/translate-fr.ts`)
4. Consult error messages in the console for more information
