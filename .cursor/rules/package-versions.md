# Gestion des versions des packages

Ce document définit les règles et conventions pour la gestion des versions des packages dans le projet.

## Versions principales

### Framework et Runtime

- **Next.js** : v15.2.1
- **React** : v19.0.0
- **TypeScript** : v5.8.2

### UI et Styling

- **Tailwind CSS** : v4.0.13
- **Tailwind CSS Animate** : v1.0.7
- **Shadcn UI** : version canary (compatible Tailwind v4)
- **Radix UI** : v2.0.0

## Installation des dépendances

### Installation standard

```bash
pnpm install <package-name>
```

### Configuration PostCSS

Le projet utilise une configuration PostCSS spécifique pour la compatibilité avec `next/font` :

```javascript
// postcss.config.mjs
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import animate from 'tailwindcss-animate'

const config = {
	plugins: {
		tailwindcss,
		autoprefixer,
		'tailwindcss-animate': animate,
	},
}

export default config
```

## Règles de gestion des versions

1. **Compatibilité React 19**

   - Privilégier les packages compatibles nativement avec React 19
   - Documenter les packages nécessitant des configurations spéciales
   - Suivre les mises à jour des packages pour la compatibilité

2. **Mises à jour de sécurité**

   - Appliquer immédiatement les mises à jour de sécurité
   - Tester la compatibilité après chaque mise à jour
   - Documenter les changements dans le CHANGELOG

3. **Gestion des conflits**

   - Identifier les conflits de versions
   - Documenter les solutions temporaires
   - Planifier la résolution des conflits

4. **Documentation**
   - Maintenir à jour la liste des versions
   - Documenter les procédures d'installation spéciales
   - Noter les dépendances obsolètes

## Procédures de mise à jour

1. **Vérification préalable**

   ```bash
   pnpm outdated
   ```

2. **Mise à jour des dépendances**

   ```bash
   pnpm update
   ```

3. **Vérification post-mise à jour**
   ```bash
   pnpm run test
   pnpm run build
   ```

## Bonnes pratiques

- Maintenir un fichier `pnpm-lock.yaml` dans le contrôle de version
- Utiliser des versions fixes plutôt que des plages de versions
- Documenter les raisons des choix de versions
- Tester après chaque mise à jour de dépendances
- Vérifier la compatibilité avec `next/font` après chaque mise à jour
