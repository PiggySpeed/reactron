import React from 'react';
import ReactDOM from 'react-dom';
import Piggy from './page';

ReactDOM.render(<Piggy />, document.getElementById('content'));

//var express = require('express');
//var webpack = require('webpack');
//var path = require ('path');
//
//var webpackDevMiddleware = require('webpack-dev-middleware');
//var webpackHotMiddleware = require('webpack-hot-middleware');
//var webpackConfig = require('../webpack.config');
//
//var app = express();
//
//var compiler = webpack(webpackConfig);
//app.use(webpackDevMiddleware(compiler));
//app.use(webpackHotMiddleware(compiler));
//
//app.use(express.static('src'));
//app.listen(3000);