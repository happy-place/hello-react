import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MyNavLink from '../../../components/MyNavLink'

class News extends Component {
    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default News;