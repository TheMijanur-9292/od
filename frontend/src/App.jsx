/* 📂 Location: src/App.jsx */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stores from './pages/Stores';
import StoreDetail from './pages/StoreDetail'; // নতুন পেজ ইম্পোর্ট
import './App.css';
import TodaysDeals from './pages/TodaysDeals'; // এটি ইম্পোর্ট করুন
import Blog from './pages/Blog';
import Contact from './pages/Contact';
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

function App() {
  return (
    <Router>
  <div className="App">
    <Navbar />  {/* ১বার এখানে কল করা হয়েছে */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/todays-deals" element={<TodaysDeals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fashion" element={<FashionApparel />} />
        <Route path="/category/electronics-&-gadgets" element={<ElectronicsGadgets />} />
        <Route path="/category/food-&-dining-" element={<FoodDining />} />
        <Route path="/category/travel-&-hotels" element={<TravelHotels />} />
        <Route path="/category/beauty-&-cosmetics" element={<BeautyCosmetics />} />
        <Route path="/category/home-&-furniture" element={<HomeFurniture />} />
        <Route path="/category/gifts-&-others" element={<GiftsOthers />} />
        <Route path="/category/upi-&-recharge" element={<UPICashback />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-&-conditions" element={<TermsConditions />} />
        <Route path="/privacy-&-policy" element={<PrivacyPolicy />} />
      </Routes>
    </main>
    <Footer />  {/* ১বার এখানে কল করা হয়েছে */}
  </div>
</Router>
  );
}

export default App;