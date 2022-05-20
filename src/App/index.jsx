import React, { useState } from "react";
import Kosik from "../Kosik";
import SeznamProduktu from "../SeznamProduktu";
import "./style.css";

const App = () => {
  const [kosik, setKosik] = useState([]);

  const pridatPolozku = (id, nazev) => {
    const novyKosik = [...kosik]
    const polozkaVKosiku = novyKosik.find(polozka => polozka.id === id)
    if (polozkaVKosiku === undefined) {
      novyKosik.push({id: id, nazev: nazev, pocet: 1})
    } else {
      polozkaVKosiku.pocet += 1
    }
    setKosik(novyKosik)
  }

  return (
    <>
      <header>
        <div className="logo">Můj e-shop</div>
        <Kosik kosik={kosik} />
      </header>
      <main>
        <SeznamProduktu pridatPolozku={pridatPolozku}/>
      </main>
    </>
  );
};

export default App;
