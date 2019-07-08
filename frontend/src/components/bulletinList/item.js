import React from 'react'
import config from '../../config'
export default ({item})=>{
    return <div class="card col-xs-12 col-md-4">
    <div class='card-wrapper'>
  <img class="card-img-top" width='100' src={`${config.baseUrl}/images/${item.logourl}`} alt="Card image cap"/>
  <div class="card-body text-center">
    <h2 class="card-title">{item.title}</h2>
    <a href={`/details/${item.id}`} class="btn btn-primary">Details</a>
  </div>
  </div>
</div>
    
}