import { useState } from "react";

export default function Counter({ count }) {
  const [maxCount, setMaxCount] = useState(0);

  return (
    <div>
      <div>Current count: {count}</div>
      <div>Max Count: {count > maxCount ? setMaxCount(count) : maxCount}</div>
    </div>
  );
}
