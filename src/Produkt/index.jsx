import React from 'react';
import Objednani from '../Objednani';
import './style.css'

const Produkt = ({id, nazev, popis, skladem, pridatPolozku}) => {
    return (
        <div className={"produkt " + (skladem === 0 ? 'produkt--nedostupny' : '')}>
            <h1 className="produkt__nazev">{nazev}</h1>
            <div className="produkt__dostupnost">Dostupnost: {skladem > 0 ? 'skladem' : 'nedostupné'}</div>
            <div className="produkt__popis">{popis}</div>
            <Objednani pridat={() => pridatPolozku(id, nazev)} />
        </div>
    )
}

export default Produkt