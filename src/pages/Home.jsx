import React from "react";
import Hero from "../components/Hero";
// import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
// import MainBanner from "../components/MainBanner";
// import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Call from "../components/Call";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      {/* <MainBanner /> */}
      {/* <LatestCollection /> */}
      {/* <BottomBanner /> */}
      <BestSeller />
      <Call />
      {/* <OurPolicy /> */}
      {/* <NewsletterBox /> */}
      {/* Floating Contact Buttons */}
      <FloatingContactButtons phoneNumber="919540050510" />
    </div>
  );
};

export default Home;
