import React from 'react'
import '../css/style.css';
import SecCompositionImg from './SecCompositionImg'
import CompostionImage1 from '../img/nat-1.jpg';
import CompostionImage2 from '../img/nat-2.jpg';
import CompostionImage3 from '../img/nat-3.jpg'
    
const SecComposition = (props) =>{
    return(
            <div className="composition">
                <SecCompositionImg srcSet={CompostionImage1}
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                 alt="Photo 1" src={CompostionImage1} 
                 className="composition__photo composition__photo--p1"/>

                <SecCompositionImg srcSet={CompostionImage2} 
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                 alt="Photo 2" src={CompostionImage2} 
                 className="composition__photo composition__photo--p2"/>

                <SecCompositionImg srcSet={CompostionImage3}  
                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                 alt="Photo 3" src={CompostionImage3} 
                 className="composition__photo composition__photo--p3"/>
                
                
            </div>
        )   
}

export default SecComposition