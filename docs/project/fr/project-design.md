# Design du projet

Ce document décrit les principes de design utilisés dans le projet Next.js Radix Theme Shadcn, en utilisant les principes suivants :

- Tailwind CSS
- Typographie fluide et les choix stylistiques
- Utilisation de Tailwind CSS avec des variables fluides

## Aperçu de la structure CSS

Le projet utilise une structure CSS modulaire organisée comme suit :

```
css/
└── globals/
    ├── theme.css 				# Document de theme global
    ├── fluid-variables.css    	# Variables fluides de base
    ├── fluid-typography.css   	# Système typographique fluide
    ├── fluid-spacing.css      	# Système d'espacement fluide
    └── fluid-grid.css        	# Système de grille fluide
```

Vous pouvez importer `theme.css` dans `app/globals.css` qui sert de point d'entrée pour tous les styles :

```css
/* app/globals.css */
@import 'tailwindcss/base';
@import '../css/globals/theme.css';

/* ou */
@import 'tailwindcss/base';
@import '../css/globals/fluid-typography.css';
@import '../css/globals/fluid-spacing.css';
/* etc... */

/* Autres fichiers */
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Tailwind CSS

Notre implémentation de Tailwind CSS (v4) est organisée pour fonctionner harmonieusement avec notre système fluide. Nous utilisons les couches (@layer) de Tailwind pour organiser notre code de manière logique et éviter les conflits.

### Organisation des couches

```css
/* Configuration des variables de thème */
@layer theme {
	:root {
		--primary: #007aff;
		--secondary: #5856d6;
		/* ... autres variables de thème ... */
	}
}

/* Styles de base */
@layer base {
	html {
		font-family: var(--font-system);
		background-color: var(--background);
		color: var(--foreground);
	}

	/* Réinitialisation des styles de base */
	body {
		@apply antialiased;
	}
}

/* Composants personnalisés */
@layer components {
	.btn {
		@apply px-4 py-2 rounded-lg;
	}

	.card {
		@apply p-6 bg-white rounded-xl shadow-md;
	}
}

/* Utilitaires personnalisés */
@layer utilities {
	.text-balance {
		text-wrap: balance;
	}
}
```

### Intégration avec le système fluide

L'intégration entre Tailwind CSS et notre système fluide se fait de manière transparente grâce à :

1. L'utilisation de préfixes distincts (`-fl-`) pour nos classes fluides
2. La définition de classes utilitaires fluides dans nos couches CSS
3. L'organisation en couches qui respecte la cascade CSS

Nos classes utilitaires fluides suivent une convention cohérente :

```css
/* Classes de typographie fluide */
.text-fl-xs    /* Taille XS avec line-height 3 par défaut */
.text-fl-sm    /* Taille SM avec line-height 4 par défaut */
.text-fl-base  /* Taille Base avec line-height 5 par défaut */
.text-fl-lg    /* Taille LG avec line-height 6 par défaut */
.text-fl-xl    /* Taille XL avec line-height 7 par défaut */
.text-fl-2xl   /* Taille 2XL avec line-height 8 par défaut */
.text-fl-3xl   /* Taille 3XL avec line-height 9 par défaut */
.text-fl-4xl   /* Taille 4XL avec line-height 9 par défaut */

/* Line-heights personnalisés disponibles */
.text-fl-xs/3, .text-fl-xs/4, .text-fl-xs/5
.text-fl-sm/4, .text-fl-sm/5, .text-fl-sm/6
/* etc... */

/* Espacement */
.p-fl-4 {
	/* Padding niveau 4 */
}
.m-fl-4 {
	/* Margin niveau 4 */
}
.gap-fl-4 {
	/* Gap niveau 4 */
}
```

Pour plus de détails sur le système fluide et son implémentation, consultez la [documentation du système fluide](./fluid-system.md).

## Application dans le projet

### Composants de base

Les composants de base utilisent une combinaison de classes Tailwind et de classes fluides :

```jsx
// Exemple de bouton
<button className="
	// Classes Tailwind
	bg-primary hover:bg-primary/90 text-white
	// Classes fluides avec line-height par défaut
	p-fl-4 text-fl-base
">
	Bouton
</button>

// Exemple de carte
<div className="
	// Classes Tailwind
	bg-white rounded-xl shadow-md
	// Classes fluides
	p-fl-6 gap-fl-4
">
	<h2 className="text-fl-xl mb-fl-2">Titre</h2>
	<p className="text-fl-base">Contenu</p>
	<small className="text-fl-sm">Note en petit texte</small>
</div>
```

### Responsive Design

Le design responsive combine les breakpoints Tailwind avec notre système fluide :

```jsx
<div
	className="
	// Mobile
	p-4 text-fl-base
	// Tablette et plus
	md:p-fl-6 md:text-fl-lg
	// Desktop
	lg:p-fl-8 lg:text-fl-xl
"
>
	Contenu adaptatif
</div>
```

## Avantages de cette approche

1. **Flexibilité** : Combine la puissance de Tailwind avec la fluidité d'Utopia
2. **Maintenabilité** : Organisation claire des styles en couches
3. **Performance** : Optimisation automatique par Tailwind
4. **Cohérence** : Système de design unifié
5. **Développement rapide** : Utilisation intuitive des classes utilitaires
