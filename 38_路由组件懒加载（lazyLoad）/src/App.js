import React, {Component,lazy,Suspense} from 'react';
import {NavLink,Route} from 'react-router-dom'

// 按需引入组件，不在直接全部引入
// import Home from './pages/Home'
// import About from './pages/About'

// 路由切换到指定组件过程中的切换效果
import Loading from './pages/Loading'

const Home = lazy(()=> import('./pages/Home'))
const About = lazy(()=> import('./pages/About'))

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
                            <NavLink activeClassName='nav-highlight' className="list-group-item" to='/about'>About</NavLink>
                            <NavLink activeClassName='nav-highlight' className="list-group-item" to='/home'>Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading/>}>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;