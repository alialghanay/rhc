import React from "react";
import DropdownItems from "./dropdownItems";
import './dropdownList.css';

function DropdownList(props) {
    if(props.classNameTwo == "dropdown"){   
    return(
        <ul className={props.className}>
            {props.children.map((x) => <DropdownItems id={x.id}>{`${x.title}`}</DropdownItems>)}
        </ul>
    );
    } else {console.log(props.className);
        return <ul style={{display: "none"}}></ul>}
}

export default DropdownList;

