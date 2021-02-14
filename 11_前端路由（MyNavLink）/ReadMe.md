## 11_前端路由（MyNavLink）
```aidl
<NavLink activeClassName='nav-highlight' className="list-group-item" {...this.props}/>
MyNavLink内聚NavLink，保持使用方式与NavLink完全一致，props能传的直接传，非闭合标签内部文本内容，默认通过children接受，且照样可以
通过props定义成自结束标签属性形式。

<NavLink activeClassName='nav-highlight' className="list-group-item" to='/about'>About</> 等效于下面形式
<NavLink activeClassName='nav-highlight' className="list-group-item" to='/about' children='About'/>

```