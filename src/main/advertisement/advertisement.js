import React, { useEffect, useState, useRef} from 'react';
import './advertisement.css';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Circals from './circals';



function Advertisement(props) {
    const [index, setIndex] = useState(0);

    const slideRef = useRef();
    const removeAmimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }


    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAmimation);
        startSlider();
    }, []);

    const startSlider = () => {
        setInterval(() => {
            prevAd();
        }, 10000)
    }

    const data = props.data;
    const {tilte, img, descrption, figer} = data[index];
    const nextAd = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            let last = data.length - 1;
            return newIndex < 0 ? last : newIndex;
        });
        slideRef.current.classList.add("fade-anim");
    }
    const prevAd = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex < data.length ? newIndex : 0;
        });
        slideRef.current.classList.add("fade-anim");
    }

    return (
        <div className='container'>
            <button className='img-buttton-container next' onClick={nextAd}><MdNavigateBefore className='img-buttton-icon nex'/></button>

            <figcaption ref={slideRef} className='img-fig'>
                <img src={require(`${img}`)} className='img' alt={descrption}/>

                <figer className="caption">
                    <h2 className='img-title'>{tilte}</h2>
                    <p className='img-text'>{figer}</p>
                    <div className='perent'>{data.map(x => <Circals isWorking={tilte}>{`${x.tilte}`}</Circals>)}</div>
                </figer>
            </figcaption>


            <button className='img-buttton-container prev' onClick={prevAd}><MdNavigateNext className='img-buttton-icon pre'/></button>
        </div>
    )
}

export default Advertisement;