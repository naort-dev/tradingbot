const path = require('path');

module.exports = {
    entry: {
        main: './react/src/app.tsx',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'assets/built'),
    },
};
