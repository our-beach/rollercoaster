const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: [    
    path.join(__dirname, '..', 'src', 'index.js'),
  ],

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.json']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    contentBase: './',
  }
}
