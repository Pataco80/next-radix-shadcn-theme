# Initialisation du projet

Ce document décrit les étapes pour initialiser un nouveau projet Next.js avec les configurations recommandées.

## Script d'initialisation interactif

Utiliser le script d'initialisation interactif pour configurer les dépendances et les fonctionnalités du projet. Ce script vous guidera à travers les choix de configuration pour :

- Initialisation de Git-flow
- Installation d'un Headless CMS
- Configuration d'une base de données

Le script est disponible dans le fichier `.cursor/rules/scripts/setup.sh`. Pour l'exécuter :

```bash
bash .cursor/rules/scripts/setup.sh
```

## Configuration manuelle

Si vous préférez configurer manuellement votre projet, suivez ces étapes :

### 1. Créer un nouveau projet Next.js

```bash
npx create-next-app@latest mon-projet --typescript --eslint --tailwind --app
cd mon-projet
```

### 2. Installer les dépendances de base

```bash
# Installer les dépendances de développement
npm install -D typescript @types/node @types/react @types/react-dom eslint prettier eslint-config-prettier husky lint-staged

# Installer les dépendances UI
npm install @radix-ui/react-icons @radix-ui/themes class-variance-authority clsx tailwind-merge
```

### 3. Configurer Shadcn UI

```bash
npx shadcn-ui@latest init
```

Répondez aux questions selon vos préférences :

- Style: `Default`
- Base color: `Slate`
- Global CSS file: `app/globals.css`
- CSS variables: `Yes`
- Tailwind CSS config: `tailwind.config.js`
- Components directory: `components`
- React server components: `Yes`
- Components to include: Sélectionnez selon vos besoins

### 4. Configurer Git-flow

```bash
# Initialiser Git
git init
git branch -m main

# Créer la branche develop
git checkout -b develop

# Ajouter .gitignore
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

# Premier commit
git add .
git commit -m "feat: initial commit"
```

### 5. Configurer ESLint et Prettier

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

### 6. Configurer Husky et lint-staged

```bash
# Initialiser Husky
npx husky-init
npm install

# Configurer lint-staged
cat > .lintstagedrc.js << EOL
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['prettier --write'],
  '*.{json,md}': ['prettier --write']
}
EOL

# Configurer le hook pre-commit
cat > .husky/pre-commit << EOL
#!/usr/bin/env sh
. "\$(dirname -- "\$0")/_/husky.sh"

npx lint-staged
EOL
```

## Structure de répertoires recommandée

```
mon-projet/
├── .cursor/                     # Configuration Cursor
│   └── rules/                   # Règles et directives Cursor
│       ├── README.md            # Documentation principale des règles
│       ├── code-style.md        # Style et structure du code
│       └── ...                  # Autres fichiers de directives
├── app/                         # Next.js App Router
│   ├── (auth)/                  # Routes d'authentification groupées
│   │   ├── login/               # Route de connexion
│   │   └── register/            # Route d'inscription
│   ├── api/                     # Routes API
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout racine
│   └── page.tsx                 # Page d'accueil
├── components/                  # Composants React
│   ├── auth/                    # Composants d'authentification
│   ├── layout/                  # Composants de mise en page
│   ├── ui/                      # Composants d'interface utilisateur
│   └── forms/                   # Composants de formulaire
├── lib/                         # Bibliothèques et utilitaires
│   ├── utils.ts                 # Fonctions utilitaires
│   ├── types.ts                 # Types TypeScript partagés
│   └── db.ts                    # Configuration de la base de données
├── public/                      # Fichiers statiques
├── scripts/                     # Scripts utilitaires
├── styles/                      # Styles supplémentaires
├── .eslintrc.json               # Configuration ESLint
├── .gitignore                   # Fichiers ignorés par Git
├── .prettierrc                  # Configuration Prettier
├── next.config.js               # Configuration Next.js
├── package.json                 # Dépendances et scripts
├── postcss.config.js            # Configuration PostCSS
├── tailwind.config.js           # Configuration Tailwind CSS
└── tsconfig.json                # Configuration TypeScript
```

## Configuration de la base de données

### Prisma avec PostgreSQL

```bash
# Installer Prisma
npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql

# Configurer le schéma Prisma
cat > prisma/schema.prisma << EOL
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Définir vos modèles ici
EOL

# Créer le fichier de configuration de la base de données
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

## Configuration de l'authentification

### NextAuth.js

```bash
# Installer NextAuth.js
npm install next-auth

# Créer le fichier de configuration
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
