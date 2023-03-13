
/**
 * @type {import('webpack').Configuration}
 */
const common = {
    context: __dirname + '/src',
    mode: "development",
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
        '@revotechuet/misc-component-vue': '@revotechuet/misc-component-vue',
    },
    devtool: 'source-map',
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
            filename: '[name].js',
            library: {
                type: 'umd',
            },
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