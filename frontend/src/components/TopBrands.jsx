import React from 'react';
import './TopBrands.css';

const TopBrands = () => {
    // ৩০টি টপ ব্র্যান্ডের ডাটা
    const brandsList = [
        { id: 1, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 2, name: "Flipkart", logo: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg" },
        { id: 3, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { id: 4, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
        { id: 5, name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
        { id: 6, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { id: 7, name: "Myntra", logo: "https://www.vectorlogo.zone/logos/myntra/myntra-icon.svg" },
        { id: 8, name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
        { id: 9, name: "Swiggy", logo: "https://www.vectorlogo.zone/logos/swiggy/swiggy-icon.svg" },
        { id: 10, name: "Nykaa", logo: "https://www.vectorlogo.zone/logos/nykaa/nykaa-icon.svg" },
        { id: 11, name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg" },
        { id: 12, name: "KFC", logo: "https://www.vectorlogo.zone/logos/kfc/kfc-icon.svg" },
        { id: 13, name: "Puma", logo: "https://www.vectorlogo.zone/logos/puma/puma-icon.svg" },
        { id: 14, name: "Reebok", logo: "https://www.vectorlogo.zone/logos/reebok/reebok-icon.svg" },
        { id: 15, name: "Dell", logo: "https://www.vectorlogo.zone/logos/dell/dell-icon.svg" },
        { id: 16, name: "HP", logo: "https://www.vectorlogo.zone/logos/hp/hp-icon.svg" },
        { id: 17, name: "Lenovo", logo: "https://www.vectorlogo.zone/logos/lenovo/lenovo-icon.svg" },
        { id: 18, name: "Microsoft", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
        { id: 19, name: "Google", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
        { id: 20, name: "Uber", logo: "https://www.vectorlogo.zone/logos/uber/uber-icon.svg" },
        { id: 21, name: "Ola", logo: "https://www.vectorlogo.zone/logos/olacabs/olacabs-icon.svg" },
        { id: 22, name: "MakeMyTrip", logo: "https://www.vectorlogo.zone/logos/makemytrip/makemytrip-icon.svg" },
        { id: 23, name: "Ajio", logo: "https://www.vectorlogo.zone/logos/ajio/ajio-icon.svg" },
        { id: 24, name: "Tata Cliq", logo: "https://www.vectorlogo.zone/logos/tatacliq/tatacliq-icon.svg" },
        { id: 25, name: "Pepperfry", logo: "https://www.vectorlogo.zone/logos/pepperfry/pepperfry-icon.svg" },
        { id: 26, name: "Urban Co.", logo: "https://www.vectorlogo.zone/logos/urbancompany/urbancompany-icon.svg" },
        { id: 27, name: "BookMyShow", logo: "https://www.vectorlogo.zone/logos/bookmyshow/bookmyshow-icon.svg" },
        { id: 28, name: "BigBasket", logo: "https://www.vectorlogo.zone/logos/bigbasket/bigbasket-icon.svg" },
        { id: 29, name: "Lenskart", logo: "https://www.vectorlogo.zone/logos/lenskart/lenskart-icon.svg" },
        { id: 30, name: "Boat", logo: "https://www.vectorlogo.zone/logos/boat/boat-icon.svg" }
    ];

    // স্লাইড নিরবচ্ছিন্ন করার জন্য লিস্টটি ডাবল করা হলো
    const duplicatedBrands = [...brandsList, ...brandsList];

    return (
        <section className="top-brands-section">
            <div className="brands-header">
                <h2>Top Brands</h2>
            </div>

            <div className="marquee-container">
                <div className="marquee-track">
                    {duplicatedBrands.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            <div className="brand-logo-box">
                                <img src={brand.logo} alt={brand.name} />
                            </div>
                            <span className="brand-name">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBrands;