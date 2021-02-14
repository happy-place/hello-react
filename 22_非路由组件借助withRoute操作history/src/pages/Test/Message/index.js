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

    // history push 压栈
    handlePush = (path,id,title) => {
        return () => {
            /*方案1：params传参*/
            this.props.history.push(`${path}/${id}/${title}`);
            /*方案2：search传参*/
            // this.props.history.push(`${path}?id=${id}&title=${title}`);
            /*方案3：state传参*/
            // this.props.history.push(path,{id,title});
        }
    }

    // history replace 替换栈
    handleReplace = (path,id,title) => {
        return () => {
            /*方案1：params传参*/
            this.props.history.replace(`${path}/${id}/${title}`);
            /*方案2：search传参*/
            // this.props.history.replace(`${path}?id=${id}&title=${title}`);
            /*方案3：state传参*/
            // this.props.history.replace(path,{id,title});
        }
    }

    // history 后退
    handleGoBack = () => {
        this.props.history.goBack()
    }

    // history 前进
    handleGoForward = () => {
        this.props.history.goForward()
    }

    handleGo = () => {
        // +n 前进n步
        // -n 后退n步
        let step = this.input.value;
        this.props.history.go(step)
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
                                {/*方案1：params传参*/}
                                <Link to={`/test/message/detail/${m.id}/${m.title}`}>{m.title}</Link>&nbsp;
                                {/*方案2：search传参*/}
                                {/*<Link to={`/test/message/detail?id=${m.id}&title=${m.title}`}>{m.title}</Link>&nbsp;*/}
                                {/*方案3：state传参*/}
                                {/*<Link to={{pathname:`/test/message/detail`,state:{id:`${m.id}`,title:`${m.title}`}}}>{m.title}</Link>&nbsp;*/}
                                <button onClick={this.handlePush(`/test/message/detail`,m.id,m.title)}>push查看</button>&nbsp;
                                <button onClick={this.handleReplace(`/test/message/detail`,m.id,m.title)}>replace查看</button>&nbsp;
                            </li>
                        )
                    }
                </ul>
                <hr/>
                <button onClick={this.handleGoBack}>后退</button>&nbsp;
                <button onClick={this.handleGoForward}>前进</button>&nbsp;
                <button onClick={this.handleGo}>Go</button>&nbsp;
                <input ref={(c)=> this.input = c} defaultValue={1}/>
                <hr/>
                {/*注册路由 添加 exact参数，进行精准匹配，默认为模糊匹配*/}
                {/*方案1：params传参*/}
                <Route path='/test/message/detail/:id/:title' component={Detail}/>
                {/*方案2：search传参*/}
                {/*<Route path='/test/message/detail' component={Detail}/>*/}
                {/*方案3：state传参*/}
                {/*<Route path='/test/message/detail' component={Detail}/>*/}
            </div>
        );
    }
}

export default Message;