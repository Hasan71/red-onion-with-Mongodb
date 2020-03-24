import React from 'react';
import './FooterBottom.css';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                <div className="col-6">
                    <div className="copyright">
                    <p className="pt-3">&copy Mahmudul Hasan</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="footer-menu">
                        <ul className="d-flex">
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of uses</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBottom;