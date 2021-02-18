## 30_react-redux（mapDispatchToProps简写）
![React-Redux原理.png](./React-Redux原理.png)
```aidl
react-redux 开发流程：
1.开发静态网页，UI 组件，使其能够正常渲染展示，回调函数可以先定义空实现函数；
2.开发容器组件包裹 UI 组件，connect(mapStateToProps,mapDispatchToProps)(XxxUI)
    - 映射store状态：mapStateToProps
    - 映射操作 store 状态的函数：mapDispatchToProps
3.定义 redux 相关 constant、actions、reduers、store
    - constant 包含所有 reducer function 接收 action 的 type 类型；
    - actions 定义各 UI 组件回调动作映射的行为，例如：{type:INCREMENT, data:1}
    - reduers 定义 reduce function(prevState,action) return newState;
    - store 基于 reducers 创建store， export default createStore(combineReducers,applyMiddleware(thunk))
      注：原本 redux 只接收 action，借助 react-thunk，可以接收异步回调函数，然后在回调中执行 dispatch(action)
4.index.js 入口中，使用 Provider 管理 store，并包裹所有容器组件，实现给容器批量绑定 store 效果；
5.UI 组件中，基于 props ，获取绑定状态、操作状态函数，完成回调函数的空实现；
    mapStateToProps：state => {自己定义的 kv, 自己需要使用的 kv}
    mapDispatchToProps: {
        自己使用的回调函数名称: actions 中定义的回调函数名称
    }
6.联调
```