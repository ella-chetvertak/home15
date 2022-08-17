const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html', 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './styles/main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: "postcss-loader",
                  },
                  'sass-loader',
                ]
            },
        ],
    }
}