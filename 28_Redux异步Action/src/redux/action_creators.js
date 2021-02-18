import {INCREMENT,DECREMENT} from './constant';

// 获取一般action对象，为同步调用过程
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 获取异异步函数，在函数中下发action，模拟增加值data不确定的场景。最终有redux调用此异步函数，完成action下发过程
export const createAsyncIncrementAction = (time) => {
    return (dispatch) => {
        setTimeout(()=>{
            let data = Math.floor(Math.random()*10)
            dispatch(createIncrementAction(data))
        },time)
    }
}
