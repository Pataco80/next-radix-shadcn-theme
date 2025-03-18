# Gestion des versions des packages

Ce document définit les règles et conventions pour la gestion des versions des packages dans le projet.

## Versions principales

### Framework et Runtime

- **Next.js** : v15.x
- **React** : v19.x
- **TypeScript** : v5.x

### UI et Styling

- **Tailwind CSS** : v4.0.0
- **Shadcn UI** : version canary (compatible Tailwind v4)
- **Radix UI** : v2.0.0

## Installation des dépendances

### Installation standard

```bash
npm install <package-name>
```

### Installation avec --legacy-peer-deps

Certains packages nécessitent l'utilisation de `--legacy-peer-deps` en raison de conflits avec React 19 :

```bash
npm install <package-name> --legacy-peer-deps
```

#### Liste des packages nécessitant --legacy-peer-deps

1. **tailwind-animate**
   - Raison : Conflit avec React 19
   - Installation : `npm install tailwind-animate --legacy-peer-deps`
   - Statut : Temporaire, en attente de mise à jour

## Règles de gestion des versions

1. **Compatibilité React 19**

   - Privilégier les packages compatibles nativement avec React 19
   - Documenter les packages nécessitant `--legacy-peer-deps`
   - Suivre les mises à jour des packages pour la compatibilité

2. **Mises à jour de sécurité**

   - Appliquer immédiatement les mises à jour de sécurité
   - Tester la compatibilité après chaque mise à jour
   - Documenter les changements dans le CHANGELOG

3. **Gestion des conflits**

   - Identifier les conflits de versions
   - Documenter les solutions temporaires
   - Planifier la résolution des conflits

4. **Documentation**
   - Maintenir à jour la liste des versions
   - Documenter les procédures d'installation spéciales
   - Noter les dépendances obsolètes

## Procédures de mise à jour

1. **Vérification préalable**

   ```bash
   npm outdated
   ```

2. **Mise à jour des dépendances**

   ```bash
   npm update
   ```

3. **Vérification post-mise à jour**
   ```bash
   npm run test
   npm run build
   ```

## Bonnes pratiques

- Maintenir un fichier `package-lock.json` dans le contrôle de version
- Utiliser des versions fixes plutôt que des plages de versions
- Documenter les raisons des choix de versions
- Tester après chaque mise à jour de dépendances
