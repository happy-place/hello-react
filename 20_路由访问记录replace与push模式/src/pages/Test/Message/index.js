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
                                {/*注册路由链接 默认 history 使用push压栈记录每步访问记录，通过声明replace 将压栈改成替换，点击回退时，就直接略过明细*/}
                                <Link replace={true} to={{pathname:`/test/message/detail`,state:{id:`${m.id}`,title:`${m.title}`}}}>{m.title}</Link>
                            </li>
                        )
                    }
                </ul>
                <hr/>
                {/*注册路由 添加 exact参数，进行精准匹配，默认为模糊匹配*/}
                <Route path='/test/message/detail' component={Detail}/>
            </div>
        );
    }
}

export default Message;