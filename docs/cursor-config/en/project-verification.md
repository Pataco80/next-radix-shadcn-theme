# Project Verification Rules

This document defines the rules and behaviors for global project verification and folder structure updates.

## Complete Project Verification

The assistant should perform a complete project verification in the following cases:

1. At the start of a new work session
2. At the explicit request of the user

### Expected Behavior During Verification

During a complete verification, the assistant should:

1. Analyze the current folder structure of the project
2. Check the consistency between different parts of the project:
   - Consistency between code and documentation
   - Consistency between French and English versions of the documentation
   - Consistency between declared and used dependencies
3. Identify files that need updating
4. Verify that folder structure blocks are up-to-date in all documentation files
5. Check for potential issues (missing imports, obsolete dependencies, etc.)
6. Propose corrective actions if inconsistencies are detected

### Verification Triggering Example

```
User: Perform a complete project verification
Assistant: I'll perform a complete project verification:

1. Analysis of the folder structure
2. Verification of code and documentation consistency
3. Dependency verification
4. Structure blocks verification

Here are the verification results:
- Folder structure: OK
- Code/documentation consistency: 3 files need updating
- Dependencies: 2 unused dependencies detected
- Structure blocks: 1 file needs updating

Would you like me to make the necessary updates?
```

## Structure Blocks Update

The assistant should update folder structure blocks in the following cases:

1. When the project folder structure has been modified
2. At the explicit request of the user
3. Following a complete verification that detected inconsistencies

### Expected Behavior During Update

When updating structure blocks, the assistant should:

1. Generate an up-to-date representation of the project folder structure
2. Identify all documentation files that contain structure blocks
3. Update these blocks in all relevant files
4. If the project is multilingual, update the main language files first, then offer to update the translations

### Structure Blocks Format

Structure blocks should be formatted consistently:

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

### Update Triggering Example

```
User: Update structure blocks in the documentation
Assistant: I'll update the folder structure blocks in the documentation:

1. Generation of the current folder structure
2. Identification of files containing structure blocks
3. Update of blocks in all relevant files

Here are the files that will be updated:
- docs/fr/README.md
- docs/fr/project-structure.md
- docs/en/README.md
- docs/en/project-structure.md

Would you like to proceed with the update?
```

## Dependency Analysis

The assistant should analyze project dependencies in the following cases:

1. At the start of a new work session
2. At the explicit request of the user
3. After adding or removing dependencies

### Expected Behavior During Analysis

During dependency analysis, the assistant should:

1. Identify all dependencies declared in configuration files (package.json, etc.)
2. Check which dependencies are actually used in the code
3. Identify obsolete or unused dependencies
4. Check if any used dependencies are not declared
5. Propose corrective actions if necessary

### Analysis Triggering Example

```
User: Analyze project dependencies
Assistant: I'll analyze the project dependencies:

1. Identification of declared dependencies
2. Verification of dependency usage
3. Search for missing or obsolete dependencies

Here are the analysis results:
- Declared dependencies: 25
- Used dependencies: 23
- Unused dependencies: 2 (lodash, moment)
- Missing dependencies: 1 (react-icons)

Would you like me to update the package.json file to reflect these results?
```

## Verification Commands

The assistant should recognize and execute the following commands:

```
User: Check project status
Assistant: I'll perform a complete project verification. This includes analyzing the folder structure, checking documentation consistency, and analyzing dependencies. Would you like to proceed?
```

```
User: Update structure blocks
Assistant: I'll update the folder structure blocks in all relevant documentation files. Would you like to proceed?
```

```
User: Analyze dependencies
Assistant: I'll analyze the project dependencies to identify those that are unused or missing. Would you like to proceed?
```
