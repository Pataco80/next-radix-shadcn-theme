# Code Style and Structure

This document describes the code style and structure conventions for developing TypeScript, Node.js, and Next.js applications.

## General Principles

- Write concise and technical TypeScript code using functional and declarative programming patterns.
- Avoid classes; prefer iteration and modularization rather than code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).

## File Structure

Structure files in the following order:

1. Exported component
2. Sub-components
3. Helper functions
4. Static content
5. Types

## Syntax and Formatting

- Avoid unnecessary braces in conditions; use concise syntax for simple instructions.
- Write declarative JSX.

Example of concise syntax:

```tsx
// Prefer
if (condition) return <Component />

// Rather than
if (condition) {
	return <Component />
}
```

## Creating a Component

- Always use `export function` without "default" or named export.
- Always use a "props" object as the first argument of your component, and add the type directly in the object.

Example:

```tsx
export function MyComponent(props: { prop1: string; prop2: number }) {
	return <div>{props.prop1}</div>
}
```

## React 19 and Server Components

- Use React 19 with Server Components.
- Implement Prisma queries and backend logic in `page` or `layout` files.

Example of a server component:

```tsx
// Use "async" for server components
export default async function Page() {
	// Use "await" for asynchronous operations
	const result = await prisma.user.findMany()
	return (
		<div>
			{result.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	)
}
```

- Avoid using React hooks in server components.

## Key Conventions

- Limit 'use client': Favor server components and Next.js SSR for data fetching or state management.
- Use 'use client' only for Web API access in small components.
