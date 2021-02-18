import {ADD_PERSON} from '../constant'

const initState = [
    {id:'001',name:'tim',age:23}
]

// redux 要求 reduce function 必须是纯函数，即 任意时刻相同输入都会得到相同输出；
// 1.不得修改参数，如：参数重新赋值、集合增删修改元素；
// 2.不得涉及网络请求、输入输出交互，等一系列不靠谱操作；
// 3.不得调用 now() 获取时间戳，Math.random() 获取随机数的操作，导致输出不确定
export default function persons(prevState = initState,action){
    let {type,data} = action;
    switch (type){
        case ADD_PERSON:
            // prevState.unshift(data);
            // return [data,...prevState]
            // return prevState // 此处如果直接在原数组上修改，，然后继续返回，就不是纯函数了，redux 观察到输出对象没有变化，就不会触发状态更新
            return [data,...prevState]
        default:
            return prevState;
    }
}