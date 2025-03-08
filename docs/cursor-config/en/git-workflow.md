# Git-flow Configuration and Conventions

This document describes the Git conventions and workflow to follow for application development.

## Git-flow Branch Structure

Use the following Git-flow branch structure:

- `main`: stable production branch
- `develop`: main development branch
- `feature/*`: branches for new features (e.g., `feature/auth-system`)
- `bugfix/*`: branches for bug fixes
- `release/*`: branches for version preparation
- `hotfix/*`: branches for urgent production fixes

## Commit Conventions

- Use commit messages in English, in present tense
- Prefix messages with the type of change:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code restructuring
  - `test:` for tests
  - `chore:` for maintenance tasks

Examples:

```
feat: add user authentication system
fix: resolve issue with password reset
docs: update API documentation
style: format code according to style guide
refactor: simplify user registration process
test: add unit tests for auth service
chore: update dependencies
```

## Git Workflow

- Always pull before pushing
- Create a Pull Request for any branch to be merged with `develop`
- Request a code review before merging
- Regularly rebase feature branches on `develop`

## Git-flow Initialization

To initialize Git-flow in a new project:

```bash
# Initialize Git
git init
git branch -m main

# Create the develop branch
git checkout -b develop
```

## Branch Creation

### New Feature

```bash
# From develop
git checkout develop
git pull
git checkout -b feature/feature-name
```

### Bug Fix

```bash
# From develop
git checkout develop
git pull
git checkout -b bugfix/bug-description
```

### Version Preparation

```bash
# From develop
git checkout develop
git pull
git checkout -b release/v1.0.0
```

### Urgent Production Fix

```bash
# From main
git checkout main
git pull
git checkout -b hotfix/issue-description
```

## Branch Merging

### Merging a Feature into develop

```bash
# From the feature branch
git checkout feature/feature-name
git pull
git rebase develop
# Resolve conflicts if necessary
git push -f

# Create a Pull Request on GitHub/GitLab/etc.
# After approval, merge the Pull Request
```

### Merging a Release into main and develop

```bash
# From the release branch
git checkout release/v1.0.0
git pull

# Merge into main
git checkout main
git pull
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"
git push --follow-tags

# Merge into develop
git checkout develop
git pull
git merge --no-ff release/v1.0.0
git push

# Delete the release branch
git branch -d release/v1.0.0
```

## Best Practices

- Make frequent and atomic commits
- Write descriptive commit messages
- Don't commit generated files or dependencies
- Use `.gitignore` to exclude irrelevant files
- Carefully resolve merge conflicts
- Don't push broken code to main branches

## Recommended Git Configuration

```bash
# Configure name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Configure editor
git config --global core.editor "code --wait"

# Configure rebase by default for pull
git config --global pull.rebase true

# Configure line ending checks
git config --global core.autocrlf input
```

## Git Hooks

Use Git hooks to automate checks before commits:

- Use Husky to configure Git hooks
- Run linters and tests before each commit
- Check commit message format

Example Husky configuration in `package.json`:

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
