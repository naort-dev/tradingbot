const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.(jp(e*)g|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: '',
                            emitFile: true,
                            name: '[hash].[ext]',
                            outputPath: 'static/images/',
                            publicPath: '/_next/static/images/',
                        },
                    },
                ],
            },
            {
                test: /\.(jp(e*)g|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: '',
                            emitFile: true,
                            name: '[hash].[ext]',
                            outputPath: 'static/images/',
                            publicPath: '/_next/static/images/',
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: '',
                            emitFile: true,
                            name: '[hash].[ext]',
                            outputPath: 'static/fonts/',
                            publicPath: '/_next/static/fonts/',
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
});
