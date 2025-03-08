# Performance Optimization

This document describes best practices for optimizing the performance of Next.js applications.

## General Principles

- Minimize the use of `use client`, `useEffect`, and `setState`
- Favor React Server Components (RSC)
- Optimize Web Vitals (LCP, CLS, FID)

## React Server Components

Use React Server Components to:

- Reduce JavaScript bundle size
- Improve initial loading time
- Avoid unnecessary client-server round trips

Example:

```tsx
// app/users/page.tsx
// This component runs on the server
export default async function UsersPage() {
	// This request is executed on the server
	const users = await fetch('https://api.example.com/users').then(res =>
		res.json()
	)

	return (
		<div>
			<h1>Users</h1>
			<UserList users={users} />
		</div>
	)
}

// This component also runs on the server
function UserList({ users }) {
	return (
		<ul>
			{users.map(user => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	)
}
```

## Client Components

Limit the use of `use client` to components that truly require client-side functionality:

```tsx
'use client'

import { useState } from 'react'

export function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

## Suspense and Progressive Loading

Wrap client components in `Suspense` with a fallback to improve user experience:

```tsx
import { Suspense } from 'react'
import { Loading } from '@/components/ui/loading'

export default function DashboardPage() {
	return (
		<div>
			<h1>Dashboard</h1>

			<Suspense fallback={<Loading />}>
				<UserStats />
			</Suspense>

			<Suspense fallback={<Loading />}>
				<RecentActivity />
			</Suspense>
		</div>
	)
}
```

## Dynamic Loading

Use dynamic loading for non-critical components:

```tsx
import dynamic from 'next/dynamic'

// Dynamic loading with Suspense
const DynamicChart = dynamic(() => import('@/components/Chart'), {
	loading: () => <p>Loading chart...</p>,
	ssr: false, // Disable server-side rendering if the component uses client-only APIs
})

export default function AnalyticsPage() {
	return (
		<div>
			<h1>Analytics</h1>
			<DynamicChart />
		</div>
	)
}
```

## Image Optimization

- Use the `next/image` component for automatic image optimization
- Specify image dimensions to prevent layout shift (CLS)
- Use lazy loading for non-critical images

```tsx
import Image from 'next/image'

export function HeroImage() {
	return (
		<Image
			src="/hero.webp"
			alt="Hero image"
			width={1200}
			height={600}
			priority // Load with priority for above-the-fold images
		/>
	)
}

export function GalleryImage(props: { src: string; alt: string }) {
	return (
		<Image
			src={props.src}
			alt={props.alt}
			width={300}
			height={200}
			loading="lazy" // Lazy loading for below-the-fold images
		/>
	)
}
```

## State Management

- Use 'nuqs' for URL search parameter state management
- Prefer React Server Components and Next.js SSR for data fetching
- Limit the use of global state managers

## Bundle Optimization

- Use dynamic imports for large libraries
- Avoid importing entire libraries when only a few functions are needed

```tsx
// Prefer
import { format } from 'date-fns'

// Rather than
import dateFns from 'date-fns'
```

## Caching and Revalidation

Use Next.js caching strategies to optimize performance:

```tsx
// Caching with revalidation every 60 seconds
export default async function ProductsPage() {
	const products = await fetch('https://api.example.com/products', {
		next: { revalidate: 60 },
	}).then(res => res.json())

	return (
		<div>
			<h1>Products</h1>
			<ProductList products={products} />
		</div>
	)
}
```
