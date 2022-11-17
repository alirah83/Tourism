import React from 'react'
import '../css/style.css';
    
const SectionHeading = (props) =>{
    return(
            <React.Fragment>
               {props.children} 
            </React.Fragment>
    )   
}

export default SectionHeading