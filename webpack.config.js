// main modules
HtmlWebpackPlugin = require('html-webpack-plugin');
ExtractTextPlugin = require('extract-text-webpack-plugin');
webpack = require('webpack');

// environments variables
var isProd = process.env.NODE_ENV === 'production';    
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'sass-loader'],
                            publicPath: '/dist'
                        });
var cssConfig = isProd? cssProd : cssDev; 

// main config
module.exports = {
    entry: {
        app: './src/app.jsx',
        vendors: './src/assets/vendor/vendor.js',
        other: './src/other.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: cssConfig
            },
            {
                test: /\.(js|jsx)$/,
                exclude: __dirname + '/node_modules/',
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gz)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                } 
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        hot: true,
        port: 9000,
        stats: 'errors-only',
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Bitches',
            template: './src/index.html',
            filename: './index.html',
            excludeChunks: ['other'],
            minify: {
                collapseWhitespace: isProd
            },
            hash: true      
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Fellas',
            template: './src/other.html',
            filename: './other.html',
            // chunks: ['other'],
            minify: {
                collapseWhitespace: isProd
            },
            hash: true      
        }),
        new ExtractTextPlugin({
            filename: "styles.bundle.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery"
        }),
    ]
};