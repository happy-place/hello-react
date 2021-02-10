import React, {Component} from 'react';
import axios from 'axios'
import './App.css'

/**
 * 当前服务端口3000,模拟服务端口5000;
 * axios基于ajax封装，ajax引擎能成功发出对5000请求，但拒绝接受响应，通过在 package.json 文件配置proxy 代理，在本地3000端口又挂载了一台非ajax引擎的代理服务器，
 * ajax 对 任何资源请求，先在本地查找，本地有就返回本地资源，本地没有就委托代理服务器，查找5000端口服务器资源。
 *
 *
 * */
export default class App extends Component {
    state = {
        students:[]
    }

    getStudents = () => {
        let url = 'http://localhost:3000/students';
        axios.get(url).then(
            response => {
                this.setState({
                    students: response.data
                })
            },
            error=> {
                console.error(error)
            }
        )
    }

    getIndex = () =>{
        let url = 'http://localhost:3000/index.html';
        axios.get(url).then(
            response => {
                console.log(response)
            },
            error => {
                console.error(error)
            }
        )
    }

    render() {
        const {students} = this.state;
        return (
            <div>
                <button onClick={this.getStudents}>点击获取学生数据</button>
                <button onClick={this.getIndex}>点击获取3000index页</button>
                <div>
                    {students.map(stu=> <h2 key={stu.id}>ID: {stu.id}, Name: {stu.name}, Age {stu.age}</h2>)}
                </div>
            </div>
        );
    }
}
