## 10_前端路由（NavLink、Bootstrap）
```aidl
<NavLink activeClassName='xxx' className = 'yyy' to='/yyy'>yyy</NavLink>
1.导航栏需要有选中高亮效果时，使用 NavLink标签，默认选中项，会添加'active'样式，如果刚好使用了bootstrap.css，就能自动出现bootstrap风格高亮效果；
2.如果需要自定义高亮效果，使用activeClassName指定选中时使用的样式类型，由于bootstrap的样式优先级比较高，需要使用 !important; 提升样式优先级
```