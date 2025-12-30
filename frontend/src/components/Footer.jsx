/* 📂 Location: src/components/Footer.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer-white">
            <div className="container">
                <div className="footer-grid">
                    
                    {/* Column 1: Brand Info */}
                    <div className="footer-col brand-info">
                        <h2 className="footer-logo-black">Offer<span>Dukan</span></h2>
                        <p className="footer-desc-black">
                            India's most trusted hub for verified coupons and daily deals. We help you save more on every purchase across 500+ top brands.
                        </p>
                        <div className="social-links-orange">
                            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Popular Categories */}
                    <div className="footer-col">
                        <h3 className="col-title-black">Categories</h3>
                        <ul className="footer-links-black">
                            <li><Link to="/category/fashion-&-apparel">Fashion & Apparel</Link></li>
                            <li><Link to="/category/electronics-&-gadgets">Electronics & Gadgets</Link></li>
                            <li><Link to="/category/food-&-dining-">Food & Dining</Link></li>
                            <li><Link to="/category/travel-&-hotels">Travel & Hotels</Link></li>
                            <li><Link to="/category/beauty-&-cosmetics">Beauty & Cosmetics</Link></li>
                            <li><Link to="/category/upi-&-recharge">UPI & Recharge</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company Links */}
                    <div className="footer-col">
                        <h3 className="col-title-black">Company</h3>
                        <ul className="footer-links-black">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/terms-&-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-&-policy">Privacy Policy</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-col contact-col">
                        <h3 className="col-title-black">Contact Us</h3>
                        <div className="contact-item-black">
                            <EmailIcon className="orange-icon" />
                            <span>support@offerdukan.in</span>
                        </div>
                        <div className="contact-item-black">
                            <PhoneIcon className="orange-icon" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="contact-item-black">
                            <LocationOnIcon className="orange-icon" />
                            <span>Kolkata, West Bengal, India</span>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom-light">
                    <p>&copy; 2025 <strong>OfferDukan</strong>. All Rights Reserved.</p>
                    <p className="founder-tag-black">Managed by <span>ConsKaptan</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;