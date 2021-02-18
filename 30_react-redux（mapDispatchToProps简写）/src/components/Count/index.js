import React, {Component} from 'react';

class Count extends Component {

    handleIncrement = () => {
        this.props.handleIncrement(this.input.value * 1)
    }

    handleDecrement = () => {
        this.props.handleDecrement(this.input.value * 1)
    }

    handleIncrementIfOod = () => {
        let {count} = this.props;
        if(count%2!==0){
            this.props.handleIncrement(this.input.value * 1)
        }
    }

    handleIncrementAsync = () => {
        this.props.handleIncrementAsync()
    }

    render() {
        let {count} = this.props;
        console.log(count)
        return (
            <div>
                <div>累计结果：{count}</div>
                <input ref={c => this.input = c} type='text' defaultValue={1}/>&nbsp;
                <button onClick={this.handleIncrement}>+</button>&nbsp;
                <button onClick={this.handleDecrement}>-</button>&nbsp;
                <button onClick={this.handleIncrementIfOod}>奇数加</button>&nbsp;
                <button onClick={this.handleIncrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default Count;
