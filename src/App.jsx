import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log({ good, neutral, bad });

  const total = good + neutral + bad;
  console.log(total);

  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  console.log(average);

  const positive = (good / total) * 100;
  console.log(positive);

  return (
    <>
      {total === 0 ? (
        <p>No feedback given.</p>
      ) : (
        <>
          <h1>statistics</h1>
          <table>
            <tbody>
              <StatisticLine value={good} text="good" />
              <StatisticLine value={neutral} text="neutral" />
              <StatisticLine value={bad} text="bad" />
              <StatisticLine value={total} text="total" />
              <StatisticLine value={average} text="average" />
              <StatisticLine value={positive + " %"} text="positive" />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
