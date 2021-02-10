import React, {Component} from 'react';
import Search from './components/Search'
import List from './components/List'
import './App.css'

class App extends Component {
    state = {
        users: [], // 用户信息
        isFirst: true, // 是否是首次打开
        isLoading: true,
        err: null,
    }

    saveUsers = (users) => {
        this.setState({
            users
        })
    }

    saveAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search saveAppState={this.saveAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        );
    }
}

export default App;