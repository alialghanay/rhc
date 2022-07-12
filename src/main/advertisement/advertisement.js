import React, { useEffect, useState } from 'react';
import './advertisement.css';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";



function Advertisement(props) {
    const [index, setIndex] = useState(0);
    const [puase, setPuase] = useState(true);
    const data = props.data;
    const {tilte, img, descrption, figer} = data[index];
    const nextAd = () => {
        setPuase((puase) => !puase);
        setIndex((index) => {
            let newIndex = index - 1;
            let last = data.length - 1;
            return newIndex < 0 ? last : newIndex;
        });
    }
    const prevAd = () => {
        setPuase((puase) => !puase);
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex < data.length ? newIndex : 0;
        });
    }
    return (
        <div className='container'>
            <button className='img-buttton-container next' onClick={nextAd}><MdNavigateBefore className='img-buttton-icon nex'/></button>
            
            <figcaption className='img-fig'>
                <img src={require(`${img}`)} className='img' alt={descrption}/>

                <figer className="caption">
                    <h2 className='img-title'>{tilte}</h2>
                    <p className='img-text'>{figer}</p>
                </figer>
            </figcaption>
            
            <button className='img-buttton-container prev' onClick={prevAd}><MdNavigateNext className='img-buttton-icon pre'/></button>
        </div>
    )
}

export default Advertisement;