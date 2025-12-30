/* 📂 Location: src/pages/Blog.jsx */
import React, { useState, useMemo } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList'; // হ্যামবার্গার আইকন
import CloseIcon from '@mui/icons-material/Close'; // ক্লোজ আইকন
import './Blog.css';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // মোবাইল মেনু স্টেট

    const categories = ["All", "Shopping Tips", "Brand Reviews", "Coupon Guides", "Saving Hacks"];

    // ১৫টি ব্লগের ডাটা (থাম্বনেইল ইমেজ সহ)
    const blogData = useMemo(() => [
        { id: 1, category: "Shopping Tips", title: "How to Save Maximum on Amazon Great Indian Festival", excerpt: "Learn the secret tips and tricks to get the best deals and bank offers during the biggest sale.", date: "Dec 25, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=60" },
        { id: 2, category: "Brand Reviews", title: "Is Myntra Insider Program Worth It? A Detailed Review", excerpt: "We analyzed the benefits of Myntra Insider program to see if the points are actually useful.", date: "Dec 22, 2025", author: "Mijanur", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=60" },
        { id: 3, category: "Coupon Guides", title: "Step-by-Step Guide: How to Use Promo Codes on Flipkart", excerpt: "Finding the coupon box can be tricky. Here is a simple guide to applying your codes successfully.", date: "Dec 20, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=60" },
        { id: 4, category: "Saving Hacks", title: "Top 5 Cashback Apps in India You Should Use in 2026", excerpt: "Stacking coupons with cashback is the ultimate saving hack. Here are the best apps.", date: "Dec 18, 2025", author: "Support", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e10?auto=format&fit=crop&w=800&q=60" },
        { id: 5, category: "Brand Reviews", title: "Samsung S-Series vs Apple iPhone: Which Brand Offers Better Discounts?", excerpt: "Comparing the seasonal discount patterns of the two tech giants to help you decide.", date: "Dec 15, 2025", author: "Mijanur", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=60" },
        { id: 6, category: "Shopping Tips", title: "Best Practices for Safe Online Shopping This New Year", excerpt: "Don't fall for fake deals. Follow these safety tips to keep your data and money secure.", date: "Dec 10, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=60" },
        { id: 7, category: "Coupon Guides", title: "How to Find Hidden Coupons on Ajio and Tata Cliq", excerpt: "Most users miss out on bank-specific coupons. We show you exactly where to look for them.", date: "Dec 08, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=60" },
        { id: 8, category: "Saving Hacks", title: "Credit Card Reward Points: How to Convert Them into Shopping Vouchers", excerpt: "Your accumulated points could pay for your next purchase. Learn how to redeem them.", date: "Dec 05, 2025", author: "Support", image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=60" },
        { id: 9, category: "Shopping Tips", title: "Why You Should Always Leave Items in Your Cart for 24 Hours", excerpt: "This classic psychological hack can often trigger an extra discount email from the brand.", date: "Dec 02, 2025", author: "Mijanur", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=60" },
        { id: 10, category: "Brand Reviews", title: "Boat vs Noise: Which Brand Offers More VFM During Flash Sales?", excerpt: "A comparison of audio quality and discount depth during lightning deals for budget users.", date: "Nov 30, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60" },
        { id: 11, category: "Saving Hacks", title: "Student Discounts in India: How to Get Verified on Unidays", excerpt: "Students can save up to 20% extra on Apple, Nike, and more. Here is the process.", date: "Nov 28, 2025", author: "Support", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=60" },
        { id: 12, category: "Coupon Guides", title: "The Ultimate Guide to Zomato and Swiggy Promo Codes", excerpt: "Stop paying full price for food. Use these ongoing codes for delivery and discounts.", date: "Nov 25, 2025", author: "Mijanur", image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&w=800&q=60" },
        { id: 13, category: "Shopping Tips", title: "Morning vs Night: When is the Best Time to Buy Flight Tickets?", excerpt: "Data shows that booking at specific hours can save you thousands on domestic flights.", date: "Nov 22, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?auto=format&fit=crop&w=800&q=60" },
        { id: 14, category: "Brand Reviews", title: "Is Lenskart Gold Membership Actually Profitable?", excerpt: "Breaking down the 'Buy 1 Get 1' promise to see the real savings for the consumer.", date: "Nov 20, 2025", author: "Support", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=60" },
        { id: 15, category: "Saving Hacks", title: "Buying Refurbished Gadgets: Top 3 Websites You Can Trust", excerpt: "Get flagship phones at half price. We review Cashify, Amazon Renewed, and 2GUD.", date: "Nov 15, 2025", author: "Admin", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60" }
    ], []);

    const filteredBlogs = useMemo(() => {
        return activeCategory === "All" 
            ? blogData 
            : blogData.filter(blog => blog.category === activeCategory);
    }, [activeCategory, blogData]);

    return (
        <div className="blog-page-main">
            <div className="blog-hero">
                <div className="container">
                    <h1>OfferDukan Blog</h1>
                    <p>Smart shopping guides and saving hacks to help you save more every day.</p>
                </div>
            </div>

            <div className="container">
                {/* Hamburger Filter Section */}
                <div className="blog-filter-section">
                    <div className="blog-filter-header">
                        <span className="blog-f-text">Explore Categories</span>
                        <button className="blog-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                        </button>
                    </div>
                    
                    <div className={`blog-cat-list ${isMobileMenuOpen ? 'show' : ''}`}>
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`blog-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setIsMobileMenuOpen(false); // ক্লিক করলে মেনু বন্ধ হবে
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="blog-grid">
                    {filteredBlogs.map(blog => (
                        <article className="blog-card" key={blog.id}>
                            <div className="blog-card-image">
                                <img src={blog.image} alt={blog.title} />
                                <span className="blog-badge">{blog.category}</span>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span><CalendarMonthIcon className="meta-icon" /> {blog.date}</span>
                                    <span><PersonIcon className="meta-icon" /> {blog.author}</span>
                                </div>
                                <h2>{blog.title}</h2>
                                <p>{blog.excerpt}</p>
                                <button className="read-more-btn">
                                    Read Article <ChevronRightIcon />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;