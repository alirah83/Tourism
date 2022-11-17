
import React from 'react'
import '../css/style.css';
import FooterImg from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture>
                    <source srcSet={FooterImg}
                        media="(max-width: 37.5em)" type="image/png"/>
                    <img alt="Full logo" className="footer__logo" src={FooterImg} />
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        built by <a href="#" className="footer__link">Ali Rahmanian</a> for his online course <a href="#"
                            className="footer__link">Advanced css and sass</a>. Copyright &copy; by Ali Rahmanian. you are
                        allowed to use this webpage for both personal and commercial use , but not to cliam it as your
                        design. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates ipsam nihil
                        fugiat vel in maiores cupiditate placeat! Nemo iusto quo dicta totam, nulla illum sapiente hic
                        voluptatibus consequatur suscipit?
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer