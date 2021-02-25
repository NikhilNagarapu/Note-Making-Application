import React, { Component } from 'react';

import {connect} from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div className="post">
      <h2 className="post_title">NoteTitle:{this.props.post.title}</h2>
      <p className="post_message">NoteMessage:{this.props.post.message}</p>
      <h2 className="post_message">Date:{this.props.post.date}</h2>
      <h2 className="post_message">Month:{this.props.post.month}</h2>
      <h2 className="post_message">Year:{this.props.post.year}</h2>
      <div className="control-buttons">
      <button className="edit"
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Edit</button><br></br>
      <button className="delete"
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
      Delete</button>
    </div>
    </div>
  );
 }
}
export default connect()(Post);