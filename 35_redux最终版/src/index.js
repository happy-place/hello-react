import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    ,document.getElementById('root')
)
// 使用 react-redux 无需自己监测state的修改了，react-redux自己可以监测
// store.subscribe(render)


