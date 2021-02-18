import React from 'react';
import ReactDOM from 'react-dom';
import store from '../src/redux/store';

import App from './App'

function render(){
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
        ,document.getElementById('root')
    )
}

// store变更，会主动通知订阅方，重新渲染
store.subscribe(render)
render()
