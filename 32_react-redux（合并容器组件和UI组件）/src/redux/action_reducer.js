import {INCREMENT,DECREMENT} from './constant';

export default function actionReduce(prevState=0,action){
    let {type,data} = action;
    switch (type){
        case INCREMENT:
            return prevState + data
        case DECREMENT:
            return prevState - data
        default:
            return prevState
    }
}