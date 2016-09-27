const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './lib/index.js',
	devtool: PROD ? null : 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['babel'],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /(bootstrap|jquery\.).*\.js/,
				loader: 'imports-loader',
				query: {
					jQuery: 'jquery',
					$: 'jquery',
					this: '>window'
				}
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|gif|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				query: {
					name: './assets/[name].[hash].[ext]'
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				query: {
					attrs: ['img:src', 'link:href']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			hash: true
		}),
		new ExtractTextPlugin('bundle.css')
	]
};

