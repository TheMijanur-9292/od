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
    // Scroll to top on page load
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: '2025' // Based on current context
    });

    return (
        <div className="terms-page-wrapper">
            {/* ✅ Hero Header */}
            <div className="terms-hero">
                <Container>
                    <div className="terms-badge">LEGAL INFORMATION</div>
                    <Typography variant="h2" className="terms-main-title">Terms & <span>Conditions</span></Typography>
                    <Typography className="terms-last-update">Last Updated: {currentDate}</Typography>
                </Container>
            </div>

            <Container className="terms-container">
                <Paper className="terms-paper-content">
                    {/* 1. Introduction */}
                    <section className="terms-section">
                        <div className="section-header">
                            <DescriptionIcon className="section-icon" />
                            <Typography variant="h5">1. Acceptance of Terms</Typography>
                        </div>
                        <Typography className="terms-text">
                            By accessing and using <strong>OfferDukan</strong>, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our website. These terms apply to all visitors, users, and others who access the service.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 2. Accuracy of Coupons */}
                    <section className="terms-section">
                        <div className="section-header">
                            <AssignmentLateIcon className="section-icon" />
                            <Typography variant="h5">2. Accuracy of Coupons & Deals</Typography>
                        </div>
                        <Typography className="terms-text">
                            OfferDukan provides coupon codes and promotional deals as a free service. While we strive to provide 100% verified and working codes, we do not guarantee the validity, accuracy, or availability of any coupon or offer. Deals may expire or be modified by the respective brands without prior notice.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 3. Third-Party Links */}
                    <section className="terms-section">
                        <div className="section-header">
                            <LinkIcon className="section-icon" />
                            <Typography variant="h5">3. Third-Party Links & Stores</Typography>
                        </div>
                        <Typography className="terms-text">
                            Our service contains links to third-party websites (e.g., Amazon, Nike, Flipkart). OfferDukan has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and conditions of any third-party site you visit.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 4. Limitation of Liability */}
                    <section className="terms-section">
                        <div className="section-header">
                            <GppMaybeIcon className="section-icon" />
                            <Typography variant="h5">4. Limitation of Liability</Typography>
                        </div>
                        <Typography className="terms-text">
                            In no event shall OfferDukan or its team be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the coupons provided. Any purchase made on a third-party store is a transaction between you and that store.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 5. Intellectual Property */}
                    <section className="terms-section">
                        <div className="section-header">
                            <PolicyIcon className="section-icon" />
                            <Typography variant="h5">5. Intellectual Property</Typography>
                        </div>
                        <Typography className="terms-text">
                            All content, logos, designs, and graphics on this website (excluding brand partner logos) are the intellectual property of <strong>OfferDukan</strong>. Unauthorized use or reproduction of this material is strictly prohibited.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 6. Changes to Terms */}
                    <section className="terms-section">
                        <div className="section-header">
                            <UpdateIcon className="section-icon" />
                            <Typography variant="h5">6. Changes to Terms</Typography>
                        </div>
                        <Typography className="terms-text">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check this page periodically for changes.
                        </Typography>
                    </section>

                    <Divider className="terms-divider" />

                    {/* 7. Contact Info */}
                    <section className="terms-section">
                        <div className="section-header">
                            <HelpOutlineIcon className="section-icon" />
                            <Typography variant="h5">7. Questions & Contact</Typography>
                        </div>
                        <Typography className="terms-text">
                            If you have any questions about these Terms & Conditions, please contact us at:
                            <br /><br />
                            <strong>Email:</strong> support@offerdukan.in <br />
                            <strong>Address:</strong> Kolkata, West Bengal, India
                        </Typography>
                    </section>
                </Paper>
            </Container>
        </div>
    );
};

export default TermsConditions;