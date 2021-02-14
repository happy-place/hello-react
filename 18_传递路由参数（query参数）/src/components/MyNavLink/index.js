import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        // to 为写入标签内部的props，children为写入标签体中间的文本，使用特定key收集
        // console.log(this.props) // {to:'/about',children:'About'}
        return (
            <NavLink className="list-group-item" {...this.props}/>
        );
    }
}

export default MyNavLink;