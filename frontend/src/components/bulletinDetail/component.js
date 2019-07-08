import React from 'react';

import './styles.css';

import Messages from '../Messages'

import config from '../../config'

import BulletinDetails from './bulletinDetails'

import Comments from './comments'

import Loading from '../common/loading'

class BulletenDetail extends React.Component {
   
  componentWillMount()
   {
    this.props.fetchBullten(this.props.match.params.id)
    this.props.fetchComments(this.props.match.params.id)
   }
  
  addComment(value)
  {
    debugger
   this.props.addComment(value,this.props.match.params.id)
  }
  render() {

    let LoadingElement=this.props && this.props.showloading?<Loading/>:null

    let bulletinElement=this.props && this.props.bulletin && this.props.bulletin.id?<BulletinDetails bulletin={this.props.bulletin}/>:<div>No bulletin found</div>
   
    let commentsEelement=this.props && this.props.comments?<Comments comments={this.props.comments} addComment={this.addComment.bind(this)}/>:null

    return (
      <div class='container'>

      {LoadingElement}

{bulletinElement}

<div class='commentsSection'>
<h3 class='text-center'>Comments</h3>
{commentsEelement}
</div>

        </div>
    );
  }
}

export default BulletenDetail;