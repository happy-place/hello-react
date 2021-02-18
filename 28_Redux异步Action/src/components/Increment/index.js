import React, {Component} from 'react';
import store from "../../redux/store";
import {createIncrementAction,createAsyncIncrementAction,createDecrementAction} from '../../redux/action_creators'

class Increment extends Component {

    handleIncrement = () => {
        store.dispatch(createIncrementAction(this.input.value*1))
    }

    handleDecrement = () => {
        store.dispatch(createDecrementAction(this.input.value*1))
    }

    handleIncrementIfOod = () => {
        let res = store.getState();
        if(res % 2 !== 0){
            store.dispatch(createIncrementAction(this.input.value*1))
        }
    }

    handleIncrementAsync = () => {
        store.dispatch(createAsyncIncrementAction(200))
    }

    render() {
        let result = store.getState();
        return (
            <div>
                <div>累计结果：{result}</div>
                <input ref={c=> this.input = c}defaultValue={1}/><br/>
                <button onClick={this.handleIncrement}>+</button>&nbsp;
                <button onClick={this.handleDecrement}>-</button>&nbsp;
                <button onClick={this.handleIncrementIfOod}>偶数加</button>&nbsp;
                <button onClick={this.handleIncrementAsync}>异步加</button><br/>
            </div>
        );
    }
}

export default Increment;