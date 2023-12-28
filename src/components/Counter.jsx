import { useState } from "react";

export default function Counter({ count }) {
  const [maxCount, setMaxCount] = useState(0);

  return (
    <>
      <div>{count > maxCount ? setMaxCount(count) : maxCount}</div>
    </>
  );
}
