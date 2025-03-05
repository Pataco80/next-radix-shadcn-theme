# Project structure

This document describes in detail the structure of the Next.js Radix Theme project, explaining the role of each folder and important file.

## Overview

```
Next-Radix-theme/
├── .cspell.json           # Configuration for spelling verification
├── .cursorrules.md        # directives for the assistant IA Cursor
├── .editorconfig          # Configuration of the editor for a coherent coding style
├── .eslintrc.json         # configuration ESLint
├── .git/                  # Git repository
├── .gitignore             # Git exclusion patterns
├── .npmrc                 # NPM/PNPM configuration
├── .prettierrc            # Configuration of the Prettier code formatter
├── .private/              # Private files not committed in the repository
│   └── translations/      # Translations for documentation
│       └── en/            # English translations
├── .vscode/               # Specific settings for VS Code
│   └── settings.json      # VS Code settings
├── README.md              # Main project documentation
├── app/                   # Main file of the Next.js application (App Router)
│   ├── favicon.ico        # Website favicon
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── docs/                  # Detailed Project Documentation
│   ├── index.md           # Documentation entry point
│   ├── scripts.md         # Documentation of available scripts
│   ├── translation-guide.md # User guide for translation features
│   └── project-structure.md # This document
├── next-env.d.ts          # TypeScript declarations for Next.js
├── next.config.ts         # Configuration Next.js
├── node_modules/          # Dependencies (not tracked in Git)
├── package.json           # Project metadata and dependencies
├── pnpm-lock.yaml         # PNPM lock file
├── pnpm-workspace.yaml    # Configuration of the PNPM workspace
├── postcss.config.mjs     # PostCSS configuration
├── public/                # Static resources
├── scripts/               # Utility scripts
│   ├── translate-en.ts    # Script to translate Markdown files to English
│   └── translate-fr.ts    # Script to translate Markdown files to French
├── tsconfig.json          # Main TypeScript configuration
├── tsconfig.node.json     # TypeScript configuration for Node.js
└── tsconfig.scripts.json  # TypeScript configuration for scripts
```

## Main files

### `/app

This folder contains the main components of the Next.js application using the Router app. This is where the main logic of the application is located.

- `layout.tsx`: Root layout component that envelops all pages
- `page.tsx`: component of the home page
- `globals.css`: global CSS styles applied to the whole application
- `favicon.ico`: website icon

### `/docs`

This folder contains the detailed documentation of the project, organized in thematic Markdown files.

- `index.md`: entry point of documentation with a table of contents
- `scripts.md`: documentation of the scripts available in the project
- `Translation-guide.md`: User guide for translation features
- `Project --Tructure.md`: this document describing the structure of the project

### `/public`

This file contains the static resources which will be served at the root of the domain. Place the images, fonts and other static files here.

### `/scripts`

This file contains utility scripts to facilitate the development and maintenance of the project.

- `translate-fr.ts`: Typecript script to translate Markdown files into French

## Configuration files

### Configuration Next.js

- `next.config.ts`: main configuration of Next.js
- `next-env.d.ts`: Types Typecript for Next.js

### Typecript configuration

- `tsconfig.json`: Main TypeScript configuration for the project
- `tsconfig.node.json`: TypeScript configuration specific to Node.js environments
- `tsconfig.scripts.json`: TypeScript configuration for utility scripts in the `scripts/` folder

### Configuration of development tools

- `.cspell.json`: configuration for spelling verification
- `.editorconfig`: Configuration of the editor for a coherent coding style
- `.eslintrc.json`: Configuration is for the code line
- `.prettierrc`: Prettier configuration for formatting the code

### Package management configuration

- `package.json`: project metadata and outbuildings
- `pnpm-lock.yaml`: PNPM locking file
- `pnpm-torkspace.yam
- `.npmrc`: NPM/PNPM configuration

### Other configuration files

- `postcss.config.mjs`: postcss configuration for CSS treatment
- `.gitignore`: Git exclusion models

## Namage conventions

-Files use tiny names with dashes if necessary (ex: next-radix-theme`)- React components use Pascalcase (ex: `layout.tsx`,` page.tsx`)

- Configuration files generally use tiny names with points (eg: `.eslintrc.json`)
- hidden files start with a point (eg: `.gitignore`)

## Organization of the code

- React components are organized according to the structure of the app app de Next.js
- Documentation files are grouped in the `/docs` folder
- utility scripts are grouped in the `/scripts` folder
- Static resources are placed in the `/public ` file
