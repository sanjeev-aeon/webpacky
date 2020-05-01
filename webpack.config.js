const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { 'app': './src/index.js', 'secondApp': './src/b.js' },
    output: {
        path: path.resolve(__dirname, 'out', 'dist'),
        filename: '[name].[contentHash].bundle.js'
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }]
    },
    plugins: [new htmlwebpackPlugin({ template: './src/index.html' })],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8500
    }
}