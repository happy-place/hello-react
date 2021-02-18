import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = (data) => {
    return {type:INCREMENT,data}
}

export const createDecrementAction = (data) => {
    return {type:DECREMENT,data}
}

export const createIncrementActionAsync = () => {
    return (dispatch) => {
        let time = Math.floor(Math.random()*100);
        let data = Math.floor(Math.random()*10);
        setTimeout(()=>{
            dispatch(createIncrementAction(data));
        },time)
    }
}