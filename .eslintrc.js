module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'no-console': 'off', // 'warn',
    'no-debugger': 'warn',
    'vue/array-bracket-spacing': 'warn',
    'vue/arrow-spacing': 'warn',
    'vue/block-spacing': 'warn',
    'vue/brace-style': 'warn',
    'vue/camelcase': 'warn',
    'vue/comma-dangle': 'warn',
    'vue/component-name-in-template-casing': 'off', // 'warn',
    'vue/dot-location': 'warn',
    'vue/eqeqeq': 'warn',
    'vue/key-spacing': 'warn',
    'vue/keyword-spacing': 'warn',
    'vue/match-component-file-name': 'warn',
    'vue/no-boolean-default': 'warn',
    'vue/no-deprecated-scope-attribute': 'warn',
    'vue/no-empty-pattern': 'warn',
    'vue/no-restricted-syntax': 'warn',
    'vue/object-curly-spacing': 'warn',
    'vue/require-direct-export': 'warn',
    'vue/script-indent': 'warn',
    'vue/space-infix-ops': 'warn',
    'vue/space-unary-ops': 'warn',
    'vue/v-on-function-call': 'off',
    'vuetify/no-deprecated-classes': 'warn',
    'vuetify/grid-unknown-attributes': 'warn',
    'vuetify/no-legacy-grid': 'warn',
    'template-curly-spacing': 'off',
    indent: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
