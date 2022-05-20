import React, { useState } from "react";
import './style.css'

const Objednani = ({maxPocet, pridat, odebrat}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count === maxPocet) {
      return
    }
    setCount((c) => c + 1);
    pridat()
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
    odebrat()
  };

  return (
    <div className="objednani">
      <button onClick={handleDecrement} disabled={count === 0}>-</button>
      <input value={count} className="objednani__pocet" readOnly/>
      <button onClick={handleIncrement} disabled={count === maxPocet}>+</button>
    </div>
  );
};

export default Objednani;
