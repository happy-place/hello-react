import React, {Component} from 'react';
import CountContainer from './containers/Count'
import store from './redux/store'


class App extends Component {
    render() {
        return (
            <div>
                <CountContainer store={store}/>
            </div>
        );
    }
}

export default App;