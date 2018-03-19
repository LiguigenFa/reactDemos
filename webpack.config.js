//var webpack = require('webpack')
var path = require('path')
module.exports = {
	entry:"./js/Main.js",//入口文件
	output:{
		path: path.resolve(__dirname, './'),
		filename:"bundle.js"//输出文件名称
	},
	module:{//依赖
		loaders:[
			{
				test:/\.js$/,//正则表达式，把我们的js结尾的文件按照我们的jsx-loader进行解析（如果你的组件后缀是jsx的，那么此时你就应该写/\.jsx$/）
				loader:"jsx-loader"//依赖的loader
				
			},
			{
				test:/\.less$/,
				loader: 'style-loader!css-loader!less-loader'
				
			},
			{
				test:/\.css/,
				loader: 'style-loader!css-loader!less-loader'
				
			},
			{   test:/\.(png|jpg)$/,
				loader:'url-loader?limit=10000'
			},//限制大小小于10k的
			{	//处理文字时使用
				test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
				loader:'file-loader?name=[name].[ext]'
			}
		]
		
	}
}
