import React, {Component,PureComponent} from 'react';

/**
 * 方案2：
 使用PureComponent代替Component，前者自身已经重写了shouldComponentWillUpdate，实现state和props浅对比，如果产生新对象，就触发render。
 因此要求 setState中注入的必须是新对象，否则即便对象属性发生修改，依旧不能有效触发render
 * */
export default class Demo extends PureComponent {
    state = {
        msg: 'Hello React',
        age: 21
    }

    // state 对象更新了，可触发render
    handleAdd = () =>{
        this.setState({age:this.state.age + 1})
    }

    // state 对象为更新，不会触发render
    handleAdd3 = () => {
        let state = this.state;
        state.msg='hi';
        console.log(state.msg=== this.state.msg)
        this.setState(state)
    }

    // state 对象未更新，不会触发render
    handleAdd2 = () =>{
        this.setState({})
    }

    /**
     * 方案1：
     父子组件都重写shouldComponentWillUpdate生命周期函数，在其中对目标字段进行比较，只有确实改变，才返回true，触发render；
     * */
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     let nextAge = nextState.age;
    //     let thisAge = this.state.age;
    //     return ! (nextAge === thisAge)
    // }

    render() {
        console.log('demo render')
        let {msg,age} = this.state;
        return (
            <div className={'demo'}>
                <h3>我是Demo</h3>
                <h4>我接收的信息为：{msg},年龄：{age}</h4>
                <button onClick={this.handleAdd2}>晃一下，不更新任何内容</button>
                <button onClick={this.handleAdd3}>只更新属性</button>
                <button onClick={this.handleAdd}>增加age</button>
                <Child msg={msg} age={age}/>
            </div>
        );
    }
}

class Child extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     let nextAge = nextProps.age;
    //     let thisAge = this.props.age;
    //     return ! nextAge === thisAge
    // }

    render() {
        console.log('child render')
        let {msg,age} = this.props;
        return (
            <div className={'child'}>
                <h3>我是Child</h3>
                <h4>我接收的信息为：{msg},年龄：{age}</h4>
            </div>
        );
    }
}


