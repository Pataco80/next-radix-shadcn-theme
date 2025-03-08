# Utilisation de TypeScript

Ce document décrit les meilleures pratiques pour l'utilisation de TypeScript dans le développement d'applications Node.js et Next.js.

## Principes généraux

- Utiliser TypeScript pour tout le code
- Préférer les types aux interfaces
- Éviter les enums; utiliser des maps à la place
- Utiliser des composants fonctionnels avec des types TypeScript

## Types vs Interfaces

Préférer les types aux interfaces pour leur flexibilité et leur cohérence :

```tsx
// Préférer
type UserProps = {
	id: string
	name: string
	email: string
}

// Plutôt que
interface UserProps {
	id: string
	name: string
	email: string
}
```

## Éviter les enums

Utiliser des objets constants ou des unions de littéraux au lieu des enums :

```tsx
// Préférer
const UserRole = {
	ADMIN: 'admin',
	USER: 'user',
	GUEST: 'guest',
} as const

type UserRoleType = (typeof UserRole)[keyof typeof UserRole]

// Plutôt que
enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}
```

## Typage des props de composants

Définir les types directement dans la signature de la fonction :

```tsx
export function UserCard(props: {
	user: { id: string; name: string; email: string }
	onEdit?: (id: string) => void
	isActive: boolean
}) {
	return (
		<div>
			<h2>{props.user.name}</h2>
			<p>{props.user.email}</p>
			{props.isActive && <span>Active</span>}
			{props.onEdit && (
				<button onClick={() => props.onEdit?.(props.user.id)}>Edit</button>
			)}
		</div>
	)
}
```

## Typage des fonctions

Toujours spécifier les types de retour des fonctions :

```tsx
function calculateTotal(
	items: Array<{ price: number; quantity: number }>
): number {
	return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
```

## Utilisation de génériques

Utiliser des génériques pour créer des fonctions et des types réutilisables :

```tsx
function fetchData<T>(url: string): Promise<T> {
	return fetch(url).then(response => response.json())
}

// Utilisation
type User = { id: string; name: string }
const users = await fetchData<User[]>('/api/users')
```

## Types utilitaires

Tirer parti des types utilitaires intégrés de TypeScript :

```tsx
// Partial - rend toutes les propriétés optionnelles
type UserUpdateProps = Partial<UserProps>

// Pick - sélectionne un sous-ensemble de propriétés
type UserBasicInfo = Pick<UserProps, 'id' | 'name'>

// Omit - exclut certaines propriétés
type UserWithoutEmail = Omit<UserProps, 'email'>

// Record - crée un type avec des clés et des valeurs spécifiques
type UsersById = Record<string, UserProps>
```

## Assertions de type

Éviter les assertions de type (`as`) autant que possible. Si nécessaire, préférer les assertions de type avec des vérifications :

```tsx
// Préférer
if (typeof data === 'string') {
	// data est de type string ici
	return data.toUpperCase()
}

// Plutôt que
return (data as string).toUpperCase()
```
