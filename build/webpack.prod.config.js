'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config.js')
console.log(__dirname)
module.exports =merge(baseWebpackConfig,{
  plugins:[
    new CleanWebpackPlugin(['public'],{
                root: path.join(__dirname, '../'),       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }),
		new webpack.optimize.UglifyJsPlugin(),
	  new ExtractTextPlugin({ filename: 'css/[name].[contenthash].css', disable: false, allChunks: true }),
    new webpack.DefinePlugin({
						'process.env': {
								'NODE_ENV': '"production"'
						}
	  }),
		new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'js/vendor.js'
    })
  ]
})
