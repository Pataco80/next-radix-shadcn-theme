#!/usr/bin/env node

/**
 * Script pour traduire des fichiers Markdown (.md) en anglais
 * Usage: ts-node scripts/translate-en.ts <fichier1.md> <fichier2.md> ...
 * Usage: ts-node scripts/translate-en.ts --all (pour traduire tous les fichiers .md prédéfinis)
 * Usage: ts-node scripts/translate-en.ts --find (pour trouver et traduire tous les fichiers .md du projet)
 * Exemple: ts-node scripts/translate-en.ts README.md CONTRIBUTING.md
 */

import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)
const mkdirAsync = promisify(fs.mkdir)

// Configuration des dossiers pour la recherche de fichiers Markdown
const TRANSLATION_CONFIG = {
	// Liste prédéfinie des fichiers Markdown à traduire avec --all
	defaultFiles: [
		'README.md',
		'.cursorrules.md',
		'docs/index.md',
		'docs/translation-guide.md',
		'docs/scripts.md',
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
	targetLanguage: 'en',

	// Dossier de destination pour les traductions
	outputDir: path.join('docs', 'en'),
}

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

// Fonction pour traduire une liste spécifique de fichiers
async function translateFileList(files: string[]): Promise<void> {
	try {
		// Vérifier si @iamtraction/google-translate est installé
		await installPackageIfNeeded('@iamtraction/google-translate')
		await installPackageIfNeeded('ts-node')

		// Importer la bibliothèque après s'être assuré qu'elle est installée

		const translate = require('@iamtraction/google-translate')

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
		await mkdirAsync(TRANSLATION_CONFIG.outputDir, { recursive: true })

		// Traduire chaque fichier Markdown
		for (const file of markdownFiles) {
			// Vérifier si le fichier existe
			if (!fs.existsSync(file)) {
				console.warn(`⚠️ Le fichier ${file} n'existe pas, il sera ignoré.`)
				continue
			}

			console.log(`Traduction de ${file} vers l'anglais...`)

			// Lire le contenu du fichier
			const content = await readFileAsync(file, 'utf8')

			// Diviser le contenu en morceaux pour éviter les limites de l'API
			const chunks = splitContentIntoChunks(content, 5000)
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
							to: TRANSLATION_CONFIG.targetLanguage,
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

			// Déterminer le chemin de destination
			const fileName = path.basename(file)
			const destPath = path.join(TRANSLATION_CONFIG.outputDir, fileName)

			// Écrire le contenu traduit
			await writeFileAsync(destPath, translatedContent, 'utf8')
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
async function translateFiles(): Promise<void> {
	try {
		// Récupérer les fichiers à traduire depuis les arguments
		const args = process.argv.slice(2)

		// Vérifier si l'option --find est spécifiée pour trouver tous les fichiers Markdown
		if (args.includes('--find') || args.includes('-f')) {
			console.log(
				'Recherche de tous les fichiers Markdown (.md) dans le projet...'
			)
			const allMarkdownFiles = await findAllMarkdownFiles()
			console.log(`${allMarkdownFiles.length} fichier(s) Markdown trouvé(s).`)

			if (allMarkdownFiles.length > 0) {
				console.log('Fichiers trouvés:')
				allMarkdownFiles.forEach(file => console.log(`  - ${file}`))
				await translateFileList(allMarkdownFiles)
			}
			return
		}

		// Vérifier si l'option --all est spécifiée
		if (args.includes('--all') || args.includes('-a')) {
			console.log(
				'Mode traduction de tous les fichiers Markdown prédéfinis activé.'
			)
			await translateFileList(TRANSLATION_CONFIG.defaultFiles)
			return
		}

		if (args.length === 0) {
			console.error('Erreur: Aucun fichier spécifié pour la traduction.')
			console.log(
				'Usage: ts-node scripts/translate-en.ts <fichier1.md> <fichier2.md> ...'
			)
			console.log(
				'Usage: ts-node scripts/translate-en.ts --all (pour traduire tous les fichiers .md prédéfinis)'
			)
			console.log(
				'Usage: ts-node scripts/translate-en.ts --find (pour trouver et traduire tous les fichiers .md du projet)'
			)
			console.log('Fichiers Markdown prédéfinis:')
			TRANSLATION_CONFIG.defaultFiles.forEach(file =>
				console.log(`  - ${file}`)
			)
			process.exit(1)
		}

		// Traduire les fichiers spécifiés
		await translateFileList(args)
	} catch (error) {
		console.error('Erreur lors de la traduction:', error)
		process.exit(1)
	}
}

// Fonction pour diviser le contenu en morceaux
function splitContentIntoChunks(
	content: string,
	maxChunkSize: number
): string[] {
	const chunks: string[] = []
	let currentChunk = ''

	const lines = content.split('\n')

	for (const line of lines) {
		if (currentChunk.length + line.length + 1 > maxChunkSize) {
			chunks.push(currentChunk)
			currentChunk = line
		} else {
			currentChunk += (currentChunk ? '\n' : '') + line
		}
	}

	if (currentChunk) {
		chunks.push(currentChunk)
	}

	return chunks
}

// Exécuter la fonction principale
translateFiles().catch(error => {
	console.error('Erreur non gérée:', error)
	process.exit(1)
})
