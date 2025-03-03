module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
  },
};
