const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            url: true
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["autoprefixer", {}],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['@svgr/webpack', {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }],
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        static: {
            publicPath: "/",
            directory: "./resources",
        },
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            hash: true
        })
    ],
}