module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    WithRequired: 'readonly',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    radix: 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
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
    'import/no-import-module-exports': 'off',
    'no-promise-executor-return': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};