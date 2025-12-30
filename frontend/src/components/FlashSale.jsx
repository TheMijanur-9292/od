/* 📂 Location: src/components/FlashSale.jsx */
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './FlashSale.css';

const FlashSale = () => {
    const navigate = useNavigate();
    const FIVE_HOURS_IN_MS = 5 * 60 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        // LocalStorage থেকে এন্ড টাইম চেক করা
        let endTime = localStorage.getItem('flashSaleEndTime');
        const now = new Date().getTime();

        if (!endTime || now > parseInt(endTime)) {
            // যদি এন্ড টাইম না থাকে বা পার হয়ে যায়, তবে নতুন ৫ ঘণ্টা সেট করা
            endTime = now + FIVE_HOURS_IN_MS;
            localStorage.setItem('flashSaleEndTime', endTime.toString());
        }

        const calculateTimeLeft = () => {
            const difference = parseInt(endTime) - new Date().getTime();
            if (difference <= 0) {
                // জিরো হয়ে গেলে আবার ৫ ঘণ্টা শুরু হবে
                const newEndTime = new Date().getTime() + FIVE_HOURS_IN_MS;
                localStorage.setItem('flashSaleEndTime', newEndTime.toString());
                return Math.floor(FIVE_HOURS_IN_MS / 1000);
            }
            return Math.floor(difference / 1000);
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : calculateTimeLeft()));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    };

    return (
        <section className="flash-sale-compact-strip">
            <div className="flash-wrapper-minimal">
                
                {/* Left: Combined Text & Timer */}
                <div className="flash-main-content">
                    <div className="live-status-row">
                        <span className="green-dot"></span>
                        <span className="live-text">Live Now</span>
                    </div>
                    <div className="flash-promo-text">
                        Flash Sale: <span>Upto 80% OFF</span>
                    </div>
                    <div className="flash-timer-simple">
                        Ending In: <span className="timer-val">{formatTime(timeLeft)}</span>
                    </div>
                </div>

                {/* Right: Action Button */}
                <div className="flash-action-minimal">
                    <Button 
                        variant="contained" 
                        className="shop-now-btn"
                        onClick={() => navigate('/todays-deals')}
                    >
                        Shop Now
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default FlashSale;