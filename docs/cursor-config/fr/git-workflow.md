# Configuration Git-flow et conventions

Ce document décrit les conventions et le workflow Git à suivre pour le développement d'applications.

## Structure de branches Git-flow

Utiliser la structure de branches Git-flow suivante :

- `main` : branche de production stable
- `develop` : branche principale de développement
- `feature/*` : branches pour les nouvelles fonctionnalités (ex: `feature/auth-system`)
- `bugfix/*` : branches pour les corrections de bugs
- `release/*` : branches pour la préparation des versions
- `hotfix/*` : branches pour les corrections urgentes en production

## Conventions pour les commits

- Utiliser des messages de commit en anglais, au présent
- Préfixer les messages avec le type de modification :
  - `feat:` pour les nouvelles fonctionnalités
  - `fix:` pour les corrections de bugs
  - `docs:` pour les modifications de documentation
  - `style:` pour les modifications de formatage
  - `refactor:` pour les restructurations de code
  - `test:` pour les tests
  - `chore:` pour les tâches de maintenance

Exemples :

```
feat: add user authentication system
fix: resolve issue with password reset
docs: update API documentation
style: format code according to style guide
refactor: simplify user registration process
test: add unit tests for auth service
chore: update dependencies
```

## Workflow Git

- Toujours tirer (pull) avant de pousser (push)
- Créer une Pull Request pour toute branche à fusionner avec `develop`
- Demander une revue de code avant la fusion
- Rebaser (rebase) les branches de fonctionnalités sur `develop` régulièrement

## Initialisation de Git-flow

Pour initialiser Git-flow dans un nouveau projet :

```bash
# Initialiser Git
git init
git branch -m main

# Créer la branche develop
git checkout -b develop
```

## Création de branches

### Nouvelle fonctionnalité

```bash
# Depuis develop
git checkout develop
git pull
git checkout -b feature/nom-de-la-fonctionnalite
```

### Correction de bug

```bash
# Depuis develop
git checkout develop
git pull
git checkout -b bugfix/description-du-bug
```

### Préparation de version

```bash
# Depuis develop
git checkout develop
git pull
git checkout -b release/v1.0.0
```

### Correction urgente en production

```bash
# Depuis main
git checkout main
git pull
git checkout -b hotfix/description-du-probleme
```

## Fusion de branches

### Fusion d'une fonctionnalité dans develop

```bash
# Depuis la branche feature
git checkout feature/nom-de-la-fonctionnalite
git pull
git rebase develop
# Résoudre les conflits si nécessaire
git push -f

# Créer une Pull Request sur GitHub/GitLab/etc.
# Après approbation, fusionner la Pull Request
```

### Fusion d'une version dans main et develop

```bash
# Depuis la branche release
git checkout release/v1.0.0
git pull

# Fusionner dans main
git checkout main
git pull
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"
git push --follow-tags

# Fusionner dans develop
git checkout develop
git pull
git merge --no-ff release/v1.0.0
git push

# Supprimer la branche release
git branch -d release/v1.0.0
```

## Bonnes pratiques

- Faire des commits fréquents et atomiques
- Écrire des messages de commit descriptifs
- Ne pas commiter de fichiers générés ou de dépendances
- Utiliser `.gitignore` pour exclure les fichiers non pertinents
- Résoudre les conflits de fusion avec soin
- Ne pas pousser de code cassé sur les branches principales

## Configuration Git recommandée

```bash
# Configurer le nom et l'email
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"

# Configurer l'éditeur
git config --global core.editor "code --wait"

# Configurer le rebase par défaut pour pull
git config --global pull.rebase true

# Configurer la vérification des fins de ligne
git config --global core.autocrlf input
```

## Hooks Git

Utiliser des hooks Git pour automatiser les vérifications avant les commits :

- Utiliser Husky pour configurer les hooks Git
- Exécuter les linters et les tests avant chaque commit
- Vérifier le format des messages de commit

Exemple de configuration Husky dans `package.json` :

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged",
			"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
		}
	},
	"lint-staged": {
		"*.{ts,tsx}": ["eslint --fix", "prettier --write"],
		"*.{css,scss}": ["prettier --write"]
	}
}
```
