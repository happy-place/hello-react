import {INCREMENT,DECREMENT} from './constant';

// lambda 直接单行 js对象，需要使用圆括号，否则会把花括号当初函数体的括号
export const createIncrementData = data => ({type:INCREMENT,data})
export const createDecrementData = data => ({type:DECREMENT,data})