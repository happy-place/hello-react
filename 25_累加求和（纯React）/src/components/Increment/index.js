import React, {Component} from 'react';

class Index extends Component {

    state = {
        result: 0
    }

    handleAdd = () => {
        let {result} = this.state;
        let delta = this.input.value * 1;
        result += delta;
        this.setState({result})
    }

    handleMinus = () => {
        let {result} = this.state;
        let delta = this.input.value * 1;
        result -= delta;
        this.setState({result})
    }

    handleOodAdd = () => {
        let {result} = this.state;
        let delta = this.input.value * 1;
        result += result%2==0 ? 0 : delta;
        this.setState({result})
    }

    handleAddAsync = () => {
        setTimeout(()=>{
            let {result} = this.state;
            let delta = this.input.value * 1;
            result += delta;
            this.setState({result})
        },200)
    }

    render() {
        let {result} = this.state;
        return (
            <div>
                <div>
                    累计求和：{result}
                </div>
                <input ref={c=> this.input=c} type={'text'} defaultValue={1}></input>&nbsp;
                <button onClick={this.handleAdd}>+</button>&nbsp;
                <button onClick={this.handleMinus}>-</button>&nbsp;
                <button onClick={this.handleOodAdd}>Incr When Ood</button>&nbsp;
                <button onClick={this.handleAddAsync}>Incr Async</button>&nbsp;
            </div>
        );
    }
}

export default Index;