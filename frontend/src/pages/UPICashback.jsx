/* 📂 Location: src/pages/UPICashback.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './UPICashback.css';

const UPICashback = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি ইউপিআই, রিচার্জ ও ফিনটেক ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const upiBrands = [
        { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" },
        { name: "Google Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" },
        { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
        { name: "Amazon Pay", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "MobiKwik", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/MobiKwik_logo.png" },
        { name: "Freecharge", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Freecharge_logo.png" },
        { name: "Airtel Thanks", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" }, // Placeholder for Airtel
        { name: "JioPay", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Reliance_Jio_Logo.svg" },
        { name: "BHIM", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/BHIM_logo.svg" },
        { name: "Cred", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Cred_logo.png" },
        { name: "LazyPay", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/LazyPay_Logo.png" },
        { name: "Slice", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Slice_Logo.png" },
        { name: "Uni Card", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Uni_Card_Logo.png" },
        { name: "Bajaj Finserv", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bajaj_Finserv_Logo.svg" },
        { name: "Dhani", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dhani_Logo.png" },
        { name: "Fi Money", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Fi_Money_Logo.png" },
        { name: "Jupiter", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Jupiter_Money_Logo.png" },
        { name: "Niyo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Niyo_Logo.png" },
        { name: "PostPe", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/PostPe_Logo.png" },
        { name: "IndMoney", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/IndMoney_Logo.png" },
        { name: "Groww", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Groww_logo.svg" },
        { name: "Upstox", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Upstox_Logo.png" },
        { name: "Zerodha", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Zerodha_logo.svg" },
        { name: "ICICI iMobile", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
        { name: "HDFC PayZapp", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/HDFC_Bank_Logo.svg" },
        { name: "SBI Yono", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/SBI_Logo.svg" },
        { name: "Kotak 811", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kotak_Mahindra_Bank_logo.svg" },
        { name: "Axis Mobile", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Axis_Bank_logo.svg" },
        { name: "Simpl", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Simpl_Logo.png" },
        { name: "ZestMoney", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/ZestMoney_Logo.png" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Mobile Recharge", "Bill Payments", "DTH", "FASTag", "Wallet Offers", "Others"];

    // ৪৯টি কুপন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = upiBrands[Math.floor(Math.random() * upiBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `Cashback Alert: Up to ₹100 on ${brand.name} ${cat}`,
                    description: `Save money on your next transaction with ${brand.name}. Verified offer for ${cat}.`,
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
        <div className="upi-page-main">
            <div className="upi-hero-compact">
                <div className="container">
                    <span className="hero-tag">PAY SMART, SAVE SMART</span>
                    <h1>UPI & Recharge</h1>
                    <p>Unlock the best cashback, rewards, and discount coupons on your daily bills and recharges.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="upi-moving-container">
                <div className="upi-marquee-inner">
                    {[...upiBrands, ...upiBrands].map((brand, idx) => (
                        <div className="upi-3d-card" key={idx}>
                            <div className="upi-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="upi-action-bar">
                    <div className="upi-left">
                        <div className="upi-mobile-header">
                            <h2 className="upi-filter-title">Filter by Categories</h2>
                            <button className="upi-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`upi-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`upi-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="upi-right">
                        <span className="upi-search-label">Search Apps or Services:</span>
                        <div className="upi-search-input-group">
                            <SearchIcon className="upi-search-icon" />
                            <input 
                                type="text" 
                                placeholder="e.g. PhonePe, Paytm, Electricity..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="upi-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UPICashback;