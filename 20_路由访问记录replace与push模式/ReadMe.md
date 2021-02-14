## 20_路由访问记录replace与push模式
```aidl
<Link replace={true} to='/a/b'>Ab</Link> 默认历史记录push压栈记录每一步，设置replace后，每次修改替换记录，方便快速回退；
<Route exact={true} path='/a/b' component={Ab}/> 路由默认为模糊匹配，通过设置exact，改为精确匹配。
```