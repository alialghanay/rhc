import React from "react";
import "./dropdownItems.css";

function DropdownItems(props) {
    return(
        <li>
            <a href={`#${props.id}`}>{props.children}</a>
        </li>
    );
}

export default DropdownItems;