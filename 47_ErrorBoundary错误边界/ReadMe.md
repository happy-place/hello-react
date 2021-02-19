## 47_ErrorBoundary错误边界

```aidl
错误边界控制：组件渲染过程中讲出错组件的影响范围控制在其自身，不影响它的外层组件展示，方便排查问题。此外
还可以避免错误信息直接暴露到页面，保证出错时也能有较好用户体验。

static getDerivedStateFromError(error) return newSate; 渲染出错时，返回兼容性比较好的 state
componentDidCatch(error,errInfo) 渲染出错时，上报后端服务器，进行异常统计

注：
1.错误边界处理需要在发生错误的父组件上操作；
2.上面两个边界处理函数，只在生命周期函数中出异常时起作用，更直白说，只在 render()出错时调用，事件回调、定时器中的异常不会触发上面的异常边界函数；
3.上面的异常处理编辑函数，只在生产环境下使用时稳定的，开发环境下，展示效果不稳定


yarn add global serve

yarn build

serve -s build
```