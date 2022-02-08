import React from "react";

function Comment({ username, comment }) {

  return (
    <div className="individual-comment-container">
      <div className="username">{username}</div>
      <div className="comment">{comment}</div>
    </div>
  );
}

export default Comment