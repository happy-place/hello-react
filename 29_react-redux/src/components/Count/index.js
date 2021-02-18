import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {

    handleIncrement = () => {
        this.props.createIncrementAction(this.input.value*1)
    }

    handleDecrement = () => {
        this.props.createDecrementAction(this.input.value*1)
    }

    handleIncrementIfOod = () => {
        let {count} = this.props;
        if(count % 2 !== 0){
            this.props.createIncrementAction(this.input.value*1)
        }
    }

    handleIncrementAsync = () => {
        this.props.createAsyncIncrementAction(200)
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

export default Count;