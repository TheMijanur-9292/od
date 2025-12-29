import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Navigation রিমুভ করা হয়েছে
import { Avatar, Rating } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './UserReviews.css';

const UserReviews = () => {
    const reviewsData = [
        { name: "Asis Mondal", comment: "OfferDukan is the best! Saved 500 on Amazon.", rating: 5 },
        { name: "Sneha Sardar", comment: "Working coupons every time. Love the Myntra deals.", rating: 4.5 },
        { name: "Nandita Banerjee", comment: "Got 50% off on my flight. Incredible savings!", rating: 5 },
        { name: "Amit Chatterjee", comment: "Food coupons are always updated. Great for Zomato.", rating: 4 },
        { name: "Rajesh Dutta", comment: "Trustworthy and verified codes. Highly recommended!", rating: 5 },
        { name: "Sunita Malhotra", comment: "Found hidden Samsung deals here. Simply amazing!", rating: 4.5 },
        { name: "Priya Sharma", comment: "Fastest way to get working coupon codes. 5 stars!", rating: 5 },
        { name: "Vikram Singh", comment: "Saved 5000 on my new iPhone. Unbelievable deals!", rating: 5 },
        { name: "Asis Mondal", comment: "OfferDukan is the best! Saved 500 on Amazon.", rating: 5 },
        { name: "Sneha Sardar", comment: "Working coupons every time. Love the Myntra deals.", rating: 4.5 },
        { name: "Nandita Banerjee", comment: "Got 50% off on my flight. Incredible savings!", rating: 5 },
        { name: "Amit Chatterjee", comment: "Food coupons are always updated. Great for Zomato.", rating: 4 },
        // ... আপনি চাইলে আরও ৩০টি নাম এভাবেই যোগ করতে পারেন
    ];

    const getInitials = (name) => {
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    return (
        <section className="reviews-section">
            <div className="reviews-header">
                <h2>Our Users Love Us</h2>
                <p>Verified reviews from our happy shoppers</p>
            </div>

            <Swiper
                slidesPerView={2} /* ডিফল্ট মোবাইলের জন্য ২ */
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 15 }, /* পিসিতে ৪টি */
                }}
                modules={[Autoplay, Pagination]}
                className="reviews-swiper"
            >
                {reviewsData.map((rev, index) => (
                    <SwiperSlide key={index}>
                        <div className="review-card">
                            <p className="review-comment">"{rev.comment}"</p>
                            
                            <div className="user-profile-box">
                                <Avatar className="user-avatar">{getInitials(rev.name)}</Avatar>
                                <div className="user-meta">
                                    <h4>{rev.name.split(' ')[0]} {rev.name.split(' ')[1].charAt(0)}. <CheckCircleIcon className="verified-tick" /></h4>
                                    <Rating value={rev.rating} precision={0.5} readOnly size="small" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default UserReviews;