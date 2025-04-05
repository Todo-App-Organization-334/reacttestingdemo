// eslint.config.js
module.exports = {
  // Use the latest ECMAScript version
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  // Specify environments
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  // Extend recommended configurations
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],

  // Add plugins
  plugins: ['react', 'jest'],

  // Rules configuration
  rules: {
    // React specific rules
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/jsx-uses-react': 'off', // Not needed with React 17+

    // General rules
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 'warn',

    // Jest rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },

  // Settings
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
