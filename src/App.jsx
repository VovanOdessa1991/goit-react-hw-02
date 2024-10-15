import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const parsedFeedback = JSON.parse(localStorage.getItem("feedback")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedFeedback;
  });
  useEffect(() => {
    const stringifyedCategories = JSON.stringify(feedback);
    localStorage.setItem("feedback", stringifyedCategories);
  }, [feedback]);

  const updateFeedback = (name) => {
    setFeedback({
      ...feedback,
      [name]: feedback[name] + 1,
    });
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={total}
      />
      {/* <Feedbeck feedback={feedback} /> */}
      {/* Good */}
      {total > 0 ? (
        <Feedback feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
