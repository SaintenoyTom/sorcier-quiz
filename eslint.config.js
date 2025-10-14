// ESLint v9+ configuration (remplace .eslintrc.json)
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
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended'
    ],
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
