/* 📂 Location: src/App.jsx */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stores from './pages/Stores';
import StoreDetail from './pages/StoreDetail';
import './App.css';
import TodaysDeals from './pages/TodaysDeals';
import Blog from './pages/Blog';
import Contact from './pages/Contact'; // তোমার বর্তমান ফাইল
import FashionApparel from './pages/FashionApparel';
import ElectronicsGadgets from './pages/ElectronicsGadgets';
import FoodDining from './pages/FoodDining';
import TravelHotels from './pages/TravelHotels';
import BeautyCosmetics from './pages/BeautyCosmetics';
import HomeFurniture from './pages/HomeFurniture';
import GiftsOthers from './pages/GiftsOthers';
import UPICashback from './pages/UPICashback';
import AboutUs from './pages/AboutUs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ২. এখানে বসিয়ে দাও, যাতে এটি সব রাউটের জন্য কাজ করে */}
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/todays-deals" element={<TodaysDeals />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* ✅ এখানে পাথ আপডেট করা হয়েছে যাতে ফুটারে থাকা লিঙ্ক কাজ করে */}
            <Route path="/contact-us" element={<Contact />} />
            
            <Route path="/fashion" element={<FashionApparel />} />
            <Route path="/category/electronics-&-gadgets" element={<ElectronicsGadgets />} />
            <Route path="/category/food-&-dining-" element={<FoodDining />} />
            <Route path="/category/travel-&-hotels" element={<TravelHotels />} />
            <Route path="/category/beauty-&-cosmetics" element={<BeautyCosmetics />} />
            <Route path="/category/home-&-furniture" element={<HomeFurniture />} />
            <Route path="/category/gifts-&-others" element={<GiftsOthers />} />
            <Route path="/category/upi-&-recharge" element={<UPICashback />} />
            
            <Route path="/about-us" element={<AboutUs />} />
            
            {/* ✅ এই পাথগুলো ফুটারের সাথে হুবহু মিলানো হয়েছে */}
            <Route path="/terms-&-conditions" element={<TermsConditions />} />
            <Route path="/privacy-&-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;