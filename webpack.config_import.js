const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');
const consolePlugIn = require('./plugins/console');
module.exports = {
    mode: 'development',
    entry: {
        app: { import: './src/index.js', dependOn: 'shared' },
        print: { import: './src/print.js', dependOn: 'shared' },
        shared: './src/shared.js'
    },
    output: {
        path: path.resolve(__dirname, 'out', 'dist'),
        filename: '[name].[contentHash].bundle.js'
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' },
        { test: /\.css/, use: ['style-loader', 'css-loader'] },
        { test: /\.(gif|jpg)/, use: 'file-loader' }
        ]
    },
    plugins: [new htmlwebpackPlugin({ template: './src/index.html' }), new consolePlugIn()],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8500
    },
    devtool: 'inline-source-map'
}