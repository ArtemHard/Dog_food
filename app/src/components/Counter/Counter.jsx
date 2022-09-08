import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const CountInc = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCount(count + 1);
  };
  const CountDec = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={CountDec}>-</button>
      {count}
      <button onClick={CountInc}>+</button>
    </>
  );
};

export default Counter;
