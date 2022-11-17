
import React from 'react'
import '../css/style.css';

class SectionBook extends React.Component{
    state = {
        username : "" ,
        email : "" ,
        size: "small"
    }

    onChange = e => {
        console.log(e.target.value);
        this.setState ({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log("onsubmit event being on fired"); 
    }
    render() {
        const {username,email,size} = this.state
        return (
            <section className="section-book" id="sectionBook">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form" onSubmit={this.onSubmit}>
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-scondary">
                                        start booking now
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name" required id="name" 
                                    value={username} onChange={this.onChange} name="username"/>
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" required id="email" 
                                    value={email} onChange={this.onChange} name="email"/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>
    
                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size" 
                                        checked={size === "small"} value="small" onChange={this.onChange}/>
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size" 
                                            value="large" checked={size === "large"} onChange={this.onChange}/>
                                        <label htmlFor="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>
    
                                <div className="form__group">
                                    <button className="btn btn--green form__button" type="submit" >Next step &rarr;</button>
    
                                </div>
                            </form>
                        </div>
    
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionBook