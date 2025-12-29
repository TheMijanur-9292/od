import React from 'react';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Newsletter Subscription Bar */}
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h3>Join 10,000+ Smart Shoppers!</h3>
                    <p>Subscribe to get the best working coupons directly in your inbox.</p>
                </div>
                <div className="newsletter-input-box">
                    <input type="email" placeholder="Enter your email address" />
                    <Button className="subscribe-btn" variant="contained">Subscribe</Button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main">
                {/* Column 1: About */}
                <div className="footer-col">
                    <h4>OfferDukan</h4>
                    <p>
                        OfferDukan is India's leading platform for verified coupons, promo codes, and daily deals. We help you save money on 500+ premium brands like Amazon, Flipkart, Myntra, and more.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FacebookIcon fontSize="small"/></a>
                        <a href="#" className="social-icon"><TwitterIcon fontSize="small"/></a>
                        <a href="#" className="social-icon"><InstagramIcon fontSize="small"/></a>
                        <a href="#" className="social-icon"><LinkedInIcon fontSize="small"/></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Column 3: Categories */}
                <div className="footer-col">
                    <h4>Top Categories</h4>
                    <ul>
                        <li><a href="#">Fashion & Apparel</a></li>
                        <li><a href="#">Electronics & Gadgets</a></li>
                        <li><a href="#">Food & Dining</a></li>
                        <li><a href="#">Travel & Hotels</a></li>
                        <li><a href="#">Beauty & Cosmetics</a></li>
                    </ul>
                </div>

                {/* Column 4: Popular Stores */}
                <div className="footer-col">
                    <h4>Popular Stores</h4>
                    <ul>
                        <li><a href="#">Amazon Coupons</a></li>
                        <li><a href="#">Flipkart Deals</a></li>
                        <li><a href="#">Myntra Promo Codes</a></li>
                        <li><a href="#">Zomato Offers</a></li>
                        <li><a href="#">Samsung Discounts</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2025 OfferDukan. Designed with ❤️ by ConsKaptan. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;