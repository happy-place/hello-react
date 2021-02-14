## 13_前端路由（刷新样式丢失）
```aidl
1.样式丢失原因？
index.html中引入bootstrap.css时，使用的是相对路径 ./css/bootstrap.css，而导航区组件人跳转时使用的是多级路径，导致刷新时，样式相对路径定位异常，
直接返回默认的index.html，从而导致样式丢失。

解决方法：
方案1：index.html中使用绝对路径引入样式 /css/bootstrap.css；
方案2：使用前缀%PUBLIC_URL%引入样式 %PUBLIC_URL%/css/bootstrap.css;
方案3：使用 HashRouter替代BrowserRouter，通过 # 作为锚点，多级路径被当做前端资源，不传输给后端，因此即便还是使用相对路径，依旧能正常定位样式文件；
```