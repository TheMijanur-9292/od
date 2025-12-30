/* 📂 Location: src/pages/AboutUs.jsx */
import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GppGoodIcon from '@mui/icons-material/GppGood';
import UpdateIcon from '@mui/icons-material/Update';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SavingsIcon from '@mui/icons-material/Savings';
import HubIcon from '@mui/icons-material/Hub';
import HandshakeIcon from '@mui/icons-material/Handshake';
import './AboutUs.css';

const AboutUs = () => {
    // Scroll to top on page load
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="about-modern-wrapper">
            {/* ✅ Hero Section */}
            <div className="about-hero-gradient">
                <Container>
                    <div className="hero-badge">THE SAVINGS REVOLUTION</div>
                    <Typography variant="h2" className="hero-main-title">Making Every Purchase <br/><span>More Affordable</span></Typography>
                    <Typography className="hero-desc">
                        OfferDukan is India's leading destination for genuine, hand-picked, and 100% verified coupon codes. 
                        We help millions of shoppers save money every single day.
                    </Typography>
                </Container>
            </div>

            <Container className="main-content-area">
                {/* ✅ Mission & Vision Section */}
                <Grid container spacing={5} className="story-section" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className="story-image-box">
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" alt="Online Shopping Savings" />
                            <div className="floating-stat">
                                <h3>500+</h3>
                                <p>Partner Brands</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" className="sub-title">Our Vision & Mission</Typography>
                        <Typography className="para-text">
                            Online shopping should be fun, not expensive. We realized that most coupon websites are filled with 
                            expired or fake codes that waste users' time. <strong>OfferDukan</strong> was born to solve this problem.
                        </Typography>
                        <Typography className="para-text">
                            Our mission is to create a transparent ecosystem where users can find working deals within seconds. 
                            We aim to be the most reliable bridge between premium global brands and smart Indian shoppers.
                        </Typography>
                        
                        <div className="feature-list-mini">
                            <div className="mini-item">
                                <RocketLaunchIcon className="mini-icon" />
                                <div>
                                    <h4>Fast & Reliable</h4>
                                    <p>Experience a lightning-fast interface designed for quick access to top deals.</p>
                                </div>
                            </div>
                            <div className="mini-item">
                                <EmojiObjectsIcon className="mini-icon" />
                                <div>
                                    <h4>Smart Filtering</h4>
                                    <p>Our intelligent system categorizes deals to help you find exactly what you need.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* ✅ Why Choose OfferDukan? (Detailed Grid) */}
                <div className="why-us-grid-section">
                    <Typography variant="h3" className="section-heading center">Why Millions Trust Us?</Typography>
                    <Grid container spacing={3}>
                        {[
                            { icon: <GppGoodIcon />, title: "100% Verified Codes", desc: "Every single coupon on our platform is manually tested by our team to ensure it works perfectly at checkout." },
                            { icon: <UpdateIcon />, title: "Real-time Updates", desc: "We update our database every hour, bringing you the latest festive sales, flash deals, and exclusive bank offers." },
                            { icon: <SavingsIcon />, title: "Maximum Savings", desc: "We negotiate directly with top brands to bring you exclusive promo codes that you won't find anywhere else." },
                            { icon: <HubIcon />, title: "All-in-one Platform", desc: "From Fashion and Electronics to Food and Flight bookings—we cover every category of your lifestyle." },
                            { icon: <SupportAgentIcon />, title: "Dedicated Support", desc: "Faced an issue with a deal? Our support team is always ready to assist you through mail and social channels." },
                            { icon: <HandshakeIcon />, title: "Brand Partnerships", desc: "We are proud partners with 300+ major Indian and International brands including Amazon, Nike, and Dell." }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper className="info-card-modern">
                                    <div className="icon-wrapper-circle">{item.icon}</div>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2">{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </div>

                {/* ✅ How It Works Section */}
                <div className="how-it-works-banner">
                    <Typography variant="h4" className="section-heading">How Does It Work?</Typography>
                    <Grid container spacing={4} className="steps-row">
                        <Grid item xs={12} md={4}>
                            <div className="step-box">
                                <span className="step-num">01</span>
                                <h4>Find Your Brand</h4>
                                <p>Search for your favorite store or browse through our 8+ premium categories.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="step-box">
                                <span className="step-num">02</span>
                                <h4>Copy The Code</h4>
                                <p>Click on the "Get Coupon" button to reveal and automatically copy the promo code.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="step-box">
                                <span className="step-num">03</span>
                                <h4>Shop & Save</h4>
                                <p>Paste the code on the store's checkout page and watch the price drop instantly.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;