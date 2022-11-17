
import React from 'react'
import '../css/style.css';
import Video from './Video';
import StoryRow from './StoryRow';
import StoryImg1 from '../img/nat-8.jpg';
import StoryImg2 from '../img/nat-9.jpg';

const SectionStories = (props) => {
    return (
        <section className="section-stories" id="sectionStories">
            <div className="bg-video">
                <Video />
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-scondary">
                    We make people genuinely happy
                </h2>
            </div>

            <StoryRow src = {StoryImg1} alt="Person on a tour" className="story__img" >
            <figcaption className="story__caption">Mary Smith</figcaption>
            <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                    {/* This paragraph must be less than 40 words */}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis vitae laborum,
                        doloribus odit iusto officiis deserunt quas perferendis sed beatae ratione enim at
                        similique iusto officiis deserunt quas perferendis sed beatae ratione enim at iusto officiis    
                    </p>
                </div>
            </StoryRow>
            <StoryRow src = {StoryImg2} alt="Person on a tour" className="story__img">
            <figcaption className="story__caption">Jack Wilson</figcaption>
            <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">WOW! my life is compelitly deffrent now </h3>
                    {/* This paragraph must be less than 40 words */}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis vitae laborum,
                        doloribus odit iusto officiis deserunt quas perferendis sed beatae ratione enim at
                        similique iusto officiis deserunt quas perferendis sed beatae ratione enim at iusto officiis 
                    </p>  
            </div>
            </StoryRow>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    )   
}

export default SectionStories