import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    // props 属性类型、必传性约束
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        handleCheck: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
    }

    state = {mouse: false}

    // 处理鼠标移入、移出回调，将鼠标状态保持在state中
    handleMouse = (flag) => {
        return ()=>{
           this.setState({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return (event) =>{
            let handleCheck = this.props.handleCheck;
            handleCheck(id,event.target.checked);
        }
    }

    handleDelete = (id,name) =>{
        return () => {
            if(window.confirm(`确认删除 '${name}' 吗?`)){
                this.props.handleDelete(id);
            }
        }
    }

    render() {
        let {id,name,done} = this.props;
        let {mouse} = this.state;
        /**
         * checkbox: 使用的是defaultChecked，只在首次渲染是指定状态，之后是可以修改的，如果使用checked，则一旦渲染是readonly状态，无法修改。
         * 鼠标移入：条目置灰，显式删除按钮；
         * 鼠标移出：条目变白，删除按钮隐藏。
         */
        return (
            <li style={{backgroundColor: mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse?'block':'none'}} onClick={this.handleDelete(id,name)}>删除</button>
            </li>
        );
    }
}
