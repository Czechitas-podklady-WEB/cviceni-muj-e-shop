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
      novyKosik.push({ id: id, nazev: nazev, pocet: 1 })
    } else {
      polozkaVKosiku.pocet += 1
    }
    setKosik(novyKosik)
  }

  const odebratPolozku = (id) => {
    const index = kosik.findIndex(polozka => polozka.id === id)
    const polozkaVKosiku = kosik[index]
    const novyKosik = [...kosik]
    if (polozkaVKosiku.pocet > 1) {
      polozkaVKosiku.pocet -= 1
    } else {
      novyKosik.splice(index, 1)
    }
    setKosik(novyKosik)
  }

  const zjistiPocetObjednanych = (id) => {
    const polozkaVKosiku = kosik.find(polozka => polozka.id === id)
    if (polozkaVKosiku === undefined) {
      return 0
    } else {
      return polozkaVKosiku.pocet
    }
  }

  return (
    <>
      <header>
        <div className="logo">Můj e-shop</div>
        <Kosik kosik={kosik} />
      </header>
      <main>
        <SeznamProduktu zjistiPocetObjednanych={zjistiPocetObjednanych} pridatPolozku={pridatPolozku} odebratPolozku={odebratPolozku} />
      </main>
    </>
  );
};

export default App;
