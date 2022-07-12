import React from 'react';
import Contant from './contant';
import "./our-services.css";

function OurServices(porps) {
    const data = porps.data;
    return (
        <div id={data.id}>
            {data.contant.map((x) => <Contant data={x}/>)}
        </div>
    )
}

export default OurServices;