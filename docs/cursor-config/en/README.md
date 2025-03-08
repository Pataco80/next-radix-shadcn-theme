# Development Guidelines with Cursor

This directory contains guidelines and conventions for developing TypeScript, Node.js, and Next.js applications with Cursor.

## Overview

These guidelines aim to establish consistent practices for developing modern applications using the following technologies:

- TypeScript
- Node.js
- Next.js
- React 19 with Server Components
- Shadcn UI, Radix, and Tailwind CSS

## Cursor Rules Structure

> **Important note**: The rules for Cursor have been separated to better structure and thus reduce the amount of code per file.

```
next-radix-shadcn-theme/
├── .cursor/rules/                 # Cursor rules folder
│   ├── README.md                  # General overview and introduction
│   ├── code-style.md              # Code style and structure
│   ├── naming-conventions.md      # Naming conventions
│   ├── typescript-guidelines.md   # TypeScript usage
│   ├── ui-style-guidelines.md     # UI and style
│   ├── performance-optimization.md # Performance optimization
│   ├── database-guidelines.md     # Database queries and models
│   ├── git-workflow.md            # Git-flow configuration and conventions
│   ├── project-setup.md           # Project initialization
│   └── scripts/
│       └── setup.sh               # Interactive setup script
└── ...                            # Other project files and folders
```

## Documentation

- [Code Style and Structure](./code-style.md)
- [Naming Conventions](./naming-conventions.md)
- [TypeScript Usage](./typescript-guidelines.md)
- [UI and Style](./ui-style-guidelines.md)
- [Performance Optimization](./performance-optimization.md)
- [Database Queries and Models](./database-guidelines.md)
- [Git-flow Configuration and Conventions](./git-workflow.md)
- [Project Initialization](./project-setup.md)

## Setup Script

To initialize a new project with these guidelines, you can use the interactive setup script:

```bash
bash .cursor/rules/scripts/setup.sh
```

This script will guide you through configuration choices for:

- Git-flow initialization
- Headless CMS installation
- Database configuration
- UI components installation
- Authentication setup
- And more...

## Core Principles

- Write concise and technical TypeScript code
- Favor server components and functional approach
- Optimize performance and user experience
- Follow Git-flow conventions for source code management
- Use modern tools for web development

Refer to individual files for detailed guidelines on each aspect of development.
