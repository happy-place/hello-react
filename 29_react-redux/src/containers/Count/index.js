import CountUI from '../../components/Count';
import {connect} from 'react-redux';
import {INCREMENT,DECREMENT} from '../../redux/constant'
import {
    createAsyncIncrementAction,
    createDecrementAction,
    createIncrementAction
} from '../../redux/action_creators'

const mapStateToProps = (state)=>{
    return {count:state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        createIncrementAction: (data) => {
            dispatch(createIncrementAction(data))
        },
        createDecrementAction: (data) => {
            dispatch(createDecrementAction(data))
        },
        createAsyncIncrementAction: (time) => {
            createAsyncIncrementAction(dispatch,time);
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)