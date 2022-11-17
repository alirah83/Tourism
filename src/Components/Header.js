    
import React from 'react'
import '../css/style.css';
import headerimg from '../img/logo.png'
    
const Header = (props) =>{
    return(
        <header className="header">
            <div className="header__logo-box">
                <img src={headerimg} alt="logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#sectionTours" className="btn1 btn1--white btn1--animated">discover our tour</a>
            </div>
        </header>
    )
    
}

export default Header
