import React from "react";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  //need state for views
  //need state for votes, taken from data file, updated with <button callback in Votes component
  //need state for comments (if we add remove button or filters), taken from data file, rendered in Comments component

  //Setter function for views
  //Setter function for votes
  //Setter function for comments


  return (
    <div className="App"> 
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  /*figure out where we want to stick component calls*/
  );
}

export default App;
