import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

class Search extends Component {

    handleGetUsers = async () => {
        const v = this.input.value;
        if (v.trim() === '') {
            alert('输入内容无效')
            return;
        }
        try {
            // 开始请求前设置isFirst 为false,isLoading为true,撤回欢迎词，改为loading效果
            PubSub.publish('github', {isFirst: false, isLoading: true})
            let resp = await fetch(`http://localhost:3000/api1/user?v=${v}&d=false`);
            let result = await resp.json();
            // 请求成功加载数据
            PubSub.publish('github', {isLoading: false, users: result});
        } catch (err) {
            // 请求失败加载异常
            console.error(err)
            PubSub.publish('github',{isLoading:false,err:err.message})
        }
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.input = c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.handleGetUsers}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;