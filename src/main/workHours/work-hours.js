import React from 'react';
import Time from './time';
import { GoClock } from "react-icons/go";

function WorkHours(props) {
    const data = props.data; 
    return (
        <div>
            <div id={data.divName}>
                <h1><GoClock /></h1>
                <Time>{data.WorkHours}</Time>
            </div>
        </div>
    )
}

export default WorkHours;