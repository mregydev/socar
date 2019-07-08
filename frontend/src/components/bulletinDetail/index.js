import { connect } from 'react-redux';
import { fetchBulletin,fetchComments,createComment } from './actions';
import listAndDetails from './component';

const mapDispatchToProps = dispatch => {
    return {
        fetchBullten: (id) => {
            dispatch(fetchBulletin(id));
        },
        fetchComments:(bulletinId)=>{
            dispatch(fetchComments(bulletinId))
        },
        addComment:(content,bulletinId)=>{
        dispatch(createComment({content,bulletinId}))
        }
    };
};

const mapStatetoProps = state => {
    return { 
        showloading: state.bulletin.showloading,
        bulletin:state.bulletin.item,
        resultMessage:state.bulletin.resultMessage,
        comments:state.comments.comments
     }
}


export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(listAndDetails);