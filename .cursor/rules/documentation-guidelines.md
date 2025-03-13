# Règles de documentation et traduction

## Conventions de nommage des fichiers de documentation

### Structure des noms de fichiers

1. **Fichiers README.md**

   - Doivent être succincts
   - Contiennent uniquement les informations essentielles
   - Servent de point d'entrée et de navigation

2. **Fichiers préfixés `project-`**

   - Exemple : `project-design.md`, `project-structure.md`
   - Contenu descriptif et pédagogique
   - Exemples simples et concis
   - Focus sur l'utilisation pratique

3. **Fichiers techniques (sans préfixe)**
   - Exemple : `fluid-system.md`, `typescript-setup.md`
   - Documentation technique détaillée
   - Cas d'utilisation avancés
   - Exemples complets de composants
   - Détails d'implémentation

### Règles de contenu par type

#### README.md

```markdown
# Titre du projet

- Introduction brève (2-3 lignes)
- Points clés (liste courte)
- Navigation vers la documentation détaillée
```

#### Fichiers project-\*.md

```markdown
# Sujet

- Description claire du concept
- Exemples d'utilisation basiques
- Cas d'usage courants
- Liens vers la documentation technique
```

#### Fichiers techniques

```markdown
# Sujet technique

- Documentation approfondie
- Détails d'implémentation
- Exemples complets
- Cas d'utilisation avancés
- Configurations possibles
```

## Traduction bidirectionnelle

La documentation peut être traduite dans les deux sens :

- Du français vers l'anglais (FR → EN) - Direction principale
- De l'anglais vers le français (EN → FR) - Direction secondaire

### Traduction FR → EN (Direction principale)

L'assistant doit proposer de traduire les fichiers de documentation du français vers l'anglais dans les cas suivants :

1. À la demande explicite de l'utilisateur
2. À la fin d'une session de travail, si des fichiers de documentation en français ont été modifiés

#### Comportement attendu

1. Identifier les fichiers Markdown modifiés dans `docs/project/fr/` depuis la dernière traduction
2. Proposer de traduire ces fichiers en anglais
3. Si l'utilisateur accepte, créer ou mettre à jour les fichiers correspondants dans `docs/project/en/`
4. Maintenir rigoureusement la même structure, les mêmes liens et le même formatage que les fichiers originaux
5. **Préserver intégralement tous les blocs de code** (ne jamais modifier le contenu des blocs de code)
6. Adapter naturellement le contenu textuel à la langue anglaise (pas de traduction mot à mot)
7. **Adapter les liens entre fichiers** pour refléter la structure des répertoires en anglais

### Traduction EN → FR (Direction secondaire)

L'assistant doit proposer de traduire les fichiers de documentation de l'anglais vers le français dans les cas suivants :

1. À la demande explicite de l'utilisateur mentionnant une traduction EN → FR
2. Lorsqu'un nouveau fichier est créé directement en anglais et nécessite une version française

#### Comportement attendu

1. Identifier les fichiers Markdown en anglais qui nécessitent une traduction en français
2. Proposer de traduire ces fichiers en français
3. Si l'utilisateur accepte, créer ou mettre à jour les fichiers correspondants dans `docs/project/fr/`
4. Maintenir rigoureusement la même structure, les mêmes liens et le même formatage que les fichiers originaux
5. **Préserver intégralement tous les blocs de code** (ne jamais modifier le contenu des blocs de code)
6. Adapter naturellement le contenu textuel à la langue française (pas de traduction mot à mot)
7. **Adapter les liens entre fichiers** pour refléter la structure des répertoires en français

### Exemple de déclenchement (FR → EN)

```
User: Peux-tu traduire les fichiers de documentation modifiés aujourd'hui ?
Assistant: J'ai identifié les fichiers suivants qui ont été modifiés dans docs/project/fr/ :
- installation.md
- configuration.md

Souhaitez-vous que je traduise ces fichiers vers l'anglais dans docs/project/en/ ?
```

### Exemple de déclenchement (EN → FR)

```
User: Peux-tu traduire ce fichier de l'anglais vers le français ?
Assistant: Je vais traduire le fichier docs/project/en/advanced-features.md vers le français.
Souhaitez-vous que je crée le fichier correspondant dans docs/project/fr/advanced-features.md ?
```

Ou en fin de session :

```
User: C'est tout pour aujourd'hui
Assistant: Avant de terminer, j'ai remarqué que vous avez créé de nouveaux fichiers en anglais sans équivalent français. Souhaitez-vous que je les traduise en français ?
```

### Conventions de traduction

- **IMPORTANT** : Préserver intégralement tous les blocs de code, y compris leur indentation et formatage
- Maintenir les noms de variables, commandes et extraits de code tels quels
- Adapter les expressions idiomatiques à des équivalents naturels dans la langue cible
- Conserver la même structure de titres et sous-titres
- Adapter les exemples si nécessaire pour qu'ils soient pertinents pour le public cible
- Conserver le format des liens mais adapter les chemins si nécessaire

### Adaptation des liens

- Les liens relatifs vers d'autres fichiers de documentation doivent être adaptés :
  - FR → EN : `[Configuration](../fr/configuration.md)` → `[Configuration](../en/configuration.md)`
  - EN → FR : `[Configuration](../en/configuration.md)` → `[Configuration](../fr/configuration.md)`
- Les liens relatifs dans le même dossier restent inchangés : `[Installation](./installation.md)` reste `[Installation](./installation.md)`
- Les liens absolus vers des ressources externes ne doivent pas être modifiés
- Les ancres internes (`#section-title`) doivent être adaptées pour correspondre aux titres traduits
  - FR → EN : `[Configuration initiale](#configuration-initiale)` → `[Initial Configuration](#initial-configuration)`
  - EN → FR : `[Initial Configuration](#initial-configuration)` → `[Configuration initiale](#configuration-initiale)`

### Vérification post-traduction

Après chaque traduction, l'assistant doit :

1. Vérifier que tous les blocs de code sont intacts et correctement formatés
2. S'assurer que tous les liens ont été correctement adaptés et fonctionnent :
   - Liens vers d'autres fichiers de documentation (vérifier les chemins fr/ vs en/)
   - Liens internes (vérifier que les ancres correspondent aux titres traduits)
   - Liens externes (vérifier qu'ils n'ont pas été modifiés)
3. Confirmer que la structure du document est identique à l'original
4. Vérifier la cohérence terminologique avec les traductions précédentes

### Flux de travail pour les nouvelles fonctionnalités et contributions

Pour faciliter la collaboration tout en maintenant la cohérence de la documentation :

- Les développeurs peuvent contribuer librement au code dans la langue avec laquelle ils sont le plus à l'aise (français ou anglais)
- Pour la documentation :
  - La documentation française est considérée comme la source principale
  - Les contributions à la documentation en anglais sont encouragées
  - La synchronisation entre les versions française et anglaise se fait via des pull requests Git
  - Les contributeurs anglophones peuvent soumettre de la documentation en anglais, qui sera ensuite traduite en français via une pull request dédiée

## Automatisation avec Cursor

### Synchronisation des règles Cursor

L'assistant doit aider à maintenir la synchronisation entre les règles Cursor et la documentation du projet :

1. Lorsque des fichiers sont modifiés dans le dossier `.cursor/rules/`, l'assistant doit proposer de :

   - Copier les fichiers mis à jour vers `docs/cursor-config/fr/`
   - Traduire les fichiers mis à jour vers `docs/cursor-config/en/`

2. Lorsque des fichiers sont modifiés dans `docs/cursor-config/fr/`, l'assistant doit proposer de :
   - Copier les fichiers mis à jour vers `.cursor/rules/`
   - Traduire les fichiers mis à jour vers `docs/cursor-config/en/`

### Commandes de synchronisation

L'assistant doit reconnaître et exécuter les commandes suivantes :

```
User: Synchronise les règles Cursor avec la documentation
Assistant: Je vais copier les fichiers du dossier .cursor/rules/ vers docs/cursor-config/fr/ et traduire les fichiers vers docs/cursor-config/en/. Souhaitez-vous procéder ?
```

```
User: Mets à jour les règles Cursor depuis la documentation française
Assistant: Je vais copier les fichiers du dossier docs/cursor-config/fr/ vers .cursor/rules/ et mettre à jour les traductions anglaises. Souhaitez-vous procéder ?
```

### Processus de synchronisation

Lors de la synchronisation des fichiers, l'assistant doit :

1. Identifier les fichiers qui ont été modifiés ou ajoutés
2. Copier les fichiers vers le dossier de destination en préservant la structure
3. Pour les traductions :
   - Préserver intégralement tous les blocs de code
   - Adapter les liens entre fichiers si nécessaire
   - Maintenir la même structure et le même formatage
4. Confirmer les fichiers qui ont été synchronisés et traduits

### Exemple de synchronisation complète

```
User: Synchronise toutes les règles Cursor
Assistant: Je vais effectuer une synchronisation complète des règles Cursor :

1. Copier tous les fichiers de .cursor/rules/ vers docs/cursor-config/fr/
2. Traduire tous les fichiers vers docs/cursor-config/en/

Voici les fichiers qui seront synchronisés :
- README.md
- code-style.md
- naming-conventions.md
- typescript-guidelines.md
- ui-style-guidelines.md
- performance-optimization.md
- database-guidelines.md
- git-workflow.md
- project-setup.md
- translate-guidelines.md
- project-verification.md

Souhaitez-vous procéder à la synchronisation ?
```
