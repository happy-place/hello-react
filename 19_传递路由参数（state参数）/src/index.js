import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from "react-router-dom";
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
    , document.getElementById('root')
)

/**
 * BrowserRouter 与 HashRouter 对比
 * 1.BrowserRouter 基于H5 history api操作浏览器history，更加简便，但对IE9以下兼容性存在问题。HashRouter是浏览器自带API操作history，兼容性比较好；
 * 2.BrowserRouter刷新 location 里面 state参数不会丢失，HashRouter 刷新时，location中state参数会丢失；
 * 3.BrowserRouter没有锚点 http://xxx:3000/about，HashRouter有锚点http://xxx:3000/#/about，/#/之后内容作为前端资源，不会传入后端，资源与请求地址直接分界清晰，
 * 因此对于使用BrowserRouter存在异常的场景，可以使用HashRouter替代；
 */
