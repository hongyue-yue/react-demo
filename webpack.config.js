var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'bundle.js',
	//	publicPath: '/public/',
		publicPath: 'http://localhost:8080/public'

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
				loader: 'style!css!sass'
			}
		]
	},
	// proxy
	devServer: {
		proxy: {
      "/api/*": {
        target: "http://localhost:4000",
        secure: false,
        rewrite: function(req, options) {
          //you can handle rewrite here if you need to
        }
      }
    }
		/*contentBase: './',
		host: 'localhost',
		port: 9090, //默认8080
		inline: true, //可以监控js变化
		hot: true, //热启动*/
    }
}
