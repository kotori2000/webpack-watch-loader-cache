const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const webpack = require('webpack')
const TestWebpackPlugin = require('./plugins/TestWebpackPlugin')

module.exports = {
  target: 'web', // 默认
  devtool: 'none', // 编译后的代码不使用 eval，可直接在 node 模式下运行
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:16].js',
    publicPath: 'https://www.baidu.com'
    // libraryTarget: 'window',
    // library: 'myLibrary' // library 的使用取决于 libraryTarget 的取值
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  resolve: {
    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TestWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['_babel-loader']
      }
    ]
  }
}