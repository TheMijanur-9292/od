import React from 'react';
import Hero from "../components/Hero";
import FlashSale from "../components/FlashSale";
import TrendingCoupons from "../components/TrendingCoupons";
import TopBrands from "../components/TopBrands";
import HowItWorks from "../components/HowItWorks";
import ImpactStats from "../components/ImpactStats";
import UserReviews from "../components/UserReviews";
import FAQ from "../components/FAQ";

const Home = () => {
    return (
        <>
            <Hero />
            <FlashSale />
            <TrendingCoupons />
            <TopBrands />
            <HowItWorks />
            <ImpactStats />
            <UserReviews />
            <FAQ />
        </>
    );
};

export default Home;