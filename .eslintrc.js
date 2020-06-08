module.exports = {
  plugins: [ 'filenames', 'github', 'jsdoc', 'mocha' ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:mocha/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  parserOptions: {},
  env: {
    es6: true,
    node: true,
  },
  globals: {},
  rules: {
    // Best practices
    'block-scoped-var': 'error',
    // 'complexity': ['error', 10],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'eqeqeq': ['error'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    // 'no-warning-comments': 'warn',
    'radix': 'error',
    'wrap-iife': ['error', 'any'],

    // Variables
    'no-undef-init': 'error',

    // Stylistic Issues
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': ['error', { 'includeCommonJSModuleExports': true }],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'flatTernaryExpressions': true }],
    'key-spacing': ['error'],
    'keyword-spacing': 'error',
    'max-depth': ['error', 5],
    'max-len': ['error', 130],
    // 'max-lines-per-function': ['error', 70],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    // 'max-statements': ['error', 20],
    'max-statements-per-line': ['error', { 'max': 2 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-bitwise': 'error',
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'one-var': ['warn', 'never'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': ['error', 'asc', { minKeys: 3 }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always', { 'block': { 'exceptions': ['html'], 'balanced': true } }],
    'template-tag-spacing': ['error', 'never'],

    // ECMAScript 6
    'arrow-body-style': ['error', 'never'],
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { AssignmentExpression: { array: false } }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',

    // JSDoc
    'jsdoc/check-indentation': 'error',
    'jsdoc/require-jsdoc': ['off', { 'publicOnly': true }], // TODO: set to error
    'jsdoc/require-returns': 'off', // description usually tells this better

    // Import
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'error',
    'import/first': 'error',
    'import/no-namespace': 'error',
    'import/extensions': 'error',
    'import/order': ['error', { 'newlines-between': 'always', 'alphabetize': { 'order': 'asc', 'caseInsensitive': true } }],
    'import/newline-after-import': ['error', { 'count': 2 }],
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/group-exports': 'error',

    // GitHub
    // 'github/array-foreach': 'error',

    // Mocha tests
    'mocha/no-setup-in-describe': 'off', // using some dynamically generated tests
    'mocha/valid-suite-description': 'error',
    'mocha/valid-test-description': 'error',

    // Filenames
    'filenames/match-regex': ['error', '^[a-z\\-]+$'],
    'filenames/match-exported': 'error'
  },
  overrides: [
    {
      'files': ['test/*.js', 'example/*.js'],
      'rules': { 'import/no-nodejs-modules': 'off' }
    },
    {
      'files': ['test/*.js'],
      'env': { mocha: true },
      'rules': { 'max-len': 'off' }
    },
    {
      'files': ['.eslintrc.js'],
      'rules': {
        'sort-keys': 'off',
        'filenames/match-regex': 'off',
      }
    }
  ]
};