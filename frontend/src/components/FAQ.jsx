import React from 'react';
import { 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: "What is OfferDukan and how does it work?",
            answer: "OfferDukan is a leading coupon and deal platform that provides verified discount codes and offers for top Indian and international brands. Simply search for your favorite store, copy the code, and paste it during checkout."
        },
        {
            id: 2,
            question: "Are the coupon codes on OfferDukan free to use?",
            answer: "Yes, absolutely! All the coupons and deals listed on OfferDukan are 100% free for everyone. We do not charge any fees from our users."
        },
        {
            id: 3,
            question: "Why is my coupon code not working?",
            answer: "Coupon codes may fail due to several reasons: it might be expired, not applicable to your selected items, or have a minimum order requirement. Always check the 'Deal Details' for specific terms."
        },
        {
            id: 4,
            question: "How often are the deals and coupons updated?",
            answer: "Our dedicated team and automated systems update deals in real-time. We verify hundreds of coupons every day to ensure you get working discounts for Amazon, Flipkart, Myntra, and more."
        },
        {
            id: 5,
            question: "How can I find coupons for a specific store?",
            answer: "You can use the search bar at the top of the page to find any store instantly, or browse through our 'Top Categories' and 'Top Brands' sections on the homepage."
        },
        {
            id: 6,
            question: "Do I need to create an account to use coupons?",
            answer: "No, you don't need an account to copy codes. However, creating an account helps you save your favorite stores and receive personalized alerts for new deals."
        }
    ];

    return (
        <section className="faq-section">
            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>Got questions? We have the answers you need.</p>
            </div>

            <div className="faq-wrapper">
                {faqData.map((item) => (
                    <Accordion key={item.id} className="faq-accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#ff4b2b' }} />}
                            aria-controls={`panel${item.id}-content`}
                            id={`panel${item.id}-header`}
                        >
                            <Typography className="faq-question">{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="faq-answer">
                            <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default FAQ;