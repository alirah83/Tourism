
import React from 'react'
import '../css/style.css';
import TourCol from './TourCol';

const TourRow = (props) => {
    return (
        <div className="row">
            
            <TourCol>
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">the sea explorer</span>
                    </h4>
                    <div className="card__detials">
                        <ul>
                            <li>3 days tours</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Defficalty: easy</li>
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">only</p>
                            <p className="card__price-value">$297</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book now!</a>
                    </div>
                </div>
            </TourCol>

            <div className="row">
                <TourCol>
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--2">the forest hiker</span>
                        </h4>
                        <div className="card__detials">
                            <ul>
                                <li>7 days tours</li>
                                <li>Up to 40 people</li>
                                <li>6 tour guides</li>
                                <li>Sleep in provided tents</li>
                                <li>Defficalty: medium</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">only</p>
                                <p className="card__price-value">$497</p>
                            </div>
                            <a href="#popup" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </TourCol>

                <div className="row">
                    <TourCol>
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">the snow
                                    advantures</span>
                            </h4>
                            <div className="card__detials">
                                <ul>
                                    <li>5 days tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Defficalty: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">only</p>
                                    <p className="card__price-value">$897</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Book now!</a>
                            </div>
                        </div>
                    </TourCol>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--green">Discover all tours</a>
                </div>
            </div>
        </div>
    )
}

export default TourRow