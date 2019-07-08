import { Show_Loading, Show_Result, Hide_Loading, Reset_Form } from '../../actions/types'

import axios from 'axios'

import config from '../../config'

import { resolve } from 'path';

import Messages from '../Messages'

export const createBulletIn = ({ title, content, logo }) => {

    return async (dispatch) => {

        //first we show loading
        dispatch({
            type: Show_Loading
        })

        //second we create our form data

        let data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.append('logo', logo)

        try {
            let res = await axios({
                method: 'post',
                url: `${config.baseUrl}/v1/bulletin/create`,
                data,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            });

            //then show result
            dispatch({
                type: Show_Result,
                payload: {
                    Message: res.status === 200 && res.data.Result ? Messages.BulletInAdded : res.data.ErrMsg
                }
            })

            //then reset our form
            dispatch({
                type: Reset_Form
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
