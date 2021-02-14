import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import MyNavLink from "./components/MyNavLink";
import About from './pages/About'
import Test from './pages/Test'
import Exact from './pages/Exact'

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
                            <MyNavLink to='/about/aa/bb'>About</MyNavLink>
                            <MyNavLink to='/test'>Test</MyNavLink>
                            <MyNavLink to='/exact/aa/bb'>Exact</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path='/about' component={About}/>
                                <Route path='/test/aa/bb' component={Test}/>
                                <Route exact={true} path='/exact' component={Exact}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;