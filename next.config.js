const webpack = require('webpack');
const withOptimizedImages = require('next-optimized-images');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withCSS = require('@zeit/next-css');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withBundleAnalyzer(
    withSourceMaps(
        withCSS(
            withOptimizedImages({
                inlineImageLimit: -1,
                target: 'serverless',
                webpack(config, options) {
                    if (config.resolve.plugins) {
                        config.resolve.plugins.push(new TsconfigPathsPlugin());
                    } else {
                        config.resolve.plugins = [new TsconfigPathsPlugin()];
                    }

                    const { isServer, dev } = options;
                    const prefix = config.assetPrefix ? config.assetPrefix : '';
                    config.module.rules.push(
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
                        {
                            test: /\.mp4$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        context: '',
                                        emitFile: true,
                                        name: '[hash].[ext]',
                                        publicPath: `${prefix}/_next/static/videos/`,
                                        outputPath: `${isServer ? '../' : ''}static/videos/`,
                                    },
                                },
                            ],
                        },
                    );
                    if (!options.dev && isServer && process.env.NEXT_PUBLIC_APP_TRACKER_SENTRY) {
                        config.plugins.push(
                            new SentryWebpackPlugin({
                                release: options.buildId,
                                include: '.next',
                                ignore: ['node_modules', 'server', 'chunks', 'static'],
                                urlPrefix: '~/next',
                            }),
                        );
                    }
                    if (dev && isServer) {
                        config.plugins.push(new ForkTsCheckerWebpackPlugin());
                    }
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
        ),
    ),
);
