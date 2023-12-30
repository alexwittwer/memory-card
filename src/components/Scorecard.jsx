import { useState } from "react";

export default function Scorecard({ score }) {
  // maxScore here is a state, not to be confused with maxScore in outer components that is a number
  const [maxScore, setMaxScore] = useState(0);

  return (
    <div>
      <div>Current score: {score}</div>
      <div>Max score: {score > maxScore ? setMaxScore(score) : maxScore}</div>
    </div>
  );
}
