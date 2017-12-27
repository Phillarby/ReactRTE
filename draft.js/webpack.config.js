const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [ path.resolve(__dirname, 'src', 'index.js') ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|styl)$/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            { 
                test: /\.(ico|jpe|jpg|jpeg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
                loader: 'url-loader' 
              }, 
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
            },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    }
};