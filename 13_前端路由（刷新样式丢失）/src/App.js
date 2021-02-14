import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import MyNavLink from "./components/MyNavLink";
import About from './pages/About'
import Test from './pages/Test'

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to='/aa/about'>About</MyNavLink>
                            <MyNavLink to='/aa/test'>Test</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path='/aa/about' component={About}/>
                                <Route path='/aa/test' component={Test}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;