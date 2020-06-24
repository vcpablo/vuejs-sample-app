module.exports = {
  env: {
    node: true
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  }
}
