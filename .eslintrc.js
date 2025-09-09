module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next", // ✅ adds Next.js rules
  ],
  settings: {
    react: {
      version: "detect", // ✅ fixes React version warning
    },
  },
  rules: {
    "no-console": "off",
  },
};
