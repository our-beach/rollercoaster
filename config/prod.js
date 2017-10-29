const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: [
    path.join(__dirname, '..', 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.json']
  },
}