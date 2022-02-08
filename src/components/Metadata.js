import React from "react";

function Metadata({ addedView, uploadDate }) {
//views state passed down via props, rendered here, need a className for CSS, and a callback back to App, in App on useState(currentViews + 1); need an incrementer function
//upload date passed down via props,

  return (
    <div className="views">
      {addedView} | {uploadDate}
    </div>
  );
}

export default Metadata