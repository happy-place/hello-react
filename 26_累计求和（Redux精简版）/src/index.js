import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import store from "./redux/store";

// 触发组件渲染 （方案2）
function render(){
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
        , document.getElementById('root')
    )
}

store.subscribe(render)

render()
