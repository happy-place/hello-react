import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom'
import Detail from "./Detail";


class Message extends Component {
    state = {
        messages: [
            {id:'1',title:'message001'},
            {id:'2',title:'message002'},
            {id:'3',title:'message003'},
        ]
    }
    render() {
        let {messages} = this.state;
        return (
            <div>
                <ul>
                    {
                        messages.map(m =>
                            <li key={m.id}>
                                {/*注册路由链接*/}
                                {/*方案1： path路径参数*/}
                                {/*<Link to={`/test/message/detail/${m.id}/${m.title}`}>{m.title}</Link>*/}
                                {/*方案2：query请求参数*/}
                                {/*<Link to={`/test/message/detail?id=${m.id}&title=${m.title}`}>{m.title}</Link>*/}
                                {/*方案3：state参数*/}
                                <Link to={{pathname:`/test/message/detail`,state:{id:`${m.id}`,title:`${m.title}`}}}>{m.title}</Link>
                            </li>
                        )
                    }
                </ul>
                <hr/>
                {/*注册路由*/}
                {/*方案1： path路径参数*/}
                {/*<Route path='/test/message/detail/:id/:title' component={Detail}/>*/}
                {/*方案2：query请求参数*/}
                {/*方案3：state参数*/}
                <Route path='/test/message/detail' component={Detail}/>
            </div>
        );
    }
}

export default Message;