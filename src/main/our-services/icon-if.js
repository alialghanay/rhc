import React from 'react';
import { FaFileMedical, FaMortarPestle, FaMedkit, FaStethoscope, FaHeartbeat } from "react-icons/fa";

function IconIf(porps) {
    const id = porps.id;
    switch(id){
        case "health-screening":
            return (
                <FaStethoscope></FaStethoscope>
            )
        case "complete-medical":
            return (
                <FaMedkit></FaMedkit>
            )
        case "pre-employment":
            return (
                <FaFileMedical></FaFileMedical>
            )
        case "fitness":
            return (
                <FaMortarPestle></FaMortarPestle>
            )
        case "well-being":
            return (
                <FaHeartbeat></FaHeartbeat>
            )
            default:
                <div></div>
    }
}

export default IconIf;