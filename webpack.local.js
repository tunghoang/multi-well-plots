const path = require('path');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
  context: __dirname + '/src',
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, '../wi-angular/watch/bower_components/multi-well-plots/dist'),
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
        use: ['style-loader','css-loader','less-loader'],
      }
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}
