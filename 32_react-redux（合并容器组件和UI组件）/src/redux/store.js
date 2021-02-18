import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import actionReduce from './action_reducer'

export default createStore(actionReduce,applyMiddleware(thunk))