import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CouponCard from './CouponCard';
import './TrendingCoupons.css';

const TrendingCoupons = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ["All", "Fashion", "Electronics", "Food", "Travel & Hotels", "Beauty & Cosmetics", "Home & Furniture", "Gifts", "UPI & Recharge"];

    const allCoupons = [
        { 
            id: 1, 
            brand: "Amazon", 
            title: "Flat 50% OFF on Electronics & Gadgets", 
            description: "Get huge discounts on top electronic brands during the great sale.",
            category: "Electronics", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        },
        { 
            id: 2, 
            brand: "Nike", 
            title: "Up to 40% OFF on Running Shoes", 
            description: "Grab the latest Nike collection with amazing discounts. Limited time offer.",
            category: "Fashion", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" 
        },
        { 
            id: 3, 
            brand: "Domino's", 
            title: "Flat ₹100 OFF on Orders Above ₹500", 
            description: "Order your favorite pizzas and get instant discount on checkout.",
            category: "Food", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg" 
        },
        { 
            id: 4, 
            brand: "Adidas", 
            title: "Buy 1 Get 1 Free on Select Apparel", 
            description: "Best deal for sport lovers. Buy one and get the second item absolutely free.",
            category: "Fashion", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
        },
        { 
            id: 5, 
            brand: "Samsung", 
            title: "Exchange Offer: Up to ₹10,000 OFF", 
            description: "Exchange your old phone and get the best price for your new Samsung device.",
            category: "Electronics", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" 
        },
        { 
            id: 6, 
            brand: "Zomato", 
            title: "60% OFF on Your First Order", 
            description: "New to Zomato? Enjoy 60% discount on your first three food deliveries.",
            category: "Food", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" 
        }
    ];

    // Filter Logic
    const filteredCoupons = activeCategory === 'All' 
        ? allCoupons 
        : allCoupons.filter(coupon => coupon.category === activeCategory);

    return (
        <section className="trending-section">
            <div className="section-header">
                <div className="header-left">
                    <h2>Trending Coupons</h2>
                </div>

                {/* Desktop View: Full Category Tabs */}
                <div className="category-tabs-desktop">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Mobile & Pad View: Dropdown Filter */}
                <div className="category-dropdown-mobile">
                    <FormControl fullWidth size="small">
                        <InputLabel id="category-select-label"><FilterListIcon style={{fontSize: '16px'}}/> Filter by Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            value={activeCategory}
                            label="Filter by Category"
                            onChange={(e) => setActiveCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="coupon-grid">
                {filteredCoupons.length > 0 ? (
                    filteredCoupons.map(coupon => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))
                ) : (
                    <div className="no-coupon">No coupons available in this category.</div>
                )}
            </div>
        </section>
    );
};

export default TrendingCoupons;