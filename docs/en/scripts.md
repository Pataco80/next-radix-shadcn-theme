# Available scripts

This document describes all the scripts available in this project Next.js. Use these scripts with your favorite packet manager (NPM, YARN, PNPM or BUN).

## Start scripts

- `Dev`: Starts the development server with Turbopack

  **Code_Block_0**

- `Start`: start the application in production mode
  **Code_Block_1**

## Build scripts

- `Build`: Compile the application for production

  **Code_Block_2**

- `rebuild`: clean the `nexet 'folder then compiles the application
  **Code_Block_3**

## Cleaning scripts

- `clean`: delete the file`.

  **Code_Block_4**

- `Clean: modules`: delete the file` node_modles'

  **Code_Block_5**

- `Cache: Clean`: Clean the PNPM cache
  **Code_Block_6**

## Reset scripts

- `Refresh`: cleans the `nexet 'folder then starts the development server

  **Code_Block_7**

- `Reset`: completely resets the project (clean `nexet ', deletes` node*modles' and reinstalls dependencies)
  \_\_Code_Block_8*

## Installation scripts

- `Update-Lock`: updates the locking file without cleaning the project

  **Code_Block_9**

- `install: timeout`: install dependencies with an increased network time (for slow connections)

  **Code_Block_10**

- `Install: Registry: Install the dependencies using the official NPM register
  **Code_Block_11**

## Lin scripts

- `lint`: executes eslint to check the code
  **Code_Block_12**

## Translation scripts

> ** Important note **: All translation scripts now use a centralized system that allows Markdown files to be translated into different languages.
>
> ** Preservation of code blocks **: The system is designed to preserve code blocks during translation. If you encounter problems with deformed code blocks in the translated files, you can correct them manually or relaunch the translation.

### Generic translation script

- `Translate`: Basic script for translating files in any supported language

  **Code_Block_13**

  Example :

  **Code_Block_14**

### Translation in French

- `Translate: Fr`: Translated specific Markdown files in French

  **Code_Block_15**

- `Translate: FR: All`: translates all Markdown files predefined in French

  **Code_Block_16**

- `Translate: Fr: Find`: Research and translates all the Markdown files of the project in French

  **Code_Block_17**

### Translation in English

- `Translate: by: translated specific Markdown files in English

  **Code_Block_18**

- `Translate: in: All`: translates all Markdown files predefined in English

  **Code_Block_19**

- `Translate: in: Find`: Research and translates all the Markdown files of the project in English

  **Code_Block_20**

The files translated into French are saved in the Docs/Fr/`folder, and the files translated into English in the Docs/En/` folder.

### Adding new languages

To add a new translation language, simply modify the file `Scripts/Translate/Translate.config.ts`s' by adding the tongue in the table` languages`. For example, to add the Spanish:

**Code_Block_21**

The system is designed to automatically manage output files and exclusions. When you add a new language:

1. A new output folder is created automatically (`docs/es/` in the example above)
2. This folder is automatically excluded when searching for files to be translated to avoid loop translations
3. No other configuration is necessary

Then you can use the generic script to translate into this new language:

\__Code_Block_22_
