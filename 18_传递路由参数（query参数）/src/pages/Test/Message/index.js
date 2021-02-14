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
                                <Link to={`/test/message/detail?id=${m.id}&title=${m.title}`}>{m.title}</Link>
                            </li>
                        )
                    }
                </ul>
                <hr/>
                <Route path='/test/message/detail' component={Detail}/>
            </div>
        );
    }
}

export default Message;