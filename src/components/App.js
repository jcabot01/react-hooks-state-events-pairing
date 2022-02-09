import React, { useState } from "react";
import video from "../data/video.js";
import CommentList from "./CommentList.js";
import Metadata from "./Metadata.js";
import Votes from "./Votes.js";

function App() {
  const [currentViews] = useState(video.views + 1)  //need API skills to store new value of value, upon load a new view is added to the data file # for views
  const [upvotes, setUpvotes] = useState(video.upvotes)//need state for upvotes, taken from data file, updated with <button callback in upvotes component
  const [downvotes, setDownvotes] = useState(video.downvotes)
  // const [comments, setComments] = useState(video.comments)//need state for comments (if we add remove button or filters), taken from data file, rendered in Comments component

    
  function addOneUpVote() { //Setter function for upvotes
    return setUpvotes(preUpvotes => preUpvotes + 1)
  }
  
  function addOneDownVote() { //Setter function for upvotes
    return setDownvotes(preDownVotes => preDownVotes + 1)
  }
  
  
  return (
    <div className="App" > 
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        key={video.title}
        title={video.title}
      />
      <h1>{video.title}</h1>
        <Metadata addedView={currentViews} uploadDate={video.createdAt} />
        <Votes 
          handleUpvotes={addOneUpVote} 
          currentUpvotes={upvotes} 
          handleDownvotes={addOneDownVote}
          currentDownvotes={downvotes} /> 
        <CommentList commentObjs={video.comments} />
      </div>
  );
}

export default App;
