import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedbeck from "./components/Feedbeck/Feedbeck";

function App() {
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // goodClick, neutral, badClick;

  const updateFeedback = (name) => {
    setFeedback({
      ...feedback,
      [name]: feedback[name] + 1,
    });
  };

  return (
    <>
      {/* Good */}
      {feedback.good + feedback.neutral + feedback.bad > 0 ? (
        <Feedbeck feedback={feedback} />
      ) : (
        "ogkdgj"
      )}
      <Options updateFeedback={updateFeedback} />
      <Description />

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
