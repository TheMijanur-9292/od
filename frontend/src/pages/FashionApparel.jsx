/* 📂 Location: src/pages/FashionApparel.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './FashionApparel.css';

const FashionApparel = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি ফ্যাশন ব্র্যান্ডের লিস্ট
    const fashionBrands = [
        { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
        { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/en/3/37/Puma_AG_Logo.svg" },
        { name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
        { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
        { name: "Levi's", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Levi%27s_logo.svg" },
        { name: "Bata", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bata_logo.svg" },
        { name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_logo.png" },
        { name: "Ajio", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ajio_Logo.svg" },
        { name: "Allen Solly", logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Allen_Solly_logo.png" },
        { name: "Manyavar", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Manyavar_logo.png" },
        { name: "FabIndia", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Fabindia_logo.svg" },
        { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg" },
        { name: "Prada", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg" },
        { name: "Louis Vuitton", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Louis_Vuitton_logo_and_wordmark.svg" },
        { name: "Max", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Max_Fashion_logo.png" },
        { name: "Trends", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Reliance_Trends_Logo.png" },
        { name: "Pantaloons", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Pantaloons_logo.png" },
        { name: "Westside", logo: "https://upload.wikimedia.org/wikipedia/en/9/91/Westside_Logo.png" },
        { name: "Shoppers Stop", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Shoppers_Stop_logo.png" },
        { name: "Lifestyle", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lifestyle_Logo.png" },
        { name: "Flying Machine", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flying_Machine_logo.png" },
        { name: "Woodland", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Woodland_Logo.png" },
        { name: "Skechers", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Skechers_logo.svg" },
        { name: "Crocs", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Crocs_logo.svg" },
        { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Reebok_Delta_logo.svg" },
        { name: "Lacoste", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Lacoste_logo.svg" },
        { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tommy_Hilfiger_logo.svg" },
        { name: "Calvin Klein", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Calvin_Klein_logo.svg" },
        { name: "Peter England", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Peter_England_logo.png" }
    ];

    const filters = ["All", "Men", "Women", "Kids", "Accessories"];

    // ৫০টি কুপন জেনারেট করা
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 13; i++) {
                const brand = fashionBrands[Math.floor(Math.random() * fashionBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `${brand.name} ${cat} Special Deal`,
                    description: `Verified discounts on ${brand.name} collection. Best prices on ${cat} fashion.`,
                });
            }
        });
        return data;
    }, []);

    // ফিল্টার এবং সার্চ লজিক
    const filteredCoupons = useMemo(() => {
        return couponsData.filter(c => {
            const matchesCat = activeFilter === "All" || c.category === activeFilter;
            const matchesSearch = c.brand.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [activeFilter, searchQuery, couponsData]);

    return (
        <div className="fashion-page-main">
            <div className="fashion-hero-compact">
                <div className="container">
                    <span className="hero-tag">TRENDING COLLECTIONS</span>
                    <h1>Fashion & Apparel</h1>
                    <p>Exclusive coupons for 30+ top brands updated daily.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান লোগো (Infinite Continuous Moving) */}
            <div className="fashion-moving-container">
                <div className="marquee-infinite-scroll">
                    {[...fashionBrands, ...fashionBrands].map((brand, idx) => (
                        <div className="brand-3d-box-card" key={idx}>
                            <div className="logo-3d-wrapper">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ স্মার্ট অ্যাকশন বার (Filter + Search) */}
                <div className="fashion-action-bar">
                    <div className="action-left">
                        <div className="mobile-filter-header">
                            <h2 className="filter-title-text">Filter by Categories</h2>
                            <button className="hamburg-btn-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`filter-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`filter-pill-item ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="action-right">
                        <span className="search-smart-label">Quick search for your brand:</span>
                        <div className="smart-search-input-group">
                            <SearchIcon className="search-input-icon" />
                            <input 
                                type="text" 
                                placeholder="Search Brands e.g. Nike, Zara..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="fashion-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FashionApparel;