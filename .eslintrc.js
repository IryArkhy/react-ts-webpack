module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'cypress'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['ts', '.tsx'] }],
    'import/prefer-default-export': 0,
    'no-console': 2,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    // airbnb issue
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.tsx', '*.spec.jsx', '*.spec.ts', '*.spec.js'],
      rules: {
        'jest/expect-expect': 0,
        'jest/valid-expect': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['*.development.js', '*.production.js'],
      rules: { 'import/no-extraneous-dependencies': 0 },
    },
  ],
};
