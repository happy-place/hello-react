import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Count from './containers/Count'
import Person from './containers/Person'
import store from "./redux/store";


class App extends Component {
    // store 交给 Provider 管理，所有容器组件能够自动获取 store
    render() {
        return (
            <Provider store={store}>
                <Count/>
                <hr/>
                <Person/>
            </Provider>
        );
    }
}

export default App;