const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/direct.js',
    output: {
        filename: 'direct.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // add CSS to DOM injecting the tag
                'css-loader' // interpretation @import, url()...
            ]
        }]
    }
}