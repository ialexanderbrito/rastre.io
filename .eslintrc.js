module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
  ignorePatterns: [
    'service-worker.js',
    'serviceWorkerRegistration.js',
    '*.test.js',
    'jsconfig.json',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          '/^components/',
          'module',
          '/^pages/',
          '/^services/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['tron'] }],
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
  },
};
