import React from "react";

function Votes({ currentUpvotes, currentDownvotes, handleUpvotes, handleDownvotes }) {  //state, state, callback, callback
  //pass down current votes (up and down) from data file via props.  Make the data file data State in App
  //need classNames for each up and down
  //need <buttons for each
  //need onClick function for each, callback to App to update State, which has the data file (current votes)
  //need emojis
  function handleUpvoteClick() {//copy paste this into upvotes component based on onClick event
    handleUpvotes()  //value should equal 1, so that when it gets passed, we add 1 to total upvotes
  }

  function handleDownvoteClick() {//copy paste this into upvotes component based on onClick event
    handleDownvotes()  //value should equal 1, so that when it gets passed, we add 1 to total upvotes
  }

  return (
    <div>
      <button className="vote" onClick={handleUpvoteClick}>{currentUpvotes}👍</button>
      <button className="vote" onClick={handleDownvoteClick}>{currentDownvotes}👎</button>
    </div>
  );
}

export default Votes