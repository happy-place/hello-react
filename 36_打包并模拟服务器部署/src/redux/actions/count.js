import {INCREMENT,DECREMENT} from '../constant'

export const increment = (data) => {
    return {type:INCREMENT,data}
}

export const decrement = (data) => {
    return {type:DECREMENT,data}
}

export const incrementAsync = () => {
    return (dispatch) => {
        let time = Math.floor(Math.random()*100);
        let data = Math.floor(Math.random()*10);
        setTimeout(()=>{
            dispatch(increment(data));
        },time)
    }
}