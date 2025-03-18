# Système Fluide

Ce document décrit le système fluide utilisé dans le projet, basé sur Tailwind CSS v4 et le calculateur Utopia.

## Introduction

Le système fluide permet de créer des interfaces qui s'adaptent de manière fluide à toutes les tailles d'écran, en utilisant des valeurs CSS calculées dynamiquement.

### Principes clés

1. **Échelle fluide** : Les tailles évoluent proportionnellement
2. **Pas de breakpoints durs** : Transitions douces
3. **Maintenabilité** : Variables CSS réutilisables
4. **Performance** : Calculs optimisés

## Configuration

### Variables de base

```css
@layer theme {
	:root {
		/* Breakpoints de référence */
		--fl-min-width: 320px;
		--fl-max-width: 1440px;

		/* Échelles typographiques */
		--fl-min-scale: 1.125;
		--fl-max-scale: 1.25;

		/* Tailles de base */
		--fl-min-base: 16px;
		--fl-max-base: 18px;
	}
}
```

### Fonction de calcul

```css
@layer theme {
  /* Fonction de calcul fluide */
  @function fluid-calc($min, $max) {
    return clamp(
      #{$min},
      #{$min} + (#{$max} - #{$min}) *
      ((100vw - var(--fl-min-width)) /
      (var(--fl-max-width) - var(--fl-min-width))),
      #{$max}
    );
  }
}
```

## Typographie

### Échelle typographique

```css
@layer theme {
	:root {
		/* Tailles de texte fluides */
		--fl-text-xs: fluid-calc(0.75rem, 0.875rem);
		--fl-text-sm: fluid-calc(0.875rem, 1rem);
		--fl-text-base: fluid-calc(1rem, 1.125rem);
		--fl-text-lg: fluid-calc(1.125rem, 1.25rem);
		--fl-text-xl: fluid-calc(1.25rem, 1.5rem);
		--fl-text-2xl: fluid-calc(1.5rem, 1.875rem);
		--fl-text-3xl: fluid-calc(1.875rem, 2.25rem);
		--fl-text-4xl: fluid-calc(2.25rem, 3rem);

		/* Line heights fluides */
		--fl-leading-none: fluid-calc(1, 1);
		--fl-leading-tight: fluid-calc(1.25, 1.375);
		--fl-leading-snug: fluid-calc(1.375, 1.5);
		--fl-leading-normal: fluid-calc(1.5, 1.75);
		--fl-leading-relaxed: fluid-calc(1.625, 2);
	}
}
```

### Utilisation

```css
@layer base {
	/* Styles de base */
	body {
		font-size: var(--fl-text-base);
		line-height: var(--fl-leading-normal);
	}

	h1 {
		font-size: var(--fl-text-4xl);
		line-height: var(--fl-leading-tight);
	}

	h2 {
		font-size: var(--fl-text-3xl);
		line-height: var(--fl-leading-snug);
	}
}
```

## Espacement

### Variables d'espacement

```css
@layer theme {
	:root {
		/* Espacements fluides */
		--fl-space-1: fluid-calc(0.25rem, 0.5rem);
		--fl-space-2: fluid-calc(0.5rem, 0.75rem);
		--fl-space-3: fluid-calc(0.75rem, 1rem);
		--fl-space-4: fluid-calc(1rem, 1.5rem);
		--fl-space-5: fluid-calc(1.5rem, 2rem);
		--fl-space-6: fluid-calc(2rem, 3rem);
		--fl-space-7: fluid-calc(3rem, 4rem);
		--fl-space-8: fluid-calc(4rem, 6rem);
	}
}
```

### Classes utilitaires

```css
@layer utilities {
	/* Marges */
	.m-fl-1 {
		margin: var(--fl-space-1);
	}
	.m-fl-2 {
		margin: var(--fl-space-2);
	}
	/* etc... */

	/* Padding */
	.p-fl-1 {
		padding: var(--fl-space-1);
	}
	.p-fl-2 {
		padding: var(--fl-space-2);
	}
	/* etc... */

	/* Gap */
	.gap-fl-1 {
		gap: var(--fl-space-1);
	}
	.gap-fl-2 {
		gap: var(--fl-space-2);
	}
	/* etc... */
}
```

## Grille

### Configuration

```css
@layer theme {
	:root {
		/* Configuration de la grille */
		--fl-grid-columns: 12;
		--fl-grid-gap: var(--fl-space-4);
		--fl-container-padding: var(--fl-space-4);

		/* Largeurs fluides */
		--fl-container-width: fluid-calc(
			calc(var(--fl-min-width) - 2 * var(--fl-container-padding)),
			calc(var(--fl-max-width) - 2 * var(--fl-container-padding))
		);
	}
}
```

### Classes de grille

```css
@layer components {
	.container-fl {
		width: 100%;
		max-width: var(--fl-container-width);
		margin-left: auto;
		margin-right: auto;
		padding-left: var(--fl-container-padding);
		padding-right: var(--fl-container-padding);
	}

	.grid-fl {
		display: grid;
		gap: var(--fl-grid-gap);
		grid-template-columns: repeat(var(--fl-grid-columns), 1fr);
	}
}
```

## Composants

### Exemple de carte

```css
@layer components {
	.card-fl {
		padding: var(--fl-space-4);
		border-radius: var(--radius);
		background: var(--card);

		/* Typographie */
		& h3 {
			font-size: var(--fl-text-xl);
			line-height: var(--fl-leading-snug);
			margin-bottom: var(--fl-space-2);
		}

		& p {
			font-size: var(--fl-text-base);
			line-height: var(--fl-leading-normal);
		}
	}
}
```

### Exemple de bouton

```css
@layer components {
	.button-fl {
		padding: var(--fl-space-2) var(--fl-space-4);
		font-size: var(--fl-text-base);
		line-height: var(--fl-leading-normal);
		border-radius: var(--radius);

		&.button-fl--large {
			padding: var(--fl-space-3) var(--fl-space-6);
			font-size: var(--fl-text-lg);
		}
	}
}
```

## Intégration avec Tailwind

### Configuration Tailwind

```js
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			spacing: {
				'fl-1': 'var(--fl-space-1)',
				'fl-2': 'var(--fl-space-2)',
				// etc...
			},
			fontSize: {
				'fl-xs': 'var(--fl-text-xs)',
				'fl-sm': 'var(--fl-text-sm)',
				// etc...
			},
			lineHeight: {
				'fl-none': 'var(--fl-leading-none)',
				'fl-tight': 'var(--fl-leading-tight)',
				// etc...
			},
		},
	},
}
```

### Utilisation avec Tailwind

```tsx
// Exemple de composant React
function Card({ title, content }) {
	return (
		<div
			className="
      p-fl-4 rounded-lg bg-card
      space-y-fl-2
    "
		>
			<h3
				className="
        text-fl-xl
        leading-fl-snug
      "
			>
				{title}
			</h3>
			<p
				className="
        text-fl-base
        leading-fl-normal
      "
			>
				{content}
			</p>
		</div>
	)
}
```

## Performance

### Optimisations

1. Utilisation de `clamp()` pour éviter les media queries
2. Variables CSS pour la réutilisation
3. Calculs optimisés à la compilation
4. Minification en production

### Bonnes pratiques

1. Limiter le nombre de variables fluides
2. Réutiliser les variables existantes
3. Grouper les calculs similaires
4. Documenter les valeurs clés

## Accessibilité

### Considérations

1. Tailles de texte minimales lisibles
2. Contraste suffisant
3. Espacement adaptatif
4. Support du zoom

### Tests

1. Vérifier les tailles extrêmes
2. Tester différents viewports
3. Valider l'accessibilité
4. Vérifier la lisibilité

## Maintenance

### Documentation

1. Commenter les variables
2. Expliquer les calculs
3. Fournir des exemples
4. Maintenir à jour

### Mises à jour

1. Vérifier la compatibilité
2. Tester les changements
3. Mettre à jour la documentation
4. Communiquer les changements
