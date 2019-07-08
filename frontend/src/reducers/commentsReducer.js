import {Comment_Added,Comments_Fetched} from '../actions/types';

export default function CommentsReducer(state = {showloading:false,resultMessage:"",items:[],item:{}}, action) {
       
  switch (action.type) {
    
    case Comment_Added:{
      return {...state,showloading:false}
    }

    case Comments_Fetched:{ 
      
      return {...state,showloading:false,comments:action.payload.items}
    }

    default:
    return state
  }
}