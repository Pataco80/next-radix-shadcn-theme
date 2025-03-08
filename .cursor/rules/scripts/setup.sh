#!/bin/bash
echo "Configuration initiale du projet"

# Fonction pour poser une question Yes/No
ask_yes_no() {
  while true; do
    read -p "$1 (Yes/No): " yn
    case $yn in
      [Yy]* ) return 0;;
      [Nn]* ) return 1;;
      * ) echo "Veuillez répondre Yes ou No.";;
    esac
  done
}

# Initialisation Git-flow
if ask_yes_no "Voulez-vous initialiser Git-flow dans ce projet?"; then
  echo "Initialisation de Git-flow..."
  git init
  git branch -m main
  git checkout -b develop
  echo "Branches main et develop créées."

  # Création des fichiers de configuration pour Git-flow
  mkdir -p .github/workflows
  echo "Vous pouvez maintenant créer des branches avec les préfixes suivants:"
  echo "  - feature/* pour les nouvelles fonctionnalités"
  echo "  - bugfix/* pour les corrections de bugs"
  echo "  - release/* pour la préparation des versions"
  echo "  - hotfix/* pour les corrections urgentes"
fi

# Headless CMS
if ask_yes_no "Voulez-vous installer un Headless CMS?"; then
  echo "Choisissez un Headless CMS:"
  select cms in "Contentful" "Strapi" "Hygraph" "Autre"; do
    case $cms in
      Contentful)
        echo "Installation de Contentful..."
        npm install contentful contentful-management @contentful/rich-text-react-renderer
        break
        ;;
      Strapi)
        echo "Installation de Strapi..."
        npm install @strapi/strapi @strapi/sdk-js
        break
        ;;
      Hygraph)
        echo "Installation de Hygraph..."
        npm install graphql-request graphql
        break
        ;;
      Autre)
        read -p "Entrez le nom du CMS que vous souhaitez utiliser: " custom_cms
        echo "Vous avez choisi d'utiliser $custom_cms. Veuillez installer les dépendances nécessaires manuellement."
        break
        ;;
    esac
  done
fi

# Base de données
if ask_yes_no "Voulez-vous configurer une base de données?"; then
  echo "Choisissez une base de données:"
  select db in "PostgreSQL" "MySQL" "MongoDB" "Supabase" "PlanetScale" "Neon" "Firestore" "SQLite"; do
    case $db in
      PostgreSQL)
        echo "Configuration de PostgreSQL avec Prisma..."
        npm install prisma @prisma/client
        npx prisma init --datasource-provider postgresql
        echo "N'oubliez pas de configurer votre DATABASE_URL dans le fichier .env"
        break
        ;;
      MySQL)
        echo "Configuration de MySQL avec Prisma..."
        npm install prisma @prisma/client
        npx prisma init --datasource-provider mysql
        echo "N'oubliez pas de configurer votre DATABASE_URL dans le fichier .env"
        break
        ;;
      MongoDB)
        echo "Configuration de MongoDB..."
        npm install mongodb mongoose
        mkdir -p src/models
        echo "N'oubliez pas de configurer votre MONGODB_URI dans le fichier .env"
        break
        ;;
      Supabase)
        echo "Installation de Supabase..."
        npm install @supabase/supabase-js
        echo "N'oubliez pas de configurer SUPABASE_URL et SUPABASE_ANON_KEY dans le fichier .env"
        break
        ;;
      PlanetScale)
        echo "Configuration de PlanetScale avec Prisma..."
        npm install prisma @prisma/client
        npx prisma init --datasource-provider mysql
        echo "Ajoutez la configuration spécifique à PlanetScale dans votre schema.prisma"
        echo "N'oubliez pas de configurer votre DATABASE_URL dans le fichier .env"
        break
        ;;
      Neon)
        echo "Configuration de Neon avec Prisma..."
        npm install prisma @prisma/client
        npx prisma init --datasource-provider postgresql
        echo "Ajoutez la configuration spécifique à Neon dans votre schema.prisma"
        echo "N'oubliez pas de configurer votre DATABASE_URL dans le fichier .env"
        break
        ;;
      Firestore)
        echo "Installation de Firestore..."
        npm install firebase firebase-admin
        mkdir -p src/firebase
        echo "N'oubliez pas de configurer les clés Firebase dans le fichier .env"
        break
        ;;
      SQLite)
        echo "Configuration de SQLite avec Prisma..."
        npm install prisma @prisma/client
        npx prisma init --datasource-provider sqlite
        break
        ;;
    esac
  done
fi

# UI Components
if ask_yes_no "Voulez-vous installer Shadcn UI?"; then
  echo "Installation de Shadcn UI..."
  npx shadcn-ui@latest init
  
  echo "Quels composants Shadcn UI souhaitez-vous installer?"
  components=("button" "card" "dialog" "dropdown-menu" "form" "input" "select" "tabs" "toast" "toggle" "tous" "aucun")
  
  select choice in "${components[@]}"; do
    case $choice in
      "tous")
        echo "Installation de tous les composants Shadcn UI..."
        npx shadcn-ui@latest add button card dialog dropdown-menu form input select tabs toast toggle
        break
        ;;
      "aucun")
        echo "Aucun composant installé. Vous pourrez les ajouter plus tard avec 'npx shadcn-ui@latest add <component>'."
        break
        ;;
      *)
        echo "Installation du composant $choice..."
        npx shadcn-ui@latest add $choice
        if ask_yes_no "Voulez-vous installer d'autres composants?"; then
          continue
        else
          break
        fi
        ;;
    esac
  done
fi

# Authentification
if ask_yes_no "Voulez-vous configurer l'authentification?"; then
  echo "Choisissez une solution d'authentification:"
  select auth in "NextAuth.js" "Clerk" "Supabase Auth" "Firebase Auth" "Auth0" "Aucune"; do
    case $auth in
      "NextAuth.js")
        echo "Installation de NextAuth.js..."
        npm install next-auth
        mkdir -p app/api/auth/[...nextauth]
        echo "Configuration de base créée. Vous devrez compléter la configuration dans app/api/auth/[...nextauth]/route.ts"
        break
        ;;
      "Clerk")
        echo "Installation de Clerk..."
        npm install @clerk/nextjs
        echo "N'oubliez pas de configurer vos clés Clerk dans le fichier .env"
        break
        ;;
      "Supabase Auth")
        echo "Configuration de Supabase Auth..."
        npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
        echo "N'oubliez pas de configurer SUPABASE_URL et SUPABASE_ANON_KEY dans le fichier .env"
        break
        ;;
      "Firebase Auth")
        echo "Installation de Firebase Auth..."
        npm install firebase firebase-admin
        echo "N'oubliez pas de configurer les clés Firebase dans le fichier .env"
        break
        ;;
      "Auth0")
        echo "Installation de Auth0..."
        npm install @auth0/nextjs-auth0
        echo "N'oubliez pas de configurer vos clés Auth0 dans le fichier .env"
        break
        ;;
      "Aucune")
        echo "Aucune solution d'authentification installée."
        break
        ;;
    esac
  done
fi

# Gestion d'état
if ask_yes_no "Voulez-vous installer une bibliothèque de gestion d'état?"; then
  echo "Choisissez une bibliothèque de gestion d'état:"
  select state in "Zustand" "Jotai" "Redux Toolkit" "Recoil" "TanStack Query (React Query)" "SWR" "Aucune"; do
    case $state in
      "Zustand")
        echo "Installation de Zustand..."
        npm install zustand
        break
        ;;
      "Jotai")
        echo "Installation de Jotai..."
        npm install jotai
        break
        ;;
      "Redux Toolkit")
        echo "Installation de Redux Toolkit..."
        npm install @reduxjs/toolkit react-redux
        break
        ;;
      "Recoil")
        echo "Installation de Recoil..."
        npm install recoil
        break
        ;;
      "TanStack Query (React Query)")
        echo "Installation de TanStack Query..."
        npm install @tanstack/react-query
        break
        ;;
      "SWR")
        echo "Installation de SWR..."
        npm install swr
        break
        ;;
      "Aucune")
        echo "Aucune bibliothèque de gestion d'état installée."
        break
        ;;
    esac
  done
fi

# Outils de développement supplémentaires
if ask_yes_no "Voulez-vous installer des outils de développement supplémentaires?"; then
  tools=()
  
  if ask_yes_no "Installer ESLint et Prettier?"; then
    tools+=("eslint prettier eslint-config-prettier")
  fi
  
  if ask_yes_no "Installer Husky et lint-staged pour les hooks Git?"; then
    tools+=("husky lint-staged")
  fi
  
  if ask_yes_no "Installer TypeScript?"; then
    tools+=("typescript @types/node @types/react @types/react-dom")
  fi
  
  if [ ${#tools[@]} -gt 0 ]; then
    echo "Installation des outils de développement: ${tools[*]}"
    npm install -D ${tools[*]}
  fi
fi

echo "Configuration terminée!"
echo "Vous pouvez maintenant commencer à développer votre application Next.js." 