import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default class Post extends React.Component   {

  componentWillMount()
  {
    console.log("mouting")
  }

  render()
  {
    return (
      <div style={styles}>
      <h1>heeeereee</h1>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button className="btn btn-danger" type="button" onClick={() => this.props.onDelete(this.props._id)}>
          Remove
      </button>
      </div>
    );
  }
};