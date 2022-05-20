import React from 'react';
const Kosik = ({ kosik }) => {
    if (kosik.length === 0) {
        return (
            <div>Košík je prázdný</div>
        )
    } else {
        return (
            <div>Košík ({kosik.reduce((suma, item) => suma + item.pocet, 0)})</div>
        )

    }
}

export default Kosik