import webpack from 'webpack';
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {

    devtool: 'source-map',
    entry : './lib/client/index.js',

    output : {
        path: './dist',
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
    plugins : [
      new ExtractTextPlugin('client.bundle.css')
    ],

    module : {
        loaders: [
              {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
              }
        ]
    }
}
