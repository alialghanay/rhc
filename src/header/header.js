import logo from "../img/logo.svg";
import './header.css';
import React from 'react';
import json from '../everthing.json';
import Navgtion from './navgtion';

function Header() {

    return (
        <div>
            <header id="header">          

                <figure id='header-logo'>
                    <img className='logo-png' src={logo} alt="RIAAIA Logo" />
                    <figcaption><h1 className='logo-text'>RIAAIA HEALTH CARE</h1></figcaption>
                </figure>

                <div id='navgtion'>
                        {json.map((x) => <Navgtion title={x.divTitle} className={x.className}>{x.divName}</Navgtion>)}
                </div>
            </header>
        </div>
    );
}
 
export default Header;