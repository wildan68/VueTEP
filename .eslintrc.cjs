/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // '@antfu/eslint-config-vue',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  ignorePatterns: ['src/@iconify/*.js', 'node_modules', 'dist', '*.d.ts'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'indent': ['error', 2],

    // Plugin: eslint-plugin-import
    'import/prefer-default-export': 'off',
    'import/newline-after-import': ['error', { count: 1 }],

    // ignore virtual files
    'import/no-unresolved': [2, {
      ignore: [
        '~pages$',
        'virtual:generated-layouts',
        '~icons',
        'virtual',
        'unfonts.css',
        // Ignore vite's ?raw imports
        '.*\?raw',
      ],
    }],

    '@typescript-eslint/consistent-type-imports': 'error',

    // -- Sonarlint
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-nested-template-literals': 'off',

    // ESLint plugin vue
    'vue/multi-word-component-names': 'off',
    'vue/block-tag-newline': 'error',
    'vue/component-api-style': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/custom-event-name-casing': ['error', 'camelCase', {
      ignores: [
        '/^(click):[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/',
      ],
    }],
    'vue/define-macros-order': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-child-content': 'error',

    // NOTE this rule only supported in SFC,  Users of the unplugin-vue-define-options should disable that rule: https://github.com/vuejs/eslint-plugin-vue/issues/1886
    // 'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'off',
    'vue/no-reserved-component-names': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/v-on-function-call': 'error',
    // 'vue/no-restricted-class': ['error', '/^(p|m)(l|r)-/'],

    // -- Extension Rules
    'vue/no-irregular-whitespace': 'error',
    'vue/template-curly-spacing': 'error',

    // Enforce trailing comma (Already present in TypeScript)
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.mjs', '.png', '.jpg'],
      },
      typescript: {},
    },
  },
}