import React, {Component} from 'react';

export default class Demo extends Component {

    state = {
        hasError: '', // 标记渲染过程是否存在异常
    }

    // 捕获渲染过程的异常，并返回兼容性 state,控制前端展示 （注：只能捕获声明周期函数中异常，按钮回调、定时器中异常不能捕获）
    static getDerivedStateFromError(error){ // 稳住前端
        return {hasError: error}
    }

    // 捕获渲染过程异常，用于将异常信息上报服务器 （注：只能捕获声明周期函数中异常，按钮回调、定时器中异常不能捕获）
    componentDidCatch(error,info){ // 上报后端
        console.log('模拟将异常上报',error)
        console.log('info: ',info)
    }

    render() {
        return (
            <div className={'demo'}>
                <h3>我是Demo</h3>
                {this.state.hasError ? <h4>网络不稳定，请稍后重试</h4> : <A/>}
            </div>
        );
    }
}

class A extends Component {

    // 点击事件触发的异常，不会触发异常捕获
    test = () => {
        throw Error('test')
    }

    change = () => {
        let students = 'abc'
        this.setState({students});
    }

    state = {
        students:[
            {id:'001',name:'tim',age:22},
            {id:'002',name:'tom',age:21},
            {id:'003',name:'jack',age:23},
        ]
    }

    render() {
        let {students} = this.state;

        return (
            <div className={'child'}>
                <h3>我是A</h3>
                <button onClick={this.test}>触发回调异常</button>
                <button onClick={this.change}>触发渲染异常</button>
                {students.map(stu => <h4 key={stu.id}> Name: {stu.name}, Age: {stu.age}</h4>)}
            </div>
        );
    }
}
