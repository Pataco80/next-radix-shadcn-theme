# Project Initialization

This document describes the steps to initialize a new Next.js project with the recommended configurations.

## Interactive Setup Script

Use the interactive setup script to configure project dependencies and features. This script will guide you through configuration choices for:

- Git-flow initialization
- Headless CMS installation
- Database configuration

The script is available in the `.cursor/rules/scripts/setup.sh` file. To run it:

```bash
bash .cursor/rules/scripts/setup.sh
```

## Manual Configuration

If you prefer to manually configure your project, follow these steps:

### 1. Create a New Next.js Project

```bash
npx create-next-app@latest my-project --typescript --eslint --tailwind --app
cd my-project
```

### 2. Install Basic Dependencies

```bash
# Install development dependencies
npm install -D typescript @types/node @types/react @types/react-dom eslint prettier eslint-config-prettier husky lint-staged

# Install UI dependencies
npm install @radix-ui/react-icons @radix-ui/themes class-variance-authority clsx tailwind-merge
```

### 3. Configure Shadcn UI

```bash
npx shadcn-ui@latest init
```

Answer the questions according to your preferences:

- Style: `Default`
- Base color: `Slate`
- Global CSS file: `app/globals.css`
- CSS variables: `Yes`
- Tailwind CSS config: `tailwind.config.js`
- Components directory: `components`
- React server components: `Yes`
- Components to include: Select according to your needs

### 4. Configure Git-flow

```bash
# Initialize Git
git init
git branch -m main

# Create the develop branch
git checkout -b develop

# Add .gitignore
cat > .gitignore << EOL
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOL

# First commit
git add .
git commit -m "feat: initial commit"
```

### 5. Configure ESLint and Prettier

```bash
# .eslintrc.json
cat > .eslintrc.json << EOL
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "react/display-name": "off"
  }
}
EOL

# .prettierrc
cat > .prettierrc << EOL
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid"
}
EOL
```

### 6. Configure Husky and lint-staged

```bash
# Initialize Husky
npx husky-init
npm install

# Configure lint-staged
cat > .lintstagedrc.js << EOL
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['prettier --write'],
  '*.{json,md}': ['prettier --write']
}
EOL

# Configure the pre-commit hook
cat > .husky/pre-commit << EOL
#!/usr/bin/env sh
. "\$(dirname -- "\$0")/_/husky.sh"

npx lint-staged
EOL
```

## Recommended Directory Structure

```
my-project/
├── .cursor/                     # Cursor configuration
│   └── rules/                   # Cursor rules and guidelines
│       ├── README.md            # Main rules documentation
│       ├── code-style.md        # Code style and structure
│       └── ...                  # Other guideline files
├── app/                         # Next.js App Router
│   ├── (auth)/                  # Grouped authentication routes
│   │   ├── login/               # Login route
│   │   └── register/            # Registration route
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                  # React components
│   ├── auth/                    # Authentication components
│   ├── layout/                  # Layout components
│   ├── ui/                      # User interface components
│   └── forms/                   # Form components
├── lib/                         # Libraries and utilities
│   ├── utils.ts                 # Utility functions
│   ├── types.ts                 # Shared TypeScript types
│   └── db.ts                    # Database configuration
├── public/                      # Static files
├── scripts/                     # Utility scripts
├── styles/                      # Additional styles
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Files ignored by Git
├── .prettierrc                  # Prettier configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Database Configuration

### Prisma with PostgreSQL

```bash
# Install Prisma
npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql

# Configure the Prisma schema
cat > prisma/schema.prisma << EOL
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Define your models here
EOL

# Create the database configuration file
cat > lib/db.ts << EOL
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
EOL
```

## Authentication Configuration

### NextAuth.js

```bash
# Install NextAuth.js
npm install next-auth

# Create the configuration file
mkdir -p app/api/auth/[...nextauth]
cat > app/api/auth/[...nextauth]/route.ts << EOL
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/db'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Implémentez votre logique d'authentification ici
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
})

export { handler as GET, handler as POST }
EOL
```

## Scripts npm recommandés

Ajouter les scripts suivants à votre fichier `package.json` :

```json
{
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint": "next lint",
		"format": "prettier --write .",
		"clean": "rm -rf .next",
		"clean:modules": "rm -rf node_modules",
		"refresh": "npm run clean && npm run dev",
		"reset": "npm run clean && npm run clean:modules && npm install",
		"db:push": "prisma db push",
		"db:studio": "prisma studio",
		"db:generate": "prisma generate"
	}
}
```
