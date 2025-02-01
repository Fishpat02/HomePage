import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from 'eslint-plugin-svelte'
import * as svelteParser from 'svelte-eslint-parser'
import * as typescriptParser from '@typescript-eslint/parser'
import svelteConfig from "./svelte.config.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: {globals: {...globals.browser, ...globals.node}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginSvelte.configs.recommended,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: [
      '**/*.svelte',
      '*.svelte'
    ],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        svelteConfig
      }
    }
  },
];