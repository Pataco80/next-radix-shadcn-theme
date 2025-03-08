# Naming Conventions

This document describes the naming conventions to follow for developing TypeScript, Node.js, and Next.js applications.

## Directory Structure

- Use lowercase with hyphens for directories
  - Example: `components/auth-wizard`

## Components

- Favor named exports for components
- Use PascalCase for component names
  - Example: `AuthButton.tsx`, `UserProfile.tsx`

## Variables and Functions

- Use camelCase for variable and function names
- Use auxiliary verbs for boolean variables
  - Example: `isLoading`, `hasError`, `canSubmit`

## Helper Functions

- Use descriptive names that clearly indicate the action performed
  - Example: `formatCurrency`, `validateEmail`, `sortUsersByName`

## Constants

- Use UPPER_SNAKE_CASE for global constants
  - Example: `MAX_RETRY_COUNT`, `API_BASE_URL`

## Types and Interfaces

- Use PascalCase for type and interface names
- Prefix props interfaces with the component name
  - Example: `ButtonProps`, `UserCardProps`

## Files

- Use `.tsx` for files containing JSX
- Use `.ts` for TypeScript files without JSX
- Use `.module.css` or `.module.scss` for CSS modules

## Examples

### Directory Structure

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

### Component with Named Export

```tsx
// Button.tsx
export function Button(props: {
	variant: 'primary' | 'secondary'
	children: React.ReactNode
}) {
	return <button className={`btn-${props.variant}`}>{props.children}</button>
}
```
