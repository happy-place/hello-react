import React, {Component} from 'react';
import './index.css'
class List extends Component {
    render() {
        let {users,isFirst,isLoading,err} = this.props;
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <span style={{color:'green'}}>输入关键字，获取相关GitHub用户信息</span> :
                        isLoading ? 'loading ....' :
                        err !== null ? <span style={{color:'red'}}>err</span> :
                        users.map(u => {
                            return <div className="card" key={u.id}>
                                <a href={u.html_url} target="_blank" rel="noreferrer">
                                    <img alt="avator_img" src={u.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{u.login}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;