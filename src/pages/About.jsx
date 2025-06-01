import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="">
      {/* ABOUT US Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className="h-[300px]" src={assets.chai} alt="About Amrit Chai" />
        <div className="flex flex-col justify-center gap-6 text-gray-600">
          <p>
            At <b>Amrit Chai</b>, we believe tea is not just a beverage — it's
            an emotion, a tradition, and a connection to India's soul. Born from
            a passion for purity and taste, our mission is to deliver
            handpicked, premium-quality tea directly from the gardens to your
            cup.
          </p>
          <p>
            We carefully source and blend our teas to maintain authenticity,
            aroma, and wellness benefits. Whether it's your morning boost or an
            evening unwind, Amrit Chai offers a cup that rejuvenates and
            connects you to nature.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To bring the richness of Indian tea culture to every home, ensuring
            every sip delivers purity, freshness, and warmth. We aim to create a
            community that celebrates wellness, flavor, and mindful living.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>100% Natural & Pure</b>
          <p className="text-gray-600">
            Our teas are free from chemicals and artificial flavors. Only the
            freshest, handpicked leaves make it to your cup.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Farm-to-Cup Freshness</b>
          <p className="text-gray-600">
            We work closely with tea growers to ensure ethical sourcing and
            maintain freshness at every stage of production.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Health & Wellness</b>
          <p className="text-gray-600">
            From digestive blends to immunity boosters, our teas support your
            health and well-being naturally.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
