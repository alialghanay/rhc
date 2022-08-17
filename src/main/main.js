import React from 'react';
import Advertisement from './advertisement/advertisement';
import json from '../everthing.json';
import OurServices from './our-services/our-services';
import Location from './location/location';
import WorkHours from './workHours/work-hours';

function Main(){
    return (
        <main>
            <Advertisement data={json[0]["Advertisement"]} />
            <OurServices data={json[1]}/>
            <Location />
            {/* <WorkHours data={json[4]}/> */}
            {/* <div style={{"padding": "50vh"}}></div> */}
        </main>
    )
}

export default Main;