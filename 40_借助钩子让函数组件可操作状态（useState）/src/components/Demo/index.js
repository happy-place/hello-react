import React from 'react';

export default function Count(){
    let {count,setCount} = React.useState(0);
    let {name,setName} = React.useState('Jack');

    function add(){
        setCount(count+1)
    }

    function change(){
        setName('Tom')
    }

    return (
        <div>
            <div>累计: {count}，名称：{name}</div>
            <button onClick={add}>点击+1</button>&nbsp;
            <button onClick={change}>点击换名</button>&nbsp;
        </div>
    )
}