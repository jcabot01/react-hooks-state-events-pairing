import React, { useState } from "react";
import video from "../data/video.js";
import CommentList from "./CommentList.js";
import Metadata from "./Metadata.js";
import Votes from "./Votes.js";

function App() {
  console.log(video.views)
  const [currentViews, setCurrentViews] = useState(video.views)  //need state for views
  const [upvotes, setUpvotes] = useState(video.upvotes)//need state for upvotes, taken from data file, updated with <button callback in upvotes component
  const [downvotes, setDownvotes] = useState(video.downvotes)
  // const [comments, setComments] = useState(video.comments)//need state for comments (if we add remove button or filters), taken from data file, rendered in Comments component

  function viewIncrementer() {  //Setter function for views
    const newView = 1;
    setCurrentViews([...currentViews + newView])
  }
  
  function addOneUpVote(oneUpVote) { //Setter function for upvotes
    setUpvotes([...upvotes + oneUpVote])
  }
  
  function addOneDownVote(oneDownVote) { //Setter function for upvotes
    setDownvotes([...downvotes + oneDownVote])
  }
  
  
  //include   and upload date
  return (
    <div className="App"> 
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        key={video.title}
        title={video.title}
      />
        <Metadata addedView={viewIncrementer} uploadDate={video.createdAt} />
        <Votes 
          handleUpvotes={addOneUpVote} 
          currentUpvotes={upvotes} 
          handleDownvotes={addOneDownVote}
          currentDownvotes={downvotes} /*component, setter callback function sent down as a prop.  Move this comp down in to return (*/ /> 
        <CommentList commentObjs={video.comments}/*Setter function for comments*/ />
      </div>
  );
}

export default App;
