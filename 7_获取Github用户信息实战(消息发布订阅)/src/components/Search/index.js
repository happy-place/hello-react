import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

class Search extends Component {

    handleGetUsers = () => {
        const v = this.input.value;
        if(v.trim() === ''){
            alert('输入内容无效')
            return;
        }
        // 开始请求前设置isFirst 为false,isLoading为true,撤回欢迎词，改为loading效果
        PubSub.publish('github',{isFirst:false,isLoading:true})
        axios.get(`http://localhost:3000/api1/user3?v=${v}&d=true`).then(
            result => {
                PubSub.publish('github',{isLoading:false,users:result.data})
            },
            err => {
                console.error(err)
                PubSub.publish('github',{isLoading:false,err:err.message})
            }
        )
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c=> this.input=c} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.handleGetUsers}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;