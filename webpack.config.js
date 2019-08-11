const path = require('path')

module.exports = {
  resolve: {
    extensions: [".walt"]
  },
  module: {
    rules: [
      { test: /\.walt$/, use: 'walt-loader' }
    ]
  },
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'wa-chart-bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}