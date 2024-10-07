import React from "react";

const Feedbeck = ({ feedback }) => {
  return (
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
