    
import React from 'react'
import '../css/style.css';
    
const FeatureCol = (props) =>{
    return(
            <div className="col-1-of-4">
                {props.children}
            </div>
        )   
}

export default FeatureCol