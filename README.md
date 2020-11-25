## 01. 隔行变色碰到的问题

浏览器不能直接支持 ES6 的模块化

## 02. 解决方案

```bash
npm i webpack webpack-cli -D
```

```bash
npx webpack
```

## 03. 改打包之后的文件

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

## 04. 自动打包

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