import React, {Component} from 'react';

class Detail extends Component {
    state = {
        details: [
            {id:'1',content:'hello react'},
            {id:'2',content:'hello vue'},
            {id:'3',content:'hello anguarjs'},
        ]
    }
    render() {
        /*获取传递的路径参数*/
        let {id,title} = this.props.match.params;
        let {details} = this.state;
        let foundDetail = details.find(d => d.id === id);
        return (
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {foundDetail.content}</li>
            </ul>
        );
    }
}

export default Detail;