import React, { useState, useEffect } from 'react';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import PaidIcon from '@mui/icons-material/Paid';
import './ImpactStats.css';

const Counter = ({ endValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(endValue.replace(/,/g, '').replace('+', ''));
        if (start === end) return;

        let timer = setInterval(() => {
            start += Math.ceil(end / 100);
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [endValue, duration]);

    return <span>{count.toLocaleString()}{endValue.includes('+') ? '+' : ''}</span>;
};

const ImpactStats = () => {
    const statsData = [
        { id: 1, label: "Active Coupons", value: "25000+", icon: <ConfirmationNumberIcon sx={{ fontSize: 40 }} /> },
        { id: 2, label: "Happy Users", value: "10,000+", icon: <PeopleIcon sx={{ fontSize: 40 }} /> },
        { id: 3, label: "Premium Stores", value: "500+", icon: <StoreIcon sx={{ fontSize: 40 }} /> },
        { id: 4, label: "Money Saved", value: "1,000,000+", icon: <PaidIcon sx={{ fontSize: 40 }} /> }
    ];

    return (
        <section className="stats-section">
            {/* Title and Subtitle Section */}
            <div className="stats-header">
                <h2 className="stats-title">Our Saving Impact</h2>
                <p className="stats-subtitle">Helping thousands of shoppers save big every single day across top global brands.</p>
            </div>

            <div className="stats-wrapper">
                {statsData.map((stat) => (
                    <div className="stat-card" key={stat.id}>
                        <div className="stat-icon">{stat.icon}</div>
                        <span className="stat-number">
                            <Counter endValue={stat.value} />
                        </span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImpactStats;