import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

class Test extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    {/*注册路由链接*/}
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/test/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/test/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册路由*/}
                   <Switch>
                       <Route path='/test/news' component={News}/>
                       <Route path='/test/message' component={Message}/>
                       <Redirect to='/test/news'/>
                   </Switch>
                </div>
            </div>
        );
    }
}

export default Test;