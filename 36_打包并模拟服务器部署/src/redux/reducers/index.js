// 汇总所有 reducers
import {combineReducers} from 'redux'
import persons from './person'
import count from './count'

const allReducers = combineReducers({count, persons,})

export default allReducers;