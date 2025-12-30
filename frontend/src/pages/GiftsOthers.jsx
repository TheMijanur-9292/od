/* 📂 Location: src/pages/GiftsOthers.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './GiftsOthers.css';

const GiftsOthers = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি গিফট ও রিটেল ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const giftBrands = [
        { name: "Ferns N Petals", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/FNP_Logo.png" },
        { name: "Archies", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Archies_logo.png" },
        { name: "FlowerAura", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/FlowerAura_Logo.png" },
        { name: "IGP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/IGP_Logo.png" },
        { name: "GiftCart", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/GiftCart_Logo.png" },
        { name: "Winni", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Winni_Logo.png" },
        { name: "Cadbury Gifting", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Cadbury_Logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Flipkart_Logo.svg" },
        { name: "BigBasket", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BigBasket_Logo.png" },
        { name: "Blinkit", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Blinkit_Logo.png" },
        { name: "Zepto", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Zepto_Logo.png" },
        { name: "Nykaa Man", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nykaa_Logo.svg" },
        { name: "Snapdeal", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Snapdeal_logo.svg" },
        { name: "Reliance Digital", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Reliance_Digital_Logo.png" },
        { name: "Croma", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Croma_Logo.svg" },
        { name: "Tanishq", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Tanishq_Logo.png" },
        { name: "CaratLane", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/CaratLane_Logo.png" },
        { name: "BlueStone", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BlueStone_Logo.png" },
        { name: "Hamleys", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Hamleys_Logo.svg" },
        { name: "FirstCry", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/FirstCry_Logo.png" },
        { name: "Vistaprint", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Vistaprint_Logo.svg" },
        { name: "Zoomin", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Zoomin_Logo.png" },
        { name: "The Souled Store", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Souled_Store_Logo.png" },
        { name: "Bewakoof", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bewakoof_Logo.png" },
        { name: "Ustraa", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ustraa_Logo.png" },
        { name: "Beardo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Beardo_Logo.png" },
        { name: "Personalization Mall", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Personalization_Mall_Logo.svg" },
        { name: "Moonpig", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Moonpig_Logo.svg" },
        { name: "Hallmark", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hallmark_Logo.svg" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Flowers & Cakes", "Personalized Gifts", "Gift Cards", "Toys & Games", "Jewelry", "Others"];

    // ৪৯টি কুপন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = giftBrands[Math.floor(Math.random() * giftBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `Special Surprise: Flat 20% OFF at ${brand.name}`,
                    description: `Make every occasion special with ${brand.name}. Verified coupon for ${cat}.`,
                });
            }
        });
        return data;
    }, []);

    const filteredCoupons = useMemo(() => {
        return couponsData.filter(c => {
            const matchesCat = activeFilter === "All" || c.category === activeFilter;
            const matchesSearch = c.brand.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [activeFilter, searchQuery, couponsData]);

    return (
        <div className="gift-page-main">
            <div className="gift-hero-compact">
                <div className="container">
                    <span className="hero-tag">SPREAD THE JOY</span>
                    <h1>Gifts & Others</h1>
                    <p>Exclusive deals on personalized gifts, flowers, gift cards, and more for your loved ones.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="gift-moving-container">
                <div className="gift-marquee-inner">
                    {[...giftBrands, ...giftBrands].map((brand, idx) => (
                        <div className="gift-3d-card" key={idx}>
                            <div className="gift-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="gift-action-bar">
                    <div className="gift-left">
                        <div className="gift-mobile-header">
                            <h2 className="gift-filter-title">Filter by Categories</h2>
                            <button className="gift-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`gift-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`gift-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="gift-right">
                        <span className="gift-search-label">Quick Search:</span>
                        <div className="gift-search-input-group">
                            <SearchIcon className="gift-search-icon" />
                            <input 
                                type="text" 
                                placeholder="e.g. FNP, Archies, Gift Cards..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="gift-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GiftsOthers;