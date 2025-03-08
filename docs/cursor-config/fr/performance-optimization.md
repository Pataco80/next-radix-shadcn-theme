# Optimisation des performances

Ce document décrit les meilleures pratiques pour optimiser les performances des applications Next.js.

## Principes généraux

- Minimiser l'utilisation de `use client`, `useEffect` et `setState`
- Privilégier les React Server Components (RSC)
- Optimiser les Web Vitals (LCP, CLS, FID)

## React Server Components

Utiliser les React Server Components pour :

- Réduire la taille du bundle JavaScript
- Améliorer le temps de chargement initial
- Éviter les allers-retours client-serveur inutiles

Exemple :

```tsx
// app/users/page.tsx
// Ce composant s'exécute sur le serveur
export default async function UsersPage() {
	// Cette requête est exécutée sur le serveur
	const users = await fetch('https://api.example.com/users').then(res =>
		res.json()
	)

	return (
		<div>
			<h1>Utilisateurs</h1>
			<UserList users={users} />
		</div>
	)
}

// Ce composant s'exécute également sur le serveur
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

## Composants clients

Limiter l'utilisation de `use client` aux composants qui nécessitent réellement des fonctionnalités côté client :

```tsx
'use client'

import { useState } from 'react'

export function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p>Compteur : {count}</p>
			<button onClick={() => setCount(count + 1)}>Incrémenter</button>
		</div>
	)
}
```

## Suspense et chargement progressif

Envelopper les composants client dans `Suspense` avec un fallback pour améliorer l'expérience utilisateur :

```tsx
import { Suspense } from 'react'
import { Loading } from '@/components/ui/loading'

export default function DashboardPage() {
	return (
		<div>
			<h1>Tableau de bord</h1>

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

## Chargement dynamique

Utiliser le chargement dynamique pour les composants non critiques :

```tsx
import dynamic from 'next/dynamic'

// Chargement dynamique avec Suspense
const DynamicChart = dynamic(() => import('@/components/Chart'), {
	loading: () => <p>Chargement du graphique...</p>,
	ssr: false, // Désactiver le rendu côté serveur si le composant utilise des API uniquement disponibles côté client
})

export default function AnalyticsPage() {
	return (
		<div>
			<h1>Analytique</h1>
			<DynamicChart />
		</div>
	)
}
```

## Optimisation des images

- Utiliser le composant `next/image` pour l'optimisation automatique des images
- Spécifier les dimensions des images pour éviter le décalage de mise en page (CLS)
- Utiliser le chargement paresseux pour les images non critiques

```tsx
import Image from 'next/image'

export function HeroImage() {
	return (
		<Image
			src="/hero.webp"
			alt="Hero image"
			width={1200}
			height={600}
			priority // Charger en priorité pour les images above-the-fold
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
			loading="lazy" // Chargement paresseux pour les images below-the-fold
		/>
	)
}
```

## Gestion d'état

- Utiliser 'nuqs' pour la gestion d'état des paramètres de recherche URL
- Préférer les React Server Components et Next.js SSR pour la récupération de données
- Limiter l'utilisation des gestionnaires d'état globaux

## Optimisation du bundle

- Utiliser l'importation dynamique pour les bibliothèques volumineuses
- Éviter d'importer des bibliothèques entières lorsque seules quelques fonctions sont nécessaires

```tsx
// Préférer
import { format } from 'date-fns'

// Plutôt que
import dateFns from 'date-fns'
```

## Mise en cache et revalidation

Utiliser les stratégies de mise en cache de Next.js pour optimiser les performances :

```tsx
// Mise en cache avec revalidation toutes les 60 secondes
export default async function ProductsPage() {
	const products = await fetch('https://api.example.com/products', {
		next: { revalidate: 60 },
	}).then(res => res.json())

	return (
		<div>
			<h1>Produits</h1>
			<ProductList products={products} />
		</div>
	)
}
```
