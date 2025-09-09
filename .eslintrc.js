module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'next' // Enables Next.js recommended rules
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
    // ✅ Disable rules causing noise after removing Flow
    'react/prop-types': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',

    // ✅ If you don’t want to enforce semicolons
    'semi': ['error', 'never'], // or "always" if you prefer semicolons

    // ✅ Optional: sometimes `import/no-unresolved` is too strict
    'import/no-unresolved': 'off',
  },
}
