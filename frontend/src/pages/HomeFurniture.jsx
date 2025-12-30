/* 📂 Location: src/pages/HomeFurniture.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './HomeFurniture.css';

const HomeFurniture = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি হোম ও ফার্নিচার ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const homeBrands = [
        { name: "IKEA", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg" },
        { name: "Pepperfry", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Pepperfry_logo.png" },
        { name: "Urban Ladder", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Urban_Ladder_logo.png" },
        { name: "Home Centre", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Home_Centre_logo.png" },
        { name: "Nilkamal", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nilkamal_logo.png" },
        { name: "Sleepwell", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Sleepwell_logo.png" },
        { name: "Kurlon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kurlon_logo.png" },
        { name: "Godrej Interio", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Godrej_Interio_logo.png" },
        { name: "Livspace", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Livspace_logo.png" },
        { name: "Fabindia Home", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Fabindia_logo.svg" },
        { name: "Durian", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Durian_logo.png" },
        { name: "Wakefit", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Wakefit_logo.png" },
        { name: "Zuari", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Zuari_logo.png" },
        { name: "Damro", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Damro_logo.png" },
        { name: "Featherlite", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Featherlite_logo.png" },
        { name: "Evok", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Evok_logo.png" },
        { name: "Hometown", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hometown_logo.png" },
        { name: "@home", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/AtHome_logo.png" },
        { name: "Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Stanley_Furniture_logo.png" },
        { name: "Spacewood", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Spacewood_logo.png" },
        { name: "Wayfair", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Wayfair_logo.svg" },
        { name: "Pottery Barn", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pottery_Barn_logo.svg" },
        { name: "West Elm", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/West_Elm_logo.svg" },
        { name: "Crate & Barrel", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Crate_%26_Barrel_logo.svg" },
        { name: "Herman Miller", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Herman_Miller_logo.svg" },
        { name: "Steelcase", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Steelcase_logo.svg" },
        { name: "Knoll", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Knoll_logo.svg" },
        { name: "BoConcept", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/BoConcept_logo.svg" },
        { name: "Ashley Furniture", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ashley_Furniture_logo.svg" },
        { name: "Restoration Hardware", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/RH_logo.svg" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Living Room", "Bedroom", "Kitchen", "Decor", "Office Furniture", "Others"];

    // ৪৯টি কুপন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = homeBrands[Math.floor(Math.random() * homeBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `Comfort Deals: Flat 15% OFF on ${brand.name} ${cat}`,
                    description: `Make your house a home with ${brand.name}. Verified coupon for ${cat} essentials.`,
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
        <div className="home-page-main">
            <div className="home-hero-compact">
                <div className="container">
                    <span className="hero-tag">CREATE YOUR COZY SPACE</span>
                    <h1>Home & Furniture</h1>
                    <p>Upgrade your interior with exclusive vouchers on furniture, bedding, and decor.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="home-moving-container">
                <div className="home-marquee-inner">
                    {[...homeBrands, ...homeBrands].map((brand, idx) => (
                        <div className="home-3d-card" key={idx}>
                            <div className="home-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="home-action-bar">
                    <div className="home-left">
                        <div className="home-mobile-header">
                            <h2 className="home-filter-title">Filter by Categories</h2>
                            <button className="home-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`home-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`home-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="home-right">
                        <span className="home-search-label">Quick Search:</span>
                        <div className="home-search-input-group">
                            <SearchIcon className="home-search-icon" />
                            <input 
                                type="text" 
                                placeholder="e.g. IKEA, Nilkamal, Kitchen..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="home-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFurniture;