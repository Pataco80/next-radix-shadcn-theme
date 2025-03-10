# Project Structure

This document describes in detail the structure of the Next.js Radix Theme project, explaining the role of each folder and important files.

## Overview

```
📁 Next-Radix-theme/
├── 📄 .cursorrules.md               # Guidelines for the Cursor AI assistant
├── 📄 .editorconfig                 # Editor configuration for consistent coding style
├── 📄 .cspell.json                  # Spell checking configuration
├── 📄 .eslintrc.json                # ESLint configuration
├── 📁 .git/                         # Git repository
├── 📄 .gitignore                    # Git exclusion patterns
├── 📄 .npmrc                        # NPM/PNPM configuration
├── 📄 .prettierrc                   # Prettier code formatter configuration
├── 📁 .private/                     # Private files not committed to the repository
├── 📁 .vscode/                      # VS Code specific settings
│   └── 📄 settings.json             # VS Code settings
├── 📄 README.md                     # Main project documentation
├── 📁 app/                          # Main Next.js application folder (App Router)
│   ├── 📄 favicon.ico               # Website favicon
│   ├── 📄 globals.css               # Global CSS styles
│   ├── 📄 layout.tsx                # Root layout component
│   └── 📄 page.tsx                  # Home page component
├── 📁 css/                          # CSS files for the application
|   └── 📁 globals/                  # Global variables
│       ├── 📄 fluid-grid.css        # CSS grid with fluid system
│       ├── 📄 fluid-spacing.css     # CSS spacing with fluid system
│       └── 📄 fluid-typography.css  # CSS for fluid scale typography
├── 📁 docs/                         # Detailed project documentation
│   ├── 📄 index.md                  # Documentation entry point
│   ├── 📄 project-design.md         # Project design documentation
│   ├── 📄 project-structure.md      # Project structure documentation
│   ├── 📄 scripts.md                # Available scripts documentation
│   ├── 📁 en/                       # English translations of documentation
│   └── 📁 fr/                       # French translations of documentation
├── 📄 next-env.d.ts                 # TypeScript declarations for Next.js
├── 📄 next.config.ts                # Next.js configuration
├── 📁 node_modules/                 # Dependencies (not tracked in Git)
├── 📄 package.json                  # Project metadata and dependencies
├── 📄 pnpm-lock.yaml                # PNPM lock file
├── 📄 pnpm-workspace.yaml           # PNPM workspace configuration
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📁 public/                       # Static assets
├── 📁 scripts/                      # Utility scripts
├── 📄 tsconfig.json                 # Main TypeScript configuration
├── 📄 tsconfig.node.json            # TypeScript configuration for Node.js
└── 📄 tsconfig.scripts.json         # TypeScript configuration for scripts
```

## Main Files

### `/app`

This folder contains the main components of the Next.js application using the App Router. This is where the main application logic resides.

- `layout.tsx`: Root layout component that wraps all pages
- `page.tsx`: Home page component
- `globals.css`: Global CSS styles applied to the entire application
- `favicon.ico`: Website icon

### `/docs`

This folder contains detailed project documentation, organized into thematic Markdown files.

- `index.md`: Documentation entry point with a table of contents
- `scripts.md`: Documentation of available scripts in the project
- `project-structure.md`: This document describing the project structure

### `/public`

This folder contains static assets that will be served at the root of the domain. Place images, fonts, and other static files here.

### `/scripts`

This folder contains utility scripts to facilitate project development and maintenance.

## Configuration Files

### Next.js Configuration

- `next.config.ts`: Main Next.js configuration
- `next-env.d.ts`: TypeScript types for Next.js

### TypeScript Configuration

- `tsconfig.json`: TypeScript configuration for the project
- `tsconfig.node.json`: TypeScript configuration for Node.js
- `tsconfig.scripts.json`: TypeScript configuration for scripts

### Development Tools Configuration

- `.cspell.json`: Configuration for spell checking
- `.editorconfig`: Editor configuration for consistent coding style
- `.eslintrc.json`: Configuration for code linting
- `.prettierrc`: Prettier configuration for code formatting

### Package Management Configuration

- `package.json`: Project metadata and dependencies
- `pnpm-lock.yaml`: PNPM lock file
- `pnpm-workspace.yaml`: PNPM workspace configuration
- `.npmrc`: NPM/PNPM configuration

### Other Configuration Files

- `postcss.config.mjs`: PostCSS configuration for CSS processing
- `.gitignore`: Git exclusion patterns

## Naming Conventions

- Files use lowercase names with hyphens if needed (e.g., `next-radix-shadcn-theme`)
- React components use PascalCase (e.g., `Layout.tsx`, `Page.tsx`)
- Configuration files generally use lowercase names with dots (e.g., `.eslintrc.json`)
- Hidden files start with a dot (e.g., `.gitignore`)

## Code Organization

- React components are organized according to Next.js App Router structure
- Documentation files are grouped in the `/docs` folder
- Utility scripts are grouped in the `/scripts` folder
- Static assets are placed in the `/public` folder
