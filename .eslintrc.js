module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@next/next/core-web-vitals',
    'plugin:node/recommended-module',
    'plugin:promise/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prefer-destructuring': 0,
    'max-len': ['warn', 200],
    'max-classes-per-file': 0,
    // please dont
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-default-export': 'error',
    // consistent return avoid
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'promise/always-return': 'off',
    'import/order': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'node/no-sync': 'error',
    // for decorators
    'func-names': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'class-methods-use-this': 'off',
    'guard-for-in': 'off',
    'no-mixed-operators': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 0,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
};
