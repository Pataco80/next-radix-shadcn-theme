# Conventions de nommage

Ce document décrit les conventions de nommage à suivre pour le développement d'applications TypeScript, Node.js et Next.js.

## Structure des répertoires

- Utiliser des minuscules avec des tirets pour les répertoires
  - Exemple : `components/auth-wizard`

## Composants

- Privilégier les exportations nommées pour les composants
- Utiliser PascalCase pour les noms de composants
  - Exemple : `AuthButton.tsx`, `UserProfile.tsx`

## Variables et fonctions

- Utiliser camelCase pour les noms de variables et de fonctions
- Utiliser des verbes auxiliaires pour les variables booléennes
  - Exemple : `isLoading`, `hasError`, `canSubmit`

## Fonctions d'aide

- Utiliser des noms descriptifs qui indiquent clairement l'action effectuée
  - Exemple : `formatCurrency`, `validateEmail`, `sortUsersByName`

## Constantes

- Utiliser UPPER_SNAKE_CASE pour les constantes globales
  - Exemple : `MAX_RETRY_COUNT`, `API_BASE_URL`

## Types et interfaces

- Utiliser PascalCase pour les noms de types et d'interfaces
- Préfixer les interfaces de props avec le nom du composant
  - Exemple : `ButtonProps`, `UserCardProps`

## Fichiers

- Utiliser `.tsx` pour les fichiers contenant du JSX
- Utiliser `.ts` pour les fichiers TypeScript sans JSX
- Utiliser `.module.css` ou `.module.scss` pour les modules CSS

## Exemples

### Structure de répertoire

```
components/
├── auth/
│   ├── login-form/
│   │   ├── LoginForm.tsx
│   │   ├── LoginFormButton.tsx
│   │   └── use-login-form.ts
│   └── signup-form/
│       ├── SignupForm.tsx
│       └── SignupFormButton.tsx
└── ui/
    ├── button/
    │   └── Button.tsx
    └── card/
        └── Card.tsx
```

### Composant avec exportation nommée

```tsx
// Button.tsx
export function Button(props: {
	variant: 'primary' | 'secondary'
	children: React.ReactNode
}) {
	return <button className={`btn-${props.variant}`}>{props.children}</button>
}
```
