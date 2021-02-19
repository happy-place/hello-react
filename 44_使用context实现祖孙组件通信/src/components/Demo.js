import React, {Component} from 'react';

// 1.公共区域声明 XxxContext，结构赋值，提取Provider、Consumer
const MyContext = React.createContext();
let {Provider,Consumer} = MyContext;

export default class Demo extends Component {
    state = {
        msg: 'Hello React',
        age: 21
    }

    render() {
        let {msg,age} = this.state;
        return (
            // 2.祖组件，使用Provider带入信息
            <Provider value={{msg,age}}>
                <div className={'demo'}>
                    <h3>我是Demo</h3>
                    <h4>我接收的信息为：{msg},年龄：{age}</h4>
                    <Child/>
                </div>
            </Provider>
        );
    }
}

class Child extends Component {
    // 3.后代组件，要从context提取信息，需要实现给类绑定 contextType,然后才能解构赋值 获取信息
    static contextType = MyContext;
    render() {
        let {msg,age} = this.context;
        return (
            <div className={'child'}>
                <h3>我是Child</h3>
                <h4>我接收的信息为：{msg},年龄：{age}</h4>
                <Grand/>
                <Grand2/>
            </div>
        );
    }
}

class Grand extends Component {
    static contextType = MyContext;
    render() {
        let {msg,age} = this.context;
        return (
            <div className={'grand'}>
                <h3>我是Grand</h3>
                <h4>我接收的信息为：{msg},年龄：{age}</h4>
            </div>
        )
    }
}

// 4.后代如果是函数组件，可借助Consumer标签,然后写回调，获取信息
function Grand2(){
    return (
        <div className={'grand2'}>
            <h3>我是Grand2</h3>
            <Consumer>
                {
                    (value) => {
                        let {msg,age} = value;
                        return <h4>我接收的信息为：{value.msg},年龄：{value.age}</h4>
                    }
                }
            </Consumer>
        </div>
    )
}



