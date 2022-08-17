import React from 'react';
import './advertisement.css';


function Circals(props) {
    const isWorking = (w, c) => w === c ? true : false;
    switch(isWorking(props.isWorking, props.children)){
        case true:
            return (
                <svg height="25" width="25" className='child'><circle cx="12" cy="12" r="5" id='here' /></svg> 
             );
        case false:
            return (
                <svg height="25" width="25" className='child'><circle cx="12" cy="12" r="5" id='not-here' /></svg> 
             );
        default:
            console.log("erorr");
            return ( 
                <div></div>
             );
    }
}

export default Circals;