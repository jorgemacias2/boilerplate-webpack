const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/app.js'
    },
    plugins: [
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        publicPath: "/",
        port: 9000,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new CopyWebpackPlugin([{ 
            from: 'src'
        }, {
            from: 'index.html'
        } ])
    ]
  };