const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: [paths.src + '/index.js'],

  output: {
    path: paths.build,
    filename: 'dist.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: paths.src + '/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [{ test: /\.js$/, use: ['babel-loader'] }],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
}
