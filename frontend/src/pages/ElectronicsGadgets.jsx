/* 📂 Location: src/pages/ElectronicsGadgets.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './ElectronicsGadgets.css';

const ElectronicsGadgets = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি ইলেকট্রনিক্স ব্র্যান্ড (৩ডি বক্সের জন্য)
    const elecBrands = [
        { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
        { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
        { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
        { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
        { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
        { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OnePlus_logo.svg" },
        { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" },
        { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Asus_Logo.svg" },
        { name: "boAt", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Boat_logo.svg" },
        { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
        { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Canon_logo.svg" },
        { name: "Nikon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nikon_logo.svg" },
        { name: "JBL", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/JBL_Logo.svg" },
        { name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg" },
        { name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Realme_logo.svg" },
        { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Acer-Logo.svg" },
        { name: "Bose", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bose_logo.svg" },
        { name: "Razer", logo: "https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg" },
        { name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" },
        { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
        { name: "Oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Oppo_logo_2019.svg" },
        { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Vivo_logo_2019.svg" },
        { name: "Sennheiser", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Sennheiser_logo.svg" },
        { name: "MSI", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/MSI_Logo.svg" },
        { name: "Marshall", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Marshall_Logo.svg" },
        { name: "TP-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/TP-Link_logo.svg" },
        { name: "Gigabyte", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gigabyte_Logo.svg" }
    ];

    // ফিল্টার লিস্ট
    const filters = ["All", "Mobile", "Laptop", "Audio", "Home Appliance", "Camera", "Others"];

    // ৪৯টি ডাইনামিক কুপন জেনারেশন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brandObj = elecBrands[Math.floor(Math.random() * elecBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brandObj.name,
                    logo: brandObj.logo,
                    category: cat,
                    title: `${brandObj.name} ${cat} MEGA Deal`,
                    description: `Save big on ${brandObj.name} latest technology. Verified promo code for ${cat}.`,
                });
            }
        });
        return data;
    }, []);

    // সার্চ এবং ফিল্টার লজিক
    const filteredCoupons = useMemo(() => {
        return couponsData.filter(c => {
            const matchesCat = activeFilter === "All" || c.category === activeFilter;
            const matchesSearch = c.brand.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [activeFilter, searchQuery, couponsData]);

    return (
        <div className="elec-page-main">
            <div className="elec-hero-compact">
                <div className="container">
                    <span className="hero-tag">GADGET ZONE</span>
                    <h1>Electronics & Gadgets</h1>
                    <p>Upgrade your tech life with exclusive coupons on latest gadgets.</p>
                </div>
            </div>

            {/* ✅ Infinite Auto Moving 3D Marquee */}
            <div className="elec-moving-wrapper">
                <div className="elec-marquee-inner">
                    {[...elecBrands, ...elecBrands].map((brand, idx) => (
                        <div className="elec-3d-card" key={idx}>
                            <div className="elec-logo-box">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ Action Bar: Filter + Search */}
                <div className="elec-action-bar">
                    <div className="elec-left">
                        <div className="elec-mobile-header">
                            <h2 className="elec-filter-title">Filter by Categories</h2>
                            <button className="elec-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`elec-pills ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`elec-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="elec-right">
                        <span className="elec-search-label">Quick Search:</span>
                        <div className="elec-search-group">
                            <SearchIcon className="elec-search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search Brands e.g. Samsung, Dell..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="elec-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ElectronicsGadgets;