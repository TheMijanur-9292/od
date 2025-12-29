import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const Hero = () => {
    const originalImages = [slide1, slide2, slide3, slide4, slide5];
    
    // Infinite স্লাইডিং এর জন্য ক্লোনিং (শুরুতে শেষটি এবং শেষে প্রথমটি যোগ করা হলো)
    const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];
    
    const [currentIndex, setCurrentIndex] = useState(1); // ১ থেকে শুরু কারণ ০ তে ক্লোন আছে
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);

    // অটো প্লে লজিক
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 3500);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    };

    // যখন স্লাইডার ক্লোন ইমেজে পৌঁছাবে, তখন এনিমেশন ছাড়া মেইন ইমেজে জাম্প করবে
    useEffect(() => {
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 800); // ৮০০মি.সে. হলো সিএসএস ট্রানজিশন টাইম
        }
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length - 2);
            }, 800);
        }
    }, [currentIndex, images.length]);

    const getTransformValue = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1024) {
            // মোবাইল ও প্যাড: ১০০% উইডথ মুভমেন্ট
            return `translateX(-${currentIndex * 100}%)`;
        } else {
            // পিসি: ৭০% উইডথ + ১৫% অফসেট (পাশের ছবি দেখানোর জন্য)
            // ক্যালকুলেশন: -(ইন্ডেক্স * (উইডথ + মার্জিন))
            return `translateX(calc(-${currentIndex * 70}% + 13.5%))`;
        }
    };

    return (
        <section className="hero-container">
            <div 
                className="slider-track" 
                style={{ 
                    transform: getTransformValue(),
                    transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
            >
                {images.map((img, index) => (
                    <div 
                        className={`slide-item ${index === currentIndex ? 'active' : ''}`} 
                        key={index}
                    >
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;