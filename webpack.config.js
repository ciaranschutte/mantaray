var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  devtool: 'eval-source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js' 
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: './node_modules',
      }
    ],
    scripts: {
      "dev": "webpack-dev-server --progress --inline"
    }
  },
}

module.exports = config;