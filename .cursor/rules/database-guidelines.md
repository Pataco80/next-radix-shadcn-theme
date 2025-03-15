# Requêtes de base de données et modèles de données

Ce document décrit les meilleures pratiques pour les requêtes de base de données et la création de modèles de données dans les applications Next.js.

## Prisma ORM

- Utiliser le SDK Prisma pour interroger la base de données
- Lire les fichiers `.prisma` pour comprendre les modèles de données

## PostgreSQL

- Utiliser une syntaxe PostgreSQL valide avec des guillemets pour les noms de tables et de colonnes
- Suivre les bonnes pratiques pour les requêtes PostgreSQL

## Modèles de données avec Prisma

Exemple de schéma Prisma :

```prisma
// schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  role      Role     @default(USER)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}
```

## Requêtes Prisma dans les composants serveur

Exemple de requête Prisma dans un composant serveur :

```tsx
// app/users/page.tsx
import { prisma } from '@/lib/prisma'

export default async function UsersPage() {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
			posts: {
				select: {
					id: true,
					title: true,
				},
			},
		},
	})

	return (
		<div>
			<h1>Utilisateurs</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<h3>Articles</h3>
						<ul>
							{user.posts.map(post => (
								<li key={post.id}>{post.title}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
```

## Opérations CRUD avec Prisma

### Création

```tsx
const newUser = await prisma.user.create({
	data: {
		email: 'user@example.com',
		name: 'John Doe',
		password: hashedPassword,
		posts: {
			create: {
				title: 'Mon premier article',
				content: "Contenu de l'article",
			},
		},
	},
})
```

### Lecture

```tsx
// Trouver un utilisateur par ID
const user = await prisma.user.findUnique({
	where: {
		id: userId,
	},
	include: {
		posts: true,
	},
})

// Trouver plusieurs utilisateurs avec filtrage
const users = await prisma.user.findMany({
	where: {
		role: 'ADMIN',
	},
	orderBy: {
		createdAt: 'desc',
	},
	take: 10,
	skip: 0,
})
```

### Mise à jour

```tsx
const updatedUser = await prisma.user.update({
	where: {
		id: userId,
	},
	data: {
		name: 'Nouveau nom',
		posts: {
			update: {
				where: {
					id: postId,
				},
				data: {
					title: 'Titre mis à jour',
				},
			},
		},
	},
})
```

### Suppression

```tsx
const deletedUser = await prisma.user.delete({
	where: {
		id: userId,
	},
})
```

## Transactions

Utiliser des transactions pour les opérations qui nécessitent plusieurs modifications atomiques :

```tsx
const [user, post] = await prisma.$transaction([
	prisma.user.create({
		data: {
			email: 'user@example.com',
			name: 'John Doe',
			password: hashedPassword,
		},
	}),
	prisma.post.create({
		data: {
			title: 'Mon premier article',
			content: "Contenu de l'article",
			authorId: '...', // ID de l'utilisateur créé ci-dessus
		},
	}),
])
```

## Migrations

Utiliser les migrations Prisma pour gérer les changements de schéma :

```bash
# Créer une migration
npx prisma migrate dev --name add_user_role

# Appliquer les migrations en production
npx prisma migrate deploy
```

## Bonnes pratiques

- Éviter les requêtes N+1 en utilisant `include` ou `select` pour charger les relations
- Utiliser des transactions pour les opérations atomiques
- Valider les données avant de les envoyer à la base de données
- Utiliser des index pour optimiser les requêtes fréquentes
- Mettre en cache les résultats des requêtes lorsque cela est approprié
