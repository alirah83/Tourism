    
import React from 'react'
import '../css/style.css';
import SectionRow from './SectionRow';
    
const SectionAbout = (props) =>{
    return(
        <section className="section-about" id='about-us'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-scondary">
                    Exciting tours for advantorus people
                </h2>
            </div>
            <SectionRow />
        </section>
        )   
}

export default SectionAbout