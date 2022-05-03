module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    $nuxt: true,
  },
  rules: {
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'indent': 'off',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    'max-len': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: true,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    'consistent-return': 'off',
    'no-console': ['error'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        ignores: [':expression'],
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: ['VAttribute'],
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/no-unused-components': 'off',
  },
  overrides: [
    {
      files: ['./store/**/*.js'],
      rules: {
        'no-param-reassign': 'off',
        'no-shadow': ['error', { 'allow': ['state'] }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      'nuxt': {},
    },
  },
  parserOptions: {
    'ecmaVersion': 2020,
  },
};
