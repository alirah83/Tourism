import React from 'react'
import '../css/style.css';
import StoriesVideo1 from '../img/video.mp4';
import StoriesVideo2 from '../img/video.webm';

const Video = (props) => {
    return (
        <video className="bg-video__content" autoPlay muted loop >
            <source src={StoriesVideo1} type="video/mp4" />
            <source src={StoriesVideo2} type="video/webm" />
            your browser is not supported!
        </video>
    )
}

export default Video


