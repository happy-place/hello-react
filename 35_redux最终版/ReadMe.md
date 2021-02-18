## 35_redux最终版

```aidl
简写优化：
1.redux 的 actions 相关函数命名，省略 create、action 等单词，值保留 increment、decrement、add 等关键字；
2.redux 的 reducers 创建 index.js 汇总所有 Reducer ，然后统一暴露给 store 使用;
3.App 中使用 Provider 管理 store，如此包裹在 Provider 中所有 UI 组件就能自动获取 store;
4.mapDispatchToProos 中的 函数 kv 保持一致，尽可能触发简写
```