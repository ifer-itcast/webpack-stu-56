const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    // 模板
    template: './src/index.html',
    // 生成的文件名字
    filename: 'index.html'
});

module.exports = {
    mode: 'development', // 开发版本，production => 压缩
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'), // 指定的是一个目录
        filename: 'bundle.js' // 指定的是生成的文件名
    },
    plugins: [htmlPlugin],
    devServer: {
        open: true,
        // host: '127.0.0.1',
        port: 9000
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'] // 有顺序
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                // 小于等于 limit 大小的图片会被转为 base64
                use: 'url-loader?limit=272359'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};