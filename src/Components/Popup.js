
import React from 'react'
import '../css/style.css';
import PopupImg1 from '../img/nat-8.jpg';
import PopupImg2 from '../img/nat-9.jpg';

const Popup = () => {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={PopupImg1} alt="Tour photo" className="popup__img" />
                    <img src={PopupImg2} alt="Tour photo" className="popup__img" />
                </div>

                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-scondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read these terms befor booking</h3>
                    <p className="popup__text">
                        aliquid, facere expedita eum sint praesentium atque rem sed enim laboriosam deleniti amet distinctio, omnis natus reiciendis. Distinctio!
                        aliquid, facere expedita eum sint praesentium atque rem sed enim laboriosam deleniti amet distinctio, omnis natus reiciendis. Distinctio!
                        Quos iusto quaerat nobis aliquid, facere expedita eum sint praesentium atque rem sed enim laboriosam deleniti amet distinctio, omnis natus reiciendis. Distinctio!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto quaerat nobis aliquid, facere expedita eum sint praesentium atque rem sed enim laboriosam deleniti amet distinctio, omnis natus reiciendis. Distinctio!
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    )
}

export default Popup