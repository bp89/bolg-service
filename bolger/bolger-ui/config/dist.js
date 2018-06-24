const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const packages = require('../package.json');
const paths = require('./paths');
const commonConfig = require('./webpack-common');

const ignoreVendorPkgs = [];
const vendorPackages = Object.keys(packages.dependencies)
    .filter(p => !ignoreVendorPkgs.includes(p));

const config = {
    entry: {
        main: paths.appIndexJs,
        vendor: vendorPackages
    },
    output: {
        path: paths.appBuild,
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    cache: false,
    devtool: 'source-map',
    resolve: {
        modules: ['node_modules', 'components', 'containers', 'assets'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'ag-grid': paths.appNodeModules + '/ag-grid'
        }
    },
    module: {
        rules: [
            commonConfig.assets,
            commonConfig.styles,
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                include: paths.appSrc
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin({ sourceMap: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new ForkTsCheckerWebpackPlugin({
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
            tslint: true
        }),
        ...commonConfig.plugins
    ]
};

module.exports = config;
