import React from 'react';

import './styles.css';

import Messages from '../Messages'

import Loading from '../common/loading'

class BulltenCreate extends React.Component {

  componentWillMount()
  {
    this.props.resetResult()
  }

  validateInput()
  {
      if(!this.refs.title.value)
      {
        this.setState({...this.state,errors:{title:Messages.TitleRequired }})
        return false
      }
       if(!this.refs.content.value)
      {
        this.setState({...this.state,errors:{content:Messages.ContentRequired }})
        return false
      }
       if(!this.refs.logo.files.length)
      {
        this.setState({...this.state,errors:{logo:Messages.ImageRequired }})
        return false
      }

      if(this.refs.logo.files[0].type!='image/png' && this.refs.logo.files[0].type!='image/jpeg' && this.refs.logo.files[0].type!='image/jpeg')
      {
        this.setState({...this.state,errors:{logo:Messages.InvalidLogo }})
        return false
      }

      this.setState({...this.state,errors:{}})
      return true
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.validateInput())
    {
       this.props.addNewBulletIn({ title: this.refs.title.value, content: this.refs.content.value,logo:this.refs.logo.files[0] })
    }
    return false
  };

  resetForm()
  {
    this.refs.title.value=""
    this.refs.content.value=""
  }

  render() {

    let errors=this.state?this.state.errors:null
    
    let result=this.props?this.props.result:""
    
    let loadingElement=this.props && this.props.showloading?<Loading/>:null



    return (
      <div class='container-fluid'>
        {loadingElement}
        
        {result?<div className='alert alert-success'>{result}</div>:null}

        <form onSubmit={this.handleSubmit.bind(this)}>
        
        <div className="form-group">
        <label for="logofile">File : </label>
            <input
             id='logofile'
              type="file"
              placeholder="Title"
              ref="logo"
              className="form-control-file"
              name="title"
            />
            {errors && errors.logo?<div className='text-danger'>{errors.logo}</div>:""}
          </div>
          <div className="form-group">
          <label for="titleTxt">Title : </label>
          
            <input
              type="text"
              placeholder="Title"
              ref="title"
              className="form-control"
              name="title"
              id='titleTxt'
            />

            {errors && errors.title?<div className='text-danger'>{errors.title}</div>:""}
            
          </div>

          <div className="form-group">
          <label for="content">Content : </label>
      
            <textarea
              id='content'
              cols="19"
              rows="8"
              ref="content"
              placeholder="Content"
              className="form-control"
              name="content"
            >
            </textarea>
            {errors && errors.content?<div className='text-danger'>{errors.content}</div>:""}
          </div>
          <div className="form-group">
            <button type="submit" className="col-xs-12 col-md-1 btn btn-primary">Add Post</button>
            <button type="button" className="col-xs-12 col-md-1 btn btn-warning" onClick={this.resetForm.bind(this)}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BulltenCreate;