import React, {Component} from 'react';

export default class Demo extends Component {

    /**
     * render props 适用场景:
     * 组件关系待定，需要预留位置作为插槽，最终编排页面时，靠传入 props 带入需要渲染标签以及属性
     *
     * 注：如果只带入标签，而无需传入数据，使用 children props <A><C/></A> 即可；
     *  需要同时传入数据时，要将封装到回调函数中，并通过 props 参数，传入，回调函数参数位置，用于传递数据
     *  <A render={(props) => <B {...props}/>}></A>
     *
     * */
    render() {
        return (
            <div className={'demo'}>
                <h3>我是Demo</h3>
                <A render={props => <B {...props}/>}>
                    <C/>
                </A>
            </div>
        );
    }
}

class A extends Component {
    state = {
        msg: 'Hello React',
        age: 21
    }
    render() {
        return (
            <div className={'child'}>
                <h3>我是A</h3>
                {this.props.children}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        let {msg,age} = this.props;
        return (
            <div className={'grand'}>
                <h3>我是B, {msg} {age}</h3>
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div className={'grand2'}>
                <h3>我是C</h3>
            </div>
        )
    }
}

