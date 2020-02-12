module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['off'],
    'keyword-spacing': ['error', {
      'overrides': {
        'if': {
          'after': false,
        },
      },
    }],
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
    }],
  },
};
