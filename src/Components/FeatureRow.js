    
import React from 'react'
import '../css/style.css';
import FeatureCol from './FeatureCol';
import '../css/icon-font.css';
    
const FeatureRow = (props) =>{
    return(
        <div className="row">
            <FeatureCol>
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">explore the world</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                    </p>
                </div>
            </FeatureCol>

            <FeatureCol>
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-compass"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                    </p>
                </div>
            </FeatureCol>

            <FeatureCol>
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-map"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                    </p>
                </div>
            </FeatureCol>

            <FeatureCol>
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-heart"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                    </p>
                </div>
            </FeatureCol>
        </div>
        )   
}

export default FeatureRow