import { Show_Loading, Show_Result, Hide_Loading, Reset_Form,Bulletins_Fetched } from '../../actions/types'

import axios from 'axios'

import config from '../../config'

import { resolve } from 'path';

import Messages from '../Messages'

export const fetchBulletens = () => {

    return async (dispatch) => {

        console.log("fetching data")
        //first we show loading
        dispatch({
            type: Show_Loading
        })

        //second we get our bulletins

        try {
            let res = await axios({
                method: 'get',
                url: `${config.baseUrl}/v1/bulletin/getAllBulletins`
            });

            //then show result
            dispatch({
                type: Bulletins_Fetched,
                payload: {
                    items: res.status === 200 && res.data.Result ? res.data.Result:[]
                }
            })

            if(res.status===500 || res.status===402)
            {
                dispatch({
                    type: Show_Result,
                    payload: {
                        Message: res.data.ErrMsg
                    }
                })    
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
