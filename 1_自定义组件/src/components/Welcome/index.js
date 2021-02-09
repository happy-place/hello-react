import React, {Component} from 'react';
import welcome from './index.module.css'

class Welcome extends Component {
    render() {
        return <h1 className={welcome.title}>Welcome</h1>;
    }
}

export default Welcome;