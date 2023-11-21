import React from "react";
import "./Footer.css";

const Footer: React.FC = () =>{
    return(
    <div>
        <div data-testid="footer" className="footer-container">
            <div className="footer-heading">
                <div className="logo-container">
                    <span className="heading-text">warden</span>
                    <img className="logo" src="logo.png"></img>
                </div>
            </div>
            <div className="footer-about">
                <span className="section-title">Company</span>
                <a href="" className="footer-link">About</a>
                <a href="" className="footer-link">Showcase</a>
                <a href="" className="footer-link">Features</a>
                <a href="" className="footer-link">Security</a>
            </div>
            <div className="footer-about">
                <span className="section-title">Product</span>
                <a href=""className="footer-link">Pricing</a>
                <a href="" className="footer-link">Demo</a>
                <a href="" className="footer-link">Trial</a>
            </div>
            <div className="footer-about">
                <span className="section-title">Community</span>
                <a href="" className="footer-link">Customers</a>
                <a href="" className="footer-link">Book a Demo</a>
                <a href="" className="footer-link">Contact Us</a>
                <a href="" className="footer-link">Help</a>
            </div>
            <div className="footer-login">
                    <a href="" className="footer-link">Try Now</a>
                    <a href="" className="footer-link">Sign In</a>
                    <a href="" className="footer-link">Register</a>
                    <div className="socials-container">
                        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
            </div>
        </div>
        <div data-testid="copyright" className="copyright">
            <p>Copyright &copy; 2023 Warden Finance</p>
        </div>
    </div>);
}

export default Footer;