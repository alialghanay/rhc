import React from 'react';
import IconIf from './icon-if';
function Contant(porps) {
    const data = porps.data;
    return (
        <div id={data.id} className="contant">
            <h2><IconIf id={data.id}/>{data.title}</h2>
            <p>{data.pragraf}</p>
        </div>
    )
}

export default Contant;