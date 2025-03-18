# Dépendances du projet

Ce document liste les principales dépendances utilisées dans le projet et explique leur rôle.

## Dépendances principales

### Framework et Runtime

- **Next.js** (v15.x)

  - Framework React pour la production
  - Support du SSR (Server Side Rendering)
  - Routing intégré
  - Optimisation des performances

- **React** (v19.x)
  - Bibliothèque UI
  - Support des Hooks
  - Virtual DOM
  - Composants réutilisables

### Styling et UI

- **Tailwind CSS** (v4.0.0)

  - Framework CSS utilitaire
  - Configuration via CSS natif
  - Support des variables CSS
  - Système de plugins

- **Shadcn UI** (version canary - compatible Tailwind v4)

  - Bibliothèque de composants
  - Basée sur Radix UI
  - Hautement personnalisable
  - Accessible par défaut

- **Radix UI** (v2.0.0)
  - Primitives de composants accessibles
  - Support des thèmes
  - API cohérente
  - Focus sur l'accessibilité

### Outils de développement

- **TypeScript** (v5.x)

  - Typage statique
  - Support IDE amélioré
  - Meilleure maintenabilité
  - Détection d'erreurs précoce

- **ESLint** (dernière version)

  - Linting du code
  - Règles personnalisables
  - Intégration IDE
  - Maintien de la qualité du code

- **Prettier** (dernière version)
  - Formatage du code
  - Configuration cohérente
  - Intégration IDE
  - Maintien du style de code

## Dépendances de développement

### Tests

- **Jest**

  - Framework de test
  - Support des snapshots
  - Tests unitaires
  - Tests d'intégration

- **Testing Library**
  - Tests de composants React
  - Tests d'intégration
  - Focus sur l'accessibilité
  - Tests orientés utilisateur

### Build et Bundling

- **PostCSS**

  - Transformation CSS
  - Support des plugins
  - Optimisation CSS
  - Compatibilité navigateurs

- **Autoprefixer**
  - Préfixes CSS automatiques
  - Compatibilité navigateurs
  - Intégration PostCSS
  - Maintenance simplifiée

## Notes sur les versions

- Les versions majeures sont maintenues à jour
- Les mises à jour de sécurité sont appliquées rapidement
- La compatibilité entre les dépendances est vérifiée
- Les versions sont synchronisées avec le système de CI/CD

## Gestion des dépendances

### Installation

```bash
npm install   # Installation des dépendances
npm run dev   # Démarrage du serveur de développement
```

### Mise à jour

```bash
npm update    # Mise à jour des dépendances
npm outdated  # Vérification des versions obsolètes
```

### Scripts disponibles

Voir le fichier [scripts.md](./scripts.md) pour plus de détails sur les scripts disponibles.

## Dépendances avec --legacy-peer-deps

Certaines dépendances nécessitent l'utilisation de l'option `--legacy-peer-deps` en raison de conflits de versions avec React 19. Voici la liste :

### UI et Animation

- **tailwind-animate**
  - Conflit avec React 19
  - Installation : `npm install tailwind-animate --legacy-peer-deps`
  - Utilisé pour les animations fluides
  - Compatible avec Tailwind CSS v4

### Notes sur --legacy-peer-deps

- Cette option est utilisée pour contourner les vérifications strictes de compatibilité des dépendances
- Nécessaire principalement pour les packages qui n'ont pas encore mis à jour leurs peer dependencies pour React 19
- À utiliser avec précaution et uniquement pour les packages connus comme fonctionnels
- Les mises à jour futures devraient résoudre ces conflits
