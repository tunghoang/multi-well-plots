const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        path: __dirname + '/dist',
        filename: 'multi-well-plots.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    interpolate: true
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        }
        ],
    },
}
