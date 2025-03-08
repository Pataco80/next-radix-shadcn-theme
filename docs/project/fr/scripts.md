# Scripts disponibles

Ce document décrit tous les scripts disponibles dans ce projet Next.js. Utilisez ces scripts avec votre gestionnaire de paquets préféré (npm, yarn, pnpm ou bun).

## Scripts de démarrage

- `dev`: Démarre le serveur de développement avec Turbopack

  ```bash
  pnpm dev
  ```

- `start`: Démarre l'application en mode production

  ```bash
  pnpm start
  ```

## Scripts de build

- `build`: Compile l'application pour la production

  ```bash
  pnpm build
  ```

- `rebuild`: Nettoie le dossier `.next` puis compile l'application

  ```bash
  pnpm rebuild
  ```

## Scripts de nettoyage

- `clean`: Supprime le dossier `.next`

  ```bash
  pnpm clean
  ```

- `clean:modules`: Supprime le dossier `node_modules`

  ```bash
  pnpm clean:modules
  ```

- `cache:clean`: Nettoie le cache de pnpm

  ```bash
  pnpm cache:clean
  ```

## Scripts de réinitialisation

- `refresh`: Nettoie le dossier `.next` puis démarre le serveur de développement

  ```bash
  pnpm refresh
  ```

- `reset`: Réinitialise complètement le projet (nettoie `.next`, supprime `node_modules` et réinstalle les dépendances)

  ```bash
  pnpm reset
  ```

## Scripts d'installation

- `update-lock`: Met à jour le fichier de verrouillage sans nettoyer le projet

  ```bash
  pnpm update-lock
  ```

- `install:timeout`: Installe les dépendances avec un délai réseau augmenté (pour les connexions lentes)

  ```bash
  pnpm install:timeout
  ```

- `install:registry`: Installe les dépendances en utilisant le registre npm officiel

  ```bash
  pnpm install:registry
  ```

## Scripts de linting

- `lint`: Exécute ESLint pour vérifier le code

  ```bash
  pnpm lint
  ```
