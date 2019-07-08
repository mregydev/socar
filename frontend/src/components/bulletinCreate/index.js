import { connect } from 'react-redux';
import { createBulletIn } from './actions';
import bulletinComp from './component';


import {Reset_Result} from '../../actions/types'

const mapDispatchToProps = dispatch => {
    return {
        addNewBulletIn: bulletin => {
            dispatch(createBulletIn(bulletin));
        },
        resetResult:()=>{
            dispatch({
                type:Reset_Result
            })
        }
    };
};

const mapStatetoProps = state => {
    return { 
        showloading: state.bulletin.showloading,
        result:state.bulletin.resultMessage
     }
}


export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(bulletinComp);