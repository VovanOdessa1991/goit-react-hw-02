import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedbeck from "./components/Feedbeck/Feedbeck";
import Notification from "./components/Notification/Notification";

function App() {
  const [count, setCount] = useState(0);
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
  const resetFeetdback = () => {
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
        resetFeetdback={resetFeetdback}
        total={total}
      />
      {/* <Feedbeck feedback={feedback} /> */}
      {/* Good */}
      {total > 0 ? (
        <Feedbeck feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification />
      )}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>rkfjjfr</div>
    </>
  );
}

export default App;
