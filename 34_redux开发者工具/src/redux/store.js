import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import actionReduce from './reducers/count'
import personReduce from "./reducers/person"


const allReducers = combineReducers({
    count: actionReduce,
    persons: personReduce,
})

export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))