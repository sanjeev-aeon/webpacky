const express = require('express')();
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const config = require('../webpack.express.config');
const compiler = webpack(config);
express.use(webpackMiddleWare(compiler, {
    publicPath: config.output.publicPath,
}));
express.listen(3030, () => {
    console.log("up at 3030");
});