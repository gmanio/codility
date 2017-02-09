/**
 * Created on 2017-02-09.
 * @author: Gman Park
 */

const webpack = require('webpack');
const path = require('path');
const baseDir = process.cwd();
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    context: path.resolve(baseDir, 'src'),
    entry: {
        app: './app.js',
        // admin: './admin.js'
    },
    output: {
        path: path.resolve(baseDir, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(baseDir, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

module.exports = config;