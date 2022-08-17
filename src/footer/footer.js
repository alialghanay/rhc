import json from '../everthing.json';
import logo from "../img/logo.svg";
import React from 'react';
import './footer.css';
import Contact from './contact';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer(){

    return(
        <footer id="footer">
            <div className='continner'>
                <div>
                    <figure className='footer-logo'>
                            <img className='footer-logo-png' src={logo} alt="RIAAIA Logo" />
                            <figcaption><h2 className='footer-logo-text'>Wishing you good Health<br /> & <br />Well-being...</h2></figcaption>
                        </figure>

                    <Contact id={json[5].contant[4].id}>{json[5].contant[4]}</Contact>
                    <div className='social'>
                        <FaFacebookSquare></FaFacebookSquare>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitterSquare></FaTwitterSquare>
                    </div>
                </div>
                <div className='line'>
                <p>&copy;{new Date().getFullYear()} RIAAIA HEALTH CARE | All rights reserved | Trems of service | Privacy</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;