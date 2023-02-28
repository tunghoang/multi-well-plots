
/**
 * @type {import('webpack').Configuration}
 */
const common = {
    context: __dirname + '/src',
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
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
    externals: {
        angular: 'angular',
    }
}

/**
 * @type {import('webpack').Configuration[]}
 */
module.exports = [
    {
        ...common,
        entry: {
            'multi-well-plots': "./index.js",
        },
        output: {
            ...common.output,
            filename: '[name].cjs',
            clean: true,
        },
    },
    {
        ...common,
        entry: {
            'multi-well-plots': "./esm.js",
        },
        output: {
            ...common.output,
            filename: '[name].mjs',
            library: {
                type: 'module',
            },
        },
        experiments: {
            outputModule: true,
        },
    },
]