import { combineReducers } from 'redux';

import bulletInReducer from './bulletInReducer';

import commentReducer from './commentsReducer'


export default combineReducers({
   bulletin: bulletInReducer,
   comments:commentReducer
});