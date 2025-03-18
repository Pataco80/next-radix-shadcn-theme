# Scripts disponibles

Ce document décrit les scripts disponibles dans le projet et leur utilisation.

## Scripts de développement

### `npm run dev`

Lance le serveur de développement Next.js.

```bash
npm run dev
# ou
pnpm dev
```

- Port par défaut : 3000
- Hot reloading activé
- Mode développement avec debugging

### `npm run build`

Compile l'application pour la production.

```bash
npm run build
# ou
pnpm build
```

- Optimisation des assets
- Génération des pages statiques
- Vérification des types TypeScript
- Analyse des performances

### `npm run start`

Lance l'application en mode production.

```bash
npm run start
# ou
pnpm start
```

- Port par défaut : 3000
- Optimisé pour la production
- Nécessite un build préalable

## Scripts de qualité de code

### `npm run lint`

Lance ESLint pour vérifier le code.

```bash
npm run lint
# ou
pnpm lint
```

- Vérifie la syntaxe
- Applique les règles de style
- Détecte les problèmes potentiels

### `npm run format`

Formate le code avec Prettier.

```bash
npm run format
# ou
pnpm format
```

- Formate tous les fichiers supportés
- Applique les règles de style
- Met à jour les fichiers in-place

## Scripts de test

### `npm run test`

Lance les tests unitaires avec Jest.

```bash
npm run test
# ou
pnpm test
```

- Exécute tous les tests
- Génère un rapport de couverture
- Mode CI par défaut

### `npm run test:watch`

Lance les tests en mode watch.

```bash
npm run test:watch
# ou
pnpm test:watch
```

- Surveille les changements
- Relance les tests automatiquement
- Idéal pour le développement

## Scripts de gestion des dépendances

### `npm run update`

Met à jour les dépendances.

```bash
npm run update
# ou
pnpm update
```

- Met à jour package.json
- Met à jour le lockfile
- Vérifie les compatibilités

### `npm run clean`

Nettoie les fichiers générés.

```bash
npm run clean
# ou
pnpm clean
```

- Supprime node_modules
- Supprime .next
- Supprime les caches

## Scripts personnalisés

### `npm run analyze`

Analyse la taille du bundle.

```bash
npm run analyze
# ou
pnpm analyze
```

- Génère un rapport visuel
- Identifie les gros modules
- Suggestions d'optimisation

### `npm run type-check`

Vérifie les types TypeScript.

```bash
npm run type-check
# ou
pnpm type-check
```

- Vérifie tous les fichiers
- Sans émission de fichiers
- Rapide pour le CI

## Environnements

Les scripts peuvent être exécutés dans différents environnements :

### Développement

```bash
NODE_ENV=development npm run dev
```

- Variables d'environnement de dev
- Outils de développement activés
- Logs détaillés

### Production

```bash
NODE_ENV=production npm run build
NODE_ENV=production npm run start
```

- Variables d'environnement de prod
- Optimisations activées
- Logs minimaux

### Test

```bash
NODE_ENV=test npm run test
```

- Variables d'environnement de test
- Base de données de test
- Mocks activés

## Configuration

Les scripts peuvent être configurés via :

1. `.env` files
2. Arguments en ligne de commande
3. Variables d'environnement

Exemple :

```bash
# Port personnalisé
PORT=4000 npm run dev

# Base URL personnalisée
NEXT_PUBLIC_API_URL=http://api.local npm run dev

# Mode debug
DEBUG=* npm run dev
```

## Bonnes pratiques

1. Toujours utiliser `npm run` ou `pnpm`
2. Vérifier le statut de sortie des scripts
3. Utiliser les variables d'environnement
4. Documenter les modifications

## Dépannage

### Problèmes courants

1. **Port déjà utilisé**

   ```bash
   PORT=3001 npm run dev
   ```

2. **Erreurs de mémoire**

   ```bash
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

3. **Cache corrompu**
   ```bash
   npm run clean && npm install
   ```

### Logs

- `npm run dev` : Console du navigateur
- `npm run build` : Terminal
- `npm run test` : Sortie Jest

## Intégration continue

Les scripts sont utilisés dans le CI/CD :

```yaml
# .github/workflows/ci.yml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```
