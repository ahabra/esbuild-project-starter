import js from '@eslint/js'
import globals from "globals"
import { defineConfig } from 'eslint/config'

const error = 'error'
const readonly = 'readonly'
const always = 'always'
const never = 'never'

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: {  js  },
    extends: ['js/recommended'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        describe: readonly,
        it: readonly,
        beforeEach: readonly,
        afterEach: readonly
      }
    },

    rules: {
      indent: [error, 2],
      'linebreak-style': [error, 'unix'],
      quotes: [error, 'single'],
      semi: [error, never],

      'block-scoped-var': [error],
      complexity: [error, 4],
      'dot-location': [error, 'object'],
      eqeqeq: [error, always],
      'no-else-return': [error],
      'no-multi-spaces': [error, { ignoreEOLComments: true }],
      'no-octal': [error],
      'no-octal-escape': [error],
      'no-return-assign': [error, always],
      'no-sequences': [error],
      'no-useless-concat': [error],
      'no-useless-return': [error],
      radix: [error],
      yoda: [error],

      'no-label-var': [error],
      'brace-style': [error, '1tbs', {allowSingleLine: true}],
      'comma-spacing': [error, {before: false, after: true}],
      'comma-style': [error, 'last'],
      'func-call-spacing': [error, never],
      'key-spacing': [error, {beforeColon: false, afterColon:true}],
      'keyword-spacing': [error],
      'max-depth': [error, 4],
      'max-len': [error, {code: 100, comments: 100, ignoreUrls: true}],
      'max-lines': [error, {max: 200, skipBlankLines: true, skipComments: false}],
      'max-lines-per-function': [error, {max: 200, skipBlankLines: true, skipComments: true, IIFEs: false}],
      'max-nested-callbacks': [error, 4],
      'max-params': [error, 4],
      'max-statements': [error, 10],
      'max-statements-per-line': [error, {max: 2}],
      'new-cap': [error],
      'new-parens': [error, always],
      'no-array-constructor': [error],
      'no-bitwise': [error],
      'no-lonely-if': [error],
      'no-multi-assign': [error],
      'no-multiple-empty-lines': [error, {max: 3, maxBOF: 1, maxEOF: 1}],
      'no-nested-ternary': [error],
      'no-new-object': [error],
      'no-tabs': [error],
      'no-trailing-spaces': [error],
      'no-unneeded-ternary': [error],
      'no-whitespace-before-property': [error],
      'nonblock-statement-body-position': [error, 'beside'],
      'prefer-exponentiation-operator': [error],
      'quote-props': [error, 'as-needed'],
      'semi-spacing': [error],
      'semi-style': [error],
      'space-before-function-paren': [error, never],
      'space-infix-ops': [error],
      'spaced-comment': [error, always],
      'switch-colon-spacing': [error],
      'no-duplicate-imports': [error],
      'no-useless-computed-key': [error],
      'no-useless-constructor': [error],
      'no-var': [error],
      'prefer-const': [error],
      'prefer-rest-params': [error]
    },
  }
]);