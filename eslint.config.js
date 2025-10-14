// ESLint v9+ configuration (remplace .eslintrc.json)
module.exports = [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'coverage/',
      'android/',
      'ios/',
      '*.config.js',
      'coverage/**/*.js'
    ],
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react': require('eslint-plugin-react'),
      'import': require('eslint-plugin-import')
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      // Règles inspirées d'Airbnb, à adapter selon tes besoins
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never' }],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
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
