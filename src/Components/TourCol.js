
import React from 'react'
import '../css/style.css';
import TourCard from './TourCard';

const TourCol = (props) => {
    return (
        <React.Fragment>
            <div className="col-1-of-3">
                <TourCard>
                    {props.children}
                </TourCard>
            </div>
        </React.Fragment >
    )
}

export default TourCol