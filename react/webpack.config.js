const path = require('path');

var config = {
  entry: {
    path: './react/src/main.js',
  },
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js',
    publicPath:   'd36lpqgxkhc8zn.cloudfront.net'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
    devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  var webpack = require('webpack');
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}

module.exports = config;
