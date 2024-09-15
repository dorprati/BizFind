import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>
                        We help businesses connect with customers. Our goal is to provide an easy platform for people to find reliable businesses in their area.
                    </p>
                </div>

                <div className="footer-section links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: contact@businessfinder.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Business Finder | All Rights Resevered
            </div>
        </footer>
    );
};

export default Footer;