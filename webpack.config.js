'use strict'

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var production = process.env.NODE_ENV === 'production'
var loader='style-loader!css-loader!sass-loader';
var filename='[name].js';

var plugins = [
	new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			 filename: './index.html', //生成的html存放路径，相对于path
			 template: './index.html', //html模板路径
			 inject: 'body', //js插入的位置，true/'head'/'body'/false
			 //chunks: ['index'],//需要引入的chunk，不配置就会引入所有页面的资源
			 minify: { //压缩HTML文件
					 removeComments: true, //移除HTML中的注释
					 collapseWhitespace: false //删除空白符与换行符
			 }
  }),
];

if(production) {
plugins =plugins.concat([
	  new CleanWebpackPlugin(['public']),
		new webpack.optimize.UglifyJsPlugin(),
	  new ExtractTextPlugin({ filename: 'css/[name].[contenthash].css', disable: false, allChunks: true }),
		new webpack.DefinePlugin({
						'process.env': {
								'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
						}
	  }),
		new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'js/vendor.js'
    })
]);
loader=ExtractTextPlugin.extract('css-loader!sass-loader');
filename='js/[name].[chunkhash].js';
}

module.exports = {
	entry:{
		app: [
      'babel-polyfill',
      './app/index'
    ],
    vendor: ['react'] //提取react模块作为公共的js文件
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: filename,
		sourceMapFilename: '[file].map',
		publicPath:'/',
		chunkFilename: 'js/[name].[chunkhash].js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{presets: ['es2015', 'react']}
			},
			{
				test: /.scss$/,
				exclude: /node_modules/,
				loader: loader
			},

		]
	},
  plugins: plugins,
	// proxy
	devServer: {
		/*proxy: {
      "/api/*": {
        target: "http://localhost:4000",
        secure: false,
        rewrite: function(req, options) {
          //you can handle rewrite here if you need to
        }
      }
    }*/
		contentBase: '/',
		host: 'localhost',
		port: 9090, //默认8080
		inline: true, //可以监控js变化
		hot: true, //热启动
    }
}
