import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import MyNavLink from "./components/MyNavLink";
import About from './pages/About'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'

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
                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink to='/home'>Home(Switch)</MyNavLink>
                            <MyNavLink to='/test'>Test</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path='/about' component={About}/>
                                <Switch>
                                    <Route path='/home' component={Home1}/>
                                    <Route path='/home' component={Home2}/>
                                </Switch>
                                <Route path='/test' component={Test1}/>
                                <Route path='/test' component={Test2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;