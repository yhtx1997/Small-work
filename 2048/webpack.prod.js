const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '2048',
            template: './src/index.html',
            minify: true,
            hash: true
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true 
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    }
});