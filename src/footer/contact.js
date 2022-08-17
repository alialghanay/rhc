import React from 'react';

function Contact(props) {
    return ( 
        <div id={`footer-${props.id}`}>
            <ul>
                <li>Email: <a href={props.children.email}>{props.children.email}</a></li>
                <li>Telephone: {props.children.telephone}</li>
                <li>Mobile: {props.children.phone}</li>
                <li>City: {props.children.city}</li>
            </ul>
        </div>
     );
}

export default Contact;