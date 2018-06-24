const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    assets: {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: combineLoaders([{
            loader: 'url-loader',
            query: {
                limit: '100000',
                name: '[name].[ext]'
            }
        }])
    },
    styles: {
        test: /\.css$/,
        // exclude: /node_modules/,
        loader: combineLoaders([
            {loader: 'style-loader'},
            {
                loader: 'css-loader',
                query: {
                    modules: false,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ])
    },
    plugins: [
        new HtmlWebpackPlugin ({
            inject: true,
            template: paths.appHtml,
            filename: paths.appBuildHtml
        }),
        // Ignore all locale files of moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
}