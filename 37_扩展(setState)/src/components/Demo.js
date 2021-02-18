import React, {Component} from 'react';

class Demo extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        let {count} = this.state;
        // setState 更新状态时，既可以传入新修改状态对象， 有可以传入函数，在函数中接收修改前的 state 和 props，然后返回新修改状态。
        // 此外，不管是对象式修改状态，还是函数式修改状态都可以继续传入一个回调函数，用于等待状态真实修改，并且调用 render 后，执行一些检查逻辑

        // 对象式修改状态
        // this.setState({count: count + 1},() => {
        //     console.log(this.state.count)
        // })

        // 函数式修改状态
        this.setState((state,props) => {
            return {count: state.count + 1}
        },() => {
            console.log(this.state.count)
        })

    }

    render() {
        let {count} = this.state;
        return (
            <div>
                <div>累计：{count}</div>
                <button onClick={this.handleClick}>点击+1</button>
            </div>
        );
    }
}

export default Demo;