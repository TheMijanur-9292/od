/* 📂 Location: src/pages/PrivacyPolicy.jsx */
import React, { useEffect } from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import StorageIcon from '@mui/icons-material/Storage';
import CookieIcon from '@mui/icons-material/Cookie';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    // Scroll to top on page load
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: '2025'
    });

    return (
        <div className="privacy-page-wrapper">
            {/* ✅ Hero Header */}
            <div className="privacy-hero">
                <Container>
                    <div className="privacy-badge">DATA PROTECTION</div>
                    <Typography variant="h2" className="privacy-main-title">Privacy <span>Policy</span></Typography>
                    <Typography className="privacy-last-update">Effective Date: {currentDate}</Typography>
                </Container>
            </div>

            <Container className="privacy-container">
                <Paper className="privacy-paper-content">
                    {/* 1. Information Collection */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <StorageIcon className="privacy-icon" />
                            <Typography variant="h5">1. Information We Collect</Typography>
                        </div>
                        <Typography className="privacy-text">
                            At <strong>OfferDukan</strong>, we do not require users to create an account to browse coupons. However, we may collect non-personal information such as browser type, IP address, and pages visited to improve our service and user experience.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 2. Log Data */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <VisibilityOffIcon className="privacy-icon" />
                            <Typography variant="h5">2. Log Data</Typography>
                        </div>
                        <Typography className="privacy-text">
                            Like many site operators, we collect information that your browser sends whenever you visit our site. This may include information such as your computer's Internet Protocol ("IP") address, browser version, the time and date of your visit, and other statistics.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 3. Cookies Policy */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <CookieIcon className="privacy-icon" />
                            <Typography variant="h5">3. Cookies & Tracking</Typography>
                        </div>
                        <Typography className="privacy-text">
                            Cookies are files with a small amount of data. We use cookies to remember your preferences and to track affiliate clicks. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service might not function optimally.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 4. Third-Party Services */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <BusinessCenterIcon className="privacy-icon" />
                            <Typography variant="h5">4. Third-Party Advertising & Affiliate Links</Typography>
                        </div>
                        <Typography className="privacy-text">
                            OfferDukan participates in affiliate marketing programs. When you click on a "Get Coupon" button and are redirected to a store (like Amazon, Flipkart, or Nike), a third-party cookie may be placed on your browser to track the referral. We are not responsible for the privacy practices of these external stores.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 5. Data Security */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <SecurityIcon className="privacy-icon" />
                            <Typography variant="h5">5. Security of Data</Typography>
                        </div>
                        <Typography className="privacy-text">
                            The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 6. Children's Privacy */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <ShieldIcon className="privacy-icon" />
                            <Typography variant="h5">6. Children's Privacy</Typography>
                        </div>
                        <Typography className="privacy-text">
                            Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    {/* 7. Contact Us */}
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <ContactSupportIcon className="privacy-icon" />
                            <Typography variant="h5">7. Contact Information</Typography>
                        </div>
                        <Typography className="privacy-text">
                            If you have any questions about this Privacy Policy, please contact us:
                            <br /><br />
                            <strong>Email:</strong> privacy@offerdukan.in <br />
                            <strong>Website:</strong> www.offerdukan.in
                        </Typography>
                    </section>
                </Paper>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;