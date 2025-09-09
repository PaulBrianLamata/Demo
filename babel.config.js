const path = require('path');

const alias = {
  shared: path.join(__dirname, 'shared')
};

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [['module-resolver', { alias }]]
};
