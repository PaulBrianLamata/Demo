module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: ["react", "import"],
  env: {
    es6: true,
    "shared-node-browser": true
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: true
    }
  },
  globals: {
    global: true,
    process: true
  },
  rules: {
    "no-console": "off"
  },
  overrides: [
    {
      files: [
        ".eslintrc.js",
        "jest.config.js",
        "jest.framework-setup.js",
        "web/next.config.js",
        "server/**/*.js"
      ],
      env: {
        node: true
      }
    },
    {
      files: ["**/*.test.js"],
      env: {
        jest: true
      }
    },
    {
      files: [
        "web/components/**/*.js",
        "web/pages/**/*.js",
        "web/mocks/**/*.js"
      ],
      rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
      }
    },
    {
      files: ["**/__fixtures__/**/*.js"]
    }
  ]
};
