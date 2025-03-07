import path from 'path'

// Définition des langues supportées
export const languages = [
	{ code: 'fr', name: 'Français', dir: 'fr' },
	{ code: 'en', name: 'English', dir: 'en' },
]

// Génération dynamique des dossiers à exclure pour chaque langue
const generateLanguageExcludeDirs = () => {
	return languages.map(lang => `docs/${lang.dir}`)
}

// Configuration pour la traduction
const TRANSLATION_CONFIG = {
	// Liste prédéfinie des fichiers Markdown à traduire avec --all
	defaultFiles: [
		'README.md',
		'.cursorrules.md',
		'docs/index.md',
		'docs/translation-guide.md',
		'docs/scripts.md',
		'docs/project-structure.md',
		'docs/project-design.md',
	],

	// Dossiers à exclure lors de la recherche de fichiers Markdown avec --find
	excludedDirs: [
		'node_modules',
		'.git',
		'.next',
		'.private',
		...generateLanguageExcludeDirs(),
	],

	// Dossiers spécifiques à inclure lors de la recherche, même s'ils sont dans un dossier exclu
	includeDirs: ['docs'],

	// Dossiers spécifiques à exclure, même s'ils sont dans un dossier inclus
	excludeSpecificDirs: generateLanguageExcludeDirs(),

	// Fonction pour obtenir la configuration spécifique à une langue
	getLanguageConfig: (langCode: string) => {
		const lang = languages.find(l => l.code === langCode)
		if (!lang) {
			throw new Error(`Langue non supportée: ${langCode}`)
		}

		return {
			targetLanguage: lang.code,
			outputDir: path.join('docs', lang.dir),
		}
	},
}

export default TRANSLATION_CONFIG
