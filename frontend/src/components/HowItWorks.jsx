import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; // Coupon Icon
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Search Store",
            desc: "Find your favorite brand instantly.",
            icon: <SearchIcon style={{ fontSize: '35px' }} />
        },
        {
            id: 2,
            title: "Select Coupon",
            desc: "Choose the best discount offer.",
            icon: <ConfirmationNumberIcon style={{ fontSize: '35px' }} />
        },
        {
            id: 3,
            title: "Get Code",
            desc: "Copy the code with one click.",
            icon: <ContentCopyIcon style={{ fontSize: '35px' }} />
        },
        {
            id: 4,
            title: "Shop & Save",
            desc: "Paste at checkout & enjoy savings!",
            icon: <ShoppingBagIcon style={{ fontSize: '35px' }} />
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="how-header">
                <h2>How It Works?</h2>
                <p>Start saving in 4 simple steps</p>
            </div>

            <div className="steps-wrapper">
                {steps.map((step) => (
                    <div className="step-card" key={step.id}>
                        <div className="icon-circle">
                            {step.icon}
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;