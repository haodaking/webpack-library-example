const path = require('path')
const webpack = require('webpack')
const { version, author, repository } = require('./package.json')

const banner =
  `library.js\n` +
  `version: ${version}\n` +
  `author: ${author}\n` +
  `${repository}`

module.exports = {
  mode: 'production',
  entry: {
    lib: './src/index.js',
    'lib.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Lib',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js']
  },
  plugins: [new webpack.BannerPlugin({ banner })]
}
