import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#FFF8F1] text-gray-700 px-4 md:px-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Brand Info */}
        <div>
          <img src={assets.logo} className="mb-5 w-36" alt="Amrit Chai logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Amrit Chai brings you the soul of India in every sip. Our
            handcrafted blends — from bold Masala to soothing Elaichi — are made
            with love and the finest ingredients. Discover warmth, flavor, and
            tradition brewed to perfection.
          </p>
        </div>

        {/* Company Links */}
        <div className="my-auto">
          <p className="text-xl font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping-returns">Shipping & Returns</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="my-auto">
          <p className="text-xl font-semibold mb-5">CONTACT</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+919315040549">+91-8810260166</a>
            </li>
            <li>
              <a href="mailto:contact@amritchai.in">contact@amritchai.in</a>
            </li>
            <li>Najafgarh, New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 Amrit Chai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
