import React from 'react';
import Produkt from '../Produkt'
import './style.css'

const produkty = [
    {
        id: 1,
        nazev: 'Stůl',
        popis: 'Dřevěný stůl, ideální na položení věcí.',
        skladem: 5,
    },
    {
        id: 2,
        nazev: 'Židle',
        popis: 'Dřevěná židle, ideální na sezení.',
        skladem: 12,
    },
    {
        id: 3,
        nazev: 'Lavice',
        popis: 'Dřevěná lavice, ideální na ležení.',
        skladem: 1,
    },
    {
        id: 4,
        nazev: 'Truhla',
        popis: 'Dřevěná truhla, ideální na schování.',
        skladem: 0,
    },
]

const SeznamProduktu = () => {
    return (
        <div className="seznam-produktu">
            {
                produkty.map(produkt => <Produkt key={produkt.id} {...produkt}/>)
            }
        </div>
    )
}

export default SeznamProduktu