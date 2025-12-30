/* 📂 Location: src/pages/StoreDetail.jsx */
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { brands } from '../data/brands'; // ইম্পোর্ট করুন
import './StoreDetail.css';

const StoreDetail = () => {
    const { storeSlug } = useParams();

    // URL slug অনুযায়ী ব্র্যান্ড খুঁজে বের করা
    const currentStore = brands.find(b => b.slug === storeSlug);

    // যদি ব্র্যান্ডটি ডাটাতে না থাকে তবে ডিফল্ট ভ্যালু
    const displayName = currentStore ? currentStore.name : "Store";
    const displayLogo = currentStore ? currentStore.logo : "https://via.placeholder.com/80";

    const coupons = [
        { id: 1, title: "Flat 50% OFF on all Electronics", desc: "Valid on orders above ₹10,000. Limited time offer.", code: "ELECT50", type: "CODE" },
        { id: 2, title: "Extra 10% Cashback on Prepaid Orders", desc: "Applicable for all users. Max cashback ₹500.", code: "", type: "DEAL" },
        { id: 3, title: "Buy 1 Get 1 Free on Fashion Wear", desc: "Select items only. Add 2 items to cart to avail.", code: "BOGO", type: "CODE" },
        { id: 4, title: "Free Shipping on your First Order", desc: "No minimum order value required for new users.", code: "", type: "DEAL" },
        { id: 5, title: "HDFC Bank: 10% Instant Discount", desc: "On minimum purchase of ₹5,000 using HDFC Cards.", code: "HDFC10", type: "CODE" },
        { id: 6, title: "New User Special: Flat ₹200 OFF", desc: "Valid on your first purchase above ₹999.", code: "WELCOME200", type: "CODE" },
        { id: 7, title: "Up to 80% OFF: Clearance Sale", desc: "Huge discount on last season's stock. Shop now!", code: "", type: "DEAL" },
        { id: 8, title: "Flat ₹500 OFF on Home Appliances", desc: "Applicable on orders above ₹15,000.", code: "HOME500", type: "CODE" },
        { id: 9, title: "Student Discount: Extra 15% OFF", desc: "Verify your student status to get a unique code.", code: "STUDENT15", type: "CODE" },
        { id: 10, title: "Refer & Earn: Get ₹100 Credit", desc: "Invite your friends and get credits on their first order.", code: "", type: "DEAL" },
        { id: 11, title: "Midnight Flash Sale: Extra 10% OFF", desc: "Valid from 12 AM to 4 AM tonight only.", code: "FLASH10", type: "CODE" },
        { id: 12, title: "ICICI Bank: Extra 5% Cashback", desc: "Using ICICI Net Banking on orders above ₹2,000.", code: "", type: "DEAL" },
        { id: 13, title: "App Only: Additional 5% Discount", desc: "Download our app and place your first order.", code: "APP5", type: "CODE" },
        { id: 14, title: "Flat 20% OFF on Grocery & Essentials", desc: "No minimum order value. Limited to 3 uses per user.", code: "GROCERY20", type: "CODE" },
        { id: 15, title: "Exchange Offer: Up to ₹10,000 OFF", desc: "Exchange your old devices for the latest models.", code: "", type: "DEAL" }
    ];

    return (
        <div className="store-detail-wrapper">
            <Navbar />
            <div className="store-header-banner">
                <div className="container">
                    <div className="store-info-box">
                        <div className="store-logo-large">
                            {/* এখন সব লোগো অরিজিনাল দেখাবে */}
                            <img src={displayLogo} alt={displayName} onError={(e) => e.target.src = "https://via.placeholder.com/80?text=Logo"} />
                        </div>
                        <div className="store-text">
                            <h1>{displayName} Coupon Codes & Offers</h1>
                            <p><VerifiedUserIcon className="v-icon" /> 100% Verified & Working Coupons</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container coupon-list-container">
                <div className="coupon-grid-layout">
                    <div className="store-sidebar">
                        <div className="sidebar-card">
                            <h3>About {displayName}</h3>
                            <p>Get the latest and working coupons for {displayName}. Save more on every purchase with handpicked deals.</p>
                        </div>
                    </div>

                    <div className="main-coupon-feed">
                        {coupons.map((cpn) => (
                            <div className="single-coupon-card" key={cpn.id}>
                                <div className="coupon-left">
                                    <div className="coupon-type-tag">{cpn.type}</div>
                                    <h3>{cpn.title}</h3>
                                    <p>{cpn.desc}</p>
                                </div>
                                <div className="coupon-right">
                                    <button className="get-code-btn">
                                        {cpn.type === "CODE" ? (
                                            <>
                                                <span className="code-text">{cpn.code}</span>
                                                <span className="btn-overlay">GET CODE</span>
                                            </>
                                        ) : "GET DEAL"}
                                    </button>
                                    <div className="used-count">Used by {Math.floor(Math.random() * 500) + 100} users today</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default StoreDetail;