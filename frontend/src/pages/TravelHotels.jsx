/* 📂 Location: src/pages/TravelHotels.jsx */
import React, { useState, useMemo } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CouponCard from '../components/CouponCard'; 
import './TravelHotels.css';

const TravelHotels = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ৩০টি ট্রাভেল ও হোটেল ব্র্যান্ড (৩ডি শ্যাডো বক্সের জন্য)
    const travelBrands = [
        { name: "MakeMyTrip", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/MakeMyTrip_Logo.png" },
        { name: "Goibibo", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Goibibo_logo.png" },
        { name: "Cleartrip", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cleartrip_logo.png" },
        { name: "IndiGo", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Indigo_Logo.svg" },
        { name: "OYO", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_Logo.svg" },
        { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" },
        { name: "Agoda", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Agoda_logo.svg" },
        { name: "Trivago", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Trivago_logo.svg" },
        { name: "Yatra", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Yatra_Logo.svg" },
        { name: "Air India", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Air_India_Logo.svg" },
        { name: "Expedia", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Expedia_Logo.svg" },
        { name: "Ixigo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ixigo_logo.svg" },
        { name: "RedBus", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/RedBus_logo.svg" },
        { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
        { name: "Ola", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ola_Cabs_logo.svg" },
        { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
        { name: "Skyscanner", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Skyscanner_Logo.svg" },
        { name: "Thomas Cook", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Thomas_Cook_logo.svg" },
        { name: "Vistara", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vistara_Logo.svg" },
        { name: "SpiceJet", logo: "https://upload.wikimedia.org/wikipedia/en/9/96/SpiceJet_logo.svg" },
        { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Qatar_Airways_logo.svg" },
        { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
        { name: "Hotels.com", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Hotels.com_logo.svg" },
        { name: "Zoomcar", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Zoomcar_logo.svg" },
        { name: "EaseMyTrip", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/EaseMyTrip_Logo.png" },
        { name: "Klook", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Klook_logo.svg" },
        { name: "Trip.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Trip.com_logo.svg" },
        { name: "AbhiBus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/AbhiBus_Logo.png" },
        { name: "FabHotels", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/FabHotels_Logo.png" },
        { name: "Treebo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Treebo_Logo.png" }
    ];

    // ক্যাটাগরি ফিল্টার
    const filters = ["All", "Hotels", "Flights", "Trains", "Bus", "Holiday Packages", "Others"];

    // ৪৯টি কুপন (৭টি করে প্রতি ক্যাটাগরিতে)
    const couponsData = useMemo(() => {
        let data = [];
        filters.slice(1).forEach((cat) => {
            for (let i = 1; i <= 7; i++) {
                const brand = travelBrands[Math.floor(Math.random() * travelBrands.length)];
                data.push({
                    id: `${cat}-${i}-${Math.random()}`,
                    brand: brand.name,
                    logo: brand.logo,
                    category: cat,
                    title: `Exclusive ${cat} Deal: Flat 20% OFF at ${brand.name}`,
                    description: `Plan your dream trip with ${brand.name}. Verified coupon for ${cat} bookings.`,
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
        <div className="travel-page-main">
            <div className="travel-hero-compact">
                <div className="container">
                    <span className="hero-tag">EXPLORE THE WORLD</span>
                    <h1>Travel & Hotels</h1>
                    <p>Find the best flight deals, hotel vouchers, and holiday packages in one place.</p>
                </div>
            </div>

            {/* ✅ অবিরাম চলমান ৩ডি লোগো মারকুই */}
            <div className="travel-moving-container">
                <div className="travel-marquee-inner">
                    {[...travelBrands, ...travelBrands].map((brand, idx) => (
                        <div className="travel-3d-card" key={idx}>
                            <div className="travel-logo-box-3d">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                {/* ✅ অ্যাকশন বার (Filter + Search) */}
                <div className="travel-action-bar">
                    <div className="travel-left">
                        <div className="travel-mobile-header">
                            <h2 className="travel-filter-title">Filter by Categories</h2>
                            <button className="travel-hamburg-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <CloseIcon /> : <FilterListIcon />}
                            </button>
                        </div>
                        <div className={`travel-pills-row ${isMobileMenuOpen ? 'show' : ''}`}>
                            {filters.map(f => (
                                <button 
                                    key={f} 
                                    className={`travel-pill-btn ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => { setActiveFilter(f); setIsMobileMenuOpen(false); }}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="travel-right">
                        <span className="travel-search-label">Search Destination or Brand:</span>
                        <div className="travel-search-input-group">
                            <SearchIcon className="travel-search-icon" />
                            <input 
                                type="text" 
                                placeholder="e.g. OYO, Indigo, Holiday..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Grid 4-3-2 Layout */}
                <div className="travel-coupon-grid">
                    {filteredCoupons.map(cpn => (
                        <CouponCard key={cpn.id} coupon={cpn} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelHotels;