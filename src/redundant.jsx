import { useState } from "react";

// const Buttons = () => {
//   const [clicks, setClicks] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
//   const handleGoodClick = () => {
//     const newClicks = {
//       good: clicks.good + 1,
//       neutral: clicks.neutral,
//       bad: clicks.bad,
//     };
//     setClicks(newClicks);
//   };
//   const handleNeutralClick = () => {
//     const newClicks = {
//       good: clicks.good,
//       neutral: clicks.neutral + 1,
//       bad: clicks.bad,
//     };
//     setClicks(newClicks);
//   };
//   const handleBadClick = () => {
//     const newClicks = {
//       good: clicks.good,
//       neutral: clicks.neutral,
//       bad: clicks.bad + 1,
//     };
//     setClicks(newClicks);
//   };

//   return (
//     <div>
//       {good}
//       <button>good</button>
//       {neutral}
//       <button>neutral</button>
//       {bad}
//       <button>bad</button>
//     </div>
//   );
// };

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return;
  <div>
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>total {total}</p>
  </div>;
};

export default App;
