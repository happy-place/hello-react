## 20_路由访问记录replace与push模式
```aidl
路由组件，在<Route>标签中注册的组件，被路由器渲染，具备操作history的api;
非路由组件，自己写在render()方法中，有自己渲染的组件，不具备操作history的api，如需要操作history 需要使用withRouter（）

对于路由组件可以使用this.props.history 获取history对象，进而使用如下API操作浏览器跳转
goBack()、goForward()、go(step)、push(path,[state])、replace(path,[state])
```