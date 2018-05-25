const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  cache: true,
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../server/dist')
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',

        options: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
    // new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}
