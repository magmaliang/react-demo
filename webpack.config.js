var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./release"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        libraryTarget: "umd",
        publicPath: '/'
    },
    module: {
        //加载器配置
        rules: [{
                test: /\.css$/
                ,use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            } 
            ,{
                test: /\.scss$/
                ,use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                })
            }
            ,{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders:['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'] 
            }

        ]
    }
    ,plugins: [
        new ExtractTextPlugin('styles.css')
        ,new HtmlWebpackPlugin({
            template: './src/tpl.ejs'
        })
    ]
}