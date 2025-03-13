# Directives de développement avec Cursor

Ce répertoire contient les directives et conventions pour le développement d'applications TypeScript, Node.js et Next.js avec Cursor.

## Aperçu

Ces directives visent à établir des pratiques cohérentes pour le développement d'applications modernes en utilisant les technologies suivantes :

- TypeScript
- Node.js
- Next.js
- React 19 avec Server Components
- Shadcn UI, Radix et Tailwind CSS

## Structure des règles Cursor

> **Note importante** : Les règles pour Cursor ont été séparées pour mieux structurer et diminuer ainsi la quantité de code par fichier.

```
next-radix-shadcn-theme/
├── .cursor/rules/                 # Dossier des règles de Cursor
│   ├── README.md                  # Aperçu général et introduction
│   ├── code-style.md              # Style et structure du code
│   ├── naming-conventions.md      # Conventions de nommage
│   ├── typescript-guidelines.md   # Utilisation de TypeScript
│   ├── ui-style-guidelines.md     # UI et style
│   ├── performance-optimization.md # Optimisation des performances
│   ├── database-guidelines.md     # Requêtes de base de données et modèles
│   ├── git-workflow.md            # Configuration Git-flow et conventions
│   ├── project-setup.md           # Initialisation du projet
│   ├── documentation-guidelines.md # Règles de documentation et traduction
│   └── scripts/
│       └── setup.sh               # Script d'initialisation interactif
└── ...                            # Autres fichiers et dossiers du projet
```

## Documentation

- [Style et structure du code](./code-style.md)
- [Conventions de nommage](./naming-conventions.md)
- [Utilisation de TypeScript](./typescript-guidelines.md)
- [UI et style](./ui-style-guidelines.md)
- [Optimisation des performances](./performance-optimization.md)
- [Requêtes de base de données et modèles](./database-guidelines.md)
- [Configuration Git-flow et conventions](./git-workflow.md)
- [Initialisation du projet](./project-setup.md)
- [Règles de documentation et traduction](./documentation-guidelines.md)

## Script d'initialisation

Pour initialiser un nouveau projet avec ces directives, vous pouvez utiliser le script d'initialisation interactif :

```bash
bash .cursor/rules/scripts/setup.sh
```

Ce script vous guidera à travers les choix de configuration pour :

- Initialisation de Git-flow
- Installation d'un Headless CMS
- Configuration d'une base de données
- Installation des composants UI
- Configuration de l'authentification
- Et plus encore...

## Principes fondamentaux

- Écrire du code TypeScript concis et technique
- Privilégier les composants serveur et l'approche fonctionnelle
- Optimiser les performances et l'expérience utilisateur
- Suivre les conventions Git-flow pour la gestion du code source
- Utiliser des outils modernes pour le développement web
- Maintenir une documentation bilingue (français et anglais) cohérente

Consultez les fichiers individuels pour des directives détaillées sur chaque aspect du développement.
