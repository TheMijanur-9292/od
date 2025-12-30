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
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // ✅ Fix: year numeric deya hoyeche crash bondho korar jonno
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="privacy-page-wrapper">
            <div className="privacy-hero">
                <Container>
                    <div className="privacy-badge">DATA PROTECTION</div>
                    <Typography variant="h2" className="privacy-main-title">Privacy <span>Policy</span></Typography>
                    <Typography className="privacy-last-update">Effective Date: {currentDate}</Typography>
                </Container>
            </div>

            <Container className="privacy-container">
                <Paper className="privacy-paper-content">
                    <section className="privacy-section">
                        <div className="privacy-header">
                            <StorageIcon className="privacy-icon" />
                            <Typography variant="h5">1. Information We Collect</Typography>
                        </div>
                        <Typography className="privacy-text">
                            OfferDukan does not require accounts. We may collect non-personal data like browser type or IP address to improve our service.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    <section className="privacy-section">
                        <div className="privacy-header">
                            <CookieIcon className="privacy-icon" />
                            <Typography variant="h5">2. Cookies Policy</Typography>
                        </div>
                        <Typography className="privacy-text">
                            We use cookies to remember preferences and track affiliate clicks. You can disable cookies in your browser settings.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    <section className="privacy-section">
                        <div className="privacy-header">
                            <BusinessCenterIcon className="privacy-icon" />
                            <Typography variant="h5">3. Affiliate Links</Typography>
                        </div>
                        <Typography className="privacy-text">
                            When you click "Get Coupon", third-party cookies may track the referral. We are not responsible for store privacy practices.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    <section className="privacy-section">
                        <div className="privacy-header">
                            <SecurityIcon className="privacy-icon" />
                            <Typography variant="h5">4. Data Security</Typography>
                        </div>
                        <Typography className="privacy-text">
                            We take security seriously, but remember that no internet transmission is 100% secure.
                        </Typography>
                    </section>

                    <Divider className="privacy-divider" />

                    <section className="privacy-section">
                        <div className="privacy-header">
                            <ContactSupportIcon className="privacy-icon" />
                            <Typography variant="h5">5. Contact Info</Typography>
                        </div>
                        <Typography className="privacy-text">
                            Privacy concerns? Email us: <strong>privacy@offerdukan.in</strong>
                        </Typography>
                    </section>
                </Paper>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;