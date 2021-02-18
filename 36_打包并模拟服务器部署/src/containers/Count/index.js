import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../../redux/actions/count'

class Count extends Component {

    handleIncrement = () => {
        this.props.increment(this.input.value * 1)
    }

    handleDecrement = () => {
        this.props.decrement(this.input.value * 1)
    }

    handleIncrementIfOod = () => {
        let {count} = this.props;
        if(count%2!==0){
            this.props.increment(this.input.value * 1)
        }
    }

    handleIncrementAsync = () => {
        this.props.incrementAsync()
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
     {increment, decrement, incrementAsync,}
)(Count)
