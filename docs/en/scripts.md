# Available scripts

This document describes all the scripts available in this project Next.js. Use these scripts with your favorite packet manager (NPM, YARN, PNPM or BUN).

## Start scripts

- `dev`: Starts the development server with Turbopack

  ```bash
  pnpm dev
  ```

- `start`: start the application in production mode
  ```bash
  pnpm start
  ```

## Build scripts

- `build`: Compile the application for production

  ```bash
  pnpm build
  ```

- `rebuild`: clean the `next` folder then compiles the application
  ```bash
  pnpm rebuild
  ```

## Cleaning scripts

- `clean`: delete the `.next` folder

  ```bash
  pnpm clean
  ```

- `clean:modules`: delete the `node_modules` folder

  ```bash
  pnpm clean:modules
  ```

- `cache:clean`: Clean the PNPM cache
  ```bash
  pnpm cache:clean
  ```

## Reset scripts

- `refresh`: cleans the `next` folder then starts the development server

  ```bash
  pnpm refresh
  ```

- `reset`: completely resets the project (clean `next`, deletes `node_modules` and reinstalls dependencies)
  ```bash
  pnpm reset
  ```

## Installation scripts

- `update-lock`: updates the locking file without cleaning the project

  ```bash
  pnpm update-lock
  ```

- `install:timeout`: install dependencies with an increased network time (for slow connections)

  ```bash
  pnpm install:timeout
  ```

- `install:registry`: Install the dependencies using the official NPM register
  ```bash
  pnpm install:registry
  ```

## Lint scripts

- `lint`: executes eslint to check the code
  ```bash
  pnpm lint
  ```

## Translation scripts

- `translate:fr`: Translated specific Markdown files in French

  ```bash
  pnpm translate:fr <file1.md> <file2.md> ...
  ```

- `translate:fr:all`: translates all predefined Markdown files in French

  ```bash
  pnpm translate:fr:all
  ```

- `translate:fr:find`: Research and translates all the Markdown files of the project in French

  ```bash
  pnpm translate:fr:find
  ```

- `translate:en`: Translates Markdown files from French to English

  ```bash
  pnpm translate:en
  ```

The translated files are saved in the `docs/fr/` and `docs/en/` folders respectively.
