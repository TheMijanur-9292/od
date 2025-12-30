import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FilterListIcon from '@mui/icons-material/FilterList'; // মোবাইল ফিল্টার আইকন
import CloseIcon from '@mui/icons-material/Close'; // বন্ধ করার আইকন
import { brands } from '../data/brands'; // আপনার ডাটা ফাইল
import './Stores.css';

const Stores = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // মোবাইল মেনুর স্টেট

    const categories = ["All", "Fashion", "Electronics", "Food", "Travel & Hotels", "Beauty & Cosmetics", "Home & Furniture", "Gifts", "UPI & Recharge"];

    // ✅ লজিক ফিক্স এবং সেফটি চেক (White Screen প্রতিরোধ করতে)
    const filteredStores = useMemo(() => {
        return (brands || []).filter(store => {
            // ১. সার্চ ম্যাচিং
            const matchesSearch = (store.name || "").toLowerCase().includes(searchQuery.toLowerCase());
            
            // ২. ক্যাটাগরি ম্যাচিং (cat অথবা category দুটির জন্যই সেফটি চেক)
            const storeCategory = store.category || store.cat || ""; 
            const matchesCategory = activeCategory === "All" || 
                                   storeCategory.trim() === activeCategory.trim();
            
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <div className="stores-page-main">
            <Navbar />
            
            <div className="stores-content-area">
                <div className="stores-container-fluid">
                    <p className="section-tag">BROWSE BY BRAND</p>
                    <h1>All Partner Stores</h1>
                    <p className="section-subtitle">Find exclusive coupons for your favorite online stores.</p>

                    <div className="modern-filter-container">
                        <div className="search-row-full">
                            <div className="search-input-wrapper">
                                <SearchIcon className="icon-orange" />
                                <input 
                                    type="text" 
                                    placeholder="Search Store... (e.g. Amazon)" 
                                    value={searchQuery}
                                    style={{ color: '#333' }}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* ক্যাটাগরি ফিল্টার সেকশন */}
                        <div className="category-filter-row">
                            <div className="cat-header-mobile">
                                <span className="cat-label">Filter by Categories:</span>
                                {/* মোবাইল/প্যাড এর জন্য হ্যামবার্গার আইকন */}
                                <button 
                                    className="mobile-filter-toggle" 
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                                </button>
                            </div>

                            {/* মোবাইল ওপেন ক্লাস টগল */}
                            <div className={`cat-scroll-box ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                                {categories.map(cat => (
                                    <button 
                                        key={cat} 
                                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
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
                    </div>

                    {/* স্টোর কার্ড গ্রিড */}
                    <div className="store-grid-wrapper">
                        {filteredStores.length > 0 ? (
                            filteredStores.map(store => (
                                <div 
                                    className="clickable-store-card" 
                                    key={store.id}
                                    onClick={() => navigate(`/${store.slug}`)}
                                >
                                    <div className="card-logo-box">
                                        <img 
                                            src={store.logo} 
                                            alt={store.name} 
                                            onError={(e) => {e.target.src = "https://via.placeholder.com/150?text=Store"}} 
                                        />
                                    </div>
                                    <h4>{store.name}</h4>
                                    <div className="coupon-badge">
                                        <ConfirmationNumberIcon className="badge-icon" />
                                        <span>{store.couponsCount || store.coupons} Coupons</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-data-msg">No stores found for "{activeCategory}".</div>
                        )}
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Stores;