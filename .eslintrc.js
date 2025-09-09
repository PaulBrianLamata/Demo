module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    }
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    "no-console": "off",
    "react/prop-types": "off"
  }
};
