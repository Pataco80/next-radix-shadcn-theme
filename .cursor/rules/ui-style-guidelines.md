# UI et style

Ce document décrit les directives pour l'interface utilisateur et le style dans le développement d'applications Next.js.

## Bibliothèques et frameworks

- Utiliser Shadcn UI pour les composants d'interface utilisateur
- Utiliser Radix UI pour les composants primitifs accessibles
- Utiliser Tailwind CSS pour le style
- Utiliser `@layer theme` pour le css personalisé
- Utiliser `@layer utilities` pour étendre les classes Tailwind CSS
- Eviter la duplication de code si une classe Tailwind CSS éxiste déjà pour apliquer un style souhaité

## Design responsive

- Implémenter un design responsive avec Tailwind CSS en utilisant une approche mobile-first
- Utiliser les classes de breakpoints de Tailwind pour adapter l'interface à différentes tailles d'écran :
  - `sm`: 640px et plus
  - `md`: 768px et plus
  - `lg`: 1024px et plus
  - `xl`: 1280px et plus
  - `2xl`: 1536px et plus

Exemple :

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{items.map(item => (
		<Card key={item.id} item={item} />
	))}
</div>
```

## Composants Shadcn UI

Utiliser les composants Shadcn UI pour maintenir une interface cohérente :

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'

export function LoginForm() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Connexion</CardTitle>
				<CardDescription>Connectez-vous à votre compte</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<Input placeholder="Email" type="email" />
					<Input placeholder="Mot de passe" type="password" />
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Se connecter</Button>
			</CardFooter>
		</Card>
	)
}
```

## Thème et personnalisation

- Utiliser les variables CSS de Tailwind pour maintenir une palette de couleurs cohérente
- Personnaliser le thème dans le fichier `tailwind.config.js`

Exemple de configuration Tailwind :

```js
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				// Autres couleurs...
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
}
```

## Optimisation des images

- Utiliser le format WebP pour les images
- Inclure les données de taille pour éviter le décalage de mise en page (CLS)
- Implémenter le chargement paresseux pour les images non critiques

Exemple avec Next.js Image :

```tsx
import Image from 'next/image'

export function ProductImage(props: { src: string; alt: string }) {
	return (
		<div className="relative aspect-square overflow-hidden rounded-lg">
			<Image
				src={props.src}
				alt={props.alt}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover"
				loading="lazy"
			/>
		</div>
	)
}
```

## Accessibilité

- Utiliser les composants Radix UI pour garantir l'accessibilité
- Inclure des attributs ARIA appropriés lorsque nécessaire
- Assurer un contraste suffisant pour le texte
- Supporter la navigation au clavier

## Mode sombre

- Implémenter un mode sombre en utilisant la classe `dark` de Tailwind
- Utiliser les variables CSS pour définir les couleurs en mode clair et sombre

Exemple :

```tsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
	<h1 className="text-2xl font-bold">Titre</h1>
	<p className="text-gray-600 dark:text-gray-400">Contenu</p>
</div>
```
