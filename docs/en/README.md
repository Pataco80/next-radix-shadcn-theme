This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```
next-radix-theme/
├── .cspell.json                # Configuration for spell checking
├── .cursorrules.md             # Guidelines for Cursor AI assistant
├── .editorconfig               # Editor configuration for consistent coding style
├── .eslintrc.json              # ESLint configuration
├── .git/                       # Git repository
├── .gitignore                  # Git ignore patterns
├── .npmrc                      # NPM/PNPM configuration
├── .prettierrc                 # Prettier code formatter configuration
├── README.md                   # Project documentation (this file)
├── app/                        # Next.js App Router directory
│   ├── favicon.ico             # Website favicon
│   ├── globals.css             # Global CSS styles
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Home page component
├── docs/                       # Detailed project documentation
│   ├── index.md                # Documentation entry point
│   ├── scripts.md              # Available scripts documentation
│   ├── translation-guide.md    # Translation features guide
│   ├── project-structure.md    # Detailed project structure
│   ├── project-design.md       # Detailed project design
│   ├── en/                     # English translations of documentation
│   └── fr/                     # French translations of documentation
├── next-env.d.ts               # TypeScript declarations for Next.js
├── next.config.ts              # Next.js configuration
├── node_modules/               # Dependencies (not tracked in git)
├── package.json                # Project metadata and dependencies
├── pnpm-lock.yaml              # PNPM lock file
├── pnpm-workspace.yaml         # PNPM workspace configuration
├── postcss.config.mjs          # PostCSS configuration
├── public/                     # Static assets
├── scripts/                    # Utility scripts
│   ├── translate-en.ts         # Script to translate Markdown files to English
│   └── translate-fr.ts         # Script to translate Markdown files to French
├── tsconfig.json               # Main TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node.js
└── tsconfig.scripts.json       # TypeScript configuration for scripts
```

## Documentation

This project includes detailed documentation in the `docs/` directory:

- [Documentation Home](./docs/index.md) - Entry point with table of contents
- [Available Scripts](./docs/SCRIPTS.md) - Detailed description of all available scripts
- [Translation Guide](./docs/translation-guide.md) - How to use the translation features
- [Project Structure](./docs/project-structure.md) - Detailed explanation of project structure

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Custom Scripts

This project includes several custom scripts to help with development and maintenance. For a complete list with detailed descriptions, see [SCRIPTS.md](./docs/SCRIPTS.md).

Here are some of the most commonly used scripts:

```bash
# Start development server after cleaning .next folder
pnpm refresh

# Clean .next folder and build the project
pnpm rebuild

# Clean only the .next folder
pnpm clean

# Reset project: clean .next, remove node_modules, and reinstall dependencies
pnpm reset

# Translate specific Markdown files to French (outputs to docs/fr/)
pnpm translate:fr <file1.md> <file2.md> ...

# Translate all predefined Markdown files to French
pnpm translate:fr:all

# Find and translate all Markdown files in the project
pnpm translate:fr:find

# Translate all Markdown files in the docs/ folder to English (outputs to docs/en/)
pnpm translate:en
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.