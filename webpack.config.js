const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');
const consolePlugIn = require('./plugins/console');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        xToY: './src/lib/xToY.js'
    },
    output: {
        path: path.resolve(__dirname, 'out', 'dist'),
        filename: '[name].[contentHash].bundle.js',
        library: 'xToY'
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' },
        { test: /\.css/, use: ['style-loader', 'css-loader'] },
        { test: /\.(gif|jpg)/, use: 'file-loader' }
        ]
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            commonjs2: 'lodash',
            root: '_'
        }
    },
    plugins: [new htmlwebpackPlugin({ template: './src/index.html' }), new consolePlugIn()],
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\]node_modules[\\]/,
                    name: "thirdparty",
                    chunks: 'all'
                }
            }
        }

    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8500
    },
    devtool: 'inline-source-map'
}