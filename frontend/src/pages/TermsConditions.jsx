/* 📂 Location: src/pages/TermsConditions.jsx */
import React, { useEffect } from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import UpdateIcon from '@mui/icons-material/Update';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PolicyIcon from '@mui/icons-material/Policy';
import LinkIcon from '@mui/icons-material/Link';
import './TermsConditions.css';

const TermsConditions = () => {
    // Page load hole upore scroll korbe
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // ✅ Fix: year numeric deya hoyeche crash bondho korar jonno
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric' 
    });

    return (
        <div className="terms-page-wrapper">
            <div className="terms-hero">
                <Container>
                    <div className="terms-badge">LEGAL INFORMATION</div>
                    <Typography variant="h2" className="terms-main-title">Terms & <span>Conditions</span></Typography>
                    <Typography className="terms-last-update">Last Updated: {currentDate}</Typography>
                </Container>
            </div>

            <Container className="terms-container">
                <Paper className="terms-paper-content">
                    <section className="terms-section">
                        <div className="section-header">
                            <DescriptionIcon className="section-icon" />
                            <Typography variant="h5">1. Acceptance of Terms</Typography>
                        </div>
                        <Typography className="terms-text">
                            By accessing and using <strong>OfferDukan</strong>, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    <section className="terms-section">
                        <div className="section-header">
                            <AssignmentLateIcon className="section-icon" />
                            <Typography variant="h5">2. Accuracy of Coupons & Deals</Typography>
                        </div>
                        <Typography className="terms-text">
                            OfferDukan provides coupon codes as a free service. While we strive for 100% verified codes, we do not guarantee their validity. Deals may expire without notice.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    <section className="terms-section">
                        <div className="section-header">
                            <LinkIcon className="section-icon" />
                            <Typography variant="h5">3. Third-Party Links</Typography>
                        </div>
                        <Typography className="terms-text">
                            Our service contains links to third-party stores. OfferDukan assumes no responsibility for the content or practices of any third-party websites.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    <section className="terms-section">
                        <div className="section-header">
                            <GppMaybeIcon className="section-icon" />
                            <Typography variant="h5">4. Limitation of Liability</Typography>
                        </div>
                        <Typography className="terms-text">
                            OfferDukan is not liable for any damages resulting from the use of coupons. Transactions are between you and the respective stores.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    <section className="terms-section">
                        <div className="section-header">
                            <HelpOutlineIcon className="section-icon" />
                            <Typography variant="h5">5. Questions & Contact</Typography>
                        </div>
                        <Typography className="terms-text">
                            Questions about these Terms? Contact us at: <strong>support@offerdukan.in</strong>
                        </Typography>
                    </section>
                </Paper>
            </Container>
        </div>
    );
};

export default TermsConditions;