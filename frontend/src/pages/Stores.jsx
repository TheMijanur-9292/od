/* 📂 Location: src/pages/Stores.jsx */
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import './Stores.css';

const Stores = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Fashion", "Electronics", "Food", "Travel & Hotels", "Beauty & Cosmetics", "Home & Furniture", "Gifts", "UPI & Recharge"];

    // ৫০টি স্টোর ডাটা
    const allStoresData = useMemo(() => {
        const brands = [
            { name: "Amazon", cat: "Electronics" }, { name: "Adidas", cat: "Fashion" }, { name: "Ajio", cat: "Fashion" },
            { name: "BigBasket", cat: "Food" }, { name: "Boat", cat: "Electronics" }, { name: "Booking.com", cat: "Travel & Hotels" },
            { name: "Croma", cat: "Electronics" }, { name: "Domino's", cat: "Food" }, { name: "Dell", cat: "Electronics" },
            { name: "eBay", cat: "Electronics" }, { name: "Flipkart", cat: "Electronics" }, { name: "FabIndia", cat: "Fashion" },
            { name: "Giva", cat: "Gifts" }, { name: "Goibibo", cat: "Travel & Hotels" }, { name: "HP", cat: "Electronics" },
            { name: "H&M", cat: "Fashion" }, { name: "IndiGo", cat: "Travel & Hotels" }, { name: "Ixigo", cat: "Travel & Hotels" },
            { name: "JioMart", cat: "Food" }, { name: "KFC", cat: "Food" }, { name: "Lenskart", cat: "Fashion" },
            { name: "Myntra", cat: "Fashion" }, { name: "MakeMyTrip", cat: "Travel & Hotels" }, { name: "Mamaearth", cat: "Beauty & Cosmetics" },
            { name: "Nykaa", cat: "Beauty & Cosmetics" }, { name: "Nike", cat: "Fashion" }, { name: "Oyo", cat: "Travel & Hotels" },
            { name: "Puma", cat: "Fashion" }, { name: "Pizza Hut", cat: "Food" }, { name: "Pepperfry", cat: "Home & Furniture" },
            { name: "Reebok", cat: "Fashion" }, { name: "Samsung", cat: "Electronics" }, { name: "Swiggy", cat: "Food" },
            { name: "Tata Cliq", cat: "Fashion" }, { name: "Uber", cat: "Travel & Hotels" }, { name: "Urban Ladder", cat: "Home & Furniture" },
            { name: "Voot", cat: "Gifts" }, { name: "Wildcraft", cat: "Fashion" }, { name: "Xiaomi", cat: "Electronics" },
            { name: "Zomato", cat: "Food" }, { name: "Zara", cat: "Fashion" }, { name: "Bata", cat: "Fashion" },
            { name: "ClearTrip", cat: "Travel & Hotels" }, { name: "Dermaco", cat: "Beauty & Cosmetics" }, { name: "EaseMyTrip", cat: "Travel & Hotels" },
            { name: "Ferns N Petals", cat: "Gifts" }, { name: "Google Play", cat: "Gifts" }, { name: "Home Centre", cat: "Home & Furniture" },
            { name: "Intermiles", cat: "Travel & Hotels" }, { name: "Jack & Jones", cat: "Fashion" }
        ];

        return brands.map((b, i) => ({
            id: i + 1,
            name: b.name,
            category: b.cat,
            // URL তৈরির জন্য slug (যেমন: Amazon -> amazon-coupon)
            slug: `${b.name.toLowerCase().replace(/\s+/g, '-')}-coupon`,
            logo: `https://www.vectorlogo.zone/logos/${b.name.toLowerCase().replace(/\s/g, "")}/${b.name.toLowerCase().replace(/\s/g, "")}-icon.svg`,
            coupons: Math.floor(Math.random() * 25) + 3
        }));
    }, []);

    // স্মার্ট ফিল্টারিং
    const filteredStores = allStoresData.filter(store => {
        const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || store.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="stores-page-main">
            <Navbar />
            
            <div className="stores-content-area">
                <div className="stores-container-fluid">
                    <p className="section-tag">BROWSE BY BRAND</p>
                    <h1>All Partner Stores</h1>
                    <p className="section-subtitle">Find exclusive coupons for your favorite online stores.</p>

                    {/* New Compact Filter Box */}
                    <div className="modern-filter-container">
                        <div className="search-row-full">
                            <div className="search-input-wrapper">
                                <SearchIcon className="icon-orange" />
                                <input 
                                    type="text" 
                                    placeholder="Search Store... (e.g. Amazon)" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="category-filter-row">
                            <span className="cat-label">Filter by Categories:</span>
                            <div className="cat-scroll-box">
                                {categories.map(cat => (
                                    <button 
                                        key={cat} 
                                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Store Cards Grid */}
                    <div className="store-grid-wrapper">
                        {filteredStores.length > 0 ? (
                            filteredStores.map(store => (
                                <div 
                                    className="clickable-store-card" 
                                    key={store.id}
                                    onClick={() => navigate(`/${store.slug}`)} // Dynamic URL: /amazon-coupon
                                >
                                    <div className="card-logo-box">
                                        <img 
                                            src={store.logo} 
                                            alt={store.name} 
                                            onError={(e) => {e.target.src = "https://via.placeholder.com/50?text=Store"}} 
                                        />
                                    </div>
                                    <h4>{store.name}</h4>
                                    <div className="coupon-badge">
                                        <ConfirmationNumberIcon className="badge-icon" />
                                        <span>{store.coupons} Coupons</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-data-msg">No stores found matching your search.</div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Stores;