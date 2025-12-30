/* 📂 Location: src/components/ScrollToTop.jsx */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই pathname (URL) চেঞ্জ হবে, উইন্ডো টপে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;