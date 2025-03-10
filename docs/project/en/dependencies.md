# Project Dependencies

This document describes the main dependencies used in the Next.js Radix Theme project and their role.

## Production Dependencies

### Framework and UI

- **next**: React framework for web application development
- **react**: JavaScript library for building user interfaces
- **react-dom**: Package for manipulating the DOM in React applications

### Utilities

- **ts-node**: Run TypeScript directly without prior compilation

### Translation (pending)

- **@iamtraction/google-translate**: Library for integration with the Google Translate API
  > **Note**: This dependency is currently pending work to be done on the `feature/translate` branch. It will be used to automate the translation of documentation from French to English.

## Development Dependencies

### Linting and Formatting

- **eslint**: Static analysis tool to identify problems in JavaScript code
- **eslint-config-next**: Recommended ESLint configuration for Next.js projects
- **eslint-config-prettier**: Disables ESLint rules that might conflict with Prettier

### TypeScript

- **typescript**: Programming language that adds static types to JavaScript
- **@types/node**: TypeScript types for Node.js
- **@types/react**: TypeScript types for React
- **@types/react-dom**: TypeScript types for React DOM

### CSS and UI

- **tailwindcss**: Utility-first CSS framework
- **@tailwindcss/postcss**: PostCSS plugins for Tailwind CSS

### Bundle and Dependency Analysis

- **@next/bundle-analyzer**: Official Next.js plugin for analyzing JavaScript bundles
  > **Usage**: Run `pnpm analyze` to generate a visual analysis of the application bundle
- **bundle-buddy**: Complementary tool for analyzing duplications in JavaScript bundles
- **depcheck**: Tool for identifying unused dependencies in the project
  > **Usage**: Run `pnpm check-deps` to get a list of unused dependencies

## Available Scripts

### Bundle Analysis

```bash
# Analyze the application bundle
pnpm analyze
```

This script generates a visual analysis of the application bundle in your browser, allowing you to identify:

- The size of different modules
- The largest dependencies
- Optimization opportunities
- Detailed composition of each bundle

### Checking Unused Dependencies

```bash
# Check for unused dependencies
pnpm check-deps
```

This script analyzes the project's source code and identifies:

- Unused production dependencies
- Unused development dependencies
- Files that could be imported but aren't

### Bundle Analyzer Configuration

The bundle analyzer is configured in the `next.config.mjs` file:

```javascript
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
	// Next.js configuration
}

export default withBundleAnalyzer(nextConfig)
```

### Depcheck Configuration

Depcheck is configured in the `.depcheckrc.json` file:

```json
{
	"ignorePatterns": ["node_modules", ".next", "public", "*.d.ts"],
	"ignoreMatches": [
		"@types/*",
		"eslint-*",
		"@eslint/*",
		"typescript",
		"@next/bundle-analyzer",
		"tailwindcss",
		"@tailwindcss/*"
	],
	"specials": [
		"bin",
		"eslint",
		"tslint",
		"webpack",
		"jest",
		"mocha",
		"react",
		"next"
	]
}
```
