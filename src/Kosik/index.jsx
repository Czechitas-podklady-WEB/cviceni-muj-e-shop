import React from 'react';
const Kosik = ({kosik}) => {
    if (kosik.length === 0) {
        return (
            <div>Košík je prázdný</div>
        )    
    } else {
        return (
            <div>Košík ({kosik.length})</div>
        )    

    }
}

export default Kosik