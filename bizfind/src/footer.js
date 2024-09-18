import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>
                        We help businesses connect with customers. Our platform provides easy access 
                        for users to find reliable local businesses quickly and efficiently.
                    </p>
                </div>

                <div className="footer-section links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:contact@businessfinder.com">contact@businessfinder.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Business Finder | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
