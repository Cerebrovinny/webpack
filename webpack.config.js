const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/direct.js',
    output: {
        filename: 'direct.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
            })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // add CSS to DOM injecting the tag
                'css-loader', // interpretation @import, url()...
                'sass-loader',
            ]
        }]
    }
}