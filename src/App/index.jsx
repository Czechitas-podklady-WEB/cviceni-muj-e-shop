import React, { useState } from "react";
import Kosik from "../Kosik";
import SeznamProduktu from "../SeznamProduktu";
import "./style.css";

const App = () => {
  const [kosik, setKosik] = useState([]);
  return (
    <>
      <header>
        <div className="logo">Můj e-shop</div>
        <Kosik kosik={kosik} />
      </header>
      <main>
        <SeznamProduktu />
      </main>
    </>
  );
};

export default App;
