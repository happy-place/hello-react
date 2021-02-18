import React from 'react';
import {connect} from 'react-redux'
import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementActionAsync} from '../../redux/action_creator'

// mapDispatchToProps 一般写法：自己调用dispatch
// // 同步store的状态给UI组件
// const mapStateToProps = (state) => {
//     return {count:state}
// }
//
// // 同步操作store状态的函数给UI组件
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleIncrement: (data) => dispatch(createIncrementAction(data)),
//         handleDecrement: (data) => dispatch(createDecrementAction(data)),
//         handleIncrementAsync: () => dispatch(createIncrementActionAsync()),
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

// mapDispatchToProps 简略写法：返回action或异步函数，由react-redux调用dispatch和异步函数
export default connect(
    state => ({count:state}),
     {// mapDispatchToProps 既可以是一个函数，又可以是一个js对象，对象value 为可以action实例的函数，或接受dispatch，的异步函数，
         // 由react-redux调用dispatch进行分发，或调用异步函数，然后分发action
        handleIncrement: createIncrementAction,
        handleDecrement: createDecrementAction,
        handleIncrementAsync: createIncrementActionAsync,
    }
)(CountUI)
