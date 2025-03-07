# Translation guide

This guide explains how to use the integrated translation features in this project to translate Markdown files.

## Prerequis

The translation script uses the library `@iamtraction/google-translate` which will be automatically installed during the first use. You must have `ts-node` installed to execute the TypeScript script.

To avoid execution problems with standard scripts script, use the following command:

**Code_Block_0**

Or for English translation:

**Code_Block_1**

## Available commands

### Translate specific files in French

To translate specific Markdown files in French:

**Code_Block_2**

Example :

**Code_Block_3**

### Translate all predefined files in French

To translate all predefined Markdown files in French configuration:

**Code_Block_4**

The predefined files are configured in the scripts/translate-free script.

### Search and translate all Markdown files in French

To automatically search for all the Markdown files on the project and translate them into French:

**Code_Block_5**

This command automatically excludes certain files such as `node_modles ',` .git`, `.nexet`,` docs/en' and `docs/fr`.

### Translate all files in the Docs in English folder

To translate all the Markdown files of the Docs` Docs' in English:

**Code_Block_6**

This command translates all the Markdown files found in the Docs`folder (with the exception of the sub-folders`En`and`Fr`) and save them in the Docs/En/` folder, keeping the same folder structure.

## Configuration

### Configuration for French translation

The French translation configuration is found in the file `scripts/translate-fr.s`s' in the object` Translation_config`:

**Code_Block_7**

### Configuration for English translation

The English translation configuration is found in the file `scripts/translate-en.TS 'in the object` Translation_config`:

\__Code_Block_8_

## Translation results

### Translations in French

All files translated into French are saved in the Docs/FR/`folder with the same name as the original file.

For example, if you translate `Readme.md`, the result will be saved in` Docs/Fr/Readme.md`.

### Translations in English

All files translated into English are saved in the Docs/En/`folder, keeping the same folder structure as in the Docs` folder.

For example, if you translate `Docs/Translation-Guide.md`, the result will be saved in` Docs/En/Translation-Guide.md`.

## Limitations

- The script only translates Markdown files (.MD)
- The quality of the translation depends on the Google Translate API
- bulky files are divided into pieces to avoid the limits of the API

## Troubleshooting

If you encounter problems with the translation script:

1. Check that you have an active internet connection
2. Make sure that `ts-node` is installed (` pnpm install -d ts-node`)
3. Check the script permissions (`chmod +x scripts/translate-free.
4. Consult error messages in the console for more information
