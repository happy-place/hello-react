import React, {Component} from 'react';
import ReactDOM from 'react-dom'

// class Demo extends Component {
//
//     state = {
//         count: 0,
//         name: 'tom',
//     }
//
//     myRef =  React.createRef()
//
//     show = () =>{
//         alert(this.myRef.current.value)
//     }
//
//     add = () => {
//         this.setState({count: this.state.count +1 })
//     }
//
//     change = () => {
//         this.setState({name: 'Jerry'})
//     }
//
//     unmount = () =>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     }
//
//     componentDidMount = () => {
//         this.timer = setInterval(()=>{
//             this.setState({count: this.state.count +1 })
//         },1000)
//     }
//
//     componentWillUnmount = () => {
//         clearInterval(this.timer)
//     }
//
//     render() {
//         let {count,name} = this.state;
//         return (
//             <div>
//                 <div>累计: {count}，名称：{name}</div>
//                 <input ref={this.myRef} type={'text'}/>
//                 <button onClick={this.add}>点击+1</button>&nbsp;
//                 <button onClick={this.change}>点击换名</button>&nbsp;
//                 <button onClick={this.unmount}>卸载组件</button>&nbsp;
//                 <button onClick={this.show}>点击显示数据</button>&nbsp;
//             </div>
//         )
//     }
// }
//
// export default Demo


export default function Demo(){

    let [count,setCount] = React.useState(0);
    let [name,setName] = React.useState('Jack');
    let myRef = React.useRef();

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

    function show(){
        alert(myRef.current.value)
    }

    return (
        <div>
            <div>累计: {count}，名称：{name}</div>
            <input ref={myRef} type={'text'}/>
            <button onClick={add}>点击+1</button>&nbsp;
            <button onClick={change}>点击换名</button>&nbsp;
            <button onClick={unmount}>卸载组件</button>&nbsp;
            <button onClick={show}>点击提升数据</button>&nbsp;
        </div>
    )
}