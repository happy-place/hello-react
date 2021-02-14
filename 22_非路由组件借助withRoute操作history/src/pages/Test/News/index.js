import React, {Component} from 'react';

class News extends Component {
    // news页面展示2秒后，自动跳转到message页
    componentDidMount() {
        // 延迟调用一次使用 setTimeout
        setTimeout(()=>{
            this.props.history.push('/test/message')
        },2000);
        // 周期性调用使用 setInterval，需要再关闭时撤销定时器
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default News;