import React from "react";
import "./dropdownItems.css";

function DropdownItems(props) {
    return(
        <li className="li">
            <a href={`#${props.id}`}>{props.children}</a>
        </li>
    );
}

export default DropdownItems;