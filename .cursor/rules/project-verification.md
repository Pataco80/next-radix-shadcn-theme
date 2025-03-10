# Règles de vérification du projet

Ce document définit les règles et comportements pour la vérification globale du projet et la mise à jour des structures de dossiers.

## Vérification complète du projet

L'assistant doit effectuer une vérification complète du projet dans les cas suivants :

1. Au démarrage d'une nouvelle session de travail
2. À la demande explicite de l'utilisateur

### Comportement attendu lors de la vérification

Lors d'une vérification complète, l'assistant doit :

1. Analyser la structure actuelle des dossiers du projet
2. Vérifier la cohérence entre les différentes parties du projet :
   - Cohérence entre le code et la documentation
   - Cohérence entre les versions française et anglaise de la documentation
   - Cohérence entre les dépendances déclarées et utilisées
3. Identifier les fichiers qui nécessitent une mise à jour
4. Vérifier que les blocs de structure des dossiers sont à jour dans tous les fichiers de documentation
5. Vérifier la présence de problèmes potentiels (imports manquants, dépendances obsolètes, etc.)
6. Proposer des actions correctives si des incohérences sont détectées

### Exemple de déclenchement de vérification

```
User: Effectue une vérification complète du projet
Assistant: Je vais effectuer une vérification complète du projet :

1. Analyse de la structure des dossiers
2. Vérification de la cohérence du code et de la documentation
3. Vérification des dépendances
4. Vérification des blocs de structure

Voici les résultats de la vérification :
- Structure des dossiers : OK
- Cohérence code/documentation : 3 fichiers nécessitent une mise à jour
- Dépendances : 2 dépendances inutilisées détectées
- Blocs de structure : 1 fichier nécessite une mise à jour

Souhaitez-vous que j'effectue les mises à jour nécessaires ?
```

## Mise à jour des blocs de structure

L'assistant doit mettre à jour les blocs de structure des dossiers dans les cas suivants :

1. Lorsque la structure des dossiers du projet a été modifiée
2. À la demande explicite de l'utilisateur
3. Suite à une vérification complète qui a détecté des incohérences

### Comportement attendu lors de la mise à jour

Lors de la mise à jour des blocs de structure, l'assistant doit :

1. Générer une représentation à jour de la structure des dossiers du projet
2. Identifier tous les fichiers de documentation qui contiennent des blocs de structure
3. Mettre à jour ces blocs dans tous les fichiers concernés
4. Si le projet est multilingue, mettre à jour d'abord les fichiers dans la langue principale, puis proposer de mettre à jour les traductions

### Format des blocs de structure

Les blocs de structure doivent être formatés de manière cohérente :

```
📁 project-root/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📄 Button.tsx
│   │   └── 📄 Card.tsx
│   ├── 📁 pages/
│   │   ├── 📄 index.tsx
│   │   └── 📄 about.tsx
│   └── 📄 layout.tsx
├── 📁 docs/
│   ├── 📁 fr/
│   │   └── 📄 README.md
│   └── 📁 en/
│       └── 📄 README.md
└── 📄 package.json
```

### Exemple de déclenchement de mise à jour

```
User: Mets à jour les blocs de structure dans la documentation
Assistant: Je vais mettre à jour les blocs de structure des dossiers dans la documentation :

1. Génération de la structure actuelle des dossiers
2. Identification des fichiers contenant des blocs de structure
3. Mise à jour des blocs dans tous les fichiers concernés

Voici les fichiers qui seront mis à jour :
- docs/fr/README.md
- docs/fr/project-structure.md
- docs/en/README.md
- docs/en/project-structure.md

Souhaitez-vous procéder à la mise à jour ?
```

## Analyse des dépendances

L'assistant doit analyser les dépendances du projet dans les cas suivants :

1. Au démarrage d'une nouvelle session de travail
2. À la demande explicite de l'utilisateur
3. Après l'ajout ou la suppression de dépendances

### Comportement attendu lors de l'analyse

Lors de l'analyse des dépendances, l'assistant doit :

1. Identifier toutes les dépendances déclarées dans les fichiers de configuration (package.json, etc.)
2. Vérifier quelles dépendances sont effectivement utilisées dans le code
3. Identifier les dépendances obsolètes ou inutilisées
4. Vérifier si des dépendances utilisées ne sont pas déclarées
5. Proposer des actions correctives si nécessaire

### Exemple de déclenchement d'analyse

```
User: Analyse les dépendances du projet
Assistant: Je vais analyser les dépendances du projet :

1. Identification des dépendances déclarées
2. Vérification de l'utilisation des dépendances
3. Recherche de dépendances manquantes ou obsolètes

Voici les résultats de l'analyse :
- Dépendances déclarées : 25
- Dépendances utilisées : 23
- Dépendances inutilisées : 2 (lodash, moment)
- Dépendances manquantes : 1 (react-icons)

Souhaitez-vous que je mette à jour le fichier package.json pour refléter ces résultats ?
```

## Commandes de vérification

L'assistant doit reconnaître et exécuter les commandes suivantes :

```
User: Vérifie l'état du projet
Assistant: Je vais effectuer une vérification complète du projet. Cela inclut l'analyse de la structure des dossiers, la vérification de la cohérence de la documentation et l'analyse des dépendances. Souhaitez-vous procéder ?
```

```
User: Mets à jour les blocs de structure
Assistant: Je vais mettre à jour les blocs de structure des dossiers dans tous les fichiers de documentation concernés. Souhaitez-vous procéder ?
```

```
User: Analyse les dépendances
Assistant: Je vais analyser les dépendances du projet pour identifier celles qui sont inutilisées ou manquantes. Souhaitez-vous procéder ?
```
