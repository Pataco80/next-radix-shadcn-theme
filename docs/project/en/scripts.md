# Available Scripts

This document describes all the scripts available in this Next.js project. Use these scripts with your preferred package manager (npm, yarn, pnpm, or bun).

## Startup Scripts

- `dev`: Starts the development server with Turbopack

  ```bash
  pnpm dev
  ```

- `start`: Starts the application in production mode

  ```bash
  pnpm start
  ```

## Build Scripts

- `build`: Compiles the application for production

  ```bash
  pnpm build
  ```

- `rebuild`: Cleans the `.next` folder then compiles the application

  ```bash
  pnpm rebuild
  ```

## Cleaning Scripts

- `clean`: Removes the `.next` folder

  ```bash
  pnpm clean
  ```

- `clean:modules`: Removes the `node_modules` folder

  ```bash
  pnpm clean:modules
  ```

- `cache:clean`: Cleans the pnpm cache

  ```bash
  pnpm cache:clean
  ```

## Reset Scripts

- `refresh`: Cleans the `.next` folder then starts the development server

  ```bash
  pnpm refresh
  ```

- `reset`: Completely resets the project (cleans `.next`, removes `node_modules`, and reinstalls dependencies)

  ```bash
  pnpm reset
  ```

## Installation Scripts

- `update-lock`: Updates the lock file without cleaning the project

  ```bash
  pnpm update-lock
  ```

- `install:timeout`: Installs dependencies with increased network timeout (for slow connections)

  ```bash
  pnpm install:timeout
  ```

- `install:registry`: Installs dependencies using the official npm registry

  ```bash
  pnpm install:registry
  ```

## Linting Scripts

- `lint`: Runs ESLint to check the code

  ```bash
  pnpm lint
  ```
