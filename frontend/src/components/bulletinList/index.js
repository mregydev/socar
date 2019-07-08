import { connect } from 'react-redux';
import { fetchBulletens } from './actions';
import listAndDetails from './component';

const mapDispatchToProps = dispatch => {
    return {
        fetchBullten: () => {
            dispatch(fetchBulletens());
        }
    };
};

const mapStatetoProps = state => {
    return { 
        showloading: state.bulletin.showloading,
        bulletins:state.bulletin.bulletins,
        items:state.bulletin.items
     }
}


export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(listAndDetails);