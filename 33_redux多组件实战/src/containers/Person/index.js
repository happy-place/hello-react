import React, {Component} from 'react';
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPersonAction} from '../../redux/actions/person'

class Person extends Component {

    handleAdd = () => {
        let name = this.nameNode.value;
        let age = this.ageNode.value;
        let id = nanoid();
        this.props.handleAdd({id,name,age})
    }

    render() {
        let {persons} = this.props;
        return (
            <div>
                <div>person num: {persons.length}</div>
                姓名：<input className={'input'} ref={c=> this.nameNode = c} type={'text'} placeholder={'张三'}/>&nbsp;
                年龄：<input className={'input'} ref={c=> this.ageNode = c} type={'text'} placeholder={21}/>&nbsp;
                <button onClick={this.handleAdd}>新增</button>
                <br/>
                <ul>
                    {
                        persons.map(p => <li key={p.id}>Name: {p.name} Age: {p.age}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.persons}),
    {
        handleAdd: addPersonAction
    }
)(Person);