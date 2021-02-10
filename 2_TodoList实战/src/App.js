import React, {Component} from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    // 状态在哪里，操作状态的方法就放在哪里
    state = {
        todos:[
            {id:'1',name:'吃饭',done:true},
            {id:'2',name:'睡觉',done:false},
            {id:'3',name:'写代码',done:true},
        ]
    }
    // 交给Header子标签的回调函数，用于将输入框输入内容添加到todos中，交给 Header使用
    handleAdd = (item) => {
        let {todos} = this.state;
        this.setState({
            todos: [item,...todos] // 逆序添加
        })
    }
    // 删除某项回调，App -> List -> Item 一直向下传递
    handleDelete = (id) => {
        // 注意解构负责 花括号
        const {todos} = this.state;
        const newTodos = todos.filter(todo => todo.id !== id)
        this.setState({
            todos: newTodos
        })
    }

    // 处理单选框勾选状态回调，App -> List -> Item 一直向下传递
    handleCheck = (id,done) => {
        let {todos} = this.state;
        // 合并新状态
        let newTodos = todos.map(todo=>{
            if(todo.id === id){
                return {...todo,done};
            }else{
                return todo;
            }
        });
        this.setState({
            todos:newTodos
        });
    }

    // 控制 全选、全不选 回调，交给Footer使用
    handleAllDone = (done) => {
        console.log(done)
        const {todos} = this.state;
        const newTodos = todos.map(todo => {
            return {...todo,done}
        })
        this.setState({
            todos: newTodos
        })
    }

    // 清除全部已完成项回调，交给Footer使用
    handleClearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter(todo=> !todo.done)
        this.setState({
            todos: newTodos
        })
    }

    render() {
        let {todos} = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header handleAdd={this.handleAdd}/>
                        <List todos={todos} handleCheck={this.handleCheck} handleDelete={this.handleDelete}/>
                        <Footer todos={todos} handleAllDone={this.handleAllDone} handleClearAllDone={this.handleClearAllDone}/>
                    </div>
                </div>
            </div>
        );
    }
}
