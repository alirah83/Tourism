    
import React from 'react'
import '../css/style.css';
import TourRow from './TourRow';
    
const SectionTours = (props) =>{
    return(
        <section className="section-tours" id="sectionTours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-scondary">
                    most popular tours
                </h2>
            </div>
            <TourRow />
        </section>
    )   
}

export default SectionTours