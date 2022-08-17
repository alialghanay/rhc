import React from 'react';

function Time(props) {
    return ( 
        <div>
            <h2>opening time: {props.children["opening-time"]}</h2>
            <h2>closing time: {props.children["closing-time"]}</h2>
        </div>
     );
}

export default Time;