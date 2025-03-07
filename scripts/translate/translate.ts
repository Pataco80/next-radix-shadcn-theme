#!/usr/bin/env node

/**
 * Script pour traduire des fichiers Markdown (.md) dans différentes langues
 * Usage: ts-node -P tsconfig.scripts.json scripts/translate/translate.ts <langue> [options] [fichiers]
 * Options:
 *   --all : traduit tous les fichiers Markdown prédéfinis
 *   --find : recherche et traduit tous les fichiers Markdown du projet
 * Exemples:
 *   ts-node -P tsconfig.scripts.json scripts/translate/translate.ts fr README.md CONTRIBUTING.md
 *   ts-node -P tsconfig.scripts.json scripts/translate/translate.ts en --all
 *   ts-node -P tsconfig.scripts.json scripts/translate/translate.ts fr --find
 */

import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import TRANSLATION_CONFIG, { languages } from './translate.config'

const execAsync = promisify(exec)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)
const mkdirAsync = promisify(fs.mkdir)

// Fonction pour vérifier si un package est installé
async function isPackageInstalled(packageName: string): Promise<boolean> {
	try {
		await execAsync(`npm list ${packageName} --depth=0`)
		return true
	} catch {
		return false
	}
}

// Fonction pour installer un package si nécessaire
async function installPackageIfNeeded(packageName: string): Promise<void> {
	if (!(await isPackageInstalled(packageName))) {
		console.log(`Installation de ${packageName}...`)
		await execAsync(`npm install --save-dev ${packageName}`)
		console.log(`${packageName} installé avec succès.`)
	}
}

// Type pour le résultat de traduction
type TranslationResult = {
	text: string
	from?: {
		language?: {
			iso?: string
		}
	}
}

// Fonction pour vérifier si un chemin doit être inclus ou exclu
function shouldIncludePath(filePath: string): boolean {
	// Vérifier si le chemin est dans un dossier exclu
	const isInExcludedDir = TRANSLATION_CONFIG.excludedDirs.some(
		dir => filePath.startsWith(`${dir}/`) || filePath === dir
	)

	// Vérifier si le chemin est dans un dossier spécifiquement exclu
	const isInExcludedSpecificDir = TRANSLATION_CONFIG.excludeSpecificDirs.some(
		dir => filePath.startsWith(`${dir}/`) || filePath === dir
	)

	// Vérifier si le chemin est dans un dossier spécifiquement inclus
	const isInIncludedDir = TRANSLATION_CONFIG.includeDirs.some(
		dir => filePath.startsWith(`${dir}/`) || filePath === dir
	)

	// Inclure si le chemin est spécifiquement inclus, ou s'il n'est pas exclu et pas spécifiquement exclu
	return isInIncludedDir || (!isInExcludedDir && !isInExcludedSpecificDir)
}

// Fonction pour trouver tous les fichiers Markdown dans le projet
async function findAllMarkdownFiles(): Promise<string[]> {
	try {
		// Construire la commande find avec les exclusions
		const excludePatterns = TRANSLATION_CONFIG.excludedDirs
			.map(dir => `-not -path "./${dir}/*"`)
			.join(' ')

		const { stdout } = await execAsync(
			`find . -type f -name "*.md" ${excludePatterns}`
		)

		// Traiter les résultats
		const allFiles = stdout
			.trim()
			.split('\n')
			.filter(file => file) // Filtrer les lignes vides
			.map(file => (file.startsWith('./') ? file.substring(2) : file)) // Supprimer le './' au début

		// Appliquer les règles d'inclusion/exclusion supplémentaires
		return allFiles.filter(file => shouldIncludePath(file))
	} catch (error) {
		console.error('Erreur lors de la recherche des fichiers Markdown:', error)
		return []
	}
}

// Fonction pour diviser le contenu en morceaux pour éviter les limites de l'API
function splitContentIntoChunks(
	content: string,
	maxChunkSize: number
): string[] {
	const chunks: string[] = []
	let currentChunk = ''
	const paragraphs = content.split(/\n\n+/)

	for (const paragraph of paragraphs) {
		// Si le paragraphe est trop grand, le diviser en lignes
		if (paragraph.length > maxChunkSize) {
			const lines = paragraph.split('\n')
			for (const line of lines) {
				// Si la ligne est trop grande, la diviser en morceaux
				if (line.length > maxChunkSize) {
					let i = 0
					while (i < line.length) {
						const chunk = line.substring(i, i + maxChunkSize)
						if (currentChunk.length + chunk.length + 1 > maxChunkSize) {
							chunks.push(currentChunk)
							currentChunk = chunk
						} else {
							currentChunk += (currentChunk ? '\n' : '') + chunk
						}
						i += maxChunkSize
					}
				} else if (currentChunk.length + line.length + 1 > maxChunkSize) {
					chunks.push(currentChunk)
					currentChunk = line
				} else {
					currentChunk += (currentChunk ? '\n' : '') + line
				}
			}
		} else if (currentChunk.length + paragraph.length + 2 > maxChunkSize) {
			chunks.push(currentChunk)
			currentChunk = paragraph
		} else {
			currentChunk += (currentChunk ? '\n\n' : '') + paragraph
		}
	}

	if (currentChunk) {
		chunks.push(currentChunk)
	}

	return chunks
}

// Fonction pour extraire et préserver les blocs de code
function extractAndPreserveCodeBlocks(content: string): {
	processedContent: string
	codeBlocks: string[]
} {
	const codeBlocks: string[] = []
	// Regex pour capturer les blocs de code
	const codeBlockRegex = /```[\s\S]*?```/gm

	// Remplacer les blocs de code par des marqueurs
	const processedContent = content.replace(codeBlockRegex, match => {
		const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`
		codeBlocks.push(match)
		return placeholder
	})

	return { processedContent, codeBlocks }
}

// Fonction pour corriger les liens Markdown après traduction
function fixMarkdownLinks(content: string): string {
	// Correction des liens Markdown qui sont souvent mal traduits
	// Exemple: [texte] (lien) devient [texte](lien)
	let fixedContent = content.replace(/\[([^\]]+)\]\s+\(([^)]+)\)/g, '[$1]($2)')

	// Correction des chemins relatifs avec des espaces
	// Exemple: (./ docs / index.md) devient (./docs/index.md)
	fixedContent = fixedContent.replace(
		/\(\.\/\s+([^/\s]+)\s+\/\s+([^)]+)\)/g,
		'(./$1/$2)'
	)

	// Correction des URLs avec des espaces
	// Exemple: (http: // localhost: 3000) devient (http://localhost:3000)
	fixedContent = fixedContent.replace(
		/\((https?):\/\/\s+([^/\s]+):\s+(\d+)\)/g,
		'($1://$2:$3)'
	)

	// Correction spécifique pour localhost
	fixedContent = fixedContent.replace(
		/\[http:\s*\/\/\s*localhost:\s*(\d+)\]/g,
		'[http://localhost:$1]'
	)

	return fixedContent
}

// Fonction pour restaurer les blocs de code
function restoreCodeBlocks(content: string, codeBlocks: string[]): string {
	let restoredContent = content

	// Remplacer les marqueurs par les blocs de code originaux
	for (let i = 0; i < codeBlocks.length; i++) {
		const placeholder = `__CODE_BLOCK_${i}__`
		restoredContent = restoredContent.replace(placeholder, codeBlocks[i])
	}

	return restoredContent
}

// Fonction pour traduire une liste spécifique de fichiers
async function translateFileList(
	files: string[],
	targetLanguage: string,
	outputDir: string
): Promise<void> {
	try {
		// Vérifier si @iamtraction/google-translate est installé
		await installPackageIfNeeded('@iamtraction/google-translate')
		await installPackageIfNeeded('ts-node')

		// Importer la bibliothèque après s'être assuré qu'elle est installée
		const { default: translate } = await import('@iamtraction/google-translate')

		if (files.length === 0) {
			console.error('Erreur: Aucun fichier spécifié pour la traduction.')
			return
		}

		// Filtrer pour ne garder que les fichiers Markdown
		const markdownFiles = files.filter(file => file.endsWith('.md'))

		if (markdownFiles.length === 0) {
			console.error(
				'Erreur: Aucun fichier Markdown (.md) trouvé parmi les fichiers spécifiés.'
			)
			return
		}

		if (markdownFiles.length !== files.length) {
			console.warn(
				`⚠️ Attention: Seuls les fichiers Markdown (.md) seront traduits. ${
					files.length - markdownFiles.length
				} fichier(s) ignoré(s).`
			)
		}

		// Créer le dossier de destination s'il n'existe pas
		await mkdirAsync(outputDir, { recursive: true })

		// Traduire chaque fichier Markdown
		for (const file of markdownFiles) {
			// Vérifier si le fichier existe
			if (!fs.existsSync(file)) {
				console.warn(`⚠️ Le fichier ${file} n'existe pas, il sera ignoré.`)
				continue
			}

			console.log(`Traduction de ${file} vers ${targetLanguage}...`)

			// Lire le contenu du fichier
			const content = await readFileAsync(file, 'utf8')

			// Extraire et préserver les blocs de code
			const { processedContent, codeBlocks } =
				extractAndPreserveCodeBlocks(content)

			// Diviser le contenu en morceaux pour éviter les limites de l'API
			const chunks = splitContentIntoChunks(processedContent, 5000)
			let translatedContent = ''

			// Traduire chaque morceau avec délai et mécanisme de nouvelle tentative
			for (let i = 0; i < chunks.length; i++) {
				console.log(`  Traduction du morceau ${i + 1}/${chunks.length}...`)

				// Ajouter un délai entre les requêtes pour éviter les limites de taux
				if (i > 0) {
					const waitTime = 2000 // 2 secondes
					console.log(
						`  Attente de ${
							waitTime / 1000
						} secondes pour éviter les limites de taux...`
					)
					await new Promise(resolve => setTimeout(resolve, waitTime))
				}

				// Essayer de traduire avec plusieurs tentatives
				let success = false
				let attempts = 0
				const maxAttempts = 3

				while (!success && attempts < maxAttempts) {
					try {
						attempts++
						const result = (await translate(chunks[i], {
							to: targetLanguage,
						})) as TranslationResult
						translatedContent += result.text
						success = true
					} catch (error) {
						if (attempts >= maxAttempts) {
							console.error(`  Échec après ${maxAttempts} tentatives: ${error}`)
							throw error
						}

						const waitTime = 5000 * attempts // Augmenter le temps d'attente à chaque tentative
						console.error(
							`  Erreur lors de la tentative ${attempts}/${maxAttempts}: ${error}`
						)
						console.log(
							`  Attente de ${waitTime / 1000} secondes avant de réessayer...`
						)
						await new Promise(resolve => setTimeout(resolve, waitTime))
					}
				}
			}

			// Restaurer les blocs de code dans le contenu traduit
			const finalContent = restoreCodeBlocks(translatedContent, codeBlocks)

			// Corriger les liens Markdown qui ont pu être mal traduits
			const fixedContent = fixMarkdownLinks(finalContent)

			// Déterminer le chemin de destination
			const fileName = path.basename(file)
			const destPath = path.join(outputDir, fileName)

			// Écrire le contenu traduit
			await writeFileAsync(destPath, fixedContent, 'utf8')
			console.log(
				`✅ Traduction de ${file} terminée. Fichier sauvegardé dans ${destPath}`
			)
		}

		console.log('Toutes les traductions sont terminées.')
	} catch (error) {
		console.error('Erreur lors de la traduction:', error)
		process.exit(1)
	}
}

// Fonction principale
async function main() {
	try {
		// Récupérer les arguments de la ligne de commande
		const args = process.argv.slice(2)

		if (args.length === 0) {
			console.error('Erreur: Langue cible non spécifiée.')
			console.log(
				'Usage: ts-node -P tsconfig.scripts.json scripts/translate/translate.ts <langue> [options] [fichiers]'
			)
			console.log('Langues disponibles:', languages.map(l => l.code).join(', '))
			process.exit(1)
		}

		// Récupérer la langue cible
		const langCode = args[0]

		// Vérifier si la langue est supportée
		const langSupported = languages.some(l => l.code === langCode)
		if (!langSupported) {
			console.error(`Erreur: Langue "${langCode}" non supportée.`)
			console.log('Langues disponibles:', languages.map(l => l.code).join(', '))
			process.exit(1)
		}

		// Récupérer la configuration spécifique à la langue
		const langConfig = TRANSLATION_CONFIG.getLanguageConfig(langCode)

		// Traiter les options
		const options = args.slice(1)

		if (options.includes('--all')) {
			// Traduire tous les fichiers prédéfinis
			console.log(
				`Traduction de tous les fichiers prédéfinis en ${langCode}...`
			)
			await translateFileList(
				TRANSLATION_CONFIG.defaultFiles,
				langConfig.targetLanguage,
				langConfig.outputDir
			)
		} else if (options.includes('--find')) {
			// Rechercher et traduire tous les fichiers Markdown
			console.log(
				`Recherche et traduction de tous les fichiers Markdown en ${langCode}...`
			)
			const files = await findAllMarkdownFiles()
			await translateFileList(
				files,
				langConfig.targetLanguage,
				langConfig.outputDir
			)
		} else {
			// Traduire les fichiers spécifiés
			const files = options
			if (files.length === 0) {
				console.error('Erreur: Aucun fichier spécifié pour la traduction.')
				process.exit(1)
			}
			await translateFileList(
				files,
				langConfig.targetLanguage,
				langConfig.outputDir
			)
		}
	} catch (error) {
		console.error('Erreur:', error)
		process.exit(1)
	}
}

// Exécuter la fonction principale
main()
