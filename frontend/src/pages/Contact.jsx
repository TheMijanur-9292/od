/* 📂 Location: src/pages/Contact.jsx */
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
    };

    return (
        <div className="contact-page-main">
            {/* Contact Hero Section */}
            <div className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-grid">
                    {/* Left Side: Contact Information */}
                    <div className="contact-info-section">
                        <div className="info-card">
                            <h2>Get In Touch</h2>
                            <p>Reach out to us through any of these channels. Our team is always ready to help you save more.</p>
                            
                            <div className="info-item-list">
                                <div className="info-item">
                                    <div className="icon-box"><EmailIcon /></div>
                                    <div className="text-box">
                                        <span>Email Us</span>
                                        <p>support@offerdukan.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><PhoneIcon /></div>
                                    <div className="text-box">
                                        <span>Call Us</span>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><LocationOnIcon /></div>
                                    <div className="text-box">
                                        <span>Visit Us</span>
                                        <p>123 Coupon Street, Tech Park, Kolkata, West Bengal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links-section">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#"><FacebookIcon /></a>
                                    <a href="#"><TwitterIcon /></a>
                                    <a href="#"><InstagramIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-section">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="What is this about?" required />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea rows="5" placeholder="Type your message here..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message <SendIcon className="send-btn-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;