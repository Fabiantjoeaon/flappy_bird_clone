'use strict';
const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

const config = {
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  entry: {

    bundle: SRC_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    // Gets name of object prop, bundle in this case
    filename: 'bundle.js'
  }
};

module.exports = config;