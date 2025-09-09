module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // don’t need a separate .babelrc
    babelOptions: {
      presets: [
        '@babel/preset-react' // ✅ make sure this is installed
        // add '@babel/preset-typescript' later if you migrate to TS
      ],
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'next'
  ],
  plugins: ['react'],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // disable noisy rules
    'react/prop-types': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',

    // semicolon style – pick one
    'semi': ['error', 'never'], // or "always"

    // sometimes import resolver is too strict
    'import/no-unresolved': 'off',
  },
}
