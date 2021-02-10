import React, {Component} from 'react';
import axios from 'axios'
import './index.css'

class Search extends Component {

    handleGetUsers = () => {
        const saveAppState = this.props.saveAppState;
        const v = this.input.value;
        // 开始请求前设置isFirst 为false,isLoading为true,撤回欢迎词，改为loading效果
        saveAppState({isFirst:false,isLoading:true})
        axios.get(`http://localhost:3000/api1/user?v=${v}`).then(
            result => {
                saveAppState({isLoading:false,users:result.data})
            },
            err => {
                console.error(err)
                saveAppState({isLoading:false,err:err.message})
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