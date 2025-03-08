# TypeScript Usage

This document describes best practices for using TypeScript in developing Node.js and Next.js applications.

## General Principles

- Use TypeScript for all code
- Prefer types over interfaces
- Avoid enums; use maps instead
- Use functional components with TypeScript types

## Types vs Interfaces

Prefer types over interfaces for their flexibility and consistency:

```tsx
// Prefer
type UserProps = {
	id: string
	name: string
	email: string
}

// Rather than
interface UserProps {
	id: string
	name: string
	email: string
}
```

## Avoid Enums

Use constant objects or literal unions instead of enums:

```tsx
// Prefer
const UserRole = {
	ADMIN: 'admin',
	USER: 'user',
	GUEST: 'guest',
} as const

type UserRoleType = (typeof UserRole)[keyof typeof UserRole]

// Rather than
enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}
```

## Component Props Typing

Define types directly in the function signature:

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

## Function Typing

Always specify return types for functions:

```tsx
function calculateTotal(
	items: Array<{ price: number; quantity: number }>
): number {
	return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
```

## Using Generics

Use generics to create reusable functions and types:

```tsx
function fetchData<T>(url: string): Promise<T> {
	return fetch(url).then(response => response.json())
}

// Usage
type User = { id: string; name: string }
const users = await fetchData<User[]>('/api/users')
```

## Utility Types

Leverage TypeScript's built-in utility types:

```tsx
// Partial - makes all properties optional
type UserUpdateProps = Partial<UserProps>

// Pick - selects a subset of properties
type UserBasicInfo = Pick<UserProps, 'id' | 'name'>

// Omit - excludes certain properties
type UserWithoutEmail = Omit<UserProps, 'email'>

// Record - creates a type with specific keys and values
type UsersById = Record<string, UserProps>
```

## Type Assertions

Avoid type assertions (`as`) as much as possible. If necessary, prefer type assertions with checks:

```tsx
// Prefer
if (typeof data === 'string') {
	// data is of type string here
	return data.toUpperCase()
}

// Rather than
return (data as string).toUpperCase()
```
