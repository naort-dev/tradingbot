const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = withImages(
    withTypescript({
        target: 'serverless',
        webpack(config, options) {
            if (config.resolve.plugins) {
                config.resolve.plugins(new TsconfigPathsPlugin());
            } else {
                config.resolve.plugins = [new TsconfigPathsPlugin()];
            }

            const { isServer } = options;
            const prefix = config.assetPrefix ? config.assetPrefix : '';
            config.module.rules.push(
                {
                    test: /\.(eot|ttf|woff|woff2|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                context: '',
                                emitFile: true,
                                name: '[hash].[ext]',
                                publicPath: `${prefix}/_next/static/fonts/`,
                                outputPath: `${isServer ? '../' : ''}static/fonts/`,
                            },
                        },
                    ],
                },
                {
                    test: /\.ico$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                context: '',
                                emitFile: true,
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            );
            /*config.plugins.push(
                new webpack.EnvironmentPlugin({
                    NODE_ENV: 'production',
                    DEBUG: false,
                }),
            );*/
            // TODO
            // config.optimization.minimize = false;
            return config;
        },
    }),
);
