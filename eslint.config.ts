import type { Config } from 'typescript-eslint'

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import svelteConfig from './svelte.config.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import * as svelteParser from 'svelte-eslint-parser'
import * as typescriptParser from '@typescript-eslint/parser'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginSvelte.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '{eslint,postcss,svelte,tailwind}.config.{js,ts}',
          ],
        },
        extraFileExtensions: ['.svelte'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        svelteConfig,
      },
    },
  },
  { ignores: ['**/components/ui/**/*.*'] },
] satisfies Config
