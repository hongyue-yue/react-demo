'use strict'
process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const webpackProdConfig=require('./webpack.prod.config.js')


webpack(webpackProdConfig,function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  })
console.log(webpackProdConfig.devtool)
