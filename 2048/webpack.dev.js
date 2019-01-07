const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: '2048',
            template: './src/index.html',
            minify: false,
            hash: true,
            cache:false
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',//默认值 也可以改为 127.0.0.1 或者其他
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000'//请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users
        }

    }
 })