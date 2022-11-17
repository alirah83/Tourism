
import React from 'react'
import '../css/style.css';

const StoryRow = (props) => {
    return (
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={props.src} alt={props.alt} className={props.className} />
                        {props.children}
                </figure>
                {props.children}
            </div>
        </div>
    )
}

export default StoryRow