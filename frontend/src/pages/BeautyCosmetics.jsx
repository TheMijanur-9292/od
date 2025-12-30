/* 📂 Location: src/pages/BeautyCosmetics.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './BeautyCosmetics.css';

const BeautyCosmetics = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি বিউটি ও কসমেটিকস ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const beautyBrands = [
        { name: "Nykaa", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nykaa_Logo.svg" },
        { name: "Lakme", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lakme_Logo.svg" },
        { name: "L'Oreal", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Oreal_logo.svg" },
        { name: "MAC", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/MAC_Cosmetics_logo.svg" },
        { name: "Maybelline", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Maybelline-Logo.svg" },
        { name: "Mamaearth", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Mamaearth_logo.png" },
        { name: "WOW", logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/WOW_Skin_Science_logo.png" },
        { name: "The Body Shop", logo: "https://upload.wikimedia.org/wikipedia/en/f/f6/The_Body_Shop_logo.svg" },
        { name: "Plum", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Plum_Goodness_logo.png" },
        { name: "Sugar", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Sugar_Cosmetics_logo.png" },
        { name: "Estee Lauder", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Estee_Lauder_logo.svg" },
        { name: "Clinique", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Clinique_logo.svg" },
        { name: "Nivea", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Nivea_logo.svg" },
        { name: "Dove", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Dove_logo.svg" },
        { name: "Biotique", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Biotique_logo.png" },
        { name: "Forest Essentials", logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Forest_Essentials_Logo.png" },
        { name: "Lotus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Lotus_Herbals_logo.png" },
        { name: "Revlon", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Revlon_logo.svg" },
        { name: "Olay", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Olay_logo.svg" },
        { name: "Ponds", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ponds_logo.svg" },
        { name: "Neutrogena", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Neutrogena_logo.svg" },
        { name: "Kaya", logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Kaya_Skin_Clinic_logo.png" },
        { name: "Kama Ayurveda", logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Kama_Ayurveda_logo.png" },
        { name: "Colorbar", logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Colorbar_logo.png" },
        { name: "Faces Canada", logo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Faces_Canada_logo.png" },
        { name: "Sephora", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sephora_logo.svg" },
        { name: "Bath & Body Works", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bath_%26_Body_Works_logo.svg" },
        { name: "Innisfree", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Innisfree_logo.svg" },
        { name: "Dot & Key", logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Dot_and_Key_logo.png" },
        { name: "Mcaffeine", logo: "https://upload.wikimedia.org/wikipedia/en/9/91/Mcaffeine_logo.png" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Skincare", "Makeup", "Haircare", "Fragrance", "Personal Care", "Others"];

    // ৪৯টি কুপন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = beautyBrands[Math.floor(Math.random() * beautyBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `Get Glow: Extra 25% OFF on ${brand.name} ${cat}`,
                    description: `Experience luxury beauty with ${brand.name}. Verified coupon for ${cat} products.`,
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
        <div className="beauty-page-main">
            <div className="beauty-hero-compact">
                <div className="container">
                    <span className="hero-tag">GLOW UP EVERY DAY</span>
                    <h1>Beauty & Cosmetics</h1>
                    <p>Discover best-selling makeup, skincare, and fragrance deals from global brands.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="beauty-moving-container">
                <div className="beauty-marquee-inner">
                    {[...beautyBrands, ...beautyBrands].map((brand, idx) => (
                        <div className="beauty-3d-card" key={idx}>
                            <div className="beauty-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="beauty-action-bar">
                    <div className="beauty-left">
                        <div className="beauty-mobile-header">
                            <h2 className="beauty-filter-title">Filter by Categories</h2>
                            <button className="beauty-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`beauty-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`beauty-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="beauty-right">
                        <span className="beauty-search-label">Quick Search:</span>
                        <div className="beauty-search-input-group">
                            <SearchIcon className="beauty-search-icon" />
                            <input 
                                type="text" 
                                placeholder="e.g. Nykaa, Lakme, Skincare..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="beauty-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BeautyCosmetics;