## 01. 隔行变色碰到的问题

浏览器不能直接支持 ES6 的模块化

## 02. 解决方案

```bash
npm i webpack webpack-cli -D
```

```bash
npx webpack
```

## 03. 修改打包入口和出口

```js
const path = require('path');

module.exports = {
    mode: 'development', // 开发版本，production => 压缩
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist') , // 指定的是一个目录
        filename: 'bundle.js' // 指定的是生成的文件名
    }
};
```

```
npx webpack
```

## 04. 自动编译代码

- 安装

注意 webpack-dev-server 需要依赖 webpack-cli@3

```bash
npm i webpack-dev-server webpack-cli@3 -D
```

- 配置

```json
// package.json
{
    "scripts": {
        "dev": "webpack-dev-server"
    }
}
```

- 引入

```html
<!-- 注意修改 src/index.html 中的引入路径 -->
<script src="/bundle.js"></script>
```

- 执行

```bash
npm run dev
```

## 05. html-webpack-plugin

- 托管 HTML 文件到内存当中

- 会自动的引入咱们的 JS 文件

```bash
npm i html-webpack-plugin -D
```

```js
const HtmlWebpackPlugin =  require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    // 模板
    template: './src/index.html',
    // 生成的文件名字
    filename: 'index.html'
});

module.exports = {
    // ...
    plugins: [htmlPlugin]
};
```

## 06. 配置 webpack-dev-server

```js
// webpack.config.js
module.exports = {
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 9000
    }
};
```