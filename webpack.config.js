const path = require('path');

module.exports = {
    mode: 'development', // 开发版本，production => 压缩
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist') , // 指定的是一个目录
        filename: 'bundle.js' // 指定的是生成的文件名
    }
};