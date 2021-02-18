## 38_路由组件懒加载（lazyLoad）

> 路由组件过多，首次加载等待时间可能比较长，正确做法是延迟加载，按需取用。且已经加载过的组件，之后点击不会重复加载。
```jsx

import React, {Component,lazy,Suspense} from 'react';
import {NavLink,Route} from 'react-router-dom'

// 路由切换到指定组件过程中的切换效果
import Loading from './pages/Loading'

const Home = lazy(()=> import('./pages/Home'))
const About = lazy(()=> import('./pages/About'))

<Suspense fallback={<Loading/>}>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
</Suspense>
```