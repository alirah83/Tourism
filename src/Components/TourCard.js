
import React from 'react'
import '../css/style.css';
import TourCardFront from './TourCardFront';
import TourCardBack from './TourCardBack';

const TourCard = (props) => {
    return (
        <div className="card">
            <TourCardFront>
                {props.children}
            </TourCardFront>
            <TourCardBack>
                {props.children}
            </TourCardBack>
        </div>
    )
}

export default TourCard