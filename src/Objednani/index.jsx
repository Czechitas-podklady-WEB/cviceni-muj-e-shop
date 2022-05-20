import React, { useState } from "react";
import './style.css'

const Objednani = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="objednani">
      <button onClick={handleDecrement} disabled={count === 0}>-</button>
      <input value={count} className="objednani__pocet" readOnly/>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Objednani;
