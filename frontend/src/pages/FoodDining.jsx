/* 📂 Location: src/pages/FoodDining.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './FoodDining.css';

const FoodDining = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি ফুড ও ডাইনিং ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const foodBrands = [
        { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
        { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" },
        { name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg" },
        { name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg" },
        { name: "Pizza Hut", logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/Pizza_Hut_logo.svg" },
        { name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg" },
        { name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
        { name: "Starbucks", logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg" },
        { name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg" },
        { name: "Behrouz", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Behrouz_Biryani_Logo.png" },
        { name: "Pizza Express", logo: "https://upload.wikimedia.org/wikipedia/en/7/79/PizzaExpress_logo.svg" },
        { name: "Barbeque Nation", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barbeque_Nation_Logo.png" },
        { name: "Haldiram's", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Haldiram%27s_logo.svg" },
        { name: "Baskin Robbins", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Baskin-Robbins_logo.svg" },
        { name: "Dunkin'", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Dunkin%27_Donuts_logo.svg" },
        { name: "CCD", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Cafe_Coffee_Day_logo.svg" },
        { name: "Wow! Momo", logo: "https://upload.wikimedia.org/wikipedia/en/a/a4/Wow%21_Momo_Logo.png" },
        { name: "Faasos", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Faasos_Logo.png" },
        { name: "Ovenstory", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Ovenstory_Logo.png" },
        { name: "Chai Point", logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Chai_Point_Logo.png" },
        { name: "Keventers", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Keventers_Logo.png" },
        { name: "The Beer Cafe", logo: "https://upload.wikimedia.org/wikipedia/en/2/20/The_Beer_Cafe_logo.png" },
        { name: "Rebel Foods", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Rebel_Foods_logo.png" },
        { name: "FreshMenu", logo: "https://upload.wikimedia.org/wikipedia/en/b/b5/FreshMenu_Logo.png" },
        { name: "Taco Bell", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg" },
        { name: "Wendy's", logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendys_logo_2012.svg" },
        { name: "Costa Coffee", logo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Costa_Coffee_logo.svg" },
        { name: "Baskin Robbins", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Baskin-Robbins_logo.svg" },
        { name: "Kwality Wall's", logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Kwality_Wall%27s_logo.svg" },
        { name: "Nando's", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Nandos_logo.svg" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Restaurants", "Fast Food", "Cafe", "Bakeries", "Online Delivery", "Others"];

    // ৪৯টি ডাইনামিক কুপন জেনারেট করা (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = foodBrands[Math.floor(Math.random() * foodBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `${brand.name} ${cat} Special Offer`,
                    description: `Get delicious discounts on ${brand.name}. Order now and save big on ${cat}.`,
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
        <div className="food-page-main">
            <div className="food-hero-compact">
                <div className="container">
                    <span className="hero-tag">TASTY DEALS</span>
                    <h1>Food & Dining</h1>
                    <p>Savor the taste of savings with exclusive restaurant and delivery coupons.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="food-moving-container">
                <div className="food-marquee-inner">
                    {[...foodBrands, ...foodBrands].map((brand, idx) => (
                        <div className="food-brand-3d-card" key={idx}>
                            <div className="food-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="food-action-bar">
                    <div className="food-left">
                        <div className="food-mobile-header">
                            <h2 className="food-filter-title">Filter by Categories</h2>
                            <button className="food-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`food-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`food-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="food-right">
                        <span className="food-search-label">Quick Search:</span>
                        <div className="food-search-input-group">
                            <SearchIcon className="food-search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search e.g. Zomato, KFC, Domino's..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="food-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodDining;