import {ADD_PERSON} from '../constant'

export const addPersonAction = (obj) => {
    return {type:ADD_PERSON, data:obj}
}