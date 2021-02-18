import React, {Component} from 'react';

class Demo2 extends Component {
    state = {
        count: 0,
        name: 'tom',
    }
    add = () => {
        this.setState({count: this.state.count +1 })
    }

    change = () => {
        this.setState({name: 'Jerry'})
    }

    render() {
        let {count,name} = this.state;
        return (
            <div>
                <div>累计: {count}，名称：{name}</div>
                <button onClick={this.add}>点击+1</button>&nbsp;
                <button onClick={this.change}>点击换名</button>&nbsp;
            </div>
        )
    }
}

export default function Demo(){

    /**
     * 借助 State Hook，让函数组件具备操作状态能力；
     *
     * 1.初始化状态和操作状态的函数，注意这里是数组赋值，React.useState()中需要传入状态初始化值
     *  let [stateVar,setStateFunc] = React.useState(initState)
     *
     * 2.在嵌套函数中定义修改状态的回调函数
     *
     * */

    let [count,setCount] = React.useState(0);
    let [name,setName] = React.useState('Jack');

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
        </div>
    )
}