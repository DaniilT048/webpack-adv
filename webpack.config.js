const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
       index: './src/index.js',
       main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.svg'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].min.css'
        })
    ],

    target: 'web',
        devServer: {
    port: 4200,
        hot: false
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [{ loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    }
};