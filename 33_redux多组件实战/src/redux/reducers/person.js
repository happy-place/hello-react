import {ADD_PERSON} from '../constant'

const initState = [
    {id:'001',name:'tim',age:23}
]

export default function personReduce(prevState = initState,action){
    let {type,data} = action;
    switch (type){
        case ADD_PERSON:
            return [data,...prevState]
        default:
            return prevState;
    }
}