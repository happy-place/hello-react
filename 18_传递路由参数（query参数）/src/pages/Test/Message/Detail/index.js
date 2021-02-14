import React, {Component} from 'react';
import qs from 'querystring'

class Detail extends Component {
    state = {
        details: [
            {id:'1',content:'hello react'},
            {id:'2',content:'hello vue'},
            {id:'3',content:'hello anguarjs'},
        ]
    }
    render() {
        let {search} = this.props.location;
        let {id,title} = qs.parse(search.slice(1)); // 从下标1位置开始截取子串，删除?
        let {details} = this.state;
        let foundDetail = details.find(d => {
            console.log(typeof d.id,typeof id);
            return d.id === id
        });
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