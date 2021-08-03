const webpack = require('webpack')
const baseWebpackConfig = require('../webpack.config')
const merge = require('webpack-merge')

const webpackConfig = merge({}, baseWebpackConfig)
const compiler = webpack(webpackConfig)

// compiler.run(function (err, stats) {
//   if (!err) {
//   } else {
//     // console.log('err: ', err)
//   }
// })

compiler.watch({}, (err, stats) => {

})
