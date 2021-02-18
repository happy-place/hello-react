import {ADD_PERSON} from '../constant'

export const addPerson = (obj) => {
    return {type:ADD_PERSON, data:obj}
}