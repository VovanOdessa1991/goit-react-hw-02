import React from "react";

const Options = (goodClick, neutral, badClick) => {
  return (
    <div>
      <button goodClick={goodClick}>Good</button>
      <button neutral={neutral}>Neutral</button>
      <button badClick={badClick}>Bad</button>
    </div>
  );
};

export default Options;
