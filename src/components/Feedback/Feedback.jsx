import React from "react";

const Feedback = ({ feedback, total, positive }) => {
  // let feedbackBool = feedback.good + feedback.neutral + feedback.bad > 0;
  return (
    // Bad warum?

    // feedbackBool ? (
    //   <ul>
    //     {" "}
    //     <li>Good: {feedback.good}</li>
    //     <li>Neutral: {feedback.neutral}</li>
    //     <li>Bad: {feedback.bad}</li>
    //     <li>Total: </li>
    //     <li>Positive:</li>
    //   </ul>
    // ) : (
    //   "ogkdgj"
    // )
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive} %</li>
    </ul>
  );
};

export default Feedback;
