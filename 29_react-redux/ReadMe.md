## 29_react-redux
![React-Redux原理.png](./React-Redux原理.png)
```aidl
react-redux 是react官方维护的redux库，可以很好将react代码与redux模块融合。
特点：
   1.react组件分为容器组件和UI组件，容器组件包裹UI组件，UI不直接与react-redux发生联系，通过容器组件实现间接访问；
   2.依旧正常创建reducer 函数，并基于此创建store,store以props形式传入容器组件；
   3.容器组件内部从react-redux中引入connect()()柯里化函数，第二次调用传入UI组件，第一次调用传入mapStateToProps(state)、
   mapDispatchToProps(dispatch)两个函数，分别返回发kv形式js对象，对应获取store中的存储的状态，以及操作状态的函数；

yarn add 'react-redux'

```