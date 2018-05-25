const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  cache: true,
  entry: './src/16/index.js',
  output: { filename: 'main.js', path: path.join(__dirname, '../public/') },
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
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new BundleAnalyzerPlugin()
  ]
}
