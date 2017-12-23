HtmlWebpackPlugin = require('html-webpack-plugin');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.jsx',
        vendors: './src/assets/vendor/vendor.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            { 
                test: [ /\.scss$/, /\.css$/ ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                            { 
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            }, 
                            { 
                                loader: 'sass-loader' 
                            }
                    ],
                    publicPath: __dirname + '/dist'
                })
            },
            {
                test: [ /\.jsx$/, /\.js$/ ],
                exclude: __dirname + '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Bitches',
            template: './src/index.html',
            minify: {
                collapseWhitespace: false
            },
            hash: true      
        }),
        new ExtractTextPlugin({
            filename: "styles.bundle.css",
            allChunks: true
        })
    ]
};