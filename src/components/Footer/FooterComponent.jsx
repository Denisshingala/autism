import React from 'react'
import './Footer.css';
import logoPath from '../../images/logo.png';

const FooterComponent = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-col">
                    <img src={logoPath} className='img-fluid footer-logo-img' alt="autism logo" />
                    <h6>Join with us to support AutsiLearn</h6>
                </div>
                <div className="footer-col">
                    <h4>Social</h4>
                    <ul>
                        <li><i class="bi bi-instagram mx-1"></i> Instagram</li>
                        <li><i class="bi bi-twitter mx-1"></i> Twitter</li>
                        <li><i class="bi bi-facebook mx-1"></i> Facebook</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Support</h4>
                    <ul>
                        <li>Privacy and Policy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterComponent