import {INCREMENT,DECREMENT} from './constant'
const initState = 0;
export default function countStore(prevState = initState,action){
    let type = action['type'];
    if(!type.startsWith('@@redux/INIT')){
        let data = action['data'];
        switch (type){
            case INCREMENT:
                return prevState + data;
            case DECREMENT:
                return prevState - data;
            default:
                return prevState;
        }
    }
}