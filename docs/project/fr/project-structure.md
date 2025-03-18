# Structure du projet

Ce document décrit l'organisation et la structure du projet.

## Aperçu

```
.
├── app/                    # Application Next.js
│   ├── components/        # Composants React réutilisables
│   ├── lib/              # Utilitaires et helpers
│   ├── styles/           # Styles spécifiques aux pages
│   ├── (routes)/        # Routes de l'application
│   ├── layout.tsx       # Layout principal
│   └── globals.css      # Styles globaux
│
├── css/                   # Styles globaux et système de design
│   ├── theme.css        # Configuration du thème
│   ├── fluid-typography.css  # Système typographique fluide
│   ├── fluid-grid.css    # Système de grille fluide
│   ├── fluid-spacing.css # Système d'espacement fluide
│   └── colors.css       # Système de couleurs
│
├── public/               # Assets statiques
│   ├── fonts/          # Polices de caractères
│   └── images/         # Images
│
├── docs/                 # Documentation
│   └── project/
│       └── fr/          # Documentation en français
│
├── components/           # Composants partagés
│   ├── ui/             # Composants UI de base
│   └── shared/         # Composants métier
│
└── config/              # Configuration
    ├── site.ts        # Configuration du site
    └── theme.ts       # Configuration du thème
```

## Détails des répertoires

### `/app`

Structure Next.js App Router avec :

- `components/` : Composants spécifiques aux pages
- `lib/` : Utilitaires et helpers
- `styles/` : Styles spécifiques aux pages
- `(routes)/` : Organisation des routes
- `layout.tsx` : Layout principal avec providers
- `globals.css` : Styles globaux et imports

### `/css`

Système de design avec :

- `theme.css` : Configuration Tailwind CSS v4

  - Variables CSS
  - Thèmes clair/sombre
  - Configuration Shadcn UI

- `fluid-typography.css` : Système typographique

  - Échelles fluides
  - Line-heights
  - Espacements

- `fluid-grid.css` : Système de grille

  - Container
  - Breakpoints
  - Grilles fluides

- `fluid-spacing.css` : Système d'espacement

  - Marges
  - Rembourrages
  - Espacements fluides

- `colors.css` : Système de couleurs
  - Palette de couleurs
  - Variables sémantiques
  - Thèmes clair/sombre

### `/components`

Composants React organisés en :

- `ui/` : Composants de base

  - Boutons
  - Cartes
  - Formulaires
  - Navigation

- `shared/` : Composants métier
  - Sections
  - Layouts
  - Features

### `/config`

Configuration centralisée :

- `site.ts` : Configuration globale

  - Métadonnées
  - Navigation
  - SEO

- `theme.ts` : Configuration du thème
  - Couleurs
  - Typographie
  - Breakpoints
  - Animations

## Conventions de nommage

### Fichiers

- Components: `PascalCase.tsx`
- Utilitaires: `camelCase.ts`
- Styles: `kebab-case.css`
- Config: `kebab-case.ts`

### Composants

```tsx
// Button.tsx
export interface ButtonProps {
	variant?: 'default' | 'outline'
	size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant, size }: ButtonProps) {
	return (
		<button className={cn('button', `button--${variant}`, `button--${size}`)}>
			{children}
		</button>
	)
}
```

### Styles

```css
/* theme.css */
@layer theme {
	:root {
		/* Variables de thème */
		--primary: #007aff;
		--radius: 0.5rem;
	}
}

/* components/Button.css */
@layer components {
	.button {
		@apply rounded-lg px-4 py-2;
	}
}
```

## Organisation des imports

```tsx
// 1. Imports React/Next
import { useState } from 'react'
import Image from 'next/image'

// 2. Imports de composants
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// 3. Imports d'utilitaires
import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/date'

// 4. Imports de types
import type { ButtonProps } from '@/components/ui/button'
```

## Scripts disponibles

```json
{
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint": "next lint",
		"format": "prettier --write .",
		"test": "jest",
		"test:watch": "jest --watch"
	}
}
```

## Dépendances principales

- Next.js v15.x
- React v19.x
- Tailwind CSS v4.0.0
- Shadcn UI (version canary - compatible Tailwind v4)
- Radix UI v2.0.0

Pour plus de détails sur les dépendances, voir [dependencies.md](./dependencies.md).
