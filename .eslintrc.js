module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': 0,
    'dot-notation': 0,
    'no-shadow': 'off',
    'no-undef': 'off',
    camelcase: 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
