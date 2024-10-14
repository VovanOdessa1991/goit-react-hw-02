import React from "react";

const Options = ({ updateFeedback, resetFeetdback, total }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={() => resetFeetdback()}>reset</button>}
    </div>
  );
};

export default Options;
