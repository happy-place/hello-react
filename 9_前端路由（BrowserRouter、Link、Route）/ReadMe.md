## 9_前端路由工作原理
```aidl
路由工作原理：实质就是kv查询，点击控制地址栏地址变化，被路由器监听到，从而控制对应组件展示，key是path，value时候组件。

react提供3种路由组件，react-router-dom、react-router-native、react-router-anywhere 分别适用web开发、移动端开发、
和任意场景开发，其中aynwhere 适配不太好，web开发一般推荐react-router-dom。

SPA（Single Page Application）:只有一个html页面，通常分为标题区域、导航区域、列表展示区，点击行为不会导致浏览器调整，但会改变浏览器地址，
数据通过ajax基于异步请求获取，在组件中展示，不刷新页面完成交互。

简单SAP：
1.添加依赖：yarn add react-router-dom;
2.创建组件 About、Home;
3.App.js页导航区使用组件 路由链接标签<Link className='xxx' to='/aa'>aa</Link> 替代<a href='/aa'>aa</a>，to指向浏览器path；
4.展示区路由标签：<Route path='/aa' component={Aa}/> 提花自定的显示效果;
5.index.js中<Link>和<Route>使用<BrowserRouter>或<HashRouter>包裹;

一般组件与路由组件：
以<Xxx/> 形式引入的组件称为一般组件，自己定义，自己引入，如果不传props，则props为空，一般组件通常放在 components 目录；
以<Route path='/aa' component={Aa}> 方式，引入的组件，即基于路由匹配方式展示的组件称为路由组件，即使不传props。props也有内容，路由组件通常放在pages目录。

<Link> 标签在底层其实也是转换为<a>标签处理，默认选择时置灰；
<BrowserRouter> 对应BOM，实质是通过操作浏览器history，操作路由跳转，是无锚点跳转；
<HashRouter> 对应的是浏览器默认DOM，本质也是操作浏览器history实现路由跳转，是有锚点跳转，以 http://xxx:300/user?name=tom/#/test1 为例，
/#/ 后面的 /test1代表的是前端资源，发送请求时不会传入后端；
```