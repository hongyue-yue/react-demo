'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports =merge(baseWebpackConfig,{
  plugins:[
    new webpack.DefinePlugin({
						'process.env': {
								NODE_ENV: '"development"'
						}
	  }),
  ]
})
