# UI and Style

This document describes guidelines for user interface and styling in Next.js application development.

## Libraries and Frameworks

- Use Shadcn UI for user interface components
- Use Radix UI for accessible primitive components
- Use Tailwind CSS for styling

## Responsive Design

- Implement responsive design with Tailwind CSS using a mobile-first approach
- Use Tailwind's breakpoint classes to adapt the interface to different screen sizes:
  - `sm`: 640px and above
  - `md`: 768px and above
  - `lg`: 1024px and above
  - `xl`: 1280px and above
  - `2xl`: 1536px and above

Example:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{items.map(item => (
		<Card key={item.id} item={item} />
	))}
</div>
```

## Shadcn UI Components

Use Shadcn UI components to maintain a consistent interface:

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
				<CardTitle>Login</CardTitle>
				<CardDescription>Sign in to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<Input placeholder="Email" type="email" />
					<Input placeholder="Password" type="password" />
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Sign in</Button>
			</CardFooter>
		</Card>
	)
}
```

## Theme and Customization

- Use Tailwind CSS variables to maintain a consistent color palette
- Customize the theme in the `tailwind.config.js` file

Example Tailwind configuration:

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
				// Other colors...
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

## Image Optimization

- Use WebP format for images
- Include size data to prevent layout shift (CLS)
- Implement lazy loading for non-critical images

Example with Next.js Image:

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

## Accessibility

- Use Radix UI components to ensure accessibility
- Include appropriate ARIA attributes when necessary
- Ensure sufficient contrast for text
- Support keyboard navigation

## Dark Mode

- Implement dark mode using Tailwind's `dark` class
- Use CSS variables to define colors in light and dark modes

Example:

```tsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
	<h1 className="text-2xl font-bold">Title</h1>
	<p className="text-gray-600 dark:text-gray-400">Content</p>
</div>
```
