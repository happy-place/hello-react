import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {

    handleGoBack = () => {
        console.log(this.props);
        this.props.history.goBack()
    }

    handleGoForward = () => {
        console.log(this.props);
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>&nbsp;
                <button onClick={this.handleGoBack}>后退</button>&nbsp;
                <button onClick={this.handleGoForward}>前进</button>&nbsp;
            </div>
        );
    }
}

export default withRouter(Header);