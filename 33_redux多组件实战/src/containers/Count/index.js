import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementActionAsync} from '../../redux/actions/count'

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
        let {persons,count} = this.props;
        return (
            <div>
                <div>person count: {persons.length},add count:{count}</div>
                <input ref={c => this.input = c} type='text' defaultValue={1}/>&nbsp;
                <button onClick={this.handleIncrement}>+</button>&nbsp;
                <button onClick={this.handleDecrement}>-</button>&nbsp;
                <button onClick={this.handleIncrementIfOod}>奇数加</button>&nbsp;
                <button onClick={this.handleIncrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default connect(
    state => ({count:state.count,persons:state.persons}),
     {// mapDispatchToProps 既可以是一个函数，又可以是一个js对象，对象value 为可以action实例的函数，或接受dispatch，的异步函数，
         // 由react-redux调用dispatch进行分发，或调用异步函数，然后分发action
        handleIncrement: createIncrementAction,
        handleDecrement: createDecrementAction,
        handleIncrementAsync: createIncrementActionAsync,
    }
)(Count)
