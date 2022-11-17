
import React from 'react'
import '../css/style.css';

class Navigation extends React.Component {
    
    state = {
        display:"none",
        checked : false 
    }
    
    onClick = (e) => {
        this.setState({
            display:"block",
            checked: !this.state.checked
        })
    }


    render() {
  
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" 
                checked={this.state.checked} onChange={this.onClick}/>
                
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background" style={{display:this.state.display}}>&nbsp;</div>
                <nav className="navigation__nav" style={{display:this.state.display}}>
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#about-us" className="navigation__link" onClick={this.onClick} ><span>01</span>About us</a></li>
                        <li className="navigation__item"><a href="#sectionFeatures" className="navigation__link" onClick={this.onClick}><span>02</span>Your benfits</a></li>
                        <li className="navigation__item"><a href="#sectionTours" className="navigation__link" onClick={this.onClick}><span>03</span>Popular tours</a></li>
                        <li className="navigation__item"><a href="#sectionStories" className="navigation__link" onClick={this.onClick}><span>04</span>Stories</a></li>
                        <li className="navigation__item"><a href="#sectionBook" className="navigation__link" onClick={this.onClick}><span>05</span>Book now</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navigation