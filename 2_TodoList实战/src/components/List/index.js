import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // props 属性类型、必传性约束
    static propTypes = {
        todos: PropTypes.array.isRequired,
        handleCheck: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
    }

    render() {
        let {todos,handleCheck,handleDelete} = this.props;
        return (
            <ul className="todo-main">
                {todos.map(todo => <Item key={todo.id} {...todo} handleCheck={handleCheck} handleDelete={handleDelete}/>)}
            </ul>
        );
    }
}
