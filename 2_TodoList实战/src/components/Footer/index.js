import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {

    // 处理全选、全不选回调
    handleAllDone = (event) => {
        this.props.handleAllDone(event.target.checked);
    }

    // 处理清空已完成项回调
    handleClearAllDone = () =>{
        // react 中无法识别 confirm 确认框，需要使用window.confirm
        if(window.confirm('确认清空全部已完成项吗？')){
            this.props.handleClearAllDone()
        }
    }

    render() {
        const {todos} = this.props;
        let doneCount = todos.reduce((prev,next)=>prev+ (next.done?1:0),0)
        let totalCount = todos.length;
        // react 中checkbox defaultChecked只能在初始化时设置一次，之后失效，如果只设置checked属性，会写死，导致不能修改，因此必须设置onChange事件，才能修改选中状态
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount===totalCount && totalCount!==0} onChange={this.handleAllDone}/>
                </label>
                <span>
                  <span>已完成{doneCount}</span> / 全部{totalCount}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}
