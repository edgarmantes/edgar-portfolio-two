var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var minify = process.argv.indexOf('--minify') != -1;

var filename = [packageData.name, packageData.version, 'js'];
var plugins = [];

if (minify) {												// If you supply the --minify argument to webpack then it 
    filename.splice(filename.length - 1, 0, 'min');			// adds the .min extension to the filename, and adds an 
    plugins.push(new webpack.optimize.UglifyJsPlugin());	// instance of UglifyJSPlugin to the plugins array.
}

module.exports = {
    entry: path.resolve(__dirname, packageData.main), // references the 'main' entry of package.json
    output: {
        path: path.resolve(__dirname, 'build'), // Webpack will output to the 'build' directory ( if you change to 'public' then make sure to modify the script tags to build out to the 'public' directory instead of the 'build' directory)
        filename: filename.join('.'),
    },
    devtool: 'source-map', // tells webpack that you want a source map building for your output file.
    module: {
      loaders: [
        {
          test: /\.js$/,				// Grabs all .js files 
          exclude: /(node_modules)/,	// Excludes .js files in node_modules
          loader: 'babel-loader',		// Babel loader
          query: {						// preset of es2015
            presets: ['es2015']
          }
        }
      ]
    },  
    plugins: plugins  
}