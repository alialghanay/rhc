import React, { useState } from 'react';
import './advertisement.css';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";



function Advertisement(props) {
    const [index, setIndex] = useState(0);
    const data = props.data;
    const {tilte, img, descrption, figer} = data[index];
    const nextAd = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex < data.length ? newIndex : 0;
        });
    }
    const prevAd = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            let last = data.length - 1;
            return newIndex < 0 ? last : newIndex;
        });
    }
    return (
        <div className='container'>
            <button className='img-buttton-container next' onClick={nextAd}><MdNavigateBefore className='img-buttton-icon nex'/></button>
            
            <figcaption className='img-fig'>
                <h2 className='img-title'>{tilte}</h2>
                <img src={require(`${img}`)} className='img'/>
                <figer className='img-text'>{figer}</figer>
            </figcaption>
            
            <button className='img-buttton-container prev' onClick={nextAd}><MdNavigateNext className='img-buttton-icon pre'/></button>
        </div>
    )
}

export default Advertisement;