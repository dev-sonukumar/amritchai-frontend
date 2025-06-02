import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";

import Combo from "./pages/categoriesPages/Combo";

import Masala from "./pages/categoriesPages/Masala";
import Elaichi from "./pages/categoriesPages/Elaichi";
import Ginger from "./pages/categoriesPages/Ginger";
import Chocolate from "./pages/categoriesPages/Chocolate";
import Classic from "./pages/categoriesPages/Classic";
import Disclaimer from "./pages/EssentialPages/Disclaimer";
import PrivacyPolicy from "./pages/EssentialPages/PrivacyPolicy";
import RefundPolicy from "./pages/EssentialPages/RefundPolicy";
import ShippingPolicy from "./pages/EssentialPages/ShippingPolicy";
import TermsAndConditions from "./pages/EssentialPages/TermsAndConditions";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/masala" element={<Masala />} />
        <Route path="/elaichi" element={<Elaichi />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/ginger" element={<Ginger />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/shippingPolicy" element={<ShippingPolicy />} />
        <Route path="/termsAndCondition" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
