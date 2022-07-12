import React from 'react';
import Advertisement from './advertisement/advertisement';
import json from '../everthing.json';
import OurServices from './our-services/our-services';
import Location from './location/location';

function Main(){
    return (
        <main>
            <Advertisement data={json[0]["Advertisement"]} />
            <OurServices data={json[1]}/>
            <Location />
            <div style={{padding: "100vh"}}></div>
        </main>
    )
}

export default Main;