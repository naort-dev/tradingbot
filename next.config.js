const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');

module.exports = withImages(
    withTypescript({
        webpack(config, options) {
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
            config.plugins.push(
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                    'process.env.DEBUG': JSON.stringify(process.env.DEBUG ? process.env.DEBUG : false),
                }),
            );
            return config;
        },
    }),
);
