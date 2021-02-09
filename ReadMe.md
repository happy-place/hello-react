# React 快速上手

## 安装脚手架
```shell
brew install npm yarn
npm install -g create-react-app
create-react-app hello-react
cd hello-react
yarn start
curl http://localhost:30000
```
## 自定义组件
```shell
如何抽取组件?
1.src/components/模块名称
2.同一个模块 css js 图片资源放在同一个目录下

css命名冲突怎么办?
方案 1：css 样式前面加上模块前缀，确保不冲突；
方案 2：lingst 在 css 样式外套一层模块名称，以 a.b 形式调用确保不冲突;
方案 3: 以 xx.module.css 后缀命名，以 import xx from 'xx.module.css' 方式引入，以 a.b 方式调用，壳避免冲突。

App.js 中引入模块，路径太深怎么办？
模块目录下模块文件大写开头，工具类型 js 小写开头，模块统一命名为 index.js index.css 形式，引入时，路径写到模块目录即可。

命名法：
1.模块相关 js 和 css 统一大写开头，工具类型 js 小写开头；
2.模块类型 js 也可以 jsx 开头
```