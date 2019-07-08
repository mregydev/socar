import React from 'react';

import './styles.css';

import Messages from '../Messages'

import config from '../../config'

export default class CommentsComp extends React.Component {

    addComment()
    {
        if(this.refs.commentVal)
        {
            console.log(this.props)
            this.props.addComment(this.refs.commentVal.value)
        }
        else
        {
            alert("insert comment first")
        }
    }
    render() {

        let { comments } = this.props

        let commentsElement = comments.map(c => <div class='commentContent'>{c.content}</div>)

        let addComment =<div class='row addCommentDiv'> <span class='col-md-10'> <input type='text' class='form-control ' placeholder='insert comment here' ref='commentVal' /></span><span class='col-md-2'><button class='btn btn-primary ' onClick={this.addComment.bind(this)} >Add Comment</button></span></div>

        return<div>
            <div class='comments'>
            {commentsElement}
            </div>
            {addComment}
        </div>
    }

}
