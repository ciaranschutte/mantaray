var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    APP_DIR + '/index.jsx',
    
  ],
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js' 
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
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
    ]
  },
}

module.exports = config;