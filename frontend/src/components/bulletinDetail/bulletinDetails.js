import config from '../../config'

import React from 'react';

export default ({bulletin}) => {
    return <div class='container bulletinDetail'> 
       <h2 class='text-center'> {bulletin.title}</h2>
        <img   src={`${config.baseUrl}/images/${bulletin.logourl}`}/>
       <article class='content'> {bulletin.content}</article>
    </div>

}