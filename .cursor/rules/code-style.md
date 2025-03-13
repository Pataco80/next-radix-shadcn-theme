# Style et structure du code

## Documentation

La documentation du code suit des conventions strictes de nommage et de contenu :

### Types de documentation

1. **Documentation succincte** (`README.md`)

   - Points essentiels uniquement
   - Navigation claire
   - Pas de détails techniques

2. **Documentation descriptive** (`project-*.md`)

   - Explications claires des concepts
   - Exemples d'utilisation simples
   - Guide pratique pour les développeurs

3. **Documentation technique** (sans préfixe)
   - Détails d'implémentation
   - Cas d'utilisation avancés
   - Exemples complets

Pour plus de détails, voir [Règles de documentation](./documentation-guidelines.md)

Ce document décrit les conventions de style et de structure du code pour le développement d'applications TypeScript, Node.js et Next.js.

## Principes généraux

- Écrire du code TypeScript concis et technique en utilisant des modèles de programmation fonctionnelle et déclarative.
- Éviter les classes; préférer l'itération et la modularisation plutôt que la duplication de code.
- Utiliser des noms de variables descriptifs avec des verbes auxiliaires (ex: `isLoading`, `hasError`).

## Structure des fichiers

Structurer les fichiers selon l'ordre suivant :

1. Composant exporté
2. Sous-composants
3. Fonctions d'aide
4. Contenu statique
5. Types

## Syntaxe et formatage

- Éviter les accolades inutiles dans les conditions; utiliser une syntaxe concise pour les instructions simples.
- Écrire du JSX déclaratif.

Exemple de syntaxe concise :

```tsx
// Préférer
if (condition) return <Component />

// Plutôt que
if (condition) {
	return <Component />
}
```

## Création d'un composant

- Toujours utiliser `export function` sans "default" ou exportation nommée.
- Toujours utiliser un objet "props" comme premier argument de votre composant, et ajouter le type directement dans l'objet.

Exemple :

```tsx
export function MyComponent(props: { prop1: string; prop2: number }) {
	return <div>{props.prop1}</div>
}
```

## React 19 et Server Components

- Utiliser React 19 avec les Server Components.
- Implémenter les requêtes Prisma et la logique backend dans les fichiers `page` ou `layout`.

Exemple de composant serveur :

```tsx
// Utiliser "async" pour les composants serveur
export default async function Page() {
	// Utiliser "await" pour les opérations asynchrones
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

- Éviter d'utiliser les hooks React dans les composants serveur.

## Conventions clés

- Limiter 'use client': Privilégier les composants serveur et Next.js SSR pour la récupération de données ou la gestion d'état.
- Utiliser 'use client' uniquement pour l'accès à l'API Web dans de petits composants.
