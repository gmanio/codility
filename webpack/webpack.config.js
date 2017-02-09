/**
 * Created on 2017-02-09.
 * @author: Gman Park
 */

const webpack = require('webpack')
const path = require('path')
const baseDir = process.cwd();

const config = {
    context: path.resolve(baseDir, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(baseDir, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
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
        }]
    }
}

module.exports = config