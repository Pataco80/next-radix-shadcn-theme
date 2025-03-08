# Database Queries and Data Models

This document describes best practices for database queries and creating data models in Next.js applications.

## Prisma ORM

- Use the Prisma SDK to query the database
- Read `.prisma` files to understand data models

## PostgreSQL

- Use valid PostgreSQL syntax with quotes for table and column names
- Follow best practices for PostgreSQL queries

## Data Models with Prisma

Example of a Prisma schema:

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

## Prisma Queries in Server Components

Example of a Prisma query in a server component:

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
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<h3>Posts</h3>
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

## CRUD Operations with Prisma

### Create

```tsx
const newUser = await prisma.user.create({
	data: {
		email: 'user@example.com',
		name: 'John Doe',
		password: hashedPassword,
		posts: {
			create: {
				title: 'My first post',
				content: 'Post content',
			},
		},
	},
})
```

### Read

```tsx
// Find a user by ID
const user = await prisma.user.findUnique({
	where: {
		id: userId,
	},
	include: {
		posts: true,
	},
})

// Find multiple users with filtering
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

### Update

```tsx
const updatedUser = await prisma.user.update({
	where: {
		id: userId,
	},
	data: {
		name: 'New name',
		posts: {
			update: {
				where: {
					id: postId,
				},
				data: {
					title: 'Updated title',
				},
			},
		},
	},
})
```

### Delete

```tsx
const deletedUser = await prisma.user.delete({
	where: {
		id: userId,
	},
})
```

## Transactions

Use transactions for operations that require multiple atomic modifications:

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
			title: 'My first post',
			content: 'Post content',
			authorId: '...', // ID of the user created above
		},
	}),
])
```

## Migrations

Use Prisma migrations to manage schema changes:

```bash
# Create a migration
npx prisma migrate dev --name add_user_role

# Apply migrations in production
npx prisma migrate deploy
```

## Best Practices

- Avoid N+1 queries by using `include` or `select` to load relationships
- Use transactions for atomic operations
- Validate data before sending it to the database
- Use indexes to optimize frequent queries
- Cache query results when appropriate
