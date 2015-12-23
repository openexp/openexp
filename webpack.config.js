const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: './client/vendor.js',

        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            './client/index.js'
            ]

    },
    "target": 'atom',

    output: {
        path: path.resolve(__dirname, './client/build'),
        publicPath: '/build/',
        filename: '[name].js',
        pathinfo: true
    },

    resolve: {
        root: [path.join(__dirname, "/node_modules")]
    },
    devServer: {
        hot: true
    },
    module: {
        loaders: [
            {test: /src.*\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/},
            {test: /\.(eot|woff|svg|woff2|dtd|ttf)$/, loaders: ["file"] },
            {test: /\.scss$/, loaders: ["style", "css", "sass?"]},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: []}
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

};
