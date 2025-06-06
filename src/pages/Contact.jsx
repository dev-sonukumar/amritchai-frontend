import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.chai} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">Dwarka New Delhi, India</p>
          <p className=" text-gray-500">
            Tel: +91 8810260166
            <br /> Email: info@amritchai.in
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Organic Tea at your Door
          </p>
          <p className=" text-gray-500">Learn more about our Services</p>
          <Link to={"/collection"}>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Services
            </button>
          </Link>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
