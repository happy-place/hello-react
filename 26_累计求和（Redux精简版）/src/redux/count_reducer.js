const initState = 0;
export default function countStore(prevState = initState,action){
    let type = action['type'];
    if(!type.startsWith('@@redux/INIT')){
        let data = action['data'];
        switch (type){
            case 'increment':
                return prevState + data;
            case 'decrement':
                return prevState - data;
            default:
                return prevState;
        }
    }
}