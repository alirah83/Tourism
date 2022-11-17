import React from 'react'
import '../css/style.css';
    
const SectionCol = (props) =>{
    return(
            <div className="col-1-of-2">
                {props.children}
            </div>
    )   
}

export default SectionCol