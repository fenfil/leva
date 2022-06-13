module.exports = {
  extends: ['../../.eslintrc.js'],
  globals: {
    JSX: true,
    NodeJS: true,
    React: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['unused-imports', '@emotion'],
  rules: {
    // 'react/require-default-props': ['error', { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
    // 'jsx-a11y/label-has-associated-control': 'warn',
    // suppress errors for missing 'import React' cause Next.js
    'react/react-in-jsx-scope': 'off',
    // falls on <Link passhref="..." /><a />
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'jsx-a11y/media-has-caption': 'off',
    // because of class properties
    'react/state-in-constructor': 0,
    // it's a good rule in theory, but in fact it caused some inconvenience
    'react/jsx-props-no-spreading': 0,
    // we're fine with unescaped entities because IDE/editor shows issues already
    'react/no-unescaped-entities': 0,
    'import/extensions': 'off',
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
  },
  overrides: [
    // allows to use default exports in pages
    {
      files: ['**src/pages/**/*.tsx'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/slices/**/*.ts'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
    // to avoid proptypes
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    // slices reassign fix
    {
      files: ['**/slice.ts', '**/slices/**/*.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['**/components/svg/**/*.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
