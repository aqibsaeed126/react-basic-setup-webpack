/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// Configs
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            sourceMap: false,
          }),
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name]_[hash].css',
        }),
        new OptimizeCssAssetsPlugin(),
      ],
      output: {
        filename: 'assets/js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '..', `build`),
        publicPath: '/',
      },
    },
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
