import React from "react";
import "./style.css";

const Counter = () => {
  const minus_fn = () => {};
  const plus_fn = () => {};

  return (
    <div className="main_block">
      <div className="main_block__inner">
        <button onClick={minus_fn}>-</button>
        <span>0</span>
        <button onClick={plus_fn}>+</button>
      </div>
    </div>
  );
};

export default Counter;

/// функц-я
/// классовая (ООП)