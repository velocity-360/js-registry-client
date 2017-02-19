var webpack = require('webpack')
var path = require('path')

module.exports = {

	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'dist/bundle.js',
		sourceMapFilename: 'dist/bundle.map'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}

}