# Todo list

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
		多个组件使用，放在其公共父类state；(状态提升)
3.组件通信：
	父 -> 子：直接通过props 传递属性；
	子 -> 父：子借助props接收父传递的回调函数，依赖回调函数进行通信。 
4.React的checkbox，defaultChecked只在初始化时展示一次，之后不能修改，只定义checked就写死了，需要配合onChange事件，才能动，类似还有defaultValue和value;
5.状态在哪里，操作状态的方法就放在哪里;
6.React中不能直接使用confirm()作为确认框，而要使用window.confirm();
7.使用nanoid创建全局唯一id，相比于uuid更轻。
	
```