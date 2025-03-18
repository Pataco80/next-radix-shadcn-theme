# Design du projet

Ce document décrit l'approche de design et les choix techniques du projet.

## Technologies principales

### Framework et Runtime

- **Next.js** (v15.x)

  - Framework React moderne
  - Support du SSR et SSG
  - Optimisation des performances
  - Routing basé sur les fichiers

- **React** (v19.x)
  - Hooks et composants fonctionnels
  - Gestion d'état moderne
  - Support TypeScript natif
  - Patterns de performance

### Styling et UI

- **Tailwind CSS** (v4.0.0)

  - Configuration via CSS natif
  - Variables CSS pour la personnalisation
  - Système de plugins extensible
  - Support des thèmes sombres/clairs

- **Shadcn UI** (version canary - compatible Tailwind v4)

  - Composants accessibles et réutilisables
  - Basé sur Radix UI
  - Personnalisation via CSS variables
  - Intégration Tailwind CSS v4

- **Radix UI** (v2.0.0)
  - Primitives de composants accessibles
  - API cohérente et prévisible
  - Support complet du clavier
  - Thèmes personnalisables

## Architecture CSS

### Système de couches

1. **@layer theme** (priorité la plus basse)

   - Variables globales
   - Configuration des couleurs
   - Variables Shadcn UI
   - Thèmes personnalisés

2. **@layer base**

   - Reset CSS
   - Styles de base
   - Typographie fluide
   - Styles Shadcn UI de base

3. **@layer components**

   - Composants personnalisés
   - Composants Shadcn UI
   - Patterns réutilisables
   - Layouts communs

4. **@layer utilities** (priorité la plus haute)
   - Classes utilitaires
   - Extensions Tailwind
   - Utilitaires personnalisés
   - Animations

### Système typographique fluide

- Basé sur le calculateur Utopia.fyi
- Échelle typographique responsive
- Variables CSS pour les tailles
- Classes utilitaires personnalisées

## Thèmes et personnalisation

### Variables CSS

```css
@layer theme {
	:root {
		/* Couleurs */
		--background: 0 0% 100%;
		--foreground: 240 10% 3.9%;

		/* Bordures et ombres */
		--border: 240 5.9% 90%;
		--ring: 240 5.9% 10%;

		/* Composants */
		--card: 0 0% 100%;
		--popover: 0 0% 100%;

		/* Autres */
		--radius: 0.5rem;
	}

	.dark {
		/* Thème sombre */
		--background: 240 10% 3.9%;
		--foreground: 0 0% 98%;
		/* ... autres variables */
	}
}
```

### Composants personnalisables

- Styles de base via Tailwind
- Surcharge via CSS variables
- Thèmes via classes CSS
- États via data-attributes

## Responsive Design

### Breakpoints

```css
/* Tailwind CSS v4 breakpoints */
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

### Container

- Centré par défaut
- Padding responsive
- Largeur max adaptative
- Marges fluides

## Performance

### Optimisations CSS

- Purge des styles inutilisés
- Minification en production
- Chargement critique
- Cache efficace

### Optimisations JavaScript

- Code splitting automatique
- Lazy loading des composants
- Prefetching intelligent
- Bundle size optimisé

## Accessibilité

### Standards

- WCAG 2.1 AA
- WAI-ARIA
- Keyboard navigation
- Screen readers

### Implémentation

- Composants accessibles
- Focus visible
- Alt text
- ARIA labels

## Documentation

### Style Guide

- BEM pour les classes personnalisées
- Tailwind pour les utilitaires
- CSS variables pour la configuration
- Commentaires explicatifs

### Exemples

```tsx
// Composant avec thème personnalisé
<Card className="dark:bg-slate-800">
	<CardHeader>
		<CardTitle className="text-fl-2xl">Titre</CardTitle>
		<CardDescription>Description</CardDescription>
	</CardHeader>
</Card>
```

## Workflow de développement

### Outils

- TypeScript pour le typage
- ESLint pour le linting
- Prettier pour le formatage
- Husky pour les hooks git

### Scripts

```bash
npm run dev     # Développement
npm run build   # Production
npm run lint    # Linting
npm run format  # Formatage
```
