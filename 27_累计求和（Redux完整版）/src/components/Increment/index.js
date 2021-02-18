import React, {Component} from 'react';
import store from "../../redux/store";
import {createDecrementData,createIncrementData} from '../../redux/action_creator'

class Index extends Component {

    handleIncrement = () => {
        store.dispatch(createIncrementData(this.input.value * 1))
    }

    handleDecrement = () => {
        store.dispatch(createDecrementData(this.input.value * 1))
    }

    handleOodIncrement = () => {
        let result = store.getState();
        if (result%2!==0){
            store.dispatch(createIncrementData(this.input.value * 1))
        }
    }

    handleIncrementAsync = () => {
        setTimeout(()=>{
            store.dispatch(createIncrementData(this.input.value * 1))
        },200)
    }

    // 触发组件渲染 （方案1）
    // componentDidMount() {
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    render() {
        let result = store.getState();
        return (
            <div>
                <div>
                    累计求和：{result}
                </div>
                <input ref={c=> this.input=c} type={'text'} defaultValue={1}></input>&nbsp;
                <button onClick={this.handleIncrement}>+</button>&nbsp;
                <button onClick={this.handleDecrement}>-</button>&nbsp;
                <button onClick={this.handleOodIncrement}>Incr When Ood</button>&nbsp;
                <button onClick={this.handleIncrementAsync}>Incr Async</button>&nbsp;
            </div>
        );
    }
}

export default Index;