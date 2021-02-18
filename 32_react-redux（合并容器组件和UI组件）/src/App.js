import React, {Component} from 'react';
import CountContainer from './containers/Count'


class App extends Component {
    render() {
        return (
            <div>
                {/* 使用react-redux不用自己穿store在index.js中向Provuder传入store，包裹在Provider中的全部容器组件就能自动获取store
                <CountContainer store={store}/>*/}
                <CountContainer/>
            </div>
        );
    }
}

export default App;