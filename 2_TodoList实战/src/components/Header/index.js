import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    // props 属性类型、必传性约束
    static propTypes = {
        handleAdd: PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        // 解构赋值，获取输入框对象，以及最后一次输入按键号码
        let {target,keyCode} = event;
        if(keyCode!==13) return; // 如果为回车就收集处理
        let name = target.value.trim();
        if(name === ''){ // 非空警告
            alert('输入内容不能为空')
            return;
        }
        // 调用父标签传入回调函数，将新加入对象传出
        // 此处通过nanoid库获取唯一id，相比于uuid，nanoid更轻,yarn add nanoid
        this.props.handleAdd({id:nanoid(),name:name,done:false});
        // 添加成功后，老的输入框要清空
        target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}