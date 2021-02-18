import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    ,document.getElementById('root')
)
// 使用 react-redux 无需自己监测state的修改了，react-redux自己可以监测
// store.subscribe(render)


