import React, { useState } from "react";
import Comment from "./Comment";

function CommentList( {commentObjs} ) {
  const [showComments, setShowComments] = useState(true)

  //deconstructor
  const commentList = commentObjs.map((comment) => (
    <Comment 
      key={comment.title}
      username={comment.user}
      comment={comment.comment}
    />
  ))
  
  //calculate number of comment objects, return length, send to comments header
  function numberOfComments(commentObjs) {
    let result = commentObjs.length
    return result;
  }

  function handleClick() {
    setShowComments((showComments) => !showComments)
  }


  //onClick toggle comments function
  //<button that can toggle between hide = no comments viewable, to show = all comments visiable.  onClick toggle function isOn ? "Hide" : "Show"
  //pass in the comments fom data file via props.
  //button needs className
  //deconstruct obj keys:
                          //comments header <h2 bold
                          //username <h3 bold
                          //comments text <h4
  //need to count the number of comments an interpolate {} that into header of comments section


  return (
    <div >
      <button 
        className="commentsShowHideButton" 
        onClick={handleClick}>
          {showComments ? "Hide" : "Show"} Comments
      </button>
      <div className="comments-header">
        <h2>{numberOfComments} Comments</h2>
      </div>
      {commentList}
    </div>
  );
}

export default CommentList