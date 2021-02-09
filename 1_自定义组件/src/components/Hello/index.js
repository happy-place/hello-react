import React, {Component} from 'react';
import hello from './index.module.css'

class Hello extends Component {
    render() {
        return <h1 className={hello.title}>Hello React</h1>;
    }
}

export default Hello;