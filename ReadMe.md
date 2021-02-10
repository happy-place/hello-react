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

## Todo list

```shell
结构拆分： Header、List、Item、Footer;
静态展示：
	1.拷贝老项目 html 和 css 到 App.js 和 App.css 中，修改className和style，检查能否正常运行；
	2.分拆App.js中不同区域到各自组件js文件，检查是否能够正常展示；
	3.分层App.css中的样式到各自组件的css文件，检查能否正常展示。
状态更新驱动页面展示：
	1.暂时没有学习PubSub进行组件通信，因此考虑将数据存储在共同父亲App的状态中，然后下发子组件渲染；
	
总结：
1.拆分组件、实现静态组件，注意JSX中className、style；
2.动态数据放在哪个组件的state里？
		组件自身使用，放在其自身的state；
		多个组件使用，放在其公共父类state；
3.组件通信：
	父 -> 子：直接通过props 传递属性；
	子 -> 父：子借助props接收父传递的回调函数，依赖回调函数进行通信。 
4.React的checkbox，defaultChecked只在初始化时展示一次，之后不能修改，只定义checked就写死了，需要配合onChange事件，才能动，类似还有defaultValue和value;
5.状态在哪里，操作状态的方法就放在哪里;
6.React中不能直接使用confirm()作为确认框，而要使用window.confirm();
7.使用nanoid创建全局唯一id，相比于uuid更轻。
	
```

