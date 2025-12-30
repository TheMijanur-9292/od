/* 📂 Location: src/pages/TodaysDeals.jsx */
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import './TodaysDeals.css';

const TodaysDeals = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All Deals");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const categories = [
        "All Deals", 
        "Deals of the Day", 
        "Trending Coupon", 
        "Exclusive Codes", 
        "No Minimum Purchase", 
        "Newest Offer", 
        "Expired Soon", 
        "Cashback Offer"
    ];

    // অরিজিনাল লোগো ডাটাবেস (Direct Links)
    const brandAssets = [
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flipkart_logo.png" },
        { name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_logo.png" },
        { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
        { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
        { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
        { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { name: "Boat", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Boat_logo.svg" }
    ];

    const allDeals = useMemo(() => {
        let data = [];
        categories.slice(1).forEach((cat) => {
            for (let i = 1; i <= 3; i++) {
                const brandObj = brandAssets[Math.floor(Math.random() * brandAssets.length)];
                data.push({
                    id: `${cat}-${i}`,
                    category: cat,
                    brand: brandObj.name,
                    title: `Exclusive ${cat} for your favorite ${brandObj.name} products`,
                    discount: i === 1 ? "80% OFF" : "FLAT ₹500",
                    logo: brandObj.logo
                });
            }
        });
        return data;
    }, []);

    const filteredDeals = useMemo(() => {
        return activeCategory === "All Deals" 
            ? allDeals 
            : allDeals.filter(d => d.category === activeCategory);
    }, [activeCategory, allDeals]);

    return (
        <div className="deals-page-main">
            <div className="deals-hero-section">
                <div className="container">
                    <h1>Today's Hot Deals</h1>
                    <p>Verified offers from top brands just for you</p>
                </div>
            </div>

            <div className="container">
                <div className="deals-filter-wrapper">
                    <div className="deals-filter-header">
                        <span className="f-title">Categories</span>
                        <button className="hamburg-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                        </button>
                    </div>

                    <div className={`deals-cat-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`cat-btn-item ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="deals-responsive-grid">
                    {filteredDeals.map(deal => (
                        <div className="unique-deal-card" key={deal.id}>
                            <div className="card-cat-badge">{deal.category}</div>
                            <div className="card-brand-box">
                                <img src={deal.logo} alt={deal.brand} onError={(e) => e.target.src = "https://via.placeholder.com/50"} />
                                <span>{deal.brand}</span>
                            </div>
                            <div className="card-content-box">
                                <h4>{deal.title}</h4>
                                <div className="card-price-info">
                                    <span className="discount-val">{deal.discount}</span>
                                    <button onClick={() => navigate(`/${deal.brand.toLowerCase()}-coupon`)}>Grab Deal</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodaysDeals;