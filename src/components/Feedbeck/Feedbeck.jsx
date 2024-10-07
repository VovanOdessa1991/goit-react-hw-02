import React from "react";

const Feedbeck = ({ feedback }) => {
  // let feedbackBool = feedback.good + feedback.neutral + feedback.bad > 0;
  return (
    // Bad warum?

    // feedbackBool? ('<ul> <li>Good: {feedback.good}</li>
    //   <li>Neutral: {feedback.neutral}</li>
    //   <li>Bad: {feedback.bad}</li>
    //   <li>Total: </li>
    //   <li>Positive:</li>
    // </ul>') : (
    //     "ogkdgj"
    //   );
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: </li>
      <li>Positive:</li>
    </ul>
  );
};

export default Feedbeck;
