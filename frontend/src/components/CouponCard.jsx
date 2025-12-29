import React from 'react';
import { Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import './CouponCard.css';

const CouponCard = ({ coupon }) => {
    return (
        <div className="material-coupon-card">
            {/* Header: লোগো এবং পাশে ভেরিফায়েড ও ব্র্যান্ড নেম (উপরে-নিচে) */}
            <div className="card-header">
                <div className="brand-logo-container">
                    <img src={coupon.logo} alt={coupon.brand} />
                </div>
                
                <div className="brand-info-stack">
                    <div className="verified-badge">
                        <VerifiedIcon style={{ fontSize: '10px', marginRight: '2px' }} />
                        Verified
                    </div>
                    {/* ব্র্যান্ড নেম এখন ভেরিফায়েড ব্যাজের নিচে */}
                    <span className="brand-name">{coupon.brand}</span>
                </div>
            </div>

            <div className="card-body">
                <span className="coupon-category">{coupon.category}</span>
                <h3 className="coupon-title">{coupon.title}</h3>
                {/* ডেসক্রিপশন শুধু এক লাইনে থাকবে */}
                <p className="coupon-desc">{coupon.description}</p>
            </div>

            <div className="card-footer">
                <Button variant="contained" className="get-deal-btn" fullWidth>
                    Get Coupon
                </Button>
            </div>
        </div>
    );
};

export default CouponCard;