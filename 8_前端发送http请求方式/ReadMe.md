## 获取Github用户信息实战(消息发布与订阅)
```aidl
0.安装消息发布订阅模块：yarn add pubsub-js （https://github.com/mroderick/PubSubJS）
1.App.js 保持精简，不维持任何状态，不进行任何操作；
2.List.js 负责收集状态，驱动页面展示，在订阅Search页面的消息时，传入回调函数，进行状态修改；
3.Search页发布消息，调用List页回调函数，修改List页状态，从而在不提升状态情况下，实现兄弟节点直接通信；
```