import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import './styles/card.css'

function Card({ cardData }) {
    return (
        <div style={{ backgroundImage: `url(${cardData.urls.thumb}.jpg)` }} className='card-container'>

            <div className="progress-lines">
                <span></span><span></span><span></span>
            </div>


            <div className="details-box">
                <h1>{cardData.user.first_name}</h1>
                <div className='location'><span><ImLocation2 /> {cardData.user.location}</span></div>

                <div className="buttons">
                    <button className='button button-1'><AiOutlineHeart style={{ color: 'white', fontSize: '16px' }} /></button>
                    <button className=' button button-2'><AiOutlineDislike style={{ color: 'white', fontSize: '16px' }} /></button>

                </div>
            </div>
        </div>
    )
}

export default Card
