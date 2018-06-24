const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const commonConfig = require('./webpack-common');
const paths = require('./paths');

const port = 8091;

module.exports = {
    devServer: {
        contentBase: paths.appSrc,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        port,
        stats: {
            colors: true,
            chunks: false,
            errors: true,
            errorDetails: true,
            timings: true,
            warnings: true,
            reasons: true,
            modules: false
        },
        proxy: {
            '/api/**': {
                // in case you run the Web services locally (e.g. via IntelliJ) instead of docker, use
                target: 'http://localhost:8090'
                // target: 'http://localhost:58091'
            }
        }
    },
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        paths.appIndexJs
    ],
    module: {
        rules: [
            commonConfig.assets,
            commonConfig.styles,
            {
                test: /\.tsx?$/,
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: paths.appBuild,
        publicPath: '/'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin({
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
            tslint: true
        }),
        ...commonConfig.plugins
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
}