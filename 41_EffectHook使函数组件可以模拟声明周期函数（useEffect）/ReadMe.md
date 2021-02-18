## 40_借助钩子让函数组件可操作状态（useState）

> Effect Hook 副作用钩子
```aidl
借助 Effect Hook 可以让函数组件具备声明周期函数功能

React.useEffect(callback,deps)

情况 1：deps 为不传时，监控所有状态变更，类似于 componentDidUpdate 功能执行 1+n次；
情况 2：deps 传空数值[]时，啥也不监控，只在挂载时执行一次，类似于 componentDidMount 功能，执行 1 次；
情况 3：deps 传指定数组是[count]，只监控 count 状态变更，其余状态不管，执行 1+n次；
情况 4：callback 返回另外一个函数时，此返回函数在组件被卸载时调用，类似于 componentWillUnmount 功能；
注：在 callback 中使用 setXxx() 修改状态上，只能传函数 count => count + 1，不能穿值 count+1，否则累加实效
```

```javascript
export default function Demo(){

    let [count,setCount] = React.useState(0);
    let [name,setName] = React.useState('Jack');

    // React.useEffect(()=>{
    //  console.log('@')
    // }) // 第二个参数不传的话，监控所有状态变更，相当于 componentDidUpdate()，执行1+n

    // React.useEffect(()=>{
    //     console.log('!')
    // },[]) // 第二个参数传空数组，啥都不监控，只在初始化渲染完毕执行一次，相当于 componentDidUpdate，执行 1 次

    // React.useEffect(()=>{
    //     console.log('%')
    // },[count]) // 第二个参数传入数组，只监控指定状态修改

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count => count + 1); // 注：此处只能传 回调函数，不能穿对象
        },1000);
        return () => {
            clearInterval(timer);
        }
    },[])// 第二个参数传空数组，模拟 componentDidMount，实现定时器挂载，返回另外一个函数，在组件卸载时执行，模拟了 componentWillUnmount


    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function add(){
        // 直接传值修改状态，亦可传入回调函数，修改状态，这点与 setState()相同，可以通过传对象，或传函数，进行修改
        // setCount(count+1)
        setCount(count => count +1 )
    }

    function change(){
        setName('Tom')
    }

    return (
        <div>
            <div>累计: {count}，名称：{name}</div>
            <button onClick={add}>点击+1</button>&nbsp;
            <button onClick={change}>点击换名</button>&nbsp;
            <button onClick={unmount}>卸载组件</button>&nbsp;
        </div>
    )
}
```