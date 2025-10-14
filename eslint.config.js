// ESLint v9+ configuration (remplace .eslintrc.json)
const airbnb = require('eslint-config-airbnb');
const airbnbHooks = require('eslint-config-airbnb/hooks');
const tsRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

module.exports = [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'coverage/',
      'android/',
      'ios/'
    ],
  },
  ...airbnb,
  ...airbnbHooks,
  ...tsRecommended,
  {
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        jest: true
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never' }],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    files: ['**/__tests__/**', '*.spec.*'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
