/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ PLATFORM }) => {
  return merge([
    {
      entry: ['@babel/polyfill', path.resolve(__dirname, '../src')],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(jpe?g|png|gif|svg|mp4)$/i,
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
              name: '[name].[ext]',
            },
          },
          {
            test: /\.(mp4|avi|3gp)$/i,
            loader: 'file-loader',
            options: {
              outputPath: 'assets/videos',
              name: '[name].[ext]',
            },
          },
          {
            test: /\.(woff(2)?|ttf|eot|otf)$/i,
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              name: '[name].[ext]',
            },
          },
          {
            enforce: 'pre',
            test: /\.(js|jsx|mjs)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('eslint-loader'),
                options: {
                  eslintPath: require.resolve('eslint'),
                  emitWarning: true,
                },
              },
            ],
          },
          {
            test: /\.(scss|css)$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name]_[hash].css',
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          fileName: './index.html',
          hash: true,
        }),
        new webpack.DefinePlugin({
          ENV_PLATFORM: JSON.stringify(PLATFORM),
          APP_VERSION: JSON.stringify(require('../package.json').version),
        }),
        new CopyWebpackPlugin([{ from: './src/assets/favicon.png', to: 'assets/images' }]),
      ],
      output: {
        filename: 'assets/js/[name]_[hash].bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
      },
    },
  ]);
};
