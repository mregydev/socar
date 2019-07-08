import { Show_Loading, Show_Result, Hide_Loading, Reset_Form,Bulletin_Fetched,Comments_Fetched } from '../../actions/types'

import axios from 'axios'

import config from '../../config'

import { resolve } from 'path';

import Messages from '../Messages'

export const fetchBulletin = (id) => {

    return async (dispatch) => {

        //first we show loading
        dispatch({
            type: Show_Loading
        })

        //second we get our bulletins

        try {
            let res = await axios({
                method: 'get',
                url: `${config.baseUrl}/v1/bulletin/getBulletin/${id}`
            });

            
            //then show result
            dispatch({
                type: Bulletin_Fetched,
                payload: {
                    item: res.status === 200 && res.data.Result ? res.data.Result:null
                }
            })

        }
        catch (ex) {
            dispatch({
                type: Show_Result,
                payload: {
                    Message: ex.message
                }
            })
        }

        dispatch({
            type: Hide_Loading
        })


    };
};


export const fetchComments = (bulletinId) => {

    return async (dispatch) => {

        //first we show loading
        dispatch({
            type: Show_Loading
        })

        //second we get our bulletins

        try {
            let res = await axios({
                method: 'get',
                url: `${config.baseUrl}/v1/comments/getComments/${bulletinId}`
            });

            debugger
            //then show result
            dispatch({
                type: Comments_Fetched,
                payload: {
                    items: res.status === 200 && res.data.Result ? res.data.Result:null
                }
            })

        }
        catch (ex) {
            dispatch({
                type: Show_Result,
                payload: {
                    Message: ex.message
                }
            })
        }

        dispatch({
            type: Hide_Loading
        })


    };
};




export const createComment = ({content, bulletinId} ) => {

    return async (dispatch) => {

        //first we show loading
        dispatch({
            type: Show_Loading
        })

        //second we create our form data

        try {
            debugger
            let res = await axios({
                method: 'post',
                url: `${config.baseUrl}/v1/comments/create`,
                data:{content,bulletinId,user:"mregydev"},
                config: { headers: { 'Content-Type': 'application/json' } }
            });


            if(res.status==200 && res.data.Result)
            {
               dispatch(fetchComments(bulletinId))
            }
        }
        catch (ex) {
            dispatch({
                type: Show_Result,
                payload: {
                    Message: ex.message
                }
            })
        }

        dispatch({
            type: Hide_Loading
        })


    };
};