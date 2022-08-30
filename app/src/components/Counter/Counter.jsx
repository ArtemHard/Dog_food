import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const CountInc = () => setCount(count + 1);
  const CountDec = () => setCount (count - 1);

  return (
    <>
      <button onClick={CountDec}>-</button>
      {count}
      <button onClick={CountInc}>+</button>
    </>
  );
};

export default Counter;
