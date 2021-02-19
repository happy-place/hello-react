## 43_使用Fragment缩减嵌套层级

```aidl
为什么使用？
组件嵌套层级过多，由于jsx语法要求只能有一个根标签，因此会出现很多冗余div。

为什么有用？
使用Fragment标签替换div，只在编译时生效。渲染时会被忽略。

注意事项：
1.在不需要遍历时，<Fragment>标签页可以被<></> 空标签替换，通过可以骗过jsx语法编译器，减少嵌套div；
2.空标签<></>中不能使用任何属性，因此如果在循环中使用<Fragment>就不能使用空标签替换了，且必须定义唯一key，不得定义除此之外其他属性。
```
```javascript
import React, {Component,Fragment} from 'react';

return (
    <Fragment>
        <div>累计: {count}，名称：{name}</div>
        <input ref={myRef} type={'text'}/>
        <button onClick={add}>点击+1</button>&nbsp;
        <button onClick={change}>点击换名</button>&nbsp;
        <button onClick={unmount}>卸载组件</button>&nbsp;
        <button onClick={show}>点击提升数据</button>&nbsp;
    </Fragment>
)

```