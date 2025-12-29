import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './FlashSale.css';

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState(3600); 

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
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
        <section className="flash-sale-strip">
            <div className="flash-wrapper-compact">
                
                {/* Left Side: Content */}
                <div className="flash-content">
                    <div className="flash-tag-small">
                        <FlashOnIcon style={{ fontSize: '18px', marginRight: '5px' }} /> LIVE
                    </div>
                    <div className="flash-text-main">
                        Flash Sale: <span>80% OFF</span> on Electronics & Fashion! 
                        <span className="flash-subtitle-hide" style={{ fontWeight: 'normal', marginLeft: '10px', opacity: 0.8 }}>
                            Ends Soon!
                        </span>
                    </div>
                </div>

                {/* Middle: Timer */}
                <div className="timer-compact">
                    <span style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold' }}>Ending In:</span>
                    <div className="timer-numbers">{formatTime(timeLeft)}</div>
                </div>

                {/* Right Side: Action */}
                <div className="flash-action">
                    <Button variant="contained" className="grab-btn-compact">
                        Grab Deal
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default FlashSale;