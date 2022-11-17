import React from 'react'
import '../css/style.css';

    
const SecCompositionImg = (props) =>{
    
    return(
        <img srcSet= {props.srcset}
            sizes= {props.srcset}
            alt= {props.alt}
            className= {props.className}
            src= {props.src} />
        )   
}

export default SecCompositionImg