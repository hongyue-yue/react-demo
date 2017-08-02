var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var production = process.env.NODE_ENV === 'production'
var plugins = [];
var loader='style!css!sass';
if(production) {
	plugins = [
		new webpack.optimize.UglifyJsPlugin({
			mangle:   true,
			compress: {
				warnings: false,
			}
	}),
	new ExtractTextPlugin('style.css'),
	new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
	            filename: './index.html', //生成的html存放路径，相对于path
	            template: './app/index.html', //html模板路径
	            inject: 'body', //js插入的位置，true/'head'/'body'/false
	            hash: true, //为静态资源生成hash值
	            //chunks: ['bundle'],//需要引入的chunk，不配置就会引入所有页面的资源
	            minify: { //压缩HTML文件
	                removeComments: true, //移除HTML中的注释
	                collapseWhitespace: false //删除空白符与换行符
	            }
	})
];
loader=ExtractTextPlugin.extract('css!sass');
}


module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {presets: ['es2015', 'react']}
			},
			{
				test: /.scss$/,
				exclude: /node_modules/,
				loader: loader
			}
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
		contentBase: './',
		host: 'localhost',
		port: 9090, //默认8080
		inline: true, //可以监控js变化
		hot: true, //热启动
    }
}
