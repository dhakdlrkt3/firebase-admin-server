module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/types/**', '**/@dinosband/**'],
  rules: {
    //'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // formatting
    'array-bracket-spacing': 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    'block-spacing': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['warn', 'all'],
    'key-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'semi': ['error', 'never'],
    'space-infix-ops': 'warn',
    'space-in-parens': 'warn',
    'quotes': ['error', 'single'],
    // conflict with @typescript-eslint
    'brace-style': 'off',
    'comma-spacing': 'off',
    'keyword-space': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'no-extra-parens': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'off',
    // typescript
    '@typescript-eslint/brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': ['warn'],
    '@typescript-eslint/indent': ['warn', 2,
      { 'FunctionDeclaration': { 'parameters': 'first' },
        'SwitchCase': 1,
      },
    ],
    '@typescript-eslint/keyword-spacing': ['warn', { 'before': true, 'after': true }],
    '@typescript-eslint/no-extra-parens': ['warn', 'all', { 'nestedBinaryExpressions': false }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false,
      },
    }],
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'warn',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
