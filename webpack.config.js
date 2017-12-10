const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  context: __dirname,

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  devServer: {
    hot: true,
    host: 'localhost',
    port: 5005,
    inline: true,
    publicPath: '/public/',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
