# Documentation Translation Guidelines

This document defines the specific rules and behaviors for translating project documentation.

## Bidirectional Translation

Documentation can be translated in both directions:

- From French to English (FR → EN) - Main direction
- From English to French (EN → FR) - Secondary direction

### FR → EN Translation (Main Direction)

The assistant should offer to translate documentation files from French to English in the following cases:

1. At the explicit request of the user
2. At the end of a work session, if French documentation files have been modified

#### Expected Behavior

1. Identify Markdown files modified in `docs/project/fr/` since the last translation
2. Offer to translate these files into English
3. If the user accepts, create or update the corresponding files in `docs/project/en/`
4. Rigorously maintain the same structure, links, and formatting as the original files
5. **Fully preserve all code blocks** (never modify the content of code blocks)
6. Naturally adapt the textual content to the English language (not word-for-word translation)
7. **Adapt links between files** to reflect the English directory structure

### EN → FR Translation (Secondary Direction)

The assistant should offer to translate documentation files from English to French in the following cases:

1. At the explicit request of the user mentioning an EN → FR translation
2. When a new file is created directly in English and requires a French version

#### Expected Behavior

1. Identify English Markdown files that require translation into French
2. Offer to translate these files into French
3. If the user accepts, create or update the corresponding files in `docs/project/fr/`
4. Rigorously maintain the same structure, links, and formatting as the original files
5. **Fully preserve all code blocks** (never modify the content of code blocks)
6. Naturally adapt the textual content to the French language (not word-for-word translation)
7. **Adapt links between files** to reflect the French directory structure

### Triggering Example (FR → EN)

```
User: Can you translate the documentation files modified today?
Assistant: I've identified the following files that have been modified in docs/project/fr/:
- installation.md
- configuration.md

Would you like me to translate these files to English in docs/project/en/?
```

### Triggering Example (EN → FR)

```
User: Can you translate this file from English to French?
Assistant: I'll translate the docs/project/en/advanced-features.md file to French.
Would you like me to create the corresponding file in docs/project/fr/advanced-features.md?
```

Or at the end of a session:

```
User: That's all for today
Assistant: Before we finish, I noticed that you created new files in English without French equivalents. Would you like me to translate them into French?
```

### Translation Conventions

- **IMPORTANT**: Fully preserve all code blocks, including their indentation and formatting
- Keep variable names, commands, and code snippets as they are
- Adapt idiomatic expressions to natural equivalents in the target language
- Maintain the same structure of titles and subtitles
- Adapt examples if necessary to be relevant to the target audience
- Preserve the format of links but adapt paths if necessary

### Link Adaptation

- Relative links to other documentation files must be adapted:
  - FR → EN: `[Configuration](../fr/configuration.md)` → `[Configuration](../en/configuration.md)`
  - EN → FR: `[Configuration](../en/configuration.md)` → `[Configuration](../fr/configuration.md)`
- Relative links in the same folder remain unchanged: `[Installation](./installation.md)` stays `[Installation](./installation.md)`
- Absolute links to external resources should not be modified
- Internal anchors (`#section-title`) must be adapted to match the translated titles
  - FR → EN: `[Configuration initiale](#configuration-initiale)` → `[Initial Configuration](#initial-configuration)`
  - EN → FR: `[Initial Configuration](#initial-configuration)` → `[Configuration initiale](#configuration-initiale)`

### Post-Translation Verification

After each translation, the assistant should:

1. Verify that all code blocks are intact and properly formatted
2. Ensure that all links have been correctly adapted and work:
   - Links to other documentation files (check fr/ vs en/ paths)
   - Internal links (check that anchors match translated titles)
   - External links (verify they haven't been modified)
3. Confirm that the document structure is identical to the original
4. Check terminology consistency with previous translations

### Workflow for New Features and Contributions

To facilitate collaboration while maintaining documentation consistency:

- Developers can freely contribute to the code in the language they are most comfortable with (French or English)
- For documentation:
  - French documentation is considered the main source
  - Contributions to English documentation are encouraged
  - Synchronization between French and English versions is done via Git pull requests
  - English-speaking contributors can submit documentation in English, which will then be translated into French via a dedicated pull request

## Automation with Cursor

### Cursor Rules Synchronization

The assistant should help maintain synchronization between Cursor rules and project documentation:

1. When files are modified in the `.cursor/rules/` folder, the assistant should offer to:

   - Copy the updated files to `docs/cursor-config/fr/`
   - Translate the updated files to `docs/cursor-config/en/`

2. When files are modified in `docs/cursor-config/fr/`, the assistant should offer to:
   - Copy the updated files to `.cursor/rules/`
   - Translate the updated files to `docs/cursor-config/en/`

### Synchronization Commands

The assistant should recognize and execute the following commands:

```
User: Synchronize Cursor rules with documentation
Assistant: I'll copy the files from the .cursor/rules/ folder to docs/cursor-config/fr/ and translate the files to docs/cursor-config/en/. Would you like to proceed?
```

```
User: Update Cursor rules from French documentation
Assistant: I'll copy the files from the docs/cursor-config/fr/ folder to .cursor/rules/ and update the English translations. Would you like to proceed?
```

### Synchronization Process

When synchronizing files, the assistant should:

1. Identify files that have been modified or added
2. Copy files to the destination folder while preserving the structure
3. For translations:
   - Fully preserve all code blocks
   - Adapt links between files if necessary
   - Maintain the same structure and formatting
4. Confirm which files have been synchronized and translated

### Complete Synchronization Example

```
User: Synchronize all Cursor rules
Assistant: I'll perform a complete synchronization of Cursor rules:

1. Copy all files from .cursor/rules/ to docs/cursor-config/fr/
2. Translate all files to docs/cursor-config/en/

Here are the files that will be synchronized:
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

Would you like to proceed with the synchronization?
```
