import React, { useState } from "react";
import './style.css'

const Objednani = ({maxPocet, pocet, pridat, odebrat}) => {

  return (
    <div className="objednani">
      <button onClick={odebrat} disabled={pocet === 0}>-</button>
      <input value={pocet} className="objednani__pocet" readOnly/>
      <button onClick={pridat} disabled={pocet === maxPocet}>+</button>
    </div>
  );
};

export default Objednani;
