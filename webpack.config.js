const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.tsx$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 8081,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './client/src/index.html',
            filename: './index.html',
        }),
        new StyleLintPlugin({
            files: ['src/**/*.css'],
        }),
    ],
};
