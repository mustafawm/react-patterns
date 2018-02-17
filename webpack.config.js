const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  context: __dirname,

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5005',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

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
    publicPath: '/',
    contentBase: 'public/',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
